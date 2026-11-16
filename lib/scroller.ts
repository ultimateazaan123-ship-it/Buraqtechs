import type Lenis from "lenis";

// Shared handle so any component can read velocity or drive the scroll.
export const scroller: { lenis: Lenis | null } = { lenis: null };

export function scrollVelocity() {
  return scroller.lenis?.velocity ?? 0;
}

// Clears the floating header when landing on an in-page anchor.
const HASH_OFFSET = -110;

// Layout position (ignores transforms), so a not-yet-revealed element's slide offset doesn't skew the target.
function pageTop(el: HTMLElement) {
  let y = 0;
  for (let n: HTMLElement | null = el; n; n = n.offsetParent as HTMLElement | null) y += n.offsetTop;
  return y;
}

export function scrollToHash(hash: string, immediate = false) {
  const el = document.getElementById(hash);
  if (!el) return false;
  const top = Math.max(0, pageTop(el) + HASH_OFFSET);
  if (scroller.lenis) scroller.lenis.scrollTo(top, { immediate, force: true, duration: 1.4 });
  else window.scrollTo({ top, behavior: immediate ? "instant" : "smooth" });
  return true;
}

export function scrollToTop(immediate = true) {
  if (scroller.lenis) scroller.lenis.scrollTo(0, { immediate, force: true });
  else window.scrollTo({ top: 0, behavior: immediate ? "instant" : "smooth" });
}
