# Beam Path — Design System

Portfolio for a biophotonics PhD applicant. Two illumination modes: **brightfield** (light, default) and **darkfield** (dark).

Everything here is decidable. When a new case comes up that isn't covered, resolve it against §1 — if a choice can't be justified by the concept, it's decoration and gets cut.

---

## 1. The concept

**The page is an optical bench.**

Light mode is that bench drawn as a schematic on vellum. Dark mode is the same bench with the room lights off. This isn't a metaphor applied to the surface — it determines the structure:

- The scroll indicator is a **beam** traveling through source → dichroic → objective → detector. Sections are components in the path.
- **Colour encodes wavelength.** Green is 532 nm because the photoacoustic work uses 532 nm excitation. Red is 785 nm because the Raman probe is a 785 nm probe. Violet is 1300 nm because OCT at 1300 nm is invisible and gets false-coloured, exactly as it would in a paper.
- **Monospace means machine-generated.** Wavelengths, resolutions, dates, durations, spec values, counts. If a human wrote the sentence, it isn't mono.
- The page background carries a faint dot grid at 26 px — an M6 optical breadboard at scale.

**Three tests before adding anything:**

1. Does it exist on a real optical bench, in a real paper, or in real lab vocabulary?
2. Does it survive both illumination modes without special-casing?
3. Does it tell a faculty reader something they didn't know? Decoration fails this.

---

## 2. Typography

Three families, three jobs. Never mix the jobs.

| Family | Role | Used for |
|---|---|---|
| **Instrument Serif** 400 / 400 italic | Display | The name in the hero, section `h2`, the case-study `h3`, the closing line. Nothing else. |
| **IBM Plex Sans** 400 / 500 / 600 | Body | All prose, card headings, links, buttons, table content. |
| **IBM Plex Mono** 400 / 500 | Utility | Wavelengths, dates, durations, spec values, section tags, chips, link pills, nav name, captions. |

The name of the display face is a coincidence worth keeping. It reads as an editorial serif over technical metadata — a person's voice above machine output.

### Scale

| Token | Size | Family | Tracking | Where |
|---|---|---|---|---|
| `--t-hero` | 52 → 104 fluid | display | `-0.02em` | Hero name only, `line-height: .95` |
| `--t-h2` | 34 | display | `-0.01em` | Section headings |
| `--t-h3-case` | 26 | display | `-0.01em` | Case-study heading |
| `--t-lead` | 19 | body | 0 | Hero thesis paragraph |
| `--t-h3` | 17.5 | body 600 | 0 | Card and publication titles |
| `--t-body` | 16 | body | 0 | Default |
| `--t-body-sm` | 14.5 | body | 0 | Card copy, bench rows |
| `--t-caption` | 13.5 | body | 0 | Contribution notes, secondary lines |
| `--t-label` | 11.5 | mono, uppercase | `0.18em` | Section tags, chips |
| `--t-micro` | 10.5 | mono, uppercase | `0.12em` | Figure captions, dates, colophon |

### Rules

- Every paragraph gets `max-width: var(--read)` (64ch). No exceptions — long measures are the fastest way to make an academic page unreadable.
- Uppercase only in mono, and only at `--t-label` / `--t-micro`. Uppercase body text is banned.
- One italic per screen at most. The hero's `<em>light into diagnosis</em>` is the intended one.
- Sentence case for every heading, button, and label except mono micro-labels.
- Don't add a display weight. Instrument Serif ships 400 only; faux-bolding it will look wrong.

---

## 3. Colour

Read `tokens.css` for values. The system splits cleanly:

**Neutrals** carry all structure — `--bench`, `--panel`, `--panel-2`, `--rule`, `--rule-soft`, `--ink`, `--muted`, `--dim`.

**Wavelength channels** carry meaning and nothing else:

| Token | Wavelength | Bound to |
|---|---|---|
| `--w532` | 532 nm | Photoacoustic microscopy |
| `--w785` | 785 nm | Raman margin probe |
| `--w1300` | 1300 nm | Swept-source OCT |

`--w532` doubles as the interaction accent (focus rings, hover states, the "applying" chip) because green is the availability signal and it happens to be the group's most-used line. That's the only overload permitted.

**Forbidden:**

- Gradients, anywhere, in any mode. The one exception is the radial wash behind an empty video frame, which stands in for a poster image and disappears the moment a real poster is set.
- A fourth accent colour. If a fourth research area appears, it gets a real wavelength and joins the table above.
- Using a wavelength colour on content that doesn't belong to that thrust.
- Semantic colour for status (no red = bad, green = good). The channel colours already mean something.

### Contrast — measured, not assumed

| Pair | Light | Dark |
|---|---|---|
| `--ink` on `--bench` | 21.0:1 | 15.9:1 |
| `--muted` on `--bench` | 5.4:1 | 7.2:1 |
| `--dim` on `--bench` | 4.7:1 | 5.4:1 |
| `--w532` on `--panel` | 5.4:1 | 11.4:1 |
| `--w785` on `--panel` | 5.5:1 | 6.1:1 |
| `--w1300` on `--panel` | 7.7:1 | 7.0:1 |

`--dim` is the floor. Nothing on the page may be lighter than it. Three mockup values were corrected to reach AA — the note at the bottom of `tokens.css` lists them, don't revert.

---

## 4. Surfaces, rules, elevation

Three surface levels only:

- `--bench` — the page
- `--panel` — anything raised: cards, the CV button's frame, video cards
- `--panel-2` — anything recessed: the beam rail, figure wells inside a card, the reserved-slot note

Rules are always exactly 1px. `--rule` separates structures; `--rule-soft` separates rows *inside* a structure. Radii are 2px for interactive elements and 3px for panels — enough to not look like a 1998 table, not enough to look like a SaaS dashboard.

**Elevation is mode-dependent and this is deliberate.** In brightfield, cards cast a long soft shadow (`--shadow`). In darkfield, `--shadow: none` and depth comes from surface value instead. Shadows on dark backgrounds read as grime.

---

## 5. Components

### TopBar
Sticky, 62px, translucent `--bench` with `backdrop-filter: blur(10px)`, 1px bottom rule. Left: name in mono uppercase. Centre-right: nav links (hidden below 960px). Right: illumination toggle + CV button.

The CV button is a link pill, not a filled button. The only filled button on the page is the hero CTA — one primary action per screen.

### IlluminationToggle
Two buttons in a bordered group, labelled **Brightfield** and **Darkfield**. Each carries `aria-pressed`; the active one gets `--panel-2` background and `--ink` text. Labels collapse to just the disc glyph below 760px.

Don't replace with a sun/moon icon. The microscopy terms are the joke and they're correct terms.

### BeamRail
64px band under the header, `--panel-2` ground. A static `--rule` line spans it; a `--beam` line grows left-to-right with scroll progress from x=120 to x=1200. Four component glyphs sit at fixed positions with mono labels beneath. The bloom (`--beam-glow`) exists only in darkfield.

`aria-hidden="true"`. It's decorative to a screen reader and there's no non-visual equivalent worth constructing.

### ThrustCard
`--panel`, 2px left bar in the thrust's wavelength colour, 22px padding. Order is fixed:

```
λ label (mono, wavelength colour)
h3 title
description (--t-body-sm, --muted)
figure  → SVG in a --panel-2 well, 1px --rule-soft border
        → mono caption with real numbers
"Where it goes" block, separated by --rule-soft
```

The "Where it goes" line is the point of the card. It shows the applicant knows the limitation of their own work — cut everything else before cutting this.

### SystemCase
Two columns, 1.25fr / 1fr. Left is the labelled optical layout SVG in a `--panel` card with a `Fig. n —` caption. Right is a heading, two paragraphs, and a spec table.

The second paragraph is always *what I'd do differently*. This is the highest-value sentence on the page for a PI. It stays.

Spec table: label left in `--ink`, value right in mono `--dim`, rows separated by `--rule-soft`. Values only — never a bar or a rating.

### PubItem
Three columns: year (mono, 104px) / content / link pills. Content is title, venue, then the **contribution block** — `--panel` background with a 2px `--w532` left border, opening with a bold "My contribution:".

Every publication has a contribution block. A publication without one gets deleted or gets a sentence written for it.

### TalkRow
Lighter than PubItem: date / title + venue / kind. `--rule-soft` separators, no card.

### BenchColumn
`--panel` card, mono uppercase heading, rows of `capability … level` with the level right-aligned in mono `--dim`.

Levels use an honest vocabulary: `daily, 3 yrs` · `built 2` · `certified` · `primary` · `proficient` · `working` · `trained`. Never a percentage, never a five-dot rating. Overclaiming here is the single most detectable lie on an applicant's site.

### VideoCard
`--panel` card. The frame holds `aspect-ratio: 16/9` (16/10 for the small variant) and never collapses when empty — the layout must not shift when a video is added later. Below it, a meta bar: title left, duration in mono right.

Empty state is a radial wash + a play glyph. See §7 for real video handling.

### NoteCard, RecordColumn, FooterCTA
Straightforward `--panel` cards / rule-separated rows. The footer heading is display, the links are mono, and the closing line ("Looking for a lab, not a job") is the last piece of voice on the page — keep it short.

### Buttons and pills

| | Style | Use |
|---|---|---|
| `.btn-solid` | `--ink` fill, `--bench` text, hovers to `--w532` + `--on-accent` | Download CV. Once per page. |
| `.btn-ghost` | `--panel` fill, `--rule` border | Secondary hero actions |
| `.chip` | mono, `--panel`, `--rule` border | Status. `.chip.on` for availability. |
| link pill | mono 11px, `--rule` border, hovers to `--w532` | DOI, PDF, Code, Data, Poster |

---

## 6. Motion

Four movements exist. Adding a fifth requires a reason.

1. **The beam** advances with scroll. Passive listener, one `setAttribute` per frame.
2. **Theme transition** — 250ms on `background-color` and `color` on `<body>` only. Don't transition every element; it produces a smear.
3. **Hover** — 140–180ms on `border-color` and `color`. No transforms on cards in this direction; the bench doesn't float.
4. **Focus** — instant. Never animate a focus ring.

No scroll-reveal fades, no parallax, no typed text, no counting numbers. Under `prefers-reduced-motion: reduce`: disable the beam listener, drop smooth scrolling, remove the body transition.

---

## 7. Video

The section is the reason the design exists in this shape, so it has its own rules.

- **Reserve the space.** Every slot uses `aspect-ratio` and renders its frame whether or not a source exists. Adding a video must never reflow the page.
- **Self-host, don't embed YouTube.** A YouTube chrome drops branding and a recommendation grid into an academic page. Ship an MP4 with a poster.
- **Never autoplay with sound.** Silent ambient loops (a scan appearing in real time) may autoplay muted with `playsinline` and `loop`; anything with narration is click-to-play.
- **Facade pattern.** Render a poster image plus a play button; instantiate the `<video>` element on click. Keeps the page at zero video bytes on load.
- **Captions are required.** A `.vtt` track on every narrated video. Alignment tutorials get watched with sound off more often than not.
- **Encoding:** H.264 High profile, 1080p, CRF 21–23, AAC 128 kbps, `-movflags +faststart`. Ship a WebM/VP9 alternate if convenient. Poster as WebP at the display width.
- **Duration in mono, always.** It's a machine fact.

---

## 8. Responsive

| Breakpoint | Change |
|---|---|
| ≥ 960px | Full layout: 3-col thrusts, 2-col case/bench/media, 3-col grids |
| < 960px | Everything to single column; nav links hide (CV + toggle stay); pub/talk rows stack |
| < 760px | Toggle labels collapse to glyphs |
| < 640px | Card grids to one column |

Gutter stays 28px throughout. The beam rail keeps `preserveAspectRatio="none"` so it stretches rather than crops.

Below 960px the *order* matters more than the layout: hero → research → system → publications. A PI on a phone between meetings should hit the contribution blocks within three swipes.

---

## 9. Accessibility floor

Non-negotiable, verified before launch:

- All text ≥ 4.5:1 in both modes. `--dim` is the floor value.
- Visible focus on every interactive element: `2px solid var(--w532)`, `outline-offset: 3px`. Never `outline: none`.
- Full keyboard path through nav → toggle → CV → every link and play button, in visual order.
- Toggle buttons carry `aria-pressed`; the group carries `aria-label="Illumination mode"`.
- Decorative SVGs get `aria-hidden="true"`. Data figures get `role="img"` and an `aria-label` that states what the figure shows ("Optical layout of the swept-source OCT bench").
- Heading order never skips a level.
- `prefers-reduced-motion` honoured as in §6.
- Colour is never the only carrier of meaning — every wavelength-coded card also states its wavelength in text.
- Video: captions, keyboard-operable controls, no flashing content.

---

## 10. Voice

The copy is part of the system.

- Plain verbs, sentence case, active voice.
- Specific numbers beat adjectives: "12 µm axial resolution" not "high resolution."
- State the limitation. "Fluorescence background rejection — currently the limiting factor, not the classifier" is more persuasive than any claim of excellence.
- Say what *you* did. "Built the sample arm, wrote the recon code, ran all 42 acquisitions."
- No "passionate," "cutting-edge," "innovative," "leverage," "journey."
- The single first-person statement of ambition is the hero line and the footer line. Everywhere else the work speaks.

---

## 11. Content that has to be true before launch

The design is a frame around evidence. Ship blocked until each item is real:

- [ ] CV PDF exists, is current, and matches the site
- [ ] Every publication has a working link (DOI, preprint, or poster PDF)
- [ ] Every publication has a written contribution sentence
- [ ] Bench levels are honest and defensible in an interview
- [ ] The case-study spec table has measured numbers, not datasheet numbers
- [ ] "Where it goes" is written for all three thrusts
- [ ] Email is a real, monitored address
- [ ] ORCID and Scholar links resolve
- [ ] At least one video exists, or the media section is cut for v1
- [ ] Notes section has 3+ posts, or is cut — one stale post is worse than none
