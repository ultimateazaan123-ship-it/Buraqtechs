"use client";

import { useEffect, useRef, useState } from "react";
import { scroller } from "@/lib/scroller";
import Trace from "./Trace";

type Props = { src: string; alt: string; width: number; height: number; label: string; className?: string; eager?: boolean };

// Artwork card: tilts toward the pointer with a moving glare; click opens the full image.
export default function ImageCard({ src, alt, width, height, label, className = "", eager = false }: Props) {
  const card = useRef<HTMLButtonElement>(null);
  const dialog = useRef<HTMLDialogElement>(null);
  const [open, setOpen] = useState(false);

  const move = (e: React.PointerEvent) => {
    if (e.pointerType !== "mouse" || !card.current) return;
    const r = card.current.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    card.current.style.setProperty("--rx", `${(-y * 8).toFixed(2)}deg`);
    card.current.style.setProperty("--ry", `${(x * 10).toFixed(2)}deg`);
    card.current.style.setProperty("--gx", `${((x + 0.5) * 100).toFixed(1)}%`);
    card.current.style.setProperty("--gy", `${((y + 0.5) * 100).toFixed(1)}%`);
  };
  const leave = () => {
    card.current?.style.removeProperty("--rx");
    card.current?.style.removeProperty("--ry");
  };

  useEffect(() => {
    const d = dialog.current!;
    if (open) {
      d.showModal();
      scroller.lenis?.stop();
    } else if (d.open) d.close();
    if (!open) scroller.lenis?.start();
  }, [open]);

  return (
    <>
      <button
        ref={card}
        type="button"
        className={`imgcard ${className}`}
        onPointerMove={move}
        onPointerLeave={leave}
        onClick={() => setOpen(true)}
        data-cursor="View"
        aria-label={`View full image: ${alt}`}
      >
        <span className="imgcard__in">
          <img src={src} alt={alt} width={width} height={height} loading={eager ? "eager" : "lazy"} decoding="async" fetchPriority={eager ? "high" : "auto"} />
          <span className="imgcard__glare" aria-hidden="true" />
          <span className="imgcard__tag mono">{label}</span>
          <Trace />
        </span>
      </button>

      <dialog ref={dialog} className="lightbox" onClose={() => setOpen(false)} onClick={() => setOpen(false)}>
        <img src={src} alt={alt} width={width} height={height} />
        <button type="button" className="lightbox__close mono" onClick={() => setOpen(false)}>
          Close ✕
        </button>
      </dialog>
    </>
  );
}
