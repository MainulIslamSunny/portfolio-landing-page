import Tile from "@/components/ui/Tile";
import Label from "@/components/ui/Label";
import { AWARDS } from "@/lib/data";

export default function AwardsTile() {
  return (
    <Tile className="col-span-12 sm:col-span-4 md:col-span-3">
      <Label>Recognition</Label>
      <div className="flex flex-col gap-[13px]">
        {AWARDS.map((award) => (
          <div key={award.title} className="flex gap-[11px] items-start">
            <div className="w-[30px] h-[30px] rounded-lg bg-[rgba(245,158,11,0.08)] border border-[rgba(245,158,11,0.15)] flex items-center justify-center text-[12px] flex-shrink-0">
              {award.icon}
            </div>
            <div>
              <div className="font-sans text-[12px] font-semibold text-[#EEF0FF] leading-[1.35] mb-[2px]">
                {award.title}
              </div>
              <div className="font-mono text-[9px] text-muted">{award.org}</div>
            </div>
          </div>
        ))}
      </div>
    </Tile>
  );
}
