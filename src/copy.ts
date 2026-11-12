/**
 * All page copy lives here so Design can swap any line in one place.
 *
 * Nothing in this file may state a spec (weight, fabric, fit numbers),
 * a price, a launch date or an email address. Those are unconfirmed.
 * Lines marked "PLACEHOLDER COPY" are Design's placeholder text.
 */

export const actionLine =
  'Not on sale yet. This page is the whole shop for now.'

export const copy = {
  brand: 'Hoodie',
  tag: 'PRE-LAUNCH',
  hero: {
    title: 'Nothing but hoodies.',
    // PLACEHOLDER COPY — single independent label, one line.
    label: 'One garment, drawn before it exists.',
    // PLACEHOLDER ILLUSTRATION caption.
    figureCaption: 'Placeholder illustration — plate 01 · front, as drawn',
  },
  statement: {
    eyebrow: '01 — WHAT THIS IS',
    lead: 'A label with exactly one piece in it.',
    body: [
      'This page is the whole of it for now: a working drawing, a plan, and a place for the thing itself to arrive. No catalogue, no seasons, no second product to scroll past.',
      'The drawing above is a placeholder. The garment is still being worked out — the shape is real, the detail is not written down here yet.',
    ],
  },
  garment: {
    entries: [
      {
        index: '01',
        title: 'The body',
        body: 'Cut once, kept plain. The drawing carries the whole idea; nothing gets added to it later for the sake of it.',
      },
      {
        index: '02',
        title: 'The hood',
        body: 'Lined and set so it stands on its own. Shown dark here only so the shape reads at a glance.',
      },
      {
        index: '03',
        title: 'The finish',
        body: 'Edges, seams and the way it sits after a year of wear. Still being sampled.',
      },
    ],
  },
  band: {
    // PLACEHOLDER ILLUSTRATION caption.
    caption: 'Placeholder illustration — plate 02 · the pattern, laid flat',
  },
  status: {
    label: 'STATUS',
    steps: ['Design', 'Sampling', 'Launch'],
    currentIndex: 0,
  },
  footer: {
    // PLACEHOLDER — no real address exists yet. Do not invent one.
    contact: 'Contact — placeholder, address to follow',
    line: 'Pre-launch. Nothing is on sale.',
  },
} as const
