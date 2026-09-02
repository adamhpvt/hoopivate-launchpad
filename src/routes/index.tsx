import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Heart, Menu, X } from "lucide-react";
import logo from "@/assets/hoopivate-logo.png";

import s1 from "@/assets/stories/story-1.webp";
import s2 from "@/assets/stories/story-2.webp";
import s3 from "@/assets/stories/story-3.webp";
import s4 from "@/assets/stories/story-4.webp";
import s5 from "@/assets/stories/story-5.webp";
import s6 from "@/assets/stories/story-6.webp";
import s7 from "@/assets/stories/story-7.webp";
import s8 from "@/assets/stories/story-8.webp";

import teeNavy from "@/assets/download_11.png.asset.json";
import teePurple from "@/assets/download_4_1.png.asset.json";
import teeSand from "@/assets/download_3_1.png.asset.json";
import teeMaroon from "@/assets/download_2_1.png.asset.json";
import teeWhite from "@/assets/download_1_1.png.asset.json";
import logoDomination from "@/assets/Artboard_2_1.png.asset.json";
import logoGrind from "@/assets/Artboard_2.png.asset.json";
import logoLead from "@/assets/Artboard_1_1.png.asset.json";

export const Route = createFileRoute("/")({
  component: Launcher,
});

const STORY_FORM = "https://tally.so/r/1AzeQW";
const SUPPORT = "https://hoopivate-shop.fourthwall.com/pages/support-the-vision";
const SHOP = "https://hoopivate-shop.fourthwall.com";
const AI_WAITLIST = "https://tally.so/r/jaXRAR";

const STORIES = [s1, s2, s3, s4, s5, s6, s7, s8];

const MERCH = [
  { tee: teeWhite.url, logo: null, name: "None Of This Was Luck" },
  { tee: teeNavy.url, logo: logoDomination.url, name: "The Domination Club" },
  { tee: teeMaroon.url, logo: logoLead.url, name: "Lead Or Bleed" },
  { tee: teePurple.url, logo: logoGrind.url, name: "Big Dreams, Heavy Nights" },
  { tee: teeSand.url, logo: null, name: "Currently Dominating" },
];

const NAV = [
  { label: "Tell Your Story", href: STORY_FORM },
  { label: "Shop", href: SHOP },
  { label: "Hoopivate AI Waitlist", href: AI_WAITLIST },
];

function Launcher() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className="void-root relative min-h-[100svh] w-full text-foreground">
      <VoidField />

      {/* NAV */}
      <div className="sticky top-0 z-40 px-4 pt-4">
        <div className="nav-glass mx-auto flex w-full max-w-[560px] items-center justify-between rounded-[22px] px-4 py-2.5">
          <span className="w-9" />
          <img
            src={logo}
            alt="Hoopivate"
            className="h-9 w-9 object-contain drop-shadow-[0_2px_14px_rgba(124,196,255,0.45)]"
          />
          <button
            type="button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-white/[0.06] text-white/90 transition-colors hover:bg-white/[0.14]"
          >
            {menuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>

        {menuOpen && (
          <div className="nav-glass absolute inset-x-4 z-40 mx-auto mt-2 max-w-[560px] overflow-hidden rounded-[22px] p-2 sm:left-1/2 sm:w-full sm:-translate-x-1/2">
            {NAV.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMenuOpen(false)}
                className="flex items-center justify-between rounded-2xl px-3 py-2.5 font-display text-sm tracking-tight text-white/85 transition-colors hover:bg-white/10"
              >
                {item.label}
                <ArrowUpRight className="h-3.5 w-3.5 text-white/50" />
              </a>
            ))}
            <a
              href={SUPPORT}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMenuOpen(false)}
              className="ember-btn mt-1 flex items-center justify-center gap-2 rounded-2xl px-3 py-2.5 font-display text-sm tracking-tight"
            >
              Support the Vision
              <Heart className="h-3.5 w-3.5" />
            </a>
          </div>
        )}
      </div>

      {/* HERO */}
      <Section className="px-6 pb-10 pt-16 text-center sm:pt-24">
        <h1 className="chrome-text text-balance font-display text-[2.6rem] font-semibold leading-[0.95] tracking-tight sm:text-6xl">
          Tell Your Story
        </h1>
        <p className="mx-auto mt-6 max-w-[34rem] text-sm leading-relaxed text-white/70 sm:text-base">
          The highest human act is to inspire. Resonate more with your audience and let
          everyone know who you really are behind the jersey, while inspiring the younger
          generation.
        </p>
      </Section>

      {/* STORY MARQUEE */}
      <Section className="py-6">
        <Marquee items={STORIES} />
      </Section>

      <Section className="px-6 pb-24 pt-10 text-center">
        <a
          href={STORY_FORM}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 font-display text-sm font-semibold tracking-tight text-black shadow-[0_0_50px_-8px_rgba(255,255,255,0.55)] transition-transform hover:scale-[1.03]"
        >
          Tell Your Story
          <ArrowUpRight className="h-4 w-4" />
        </a>
      </Section>

      {/* WHAT HOOPIVATE DOES */}
      <Section className="px-5 pb-24">
        <div className="ember-card mx-auto w-full max-w-[560px] rounded-[28px] px-6 py-10 text-center sm:px-10">
          <h2 className="font-display text-2xl font-semibold tracking-tight sm:text-3xl">
            What Hoopivate Does?
          </h2>
          <p className="mx-auto mt-3 max-w-[30rem] text-sm leading-relaxed text-white/70">
            Support the vision by donating any amount you feel comfortable with.
          </p>
          <a
            href={SUPPORT}
            target="_blank"
            rel="noopener noreferrer"
            className="ember-btn mt-7 inline-flex items-center gap-2 rounded-full px-6 py-3 font-display text-sm font-semibold tracking-tight"
          >
            Donate Now
            <Heart className="h-4 w-4" />
          </a>
        </div>
      </Section>

      {/* VAULT */}
      <Section className="pb-8">
        <div className="px-6 text-center">
          <h2 className="font-display text-2xl font-semibold tracking-tight sm:text-3xl">
            Vault
          </h2>
          <p className="mx-auto mt-3 max-w-[26rem] text-sm text-white/65">
            Shop the latest Hoopivate drops.
          </p>
        </div>
        <div className="mt-8">
          <MerchRail />
        </div>
        <div className="mt-10 px-6 text-center">
          <a
            href={SHOP}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/[0.07] px-6 py-3 font-display text-sm font-semibold tracking-tight text-white/90 backdrop-blur-md transition-colors hover:border-white/40 hover:bg-white/[0.14]"
          >
            Shop
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
      </Section>

      <footer className="relative z-10 px-6 pb-14 pt-16 text-center">
        <p className="mx-auto max-w-[30rem] font-mono text-[10px] uppercase leading-relaxed tracking-[0.22em] text-white/45">
          Established 2023 — Hoopivate aims to inspire the basketball community all over.
        </p>
      </footer>
    </main>
  );
}

/* Scroll-revealed section — each one lands like unlocked territory */
function Section({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLElement | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) setInView(true);
      },
      { threshold: 0.12, rootMargin: "0px 0px -6% 0px" },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      className={`territory relative z-10 ${inView ? "is-in" : ""} ${className}`}
    >
      {children}
    </section>
  );
}

/* Auto-drifting rail that stays swipeable — touch takes over, drift resumes */
function useDriftRail(speed = 0.35) {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let raf = 0;
    let paused = false;
    let resume: ReturnType<typeof setTimeout>;

    const hold = () => {
      paused = true;
      clearTimeout(resume);
      resume = setTimeout(() => (paused = false), 1600);
    };

    const tick = () => {
      const half = el.scrollWidth / 2;
      if (!paused) el.scrollLeft += speed;
      if (el.scrollLeft >= half) el.scrollLeft -= half;
      else if (el.scrollLeft <= 0) el.scrollLeft += half;
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    el.addEventListener("touchstart", hold, { passive: true });
    el.addEventListener("touchmove", hold, { passive: true });
    el.addEventListener("wheel", hold, { passive: true });
    el.addEventListener("pointerdown", hold);
    el.addEventListener("mouseenter", hold);

    return () => {
      cancelAnimationFrame(raf);
      clearTimeout(resume);
      el.removeEventListener("touchstart", hold);
      el.removeEventListener("touchmove", hold);
      el.removeEventListener("wheel", hold);
      el.removeEventListener("pointerdown", hold);
      el.removeEventListener("mouseenter", hold);
    };
  }, [speed]);

  return ref;
}

function Marquee({ items = [] }: { items?: string[] }) {
  const railRef = useDriftRail(0.4);
  const doubled = [...items, ...items];

  return (
    <div className="marquee-mask relative w-full">
      <div ref={railRef} className="rail-wrap flex">
        <div className="flex w-max">
          {doubled.map((src, i) => (
            <img
              key={i}
              src={src}
              alt=""
              aria-hidden
              draggable={false}
              loading="lazy"
              className="story-tile mr-4 h-[300px] w-[232px] shrink-0 select-none rounded-[20px] object-cover sm:h-[360px] sm:w-[278px]"
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function MerchRail() {
  const railRef = useDriftRail(0.28);
  const doubled = [...MERCH, ...MERCH];

  return (
    <div className="marquee-mask relative w-full">
      <div ref={railRef} className="rail-wrap flex">
        <div className="flex w-max">
          {doubled.map((item, i) => (
            <div
              key={i}
              className="merch-tile relative mr-4 h-[240px] w-[190px] shrink-0 overflow-hidden rounded-[20px] sm:h-[280px] sm:w-[220px]"
            >
              <img
                src={item.tee}
                alt={item.name}
                draggable={false}
                loading="lazy"
                className="h-full w-full select-none object-contain p-3"
              />
              {item.logo && (
                <div className="merch-chip absolute bottom-3 left-3 flex h-11 w-11 items-center justify-center rounded-xl p-1.5">
                  <img
                    src={item.logo}
                    alt=""
                    aria-hidden
                    draggable={false}
                    className="h-full w-full select-none object-contain"
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* Space void: deep field, drifting nebula glow, starlight */
function VoidField() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-0">
      <div className="absolute inset-0 bg-[#010104]" />
      <div className="nebula nebula-a" />
      <div className="nebula nebula-b" />
      <div className="starfield absolute inset-0" />
      <div className="starfield starfield-far absolute inset-0" />
      <div className="grain absolute inset-0" />
    </div>
  );
}
