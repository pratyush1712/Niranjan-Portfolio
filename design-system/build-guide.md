# Build Guide — Beam Path

How to build the site in `design-system.md`. Read that first; this covers stack, structure, data, and the things that are easy to get wrong.

---

## 1. Stack

**Next.js (App Router) + TypeScript + plain CSS.**

The whole site is one route with static content. Don't reach for a CMS or a component library.

| Concern   | Choice                                    | Why                                                                                                                                                                                    |
| --------- | ----------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Framework | Next.js 15, App Router, fully static      | Free metadata + image handling; static export if you want GitHub Pages                                                                                                                 |
| Styling   | CSS Modules over `tokens.css`             | ~180 lines of CSS total. Tailwind's value is consistency across a team; here the token file already does that, and Tailwind's arbitrary-value syntax will fight the wavelength system. |
| Content   | TypeScript data files, MDX for notes only | Publications and talks are structured records, not prose                                                                                                                               |
| Fonts     | `@fontsource` self-hosted                 | No render-blocking Google request, no third-party dependency on a page that must load in a hotel lobby                                                                                 |
| Deploy    | Vercel or Cloudflare Pages                | Free tier, custom domain, edge cache                                                                                                                                                   |
| Domain    | `niranjan-kulkarni.com`                   | Not `.dev`, not a hyphenated variant. This URL goes at the top of a CV and into email signatures for the next decade.                                                                  |
| Analytics | Plausible, or nothing                     | Never Google Analytics on a page a PI will open — a cookie banner on an academic portfolio is a self-inflicted wound                                                                   |

**If you want it simpler:** a single `index.html` with `tokens.css` and one stylesheet, deployed to Cloudflare Pages, is a completely legitimate answer for this site and will outlive the framework choice. Use Next.js if the notes section is real; use plain HTML if it isn't.

---

## 2. Structure

```
app/
  layout.tsx              # <html data-theme>, fonts, metadata, JSON-LD
  page.tsx                # composes every section in order
  notes/[slug]/page.tsx   # only if the notes section ships
  globals.css             # reset + base type + layout primitives
  tokens.css              # the token file — never edit values elsewhere

components/
  TopBar.tsx
  IlluminationToggle.tsx  # 'use client'
  BeamRail.tsx            # 'use client'
  Hero.tsx
  SectionHead.tsx
  ThrustCard.tsx
  SystemCase.tsx
  PubItem.tsx
  TalkRow.tsx
  BenchColumn.tsx
  VideoCard.tsx           # 'use client' — facade needs state
  NoteCard.tsx
  RecordColumn.tsx
  FooterCTA.tsx
  figures/
    OcticalLayout.tsx     # the SVG bench diagram
    BScanFigure.tsx
    VascularFigure.tsx
    RamanFigure.tsx

content/
  profile.ts
  thrusts.ts
  publications.ts
  talks.ts
  bench.ts
  videos.ts
  record.ts
  notes/*.mdx

public/
  cv/niranjan-vinay-kulkarni-academic-cv.pdf
  video/*.mp4  *.webm  *.vtt
  posters/*.webp
  og.png
```

Only four components are client components. Everything else is a server component with zero JS shipped.

---

## 3. Content model

Types drive the components. Adding a publication should mean editing one array, nothing else.

```ts
// content/publications.ts
export type Publication = {
  id: string;
  title: string;
  venue: string; // "Biomedical Optics Express"
  year: number;
  status: "published" | "in-review" | "preprint" | "conference";
  authors: string[]; // full list, in order
  selfIndex: number; // position of the applicant — renders bold
  contribution: string; // REQUIRED. Verbs, first person, specific.
  links: { label: string; href: string }[]; // DOI · PDF · Code · Data
};
```

```ts
// content/thrusts.ts
export type Thrust = {
  id: string;
  wavelengthNm: 532 | 785 | 1300; // drives the colour token
  modality: string; // "SS-OCT"
  title: string;
  summary: string;
  figure: "bscan" | "vascular" | "raman";
  figureCaption: string; // real numbers only
  whereItGoes: string; // REQUIRED
};
```

```ts
// content/videos.ts
export type Video = {
  id: string;
  title: string;
  duration: string; // "11:42" — mono
  poster: string; // /posters/…webp
  sources: { src: string; type: string }[];
  captions?: string; // /video/….vtt — required if narrated
  size: "feature" | "small";
}; // an empty array renders the reserved-slot state, not a broken grid
```

Map wavelength to token in one place so the mapping can't drift:

```ts
export const channel = {
  532: "var(--w532)",
  785: "var(--w785)",
  1300: "var(--w1300)",
} as const;
```

Then `<article style={{ '--c': channel[thrust.wavelengthNm] }}>`.

---

## 4. Theme implementation

Three requirements: no flash on load, respects the OS preference on first visit, remembers an explicit choice.

**Blocking script in `<head>`** — this must run before first paint, so it goes in `layout.tsx` as a raw script tag, not a `useEffect`:

```html
<script dangerouslySetInnerHTML={{ __html: `
(function(){
  try {
    var saved = localStorage.getItem('illumination');
    var mode = (saved === 'light' || saved === 'dark')
      ? saved
      : (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    document.documentElement.setAttribute('data-theme', mode);
  } catch (e) {
    document.documentElement.setAttribute('data-theme', 'light');
  }
})();
`}} />
```

Set `data-theme="light"` on `<html>` in the JSX as the SSR default so nothing renders unstyled.

**Toggle component** writes `data-theme`, writes `localStorage`, updates `aria-pressed`. Wrap `localStorage` in try/catch — Safari private mode throws.

**Also update the browser chrome:**

```tsx
<meta name="theme-color" content="#EFF2F5" media="(prefers-color-scheme: light)" />
<meta name="theme-color" content="#0B0D12" media="(prefers-color-scheme: dark)" />
```

**Gotcha:** `color-mix(in srgb, var(--bench) 88%, transparent)` on the sticky bar is fine in every current browser but has no fallback in older Safari. Declare a solid `background: var(--bench)` first, then the `color-mix` line after it.

---

## 5. Academic SEO — this is not optional

Two audiences: a PI who Googles the name after reading an email, and Google Scholar.

**Highwire Press tags** are what Scholar actually parses. If any publication gets its own page, emit them there:

```html
<meta
  name="citation_title"
  content="Depth-resolved attenuation mapping in swept-source OCT of oral mucosa"
/>
<meta name="citation_author" content="Iyer, Rohan" />
<meta name="citation_author" content="Fernandes, Ana" />
<meta name="citation_publication_date" content="2026" />
<meta name="citation_journal_title" content="Biomedical Optics Express" />
<meta name="citation_pdf_url" content="https://…/preprint.pdf" />
```

Author order matters and each author gets their own tag. Getting this wrong is the usual reason a preprint never shows in Scholar.

**JSON-LD `Person`** in the root layout:

```json
{
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Niranjan Vinay Kulkarni",
  "jobTitle": "Biomedical engineering researcher",
  "knowsAbout": [
    "optical coherence tomography",
    "photoacoustic imaging",
    "Raman spectroscopy",
    "biomedical optics"
  ],
  "affiliation": { "@type": "Organization", "name": "…" },
  "sameAs": [
    "https://orcid.org/0000-0002-…",
    "https://scholar.google.com/citations?user=…",
    "https://www.linkedin.com/in/niranjan-kulkarni-95b5a4198/"
  ]
}
```

**Title tag:** `Niranjan Vinay Kulkarni — Biomedical optics: OCT, photoacoustic imaging, Raman`. The name first, the subfield second. Not "Portfolio" and not "Home."

**Meta description:** the hero thesis line, trimmed to 155 characters.

**OG image:** 1200×630, brightfield palette, name in Instrument Serif, one line of subfield in Plex Mono, the beam rail across the bottom. Generate it once as a static PNG — dynamic OG images aren't worth the runtime for a page that never changes.

Also ship `sitemap.xml`, `robots.txt`, and make sure the CV PDF is crawlable.

---

## 6. Performance budget

The realistic worst case is a PI opening this on conference wifi.

| Metric              | Target                                     |
| ------------------- | ------------------------------------------ |
| JS shipped          | < 8 KB gzipped                             |
| CSS                 | < 12 KB gzipped                            |
| LCP                 | < 1.2s on 4G                               |
| CLS                 | 0.00 — every media slot has `aspect-ratio` |
| Lighthouse          | 100 / 100 / 100 / 100                      |
| Video bytes on load | 0                                          |

How:

- Self-host fonts, subset to Latin, `font-display: swap`, preload only the two faces used above the fold (Instrument Serif 400, Plex Sans 400).
- Set `size-adjust` fallback metrics for each face to keep CLS at zero during swap.
- Figures are inline SVG, not images. They also inherit the theme via `currentColor` / token vars, which raster images can't.
- Poster images as WebP at 2× the display width, `loading="lazy"` on everything below the fold.
- Video: `preload="none"` and the facade pattern from design-system.md §7.
- No icon library. The four glyphs on the page are hand-drawn SVG paths.

---

## 7. Print stylesheet

People print academic pages, and a supervisor may hand a printout to a colleague. Ship `@media print`:

- Force brightfield tokens regardless of `data-theme`
- Hide the beam rail, nav, toggle, video frames
- Expand every link to show its href: `a[href^="http"]::after { content: " (" attr(href) ")" }`
- `page-break-inside: avoid` on publication and thrust cards
- Keep the contribution blocks — they're the reason to print it

---

## 8. Build order

Ship in this sequence. Each phase is independently deployable.

**Phase 1 — the frame (½ day)**

- [ ] `tokens.css`, `globals.css`, fonts, layout primitive (`.wrap`)
- [ ] Theme script, toggle, verify no flash on hard reload in both modes
- [ ] TopBar, BeamRail, FooterCTA

**Phase 2 — evidence (1 day)**

- [ ] Content types + real data for publications, talks, thrusts, bench
- [ ] Hero, SectionHead, ThrustCard, PubItem, TalkRow, BenchColumn
- [ ] CV PDF in place and linked

At the end of Phase 2 the site is genuinely useful. Deploy it. Everything after is upside.

**Phase 3 — the system case (½ day)**

- [ ] `OpticalLayout` SVG with real component labels
- [ ] Spec table with measured values
- [ ] The "what I'd do differently" paragraph

**Phase 4 — media (½ day)**

- [ ] VideoCard with facade loading, posters, captions
- [ ] Encode and upload the first video
- [ ] Confirm CLS is still 0.00 with and without sources

**Phase 5 — polish**

- [ ] JSON-LD, OG image, sitemap, meta
- [ ] Print stylesheet
- [ ] Record section, notes (or delete both)

---

## 9. Pre-launch check

**Function**

- [ ] Both modes render correctly on hard reload, in a new profile, and with OS dark mode on
- [ ] No flash of the wrong theme
- [ ] Keyboard path complete; focus visible on every element in both modes
- [ ] Every link resolves — including the CV, ORCID, and Scholar
- [ ] Works with JavaScript disabled (loses the beam animation and the toggle; everything else must read)

**Content**

- [ ] Contribution sentence on every publication
- [ ] No adjective doing a number's job
- [ ] Bench levels survive an interview question
- [ ] Name spelled consistently with the CV, ORCID, and paper bylines

**Technical**

- [ ] Lighthouse 100 across the board on mobile
- [ ] CLS 0.00 with slow network throttling
- [ ] Renders on Safari iOS 16 (`color-mix`, `aspect-ratio` fallbacks)
- [ ] Print preview is legible in one pass

---

## 10. After launch

- **Add the URL everywhere immediately:** email signature, CV header, ORCID, Scholar profile, LinkedIn, GitHub bio, conference badges. The site's value is proportional to how often it's the second thing a PI sees after an email.
- **Update on a schedule, not on inspiration.** Once a term: new publications, new talks, refreshed CV. A site that stops in 2026 is a liability during a 2027 application cycle.
- **Keep the notes section honest.** If two terms pass without a post, delete the section rather than let it date the page.
- **Version the CV filename** (`niranjan-vinay-kulkarni-academic-cv.pdf`) and keep the link path stable via a redirect, so an old link in an old email still resolves.
