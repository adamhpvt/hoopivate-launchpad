import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Heart, Menu, X } from "lucide-react";
import logo from "@/assets/hoopivate-logo.png";

import s1 from "@/assets/hoopivate-collab---1.webp.asset.json";
import s2 from "@/assets/hoopivate-collab---1-1.webp.asset.json";
import s3 from "@/assets/hoopivate-collab---1-2.webp.asset.json";
import s4 from "@/assets/hoopivate-collab---1-3.webp.asset.json";
import s5 from "@/assets/copy-of-the-spotlight---1.webp.asset.json";
import s6 from "@/assets/copy-of-the-spotlight---1-1.webp.asset.json";
import s7 from "@/assets/copy-of-the-spotlight---1-2.webp.asset.json";
import s8 from "@/assets/copy-of-the-spotlight---1-3.webp.asset.json";

export const Route = createFileRoute("/")({
  component: Launcher,
});

const STORY_FORM = "https://tally.so/r/1AzeQW";
const SUPPORT = "https://hoopivate-shop.fourthwall.com/pages/support-the-vision";
const SHOP = "https://hoopivate-shop.fourthwall.com";
const AI_WAITLIST = "https://tally.so/r/jaXRAR";

const STORIES = [s1.url, s2.url, s3.url, s4.url, s5.url, s6.url, s7.url, s8.url];

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
        <p className="mx-auto mt-5 max-w-[26rem] font-mono text-[11px] uppercase tracking-[0.28em] text-[color:var(--moon)]">
          The highest human act is to inspire
        </p>
        <p className="mx-auto mt-5 max-w-[34rem] text-sm leading-relaxed text-white/65 sm:text-base">
          Tell your story, resonate more with your audience, and help everyone know who
          you really are behind the jersey — while inspiring the younger generation.
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
            What Hoopivate Does
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
          <Marquee reverse placeholders />
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

      <footer className="relative z-10 pb-14 pt-16 text-center">
        <a
          href={SUPPORT}
          target="_blank"
          rel="noopener noreferrer"
          className="font-mono text-[10px] uppercase tracking-[0.24em] text-white/45 transition-colors hover:text-white/80"
        >
          Support the vision
        </a>
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

function Marquee({
  items,
  reverse = false,
  placeholders = false,
}: {
  items?: string[];
  reverse?: boolean;
  placeholders?: boolean;
}) {
  const list = placeholders ? Array.from({ length: 6 }, () => "") : (items ?? []);
  const doubled = [...list, ...list];

  return (
    <div className="marquee-mask relative w-full overflow-hidden">
      <div className={`marquee-track ${reverse ? "is-reverse" : ""} flex w-max`}>
        {doubled.map((src, i) =>
          placeholders ? (
            <div
              key={i}
              className="drop-tile mr-4 flex h-[240px] w-[190px] shrink-0 items-center justify-center rounded-[20px] sm:h-[280px] sm:w-[220px]"
            >
              <span className="font-mono text-[9px] uppercase tracking-[0.24em] text-white/40">
                Drop soon
              </span>
            </div>
          ) : (
            <img
              key={i}
              src={src}
              alt=""
              aria-hidden
              loading="lazy"
              className="story-tile mr-4 h-[300px] w-[232px] shrink-0 rounded-[20px] object-cover sm:h-[360px] sm:w-[278px]"
            />
          ),
        )}
      </div>
    </div>
  );
}

/* Space void: deep field, drifting nebula glow, starlight */
function VoidField() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-0">
      <div className="absolute inset-0 bg-[#03040a]" />
      <div className="nebula nebula-a" />
      <div className="nebula nebula-b" />
      <div className="starfield absolute inset-0" />
      <div className="starfield starfield-far absolute inset-0" />
      <div className="grain absolute inset-0" />
    </div>
  );
}
