# Hoopivate Landing Site Plan

A mobile-first, editorial, space-inspired site for Hoopivate with 3 routes: `/`, `/studio`, `/vault`.

## Visual direction

- **Palette**: Pure black background (#000), off-white text (#F5F5F5), muted grays for secondary, single purple accent (#A78BFA / violet-400) reserved for the GoZone founding card and key emphasis.
- **Typography**: Editorial pairing — a tight display serif (Instrument Serif or similar) for headlines, clean grotesk (Inter / Geist) for body. Large type, tight tracking on headlines.
- **Atmosphere**: Subtle starfield canvas in the background (slow drift, low opacity), soft floating orb gradients behind hero sections. Restrained — not flashy.
- **Motion**: Gentle scroll-reveal (fade + 8px rise), parallax on hero orb only. No bouncy / startup-style animations.
- **Layout**: Generous whitespace, magazine-style asymmetry where it fits, full-width sections stacked vertically.

## Pages & sections

### `/` Home
1. **Nav** — minimal: Hoopivate wordmark left, links (Studio, Vault, Instagram) right.
2. **Hero** — H1 "Turn your story into NIL and recruitment leverage." + subhead + starfield/orb backdrop.
3. **Pricing (3 cards)** — Instagram Spotlight ($10), Spotlight + PDF ($15), GoZone Founding (Free, purple-accented border + subtle violet glow). Each CTA links to the provided Whop / Tally URLs in a new tab.
4. **Why this matters** — short editorial block: 2–3 paragraphs / pull-quotes on storytelling as recruiting & NIL leverage.
5. **Spotlight examples** — Instagram-feed style grid of placeholder magazine covers (generated images mocking athlete spotlights).
6. **Footer** — wordmark, tagline, Instagram link, copyright.

### `/studio`
1. Hero: "Build your identity beyond the court. At Studio, we help you own your merch + online shop."
2. Short rewritten intro (2 sentences max) — full pitch lives on the redirect page.
3. Past brands gallery — placeholder brand mockup images.
4. Mini reviews / quotes strip.
5. Compact "Why join" — 5 short bullets (Ownership, 100% Profit, Pro Designs, Marketing, Support).
6. CTA: "Get Access" → https://whop.com/hoopivate/hoopivatestudio/

### `/vault`
1. Hero: "HoopivateVault" / "Wear what you stand for."
2. Product placeholder grid (4–6 tiles: Tees, Hoodies, Headwear, Coming Soon).
3. CTA linking to https://hoopivate-shop.fourthwall.com

## Technical

- Vite + React + TS + Tailwind (default Lovable stack), React Router for 3 routes.
- Starfield: single lightweight `<canvas>` component, fixed position, `pointer-events-none`, respects `prefers-reduced-motion`.
- All external CTAs open in new tab with `rel="noopener"`.
- SEO: per-page `<title>`, meta description, single H1, semantic sections, alt text on placeholder imagery.
- Fully responsive; designed mobile-first (Instagram traffic priority).
- Placeholder spotlight / brand / product images generated via imagegen and imported as ES6 assets.

## On GitHub Pages & custom domain

I'll answer in chat after the plan: Lovable already hosts the site and supports custom domains directly (Project Settings → Domains, or the Publish dialog). You don't need GitHub Pages for that — but I can also export to GitHub if you want the repo. I'll confirm your preference once the plan is approved.
