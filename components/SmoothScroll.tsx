"use client";

import Lenis from "lenis";
import { useEffect } from "react";
import { scroller } from "@/lib/scroller";

export default function SmoothScroll() {
  useEffect(() => {
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const lenis = new Lenis({
      duration: 1.15,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      // In-page anchors are handled by the transition router (scrollToHash), which offsets for the header.
    });
    scroller.lenis = lenis;

    let id = 0;
    const raf = (time: number) => {
      lenis.raf(time);
      id = requestAnimationFrame(raf);
    };
    id = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(id);
      lenis.destroy();
      scroller.lenis = null;
    };
  }, []);

  return null;
}
