"use client";

import { useEffect, useRef, type CSSProperties } from "react";
import { helpSubtitle, services } from "@/lib/content";
import { useProgress } from "@/lib/useProgress";
import Glyph from "./Glyph";
import Trace from "./Trace";

// Vertical scroll drives a horizontal track of service panels (desktop); stacks on small screens.
export default function ServicesRail() {
  const sec = useRef<HTMLElement>(null);
  const track = useRef<HTMLDivElement>(null);
  const dist = useRef(0);

  useEffect(() => {
    const size = () => {
      const t = track.current!, s = sec.current!;
      if (innerWidth < 900) {
        s.style.height = "";
        t.style.transform = "";
        dist.current = 0;
        return;
      }
      dist.current = t.scrollWidth - innerWidth;
      s.style.height = `${innerHeight + dist.current}px`;
    };
    size();
    const ro = new ResizeObserver(size);
    ro.observe(track.current!);
    addEventListener("resize", size);
    return () => {
      ro.disconnect();
      removeEventListener("resize", size);
    };
  }, []);

  useProgress(
    sec,
    (p) => {
      if (!dist.current) return;
      track.current!.style.transform = `translate3d(${-p * dist.current}px,0,0)`;
      sec.current!.style.setProperty("--rp", p.toFixed(4));
      // Highlight the panel whose centre sits closest to the viewport centre.
      const mid = innerWidth / 2;
      let best: Element | null = null, bestD = Infinity;
      const panels = track.current!.querySelectorAll(".rail__panel");
      panels.forEach((el) => {
        const r = el.getBoundingClientRect();
        const d = Math.abs(r.left + r.width / 2 - mid);
        if (d < bestD) (bestD = d), (best = el);
      });
      panels.forEach((el) => el.classList.toggle("is-active", el === best));
    },
    "pin"
  );

  return (
    <section ref={sec} className="rail panel theme-light tint" aria-labelledby="rail-h">
      <div className="rail__pin">
        <div ref={track} className="rail__track">
          <div className="rail__intro">
            <p className="mono dim">(Capabilities)</p>
            <h2 id="rail-h" className="rail__h">
              How can we <em className="serif">help</em> you?
            </h2>
            <p className="rail__sub">
              {helpSubtitle[0]}
              <br />
              <span className="dim">{helpSubtitle[1]}</span>
            </p>
            <p className="mono rail__hint">
              Scroll <span aria-hidden="true">→</span>
            </p>
          </div>
          {services.map((s, i) => (
            <article key={s.id} className="rail__panel" style={{ "--i": i } as CSSProperties} data-reveal="fade">
              <div className="rail__top mono">
                <span>0{i + 1}</span>
                <span className="dim">/ 0{services.length}</span>
              </div>
              <Glyph id={s.id} className="rail__glyph" />
              <h3 className="rail__title">{s.title}</h3>
              <p className="rail__text">{s.text}</p>
              <span className="rail__line" aria-hidden="true" />
              <Trace offset={i * 1.2} />
            </article>
          ))}
        </div>
        <div className="rail__progress" aria-hidden="true">
          <span />
        </div>
      </div>
    </section>
  );
}
