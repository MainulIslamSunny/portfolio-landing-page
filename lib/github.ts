export interface GitHubUser {
  public_repos: number;
  followers: number;
  following: number;
  avatar_url: string;
  name: string;
  bio: string;
}

export interface GitHubRepo {
  id: number;
  name: string;
  html_url: string;
  description: string | null;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  updated_at: string;
  fork: boolean;
  languages_url: string;
}

export interface GitHubStats {
  user: GitHubUser;
  repos: GitHubRepo[];
  totalStars: number;
  totalForks: number;
  languages: Record<string, number>;
}

export async function fetchGitHubStats(username: string): Promise<GitHubStats | null> {
  try {
    const headers: HeadersInit = {};
    // Add token if available (increases rate limit from 60 to 5000 req/hr)
    if (process.env.GITHUB_TOKEN) {
      headers["Authorization"] = `Bearer ${process.env.GITHUB_TOKEN}`;
    }

    const [userRes, reposRes] = await Promise.all([
      fetch(`https://api.github.com/users/${username}`, {
        headers,
        next: { revalidate: 3600 }, // Cache for 1 hour (ISR)
      }),
      fetch(`https://api.github.com/users/${username}/repos?per_page=100&sort=updated`, {
        headers,
        next: { revalidate: 3600 },
      }),
    ]);

    if (!userRes.ok || !reposRes.ok) return null;

    const user: GitHubUser = await userRes.json();
    const repos: GitHubRepo[] = await reposRes.json();

    const totalStars = repos.reduce((s, r) => s + (r.stargazers_count || 0), 0);
    const totalForks = repos.reduce((s, r) => s + (r.forks_count || 0), 0);

    // Aggregate language bytes from top 20 non-fork repos
    const ownRepos = repos.filter((r) => !r.fork).slice(0, 20);
    const langResults = await Promise.allSettled(
      ownRepos.map((r) =>
        fetch(r.languages_url, { headers, next: { revalidate: 3600 } }).then((res) =>
          res.json()
        )
      )
    );

    const languages: Record<string, number> = {};
    langResults.forEach((result) => {
      if (result.status === "fulfilled") {
        Object.entries(result.value as Record<string, number>).forEach(([lang, bytes]) => {
          languages[lang] = (languages[lang] || 0) + bytes;
        });
      }
    });

    return { user, repos, totalStars, totalForks, languages };
  } catch {
    return null;
  }
}
