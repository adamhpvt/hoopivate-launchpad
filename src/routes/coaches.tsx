import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { SiteShell } from "../components/SiteShell";
import { Reveal } from "../components/Reveal";

export const Route = createFileRoute("/coaches")({
  head: () => ({
    meta: [
      { title: "For Coaches — Hoopivate" },
      { name: "description", content: "Evaluate what matters under pressure. The new layer for college basketball recruitment." },
      { property: "og:title", content: "For Coaches — Hoopivate" },
      { property: "og:description", content: "Evaluate what matters under pressure. The new layer for college basketball recruitment." },
    ],
  }),
  component: Coaches,
});

const TALLY = "https://tally.so/r/ODElLK";

function Coaches() {
  return (
    <SiteShell>
      <section className="relative mx-auto max-w-3xl px-5 pb-24 pt-16 sm:px-8 sm:pt-24">
        <Reveal>
          <p className="mb-6 text-[10px] uppercase tracking-[0.3em] text-white/50">
            For Coaches
          </p>
        </Reveal>
        <Reveal delay={80}>
          <h1 className="font-display text-5xl leading-[1] tracking-tight sm:text-7xl">
            Talent is easy. <span className="italic">Fit isn't.</span>
          </h1>
        </Reveal>
        <Reveal delay={160}>
          <p className="mt-8 text-lg leading-relaxed text-white/70 sm:text-xl">
            Tired of landing good talent, only to get a bad locker room fit?
          </p>
        </Reveal>
        <Reveal delay={220}>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground">
            A new integration is coming to help you evaluate what matters under
            pressure — the cherry on top for college basketball recruitment.
          </p>
        </Reveal>
        <Reveal delay={300}>
          <a
            href={TALLY}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-12 inline-flex items-center gap-3 rounded-full bg-white px-7 py-3.5 text-sm font-medium text-black transition hover:bg-white/90"
          >
            Join the waitlist for early access
            <ArrowRight className="h-4 w-4" />
          </a>
        </Reveal>
      </section>
    </SiteShell>
  );
}
