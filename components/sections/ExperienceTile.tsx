import Tile from "@/components/ui/Tile";
import Label from "@/components/ui/Label";
import { EXPERIENCE } from "@/lib/data";

const dotColor: Record<string, string> = {
  accent:  "bg-accent",
  accent2: "bg-accent2",
};

export default function ExperienceTile() {
  return (
    <Tile className="col-span-12 md:col-span-6">
      <Label>Experience</Label>
      <div className="flex flex-col gap-0">
        {EXPERIENCE.map((exp, i) => (
          <div key={exp.company} className="flex gap-[14px] pb-[18px] mb-[18px] last:pb-0 last:mb-0 border-b border-white/[0.05] last:border-b-0">
            {/* Timeline dot */}
            <div className="flex flex-col items-center pt-[5px] flex-shrink-0">
              <div className={`w-2 h-2 rounded-full flex-shrink-0 ${dotColor[exp.color]}`} />
              {i < EXPERIENCE.length - 1 && (
                <div className="w-px flex-grow bg-[rgba(99,130,255,0.2)] mt-[6px]" />
              )}
            </div>

            <div className="flex-1">
              <div className="font-sans text-[14px] font-bold text-[#EEF0FF] mb-[3px]">{exp.role}</div>
              <div className={`font-mono text-[11px] mb-[3px] ${exp.color === "accent2" ? "text-accent2" : "text-accent"}`}>
                {exp.company}
              </div>
              <div className="inline-flex items-center gap-[5px] font-mono text-[9px] text-muted bg-white/[0.04] border border-white/[0.07] px-2 py-[2px] rounded-[5px] mb-2">
                🗓 {exp.period} · {exp.duration}
              </div>
              <p className="text-[12px] text-muted leading-[1.75] mb-[10px]">{exp.description}</p>
              <ul className="flex flex-col gap-[5px]">
                {exp.impacts.map((impact, j) => (
                  <li key={j} className="font-mono text-[10px] text-muted flex items-start gap-[7px] leading-[1.55]">
                    <span className="text-accent flex-shrink-0 mt-[1px]">→</span>
                    <span>{impact}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </Tile>
  );
}
