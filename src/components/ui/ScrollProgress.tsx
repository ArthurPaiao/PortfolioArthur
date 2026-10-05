"use client";

import { motion, useScroll, useSpring } from "framer-motion";

// Barra de XP no topo: enche conforme a página é rolada, dividida em segmentos
export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 140, damping: 30, restDelta: 0.001 });

  return (
    <div aria-hidden className="fixed top-0 inset-x-0 h-1.5 z-[60]">
      <motion.div style={{ scaleX }} className="h-full origin-left bg-gold" />
      <div
        className="absolute inset-0"
        style={{ backgroundImage: "repeating-linear-gradient(to right, transparent 0 22px, var(--bg) 22px 26px)" }}
      />
    </div>
  );
}
