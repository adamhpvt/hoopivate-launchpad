import { createFileRoute } from "@tanstack/react-router";
import { useCallback, useEffect, useRef, useState } from "react";
import { ArrowUpRight, ChevronDown, Lock, Menu, X } from "lucide-react";
import chromeBg from "@/assets/hoopivate-bg.jpg";
import logo from "@/assets/hoopivate-logo.png";
import collabImg from "@/assets/hoopivate-collab.webp";
import studioAsset from "@/assets/hoopivate-studio-gold.png.asset.json";
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
    image: studioAsset.url,
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
  const [visible, setVisible] = useState<Record<number, boolean>>({ 0: true });
  const [aiOpen, setAiOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const scrollerRef = useRef<HTMLDivElement | null>(null);
  const slideRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    setAiOpen(false);
  }, [active]);

  const goTo = useCallback((i: number) => {
    const el = slideRefs.current[i];
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);

  useEffect(() => {
    const root = scrollerRef.current;
    if (!root) return;
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          const i = Number((entry.target as HTMLElement).dataset.index);
          if (Number.isNaN(i)) continue;
          setVisible((v) => (v[i] === entry.isIntersecting ? v : { ...v, [i]: entry.isIntersecting }));
          if (entry.isIntersecting && entry.intersectionRatio > 0.55) setActive(i);
        }
      },
      { root, threshold: [0, 0.25, 0.6, 0.9] },
    );
    slideRefs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowDown" || e.key === "PageDown") {
        e.preventDefault();
        goTo(Math.min(CARDS.length - 1, active + 1));
      }
      if (e.key === "ArrowUp" || e.key === "PageUp") {
        e.preventDefault();
        goTo(Math.max(0, active - 1));
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [active, goTo]);

  return (
    <main className="relative flex h-[100svh] w-full flex-col overflow-hidden bg-black text-foreground">
      {/* Liquid chrome backdrop */}
      <div aria-hidden className="chrome-breathe pointer-events-none absolute inset-0 z-0">
        <div
          className="chrome-drift absolute inset-[-10%] bg-cover bg-center opacity-[0.92]"
          style={{ backgroundImage: `url(${chromeBg})` }}
        />
      </div>
      <div aria-hidden className="pointer-events-none absolute inset-0 z-0 bg-black/30" />
      <div aria-hidden className="grain pointer-events-none absolute inset-0 z-0" />

      {/* HEADER */}
      <div className="relative z-30 shrink-0 px-4 pt-4">
        <div className="glass-card glass-header mx-auto flex w-full max-w-[560px] items-center justify-between overflow-visible rounded-[22px] px-4 py-2.5">
          <span aria-hidden className="glass-sheen" />
          <span className="w-9" />
          <img src={logo} alt="Hoopivate" className="h-9 w-9 object-contain drop-shadow-[0_2px_8px_rgba(0,0,0,0.85)]" />

          <button
            type="button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-white/25 bg-black/30 text-white/90 backdrop-blur-md transition-colors hover:bg-black/50"
          >
            {menuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>

        {menuOpen && (
          <div className="glass-card glass-active absolute inset-x-4 z-40 mx-auto mt-2 w-auto max-w-[560px] overflow-hidden rounded-[22px] p-2 sm:left-1/2 sm:w-full sm:-translate-x-1/2">
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
      <header className="relative z-10 shrink-0 px-6 pt-10 pb-10 text-center">
        <span aria-hidden className="hero-halo pointer-events-none absolute inset-x-0 top-0 -z-10 h-[130%]" />
        <p className="font-mono text-[9px] uppercase tracking-[0.4em] text-white/55">
          Dominating since forever
        </p>
        <h1 className="chrome-text mt-1.5 text-balance font-display text-base font-semibold tracking-tight sm:text-lg">
          Hoopivate — The Hooper&apos;s Mood Board
        </h1>
      </header>

      {/* CARD SCROLLER */}
      <section
        ref={scrollerRef}
        className="no-scrollbar relative z-10 min-h-0 flex-1 snap-y snap-mandatory overflow-y-auto overscroll-y-contain"
      >
        {CARDS.map((card, i) => (
          <div
            key={card.id}
            data-index={i}
            ref={(el) => {
              slideRefs.current[i] = el;
            }}
            className="flex h-full snap-start snap-always items-center justify-center px-5"
          >
            <GlassCard
              card={card}
              inView={!!visible[i]}
              aiOpen={aiOpen && active === i}
              onToggleAi={() => setAiOpen((v) => !v)}
            />
          </div>
        ))}
      </section>

      {/* SCROLL CUE */}
      <div className="relative z-20 flex shrink-0 flex-col items-center gap-1 pt-2">
        <button
          type="button"
          onClick={() => goTo(active === CARDS.length - 1 ? 0 : active + 1)}
          className={`scroll-cue flex flex-col items-center gap-0.5 text-white/60 transition-opacity duration-500 hover:text-white ${
            active === CARDS.length - 1 ? "opacity-0" : "opacity-100"
          }`}
          aria-label="Next card"
          tabIndex={active === CARDS.length - 1 ? -1 : 0}
        >
          <span className="font-mono text-[9px] uppercase tracking-[0.32em]">Scroll</span>
          <ChevronDown className="scroll-bob h-4 w-4" />
        </button>
      </div>

      {/* DOTS */}
      <div className="relative z-10 flex shrink-0 items-center justify-center gap-3 pt-2 pb-2">
        <div className="flex items-center gap-2">
          {CARDS.map((c, i) => (
            <button
              key={c.id}
              aria-label={c.title}
              onClick={() => goTo(i)}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === active ? "w-8 bg-white/90" : "w-2 bg-white/30 hover:bg-white/55"
              }`}
            />
          ))}
        </div>
        <span className="font-mono text-[10px] tracking-[0.22em] text-white/45">
          {String(active + 1).padStart(2, "0")} / {String(CARDS.length).padStart(2, "0")}
        </span>
      </div>

      <footer className="relative z-10 shrink-0 pb-6 pt-2 text-center">
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
  inView,
  aiOpen,
  onToggleAi,
}: {
  card: Card;
  inView: boolean;
  aiOpen: boolean;
  onToggleAi: () => void;
}) {
  return (
    <div
      className={`glass-card glass-solid glass-active card-reveal ${
        inView ? "is-in" : ""
      } relative flex w-full max-w-[420px] flex-col overflow-hidden rounded-[26px] sm:max-w-[500px]`}
    >
      <span aria-hidden className="glass-sheen" />

      <div className="relative flex flex-1 flex-col">
        {/* PHOTO ZONE */}
        {card.image ? (
          <div className="relative h-[150px] w-full shrink-0 overflow-hidden sm:h-[170px]">
            <img
              src={card.image}
              alt=""
              aria-hidden
              loading="lazy"
              className="h-full w-full object-cover object-center"
            />
            <div
              aria-hidden
              className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-b from-transparent to-[rgba(8,8,10,0.94)]"
            />
          </div>
        ) : (
          <div aria-hidden className="h-8 w-full shrink-0" />
        )}

        {/* TEXT ZONE */}
        <div className="relative flex flex-1 flex-col bg-[rgba(8,8,10,0.94)] px-6 pb-6 pt-4 sm:px-8 sm:pb-7">
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
                className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/[0.08] px-4 py-2 text-[13px] font-medium text-white/90 backdrop-blur-md transition-colors hover:border-white/40 hover:bg-white/[0.14]"
              >
                {card.cta}
                <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
            )}
          </div>
        </div>
      </div>
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
