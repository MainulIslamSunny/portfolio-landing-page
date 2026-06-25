import Tile from "@/components/ui/Tile";
import Label from "@/components/ui/Label";
import { PROFILE } from "@/lib/data";
import Image from "next/image";

export default function ContribTile() {
  return (
    <Tile className="col-span-12">
      <div className="flex items-center justify-between mb-4 flex-wrap gap-2">
        <Label>GitHub Contributions</Label>
        <span className="font-mono text-[9px] text-dim">Live · Past 12 months</span>
      </div>

      <div className="w-full overflow-x-auto rounded-lg">
        <Image
          src={`https://ghchart.rshah.org/6382FF/${PROFILE.githubUsername}`}
          alt={`${PROFILE.name} GitHub contribution graph`}
          width={900}
          height={128}
          className="w-full rounded-lg opacity-90"
          style={{ filter: "hue-rotate(220deg) saturate(1.2)" }}
          unoptimized
        />
      </div>

      <div className="flex items-center justify-between mt-[10px] flex-wrap gap-2">
        <span className="font-mono text-[9px] text-dim">Each square = 1 day · Darker = more commits</span>
        <a
          href={PROFILE.github}
          target="_blank"
          rel="noopener noreferrer"
          className="font-mono text-[10px] text-muted border border-white/[0.07] px-3 py-[5px] rounded-[7px] hover:border-accent hover:text-accent transition-all"
        >
          View full activity →
        </a>
      </div>
    </Tile>
  );
}
