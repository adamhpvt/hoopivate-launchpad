# Home Page Rebuild — Athlete Path + B2B Portals

Keep the global look (black bg, Starfield, Instrument Serif display, hairlines, neon-on-black). Reuse `SiteShell`, `Reveal`, and existing tokens. No changes to nav, footer, styles.css base tokens, or other routes.

## 1. Replace `src/routes/index.tsx`

Remove the current pricing/why/spotlights/closer sections entirely. New section order inside `<SiteShell>`:

1. **Hero** — compact intro
   - Eyebrow chip: "For hoopers. Built for the NIL era."
   - H1: "Your path starts here." (Instrument Serif, italic accent on "path")
   - Sub: one line about turning story → leverage.
   - Scroll cue ↓ to the path.

2. **Athlete Progression Path** (centerpiece)
   - Section label: `01 — The Athlete Path`
   - Gently curved decorative SVG line spanning the section (faint white/neon stardust, dashed, animated subtle drift via CSS keyframes).
   - 6 bubble nodes overlaid using a responsive layout: on desktop a 6-col flex with alternating vertical offsets to suggest the curve; on mobile a vertical stack with the line going top-to-bottom.
   - Each bubble: circular, ~96px, glassy (`bg-white/[0.04]`, `hairline`), step number on top, label below.
   - **Bubble 1 — Active**: vibrant neon glow (cyan/violet ring + pulsing box-shadow via existing `glow-violet` token or a new `glow-neon` utility), no lock, label "Tell your story". Clickable → opens modal.
   - **Bubbles 2–6 — Locked**: 40% opacity, padlock icon (lucide `Lock`), floating "COMING SOON" pill above. Labels in order: "Deep Vibe Analysis", "Smart Matching", "Roster Chemistry", "Portal Alignment", "Draft Vitals". Non-interactive (cursor-not-allowed, tooltip on hover).

3. **Story Modal** (triggered by Bubble 1)
   - Use existing shadcn `Dialog` component.
   - Dark glass panel, hairline border, soft neon glow.
   - Heading: "Step 01 — Tell your story"
   - Body (bold, raw): "Be raw, and chaotic. AI won't help us know who you really are. Tell your story, in your own voice."
   - Primary CTA button → `https://tally.so/r/xXleGo` (opens new tab).
   - Secondary: small "Why we ask" caption.

4. **B2B Portals** — `02 — For Coaches & Brands`
   - Two premium cards in a 2-col grid (stack on mobile). Both share: glassy bg, hairline border, soft glow on hover, top-corner "PARTNERS" micro-tag.
   - **A. Coaches card**
     - Eyebrow: "For Coaches"
     - Hook (display serif): "Tired of landing good talent, only to get a bad locker room fit?"
     - Body: "The new integration is coming soon to help you evaluate what matters under pressure. The new cherry on top for college basketball recruitment. Coming Soon."
     - CTA: "Join the waitlist for early access →" → `https://tally.so/r/ODElLK` (new tab). Styled as a full-width pill button with subtle inner email-field look (input visual + arrow button) but on click it just opens the Tally form.
   - **B. B2B Partners card**
     - Eyebrow: "For Platforms & Brands"
     - Hook: "Tired of flat, static athlete profiles that miss the human element?"
     - Body: "The missing layer for better athlete NIL and recruitment alignment. Let's build a seamless API connection to instantly enrich and boost your current athlete profiles on your existing esteemed platforms."
     - CTA: "Request API access →" → `https://tally.so/r/1ARkvM` (new tab). Same visual treatment.

5. **Closer** — short repeat of "Your story is the leverage." with a button that re-opens the Step 01 modal.

## 2. Component additions

Inline within `index.tsx` (small, single-file scope):
- `PathBubble` component (active vs locked variants).
- `StoryDialog` using `@/components/ui/dialog` (already in repo).
- `PortalCard` for the two B2B cards.

Icons via `lucide-react` (already a dep): `Lock`, `ArrowRight`, `Sparkles`.

## 3. Styling

Add a couple of utilities to `src/styles.css` under `@layer utilities`:
- `.glow-neon` — stronger cyan/violet box-shadow for the active bubble.
- `.pulse-glow` keyframes animation for the active bubble ring.
- `.stardust-dash` — slow `stroke-dashoffset` drift for the SVG path.

No changes to color tokens. Continue using existing violet `--accent` plus white for neon highlights — no purple text outside accents (per prior rule).

## 4. Out of scope

- No changes to `/studio`, `/vault`, nav, footer, or styles base tokens.
- No removal of spotlight assets (kept in repo for future use, just unused on home).
- No new packages.

## Technical notes

- File touched: `src/routes/index.tsx` (full rewrite of body), `src/styles.css` (append 3 utility classes + keyframes).
- Dialog: `@/components/ui/dialog` already exists.
- Use `Reveal` for section entries to match existing motion language.
- All external links use `target="_blank" rel="noopener noreferrer"`.
- Mobile: bubbles stack vertically with vertical dashed line on the left; cards stack; modal is full-width with padding.
