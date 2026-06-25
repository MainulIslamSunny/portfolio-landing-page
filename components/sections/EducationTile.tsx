import Tile from "@/components/ui/Tile";
import Label from "@/components/ui/Label";
import { EDUCATION } from "@/lib/data";

export default function EducationTile() {
  return (
    <Tile className="col-span-12 sm:col-span-4 md:col-span-3">
      <Label>Education</Label>

      <div className="w-[46px] h-[46px] rounded-xl bg-[rgba(99,130,255,0.08)] border border-[rgba(99,130,255,0.15)] flex items-center justify-center text-[22px] mb-4">
        🎓
      </div>

      <div className="font-sans text-[13px] font-bold text-[#EEF0FF] leading-[1.3] mb-[5px]">
        {EDUCATION.institution}
      </div>
      <div className="font-mono text-[10px] text-accent mb-[3px]">{EDUCATION.degree}</div>
      <div className="font-mono text-[9px] text-muted mb-5">
        {EDUCATION.period} · {EDUCATION.location}
      </div>

      <div
        className="font-sans text-[50px] font-extrabold tracking-[-2px] leading-[1] mb-[3px]"
        style={{
          background: "linear-gradient(135deg, #6382FF, #2DD4BF)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
        }}
      >
        {EDUCATION.cgpa}
      </div>
      <div className="font-mono text-[9px] text-muted mb-5">out of {EDUCATION.scale} CGPA</div>

      <div className="pt-4 border-t border-white/[0.05]">
        <div className="font-mono text-[9px] text-dim tracking-[0.1em] uppercase mb-2">Key Modules</div>
        <div className="flex flex-wrap gap-1">
          {EDUCATION.courses.map((c) => (
            <span
              key={c}
              className="font-mono text-[9px] text-muted bg-white/[0.04] border border-white/[0.07] px-2 py-[2px] rounded-[5px]"
            >
              {c}
            </span>
          ))}
        </div>
      </div>
    </Tile>
  );
}
