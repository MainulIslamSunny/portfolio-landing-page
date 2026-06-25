"use client";

import { useEffect, useState } from "react";

export default function ScrollProgress() {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const update = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setWidth(docHeight > 0 ? (scrollTop / docHeight) * 100 : 0);
    };
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  return (
    <div
      className="fixed top-0 left-0 h-[2px] z-[1000] transition-[width] duration-100"
      style={{
        width: `${width}%`,
        background: "linear-gradient(90deg, #6382FF, #A78BFA, #2DD4BF)",
      }}
      aria-hidden="true"
    />
  );
}
