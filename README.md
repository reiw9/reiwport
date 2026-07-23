# Tala Kayali — Portfolio

Personal portfolio built with Next.js 14 (App Router), TypeScript, Tailwind CSS, and Framer Motion.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run build   # production build
npm run start   # serve the production build
npm run lint     # ESLint
npm run typecheck
```

## Before you deploy — things to fill in

- **Domain**: update `url` in [`src/lib/site.ts`](src/lib/site.ts) to your real domain (used in metadata, sitemap, and JSON-LD).
- **Social links**: `src/lib/site.ts` → `social.github` / `social.linkedin` / `social.twitter` are placeholder `#` links — swap in real profile URLs.
- **Screenshots**: every `ScreenshotPlaceholder` (home, project cards, the JC Dental case study, the About portrait) is a styled placeholder, not a real image. Replace with real screenshots via `next/image` when you have them, in `src/components/home/FeaturedProject.tsx`, `src/components/projects/ProjectCard.tsx`, `src/components/projects/ScreenshotGallery.tsx` (fed by `src/lib/data/jc-dental.ts`), and `src/components/about/AboutHero.tsx`.
- **Contact form**: `src/components/contact/ContactForm.tsx` hands off to a `mailto:` link (no backend required). If you'd rather receive submissions via a form backend (Resend, Formspree, etc.), swap the `handleSubmit` logic for an API call.
- **Content**: all copy lives in `src/lib/data/` (`skills.ts`, `experience.ts`, `projects.ts`, `jc-dental.ts`) and `src/lib/site.ts` — edit there rather than in components.

## Structure

```
src/
  app/            routes (App Router), metadata, sitemap.ts, robots.ts, opengraph-image.tsx
  components/
    layout/        Navbar, Footer, ThemeProvider/Toggle
    ui/             Button, Card, Section, Reveal (scroll animation), ScreenshotPlaceholder, etc.
    home/ about/ projects/ skills/ experience/ contact/   page-specific sections
  lib/
    data/           all site content (skills, experience, projects, jc-dental case study)
    site.ts         name, contact, social links, nav
  types/            shared TypeScript types
```

## Notes

- Dark mode is the default theme; toggle persists via `next-themes`.
- All animations respect `prefers-reduced-motion`.
- Metadata, Open Graph (dynamically generated via `next/og`), sitemap, robots, and a `Person` JSON-LD block are already wired up in [`src/app/layout.tsx`](src/app/layout.tsx).
