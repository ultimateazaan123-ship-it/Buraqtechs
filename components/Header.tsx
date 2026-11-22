"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState, type CSSProperties } from "react";
import { nav, site } from "@/lib/content";
import { scroller } from "@/lib/scroller";
import Magnetic from "./Magnetic";
import Mark from "./Mark";
import { TLink } from "./Transition";

const norm = (p: string) => (p.endsWith("/") ? p : p + "/");

export default function Header() {
  const pathname = usePathname();
  const [hidden, setHidden] = useState(false);
  const [solid, setSolid] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    let last = scrollY;
    const onScroll = () => {
      const y = scrollY;
      setSolid(y > 40);
      if (Math.abs(y - last) > 6) setHidden(y > last && y > 240);
      last = y;
    };
    onScroll();
    addEventListener("scroll", onScroll, { passive: true });
    return () => removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    if (open) scroller.lenis?.stop();
    else scroller.lenis?.start();
    document.documentElement.classList.toggle("menu-open", open);
  }, [open]);

  return (
    <>
      <header className={`hdr${hidden && !open ? " hdr--hidden" : ""}${solid ? " hdr--solid" : ""}`}>
        <div className="hdr__in">
          <TLink href="/" className="brand" aria-label="Buraqtechs home">
            <Mark />
            <span className="brand__word">
              Buraq<span>techs</span>
            </span>
          </TLink>

          <nav className="hdr__nav" aria-label="Primary">
            {nav.filter((n) => n.href !== "/contact/").map((n) => (
              <TLink key={n.href} href={n.href} className={`navlink${norm(pathname) === n.href ? " is-active" : ""}`}>
                <span className="roll" data-t={n.label}>
                  <span>{n.label}</span>
                </span>
              </TLink>
            ))}
          </nav>

          <div className="hdr__end">
            <Magnetic strength={0.25}>
              <TLink href="/contact/" className="btn btn--pill">
                <span className="roll" data-t="Contact us">
                  <span>Contact us</span>
                </span>
                <i className="btn__dot" />
              </TLink>
            </Magnetic>
            <button className={`burger${open ? " is-open" : ""}`} onClick={() => setOpen((o) => !o)} aria-expanded={open} aria-label="Menu">
              <span />
              <span />
            </button>
          </div>
        </div>
      </header>

      <div className={`menu${open ? " is-open" : ""}`} aria-hidden={!open}>
        <nav className="menu__nav">
          {nav.map((n, i) => (
            <TLink key={n.href} href={n.href} className="menu__link" style={{ "--i": i } as CSSProperties} tabIndex={open ? 0 : -1}>
              <span className="mono">0{i + 1}</span>
              {n.label}
            </TLink>
          ))}
        </nav>
        <div className="menu__foot">
          <a href={`mailto:${site.email}`} tabIndex={open ? 0 : -1}>{site.email}</a>
          <a href={`tel:${site.phone}`} tabIndex={open ? 0 : -1}>{site.phoneDisplay}</a>
        </div>
      </div>
    </>
  );
}
