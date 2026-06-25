"use client";

import { useEffect, useRef, useState } from "react";
import Tile from "@/components/ui/Tile";
import Label from "@/components/ui/Label";
import { PROFILE } from "@/lib/data";
import { getLangColor } from "@/lib/utils";

interface GitHubData {
  repos: number;
  followers: number;
  stars: number;
  forks: number;
  languages: Record<string, number>;
}

function animateCount(el: HTMLElement, target: number, duration = 900) {
  const start = performance.now();
  const step = (now: number) => {
    const p = Math.min((now - start) / duration, 1);
    el.textContent = String(Math.round(p * target));
    if (p < 1) requestAnimationFrame(step);
    else { el.textContent = String(target); el.classList.add("count-up"); }
  };
  requestAnimationFrame(step);
}

export default function GitHubTile() {
  const [data, setData] = useState<GitHubData | null>(null);
  const [live, setLive] = useState(false);
  const reposRef = useRef<HTMLSpanElement>(null);
  const followersRef = useRef<HTMLSpanElement>(null);
  const starsRef = useRef<HTMLSpanElement>(null);
  const forksRef = useRef<HTMLSpanElement>(null);
  const barsAnimated = useRef(false);

  useEffect(() => {
    async function load() {
      try {
        const res = await fetch(`/api/github`);
        if (!res.ok) return;
        const d: GitHubData = await res.json();
        setData(d);
        setLive(true);
        if (reposRef.current) animateCount(reposRef.current, d.repos);
        if (followersRef.current) animateCount(followersRef.current, d.followers);
        if (starsRef.current) animateCount(starsRef.current, d.stars);
        if (forksRef.current) animateCount(forksRef.current, d.forks);
      } catch {}
    }
    load();
  }, []);

  useEffect(() => {
    if (data && !barsAnimated.current) {
      barsAnimated.current = true;
      const total = Object.values(data.languages).reduce((s, v) => s + v, 0);
      if (total > 0) {
        const pct = (keys: string[]) =>
          keys.reduce((s, k) => s + Math.round(((data.languages[k] || 0) / total) * 100), 0);
        const percents = {
          js: pct(["JavaScript", "TypeScript"]),
          py: pct(["Python", "Jupyter Notebook"]),
          php: pct(["PHP"]),
          html: pct(["HTML", "CSS"]),
        };
        setTimeout(() => {
          Object.entries(percents).forEach(([id, val]) => {
            const bar = document.getElementById(`bar-${id}`);
            const label = document.getElementById(`pct-${id}`);
            if (bar) bar.style.width = `${val}%`;
            if (label) label.textContent = `${val}%`;
          });
        }, 350);
      }
    }
  }, [data]);

  const stats = [
    { ref: reposRef, label: "Public Repos" },
    { ref: followersRef, label: "Followers" },
    { ref: starsRef, label: "Total Stars" },
    { ref: forksRef, label: "Total Forks" },
  ];

  const langs = [
    { id: "js", label: "JavaScript / TS", defaultW: 45, color: "#6382FF" },
    { id: "py", label: "Python", defaultW: 25, color: "#A78BFA" },
    { id: "php", label: "PHP", defaultW: 20, color: "#F59E0B" },
    { id: "html", label: "HTML / CSS", defaultW: 10, color: "#2DD4BF" },
  ];

  return (
    <Tile className="col-span-12 md:col-span-7">
      <div className="flex items-center justify-between mb-3">
        <Label>Code Activity</Label>
        <div className={`flex items-center gap-[5px] font-mono text-[9px] text-green transition-opacity duration-300 ${live ? "opacity-100" : "opacity-0"}`}>
          <span className="w-[5px] h-[5px] rounded-full bg-green pulse-green" />
          Live · GitHub API
        </div>
      </div>

      {/* Stat cards */}
      <div className="grid grid-cols-4 gap-[9px] mb-[18px]">
        {stats.map(({ ref, label }) => (
          <div key={label} className={`bg-white/[0.025] rounded-[10px] p-[11px_10px] text-center transition-all duration-300 ${live ? "border border-[rgba(99,130,255,0.2)]" : "border border-white/[0.05]"} hover:scale-105`}>
            <div className="font-sans text-[20px] font-extrabold text-accent tracking-[-0.5px]">
              <span ref={ref} className={live ? "" : "text-dim"}>–</span>
            </div>
            <div className="font-mono text-[9px] text-muted mt-[3px] tracking-[0.03em]">{label}</div>
          </div>
        ))}
      </div>

      {/* Language bars */}
      <div className="grid grid-cols-2 gap-[10px] mb-[14px]">
        {langs.map((l) => (
          <div key={l.id}>
            <div className="flex justify-between font-mono text-[10px] text-muted mb-1">
              <span>{l.label}</span>
              <span id={`pct-${l.id}`}>–</span>
            </div>
            <div className="h-[3px] rounded-full bg-white/[0.06] overflow-hidden">
              <div
                id={`bar-${l.id}`}
                className="h-full rounded-full lang-bar"
                style={{ width: "0%", background: l.color }}
                data-w={l.defaultW}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between flex-wrap gap-2">
        <a href={PROFILE.github} target="_blank" rel="noopener noreferrer"
          className="inline-flex items-center gap-[6px] font-mono text-[10px] text-muted border border-white/[0.07] px-3 py-[5px] rounded-[7px] hover:border-accent hover:text-accent transition-all">
          github.com/{PROFILE.githubUsername}
        </a>
        <span className="font-mono text-[9px] text-dim">{live ? "Updated just now" : ""}</span>
      </div>
    </Tile>
  );
}
