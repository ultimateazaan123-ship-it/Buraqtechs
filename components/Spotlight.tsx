"use client";

import type { CSSProperties, ReactNode } from "react";
import Trace from "./Trace";

// Card with a border/background glow that tracks the pointer.
export default function Spotlight({ children, className = "", delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  const move = (e: React.PointerEvent<HTMLDivElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--mx", `${e.clientX - r.left}px`);
    e.currentTarget.style.setProperty("--my", `${e.clientY - r.top}px`);
  };
  return (
    <div className={`spot ${className}`} onPointerMove={move} data-reveal style={{ "--d": delay } as CSSProperties}>
      <Trace offset={delay / 60} />
      {children}
    </div>
  );
}
