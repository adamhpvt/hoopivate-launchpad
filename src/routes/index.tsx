import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Lock, ArrowRight, Sparkles } from "lucide-react";
import { SiteShell } from "../components/SiteShell";
import { Reveal } from "../components/Reveal";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

export const Route = createFileRoute("/")({
  component: Index,
});

const TALLY_STORY = "https://tally.so/r/xXleGo";
const TALLY_COACHES = "https://tally.so/r/ODElLK";
const TALLY_BRANDS = "https://tally.so/r/1ARkvM";

type Bubble = {
  step: string;
  label: string;
  locked: boolean;
};

const bubbles: Bubble[] = [
  { step: "01", label: "Tell your story", locked: false },
  { step: "02", label: "Deep Vibe Analysis", locked: true },
  { step: "03", label: "Smart Matching", locked: true },
  { step: "04", label: "Roster Chemistry", locked: true },
  { step: "05", label: "Portal Alignment", locked: true },
  { step: "06", label: "Draft Vitals", locked: true },
];

function Index() {
  const [storyOpen, setStoryOpen] = useState(false);

  return (
    <SiteShell>
      {/* HERO */}
      <section className="relative mx-auto max-w-6xl px-5 pb-16 pt-12 sm:px-8 sm:pt-20">
        <Reveal>
          <p className="mb-6 inline-flex items-center gap-2 rounded-full border hairline bg-white/5 px-3 py-1 text-xs text-muted-foreground">
            <span className="h-1.5 w-1.5 rounded-full bg-white/70" />
            For hoopers. Built for the NIL era.
          </p>
        </Reveal>
        <Reveal delay={80}>
          <h1 className="font-display text-5xl leading-[1.02] tracking-tight text-balance sm:text-7xl md:text-8xl">
            Your <span className="italic">path</span> starts here.
          </h1>
        </Reveal>
        <Reveal delay={160}>
          <p className="mt-6 max-w-2xl text-base text-muted-foreground sm:text-lg">
            Turn your story into NIL and recruitment leverage — one node at a
            time. Unlock the first step below.
          </p>
        </Reveal>
        <Reveal delay={220}>
          <a
            href="#path"
            className="mt-10 inline-flex items-center gap-2 text-sm text-muted-foreground transition hover:text-foreground"
          >
            Enter the path
            <span aria-hidden>↓</span>
          </a>
        </Reveal>
      </section>

      {/* ATHLETE PATH */}
      <section id="path" className="relative mx-auto max-w-6xl px-5 pb-32 pt-12 sm:px-8">
        <Reveal>
          <div className="mb-16 flex items-end justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                01 — The Athlete Path
              </p>
              <h2 className="mt-3 font-display text-4xl tracking-tight sm:text-5xl">
                Six steps. <span className="italic">One journey.</span>
              </h2>
            </div>
          </div>
        </Reveal>

        {/* Desktop: curved horizontal path */}
        <div className="relative hidden md:block">
          <svg
            className="pointer-events-none absolute inset-x-0 top-[60px] h-32 w-full"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
            fill="none"
          >
            <path
              d="M 40 70 C 200 10, 400 110, 600 60 S 1000 10, 1160 70"
              stroke="url(#dust)"
              strokeWidth="1.5"
              strokeDasharray="4 8"
              strokeLinecap="round"
              className="stardust-dash"
            />
            <defs>
              <linearGradient id="dust" x1="0" x2="1" y1="0" y2="0">
                <stop offset="0%" stopColor="rgba(255,255,255,0.05)" />
                <stop offset="20%" stopColor="rgba(180,140,255,0.55)" />
                <stop offset="80%" stopColor="rgba(120,200,255,0.45)" />
                <stop offset="100%" stopColor="rgba(255,255,255,0.05)" />
              </linearGradient>
            </defs>
          </svg>
          <div className="relative grid grid-cols-6 gap-4">
            {bubbles.map((b, i) => (
              <div
                key={b.step}
                style={{ transform: `translateY(${[0, -28, 18, -10, 24, -6][i]}px)` }}
              >
                <Reveal delay={i * 90}>
                  <PathBubble bubble={b} onClick={() => !b.locked && setStoryOpen(true)} />
                </Reveal>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile: vertical path */}
        <div className="relative md:hidden">
          <div className="pointer-events-none absolute left-[34px] top-2 bottom-2 w-px border-l border-dashed border-white/15" />
          <div className="flex flex-col gap-7">
            {bubbles.map((b, i) => (
              <Reveal key={b.step} delay={i * 70}>
                <div className="flex items-center gap-5">
                  <PathBubble
                    bubble={b}
                    compact
                    onClick={() => !b.locked && setStoryOpen(true)}
                  />
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                      Step {b.step}
                    </p>
                    <p className={`mt-1 font-display text-xl ${b.locked ? "text-white/40" : ""}`}>
                      {b.label}
                    </p>
                    {b.locked && (
                      <p className="mt-0.5 text-[10px] uppercase tracking-wider text-white/40">
                        Coming soon
                      </p>
                    )}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* B2B PORTALS */}
      <section className="relative mx-auto max-w-6xl px-5 py-24 sm:px-8">
        <Reveal>
          <div className="mb-12">
            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
              02 — For Coaches & Brands
            </p>
            <h2 className="mt-3 font-display text-4xl tracking-tight sm:text-5xl">
              Built for the people <span className="italic">around</span> the player.
            </h2>
          </div>
        </Reveal>

        <div className="grid gap-5 md:grid-cols-2">
          <Reveal delay={80}>
            <PortalCard
              eyebrow="For Coaches"
              hook="Tired of landing good talent, only to get a bad locker room fit?"
              body="The new integration is coming soon to help you evaluate what matters under pressure. The new cherry on top for college basketball recruitment. Coming Soon."
              ctaLabel="Join the waitlist for early access"
              href={TALLY_COACHES}
            />
          </Reveal>
          <Reveal delay={160}>
            <PortalCard
              eyebrow="For Platforms & Brands"
              hook="Tired of flat, static athlete profiles that miss the human element?"
              body="The missing layer for better athlete NIL and recruitment alignment. Let's build a seamless API connection to instantly enrich and boost your current athlete profiles on your existing esteemed platforms."
              ctaLabel="Request API access"
              href={TALLY_BRANDS}
            />
          </Reveal>
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
          <button
            onClick={() => setStoryOpen(true)}
            className="mt-10 inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-3 text-sm font-medium text-black transition hover:bg-white/90"
          >
            <Sparkles className="h-4 w-4" />
            Tell your story
          </button>
        </Reveal>
      </section>

      <StoryDialog open={storyOpen} onOpenChange={setStoryOpen} />
    </SiteShell>
  );
}

function PathBubble({
  bubble,
  onClick,
  compact = false,
}: {
  bubble: Bubble;
  onClick?: () => void;
  compact?: boolean;
}) {
  const size = compact ? "h-[68px] w-[68px]" : "h-[104px] w-[104px]";
  if (bubble.locked) {
    return (
      <div className={compact ? "" : "flex flex-col items-center"}>
        <div className="relative">
          {!compact && (
            <span className="absolute -top-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full border hairline bg-black/80 px-2.5 py-0.5 text-[9px] font-medium uppercase tracking-wider text-white/50">
              Coming soon
            </span>
          )}
          <div
            aria-disabled
            className={`${size} flex items-center justify-center rounded-full border hairline bg-white/[0.02] opacity-50 cursor-not-allowed backdrop-blur-sm`}
            title="Coming soon"
          >
            <Lock className={compact ? "h-5 w-5 text-white/60" : "h-6 w-6 text-white/60"} />
          </div>
        </div>
        {!compact && (
          <>
            <p className="mt-4 text-[10px] uppercase tracking-[0.2em] text-white/40">
              Step {bubble.step}
            </p>
            <p className="mt-1 text-center text-sm text-white/40">{bubble.label}</p>
          </>
        )}
      </div>
    );
  }
  return (
    <button
      onClick={onClick}
      className={compact ? "" : "group flex flex-col items-center"}
      aria-label={`Step ${bubble.step}: ${bubble.label}`}
    >
      <div className="relative">
        <span className="pulse-ring absolute inset-0 rounded-full" aria-hidden />
        <div
          className={`${size} relative z-10 flex items-center justify-center rounded-full border border-white/40 bg-gradient-to-br from-white/15 to-white/[0.04] text-white shadow-[0_0_40px_-5px_rgba(180,140,255,0.65)] backdrop-blur-sm transition-transform group-hover:scale-[1.04]`}
        >
          <span className="font-display text-2xl">{bubble.step}</span>
        </div>
      </div>
      {!compact && (
        <>
          <p className="mt-4 text-[10px] uppercase tracking-[0.2em] text-white/70">
            Active
          </p>
          <p className="mt-1 text-center text-sm font-medium text-white">
            {bubble.label}
          </p>
        </>
      )}
    </button>
  );
}

function PortalCard({
  eyebrow,
  hook,
  body,
  ctaLabel,
  href,
}: {
  eyebrow: string;
  hook: string;
  body: string;
  ctaLabel: string;
  href: string;
}) {
  return (
    <div className="group relative flex h-full flex-col justify-between overflow-hidden rounded-2xl border hairline bg-white/[0.02] p-8 transition hover:bg-white/[0.04] hover:shadow-[0_0_80px_-30px_rgba(180,140,255,0.45)]">
      <div className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-white/[0.04] blur-3xl transition group-hover:bg-white/[0.07]" />
      <span className="absolute right-5 top-5 rounded-full border hairline bg-black/60 px-2.5 py-0.5 text-[9px] font-medium uppercase tracking-wider text-white/60">
        Partners
      </span>
      <div className="relative">
        <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
          {eyebrow}
        </p>
        <h3 className="mt-4 font-display text-2xl leading-snug tracking-tight sm:text-3xl">
          {hook}
        </h3>
        <p className="mt-5 text-sm leading-relaxed text-muted-foreground">{body}</p>
      </div>
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="relative mt-8 flex items-center justify-between gap-3 rounded-full border border-white/15 bg-black/40 px-2 py-2 pl-5 text-sm text-white/80 transition hover:border-white/30 hover:text-white"
      >
        <span>{ctaLabel}</span>
        <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white text-black transition group-hover:translate-x-0.5">
          <ArrowRight className="h-4 w-4" />
        </span>
      </a>
    </div>
  );
}

function StoryDialog({
  open,
  onOpenChange,
}: {
  open: boolean;
  onOpenChange: (v: boolean) => void;
}) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="border-white/15 bg-black/90 text-foreground shadow-[0_0_120px_-20px_rgba(180,140,255,0.5)] backdrop-blur-xl sm:max-w-lg">
        <DialogHeader>
          <p className="text-[10px] uppercase tracking-[0.25em] text-white/50">
            Step 01
          </p>
          <DialogTitle className="font-display text-3xl tracking-tight sm:text-4xl">
            Tell your <span className="italic">story</span>.
          </DialogTitle>
          <DialogDescription className="pt-3 text-base font-medium leading-relaxed text-white/80">
            Be raw, and chaotic. AI won't help us know who you really are.
            Tell your story, in your own voice.
          </DialogDescription>
        </DialogHeader>
        <a
          href={TALLY_STORY}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition hover:bg-white/90"
        >
          Open the story form
          <ArrowRight className="h-4 w-4" />
        </a>
        <p className="mt-2 text-xs text-white/40">
          Takes ~3 minutes. Your words. No filter.
        </p>
      </DialogContent>
    </Dialog>
  );
}
