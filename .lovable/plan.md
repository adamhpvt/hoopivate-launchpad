All 5 spotlight images received (Xavier, Steven, Davian, Elijah, Coop). Here's what I'll do:

## 1. Copy tweaks on Spotlight (`src/routes/index.tsx`)

- **$15 plan bullet** — change "Communicate your identity wherever it's sent" → **"Communicate your identity on any platform easily."**
- **GoZone Founding Member price** — change `"Free"` → `"Exclusive Access"`. Adjust `PlanCard` so when the price isn't numeric, the "one-time" subtitle is hidden and the price renders at a smaller, more fitting size (so "Exclusive Access" doesn't blow out the card).

## 2. Spotlight images → tappable IG tiles

**Assets:** copy the 5 uploads into `src/assets/spotlights/` as:
`xavier.jpg`, `steven.jpg`, `davian.jpg`, `elijah.jpg`, `cooper.jpg`

**Data:** replace the placeholder `SAMPLES` array with the real 5, each with `{ src, name, igUrl }` pointing to the IG post links you sent.

**Tile design** (`SpotlightTile`):
- Wrap each tile in an `<a href={igUrl} target="_blank" rel="noopener noreferrer">` — the whole image is the button.
- Rounded `rounded-2xl`, `overflow-hidden`, hairline border, soft shadow.
- Full-bleed image via `<img>` with `object-cover` — no cropping of the headline/text inside the artwork (the cover art already contains its own typography, so we don't overlay any text on top).
- Aspect ratio `aspect-[4/5]` to match IG portrait covers and keep all text inside visible.
- **Press / hover overlay:** a subtle black-to-transparent gradient at the bottom that intensifies on `hover`/`active` (touch press), revealing a small pill that reads **"View on Instagram ↗"**. On mobile, the press state triggers via `:active` so a finger-down gives the same visual feedback before the tap completes and opens the link.
- Smooth `transition` on image scale (1 → 1.03) and overlay opacity for the editorial feel.
- Accessible `aria-label={`View ${name} on Instagram`}`.

**Grid:** keep the existing 2-col mobile / 3-col desktop layout — 5 tiles flow naturally (last row has 2 tiles on desktop, 1 on mobile last row).

**Eyebrow link** "@hoopivate ↗" stays as is above the grid.

## 3. Out of scope (untouched)

- Nav, footer, Studio, Vault, GoZone violet styling, hero copy — all stay exactly as they are.
- No new dependencies.

## Technical notes

- Images imported as ES modules from `@/assets/spotlights/*.jpg` for Vite hashing/optimization.
- Press feedback uses Tailwind `group` + `group-hover:` / `group-active:` utilities — no JS state needed.
- External links use `target="_blank"` + `rel="noopener noreferrer"`.
