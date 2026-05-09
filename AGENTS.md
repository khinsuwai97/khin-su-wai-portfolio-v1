# AGENTS.md

This file provides guidance to Codex (Codex.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start dev server at localhost:3000
npm run build    # Production build
npm run start    # Start production server
npm run lint     # Run ESLint
```

No test suite is configured.

## Architecture

Single-page Next.js 16 (App Router) portfolio site. The entire page is rendered in `app/page.tsx` as a stacked sequence of section components with hash-based scroll navigation (`#about`, `#experience`, `#skills`, `#projects`, `#contact`). Navigation uses a custom scroll handler with an 80px header offset.

All components are `'use client'` — there is no server-side data fetching.

### Content is fully hardcoded in components

There is no CMS, database, or external data source. To update any content, edit the relevant component directly:

| Content | File |
|---|---|
| Work experience | `components/Experience.tsx` |
| Projects (6 items) | `components/Projects.tsx` |
| Skills | `components/Skills.tsx`, `components/AdditionalSkills.tsx` |
| Hero / intro copy | `components/Hero.tsx` |
| Contact info | `components/Contact.tsx` |

### Static assets

- `/public/Khin_Su_Wai_Resume.pdf` and `/public/Khin_Su_Wai_Cover_Letter.pdf` — downloadable from the footer and floating button
- `/public/images/` — project screenshots and profile photo

### Styling

Tailwind CSS v4 (PostCSS) with a dark navy/teal theme. Custom CSS variables (`--color-navy-900/800/700`) and scrollbar styles are in `app/globals.css`. Font is Rubik (Google Fonts).

### Animations

Framer Motion with `useInView` for scroll-triggered reveals. Most section components use a shared pattern: `motion.div` wrapping content with `initial`/`animate`/`transition` variants gated on `useInView`.

### Navigation state

`components/Navigation.tsx` owns two pieces of client state: active section (tracked via `IntersectionObserver`) and mobile menu open/close. No global state management — Redux Toolkit is listed as a skill but not used in this project.
