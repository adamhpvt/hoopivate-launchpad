import { createFileRoute } from "@tanstack/react-router";
import { useCallback, useEffect, useRef, useState } from "react";
import { ArrowUpRight, Lock, Menu, X } from "lucide-react";
import chromeBg from "@/assets/chrome-bg.jpg";
import logo from "@/assets/hoopivate-logo.png";
import collabImg from "@/assets/hoopivate-collab.webp";
import studioImg from "@/assets/hoopivate-studio.webp";
import vaultImg from "@/assets/hoopivate-vault.webp";

export const Route = createFileRoute("/")({
  component: Launcher,
});

type Card = {
  id: string;
  title: string;
  line: string;
  href?: string;
  cta: string;
  image?: string;
  locked?: boolean;
};

const CARDS: Card[] = [
  {
    id: "collab",
    title: "Collab",
    line: "Motivate yourself and other hoopers through our signature collab posts.",
    href: "https://tally.so/r/1AzeQW",
    cta: "Get your collab now",
    image: collabImg,
  },
  {
    id: "studio",
    title: "Studio",
    line: "Build your merch line — 100% of profits to you.",
    href: "https://hoopivatestudio.com",
    cta: "Get your merch built",
    image: studioImg,
  },
  {
    id: "vault",
    title: "Vault",
    line: "Shop the latest Hoopivate drops.",
    href: "https://hoopivate-shop.fourthwall.com",
    cta: "Shop the vault",
    image: vaultImg,
  },
  {
    id: "ai",
    title: "Hoopivate AI",
    line: "We're building the next cherry on top for college basketball recruitment. Be the first in.",
    cta: "Join the waitlist",
    locked: true,
  },
];

const SUPPORT = "https://hoopivate-shop.fourthwall.com/pages/support-the-vision";
const COACH = "https://tally.so/r/ODElLK";
const ATHLETE = "https://tally.so/r/jaXRAR";

function Launcher() {
  const [active, setActive] = useState(0);
  const [aiOpen, setAiOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const lockRef = useRef(0);
  const touchY = useRef<number | null>(null);

  const step = useCallback((dir: number) => {
    const now = Date.now();
    if (now < lockRef.current) return;
    setActive((i) => {
      const next = Math.min(CARDS.length - 1, Math.max(0, i + dir));
      if (next !== i) lockRef.current = now + 620;
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
        className="chrome-drift pointer-events-none absolute inset-[-14%] z-0 bg-cover bg-center opacity-[0.9]"
        style={{ backgroundImage: `url(${chromeBg})` }}
      />
      <div aria-hidden className="pointer-events-none absolute inset-0 z-0 bg-black/45" />
      <div aria-hidden className="grain pointer-events-none absolute inset-0 z-0" />

      {/* HEADER */}
      <div className="relative z-30 px-4 pt-4">
        <div className="glass-card glass-active mx-auto flex w-full max-w-[560px] items-center justify-between overflow-visible rounded-[22px] px-4 py-2.5">
          <span aria-hidden className="glass-sheen" />
          <span className="w-9" />
          <img src={logo} alt="Hoopivate" className="h-9 w-9 object-contain" />
          <button
            type="button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white/80 transition-colors hover:bg-white/10"
          >
            {menuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>

        {menuOpen && (
          <div className="glass-card glass-active mx-auto mt-2 w-full max-w-[560px] overflow-hidden rounded-[22px] p-2">
            <span aria-hidden className="glass-sheen" />
            {CARDS.map((c) => (
              <a
                key={c.id}
                href={c.href ?? ATHLETE}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMenuOpen(false)}
                className="flex items-center justify-between rounded-2xl px-3 py-2.5 font-display text-sm tracking-tight text-white/85 transition-colors hover:bg-white/10"
              >
                {c.title}
                <ArrowUpRight className="h-3.5 w-3.5 text-white/50" />
              </a>
            ))}
          </div>
        )}
      </div>

      {/* HERO */}
      <header className="relative z-10 px-6 pt-6 text-center">
        <span aria-hidden className="hero-halo pointer-events-none absolute inset-x-0 top-0 -z-10 h-[130%]" />
        <p className="font-mono text-[9px] uppercase tracking-[0.4em] text-white/55">
          Dominating since forever
        </p>
        <h1 className="chrome-text mt-1.5 font-display text-base font-semibold tracking-tight sm:text-lg">
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
          className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/35 transition-colors hover:text-white/70"
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
    ? { transform: "translate3d(0,-14%,0) scale(0.985)", opacity: 0, zIndex: 0 }
    : {
        transform: `translate3d(0, ${depth * 64}px, 0) scale(${1 - depth * 0.05})`,
        opacity: depth > 2 ? 0 : 1,
        zIndex: 20 - depth,
      };

  const sizeClass = card.locked
    ? "min-h-[230px] sm:min-h-[256px]"
    : "min-h-[230px] sm:min-h-[256px]";

  const shell = `glass-card glass-solid absolute inset-x-0 top-0 flex ${sizeClass} flex-col overflow-hidden origin-top rounded-[26px] p-6 will-change-transform sm:p-8 ${
    isActive ? "glass-active" : "glass-behind"
  }`;

  return (
    <div className={shell} style={style}>
      {card.image && (
        <>
          <img
            src={card.image}
            alt=""
            aria-hidden
            loading="eager"
            className="pointer-events-none absolute inset-0 h-full w-full object-cover object-center opacity-[0.9]"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/10 via-black/20 to-black/55"
          />
        </>
      )}
      <span aria-hidden className="glass-sheen" />

      {!isActive ? (
        <div className="relative mt-auto flex items-center gap-2">
          {card.locked && <Lock className="h-3 w-3 text-white/35" />}
          <span className="font-mono text-[11px] uppercase tracking-[0.24em] text-white/45">
            {card.title}
          </span>
        </div>
      ) : (
      <div className="relative flex flex-1 flex-col">
        <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
          {card.locked && <Lock className="h-3.5 w-3.5 text-white/45" />}
          <h2 className="font-display text-2xl font-semibold tracking-tight sm:text-3xl">
            {card.title}
          </h2>
          {card.locked && (
            <span className="rounded-full border border-white/20 bg-white/5 px-2 py-0.5 font-mono text-[9px] uppercase tracking-[0.18em] text-white/55">
              Waitlist
            </span>
          )}
        </div>
        <p className="mt-2.5 max-w-[24rem] text-sm text-white/65">{card.line}</p>


        <div className="mt-auto pt-5">
          {card.locked ? (
            <>
              <button
                type="button"
                onClick={onToggleAi}
                aria-expanded={aiOpen}
                disabled={!isActive}
                className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/[0.08] px-4 py-2 text-[13px] font-medium text-white/90 backdrop-blur-md transition-colors hover:border-white/40 hover:bg-white/[0.14]"
              >
                {card.cta}
                <ArrowUpRight className="h-3.5 w-3.5" />
              </button>
              <div
                className={`grid transition-[grid-template-rows,opacity,margin] duration-300 ease-out ${
                  aiOpen ? "mt-3 grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="overflow-hidden">
                  <div className="flex flex-col gap-2.5 sm:flex-row">
                    <Choice href={COACH} label="I'm a Coach" />
                    <Choice href={ATHLETE} label="I'm an Athlete" />
                  </div>
                </div>
              </div>
            </>
          ) : (
            <a
              href={card.href}
              target="_blank"
              rel="noopener noreferrer"
              tabIndex={isActive ? 0 : -1}
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/[0.08] px-4 py-2 text-[13px] font-medium text-white/90 backdrop-blur-md transition-colors hover:border-white/40 hover:bg-white/[0.14]"
            >
              {card.cta}
              <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          )}
        </div>
      </div>
      )}

    </div>
  );
}

function Choice({ href, label }: { href: string; label: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex flex-1 items-center justify-between gap-3 rounded-full border border-white/15 bg-white/[0.06] px-4 py-2.5 text-[13px] font-medium text-white/90 transition-colors hover:border-white/40 hover:bg-white/[0.12]"
    >
      {label}
      <ArrowUpRight className="h-3.5 w-3.5" />
    </a>
  );
}
