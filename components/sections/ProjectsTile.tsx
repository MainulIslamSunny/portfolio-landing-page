import Tile from "@/components/ui/Tile";
import Label from "@/components/ui/Label";
import { PROJECTS } from "@/lib/data";
import { ExternalLink, Github } from "lucide-react";

const statusStyles: Record<string, string> = {
  "In Progress": "text-amber border-[rgba(245,158,11,0.3)] bg-[rgba(245,158,11,0.07)]",
  Thesis:        "text-accent2 border-[rgba(167,139,250,0.3)] bg-[rgba(167,139,250,0.07)]",
  Live:          "text-green border-[rgba(52,211,153,0.3)] bg-[rgba(52,211,153,0.07)]",
};

export default function ProjectsTile() {
  const featured = PROJECTS.find((p) => p.featured);
  const rest = PROJECTS.filter((p) => !p.featured);

  return (
    <Tile className="col-span-12 md:col-span-6">
      <Label>Projects</Label>
      <div className="flex flex-col gap-[9px]">

        {/* Featured project — full width */}
        {featured && (
          <div className="bg-white/[0.02] border border-white/[0.06] rounded-xl p-[14px] hover:border-[rgba(99,130,255,0.25)] hover:bg-[rgba(99,130,255,0.05)] hover:-translate-y-[2px] transition-all duration-200">
            <div className="flex items-start justify-between mb-2">
              <span className="text-[18px]">{featured.icon}</span>
              {featured.status && (
                <span className={`font-mono text-[8px] border px-[6px] py-[2px] rounded-[4px] ${statusStyles[featured.status]}`}>
                  ● {featured.status}
                </span>
              )}
            </div>
            <div className="font-sans text-[13px] font-bold text-[#EEF0FF] mb-[5px]">{featured.name}</div>
            <p className="text-[11px] text-muted mb-2 leading-[1.6]">{featured.description}</p>
            <div className="font-mono text-[9px] text-dim leading-[1.6]">{featured.tech.join(" · ")}</div>
          </div>
        )}

        {/* Rest — 2 col grid */}
        <div className="grid grid-cols-2 gap-[9px]">
          {rest.map((proj) => (
            <div key={proj.name} className="bg-white/[0.02] border border-white/[0.06] rounded-xl p-[14px] hover:border-[rgba(99,130,255,0.25)] hover:bg-[rgba(99,130,255,0.05)] hover:-translate-y-[2px] transition-all duration-200">
              <div className="flex items-start justify-between mb-2">
                <span className="text-[18px]">{proj.icon}</span>
                {proj.status && (
                  <span className={`font-mono text-[8px] border px-[6px] py-[2px] rounded-[4px] ${statusStyles[proj.status] ?? ""}`}>
                    {proj.status}
                  </span>
                )}
              </div>
              <div className="font-sans text-[13px] font-bold text-[#EEF0FF] mb-[5px]">{proj.name}</div>
              <p className="text-[11px] text-muted mb-2 leading-[1.6]">{proj.description}</p>
              <div className="font-mono text-[9px] text-dim leading-[1.6] mb-2">{proj.tech.join(" · ")}</div>
              {(proj.github || proj.live) && (
                <div className="flex gap-[6px]">
                  {proj.github && (
                    <a href={proj.github} target="_blank" rel="noopener noreferrer"
                      className="inline-flex items-center gap-[4px] font-mono text-[9px] text-accent border border-[rgba(99,130,255,0.2)] px-2 py-[2px] rounded-[4px] hover:bg-[rgba(99,130,255,0.1)] transition-all">
                      <Github size={9} /> Code
                    </a>
                  )}
                  {proj.live && (
                    <a href={proj.live} target="_blank" rel="noopener noreferrer"
                      className="inline-flex items-center gap-[4px] font-mono text-[9px] text-accent border border-[rgba(99,130,255,0.2)] px-2 py-[2px] rounded-[4px] hover:bg-[rgba(99,130,255,0.1)] transition-all">
                      <ExternalLink size={9} /> Live
                    </a>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </Tile>
  );
}
