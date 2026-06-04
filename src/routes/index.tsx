import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Lock, ArrowRight } from "lucide-react";
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

const TALLY_STORY = "https://tally.so/r/mOpy47";

const bubbles = [
  { step: "01", label: "Tell your story", locked: false },
  { step: "02", locked: true },
  { step: "03", locked: true },
  { step: "04", locked: true },
  { step: "05", locked: true },
] as const;

function Index() {
  const [storyOpen, setStoryOpen] = useState(false);

  return (
    <SiteShell>
      {/* HERO */}
      <section className="relative mx-auto max-w-5xl px-5 pb-12 pt-14 text-center sm:px-8 sm:pt-20">
        <Reveal>
          <p className="mb-6 inline-flex items-center gap-2 rounded-full border hairline bg-white/5 px-3 py-1 text-[10px] uppercase tracking-[0.25em] text-white/60">
            <span className="h-1.5 w-1.5 rounded-full bg-white" />
            For the Athlete
          </p>
        </Reveal>
        <Reveal delay={80}>
          <h1 className="font-display text-6xl font-black leading-[0.95] tracking-tight text-balance sm:text-8xl md:text-9xl">
            Beyond the <span className="italic">stats.</span>
          </h1>
        </Reveal>
        <Reveal delay={160}>
          <p className="mx-auto mt-7 max-w-xl text-base text-white/60 sm:text-lg">
            Your story is the leverage. Unlock step one.
          </p>
        </Reveal>
      </section>

      {/* ATHLETE PATH */}
      <section id="path" className="relative mx-auto max-w-6xl px-5 pb-32 pt-8 sm:px-8">
        {/* Desktop: curved horizontal path */}
        <div className="relative hidden md:block">
          <svg
            className="pointer-events-none absolute inset-x-0 top-[52px] h-32 w-full"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
            fill="none"
          >
            <path
              d="M 60 70 C 240 0, 420 120, 600 60 S 960 0, 1140 70"
              stroke="url(#dust)"
              strokeWidth="1.5"
              strokeDasharray="3 9"
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
          <div className="relative grid grid-cols-5 gap-4">
            {bubbles.map((b, i) => (
              <div
                key={b.step}
                className="flex justify-center"
                style={{ transform: `translateY(${[0, -34, 22, -18, 8][i]}px)` }}
              >
                <Reveal delay={i * 100}>
                  <PathBubble bubble={b} onClick={() => !b.locked && setStoryOpen(true)} />
                </Reveal>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile: curvy vertical timeline */}
        <div className="relative md:hidden">
          <svg
            className="pointer-events-none absolute left-1/2 top-0 h-full w-40 -translate-x-1/2"
            viewBox="0 0 160 800"
            preserveAspectRatio="none"
            fill="none"
          >
            <path
              d="M 80 20 C 10 120, 150 220, 80 320 S 10 520, 80 620 S 150 740, 80 800"
              stroke="url(#dustM)"
              strokeWidth="1.5"
              strokeDasharray="3 9"
              strokeLinecap="round"
              className="stardust-dash"
            />
            <defs>
              <linearGradient id="dustM" x1="0" x2="0" y1="0" y2="1">
                <stop offset="0%" stopColor="rgba(255,255,255,0.05)" />
                <stop offset="20%" stopColor="rgba(180,140,255,0.55)" />
                <stop offset="80%" stopColor="rgba(120,200,255,0.45)" />
                <stop offset="100%" stopColor="rgba(255,255,255,0.05)" />
              </linearGradient>
            </defs>
          </svg>
          <div className="relative flex flex-col items-center gap-12 py-4">
            {bubbles.map((b, i) => {
              // Alternate slight horizontal offset to match curve
              const offsets = [0, -42, 38, -36, 0];
              return (
                <Reveal key={b.step} delay={i * 90}>
                  <div style={{ transform: `translateX(${offsets[i]}px)` }}>
                    <PathBubble
                      bubble={b}
                      onClick={() => !b.locked && setStoryOpen(true)}
                    />
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* CLOSER */}
      <section className="relative mx-auto max-w-3xl px-5 py-20 text-center sm:px-8">
        <Reveal>
          <button
            onClick={() => setStoryOpen(true)}
            className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-8 py-3.5 text-sm font-semibold uppercase tracking-wider text-black transition hover:bg-white/90"
          >
            Tell your story
            <ArrowRight className="h-4 w-4" />
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
}: {
  bubble: { step: string; label?: string; locked: boolean };
  onClick?: () => void;
}) {
  const size = "h-[104px] w-[104px]";
  if (bubble.locked) {
    return (
      <div className="flex flex-col items-center">
        <div className="relative">
          <span className="absolute -top-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full border hairline bg-black/80 px-2.5 py-0.5 text-[9px] font-medium uppercase tracking-[0.18em] text-white/55">
            Coming soon
          </span>
          <div
            aria-disabled
            className={`${size} flex items-center justify-center rounded-full border hairline bg-white/[0.02] opacity-60 cursor-not-allowed backdrop-blur-sm`}
          >
            <Lock className="h-5 w-5 text-white/60" />
          </div>
        </div>
        <p className="mt-4 text-[10px] uppercase tracking-[0.25em] text-white/35">
          {bubble.step}
        </p>
      </div>
    );
  }
  return (
    <button
      onClick={onClick}
      className="group flex flex-col items-center"
      aria-label={`Step ${bubble.step}: ${bubble.label}`}
    >
      <div className="relative">
        <span className="pulse-ring absolute inset-0 rounded-full" aria-hidden />
        <div
          className={`${size} relative z-10 flex items-center justify-center rounded-full border border-white/40 bg-gradient-to-br from-white/15 to-white/[0.04] text-white shadow-[0_0_50px_-5px_rgba(180,140,255,0.7)] backdrop-blur-sm transition-transform group-hover:scale-[1.05]`}
        >
          <span className="font-display text-3xl font-bold">{bubble.step}</span>
        </div>
      </div>
      <p className="mt-4 text-[10px] uppercase tracking-[0.25em] text-white/70">
        Active
      </p>
      <p className="mt-1 text-center text-sm font-semibold text-white">
        {bubble.label}
      </p>
    </button>
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
          <p className="text-[10px] uppercase tracking-[0.3em] text-white/50">
            Step 01
          </p>
          <DialogTitle className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
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
          className="mt-4 inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold uppercase tracking-wider text-black transition hover:bg-white/90"
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
