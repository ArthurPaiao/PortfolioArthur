"use client";

import type { MouseEvent, ReactNode } from "react";
import { motion } from "framer-motion";
import { TrendingUp } from "lucide-react";

// Adaptado do "Bento Grid" de kokonutd no 21st.dev.
// Mudanças: tokens de tema no lugar de cores fixas, spotlight que segue o cursor,
// área de prévia, linha de resultado, links de ação e entrada animada no scroll.

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
      transition={{ duration: 0.6, delay: (index % 3) * 0.08, ease: [0.21, 0.47, 0.32, 0.98] }}
      className={`group relative flex flex-col gap-6 p-5 rounded-2xl overflow-hidden border bg-surface transition-[border-color,box-shadow,translate] duration-300 hover:-translate-y-0.5 hover:border-line-strong hover:shadow-[0_8px_30px_var(--glow)] ${
        wide ? "md:col-span-2 lg:flex-row lg:items-stretch" : ""
      } ${persistent ? "border-line-strong shadow-[0_8px_30px_var(--glow)]" : "border-line"}`}
    >
      {/* Spotlight que segue o cursor */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background: "radial-gradient(380px circle at var(--x, 50%) var(--y, 0%), var(--glow), transparent 70%)",
        }}
      />
      {/* Textura de pontos do original */}
      <div
        aria-hidden
        className={`pointer-events-none absolute inset-0 transition-opacity duration-300 ${
          persistent ? "opacity-100" : "opacity-0 group-hover:opacity-100"
        }`}
        style={{
          backgroundImage: "radial-gradient(circle at center, var(--line) 1px, transparent 1px)",
          backgroundSize: "6px 6px",
          maskImage: "linear-gradient(to bottom, black, transparent 70%)",
        }}
      />

      {item.preview && (
        <div className={`relative shrink-0 ${wide ? "h-44 lg:h-auto lg:w-[44%] lg:order-2" : "h-44"}`}>
          {item.preview}
        </div>
      )}

      <div className="relative flex flex-col flex-1 min-w-0 px-1 pb-1">
        <div className="flex items-center justify-between gap-3 mb-4">
          <div
            className={`w-10 h-10 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-3 ${
              item.iconClassName ?? "bg-surface-2 text-fg"
            }`}
          >
            {item.icon}
          </div>
          {item.status && (
            <span className="inline-flex items-center gap-1.5 text-xs font-medium px-2.5 py-1 rounded-full bg-surface-2 border border-line text-muted">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse" />
              {item.status}
            </span>
          )}
        </div>

        <h3 className="font-semibold text-fg tracking-tight text-lg leading-snug">
          {item.title}
          {item.meta && <span className="ml-2 text-xs text-subtle font-normal">{item.meta}</span>}
        </h3>
        <p className="mt-2 text-sm text-muted leading-relaxed flex-grow">{item.description}</p>

        {item.result && (
          <div className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-accent">
            <TrendingUp className="w-4 h-4 shrink-0" />
            <span>{item.result}</span>
          </div>
        )}

        {item.tags && (
          <div className="mt-4 flex flex-wrap gap-1.5">
            {item.tags.map((tag) => (
              <span
                key={tag}
                className="font-mono text-[11px] px-2 py-1 rounded-md bg-surface-2 text-muted border border-line"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        {item.links && item.links.length > 0 && (
          <div className="mt-5 flex flex-wrap gap-2">
            {item.links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-line bg-bg text-xs font-medium text-fg hover:border-accent hover:text-accent transition-colors"
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
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {items.map((item, index) => (
        <BentoCard key={item.title} item={item} index={index} />
      ))}
      {children}
    </div>
  );
}
