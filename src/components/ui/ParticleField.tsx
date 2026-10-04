"use client";

import { useEffect, useMemo, useRef } from "react";

// Adaptado do "Animated Hero" (ParticleHero) de ravikatiyar162 no 21st.dev.
// Mudanças: cores vêm do tema (--accent), sem re-render do React por frame
// (as transforms são aplicadas direto no DOM), sem setTimeout por partícula,
// pausa fora da tela e respeita prefers-reduced-motion.

type Props = {
  rows?: number;
  /** Multiplica a amplitude do movimento (1 = original). */
  range?: number;
  className?: string;
};

const SPACING_REM = 1.8;
const MAX_OFFSET = 260;

export default function ParticleField({ rows = 15, range = 1, className = "" }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const particlesRef = useRef<(HTMLSpanElement | null)[]>([]);

  const particles = useMemo(() => {
    const center = Math.floor(rows / 2);
    return Array.from({ length: rows * rows }, (_, i) => {
      const row = Math.floor(i / rows);
      const col = i % rows;
      const d = Math.hypot(row - center, col - center);
      return {
        row,
        col,
        scale: Math.max(0.1, 1.2 - d * 0.12),
        opacity: Math.max(0.05, 1 - d * 0.1),
        glow: Math.max(0.5, 6 - d * 0.5) * 0.2,
        dampening: Math.max(0.3, 1 - d * 0.08),
        duration: 120 + d * 20,
        z: Math.round(rows * rows - d * 5),
      };
    });
  }, [rows]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let frame = 0;
    let visible = true;
    let lastPaint = 0;
    let mode: "auto" | "pointer" = "auto";
    let start = performance.now();
    let lastMove = 0;
    const target = { x: 0, y: 0 };
    const cursor = { x: 0, y: 0 };

    const clamp = (v: number) => Math.max(-MAX_OFFSET, Math.min(MAX_OFFSET, v));

    const apply = () => {
      particlesRef.current.forEach((el, i) => {
        if (!el) return;
        const p = particles[i];
        el.style.transform = `translate(${cursor.x * p.dampening}px, ${cursor.y * p.dampening}px) scale(${p.scale})`;
      });
    };

    const tick = (now: number) => {
      frame = requestAnimationFrame(tick);
      if (!visible) return;
      // ~30fps basta: as transições CSS de cada partícula suavizam o resto
      if (now - lastPaint < 33) return;
      lastPaint = now;

      const t = (now - start) / 1000;
      if (mode === "pointer" && now - lastMove > 4000) {
        mode = "auto";
        start = now;
      }

      if (mode === "auto") {
        cursor.x = (Math.sin(t * 0.3) * 200 + Math.sin(t * 0.17) * 100) * range;
        cursor.y = (Math.cos(t * 0.2) * 150 + Math.cos(t * 0.23) * 80) * range;
      } else {
        // Parado há um tempo: leve "respiração" em volta do último ponto
        const idle = Math.min(Math.max(now - lastMove - 200, 0) / 1000, 1);
        cursor.x = target.x + Math.sin(t * 1.5) * 20 * idle;
        cursor.y = target.y + Math.cos(t * 1.2) * 16 * idle;
      }
      apply();
    };

    const onPointerMove = (e: PointerEvent) => {
      if (!visible) return;
      const rect = container.getBoundingClientRect();
      target.x = clamp((e.clientX - (rect.left + rect.width / 2)) * 0.8);
      target.y = clamp((e.clientY - (rect.top + rect.height / 2)) * 0.8);
      mode = "pointer";
      lastMove = performance.now();
    };

    const observer = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
    });
    observer.observe(container);
    window.addEventListener("pointermove", onPointerMove, { passive: true });
    frame = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
      window.removeEventListener("pointermove", onPointerMove);
    };
  }, [particles, range]);

  const size = `${rows * SPACING_REM}rem`;

  return (
    <div
      ref={containerRef}
      aria-hidden
      className={`relative pointer-events-none ${className}`}
      style={{ width: size, height: size }}
    >
      {particles.map((p, i) => (
        <span
          key={i}
          ref={(el) => {
            particlesRef.current[i] = el;
          }}
          className="absolute rounded-full will-change-transform bg-accent"
          style={{
            width: "0.4rem",
            height: "0.4rem",
            left: `${p.col * SPACING_REM}rem`,
            top: `${p.row * SPACING_REM}rem`,
            opacity: p.opacity,
            transform: `scale(${p.scale})`,
            boxShadow: `0 0 ${p.glow}rem 0 var(--accent)`,
            zIndex: p.z,
            transition: `transform ${p.duration}ms cubic-bezier(0.25, 0.46, 0.45, 0.94)`,
          }}
        />
      ))}
    </div>
  );
}
