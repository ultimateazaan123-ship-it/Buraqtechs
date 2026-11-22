"use client";

import { useRef, useState, type CSSProperties } from "react";
import { branding } from "@/lib/content";
import { useProgress } from "@/lib/useProgress";
import BrandIcon from "./BrandIcon";
import ImageCard from "./ImageCard";

const steps = branding.journey;

// The 7-step solution: the source graphic stays pinned while a lime rail fills
// through the steps and lights each one as it is reached.
export default function Journey() {
  const list = useRef<HTMLDivElement>(null);
  const [reached, setReached] = useState(-1);

  useProgress(list, (p) => {
    // "through" progress spans the list entering and leaving; remap so the rail
    // fills while the list crosses the middle of the viewport.
    const t = Math.min(1, Math.max(0, (p - 0.28) / 0.44));
    list.current?.style.setProperty("--jp", t.toFixed(4));
    setReached(t === 0 ? -1 : Math.min(steps.length - 1, Math.floor(t * steps.length)));
  });

  return (
    <div className="journey">
      <div className="journey__art">
        <ImageCard
          src="/branding/seven-step.webp"
          alt="Buraqtechs: Your clothing business, our 7-step solution. From concept to customer, we build brands."
          width={1080}
          height={1350}
          label="The 7-step playbook"
          className="imgcard--tall"
        />
      </div>

      <div ref={list} className="journey__list">
        <span className="journey__rail" aria-hidden="true">
          <span />
        </span>
        <ol className="journey__steps">
        {steps.map((s, i) => (
          <li
            key={s.title}
            // lit state is a data attribute: React rewriting className would wipe the reveal's "is-in"
            className="jstep"
            data-lit={i <= reached || undefined}
            data-reveal
            style={{ "--d": 60 } as CSSProperties}
          >
            <span className="jstep__node" aria-hidden="true">
              <BrandIcon name={s.icon} />
            </span>
            <div className="jstep__body">
              <p className="mono jstep__meta">
                <span>Step 0{i + 1}</span>
                <span className="dim">{s.tag}</span>
              </p>
              <h3>{s.title}</h3>
              <p className="jstep__text">{s.text}</p>
            </div>
          </li>
        ))}
        </ol>
      </div>
    </div>
  );
}
