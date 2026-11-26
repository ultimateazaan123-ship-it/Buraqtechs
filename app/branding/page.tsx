import type { Metadata } from "next";
import type { CSSProperties } from "react";
import BrandIcon from "@/components/BrandIcon";
import CTA from "@/components/CTA";
import ImageCard from "@/components/ImageCard";
import Journey from "@/components/Journey";
import Lines from "@/components/Lines";
import Magnetic from "@/components/Magnetic";
import Marquee from "@/components/Marquee";
import Trace from "@/components/Trace";
import { TLink } from "@/components/Transition";
import { branding } from "@/lib/content";

export const metadata: Metadata = {
  title: "Launch Your Brand",
  description:
    "Buraqtechs builds clothing brands from scratch (A-Z): product hunting, design, stitching and sampling, quality control, content, launch and performance marketing.",
};

export default function BrandingPage() {
  return (
    <>
      {/* ---------- hero ---------- */}
      <section className="bhero">
        <div className="phero__grid" aria-hidden="true" />
        <div className="bhero__glow" aria-hidden="true" />
        <div className="wrap bhero__in">
          <div className="bhero__copy">
            <p className="mono phero__label" data-reveal>
              <span className="dim">(04)</span> Launch your brand
            </p>
            <p className="mono kicker bhero__kicker" data-reveal style={{ "--d": 80 } as CSSProperties}>
              <span className="kicker__dot" /> {branding.kicker}
            </p>
            <Lines
              as="h1"
              className="bhero__title"
              delay={120}
              lines={["We Build", <>Clothing <em className="serif bhero__accent">Brands</em></>, "from Scratch."]}
            />
            <p className="bhero__lead" data-reveal style={{ "--d": 420 } as CSSProperties}>
              {branding.lead}
            </p>
            <div className="bhero__cta" data-reveal style={{ "--d": 520 } as CSSProperties}>
              <Magnetic>
                <TLink href="/contact/" className="btn btn--volt btn--lg" data-cursor="Let's go">
                  <span className="roll" data-t="Start your brand">
                    <span>Start your brand</span>
                  </span>
                  <span aria-hidden="true">→</span>
                </TLink>
              </Magnetic>
              <TLink href="/branding/#journey" className="btn btn--ghost btn--lg">
                <span className="roll" data-t="See the 7 steps">
                  <span>See the 7 steps</span>
                </span>
              </TLink>
            </div>
            <ul className="bhero__chips mono" data-reveal style={{ "--d": 620 } as CSSProperties}>
              <li>A-Z</li>
              <li>7 steps</li>
              <li>Concept to customer</li>
            </ul>
          </div>

          <div className="bhero__art" data-reveal="fade" style={{ "--d": 300 } as CSSProperties}>
            <ImageCard
              src="/branding/brand-launch.webp"
              alt="Buraqtechs: More than marketing. We build clothing brands from scratch (A-Z). Product-based marketing from concept to customer."
              width={1080}
              height={1074}
              label="Complete brand launch"
              eager
            />
            <span className="bhero__orbit" aria-hidden="true" />
          </div>
        </div>
      </section>

      <section className="band panel theme-light">
        <Marquee items={branding.journey.map((s) => s.title)} />
      </section>

      {/* ---------- the 7-step journey ---------- */}
      <section id="journey" className="bjourney wrap panel theme-light" aria-labelledby="journey-h">
        <div className="bsec__head">
          <p className="mono dim" data-reveal>(01) Our 7-Step Solution</p>
          <Lines
            id="journey-h"
            className="h-xl"
            lines={["Your clothing business,", <>our <em className="serif">7-step</em> solution.</>]}
          />
          <p className="bsec__sub" data-reveal style={{ "--d": 200 } as CSSProperties}>
            From Concept to Customer, We Build Brands.
          </p>
        </div>
        <Journey />
      </section>

      {/* ---------- complete brand launch services ---------- */}
      <section className="blaunch wrap panel theme-light tint" aria-labelledby="launch-h">
        <div className="bsec__head bsec__head--split">
          <div>
            <p className="mono dim" data-reveal>(02) Complete Brand Launch Services</p>
            <Lines id="launch-h" className="h-xl" lines={["More than", <>marketing<em className="serif">.</em></>]} />
          </div>
          <p className="bsec__sub" data-reveal style={{ "--d": 200 } as CSSProperties}>
            Everything a clothing brand needs to go from an idea to paying customers, run by one team.
          </p>
        </div>

        <div className="bento">
          {branding.launch.map((c, i) => (
            <article
              key={c.title}
              className={c.featured ? "bento__card bento__card--feature" : "bento__card"}
              data-reveal
              style={{ "--d": (i % 4) * 80 } as CSSProperties}
            >
              <Trace offset={i * 1.1} />
              <div className="bento__top">
                <span className="bento__icon">
                  <BrandIcon name={c.icon} />
                </span>
                <span className="mono dim">{c.tag}</span>
              </div>
              <h3>{c.title}</h3>
              <p>{c.text}</p>
              {c.featured && (
                <ul className="bento__list mono">
                  <li>Stitching</li>
                  <li>Photo</li>
                  <li>Print</li>
                </ul>
              )}
            </article>
          ))}
        </div>
      </section>

      {/* ---------- closing statement ---------- */}
      <section className="bvision wrap panel theme-light" aria-label="Our promise">
        <p className="mono dim" data-reveal>(03) The Promise</p>
        <Lines
          className="bvision__title"
          lines={[branding.closing[0], <><span className="bvision__mark">{branding.closing[1]}</span></>]}
        />
        <p className="bvision__sub" data-reveal style={{ "--d": 240 } as CSSProperties}>
          {branding.closingSub}
        </p>
      </section>

      <CTA />
    </>
  );
}
