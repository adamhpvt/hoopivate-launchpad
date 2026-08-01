import { createFileRoute } from "@tanstack/react-router";
import { useCallback, useEffect, useRef, useState } from "react";
import { ArrowUpRight, Lock } from "lucide-react";
import chromeBg from "@/assets/chrome-bg.jpg";

export const Route = createFileRoute("/")({
  component: Launcher,
});

type Card = {
  id: string;
  title: string;
  line: string;
  href?: string;
  locked?: boolean;
};

const CARDS: Card[] = [
  {
    id: "collab",
    title: "Collab",
    line: "Move with other hoopers through our signature collab posts.",
    href: "https://tally.so/r/1AzeQW",
  },
  {
    id: "studio",
    title: "Studio",
    line: "Build your merch line — 100% of profits to you.",
    href: "https://hoopivatestudio.com",
  },
  {
    id: "vault",
    title: "Vault",
    line: "Shop the latest Hoopivate drops.",
    href: "https://hoopivate-shop.fourthwall.com",
  },
  {
    id: "ai",
    title: "Hoopivate AI",
    line: "Early access is opening in waves.",
    locked: true,
  },
];

const SUPPORT = "https://hoopivate-shop.fourthwall.com/pages/support-the-vision";
const COACH = "https://tally.so/r/1ARkvM";
const ATHLETE = "https://tally.so/r/jaXRAR";

function Launcher() {
  const [active, setActive] = useState(0);
  const [aiOpen, setAiOpen] = useState(false);
  const lockRef = useRef(0);
  const touchY = useRef<number | null>(null);

  const step = useCallback((dir: number) => {
    const now = Date.now();
    if (now < lockRef.current) return;
    setActive((i) => {
      const next = Math.min(CARDS.length - 1, Math.max(0, i + dir));
      if (next !== i) lockRef.current = now + 480;
      return next;
    });
  }, []);

  useEffect(() => {
    setAiOpen(false);
  }, [active]);

  useEffect(() => {
    const onWheel = (e: WheelEvent) => {
      if (Math.abs(e.deltaY) < 8) return;
      e.preventDefault();
      step(e.deltaY > 0 ? 1 : -1);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowDown" || e.key === "PageDown") step(1);
      if (e.key === "ArrowUp" || e.key === "PageUp") step(-1);
    };
    const onTouchStart = (e: TouchEvent) => {
      touchY.current = e.touches[0].clientY;
    };
    const onTouchMove = (e: TouchEvent) => {
      if (touchY.current === null) return;
      const dy = touchY.current - e.touches[0].clientY;
      if (Math.abs(dy) > 42) {
        step(dy > 0 ? 1 : -1);
        touchY.current = null;
      }
    };
    window.addEventListener("wheel", onWheel, { passive: false });
    window.addEventListener("keydown", onKey);
    window.addEventListener("touchstart", onTouchStart, { passive: true });
    window.addEventListener("touchmove", onTouchMove, { passive: true });
    return () => {
      window.removeEventListener("wheel", onWheel);
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("touchstart", onTouchStart);
      window.removeEventListener("touchmove", onTouchMove);
    };
  }, [step]);

  return (
    <main className="relative flex h-[100svh] w-full flex-col overflow-hidden bg-black text-foreground">
      {/* Liquid chrome backdrop */}
      <div
        aria-hidden
        className="chrome-drift pointer-events-none absolute inset-[-14%] z-0 bg-cover bg-center opacity-[0.55]"
        style={{ backgroundImage: `url(${chromeBg})` }}
      />
      <div aria-hidden className="pointer-events-none absolute inset-0 z-0 bg-black/40" />
      <div aria-hidden className="grain pointer-events-none absolute inset-0 z-0" />

      {/* HERO */}
      <header className="relative z-10 px-6 pt-[9svh] text-center sm:pt-[10svh]">
        <p className="text-[10px] uppercase tracking-[0.42em] text-white/40 sm:text-[11px]">
          Dominating since forever
        </p>
        <h1 className="chrome-text mt-4 font-display text-[clamp(2.4rem,10vw,4.5rem)] font-semibold leading-[0.95] tracking-tight">
          The Hooper&apos;s Zone.
        </h1>
      </header>

      {/* CARD STACK */}
      <section className="relative z-10 flex flex-1 items-center justify-center px-5">
        <div className="relative h-[340px] w-full max-w-[420px] sm:h-[390px] sm:max-w-[500px]">
          {CARDS.map((card, i) => {
            const d = i - active;
            const hidden = d < 0;
            const depth = Math.min(d, 3);
            return (
              <GlassCard
                key={card.id}
                card={card}
                depth={depth}
                hidden={hidden}
                isActive={d === 0}
                aiOpen={aiOpen}
                onToggleAi={() => setAiOpen((v) => !v)}
              />
            );
          })}
        </div>
      </section>

      {/* DOTS */}
      <div className="relative z-10 flex items-center justify-center gap-2 pb-2">
        {CARDS.map((c, i) => (
          <button
            key={c.id}
            aria-label={c.title}
            onClick={() => setActive(i)}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              i === active ? "w-6 bg-white/85" : "w-1.5 bg-white/25 hover:bg-white/45"
            }`}
          />
        ))}
      </div>

      <footer className="relative z-10 pb-7 pt-4 text-center">
        <a
          href={SUPPORT}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[11px] tracking-[0.2em] text-white/35 uppercase transition-colors hover:text-white/70"
        >
          Support the vision
        </a>
      </footer>
    </main>
  );
}

function GlassCard({
  card,
  depth,
  hidden,
  isActive,
  aiOpen,
  onToggleAi,
}: {
  card: Card;
  depth: number;
  hidden: boolean;
  isActive: boolean;
  aiOpen: boolean;
  onToggleAi: () => void;
}) {
  const style: React.CSSProperties = hidden
    ? { transform: "translate3d(0,-130%,0) scale(0.94)", opacity: 0, zIndex: 0 }
    : {
        transform: `translate3d(0, ${depth * 64}px, 0) scale(${1 - depth * 0.05})`,
        opacity: depth > 2 ? 0 : 1,
        zIndex: 20 - depth,
      };

  const body = isActive ? (
    <>
      <span aria-hidden className="glass-sheen" />
      <div className="relative flex items-start justify-between gap-5">
        <div>
          <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
            {card.locked && <Lock className="h-3.5 w-3.5 text-white/45" />}
            <h2 className="font-display text-2xl font-semibold tracking-tight whitespace-nowrap sm:text-3xl">
              {card.title}
            </h2>
            {card.locked && (
              <span className="rounded-full border border-white/20 bg-white/5 px-2 py-0.5 text-[9px] uppercase tracking-[0.18em] text-white/55">
                Waitlist
              </span>
            )}
          </div>
          <p className="mt-2.5 max-w-[22rem] text-sm text-white/55">{card.line}</p>
        </div>
        <span className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white/70">
          <ArrowUpRight className="h-4 w-4" />
        </span>
      </div>
    </>
  ) : (
    <>
      <span aria-hidden className="glass-sheen" />
      <div className="relative mt-auto flex items-center gap-2 pt-2">
        {card.locked && <Lock className="h-3 w-3 text-white/35" />}
        <span className="font-display text-[13px] uppercase tracking-[0.24em] text-white/45">
          {card.title}
        </span>
      </div>
    </>
  );

  const sizeClass = card.locked
    ? "min-h-[214px] sm:min-h-[240px]"
    : "h-[214px] sm:h-[240px]";

  const shell = `glass-card absolute inset-x-0 top-0 flex ${sizeClass} flex-col overflow-hidden origin-top rounded-[26px] p-6 will-change-transform sm:p-8 ${
    isActive ? "glass-active" : "glass-behind"
  }`;

  if (card.locked) {
    return (
      <div className={shell} style={{ ...style, transitionProperty: "transform,opacity,filter" }}>
        <button
          type="button"
          onClick={onToggleAi}
          aria-expanded={aiOpen}
          className="flex w-full flex-1 flex-col text-left"
          disabled={!isActive}
        >
          {body}
        </button>

        <div
          className={`grid transition-[grid-template-rows,opacity,margin] duration-300 ease-out ${
            aiOpen ? "mt-5 grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
          }`}
        >
          <div className="overflow-hidden">
            <div className="flex flex-col gap-2.5 sm:flex-row">
              <Choice href={COACH} label="I'm a Coach" />
              <Choice href={ATHLETE} label="I'm an Athlete" />
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <a
      href={card.href}
      target="_blank"
      rel="noopener noreferrer"
      className={shell}
      style={style}
      tabIndex={isActive ? 0 : -1}
      aria-hidden={!isActive}
    >
      {body}
    </a>
  );
}

function Choice({ href, label }: { href: string; label: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex flex-1 items-center justify-between gap-3 rounded-2xl border border-white/15 bg-white/[0.06] px-4 py-3 text-sm font-medium text-white/90 transition-colors hover:border-white/40 hover:bg-white/[0.12]"
    >
      {label}
      <ArrowUpRight className="h-4 w-4" />
    </a>
  );
}
