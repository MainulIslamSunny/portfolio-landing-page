"use client";

import { useEffect, useRef } from "react";
import Tile from "@/components/ui/Tile";
import { useToast } from "@/components/ui/Toast";
import { PROFILE } from "@/lib/data";
import { Github, Linkedin, Globe, Download, Mail } from "lucide-react";

export default function ProfileTile({ repoCount }: { repoCount?: number }) {
  const { showToast } = useToast();
  const typedRef = useRef<HTMLSpanElement>(null);

  // Typewriter effect
  useEffect(() => {
    const roles = PROFILE.typingRoles;
    let ri = 0, ci = 0, deleting = false;
    let timer: ReturnType<typeof setTimeout>;

    function type() {
      const el = typedRef.current;
      if (!el) return;
      const cur = roles[ri];
      if (!deleting) {
        el.textContent = cur.slice(0, ci + 1);
        ci++;
        if (ci === cur.length) { deleting = true; timer = setTimeout(type, 2100); return; }
        timer = setTimeout(type, 75);
      } else {
        el.textContent = cur.slice(0, ci - 1);
        ci--;
        if (ci === 0) { deleting = false; ri = (ri + 1) % roles.length; timer = setTimeout(type, 260); return; }
        timer = setTimeout(type, 42);
      }
    }
    timer = setTimeout(type, 1000);
    return () => clearTimeout(timer);
  }, []);

  function copyEmail() {
    navigator.clipboard?.writeText(PROFILE.email)
      .then(() => showToast("✓ Email copied"))
      .catch(() => showToast(`Email: ${PROFILE.email}`));
  }

  const metrics = [
    ...PROFILE.metrics,
    { value: repoCount != null ? String(repoCount) : "–", label: "REPOS" },
  ];

  return (
    <Tile profile className="col-span-12 md:col-span-5 row-span-2">
      <div className="flex flex-col h-full">
        {/* Avatar */}
        <div className="relative w-[72px] h-[72px] mb-5 flex-shrink-0">
          <div className="w-[72px] h-[72px] rounded-full bg-gradient-to-br from-accent to-accent2 flex items-center justify-center text-2xl font-extrabold text-white tracking-tighter shadow-[0_0_0_3px_rgba(99,130,255,0.2),0_0_24px_rgba(99,130,255,0.15)]">
            {PROFILE.initials}
          </div>
          <div className="absolute bottom-[3px] right-[3px] w-[14px] h-[14px] rounded-full bg-green border-2 border-surface pulse-green" title="Available for opportunities" />
        </div>

        {/* Status */}
        <div className="inline-flex items-center gap-[6px] font-mono text-[9px] text-green bg-[rgba(52,211,153,0.06)] border border-[rgba(52,211,153,0.2)] px-[10px] py-[3px] rounded-full mb-[10px] tracking-[0.06em] self-start">
          <span className="w-[5px] h-[5px] rounded-full bg-green pulse-green flex-shrink-0" />
          Open to work · Remote / Hybrid
        </div>

        {/* Location */}
        <div className="inline-flex items-center gap-[6px] font-mono text-[10px] text-muted mb-3 tracking-[0.04em]">
          <span className="w-[5px] h-[5px] rounded-full bg-amber pulse-amber flex-shrink-0" />
          {PROFILE.location} · {PROFILE.timezone}
        </div>

        <h1 className="font-sans text-[34px] font-extrabold leading-[1.05] tracking-[-1px] text-[#EEF0FF] mb-[10px]">
          {PROFILE.name}
        </h1>

        <div className="font-mono text-[12px] text-accent mb-4 min-h-[20px] flex items-center">
          <span ref={typedRef} />
          <span className="typing-cursor" />
        </div>

        <p className="text-[13px] text-muted leading-[1.85] mb-[22px] flex-grow">
          {PROFILE.tagline}
        </p>

        {/* Metrics strip */}
        <div className="flex gap-[18px] mb-[22px] py-[14px] border-t border-b border-white/[0.04]">
          {metrics.map((m, i) => (
            <div key={m.label} className={`text-center ${i > 0 ? "border-l border-white/[0.06] pl-[18px]" : ""}`}>
              <div className="font-sans text-[18px] font-extrabold text-[#EEF0FF] tracking-[-0.5px]">{m.value}</div>
              <div className="font-mono text-[9px] text-dim mt-[2px] tracking-[0.05em]">{m.label}</div>
            </div>
          ))}
        </div>

        {/* Social buttons */}
        <div className="flex flex-wrap gap-[7px]">
          <a href={PROFILE.github} target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-[6px] px-[14px] py-[7px] rounded-lg border border-white/10 font-mono text-[10px] text-muted hover:border-accent hover:text-accent hover:bg-[rgba(99,130,255,0.06)] transition-all">
            <Github size={12} /> GitHub
          </a>
          <a href={PROFILE.linkedin} target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-[6px] px-[14px] py-[7px] rounded-lg border border-white/10 font-mono text-[10px] text-muted hover:border-accent hover:text-accent hover:bg-[rgba(99,130,255,0.06)] transition-all">
            <Linkedin size={12} /> LinkedIn
          </a>
          <a href={PROFILE.portfolio} target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-[6px] px-[14px] py-[7px] rounded-lg border border-white/10 font-mono text-[10px] text-muted hover:border-accent hover:text-accent hover:bg-[rgba(99,130,255,0.06)] transition-all">
            <Globe size={12} /> Live Site
          </a>
          <a href={PROFILE.cvUrl} target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-[6px] px-[14px] py-[7px] rounded-lg border border-[rgba(99,130,255,0.3)] font-mono text-[10px] text-accent bg-[rgba(99,130,255,0.07)] hover:bg-[rgba(99,130,255,0.15)] transition-all">
            <Download size={12} /> Download CV
          </a>
          <button onClick={copyEmail}
            className="inline-flex items-center gap-[6px] px-[14px] py-[7px] rounded-lg border border-white/10 font-mono text-[10px] text-muted hover:border-accent hover:text-accent hover:bg-[rgba(99,130,255,0.06)] transition-all cursor-pointer">
            <Mail size={12} /> Copy Email
          </button>
        </div>
      </div>
    </Tile>
  );
}
