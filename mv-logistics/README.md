# Mukhtalif Ventures — Logistics Website

Next.js 14 (App Router) + TypeScript + Tailwind CSS.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Build

```bash
npm run build
npm start
```

## Structure

- `app/` — one folder per route (About, Services, Industries, Coverage,
  Track & Trace, Careers, Blog, Contact, Request Quote, Privacy, Terms).
  `app/services/[slug]` is a single dynamic template that renders all
  six service detail pages from `lib/data.ts`.
- `components/` — shared UI (Navbar, Footer, cards, animated stat counters,
  the animated "route line" motif used across hero/coverage sections).
- `lib/data.ts` — all site copy and content in one place. Edit this file
  to change services, industries, stats, testimonials, team, blog posts,
  coverage cities, and nav links without touching page markup.

## Design tokens

Colors, radii, and shadows are defined in `tailwind.config.ts` and pulled
straight from the brand palette (`#C62828` red, `#1E4E9D` blue, `#D4A62A`
gold accent). Fonts: Manrope (display), Inter (body), IBM Plex Mono
(stats/tracking IDs), loaded via `next/font` in `app/layout.tsx`.

## Notes / next steps

- This build follows the written brand brief (colors, sitemap, sections)
  rather than the Figma file, since Figma's live canvas can't be read
  through a static fetch. Send exported screenshots of your Figma frames
  (desktop + mobile) and I'll adjust layout, spacing, and imagery to match
  exactly.
- Hero/about imagery currently uses gradient placeholders (`RouteLine`
  motif) — swap in real photography by dropping files into `public/` and
  replacing the gradient `div`s with `next/image`.
- Forms (Quote, Contact, Careers) are UI-complete but not wired to a
  backend/email service yet — hook up an API route or a provider like
  Resend/Formspree when ready.
- Track & Trace uses a mock/demo result — connect it to your real
  shipment API to make it live.
