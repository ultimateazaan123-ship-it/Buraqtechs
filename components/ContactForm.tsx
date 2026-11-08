"use client";

import { useState, type FormEvent } from "react";
import { services, site } from "@/lib/content";
import Magnetic from "./Magnetic";
import Trace from "./Trace";

// Composes the request into an email to the studio's inbox (no server required).
export default function ContactForm() {
  const [picked, setPicked] = useState<string[]>([]);
  const [sent, setSent] = useState(false);

  const toggle = (t: string) => setPicked((p) => (p.includes(t) ? p.filter((x) => x !== t) : [...p, t]));

  const submit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const name = String(f.get("name") ?? "");
    const body = [
      `Name: ${name}`,
      `Email: ${f.get("email")}`,
      `Phone: ${f.get("phone") || "-"}`,
      `Interested in: ${picked.join(", ") || "-"}`,
      "",
      String(f.get("message") ?? ""),
    ].join("\n");
    location.href = `mailto:${site.email}?subject=${encodeURIComponent(`Project request from ${name}`)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  };

  return (
    <form className="form" onSubmit={submit}>
      <Trace />
      <fieldset className="form__chips">
        <legend className="mono dim">I&apos;m interested in</legend>
        {services.map((s) => (
          <button
            type="button"
            key={s.id}
            className={`chip${picked.includes(s.title) ? " is-on" : ""}`}
            aria-pressed={picked.includes(s.title)}
            onClick={() => toggle(s.title)}
          >
            {s.title}
          </button>
        ))}
      </fieldset>

      <div className="form__row">
        <Field name="name" label="Your name" required autoComplete="name" />
        <Field name="email" label="Email address" type="email" required autoComplete="email" />
      </div>
      <Field name="phone" label="Phone (optional)" type="tel" autoComplete="tel" />
      <Field name="message" label="Tell us about your project" textarea required />

      <div className="form__end">
        <Magnetic>
          <button type="submit" className="btn btn--volt btn--lg">
            <span className="roll" data-t="Send request">
              <span>Send request</span>
            </span>
            <span aria-hidden="true">→</span>
          </button>
        </Magnetic>
        <p className="mono dim form__note" aria-live="polite">
          {sent ? "Opening your email app…" : "Sends via your email app. Nothing stored."}
        </p>
      </div>
    </form>
  );
}

function Field({
  name,
  label,
  type = "text",
  textarea,
  ...rest
}: { name: string; label: string; type?: string; textarea?: boolean; required?: boolean; autoComplete?: string }) {
  const id = `f-${name}`;
  return (
    <div className="field">
      {textarea ? (
        <textarea id={id} name={name} placeholder=" " rows={4} {...rest} />
      ) : (
        <input id={id} name={name} type={type} placeholder=" " {...rest} />
      )}
      <label htmlFor={id}>{label}</label>
      <span className="field__line" aria-hidden="true" />
    </div>
  );
}
