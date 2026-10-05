"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useAnimationControls, useReducedMotion } from "framer-motion";
import PixelArt from "./PixelArt";
import { avatarBlink, avatarIdle, AVATAR_WIDTH } from "./avatar";

type Props = {
  /** Tamanho em px de cada pixel do sprite. */
  scale?: number;
  onJump?: () => void;
  className?: string;
};

// Avatar do Arthur: respira, pisca, vira para o lado do cursor e pula no clique.
export default function PixelAvatar({ scale = 10, onJump, className = "" }: Props) {
  const ref = useRef<HTMLButtonElement>(null);
  const [blinking, setBlinking] = useState(false);
  const [facingLeft, setFacingLeft] = useState(false);
  const jump = useAnimationControls();
  const shadow = useAnimationControls();
  const reduced = useReducedMotion();

  // Piscadas em intervalos irregulares
  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;
    const schedule = () => {
      timer = setTimeout(() => {
        setBlinking(true);
        timer = setTimeout(() => {
          setBlinking(false);
          schedule();
        }, 140);
      }, 2200 + Math.random() * 2800);
    };
    schedule();
    return () => clearTimeout(timer);
  }, []);

  // Olha para o lado onde está o cursor
  useEffect(() => {
    const onMove = (e: PointerEvent) => {
      const el = ref.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      setFacingLeft(e.clientX < rect.left + rect.width / 2);
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => window.removeEventListener("pointermove", onMove);
  }, []);

  function handleClick() {
    onJump?.();
    if (reduced) return;
    const height = scale * 7;
    jump.start({
      y: [0, -height, 0, 0],
      scaleX: [1, 0.92, 1.12, 1],
      scaleY: [1, 1.1, 0.86, 1],
      transition: { duration: 0.55, times: [0, 0.45, 0.85, 1], ease: ["easeOut", "easeIn", "easeOut"] },
    });
    shadow.start({
      scaleX: [1, 0.55, 1.1, 1],
      opacity: [0.35, 0.15, 0.4, 0.35],
      transition: { duration: 0.55, times: [0, 0.45, 0.85, 1] },
    });
  }

  return (
    <button
      ref={ref}
      type="button"
      onClick={handleClick}
      aria-label="Avatar em pixel art do Arthur. Clique para ele pular."
      className={`group relative flex flex-col items-center cursor-pointer select-none ${className}`}
    >
      <motion.div animate={jump} style={{ originY: 1 }}>
        <div
          style={{
            // Respira 1 pixel do sprite, em degrau. Sem depender de "reduced" aqui: o servidor
            // não sabe a preferência do usuário; a regra global de prefers-reduced-motion para a animação.
            ["--bob" as string]: `-${scale}px`,
            animationName: "bob",
            animationDuration: "1.4s",
            animationTimingFunction: "steps(1)",
            animationIterationCount: "infinite",
          }}
        >
          <PixelArt
            map={blinking ? avatarBlink : avatarIdle}
            scale={scale}
            style={{ transform: facingLeft ? "scaleX(-1)" : undefined }}
          />
        </div>
      </motion.div>
      {/* Sombra no chão */}
      <motion.span
        animate={shadow}
        initial={{ opacity: 0.35 }}
        className="block bg-black"
        style={{ width: AVATAR_WIDTH * scale * 0.8, height: scale, marginTop: -scale / 2 }}
      />
    </button>
  );
}
