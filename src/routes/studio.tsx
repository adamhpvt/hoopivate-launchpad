import { createFileRoute } from "@tanstack/react-router";
import { SiteShell } from "../components/SiteShell";
import { Reveal } from "../components/Reveal";

export const Route = createFileRoute("/studio")({
  component: Studio,
});

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
            <span className="h-1.5 w-1.5 rounded-full bg-white/60" />
            HoopivateStudio
          </p>
        </Reveal>
        <Reveal delay={80}>
          <h1 className="font-display text-5xl leading-[1.02] tracking-tight text-balance sm:text-7xl">
            Build your identity{" "}
            <span className="italic">beyond the court.</span>
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
          </div>
        </Reveal>
      </section>

      {/* WHY JOIN */}
      <section className="relative mx-auto max-w-6xl px-5 py-20 sm:px-8">
        <Reveal>
          <div className="mb-12">
            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">01 — Why join</p>
            <h2 className="mt-3 font-display text-4xl tracking-tight sm:text-5xl">
              Real brand ownership.
            </h2>
          </div>
        </Reveal>
        <div className="divide-y divide-white/10 border-y hairline">
          {PILLARS.map((p, i) => (
            <Reveal key={p.t} delay={i * 60}>
              <div className="grid grid-cols-12 items-center gap-4 py-6">
                <div className="col-span-3 font-display text-3xl sm:text-4xl">{p.k}</div>
                <div className="col-span-9 sm:col-span-3 font-display text-xl">{p.t}</div>
                <div className="col-span-12 text-sm text-muted-foreground sm:col-span-6">{p.d}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* PLAYERS WE WORKED WITH */}
      <section id="work" className="relative mx-auto max-w-6xl px-5 py-20 sm:px-8">
        <Reveal>
          <div className="mb-8">
            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">02 — Players we worked with</p>
            <h2 className="mt-3 font-display text-4xl tracking-tight sm:text-5xl">
              Portfolio coming soon.
            </h2>
            <p className="mt-5 max-w-xl text-base text-muted-foreground">
              For now, view our work on Instagram.
            </p>
          </div>
        </Reveal>
        <Reveal delay={120}>
          <a
            href="https://instagram.com/hoopivatestudio"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full border hairline px-6 py-3 text-sm text-foreground transition hover:bg-white/5"
          >
            @hoopivatestudio ↗
          </a>
        </Reveal>
      </section>

      {/* TESTIMONIALS */}
      <section className="relative mx-auto max-w-6xl px-5 py-20 sm:px-8">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">03 — In their words</p>
          <h2 className="mt-3 font-display text-4xl tracking-tight sm:text-5xl">Coming soon.</h2>
        </Reveal>
      </section>

      {/* CTA */}
      <section className="relative mx-auto max-w-4xl px-5 py-24 text-center sm:px-8">
        <Reveal>
          <h2 className="font-display text-4xl leading-tight tracking-tight text-balance sm:text-6xl">
            Stop settling. <span className="italic">Own it.</span>
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
