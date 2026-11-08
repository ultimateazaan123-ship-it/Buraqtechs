import type { Metadata } from "next";
import Counters from "@/components/Counters";
import CTA from "@/components/CTA";
import Lines from "@/components/Lines";
import PageHero from "@/components/PageHero";
import Process from "@/components/Process";
import ScrollText from "@/components/ScrollText";
import Spotlight from "@/components/Spotlight";
import { about } from "@/lib/content";

export const metadata: Metadata = {
  title: "About",
  description: "IT business and full-service digital agency focused on innovative, holistic IT and digital solutions.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        index="01"
        label="About Us"
        title={["Welcome", <>to <em className="serif">The</em> Buraqtechs</>]}
        kicker="IT Business & full-service Digital Agency"
        text={about.whyIntro}
        readout={["6-D", "Process"]}
      />

      <section className="quote wrap panel theme-light" aria-label="Our belief">
        <span className="quote__mark serif" aria-hidden="true">“</span>
        <ScrollText className="quote__text" text={about.quote} accent={[8, 9, 10, 11]} />
      </section>

      <section className="split wrap panel theme-light tint">
        <div className="split__row">
          <p className="mono dim split__label" data-reveal>(A) Who Are We</p>
          <div>
            <Lines className="h-md" lines={["Who Are We"]} />
            <p className="split__text" data-reveal style={{ ["--d" as string]: 120 }}>{about.who}</p>
          </div>
        </div>
        <div className="split__row">
          <p className="mono dim split__label" data-reveal>(B) Our Mission</p>
          <div>
            <Lines className="h-md" lines={["Our Mission"]} />
            <p className="split__text" data-reveal style={{ ["--d" as string]: 120 }}>{about.mission}</p>
          </div>
        </div>
        <div className="split__row">
          <p className="mono dim split__label" data-reveal>(C) What We Do</p>
          <ul className="wwd">
            {about.whatWeDo.map((w, i) => (
              <li key={w} data-reveal style={{ ["--d" as string]: i * 60 }}>
                <span className="mono dim">0{i + 1}</span>
                <span className="wwd__t">{w}</span>
                <span className="wwd__arrow" aria-hidden="true">↗</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <Process />

      <section className="why wrap panel theme-light" aria-labelledby="why-h">
        <div className="why__head">
          <p className="mono dim" data-reveal>(Why Us)</p>
          <Lines id="why-h" className="h-xl" lines={["Why Choose", <><em className="serif">Us?</em></>]} />
        </div>
        <div className="why__grid">
          {about.why.map((w, i) => (
            <Spotlight key={w.title} className={i === 0 ? "why__card why__card--wide" : "why__card"} delay={i * 90}>
              <span className="mono dim">0{i + 1}</span>
              <h3>{w.title}</h3>
              <p>{w.text}</p>
            </Spotlight>
          ))}
          <Spotlight className="why__card why__card--roi" delay={270}>
            <span className="mono dim">04</span>
            <h3>{about.roi.title}</h3>
            <p>{about.roi.lead}</p>
            <ol className="roi">
              {about.roi.items.map((r) => (
                <li key={r}>{r}</li>
              ))}
            </ol>
          </Spotlight>
        </div>
      </section>

      <section className="numbers wrap panel theme-light tint" aria-labelledby="num-h">
        <div className="numbers__head">
          <p className="mono dim" data-reveal>(Some Numbers)</p>
          <Lines id="num-h" className="h-lg" lines={[<>Our <em className="serif">Satisfied</em> Performance</>]} />
        </div>
        <Counters />
      </section>

      <CTA />
    </>
  );
}
