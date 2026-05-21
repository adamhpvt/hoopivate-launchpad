import { createFileRoute } from "@tanstack/react-router";
import { SiteShell } from "../components/SiteShell";
import { Reveal } from "../components/Reveal";

export const Route = createFileRoute("/studio")({
  component: Studio,
  head: () => ({
    meta: [
      { title: "Hoopivate Studio — Build your identity beyond the court" },
      {
        name: "description",
        content:
          "Own your merch and online shop. Hoopivate Studio helps players build independent, fully-owned storefronts.",
      },
    ],
  }),
});

const BRANDS = [
  { name: "Ascend Hoops", line: "Apparel · Tees + Hoodies", tone: "from-zinc-900 to-zinc-700" },
  { name: "Court Logic", line: "Drop 01 · Sold out", tone: "from-violet-900/40 to-zinc-900" },
  { name: "Northbound", line: "Capsule · Limited run", tone: "from-zinc-800 to-black" },
  { name: "Studio 23", line: "Player-led brand", tone: "from-zinc-900 to-zinc-800" },
];

const REVIEWS = [
  { quote: "Felt like I finally had a real brand, not just merch.", who: "D. R. — College Guard" },
  { quote: "The launch campaign sold out the first drop in 4 days.", who: "M. J. — Prep PG" },
  { quote: "Owning everything changed how I think about my career.", who: "K. T. — Sophomore SF" },
];

const PILLARS = [
  { k: "100%", t: "Ownership", d: "Your storefront, your customer data, your narrative." },
  { k: "100%", t: "Profit margin", d: "Set your own prices. Keep what's yours above base cost." },
  { k: "∞", t: "Future-proof design", d: "Team-identity-free pieces that travel with you." },
  { k: "+", t: "Marketing playbook", d: "Launch campaign, growth plays, content ideas." },
  { k: "50%", t: "Ongoing support", d: "Discounted modifications and add-ons. No monthly fees." },
];

function Studio() {
  return (
    <SiteShell>
      {/* HERO */}
      <section className="relative mx-auto max-w-6xl px-5 pb-20 pt-12 sm:px-8 sm:pt-20">
        <Reveal>
          <p className="mb-6 inline-flex items-center gap-2 rounded-full border hairline bg-white/5 px-3 py-1 text-xs text-muted-foreground">
            <span className="h-1.5 w-1.5 rounded-full bg-violet-400" />
            HoopivateStudio
          </p>
        </Reveal>
        <Reveal delay={80}>
          <h1 className="font-display text-5xl leading-[1.02] tracking-tight text-balance sm:text-7xl">
            Build your identity{" "}
            <span className="italic accent-violet">beyond the court.</span>
          </h1>
        </Reveal>
        <Reveal delay={160}>
          <p className="mt-8 max-w-2xl text-base text-muted-foreground sm:text-lg">
            We help you own your merch and your online shop. Real brand
            ownership — not crumbs from someone else's table.
          </p>
        </Reveal>
        <Reveal delay={220}>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="https://whop.com/hoopivate/hoopivatestudio/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition hover:bg-white/90"
            >
              Get Access →
            </a>
            <a
              href="#work"
              className="inline-flex items-center justify-center rounded-full border hairline px-6 py-3 text-sm text-foreground transition hover:bg-white/5"
            >
              See the work
            </a>
          </div>
        </Reveal>
      </section>

      {/* PAST BRANDS */}
      <section id="work" className="relative mx-auto max-w-6xl px-5 py-20 sm:px-8">
        <Reveal>
          <div className="mb-12">
            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">01 — Past brands</p>
            <h2 className="mt-3 font-display text-4xl tracking-tight sm:text-5xl">
              Brands we've built with players.
            </h2>
          </div>
        </Reveal>
        <div className="grid gap-4 sm:grid-cols-2">
          {BRANDS.map((b, i) => (
            <Reveal key={b.name} delay={i * 80}>
              <div className={`relative aspect-[5/3] overflow-hidden rounded-2xl border hairline bg-gradient-to-br ${b.tone}`}>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(255,255,255,0.08),transparent_60%)]" />
                <div className="absolute left-5 top-5 text-[10px] uppercase tracking-[0.2em] text-white/50">Case</div>
                <div className="absolute bottom-5 left-5 right-5">
                  <div className="font-display text-2xl">{b.name}</div>
                  <div className="mt-1 text-xs text-white/60">{b.line}</div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* REVIEWS */}
      <section className="relative mx-auto max-w-6xl px-5 py-20 sm:px-8">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">02 — In their words</p>
        </Reveal>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {REVIEWS.map((r, i) => (
            <Reveal key={r.who} delay={i * 100}>
              <figure className="h-full rounded-2xl border hairline bg-white/[0.02] p-6">
                <blockquote className="font-display text-xl italic leading-snug">
                  "{r.quote}"
                </blockquote>
                <figcaption className="mt-5 text-xs uppercase tracking-[0.15em] text-muted-foreground">
                  {r.who}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </section>

      {/* WHY JOIN */}
      <section className="relative mx-auto max-w-6xl px-5 py-20 sm:px-8">
        <Reveal>
          <div className="mb-12">
            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">03 — Why join</p>
            <h2 className="mt-3 font-display text-4xl tracking-tight sm:text-5xl">
              Real brand ownership.
            </h2>
          </div>
        </Reveal>
        <div className="divide-y divide-white/10 border-y hairline">
          {PILLARS.map((p, i) => (
            <Reveal key={p.t} delay={i * 60}>
              <div className="grid grid-cols-12 items-center gap-4 py-6">
                <div className="col-span-3 font-display text-3xl accent-violet sm:text-4xl">{p.k}</div>
                <div className="col-span-9 sm:col-span-3 font-display text-xl">{p.t}</div>
                <div className="col-span-12 text-sm text-muted-foreground sm:col-span-6">{p.d}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="relative mx-auto max-w-4xl px-5 py-24 text-center sm:px-8">
        <Reveal>
          <h2 className="font-display text-4xl leading-tight tracking-tight text-balance sm:text-6xl">
            Stop settling. <span className="accent-violet italic">Own it.</span>
          </h2>
        </Reveal>
        <Reveal delay={120}>
          <a
            href="https://whop.com/hoopivate/hoopivatestudio/"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 inline-flex items-center justify-center rounded-full bg-white px-7 py-3 text-sm font-medium text-black transition hover:bg-white/90"
          >
            Get Access →
          </a>
        </Reveal>
      </section>
    </SiteShell>
  );
}
