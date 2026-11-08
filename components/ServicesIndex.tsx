"use client";

import { useRef, useState, type CSSProperties } from "react";
import { services, type ServiceId } from "@/lib/content";
import Glyph from "./Glyph";
import Trace from "./Trace";
import { TLink } from "./Transition";

// Editorial index of services. Hovering a row fills it and floats a glyph card at the cursor.
export default function ServicesIndex() {
  const listRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState<ServiceId | null>(null);

  const move = (e: React.PointerEvent) => {
    if (e.pointerType !== "mouse" || !cardRef.current || !listRef.current) return;
    const r = listRef.current.getBoundingClientRect();
    cardRef.current.style.transform = `translate3d(${e.clientX - r.left}px, ${e.clientY - r.top}px, 0)`;
  };

  return (
    <div ref={listRef} className="sidx" onPointerMove={move} onPointerLeave={() => setActive(null)}>
      <ol className="sidx__list">
      {services.map((s, i) => (
        <li
          key={s.id}
          // Active state lives in a data attribute: React rewriting className would wipe the reveal's "is-in".
          className="sidx__row"
          data-active={active === s.id || undefined}
          onPointerEnter={() => setActive(s.id)}
          data-reveal
          style={{ "--d": i * 70 } as CSSProperties}
        >
          <TLink href="/services/" className="sidx__link" data-cursor="Explore">
            <span className="sidx__num mono">0{i + 1}</span>
            <span className="sidx__title">{s.title}</span>
            <span className="sidx__text">{s.text}</span>
            <span className="sidx__arrow" aria-hidden="true">
              <svg viewBox="0 0 24 24" width="22" height="22">
                <path d="M5 19 19 5M8 5h11v11" fill="none" stroke="currentColor" strokeWidth="1.6" />
              </svg>
            </span>
            <Glyph id={s.id} className="sidx__mglyph" />
          </TLink>
        </li>
      ))}
      </ol>
      <div ref={cardRef} className={`sidx__card${active ? " is-on" : ""}`} aria-hidden="true">
        <div className="sidx__cardin">
          <Trace />
          {services.map((s) => (
            <Glyph key={s.id} id={s.id} className={active === s.id ? "is-shown" : ""} />
          ))}
        </div>
      </div>
    </div>
  );
}
