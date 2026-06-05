
## Scope
Tighten the home page and nav. No backend, no new routes, no new packages.

## 1. `src/components/SiteShell.tsx` — Nav
- Hide the "Hoopivate" wordmark on mobile (`hidden sm:inline`), keep logo.
- Rename nav links: "Coaches" → "For Coaches", "B2B" → "For B2B".
- Make nav horizontally scrollable on small screens so longer labels don't overlap the logo: wrap `<nav>` in a scroll container (`overflow-x-auto no-scrollbar`, `whitespace-nowrap`, flex items `shrink-0`). Keep current desktop layout unchanged.
- Add a tiny `.no-scrollbar` utility in `src/styles.css` (hides webkit scrollbar) for clean appearance.

## 2. `src/routes/index.tsx`

### Hero subheading
Replace "Your story is the leverage. Unlock step one." with:
> "Your personality is the extra mile. The first step is to tell your story."

### Bubble sizing (Athletes path)
Reduce `PathBubble` size from `h-[104px] w-[104px]` to roughly `h-[84px] w-[84px]`; scale inner step text from `text-3xl` to `text-2xl`. Keep desktop curve offsets and mobile serpentine offsets identical (only the nodes shrink). Adjust the desktop SVG top offset by a few px so the path still threads through the center of the smaller bubbles.

### New "Why tell your story" section (placed AFTER the path, BEFORE the closer CTA)
A clean 3-card grid (1 col mobile, 3 cols desktop) with a short intro line, then:
1. **Own your narrative** — Stand out beyond the highlight reel. Your voice, your terms.
2. **Inspire the next gen** — Younger hoopers see themselves in your story. That ripple matters.
3. **Early access** — Be first in line for our recruitment add-on for the apps you already use, and our personality-fit tool built for hoopers.

Below the cards, a small calm "Your data, your call" note (not a hyped banner, plain text with a subtle border):
> "We don't sell your data. Your answers are used only to help craft your social posts and to power a personality-fit tool we're building for players and programs. That's it."

Tone: confident, plain, not hypey. Uses existing tokens (`hairline`, `text-white/70`, `bg-white/[0.02]`).

### Testimonials (compact strip, below "Why tell your story", above closer)
Small heading "From the locker room." Then a horizontally-scrollable row (mobile) / 3-col grid (desktop) of short quote cards. Each card: quote, name, level chip. Keep typography small (`text-sm` quote, `text-xs` meta), card padding tight, so the section feels like a sidebar — not a hero.

Quotes to include verbatim (lightly trimmed for length where noted):
- DeAngelo Adkins — Pro
- Bryan Moussako — D3
- Lucius Gibson-Savandel — D1
- Darius Brant — Pro (trim to one sentence: "I've always wanted people to know where I really came from. This is what they need to read before judging.")
- Evan Cabral — D3
- Bobby Gardner — D2
- Jack Clark — High School

### Closer
Keep existing "Tell your story" button; no copy change beyond removing dependence on the old leverage line.

### StoryDialog copy (softer)
Replace:
> "Be raw, and chaotic. AI won't help us know who you really are. Tell your story, in your own voice."

With:
> "Be raw. Be chaotic. Be you. Just your voice — that's all we need."

Keep CTA, Tally link, and "Takes ~3 minutes" sub-line as is.

## 3. `src/styles.css`
Add only:
```
@layer utilities {
  .no-scrollbar::-webkit-scrollbar { display: none; }
  .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
}
```

## Out of scope
- `/coaches`, `/b2b`, `/studio`, `/vault` pages (unchanged).
- Footer, Starfield, theme tokens (unchanged).
- No new dependencies, no route changes.
