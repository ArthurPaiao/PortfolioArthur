"use client";

import type { MouseEvent, ReactNode } from "react";
import { motion } from "framer-motion";
import { TrendingUp } from "lucide-react";

// Adaptado do "Bento Grid" de kokonutd no 21st.dev.
// Mudanças: painéis em pixel art no lugar dos cantos arredondados, spotlight que
// segue o cursor, área de prévia, linha de resultado, links de ação e entrada no scroll.

export interface BentoLink {
  label: string;
  href: string;
  icon: ReactNode;
}

export interface BentoItem {
  title: string;
  description: string;
  icon: ReactNode;
  iconClassName?: string;
  status?: string;
  tags?: string[];
  meta?: string;
  result?: string;
  /** Renderizada no topo do card (ou ao lado, nos cards largos em telas grandes). */
  preview?: ReactNode;
  links?: BentoLink[];
  colSpan?: 1 | 2;
  hasPersistentHover?: boolean;
}

function trackSpotlight(e: MouseEvent<HTMLElement>) {
  const rect = e.currentTarget.getBoundingClientRect();
  e.currentTarget.style.setProperty("--x", `${e.clientX - rect.left}px`);
  e.currentTarget.style.setProperty("--y", `${e.clientY - rect.top}px`);
}

export function BentoCard({ item, index }: { item: BentoItem; index: number }) {
  const persistent = item.hasPersistentHover;
  const wide = item.colSpan === 2;

  return (
    <motion.article
      onMouseMove={trackSpotlight}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10% 0px" }}
      transition={{ duration: 0.5, delay: (index % 3) * 0.08, ease: "easeOut" }}
      className={`pixel-box pixel-card group relative flex flex-col gap-6 p-5 ${
        wide ? "md:col-span-2 lg:flex-row lg:items-stretch" : ""
      }`}
      style={persistent ? { ["--pb" as string]: "var(--accent)" } : undefined}
    >
      {/* Spotlight que segue o cursor */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          backgroundImage: "radial-gradient(380px circle at var(--x, 50%) var(--y, 0%), var(--glow), transparent 70%)",
        }}
      />
      {/* Textura de pontos do original, agora em grade de pixel */}
      <div
        aria-hidden
        className={`pointer-events-none absolute inset-0 transition-opacity duration-300 ${
          persistent ? "opacity-100" : "opacity-0 group-hover:opacity-100"
        }`}
        style={{
          backgroundImage:
            "linear-gradient(color-mix(in oklab, var(--line) 40%, transparent) 2px, transparent 2px), linear-gradient(90deg, color-mix(in oklab, var(--line) 40%, transparent) 2px, transparent 2px)",
          backgroundSize: "12px 12px",
          maskImage: "linear-gradient(to bottom, black, transparent 60%)",
        }}
      />

      {item.preview && (
        <div className={`relative shrink-0 ${wide ? "h-44 lg:h-auto lg:w-[44%] lg:order-2" : "h-44"}`}>
          {item.preview}
        </div>
      )}

      <div className="relative flex flex-col flex-1 min-w-0 px-1 pb-1">
        <div className="flex items-center justify-between gap-3 mb-4">
          <div className="flex items-center gap-3">
            <div
              className={`w-10 h-10 flex items-center justify-center transition-transform duration-150 group-hover:-translate-y-0.5 ${
                item.iconClassName ?? "bg-surface-2 text-fg"
              }`}
            >
              {item.icon}
            </div>
            {item.meta && <span className="font-pixel text-xs uppercase tracking-widest text-subtle">{item.meta}</span>}
          </div>
          {item.status && (
            <span className="inline-flex items-center gap-1.5 font-pixel text-[11px] uppercase px-2 py-1 bg-surface-2 text-muted">
              <span className="w-2 h-2 bg-gold animate-twinkle" />
              {item.status}
            </span>
          )}
        </div>

        <h3 className="font-pixel text-fg text-xl leading-snug">{item.title}</h3>
        <p className="mt-2 text-sm text-muted leading-relaxed flex-grow">{item.description}</p>

        {item.result && (
          <div className="mt-4 inline-flex items-center gap-2 font-pixel text-sm text-gold">
            <TrendingUp className="w-4 h-4 shrink-0" />
            <span>{item.result}</span>
          </div>
        )}

        {item.tags && (
          <div className="mt-4 flex flex-wrap gap-2.5">
            {item.tags.map((tag) => (
              <span key={tag} className="pixel-chip">
                {tag}
              </span>
            ))}
          </div>
        )}

        {item.links && item.links.length > 0 && (
          <div className="mt-6 flex flex-wrap gap-4">
            {item.links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="pixel-btn pixel-btn-ghost text-xs px-3 py-1.5"
              >
                {link.icon}
                {link.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </motion.article>
  );
}

export function BentoGrid({ items, children }: { items: BentoItem[]; children?: ReactNode }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
      {items.map((item, index) => (
        <BentoCard key={item.title} item={item} index={index} />
      ))}
      {children}
    </div>
  );
}
