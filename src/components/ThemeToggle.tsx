"use client";

import { useLayoutEffect } from "react";
import type { Locale } from "@/i18n/locales";
import { getDictionary } from "@/i18n/ui";
import PixelArt from "./pixel/PixelArt";
import { moon, sun } from "./pixel/icons";

function currentTheme() {
  return document.documentElement.getAttribute("data-theme") === "light" ? "light" : "dark";
}

export default function ThemeToggle({ locale, className = "" }: { locale: Locale; className?: string }) {
  const t = getDictionary(locale).theme;

  // No dev, o Strict Mode remonta e o React limpa o atributo que o script inline aplicou.
  // Em produção isso é um no-op.
  useLayoutEffect(() => {
    try {
      const saved = localStorage.getItem("theme");
      if (saved === "light" || saved === "dark") {
        document.documentElement.setAttribute("data-theme", saved);
      } else {
        const system = matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark";
        document.documentElement.setAttribute("data-theme", system);
      }
    } catch {}
  }, []);

  function toggle() {
    const next = currentTheme() === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", next);
    try {
      localStorage.setItem("theme", next);
    } catch {}
  }

  // Os dois ícones ficam no DOM e o CSS decide qual aparece, então o HTML do servidor
  // sempre bate com o do cliente, seja qual for o tema.
  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={t.label}
      title={t.title}
      className={`relative w-10 h-10 inline-flex items-center justify-center hover:bg-surface-2 transition-colors ${className}`}
    >
      {/* Noite ativa mostra o sol (ir para o dia) e vice-versa */}
      <PixelArt map={sun} scale={2} className="hidden dark:block" />
      <PixelArt map={{ ...moon, palette: { M: "#5b4b94" } }} scale={2} className="block dark:hidden" />
    </button>
  );
}
