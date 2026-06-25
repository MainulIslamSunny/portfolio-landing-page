import { fetchGitHubStats } from "@/lib/github";
import { PROFILE } from "@/lib/data";
import { ToastProvider } from "@/components/ui/Toast";

// Sections
import ProfileTile    from "@/components/sections/ProfileTile";
import GitHubTile     from "@/components/sections/GitHubTile";
import SkillsTile     from "@/components/sections/SkillsTile";
import ExperienceTile from "@/components/sections/ExperienceTile";
import ProjectsTile   from "@/components/sections/ProjectsTile";
import ContribTile    from "@/components/sections/ContribTile";
import ReposTile      from "@/components/sections/ReposTile";
import EducationTile  from "@/components/sections/EducationTile";
import AwardsTile     from "@/components/sections/AwardsTile";
import ContactTile    from "@/components/sections/ContactTile";

// Revalidate the page every hour (ISR)
export const revalidate = 3600;

export default async function Home() {
  // Server-side GitHub fetch — no loading state, no CORS issues
  const github = await fetchGitHubStats(PROFILE.githubUsername);

  return (
    <ToastProvider>
      {/*
        Bento grid layout
        12-col on desktop  →  5+7 / 5+7 / 6+6 / 12 / 12 / 3+3+6
        Responsive: stacks on mobile
      */}
      <div className="grid grid-cols-12 gap-[14px]">

        {/* Row 1–2: Profile + GitHub stats + Skills */}
        <ProfileTile repoCount={github?.user.public_repos} />
        <GitHubTile />
        <SkillsTile />

        {/* Row 3: Experience + Projects */}
        <ExperienceTile />
        <ProjectsTile />

        {/* Row 4: Contribution graph */}
        <ContribTile />

        {/* Row 5: Live repos */}
        <ReposTile repos={github?.repos ?? []} />

        {/* Row 6: Education + Awards + Contact */}
        <EducationTile />
        <AwardsTile />
        <ContactTile />

      </div>

      {/* Footer */}
      <footer className="mt-12 pb-6 text-center font-mono text-[10px] text-dim">
        <span>Built with Next.js 14 · TailwindCSS · Framer Motion · Deployed on Vercel</span>
        <span className="mx-3 opacity-30">·</span>
        <a href={PROFILE.github} target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
          View source on GitHub
        </a>
      </footer>
    </ToastProvider>
  );
}
