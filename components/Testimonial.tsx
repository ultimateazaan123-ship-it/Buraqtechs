import { testimonial } from "@/lib/content";
import Lines from "./Lines";
import Trace from "./Trace";

export default function Testimonial() {
  return (
    <section className="testi wrap panel theme-light tint" aria-labelledby="testi-h">
      <div className="testi__meta mono" data-reveal>
        <span>(Client voice)</span>
        <span>★★★★★</span>
      </div>
      <svg className="testi__q" viewBox="0 0 120 90" aria-hidden="true" data-reveal="fade">
        <path d="M0 90V52C0 22 14 5 44 0l4 12C30 18 23 30 23 44h23v46zm66 0V52C66 22 80 5 110 0l4 12c-18 6-25 18-25 32h23v46z" />
      </svg>
      <Lines id="testi-h" className="testi__title" lines={["Amazing Designs", <><em className="serif">and</em> Quality Work!</>]} />
      <blockquote className="testi__quote" data-reveal style={{ ["--d" as string]: 200 }}>
        <Trace offset={2} />
        <p>“{testimonial.quote}”</p>
        <footer>
          <img src="/clients/logosolarpngblk-1-300x100.png" alt="" width={120} height={40} loading="lazy" />
          <span>
            <strong>{testimonial.name}</strong>
            <span className="dim">{testimonial.role}</span>
          </span>
        </footer>
      </blockquote>
    </section>
  );
}
