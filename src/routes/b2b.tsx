import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { SiteShell } from "../components/SiteShell";
import { Reveal } from "../components/Reveal";

export const Route = createFileRoute("/b2b")({
  head: () => ({
    meta: [
      { title: "For B2B Partners — Hoopivate" },
      { name: "description", content: "The missing layer for athlete NIL and recruitment alignment. Enrich your platform via API." },
      { property: "og:title", content: "For B2B Partners — Hoopivate" },
      { property: "og:description", content: "The missing layer for athlete NIL and recruitment alignment. Enrich your platform via API." },
    ],
  }),
  component: B2B,
});

const TALLY = "https://tally.so/r/1ARkvM";

function B2B() {
  return (
    <SiteShell>
      <section className="relative mx-auto max-w-3xl px-5 pb-24 pt-16 sm:px-8 sm:pt-24">
        <Reveal>
          <p className="mb-6 text-[10px] uppercase tracking-[0.3em] text-white/50">
            For B2B Partners
          </p>
        </Reveal>
        <Reveal delay={80}>
          <h1 className="font-display text-5xl leading-[1] tracking-tight sm:text-7xl">
            Profiles, with a <span className="italic">pulse.</span>
          </h1>
        </Reveal>
        <Reveal delay={220}>
          <p className="mt-8 text-base leading-relaxed text-muted-foreground sm:text-lg">
            Let's build a seamless API connection to instantly add an extra
            layer of credibility to your athlete profiles on your existing
            platforms.
          </p>
        </Reveal>
        <Reveal delay={300}>
          <a
            href={TALLY}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-12 inline-flex items-center gap-3 rounded-full bg-white px-7 py-3.5 text-sm font-medium text-black transition hover:bg-white/90"
          >
            Request API early access
            <ArrowRight className="h-4 w-4" />
          </a>
        </Reveal>
      </section>
    </SiteShell>
  );
}
