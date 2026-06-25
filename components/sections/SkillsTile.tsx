import Tile from "@/components/ui/Tile";
import Label from "@/components/ui/Label";
import { SKILLS } from "@/lib/data";

const colorMap = {
  accent: "border-[rgba(99,130,255,0.3)] text-accent bg-[rgba(99,130,255,0.06)]",
  amber:  "border-[rgba(245,158,11,0.3)] text-amber bg-[rgba(245,158,11,0.06)]",
  green:  "border-[rgba(52,211,153,0.3)] text-green bg-[rgba(52,211,153,0.06)]",
  dim:    "border-white/10 text-muted bg-white/[0.03]",
};

const catColors: Record<string, string> = {
  accent: "text-accent",
  amber:  "text-amber",
  green:  "text-green",
};

export default function SkillsTile() {
  return (
    <Tile className="col-span-12 md:col-span-7">
      <Label>Technical Skills</Label>
      <div className="flex flex-col gap-4">
        {SKILLS.map((group) => (
          <div key={group.category}>
            <div className={`font-mono text-[9px] font-medium tracking-[0.12em] uppercase mb-2 ${catColors[group.color]}`}>
              {group.category}
            </div>
            <div className="flex flex-wrap gap-[5px]">
              {group.items.map((item) => (
                <span
                  key={item}
                  className={`px-[10px] py-[4px] rounded-md font-mono text-[10px] font-medium border tracking-[0.02em] transition-transform duration-150 hover:-translate-y-[1px] hover:shadow-[0_4px_12px_rgba(0,0,0,0.3)] cursor-default ${colorMap[group.color]}`}
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Tile>
  );
}
