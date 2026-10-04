"use client";

import { useLayoutEffect } from "react";
import { Moon, Sun } from "lucide-react";

function currentTheme() {
  return document.documentElement.getAttribute("data-theme") === "light" ? "light" : "dark";
}

export default function ThemeToggle({ className = "" }: { className?: string }) {
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
      aria-label="Alternar tema claro/escuro"
      title="Alternar tema"
      className={`relative w-9 h-9 inline-flex items-center justify-center rounded-full text-muted hover:text-fg hover:bg-surface-2 transition-colors ${className}`}
    >
      <Sun className="w-[18px] h-[18px] hidden dark:block" />
      <Moon className="w-[18px] h-[18px] block dark:hidden" />
    </button>
  );
}
