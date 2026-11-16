"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { createContext, useCallback, useContext, useEffect, useRef, useState, type ComponentProps, type MouseEvent } from "react";
import { nav } from "@/lib/content";
import { scanReveals } from "@/lib/reveal";
import { scroller, scrollToHash, scrollToTop } from "@/lib/scroller";

type Phase = "idle" | "cover" | "reveal";
const Ctx = createContext<(href: string) => void>(() => {});

const COVER_MS = 470;
const REVEAL_MS = 700;
const BARS = 5;

const norm = (p: string) => (p.endsWith("/") ? p : p + "/");
const labelFor = (href: string) => nav.find((n) => norm(n.href) === norm(href.split("#")[0]))?.label ?? "Buraqtechs";

export function TransitionProvider({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  const [phase, setPhase] = useState<Phase>("idle");
  const [label, setLabel] = useState("");
  const pending = useRef<string | null>(null);
  const reduced = useRef(false);

  useEffect(() => {
    reduced.current = matchMedia("(prefers-reduced-motion: reduce)").matches;
    document.documentElement.classList.add("is-ready");
    scanReveals();
  }, []);

  // A route finished rendering underneath the curtain: jump to top (or the #section), then lift it.
  useEffect(() => {
    if (!pending.current) {
      scanReveals();
      return;
    }
    const hash = pending.current.split("#")[1];
    pending.current = null;
    scroller.lenis?.start();
    scrollToTop();
    if (hash) scrollToHash(hash, true);
    requestAnimationFrame(() => {
      setPhase("reveal");
      setTimeout(scanReveals, 180);
      setTimeout(() => setPhase("idle"), REVEAL_MS);
    });
  }, [pathname]);

  const navigate = useCallback(
    (href: string) => {
      if (pending.current) return;
      const [path, hash] = href.split("#");
      if (norm(path) === norm(pathname)) {
        if (hash && scrollToHash(hash)) return;
        scroller.lenis ? scroller.lenis.scrollTo(0, { duration: 1.2 }) : window.scrollTo({ top: 0, behavior: "smooth" });
        return;
      }
      if (reduced.current) {
        router.push(href, { scroll: true });
        return;
      }
      pending.current = href;
      router.prefetch(href);
      setLabel(labelFor(href));
      setPhase("cover");
      scroller.lenis?.stop();
      setTimeout(() => router.push(href, { scroll: false }), COVER_MS);
    },
    [pathname, router]
  );

  return (
    <Ctx.Provider value={navigate}>
      {children}
      <div className="pt" data-phase={phase} aria-hidden="true">
        {Array.from({ length: BARS }, (_, i) => (
          <span key={i} className="pt__bar" style={{ ["--i" as string]: phase === "reveal" ? i : BARS - 1 - i }} />
        ))}
        <div className="pt__label">
          <span className="mono">Loading</span>
          <strong>{label}</strong>
        </div>
      </div>
    </Ctx.Provider>
  );
}

type TLinkProps = ComponentProps<typeof Link> & { href: string };

export function TLink({ href, onClick, ...rest }: TLinkProps) {
  const navigate = useContext(Ctx);
  const handle = (e: MouseEvent<HTMLAnchorElement>) => {
    onClick?.(e);
    if (e.defaultPrevented || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0) return;
    e.preventDefault();
    navigate(href);
  };
  return <Link href={href} onClick={handle} {...rest} />;
}
