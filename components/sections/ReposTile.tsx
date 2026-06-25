import Tile from "@/components/ui/Tile";
import Label from "@/components/ui/Label";
import { PROFILE } from "@/lib/data";
import { getLangColor, relTime } from "@/lib/utils";
import { Star } from "lucide-react";
import type { GitHubRepo } from "@/lib/github";

export default function ReposTile({ repos }: { repos: GitHubRepo[] }) {
  const display = repos.filter((r) => !r.fork).slice(0, 6);

  return (
    <Tile className="col-span-12">
      <div className="flex items-center justify-between mb-4 flex-wrap gap-2">
        <Label>Recent Repositories</Label>
        <span className="font-mono text-[9px] text-dim">Live from GitHub API</span>
      </div>

      {display.length === 0 ? (
        <div className="text-center py-8 font-mono text-[11px] text-muted">
          No public repositories found.{" "}
          <a href={PROFILE.github} target="_blank" rel="noopener noreferrer" className="text-accent">
            View on GitHub →
          </a>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[10px]">
          {display.map((repo) => (
            <a
              key={repo.id}
              href={repo.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/[0.02] border border-white/[0.06] rounded-xl p-4 flex flex-col gap-2 hover:border-[rgba(99,130,255,0.3)] hover:bg-[rgba(99,130,255,0.05)] hover:-translate-y-[2px] transition-all duration-200 no-underline text-inherit"
            >
              <div className="flex items-start justify-between gap-2">
                <div className="font-sans text-[13px] font-bold text-accent leading-tight">{repo.name}</div>
                {repo.fork && (
                  <span className="font-mono text-[8px] text-muted border border-white/10 px-[5px] py-[1px] rounded flex-shrink-0">
                    fork
                  </span>
                )}
              </div>
              <p className="text-[11px] text-muted leading-[1.6] flex-grow">
                {repo.description || "No description provided."}
              </p>
              <div className="flex items-center gap-3 flex-wrap">
                {repo.language && (
                  <span className="flex items-center gap-1 font-mono text-[9px] text-muted">
                    <span
                      className="w-2 h-2 rounded-full flex-shrink-0"
                      style={{ background: getLangColor(repo.language) }}
                    />
                    {repo.language}
                  </span>
                )}
                <span className="flex items-center gap-[3px] font-mono text-[9px] text-muted">
                  <Star size={9} /> {repo.stargazers_count}
                </span>
                <span className="font-mono text-[9px] text-dim ml-auto">{relTime(repo.updated_at)}</span>
              </div>
            </a>
          ))}
        </div>
      )}
    </Tile>
  );
}
