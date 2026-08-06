import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Lock, Menu, X } from "lucide-react";
import chromeBg from "@/assets/hoopivate-bg.jpg";
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
  const [aiOpen, setAiOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className="relative min-h-[100svh] w-full bg-black text-foreground">
      {/* Liquid chrome backdrop — fixed over the whole page */}
      <div aria-hidden className="chrome-breathe pointer-events-none fixed inset-0 z-0">
        <div
          className="chrome-drift absolute inset-[-10%] bg-cover bg-center opacity-[0.92]"
          style={{ backgroundImage: `url(${chromeBg})` }}
        />
      </div>
      <div aria-hidden className="pointer-events-none fixed inset-0 z-0 bg-black/30" />
      <div aria-hidden className="grain pointer-events-none fixed inset-0 z-0" />

      {/* HEADER */}
      <div className="sticky top-0 z-30 px-4 pt-4">
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
      <header className="relative z-10 px-6 pb-7 pt-9 text-center sm:pb-9 sm:pt-12">
        <span aria-hidden className="hero-halo pointer-events-none absolute inset-x-0 top-0 -z-10 h-[130%]" />
        <p className="font-mono text-[9px] uppercase tracking-[0.4em] text-white/55">
          Dominating since forever
        </p>
        <h1 className="chrome-text mt-2 text-balance font-display text-lg font-semibold tracking-tight sm:text-2xl">
          Hoopivate — The Hooper&apos;s Moodboard
        </h1>

      </header>

      {/* CARDS — compact, continuous page flow */}
      <section className="relative z-10 mx-auto flex w-full max-w-[500px] flex-col gap-6 px-5 pb-6 sm:gap-8">
        {CARDS.map((card) => (
          <GlassCard
            key={card.id}
            card={card}
            aiOpen={aiOpen}
            onToggleAi={() => setAiOpen((v) => !v)}
          />
        ))}
      </section>

      <footer className="relative z-10 pb-10 pt-5 text-center">
        <a
          href={SUPPORT}
          target="_blank"
          rel="noopener noreferrer"
          className="glass-header inline-flex items-center gap-2 rounded-full px-5 py-3 font-mono text-[10px] uppercase tracking-[0.16em] text-white/85 transition-colors hover:text-white"
        >
          Support the vision
          <ArrowUpRight className="h-3.5 w-3.5" />
        </a>
      </footer>
    </main>
  );
}

function GlassCard({
  card,
  aiOpen,
  onToggleAi,
}: {
  card: Card;
  aiOpen: boolean;
  onToggleAi: () => void;
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [inView, setInView] = useState(card.id === "collab");

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setInView(true);
      },
      { threshold: 0.2, rootMargin: "0px 0px -8% 0px" },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`glass-card glass-active card-reveal ${
        inView ? "is-in" : ""
      } relative flex w-full flex-col overflow-hidden rounded-[26px]`}
    >
      <span aria-hidden className="glass-sheen" />

      <div className="relative flex flex-1 flex-col">
        {/* PHOTO ZONE */}
        {card.image ? (
          <div className="relative h-[160px] w-full shrink-0 overflow-hidden sm:h-[190px]">
            <img
              src={card.image}
              alt=""
              aria-hidden
              loading="lazy"
              className="h-full w-full object-cover object-center"
            />
            <div
              aria-hidden
              className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-b from-transparent to-[rgba(8,8,10,0.72)]"
            />
          </div>
        ) : (
          <div aria-hidden className="h-8 w-full shrink-0" />
        )}

        {/* TEXT ZONE */}
        <div className="glass-panel relative flex flex-1 flex-col px-6 pb-7 pt-5 sm:px-8">
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
          <p className="mt-2.5 max-w-[24rem] text-sm text-white/70">{card.line}</p>

          <div className="mt-auto pt-6">
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
