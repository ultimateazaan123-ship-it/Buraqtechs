# Buraqtechs website

Next.js (App Router) site, statically exported: every page ships as pre-rendered HTML.

```bash
npm install
npm run dev       # http://localhost:3000
npm run build     # static site in ./out (includes the prefetch fix-up step)
npm run preview   # serve ./out locally
```

Deploy the `out/` folder to any static host (Vercel, Netlify, Cloudflare Pages, S3, cPanel).

## Where things live

- `lib/content.ts`: all site copy, services, clients, stats and contact details
- `app/*/page.tsx`: Home, About, Services, Contact, 404
- `components/`: sections and motion pieces (warp hero, services index, pinned rail, 6-D process, page transition, cursor)
- `app/globals.css`: design tokens and all styling
- `scripts/flatten-prefetch.mjs`: post-build step that fixes Next 16 export prefetch paths for plain static hosts

The contact form opens the visitor's email app with the request pre-filled (no backend).
Hook it to a form service or API route if you want submissions stored.

Motion respects `prefers-reduced-motion`.
