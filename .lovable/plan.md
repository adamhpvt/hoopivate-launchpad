## 1. New background

Replace `src/assets/chrome-bg.jpg` with a generated image matching the reference: near-black void with a sweeping liquid light ribbon in crimson → magenta → gold, soft bloom, glossy highlights.

- Generate at 1024x1920 (mobile-first, portrait) and upload via the asset CDN.
- Keep the slow `chrome-drift` animation and the grain overlay.
- Lighten the black scrim over it (`bg-black/45` → ~`bg-black/30`) so the color reads.
- Keep the hero halo so "The Hooper's Zone." stays readable over the brighter areas.
- Cards, text, and UI chrome stay strictly monochrome — color lives only in the background.

## 2. Card layout — text away from the photo

Restructure the active card into two stacked zones:

```text
┌──────────────────────────┐
│   PHOTO  (top ~48%)      │  full-bleed, object-cover
│                          │
├──────────────────────────┤
│  Title                   │  plain dark frosted glass
│  One-line description    │  no photo behind
│  ( CTA pill )            │
└──────────────────────────┘
```

- Photo is clipped to the top block only; a short gradient fades its bottom edge into the panel.
- The text/CTA panel is opaque dark glass — no image behind any text.
- Hoopivate AI (no image) keeps the plain full-glass card, text block in the same position.
- Card min-height grows slightly to fit both zones comfortably; peek strips below are unchanged.

## 3. More obvious scrolling

- Add an animated scroll cue below the stack: a small bouncing chevron with the mono label "SCROLL" that fades out after the first step and reappears at the top of the stack.
- Make the peeking card below the active one more visible (less dim, slightly more offset) so there's a clear "more below" signal.
- Enlarge the progress dots and add step text (`01 / 04`) next to them.
- Desktop: also show up/down arrow key hints in the mono caption style.
- Keep existing wheel / touch / keyboard step logic; only affordances change.

### Technical notes

- Files touched: `src/routes/index.tsx`, `src/styles.css`, plus a regenerated background asset in `src/assets/`.
- Scroll cue animation and photo/panel gradients defined as CSS utilities in `styles.css`; no new dependencies.
- `prefers-reduced-motion` disables the bouncing cue.
