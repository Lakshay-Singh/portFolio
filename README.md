# Lakshay Singh - Portfolio

Rebuilt portfolio, inspired by the motion/typography language of tajmirul.site (Next.js + Tailwind + GSAP/ScrollTrigger + Lenis smooth scroll), with your own content and blue brand accent.

## Stack

- Next.js 16 (App Router) + TypeScript
- Tailwind CSS v4
- GSAP + ScrollTrigger - scroll reveal animations, staggered skill/tag/timeline entrances
- Lenis: smooth scroll (respects `prefers-reduced-motion`)
- Custom canvas particle field background

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Build

```bash
npm run build
npm start
```

## Deploy

Push to a GitHub repo and import into Vercel (zero-config - it's a standard Next.js app), or run `vercel` from this folder.

## Content

All copy lives directly in the section components under `components/`: edit `Hero.tsx`, `About.tsx`, `Experience.tsx`, `Projects.tsx`, `HowIBuild.tsx`, `Stack.tsx`, `Contact.tsx` directly to update text. Assets (headshot, resume, project screenshot) are in `public/assets/`.

## Notes

- **Fonts**: Typography uses Next.js `next/font/google` optimization (`Bebas Neue` for display, `Inter` for body). Fonts are bundled locally at build time for zero layout shift (FOUT-free).
- **Icons**: Tech icons in the Stack section use the devicon CDN + simpleicons CDN.
- **Project Links**: The Reliq project card has no live link yet since it isn't public — swap in a URL and flip the badge to "Live" once it ships.
