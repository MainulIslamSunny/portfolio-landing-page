import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#060914",
        surface: "#0B0F1E",
        surface2: "#101628",
        accent: "#6382FF",
        accent2: "#A78BFA",
        teal: "#2DD4BF",
        amber: "#F59E0B",
        green: "#34D399",
        muted: "#9AA3C2",
        dim: "#3D4B6B",
      },
      fontFamily: {
        sans: ["var(--font-jakarta)", "system-ui", "sans-serif"],
        mono: ["var(--font-jetbrains)", "Courier New", "monospace"],
      },
      backgroundImage: {
        "grid-pattern":
          "linear-gradient(rgba(99,130,255,.018) 1px,transparent 1px),linear-gradient(90deg,rgba(99,130,255,.018) 1px,transparent 1px)",
      },
      backgroundSize: {
        "grid": "60px 60px",
      },
      animation: {
        "spin-border": "spin-border 8s linear infinite",
        "pulse-dot": "pulse-dot 2.5s ease infinite",
        "fadeUp": "fadeUp 0.6s ease forwards",
      },
      keyframes: {
        "spin-border": { to: { "--angle": "360deg" } },
        "pulse-dot": {
          "0%,100%": { boxShadow: "0 0 0 0 rgba(52,211,153,.4)" },
          "60%": { boxShadow: "0 0 0 6px rgba(52,211,153,0)" },
        },
        fadeUp: {
          from: { opacity: "0", transform: "translateY(18px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
