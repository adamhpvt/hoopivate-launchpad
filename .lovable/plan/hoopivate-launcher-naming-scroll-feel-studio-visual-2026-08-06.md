# Hoopivate launcher — naming, scroll feel, Studio visual

## 1. Rename the hero

`Hoopivate — The Hooper's Zone` becomes `Hoopivate — The Hooper's Mood Board`, same centered line, same chrome text treatment, same eyebrow above it. On narrow phones it wraps to two lines instead of shrinking.

## 2. Replace the swipe/step card stack with real scrolling

Today the page hijacks the wheel and touch gestures and jumps one card at a time with a 620ms lock. That is what feels uneven — the page fights the finger, and the transition is both slow and non-continuous.

New behaviour:

- The page scrolls normally. No wheel interception, no touch threshold logic, no scroll lock.
- Cards become a vertical sequence of full, always-legible cards (photo on top, text panel below, glassy CTA pill) inside a scroll container that snaps softly to each card. Native CSS scroll-snap does the alignment, so momentum and rubber-banding stay exactly as the OS intends on iOS and Android.
- Each card animates on entry: it lifts slightly and fades in as it comes into view, and the card leaving the top gently recedes (small scale + fade). Driven by an intersection observer, so it tracks real scroll position rather than a timed animation.
- The active dot indicator and the `01 / 04` counter stay, now driven by whichever card is currently in view; tapping a dot scrolls smoothly to that card.
- The `SCROLL` cue keeps bobbing and fades out once the last card is reached. Arrow-key support stays (arrows scroll to the next/previous card) for desktop.
- Header, hero, footer and the background stay fixed behind the scroll area, so the liquid-light backdrop does not scroll away.

Result: one continuous, native-feeling scroll where cards land cleanly instead of a gesture-jacked slideshow.

## 3. Studio card image

Swap the current grayscale Studio photo for the attached black-and-gold merch shot (two athletes in Hoopivate tees under gold court lighting). It is uploaded as a CDN asset and used as the Studio card's photo zone, with the existing bottom fade into the text panel.

Note: the other two cards (Collab, Vault) stay grayscale, so Studio will read as the one warm/gold card in the stack. If you'd rather have all three switch to the gold-lit look, say so and I'll plan replacements for those too.

### Technical notes

- `src/routes/index.tsx`: remove the wheel/touch/step engine and the depth-stacking transform math; render cards in a snap-scroll container with an `IntersectionObserver` driving the active index and entry animation; hero copy change.
- `src/styles.css`: add scroll-snap and card entry/exit classes; keep `chrome-drift`, `chrome-breathe`, `.glass-*`, grain and the reduced-motion block (entry animation also disabled under reduced motion).
- New asset: Studio photo uploaded via the asset CDN and imported as a pointer; the old `hoopivate-studio.webp` import is dropped.
- No changes to links, card copy, or the monochrome card styling.
