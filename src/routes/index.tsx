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
  head: () => ({
    meta: [
      { title: "Hoopivate — Turn your story into NIL and recruitment leverage" },
      {
        name: "description",
        content:
          "Hoopivate helps basketball players turn their journey into magazine-style storytelling assets for coaches and NIL brands.",
      },
    ],
  }),
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
    title: "Instagram Spotlight",
    price: "$10",
    bullets: [
      "Magazine-style player spotlight",
      "Story featured on Hoopivate Instagram",
      "Designed to help your profile stand out",
    ],
    cta: "Get Featured",
    href: "https://whop.com/checkout/plan_JQAhBsAhA2mhq",
  },
  {
    title: "Spotlight + Shareable PDF",
    price: "$15",
    bullets: [
      "Magazine-style player spotlight",
      "Instagram feature",
      "Shareable PDF for coaches and NIL outreach",
      "Communicate your identity on any platform easily.",
    ],
    cta: "Get Full Package",
    href: "https://whop.com/checkout/plan_DKt7Qijxbe4HP",
    tag: "Most Popular",
  },
  {
    title: "GoZone Founding Member",
    price: "Exclusive Access",
    bullets: [
      "Exclusive for GoZone founding members",
      "Waived Spotlight access",
      "Verification required before approval",
    ],
    cta: "Verify Membership",
    href: "https://tally.so/r/J9W1Md",
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
            <span className="h-1.5 w-1.5 rounded-full bg-violet-400" />
            For players. Built for the era of NIL.
          </p>
        </Reveal>
        <Reveal delay={80}>
          <h1 className="font-display text-5xl leading-[1.02] tracking-tight text-balance sm:text-7xl md:text-8xl">
            Turn your story into{" "}
            <span className="italic accent-violet">NIL</span> and{" "}
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
              Stats fade. <em className="not-italic accent-violet">Stories</em> sign deals.
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
              <blockquote className="border-l-2 border-violet-soft pl-5 font-display text-2xl italic leading-snug">
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
            <span className="accent-violet italic">Use it.</span>
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
          ? "border-violet-soft bg-violet-soft glow-violet"
          : "hairline bg-white/[0.02] hover:bg-white/[0.04]"
      }`}
    >
      {plan.tag && !isFeatured && (
        <span className="absolute -top-2.5 left-7 rounded-full bg-white px-3 py-0.5 text-[10px] font-medium uppercase tracking-wider text-black">
          {plan.tag}
        </span>
      )}
      {isFeatured && (
        <span className="absolute -top-2.5 left-7 rounded-full bg-violet-400 px-3 py-0.5 text-[10px] font-medium uppercase tracking-wider text-black">
          Founding Access
        </span>
      )}
      <div>
        <h3 className="font-display text-2xl tracking-tight">{plan.title}</h3>
        <div className="mt-5 flex items-baseline gap-2">
          <span className={`font-display text-5xl ${isFeatured ? "accent-violet" : ""}`}>
            {plan.price}
          </span>
          {plan.price !== "Free" && (
            <span className="text-sm text-muted-foreground">one-time</span>
          )}
        </div>
        <ul className="mt-7 space-y-3">
          {plan.bullets.map((b) => (
            <li key={b} className="flex gap-3 text-sm text-muted-foreground">
              <span className={`mt-1 h-1 w-1 shrink-0 rounded-full ${isFeatured ? "bg-violet-400" : "bg-white/60"}`} />
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
            ? "bg-violet-400 text-black hover:bg-violet-300"
            : "bg-white text-black hover:bg-white/90"
        }`}
        style={isFeatured ? { backgroundColor: "oklch(0.78 0.16 295)" } : undefined}
      >
        {plan.cta} →
      </a>
    </div>
  );
}

const SAMPLES = [
  { name: "Marcus J.", role: "PG · Class of '26", tone: "from-zinc-900 to-zinc-700" },
  { name: "Devin R.", role: "SG · Transfer Portal", tone: "from-violet-900/40 to-zinc-900" },
  { name: "Kai T.", role: "SF · Sophomore", tone: "from-zinc-800 to-black" },
  { name: "Andre L.", role: "PF · Prep School", tone: "from-zinc-900 to-zinc-800" },
  { name: "Jordan B.", role: "C · Freshman", tone: "from-violet-900/30 to-black" },
  { name: "Trey M.", role: "SG · Senior", tone: "from-zinc-900 to-zinc-700" },
];

function SpotlightTile({ name, role, tone }: { name: string; role: string; tone: string }) {
  return (
    <div className={`group relative aspect-[4/5] overflow-hidden rounded-xl border hairline bg-gradient-to-br ${tone}`}>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.08),transparent_60%)]" />
      <div className="absolute left-3 top-3 text-[10px] uppercase tracking-[0.2em] text-white/60">
        Spotlight
      </div>
      <div className="absolute bottom-0 left-0 right-0 p-4">
        <div className="font-display text-xl leading-tight">{name}</div>
        <div className="text-xs text-white/60">{role}</div>
      </div>
      <div className="absolute right-3 top-3 text-[10px] text-white/40">Hoopivate</div>
    </div>
  );
}
