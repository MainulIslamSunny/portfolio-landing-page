import { NextResponse } from "next/server";
import { fetchGitHubStats } from "@/lib/github";
import { PROFILE } from "@/lib/data";

export const revalidate = 3600; // ISR: refresh every hour

export async function GET() {
  const stats = await fetchGitHubStats(PROFILE.githubUsername);

  if (!stats) {
    return NextResponse.json({ error: "GitHub API unavailable" }, { status: 503 });
  }

  return NextResponse.json({
    repos: stats.user.public_repos,
    followers: stats.user.followers,
    stars: stats.totalStars,
    forks: stats.totalForks,
    languages: stats.languages,
  });
}
