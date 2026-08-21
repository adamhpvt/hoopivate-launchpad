import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";

const VAULT_SHOP_URL = "https://hoopivate-shop.fourthwall.com";

export const Route = createFileRoute("/vault")({
  component: VaultRedirect,
});

function VaultRedirect() {
  useEffect(() => {
    window.location.href = VAULT_SHOP_URL;
  }, []);

  return (
    <main className="flex min-h-screen items-center justify-center bg-black px-6 text-center">
      <p className="font-mono text-xs uppercase tracking-[0.2em] text-white/60">
        Opening the vault…
      </p>
    </main>
  );
}
