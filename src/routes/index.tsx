import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { Starfield } from "@/components/Starfield";
import logo from "@/assets/hoopivate-logo.png";

export const Route = createFileRoute("/")({
  component: Launcher,
});

const LINKS = {
  studio: "https://hoopivatestudio.com",
  vault: "https://hoopivate-shop.fourthwall.com",
  collab: "https://tally.so/r/1AzeQW",
  coach: "https://tally.so/r/1ARkvM",
  athlete: "https://tally.so/r/jaXRAR",
  support: "https://hoopivate-shop.fourthwall.com/pages/support-the-vision",
  ig: "https://instagram.com/hoopivate",
};

const NAV = [
  { label: "Studio", href: LINKS.studio },
  { label: "Vault", href: LINKS.vault },
  { label: "Collab", href: LINKS.collab },
  { label: "What's Next", href: "#whats-next" },
];

function useStackDepth() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const items = Array.from(
      document.querySelectorAll<HTMLElement>(".stack-inner"),
    );
    let raf = 0;
    const update = () => {
      raf = 0;
      for (const el of items) {
        const rect = el.getBoundingClientRect();
        const stuckTop = parseFloat(getComputedStyle(el.parentElement!).top) || 0;
        // how far past the sticky point the card has been pushed/covered
        const covered = Math.min(1, Math.max(0, (stuckTop - rect.top + 220) / 420));
        const p = rect.top <= stuckTop + 1 ? covered : 0;
        el.style.transform = `scale(${1 - p * 0.06})`;
        el.style.opacity = `${1 - p * 0.45}`;
      }
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      if (raf) cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);
}

function Launcher() {
  useStackDepth();
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-black text-foreground">
      <Starfield />

      <header className="fixed inset-x-0 top-0 z-30 border-b border-white/5 bg-black/40 backdrop-blur-[2px]">
        <div className="mx-auto flex w-full max-w-5xl items-center justify-between px-5 py-3.5 sm:px-8">
          <a href="#top" className="flex items-center gap-2.5">
            <img
              src={logo}
              alt="Hoopivate"
              className="h-9 w-9 rounded-full object-cover ring-1 ring-white/15"
            />
            <span className="sr-only">Hoopivate</span>
          </a>
          <nav className="no-scrollbar flex items-center gap-4 overflow-x-auto whitespace-nowrap text-[11px] uppercase tracking-[0.18em] text-white/55 sm:gap-7 sm:text-xs">
            {NAV.map((n) => (
              <a
                key={n.label}
                href={n.href}
                {...(n.href.startsWith("#")
                  ? {}
                  : { target: "_blank", rel: "noopener noreferrer" })}
                className="shrink-0 transition-colors hover:text-[var(--moon)]"
              >
                {n.label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section
        id="top"
        className="relative z-10 flex min-h-[100svh] flex-col items-center justify-center px-6 text-center"
      >
        <p className="text-[10px] uppercase tracking-[0.42em] text-white/45 sm:text-xs">
          Dominating since forever
        </p>
        <h1 className="mt-6 font-display text-[clamp(2.75rem,11vw,6rem)] font-bold leading-[0.95] tracking-tight text-balance">
          A place for <span className="text-glow">Hoopers.</span>
        </h1>
        <p className="mt-5 max-w-sm text-sm text-white/60 sm:max-w-md sm:text-base">
          Your moodboard for the game — pick your lane.
        </p>
        <div className="scroll-hint mt-14 h-10 w-px bg-gradient-to-b from-white/40 to-transparent" />
      </section>

      {/* CARD STACK */}
      <section className="relative z-10 mx-auto w-full max-w-3xl px-5 pb-[35vh] sm:px-8">
        <StackCard
          index={0}
          title="Studio"
          line="Build your merch line — 100% of profits to you."
          href={LINKS.studio}
        />
        <StackCard
          index={1}
          title="Vault"
          line="Shop the latest Hoopivate drops."
          href={LINKS.vault}
        />
        <StackCard
          index={2}
          title="Collab"
          line="Team up with us on an edit — motivate the game."
          href={LINKS.collab}
        />
        <WhatsNextCard index={3} />
      </section>

      <footer className="relative z-10 border-t border-white/5">
        <div className="mx-auto flex w-full max-w-3xl flex-wrap items-center justify-between gap-3 px-5 py-8 text-xs text-white/35 sm:px-8">
          <a
            href={LINKS.support}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-[var(--moon)]"
          >
            Support the vision ♡
          </a>
          <a
            href={LINKS.ig}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-[var(--moon)]"
          >
            @hoopivate
          </a>
        </div>
      </footer>
    </div>
  );
}

function stackStyle(index: number) {
  return {
    top: `calc(5.5rem + ${index * 14}px)`,
    zIndex: 10 + index,
  } as const;
}

function StackCard({
  index,
  title,
  line,
  href,
}: {
  index: number;
  title: string;
  line: string;
  href: string;
}) {
  return (
    <div className="stack-item sticky mb-6" style={stackStyle(index)}>
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="stack-inner group block origin-top rounded-3xl will-change-transform border border-white/12 bg-[#08080c] p-7 transition-[border-color,box-shadow] duration-300 hover:border-[var(--moon)]/50 hover:shadow-[0_0_60px_-18px_var(--moon)] sm:p-10"
      >
        <CardBody title={title} line={line} />
      </a>
    </div>
  );
}

function WhatsNextCard({ index }: { index: number }) {
  const [open, setOpen] = useState(false);
  return (
    <div id="whats-next" className="stack-item sticky mb-6 scroll-mt-28" style={stackStyle(index)}>
      <div className="stack-inner origin-top rounded-3xl border border-white/12 will-change-transform bg-[#08080c] p-7 transition-[border-color,box-shadow] duration-300 hover:border-[var(--moon)]/50 hover:shadow-[0_0_60px_-18px_var(--moon)] sm:p-10">
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          className="group block w-full text-left"
        >
          <CardBody
            title="What's Next"
            line="Early access to something new. Coach or athlete?"
            rotate={open}
          />
        </button>
        <div
          className={`grid transition-[grid-template-rows,opacity] duration-300 ease-out ${
            open ? "mt-6 grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
          }`}
        >
          <div className="overflow-hidden">
            <div className="flex flex-col gap-3 sm:flex-row">
              <ChoiceLink href={LINKS.coach} label="I'm a Coach" />
              <ChoiceLink href={LINKS.athlete} label="I'm an Athlete" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ChoiceLink({ href, label }: { href: string; label: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex flex-1 items-center justify-between gap-3 rounded-2xl border border-white/12 bg-white/[0.03] px-5 py-4 text-sm font-medium text-white transition-colors hover:border-[var(--moon)]/60 hover:text-[var(--moon)]"
    >
      {label}
      <ArrowUpRight className="h-4 w-4" />
    </a>
  );
}

function CardBody({
  title,
  line,
  rotate,
}: {
  title: string;
  line: string;
  rotate?: boolean;
}) {
  return (
    <div className="flex items-start justify-between gap-6">
      <div>
        <h2 className="font-display text-3xl font-bold tracking-tight sm:text-5xl">
          {title}
        </h2>
        <p className="mt-3 max-w-md text-sm text-white/55 sm:text-base">{line}</p>
      </div>
      <span className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/15 text-white/70 transition-colors group-hover:border-[var(--moon)]/60 group-hover:text-[var(--moon)]">
        <ArrowUpRight
          className={`h-5 w-5 transition-transform duration-300 ${rotate ? "rotate-90" : ""}`}
        />
      </span>
    </div>
  );
}
