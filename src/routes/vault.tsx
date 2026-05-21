import { createFileRoute } from "@tanstack/react-router";
import { SiteShell } from "../components/SiteShell";
import { Reveal } from "../components/Reveal";

export const Route = createFileRoute("/vault")({
  component: Vault,
  head: () => ({
    meta: [
      { title: "HoopivateVault — Wear what you stand for" },
      {
        name: "description",
        content:
          "HoopivateVault: apparel and future drops from the Hoopivate Fourthwall shop.",
      },
    ],
  }),
});

const PRODUCTS = [
  { name: "Void Tee", line: "Essentials", price: "From $34", tone: "from-zinc-900 to-zinc-700" },
  { name: "Hoopivate Hoodie", line: "Heavyweight fleece", price: "From $68", tone: "from-violet-900/40 to-zinc-900" },
  { name: "Star Map Cap", line: "Embroidered 6-panel", price: "From $28", tone: "from-zinc-800 to-black" },
  { name: "Studio Crewneck", line: "Editorial drop", price: "From $58", tone: "from-zinc-900 to-zinc-800" },
  { name: "Founding Member Tee", line: "Limited · Numbered", price: "Coming soon", tone: "from-violet-900/30 to-black" },
  { name: "Next Drop", line: "TBA", price: "Coming soon", tone: "from-zinc-900 to-black" },
];

function Vault() {
  return (
    <SiteShell>
      {/* HERO */}
      <section className="relative mx-auto max-w-6xl px-5 pb-20 pt-12 sm:px-8 sm:pt-20">
        <Reveal>
          <p className="mb-6 inline-flex items-center gap-2 rounded-full border hairline bg-white/5 px-3 py-1 text-xs text-muted-foreground">
            <span className="h-1.5 w-1.5 rounded-full bg-violet-400" />
            HoopivateVault
          </p>
        </Reveal>
        <Reveal delay={80}>
          <h1 className="font-display text-6xl leading-[1] tracking-tight sm:text-8xl">
            Hoopivate<span className="accent-violet italic">Vault</span>
          </h1>
        </Reveal>
        <Reveal delay={160}>
          <p className="mt-8 max-w-xl text-lg text-muted-foreground sm:text-xl">
            Wear what you stand for.
          </p>
        </Reveal>
        <Reveal delay={220}>
          <div className="mt-10">
            <a
              href="https://hoopivate-shop.fourthwall.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition hover:bg-white/90"
            >
              Shop the Vault →
            </a>
          </div>
        </Reveal>
      </section>

      {/* PRODUCTS */}
      <section className="relative mx-auto max-w-6xl px-5 py-12 sm:px-8">
        <Reveal>
          <div className="mb-10 flex items-end justify-between border-b hairline pb-6">
            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Apparel · Drop 01</p>
            <p className="text-xs text-muted-foreground">{PRODUCTS.length} pieces</p>
          </div>
        </Reveal>

        <div className="grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-3">
          {PRODUCTS.map((p, i) => (
            <Reveal key={p.name} delay={i * 60}>
              <a
                href="https://hoopivate-shop.fourthwall.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group block"
              >
                <div className={`relative aspect-square overflow-hidden rounded-xl border hairline bg-gradient-to-br ${p.tone} transition group-hover:opacity-90`}>
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.08),transparent_60%)]" />
                  <div className="absolute left-3 top-3 text-[10px] uppercase tracking-[0.2em] text-white/50">
                    Vault
                  </div>
                </div>
                <div className="mt-3 flex items-baseline justify-between">
                  <div>
                    <div className="font-display text-lg leading-tight">{p.name}</div>
                    <div className="text-xs text-muted-foreground">{p.line}</div>
                  </div>
                  <div className="text-xs text-muted-foreground">{p.price}</div>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="relative mx-auto max-w-4xl px-5 py-24 text-center sm:px-8">
        <Reveal>
          <h2 className="font-display text-4xl leading-tight tracking-tight text-balance sm:text-6xl">
            The full vault lives on{" "}
            <span className="accent-violet italic">Fourthwall.</span>
          </h2>
        </Reveal>
        <Reveal delay={120}>
          <a
            href="https://hoopivate-shop.fourthwall.com"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 inline-flex items-center justify-center rounded-full bg-white px-7 py-3 text-sm font-medium text-black transition hover:bg-white/90"
          >
            Visit the shop →
          </a>
        </Reveal>
      </section>
    </SiteShell>
  );
}
