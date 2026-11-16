import type { ServiceId } from "@/lib/content";

// Hand-built line glyphs; strokes draw in via CSS when the parent is revealed/hovered.
const paths: Record<ServiceId, React.ReactNode> = {
  research: (
    <>
      <circle cx="52" cy="52" r="32" />
      <path d="M75 75 104 104" />
      <path d="M38 64V54M50 64V44M62 64V36" className="g-acc" />
      <path d="M30 70h44" className="g-thin" />
      <path d="M96 16v12M90 22h12" className="g-thin" />
    </>
  ),
  design: (
    <>
      <path d="M14 96C34 40 70 92 106 26" />
      <path d="M14 96 38 54M106 26 78 60" className="g-thin" />
      <rect x="32" y="48" width="12" height="12" className="g-acc" />
      <rect x="72" y="54" width="12" height="12" className="g-acc" />
      <circle cx="14" cy="96" r="4" />
      <circle cx="106" cy="26" r="4" />
    </>
  ),
  development: (
    <>
      <path d="M40 34 14 60l26 26" />
      <path d="M80 34l26 26-26 26" />
      <path d="M68 24 52 96" className="g-acc" />
      <path d="M20 104h80" className="g-thin" />
    </>
  ),
  marketing: (
    <>
      <path d="M14 104h92M14 104V16" className="g-thin" />
      <path d="M22 88 46 66l16 12 38-46" />
      <path d="M84 30h16v16" />
      <circle cx="46" cy="66" r="4" className="g-acc" />
      <circle cx="62" cy="78" r="4" className="g-acc" />
    </>
  ),
  social: (
    <>
      <circle cx="60" cy="30" r="12" />
      <circle cx="26" cy="88" r="12" />
      <circle cx="94" cy="88" r="12" />
      <path d="M54 41 32 77M66 41l22 36M38 88h44" className="g-acc" />
      <circle cx="60" cy="68" r="3" className="g-thin" />
    </>
  ),
  ecommerce: (
    <>
      <path d="M22 44h76l-8 60H30z" />
      <path d="M42 44V36a18 18 0 0 1 36 0v8" />
      <path d="M44 64v12M76 64v12" className="g-acc" />
      <path d="M30 92h60" className="g-thin" />
    </>
  ),
  amazon: (
    <>
      <path d="M60 14 102 36v48L60 106 18 84V36z" />
      <path d="M18 36l42 22 42-22M60 58v48" className="g-thin" />
      <path d="M38 25l42 22v16" className="g-acc" />
    </>
  ),
};

export default function Glyph({ id, className = "" }: { id: ServiceId; className?: string }) {
  return (
    <svg className={`glyph ${className}`} viewBox="0 0 120 120" fill="none" aria-hidden="true">
      {paths[id]}
    </svg>
  );
}
