import ClientsGrid from "@/components/ClientsGrid";
import CTA from "@/components/CTA";
import HomeHero from "@/components/HomeHero";
import Lines from "@/components/Lines";
import Marquee from "@/components/Marquee";
import ScrollText from "@/components/ScrollText";
import ServicesIndex from "@/components/ServicesIndex";
import Testimonial from "@/components/Testimonial";
import { helpSubtitle, services } from "@/lib/content";


export default function Home() {
  return (
    <>
      <HomeHero />

      <section className="band panel theme-volt">
        <Marquee items={services.map((s) => s.title)} />
      </section>

      <section className="help wrap panel theme-light" aria-labelledby="help-h">
        <div className="help__head">
          <p className="mono dim" data-reveal>(01) Services</p>
          <Lines id="help-h" className="h-xl" lines={["How can we", <><em className="serif">help</em> you?</>]} />
          <p className="help__sub" data-reveal style={{ ["--d" as string]: 200 }}>
            {helpSubtitle[0]}
            <br />
            <span className="dim">{helpSubtitle[1]}</span>
          </p>
        </div>
        <ServicesIndex />
      </section>

      <section className="statement wrap panel theme-iris" aria-label="Our approach">
        <p className="mono dim" data-reveal>(02) Approach</p>
        <ScrollText
          className="statement__text"
          text="We take your company from scratch, create its identity from the ground up and make it an ideal brand for target clients."
          accent={[4, 5, 8, 17, 18]}
        />
      </section>

      <section className="clients wrap panel theme-light" aria-labelledby="clients-h">
        <div className="clients__head">
          <p className="mono dim" data-reveal>(03) Our Customers</p>
          <Lines
            id="clients-h"
            className="h-lg"
            lines={["Our clients are some of the", <>most <em className="serif">forward-looking</em> companies</>, "and startups."]}
          />
        </div>
        <ClientsGrid />
      </section>

      <Testimonial />
      <CTA />
    </>
  );
}
