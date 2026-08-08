# Niranjan Vinay Kulkarni — Portfolio

A static academic/research portfolio built with **Next.js 16, TypeScript, and plain CSS/CSS Modules**.

## Where to edit things

- `content/portfolio-content.md` — factual source of truth for Niranjan's public content.
- `design-system/design-system.md` — visual and interaction rules.
- `design-system/build-guide.md` — implementation guidance.
- `design-system/tokens.css` — design tokens and brightfield/darkfield palette.
- `app/` — routes and global styles.
- `components/` — reusable UI components.
- `public/` — files that should be directly downloadable by visitors, including the CV.

## Run locally

Requires Node.js 20.9 or newer.

```bash
npm install
npm run dev
```

Then open `http://localhost:3000`.

Before deploying changes:

```bash
npm run lint
npm run build
```

## Deployment

The project is intentionally Vercel-friendly. Connect this GitHub repository to Vercel and use the default Next.js settings. No environment variables or database are required for the portfolio.

Every push to the production branch can be deployed automatically by Vercel.

## Styling

There is intentionally **no Tailwind, component library, or icon library**. The portfolio already has a complete design-token system and should remain lightweight. Fonts are self-hosted through Fontsource packages.

## Content safety

Do not infer or fabricate research just to fill a component. In particular, read `content/portfolio-content.md` before using research examples from the design-system files.
