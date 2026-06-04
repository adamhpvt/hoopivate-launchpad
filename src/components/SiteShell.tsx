import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { Starfield } from "./Starfield";
import logo from "@/assets/hoopivate-logo.png";

export function SiteShell({ children }: { children: ReactNode }) {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-black text-foreground">
      <Starfield />
      <Nav />
      <main className="relative z-10">{children}</main>
      <Footer />
    </div>
  );
}

function Nav() {
  return (
    <header className="relative z-20 mx-auto flex w-full max-w-6xl items-center justify-between px-5 py-5 sm:px-8 sm:py-7">
      <Link to="/" className="flex items-center gap-2.5">
        <img src={logo} alt="Hoopivate" className="h-8 w-8 rounded-full object-cover" />
        <span className="font-display text-2xl tracking-tight">Hoopivate</span>
      </Link>
      <nav className="flex items-center gap-4 text-sm text-muted-foreground sm:gap-6">
        <Link to="/" className="transition hover:text-foreground" activeProps={{ className: "text-foreground" }} activeOptions={{ exact: true }}>
          Athletes
        </Link>
        <Link to="/coaches" className="transition hover:text-foreground" activeProps={{ className: "text-foreground" }}>
          Coaches
        </Link>
        <Link to="/b2b" className="transition hover:text-foreground" activeProps={{ className: "text-foreground" }}>
          B2B
        </Link>
        <Link to="/studio" className="transition hover:text-foreground" activeProps={{ className: "text-foreground" }}>
          Studio
        </Link>
        <Link to="/vault" className="transition hover:text-foreground" activeProps={{ className: "text-foreground" }}>
          Vault
        </Link>
      </nav>
    </header>
  );
}

function Footer() {
  return (
    <footer className="relative z-10 mt-32 border-t hairline">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-start justify-between gap-6 px-5 py-12 sm:flex-row sm:items-center sm:px-8">
        <div className="flex items-center gap-3">
          <img src={logo} alt="Hoopivate" className="h-9 w-9 rounded-full object-cover" />
          <div>
            <div className="font-display text-2xl">Hoopivate</div>
            <p className="mt-1 text-sm text-muted-foreground">Storytelling for the next generation of athletes.</p>
          </div>
        </div>
        <div className="flex flex-wrap items-center gap-5 text-sm text-muted-foreground">
          <a href="https://instagram.com/hoopivate" target="_blank" rel="noopener noreferrer" className="hover:text-foreground">@hoopivate</a>
          <a href="https://instagram.com/hoopivatestudio" target="_blank" rel="noopener noreferrer" className="hover:text-foreground">@hoopivatestudio</a>
          <a href="https://instagram.com/hoopivatevault" target="_blank" rel="noopener noreferrer" className="hover:text-foreground">@hoopivatevault</a>
        </div>
      </div>
      <div className="mx-auto max-w-6xl px-5 pb-8 text-xs text-muted-foreground sm:px-8">
        © {new Date().getFullYear()} Hoopivate. All rights reserved.
      </div>
    </footer>
  );
}
