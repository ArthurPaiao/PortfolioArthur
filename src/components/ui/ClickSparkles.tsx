"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

type Burst = { id: number; x: number; y: number };

const COLORS = ["var(--accent)", "var(--gold)", "var(--accent-2)"];
const PARTICLES = Array.from({ length: 8 }, (_, i) => {
  const angle = (i / 8) * Math.PI * 2;
  return { dx: Math.cos(angle) * 34, dy: Math.sin(angle) * 34, color: COLORS[i % COLORS.length] };
});

// Faíscas quadradas em pixel saindo do ponto do clique, como coletar um item
export default function ClickSparkles() {
  const [bursts, setBursts] = useState<Burst[]>([]);

  useEffect(() => {
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let next = 0;
    const onDown = (e: PointerEvent) => {
      const burst = { id: next++, x: e.clientX, y: e.clientY };
      setBursts((list) => [...list.slice(-6), burst]);
      setTimeout(() => setBursts((list) => list.filter((b) => b.id !== burst.id)), 600);
    };
    window.addEventListener("pointerdown", onDown, { passive: true });
    return () => window.removeEventListener("pointerdown", onDown);
  }, []);

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-[70]">
      {bursts.map((b) =>
        PARTICLES.map((p, i) => (
          <motion.span
            key={`${b.id}-${i}`}
            className="absolute w-1.5 h-1.5"
            style={{ left: b.x - 3, top: b.y - 3, backgroundColor: p.color }}
            initial={{ x: 0, y: 0, opacity: 1 }}
            animate={{ x: p.dx, y: p.dy, opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.2, 0.8, 0.4, 1] }}
          />
        ))
      )}
    </div>
  );
}
