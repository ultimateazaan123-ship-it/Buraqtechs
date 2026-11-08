import type { Metadata } from "next";
import Clock from "@/components/Clock";
import ContactForm from "@/components/ContactForm";
import CopyEmail from "@/components/CopyEmail";
import Lines from "@/components/Lines";
import PageHero from "@/components/PageHero";
import Trace from "@/components/Trace";
import { contact, site } from "@/lib/content";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Buraqtechs for premium business services in Karachi.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        index="03"
        label="Contact Us"
        title={["Contact for", "Premium Business", <><em className="serif">Services</em></>]}
        kicker="24x7 Live Support"
        text={contact.text}
        readout={["24×7", "Availability"]}
      />

      <section className="contact wrap panel theme-light tint">
        <div className="contact__form">
          <p className="mono dim" data-reveal>(Request)</p>
          <Lines className="h-md" lines={["Request"]} />
          <ContactForm />
        </div>

        <aside className="reach">
          <p className="mono dim" data-reveal>(Get In Touch)</p>
          <Lines className="h-md" lines={["Reach Us"]} />

          <div className="reach__block" data-reveal>
            <span className="mono dim">Email</span>
            <CopyEmail />
          </div>
          <div className="reach__block" data-reveal style={{ ["--d" as string]: 80 }}>
            <span className="mono dim">Phone</span>
            <a className="reach__big" href={`tel:${site.phone}`} data-cursor="Call">{site.phone}</a>
          </div>
          <div className="reach__block" data-reveal style={{ ["--d" as string]: 160 }}>
            <span className="mono dim">Studio</span>
            <p className="reach__addr">{site.address}</p>
          </div>

          <div className="radar" data-reveal="fade" style={{ ["--d" as string]: 240 }} aria-hidden="true">
            <Trace offset={3} />
            <div className="radar__sweep" />
            <span className="radar__ring" />
            <span className="radar__ring" />
            <span className="radar__ring" />
            <span className="radar__pin" />
            <div className="radar__read mono">
              <span>{site.coords}</span>
              <span>Karachi <Clock /></span>
            </div>
          </div>

          <ul className="reach__social">
            {site.socials.map((s) => (
              <li key={s.label}>
                <a href={s.href} target="_blank" rel="noopener noreferrer" className="ulink">{s.label} ↗</a>
              </li>
            ))}
          </ul>
        </aside>
      </section>
    </>
  );
}
