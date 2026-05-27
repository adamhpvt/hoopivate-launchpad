import { createFileRoute } from "@tanstack/react-router";
import { SiteShell } from "../components/SiteShell";
import { Reveal } from "../components/Reveal";

export const Route = createFileRoute("/vault")({
  component: Vault,
});

function Vault() {
  return (
    <SiteShell>
      <section className="relative mx-auto max-w-6xl px-5 pb-20 pt-12 sm:px-8 sm:pt-20">
        <Reveal>
          <p className="mb-6 inline-flex items-center gap-2 rounded-full border hairline bg-white/5 px-3 py-1 text-xs text-muted-foreground">
            <span className="h-1.5 w-1.5 rounded-full bg-white/60" />
            HoopivateVault
          </p>
        </Reveal>
        <Reveal delay={80}>
          <h1 className="font-display text-6xl leading-[1] tracking-tight sm:text-8xl">
            Hoopivate<span className="italic">Vault</span>
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
    </SiteShell>
  );
}
