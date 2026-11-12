# eigibot-testing-homepage

Pre-launch landing page for the hoodie label. One page, no commerce, no waitlist.

**Status: pre-launch.** Nothing on this page is for sale.

---

## Stack

- Vite + React + TypeScript
- No CSS framework, no UI library, no runtime dependencies beyond React
- System-font fallback for Geist (self-hosting is a later step)

## Commands

```bash
npm install      # install dependencies
npm run dev      # local dev server
npm run build    # type-check + production build to dist/
npm run preview  # serve the production build
npm test         # run the test suite (vitest)
```

## Design direction

Direction A — "Drafting Table". Warm paper stock, near-black ink, hairline
rules, a single vermilion accent used mostly as marks. Technical / architectural
framing, as if the page were a sewing pattern.

### Colour roles

| Token          | Value     | Allowed use                                  |
| -------------- | --------- | -------------------------------------------- |
| `--paper`      | `#F2EEE6` | Page background                              |
| `--ink`        | `#191713` | All body and heading text                    |
| `--muted`      | `#5F5A52` | Secondary text (5.9:1)                       |
| `--accent-text`| `#B23E18` | **Only** accent permitted on small text (5.1:1) |
| `--graphic`    | `#C0441C` | Large text and graphics **only** — never body copy |
| `--rule`       | `#DAD3C4` | Decorative hairlines only                    |

There is no dark mode.

### Typography

- Headings: Geist 500. Body: Geist 400. **Never 700.**
- Eyebrows, labels and numbers: Geist Mono.
- H1: `clamp(2.5rem, 6.2vw, 4.25rem)`, `line-height: 0.98`, `letter-spacing: -0.025em`
- Body: 17px / 1.6, measure capped at 62ch
- Fallback stack is required: `Geist, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif`

### Layout

Exactly one breakpoint, at `768px`.

## Illustrations — PLACEHOLDERS

> **Every illustration in `src/illustrations/` is an obvious placeholder.**
> They are hand-authored monoline SVGs drawn to the art direction (2.5px master
> stroke, no faces, no hands, no shading, paper fill plus one accent shape).
> They exist to hold the composition and must be replaced with final artwork
> before launch.

- `SlotA.tsx` — hero illustration, `1600 x 1200` (4:3), crops to 1:1 on mobile
- `SlotB.tsx` — full-bleed illustration band, `2000 x 700`

Both files carry a prominent `PLACEHOLDER` comment at the top. The rendered page
shows no placeholder marker, by design; the labelling lives in the code and here.

## Unconfirmed content

The following are **not** confirmed and are deliberately absent from the copy:

- Garment specifications (fabric weight and similar)
- Price
- Launch date
- Contact email address

The footer contact slot is rendered as an obvious placeholder token rather than a
real address. When the real values arrive, edit **`src/content.ts`** — a single
file holds every placeholder string, so copy can be swapped without touching
layout.

## Notes

- No `<form>`, no email input, no `<button>` anywhere in the DOM, by design.
- The hero reserves a fixed 52px-tall row for a future primary action. It is
  currently occupied by the status line. A future button replaces that line at
  exactly 52px so the layout does not shift. This is marked in `Hero.tsx`.
