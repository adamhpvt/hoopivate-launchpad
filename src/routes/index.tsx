import { createFileRoute } from "@tanstack/react-router";
import { SiteShell } from "../components/SiteShell";
import { Reveal } from "../components/Reveal";
import xavierImg from "@/assets/spotlights/xavier.jpg";
import stevenImg from "@/assets/spotlights/steven.jpg";
import davianImg from "@/assets/spotlights/davian.jpg";
import elijahImg from "@/assets/spotlights/elijah.jpg";
import cooperImg from "@/assets/spotlights/cooper.jpg";

export const Route = createFileRoute("/")({
  component: Index,
});

type Plan = {
  title: string;
  price: string;
  bullets: string[];
  cta: string;
  href: string;
  featured?: boolean;
  tag?: string;
};

const plans: Plan[] = [
  {
    title: "Mindset Spotlight",
    price: "$10",
    bullets: [
      "Magazine-style Instagram player spotlight (Up to 10 slides)",
      "Quick cinematic overview of your journey and achievements",
      "Focused look at the mindset that drives your game",
      "High-impact visuals to make your profile stand out",
    ],
    cta: "Get Featured",
    href: "https://whop.com/checkout/plan_JQAhBsAhA2mhq",
  },
  {
    title: "Deep Dive Spotlight",
    price: "$15",
    bullets: [
      "Extended documentary-style Instagram feature (Up to 20 slides)",
      "Comprehensive career timeline mapping out your milestones",
      "Deep dive into key events and how they shaped you as a player",
      "Perfect for showcasing character behind the numbers",
    ],
    cta: "Get Deep Dive",
    href: "https://whop.com/checkout/plan_DKt7Qijxbe4HP",
    tag: "Extended Feature",
  },
  {
    title: "Recruitment Asset",
    price: "$20",
    bullets: [
      "Full Extended Documentary Feature (All features of the $15 tier)",
      "Shareable Recruitment PDF",
      "Acts as a visual resume of your journey, timeline, and mindset",
      "Ready-to-send asset for emailing college coaches and NIL brands",
    ],
    cta: "Get Full Package",
    href: "https://whop.com/checkout/plan_b4k4jzCOrAWl1",
    featured: true,
  },
];

function Index() {
  return (
    <SiteShell>
      {/* HERO */}
      <section className="relative mx-auto max-w-6xl px-5 pb-24 pt-12 sm:px-8 sm:pt-20">
        <Reveal>
          <p className="mb-6 inline-flex items-center gap-2 rounded-full border hairline bg-white/5 px-3 py-1 text-xs text-muted-foreground">
            <span className="h-1.5 w-1.5 rounded-full bg-white/60" />
            For players. Built for the era of NIL.
          </p>
        </Reveal>
        <Reveal delay={80}>
          <h1 className="font-display text-5xl leading-[1.02] tracking-tight text-balance sm:text-7xl md:text-8xl">
            Turn your story into{" "}
            <span className="italic">NIL</span> and{" "}
            <span className="italic">recruitment</span> leverage.
          </h1>
        </Reveal>
        <Reveal delay={160}>
          <p className="mt-8 max-w-2xl text-base text-muted-foreground sm:text-lg">
            We help basketball players turn their journey into magazine-style
            storytelling assets they can share with coaches and NIL brands
            during outreach.
          </p>
        </Reveal>
        <Reveal delay={220}>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#pricing"
              className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition hover:bg-white/90"
            >
              Get Featured
            </a>
            <a
              href="#why"
              className="inline-flex items-center justify-center rounded-full border hairline px-6 py-3 text-sm text-foreground transition hover:bg-white/5"
            >
              Why it matters
            </a>
          </div>
        </Reveal>
      </section>

      {/* PRICING */}
      <section id="pricing" className="relative mx-auto max-w-6xl px-5 pb-24 sm:px-8">
        <Reveal>
          <div className="mb-12 flex items-end justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">01 — Get Featured</p>
              <h2 className="mt-3 font-display text-4xl tracking-tight sm:text-5xl">
                Choose your spotlight.
              </h2>
            </div>
          </div>
        </Reveal>

        <div className="grid gap-5 md:grid-cols-3">
          {plans.map((p, i) => (
            <Reveal key={p.title} delay={i * 100}>
              <PlanCard plan={p} />
            </Reveal>
          ))}
        </div>
      </section>

      {/* WHY */}
      <section id="why" className="relative mx-auto max-w-6xl px-5 py-24 sm:px-8">
        <div className="grid gap-12 md:grid-cols-12">
          <Reveal className="md:col-span-5">
            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">02 — Why this matters</p>
            <h2 className="mt-3 font-display text-4xl leading-tight tracking-tight sm:text-5xl">
              Stats fade. <em className="not-italic italic">Stories</em> sign deals.
            </h2>
          </Reveal>
          <div className="space-y-8 md:col-span-7">
            <Reveal delay={80}>
              <p className="text-lg leading-relaxed text-muted-foreground">
                Every coach has a roster of options. Every NIL brand has a
                feed full of athletes. What separates you is the way your
                story is told — and how easy it is to share.
              </p>
            </Reveal>
            <Reveal delay={160}>
              <p className="text-lg leading-relaxed text-muted-foreground">
                A magazine-style spotlight gives you a single, premium asset
                that frames your identity, your work ethic, and your edge.
                One link. One PDF. A real first impression.
              </p>
            </Reveal>
            <Reveal delay={220}>
              <blockquote className="border-l-2 border-white/30 pl-5 font-display text-2xl italic leading-snug">
                "You can't out-DM the noise. You can out-tell it."
              </blockquote>
            </Reveal>
          </div>
        </div>
      </section>

      {/* SPOTLIGHTS */}
      <section className="relative mx-auto max-w-6xl px-5 py-24 sm:px-8">
        <Reveal>
          <div className="mb-12 flex items-end justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">03 — Recent spotlights</p>
              <h2 className="mt-3 font-display text-4xl tracking-tight sm:text-5xl">
                A look at the feed.
              </h2>
            </div>
            <a
              href="https://instagram.com/hoopivate"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden text-sm text-muted-foreground transition hover:text-foreground sm:inline"
            >
              @hoopivate ↗
            </a>
          </div>
        </Reveal>

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-5">
          {SAMPLES.map((s, i) => (
            <Reveal key={i} delay={i * 60}>
              <SpotlightTile {...s} />
            </Reveal>
          ))}
        </div>
      </section>

      {/* CLOSER */}
      <section className="relative mx-auto max-w-4xl px-5 py-24 text-center sm:px-8">
        <Reveal>
          <h2 className="font-display text-4xl leading-tight tracking-tight text-balance sm:text-6xl">
            Your story is the leverage.
            <br />
            <span className="italic">Use it.</span>
          </h2>
        </Reveal>
        <Reveal delay={120}>
          <a
            href="#pricing"
            className="mt-10 inline-flex items-center justify-center rounded-full bg-white px-7 py-3 text-sm font-medium text-black transition hover:bg-white/90"
          >
            Get Featured
          </a>
        </Reveal>
      </section>
    </SiteShell>
  );
}

function PlanCard({ plan }: { plan: Plan }) {
  const isFeatured = plan.featured;
  return (
    <div
      className={`group relative flex h-full flex-col justify-between rounded-2xl border p-7 transition ${
        isFeatured
          ? "border-white/30 bg-white/[0.06] shadow-[0_0_60px_-20px_rgba(255,255,255,0.25)] hover:bg-white/[0.08]"
          : "hairline bg-white/[0.02] hover:bg-white/[0.04]"
      }`}
    >
      {plan.tag && !isFeatured && (
        <span className="absolute -top-2.5 left-7 rounded-full border hairline bg-black px-3 py-0.5 text-[10px] font-medium uppercase tracking-wider text-muted-foreground">
          {plan.tag}
        </span>
      )}
      {isFeatured && (
        <span className="absolute -top-2.5 left-7 rounded-full bg-white px-3 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-black">
          Best Deal
        </span>
      )}
      <div>
        <h3 className="font-display text-2xl tracking-tight">{plan.title}</h3>
        <div className="mt-5 flex items-baseline gap-2">
          <span className="font-display text-5xl">{plan.price}</span>
          <span className="text-sm text-muted-foreground">one-time</span>
        </div>
        <ul className="mt-7 space-y-3">
          {plan.bullets.map((b) => (
            <li key={b} className="flex gap-3 text-sm text-muted-foreground">
              <span className="mt-1 h-1 w-1 shrink-0 rounded-full bg-white/60" />
              <span>{b}</span>
            </li>
          ))}
        </ul>
      </div>
      <a
        href={plan.href}
        target="_blank"
        rel="noopener noreferrer"
        className={`mt-8 inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-medium transition ${
          isFeatured
            ? "bg-white text-black hover:bg-white/90"
            : "border hairline bg-transparent text-foreground hover:bg-white/5"
        }`}
      >
        {plan.cta} →
      </a>
    </div>
  );
}

const SAMPLES = [
  { name: "Xavier Muhammad", src: xavierImg, igUrl: "https://www.instagram.com/p/DW9k7HLDv3B/" },
  { name: "Steven Reynolds III", src: stevenImg, igUrl: "https://www.instagram.com/p/DVY9RtfjOKW/" },
  { name: "Da'Vian Brooks", src: davianImg, igUrl: "https://www.instagram.com/p/DUqtul9jJ8_/" },
  { name: "Elijah Andrews", src: elijahImg, igUrl: "https://www.instagram.com/p/DUT16iGDu1x/" },
  { name: "Cooper Head", src: cooperImg, igUrl: "https://www.instagram.com/p/DR0Gd7QDtcG/" },
];

function SpotlightTile({ name, src, igUrl }: { name: string; src: string; igUrl: string }) {
  return (
    <a
      href={igUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`View ${name} on Instagram`}
      className="group relative block aspect-[4/5] overflow-hidden rounded-2xl border hairline bg-zinc-900 shadow-lg shadow-black/40 transition-transform duration-300 hover:-translate-y-0.5 active:scale-[0.98]"
    >
      <img
        src={src}
        alt={`${name} — Hoopivate Spotlight`}
        loading="lazy"
        className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03] group-active:scale-[1.03]"
      />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-active:opacity-100" />
      <div className="pointer-events-none absolute bottom-4 left-1/2 -translate-x-1/2 translate-y-2 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 group-active:translate-y-0 group-active:opacity-100">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-white px-3.5 py-1.5 text-xs font-medium text-black">
          View on Instagram ↗
        </span>
      </div>
    </a>
  );
}
