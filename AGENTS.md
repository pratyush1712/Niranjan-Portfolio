# Agent instructions

This repository is Niranjan Vinay Kulkarni's academic/research portfolio.

## Read first

1. `content/portfolio-content.md` — **canonical factual source of truth**.
2. `design-system/design-system.md` — visual system and UX rules.
3. `design-system/build-guide.md` — intended structure and implementation guidance.
4. `design-system/tokens.css` — token source of truth.

If example content in the design system conflicts with `content/portfolio-content.md`, the content file wins.

## Stack

- Next.js 16 App Router
- React 19
- TypeScript
- CSS Modules + `design-system/tokens.css`
- Self-hosted Fontsource packages
- Vercel-compatible static public site

Do not introduce Tailwind, shadcn/ui, Material UI, Bootstrap, an icon library, a CMS, a database, or state-management library unless a real requirement appears.

## Scientific-content guardrails

- Do not fabricate research areas, measurements, publication links, contributions, ORCID/Scholar identifiers, videos, datasets, or project details.
- Photoacoustic imaging, Raman spectroscopy, 532 nm, and 785 nm appear in inherited design examples but are not established as Niranjan's work.
- 1300 nm OCT is explicitly supported by the CV/content source.
- Adapt the visual system when real content does not match a mock component; never adapt facts to fit the design.

## Quality checks

Before committing implementation changes:

```bash
npm run lint
npm run build
```

Keep the site usable without unnecessary client JavaScript, preserve keyboard accessibility, honor `prefers-reduced-motion`, and verify both brightfield and darkfield modes.
