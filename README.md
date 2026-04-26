# zarakshah.com

Personal site. Next.js 16, Tailwind v4, MDX-ready.

## Run

```bash
pnpm install
pnpm dev      # http://localhost:3000
pnpm build    # production build
pnpm start    # serve the build
```

## Layout

```
src/
  app/
    layout.tsx           root layout, mode pre-paint script, nav + footer
    page.tsx             home (mode-aware copy)
    projects/page.tsx    project list
    writing/page.tsx     Medium feed (revalidates hourly)
    not-found.tsx
    robots.ts, sitemap.ts
    globals.css          Tailwind + mode-driven CSS variables
  components/
    ModeProvider.tsx     React context, persists mode in localStorage
    ModeToggle.tsx       Professional / Personal switch
    Nav.tsx, Footer.tsx
  lib/
    mode.ts              Mode type + storage key
    projects.ts          pinned-repo list
    medium.ts            RSS fetcher + Pro/Personal classifier
mdx-components.tsx       required for @next/mdx
```

## Modes

The site has two modes: **work** (warm tan, `rgb(148,137,121)`) and **life**
(warm cream, `rgb(223,208,184)`). The toggle in the nav switches both the
palette and which projects/posts are visible. Mode is persisted in
`localStorage` and applied before paint to avoid flash.

To add a post to a specific mode, edit `LIFE_TITLES` in `src/lib/medium.ts`.
By default everything from the Medium feed is treated as `work` unless its
title appears in that set.

## Display pictures

`/public/Work_dp.jpg` (shown in Work mode) and `/public/life_dp.jpg` (shown
in Life mode). Square images, displayed as 96×96 circles. Update the file
extensions in `src/app/page.tsx` if you use `.png` / `.webp`.

## TODO

- Add a favicon to `public/` (currently 404s).
- Optional: add original posts as MDX files under `src/content/writing/` and a
  `[slug]` route. Infrastructure (`mdx-components.tsx`, `pageExtensions`) is
  already wired in `next.config.ts`.

## Deploy

Static-friendly. Vercel / Netlify / Cloudflare Pages all work with no extra
config. Set the build command to `pnpm build` and output to `.next`.
