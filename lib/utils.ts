import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function relTime(iso: string): string {
  const d = (Date.now() - new Date(iso).getTime()) / 1000;
  if (d < 60) return "just now";
  if (d < 3600) return `${Math.floor(d / 60)}m ago`;
  if (d < 86400) return `${Math.floor(d / 3600)}h ago`;
  if (d < 2592000) return `${Math.floor(d / 86400)}d ago`;
  if (d < 31536000) return `${Math.floor(d / 2592000)}mo ago`;
  return `${Math.floor(d / 31536000)}y ago`;
}

export const LANG_COLORS: Record<string, string> = {
  JavaScript: "#F7DF1E",
  TypeScript: "#3178C6",
  Python: "#3572A5",
  PHP: "#4F5D95",
  HTML: "#E34C26",
  CSS: "#563D7C",
  "Jupyter Notebook": "#DA5B0B",
  Shell: "#89E051",
  C: "#555555",
  "C++": "#F34B7D",
};

export function getLangColor(lang: string): string {
  return LANG_COLORS[lang] || "#6382FF";
}
