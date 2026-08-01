## 1. Background quality + motion

- Regenerate `src/assets/hoopivate-bg.jpg` at a higher resolution (1920x1920 rather than the current ~1024-wide source) so the liquid light ribbon stays crisp on tall phone screens and desktop, keeping the same crimson/magenta/gold-on-black look.
- Keep the existing faint grain overlay (it hides banding in the dark falloff areas).
- Motion: keep `chrome-drift` but soften and layer it so it reads as a slow living surface rather than a zoom:
  - slower cycle (~48s), smaller scale/translate range, no visible rotation snap;
  - add a second, very slow opacity/brightness "breathe" pass (~20s) on the same layer so highlights gently pulse;
  - both remain disabled under `prefers-reduced-motion`.

## 2. Header glass — let the background through

Right now the header shares `.glass-card`, whose gradient bottoms out at ~90% opaque near-black, so nothing shows through. Add a dedicated `.glass-header` variant used only by the top bar:

- much lighter tint (roughly 10-18% white at top fading to ~35-45% dark at the bottom instead of 90%);
- keep the heavy `backdrop-filter: blur(...)` plus a light saturation knock-down so the colour behind reads as a soft blurred wash rather than sharp shapes;
- keep the glossy top sheen line and the depth shadow so it still reads as glass;
- logo and hamburger keep their current contrast; if the brighter panel hurts the hamburger's legibility, its border/background get a small bump.

Cards stay opaque as they are — this change is header-only.

## 3. Hero wording

In the hero, `The Hooper's Zone.` becomes `Hoopivate — The Hooper's Zone`, still on one centered line under the "Dominating since forever" eyebrow, with the same chrome text treatment. On narrow phones it wraps to two lines gracefully rather than shrinking below readable size.

### Technical notes

- Files touched: `src/assets/hoopivate-bg.jpg` (regenerated), `src/styles.css` (`chrome-drift` keyframes, new `chrome-breathe`, new `.glass-header`, reduced-motion block), `src/routes/index.tsx` (header class swap, hero copy).
- No changes to card layout, scroll logic, links, or the strictly monochrome card styling.
