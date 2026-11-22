import type { BrandIconName } from "@/lib/content";

// 24px line icons for the Branding page, drawn to match the site's stroke style.
const paths: Record<BrandIconName, React.ReactNode> = {
  search: (
    <>
      <circle cx="10.5" cy="10.5" r="6.5" />
      <path d="M15.5 15.5 21 21" />
    </>
  ),
  pencil: <path d="M4 20l1.2-4.8L15.5 4.9a2 2 0 0 1 2.8 0l.8.8a2 2 0 0 1 0 2.8L8.8 18.8zM13.5 7l3.5 3.5" />,
  machine: <path d="M3 20h18M5 20v-7h11v7M16 13V6H6v4M10 10v3M18 9h2v4h-4" />,
  inspect: (
    <>
      <circle cx="10.5" cy="10.5" r="6.5" />
      <path d="M15.5 15.5 21 21M7.8 10.6l2 2 3.6-3.8" />
    </>
  ),
  camera: (
    <>
      <path d="M3 8.5A1.5 1.5 0 0 1 4.5 7H8l1.5-2.5h5L16 7h3.5A1.5 1.5 0 0 1 21 8.5v10a1.5 1.5 0 0 1-1.5 1.5h-15A1.5 1.5 0 0 1 3 18.5z" />
      <circle cx="12" cy="13" r="3.5" />
    </>
  ),
  launch: <path d="M4 5h16v11H4zM2 19h20M8 8.5h1.2l1.4 4.5h4.6l1.2-3.2H10" />,
  rocket: (
    <>
      <path d="M14 4.5c3.2-.6 5.1 1 5.5 1.5.4.5 2 2.3 1.5 5.5L13.5 19 5 10.5z" />
      <path d="M8.5 14 5 17.5M10.5 16l-3 3M5 10.5 3.5 9 7 8M13.5 19l1.5 1.5 1-3.5" />
      <circle cx="15" cy="9" r="1.6" />
    </>
  ),
  bulb: <path d="M9 18h6M10 21h4M12 3a6 6 0 0 0-3.9 10.6c.6.6.9 1.4.9 2.4h6c0-1 .3-1.8.9-2.4A6 6 0 0 0 12 3z" />,
  chart: (
    <>
      <circle cx="10" cy="10" r="6.5" />
      <path d="M14.8 14.8 21 21M7 12.5v-2M10 12.5V7.5M13 12.5V9" />
    </>
  ),
  shirt: <path d="M8.5 3 3 6l2 4.5 3-1.2V21h8V9.3l3 1.2L21 6l-5.5-3a3.5 3.5 0 0 1-7 0z" />,
  laptop: <path d="M4 5h16v11H4zM2 19h20M8 13v-2M12 13V8.5M16 13v-3.5" />,
  chat: <path d="M4 4.5h12v8.5H9l-4 3.5V13H4zM16 8.5h4V17h-1.5v3L15 17h-4.5v-2" />,
  megaphone: <path d="M3 10v4h3l8 4.5V5.5L6 10zM17 9a3.5 3.5 0 0 1 0 6M6 14l1.2 5H9.5" />,
  headset: <path d="M4 15v-3a8 8 0 0 1 16 0v3M4 14.5h3V20H5.5A1.5 1.5 0 0 1 4 18.5zM20 14.5h-3V20h1.5a1.5 1.5 0 0 0 1.5-1.5zM17 20c0 1-1.5 1.5-3.5 1.5" />,
};

export default function BrandIcon({ name, className = "" }: { name: BrandIconName; className?: string }) {
  return (
    <svg className={`bicon ${className}`} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      {paths[name]}
    </svg>
  );
}
