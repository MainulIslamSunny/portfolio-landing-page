"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface TileProps {
  className?: string;
  children: React.ReactNode;
  style?: React.CSSProperties;
  profile?: boolean; // spinning border variant
}

export default function Tile({ className, children, style, profile = false }: TileProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold: 0.08 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--mx", `${e.clientX - rect.left}px`);
    e.currentTarget.style.setProperty("--my", `${e.clientY - rect.top}px`);
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      style={style}
      className={cn(
        "relative overflow-hidden rounded-2xl p-7 transition-all duration-300 tile-glow",
        profile
          ? "profile-border"
          : "bg-surface border border-[rgba(99,130,255,0.1)] hover:border-[rgba(99,130,255,0.28)]",
        "hover:-translate-y-[3px] hover:shadow-[0_20px_50px_rgba(0,0,0,0.45)]",
        visible
          ? "opacity-100 translate-y-0 animate-[fadeUp_0.6s_ease_forwards]"
          : "opacity-0 translate-y-[18px]",
        className
      )}
    >
      {children}
    </div>
  );
}
