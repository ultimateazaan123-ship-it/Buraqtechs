"use client";

import { useEffect, useRef } from "react";
import { about } from "@/lib/content";
import Trace from "./Trace";

const ease = (t: number) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t));

export default function Counters() {
  const ref = useRef<HTMLDListElement>(null);

  useEffect(() => {
    const root = ref.current!;
    const nodes = Array.from(root.querySelectorAll<HTMLElement>("[data-to]"));
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) {
      nodes.forEach((n) => (n.textContent = n.dataset.to!));
      return;
    }
    nodes.forEach((n) => (n.textContent = "0"));
    let id = 0;
    const io = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return;
      io.disconnect();
      const start = performance.now();
      const run = (now: number) => {
        const t = Math.min(1, (now - start) / 1800);
        nodes.forEach((n, i) => {
          const local = Math.min(1, Math.max(0, t * 1.25 - i * 0.08));
          n.textContent = String(Math.round(+n.dataset.to! * ease(local)));
        });
        if (t < 1) id = requestAnimationFrame(run);
        else nodes.forEach((n) => (n.textContent = n.dataset.to!));
      };
      id = requestAnimationFrame(run);
    }, { threshold: 0.4 });
    io.observe(root);
    return () => {
      io.disconnect();
      cancelAnimationFrame(id);
    };
  }, []);

  return (
    <dl ref={ref} className="nums">
      {about.numbers.map((n, i) => (
        <div className="nums__item" key={n.label} data-reveal style={{ ["--d" as string]: i * 90 }}>
          <Trace offset={i * 1.6} />
          <dt className="mono dim">
            0{i + 1} / {n.label}
          </dt>
          <dd>
            <span className="tnum" data-to={n.value}>
              {n.value}
            </span>
            <span className="nums__suf">{n.suffix}</span>
          </dd>
        </div>
      ))}
    </dl>
  );
}
