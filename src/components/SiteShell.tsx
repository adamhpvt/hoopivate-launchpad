import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { Starfield } from "./Starfield";

export function SiteShell({ children }: { children: ReactNode }) {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-black text-foreground">
      <Starfield />
      <div className="pointer-events-none fixed -top-40 left-1/2 z-0 h-[600px] w-[600px] -translate-x-1/2 rounded-full opacity-40 blur-3xl"
        style={{ background: "radial-gradient(circle, rgba(167,139,250,0.35), transparent 60%)" }}
      />
      <Nav />
      <main className="relative z-10">{children}</main>
      <Footer />
    </div>
  );
}

function Nav() {
  return (
    <header className="relative z-20 mx-auto flex w-full max-w-6xl items-center justify-between px-5 py-5 sm:px-8 sm:py-7">
      <Link to="/" className="font-display text-2xl tracking-tight">
        Hoopivate<span className="accent-violet">.</span>
      </Link>
      <nav className="flex items-center gap-5 text-sm text-muted-foreground sm:gap-7">
        <Link to="/studio" className="transition hover:text-foreground" activeProps={{ className: "text-foreground" }}>
          Studio
        </Link>
        <Link to="/vault" className="transition hover:text-foreground" activeProps={{ className: "text-foreground" }}>
          Vault
        </Link>
        <a
          href="https://instagram.com/hoopivate"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden transition hover:text-foreground sm:inline"
        >
          Instagram
        </a>
      </nav>
    </header>
  );
}

function Footer() {
  return (
    <footer className="relative z-10 mt-32 border-t hairline">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-start justify-between gap-6 px-5 py-12 sm:flex-row sm:items-center sm:px-8">
        <div>
          <div className="font-display text-2xl">Hoopivate<span className="accent-violet">.</span></div>
          <p className="mt-1 text-sm text-muted-foreground">Storytelling for the next generation of athletes.</p>
        </div>
        <div className="flex items-center gap-5 text-sm text-muted-foreground">
          <a href="https://instagram.com/hoopivate" target="_blank" rel="noopener noreferrer" className="hover:text-foreground">Instagram</a>
          <Link to="/studio" className="hover:text-foreground">Studio</Link>
          <Link to="/vault" className="hover:text-foreground">Vault</Link>
        </div>
      </div>
      <div className="mx-auto max-w-6xl px-5 pb-8 text-xs text-muted-foreground sm:px-8">
        © {new Date().getFullYear()} Hoopivate. All rights reserved.
      </div>
    </footer>
  );
}
