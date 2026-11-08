import type { Metadata } from "next";
import ClientsGrid from "@/components/ClientsGrid";
import CTA from "@/components/CTA";
import Lines from "@/components/Lines";
import Marquee from "@/components/Marquee";
import PageHero from "@/components/PageHero";
import ServicesRail from "@/components/ServicesRail";
import Testimonial from "@/components/Testimonial";
import { services } from "@/lib/content";

export const metadata: Metadata = {
  title: "Services",
  description: "Design, development, marketing, social media, eCommerce and Amazon services by Buraqtechs.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        index="02"
        label="Services"
        title={["We provide", <>a wide range <em className="serif">of</em></>, "Services"]}
        kicker="Fastest And Most Reliable Growth"
        text="We take your company from scratch, create its identity from the ground up and make it an ideal brand for your target clients."
        readout={["06", "Disciplines"]}
      />

      <ServicesRail />

      <section className="band panel theme-light">
        <Marquee items={services.map((s) => s.title)} reverse outline />
      </section>

      <section className="clients wrap panel theme-light" aria-labelledby="clients-h">
        <div className="clients__head">
          <p className="mono dim" data-reveal>(Our Customers)</p>
          <Lines
            id="clients-h"
            className="h-lg"
            lines={["Our clients are some of the", <>most <em className="serif">forward-looking</em> companies</>, "and startups."]}
          />
        </div>
        <ClientsGrid exclude={["Owa Aziz"]} />
      </section>

      <Testimonial />
      <CTA />
    </>
  );
}
