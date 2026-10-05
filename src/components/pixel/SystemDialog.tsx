"use client";

import { useEffect, useState } from "react";

type Props = {
  title: string;
  text: string;
  hint?: string;
  className?: string;
};

// Janela de diálogo no estilo "notificação do sistema" de RPG, com texto
// sendo digitado. Use key={text} no pai para reiniciar a digitação a cada fala.
export default function SystemDialog({ title, text, hint, className = "" }: Props) {
  // Começa sempre em 0 para o HTML do servidor bater com o do cliente;
  // a preferência por menos movimento só é lida depois de montar.
  const [shown, setShown] = useState(0);

  useEffect(() => {
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) {
      const id = setTimeout(() => setShown(text.length), 0);
      return () => clearTimeout(id);
    }
    const id = setInterval(() => {
      setShown((n) => {
        if (n >= text.length) {
          clearInterval(id);
          return n;
        }
        return n + 1;
      });
    }, 28);
    return () => clearInterval(id);
  }, [text]);

  const done = shown >= text.length;

  return (
    <div
      className={`pixel-box relative px-5 py-4 ${className}`}
      style={{ ["--pb" as string]: "var(--accent-2)" }}
      aria-live="polite"
    >
      <div className="font-pixel text-xs uppercase tracking-[0.2em] text-accent-2 mb-2">[ {title} ]</div>
      <p className="font-pixel text-base sm:text-lg leading-snug text-fg min-h-[3.2em]">
        {/* Leitores de tela recebem a fala inteira de uma vez */}
        <span className="sr-only">{text}</span>
        <span aria-hidden>
          {text.slice(0, shown)}
          {!done && <span className="inline-block w-2 h-4 -mb-0.5 ml-0.5 bg-fg animate-blink-caret" />}
        </span>
      </p>
      {hint && done && (
        <div className="mt-2 font-pixel text-[11px] uppercase tracking-widest text-subtle animate-pulse">{hint}</div>
      )}
    </div>
  );
}
