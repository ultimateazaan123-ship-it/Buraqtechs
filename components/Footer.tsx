import { nav, services, site } from "@/lib/content";
import BackToTop from "./BackToTop";
import Clock from "./Clock";
import { TLink } from "./Transition";

export default function Footer() {
  return (
    <footer className="ftr">
      <div className="wrap ftr__grid">
        <div className="ftr__col ftr__lead" data-reveal>
          <p className="mono dim">Buraqtechs Digital Agency</p>
          <p className="ftr__big">
            We create &amp; scale <em className="serif">your business</em> digitally.
          </p>
        </div>
        <div className="ftr__col" data-reveal style={{ ["--d" as string]: 80 }}>
          <p className="mono dim">Services</p>
          <ul>
            {/* each links to its own row in the home page services list */}
            {services.map((s) => (
              <li key={s.id}>
                <TLink href={`/#service-${s.id}`} className="ulink">
                  {s.id === "research" ? "R&D & Product Hunting" : s.title}
                </TLink>
              </li>
            ))}
          </ul>
        </div>
        <div className="ftr__col" data-reveal style={{ ["--d" as string]: 140 }}>
          <p className="mono dim">Company</p>
          <ul>
            {nav.map((n) => (
              <li key={n.href}>
                <TLink href={n.href} className="ulink">
                  {n.label}
                </TLink>
              </li>
            ))}
          </ul>
        </div>
        <div className="ftr__col" data-reveal style={{ ["--d" as string]: 200 }}>
          <p className="mono dim">Get In Touch</p>
          <ul>
            <li>{site.address}</li>
            <li>
              <a className="ulink" href={`mailto:${site.email}`}>{site.email}</a>
            </li>
            <li>
              <a className="ulink" href={`tel:${site.phone}`}>{site.phone}</a>
            </li>
          </ul>
        </div>
        <div className="ftr__col" data-reveal style={{ ["--d" as string]: 260 }}>
          <p className="mono dim">Social</p>
          <ul>
            {site.socials.map((s) => (
              <li key={s.label}>
                <a className="ulink" href={s.href} target="_blank" rel="noopener noreferrer">
                  {s.label} ↗
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="wrap ftr__bar mono">
        <span>Copyright © {new Date().getFullYear()} Buraqtechs</span>
        <span className="ftr__meta">
          Karachi <Clock />
        </span>
        <BackToTop />
      </div>

      <div className="ftr__word" aria-hidden="true">
        <svg viewBox="0 0 1000 150" preserveAspectRatio="xMidYMax meet">
          <defs>
            <linearGradient id="fw" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0" stopColor="#ecebe6" stopOpacity=".95" />
              <stop offset="1" stopColor="#ecebe6" stopOpacity="0" />
            </linearGradient>
          </defs>
          <text x="0" y="138" textLength="1000" lengthAdjust="spacingAndGlyphs" fill="url(#fw)">
            BURAQTECHS
          </text>
        </svg>
      </div>
    </footer>
  );
}
