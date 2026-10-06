"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import PixelArt, { type PixelMap } from "./PixelArt";
import { moon, sun } from "./icons";

// Cenário em pixel art do hero: céu em faixas, estrelas (noite) ou nuvens (dia),
// três camadas de montanha com parallax e o chão onde o avatar fica.
// Tudo é gerado de forma determinística para o HTML do servidor bater com o do cliente.

const W = 320;
const H = 120;

function ridge(seed: number, base: number, amp: number, freq: number) {
  const ys: number[] = [];
  for (let x = 0; x < W; x++) {
    const n =
      Math.abs(Math.sin(x * freq + seed)) * 1 +
      Math.sin(x * freq * 2.3 + seed * 1.7) * 0.35 +
      Math.sin(x * freq * 5.1 + seed * 0.3) * 0.12;
    ys.push(Math.round(base - n * amp));
  }
  return ys;
}

// Contorno em degraus: cada coluna é 1 unidade de largura
function ridgePath(ys: number[]) {
  let d = `M0 ${H}`;
  ys.forEach((y, x) => {
    d += `V${y}H${x + 1}`;
  });
  return `${d}V${H}Z`;
}

// Neve nos picos: 2 unidades abaixo do contorno, só onde a montanha passa da linha de neve
function snowPath(ys: number[], snowLine: number) {
  let d = "";
  ys.forEach((y, x) => {
    if (y < snowLine) d += `M${x} ${y}h1v${Math.min(3, snowLine - y)}h-1z`;
  });
  return d;
}

const far = ridge(1.3, 70, 46, 0.035);
const mid = ridge(4.1, 92, 38, 0.05);
const near = ridge(7.7, 112, 22, 0.08);

const layers = [
  { ys: far, fill: "var(--mtn-far)", snow: 42, speed: 0.12 },
  { ys: mid, fill: "var(--mtn-mid)", snow: 66, speed: 0.22 },
  { ys: near, fill: "var(--mtn-near)", snow: -1, speed: 0.34 },
];

// Estrelas em posições fixas (pseudoaleatórias com semente)
const stars = Array.from({ length: 46 }, (_, i) => {
  const r = (n: number) => {
    const v = Math.sin(i * 12.9898 + n * 78.233) * 43758.5453;
    return v - Math.floor(v);
  };
  // Arredondado: o navegador normaliza decimais longos no style e o React acusaria diferença na hidratação
  const round = (v: number) => Math.round(v * 100) / 100;
  return { left: round(r(1) * 100), top: round(r(2) * 55), size: r(3) > 0.82 ? 4 : 2, delay: round(r(4) * 2.4) };
});

const cloud: PixelMap = {
  rows: [
    "......WWWW..........",
    "....WWWWWWWW...WW...",
    "..WWWWWWWWWWWWWWWWW.",
    "WWWWWWWWWWWWWWWWWWWW",
    ".ssssssssssssssssss.",
  ],
  palette: { W: "#ffffff", s: "#d8e6fb" },
};

const clouds = [
  { top: "12%", scale: 6, duration: 90, delay: -20 },
  { top: "26%", scale: 4, duration: 120, delay: -75 },
  { top: "8%", scale: 3, duration: 150, delay: -110 },
];

// Chão: grama (dia) ou neve (noite) por cima, terra com pedrinhas embaixo
const GW = 160;
const tufts = Array.from({ length: GW }, (_, x) => (Math.sin(x * 1.7) + Math.sin(x * 0.6)) > 0.9);
const pebbles = Array.from({ length: 70 }, (_, i) => ({
  x: Math.floor(Math.abs(Math.sin(i * 7.1)) * GW),
  y: 6 + Math.floor(Math.abs(Math.sin(i * 3.3)) * 9),
  w: 1 + (i % 3 === 0 ? 1 : 0),
}));

export const GROUND_HEIGHT = 64;

export default function PixelScene() {
  const { scrollY } = useScroll();
  // Parallax ligado ao scroll não é uma animação, então o MotionConfig não o desliga sozinho
  const speed = useReducedMotion() ? 0 : 1;
  const y0 = useTransform(scrollY, (v) => v * layers[0].speed * speed);
  const y1 = useTransform(scrollY, (v) => v * layers[1].speed * speed);
  const y2 = useTransform(scrollY, (v) => v * layers[2].speed * speed);
  const ys = [y0, y1, y2];

  return (
    <div aria-hidden className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Céu em faixas duras, como um degradê de 6 cores */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `linear-gradient(to bottom,
            var(--sky-top) 0 16%,
            color-mix(in oklab, var(--sky-top) 80%, var(--sky-bottom)) 16% 32%,
            color-mix(in oklab, var(--sky-top) 60%, var(--sky-bottom)) 32% 46%,
            color-mix(in oklab, var(--sky-top) 40%, var(--sky-bottom)) 46% 60%,
            color-mix(in oklab, var(--sky-top) 20%, var(--sky-bottom)) 60% 74%,
            var(--sky-bottom) 74% 100%)`,
        }}
      />

      {/* Noite: estrelas e lua */}
      <div className="hidden dark:block">
        {stars.map((s, i) => (
          <span
            key={i}
            className="absolute animate-twinkle"
            style={{
              left: `${s.left}%`,
              top: `${s.top}%`,
              width: s.size,
              height: s.size,
              backgroundColor: "var(--star)",
              animationDelay: `${s.delay}s`,
            }}
          />
        ))}
        <PixelArt map={moon} scale={9} className="absolute top-[14%] right-[12%] opacity-90 max-sm:hidden" />
      </div>

      {/* Dia: sol e nuvens */}
      <div className="dark:hidden">
        <PixelArt map={sun} scale={9} className="absolute top-[12%] right-[14%] max-sm:hidden" />
        {clouds.map((c, i) => (
          <div
            key={i}
            className="absolute left-0"
            style={{
              top: c.top,
              animationName: "drift",
              animationDuration: `${c.duration}s`,
              animationTimingFunction: "linear",
              animationDelay: `${c.delay}s`,
              animationIterationCount: "infinite",
            }}
          >
            <PixelArt map={cloud} scale={c.scale} />
          </div>
        ))}
      </div>

      {/* Montanhas com parallax */}
      {layers.map((layer, i) => (
        <motion.svg
          key={i}
          style={{ y: ys[i], bottom: GROUND_HEIGHT - 4 }}
          viewBox={`0 0 ${W} ${H}`}
          preserveAspectRatio="xMidYMax slice"
          shapeRendering="crispEdges"
          className="absolute inset-x-0 w-full h-[46%] min-h-56"
        >
          <path d={ridgePath(layer.ys)} fill={layer.fill} />
          {layer.snow > 0 && <path d={snowPath(layer.ys, layer.snow)} fill="var(--snow)" opacity={0.85} />}
        </motion.svg>
      ))}

      {/* Chão */}
      <svg
        viewBox={`0 0 ${GW} 16`}
        preserveAspectRatio="xMidYMin slice"
        shapeRendering="crispEdges"
        className="absolute inset-x-0 bottom-0 w-full"
        style={{ height: GROUND_HEIGHT }}
      >
        <rect x="0" y="1" width={GW} height="15" fill="var(--ground)" />
        <rect x="0" y="1" width={GW} height="3" fill="var(--ground-top)" />
        <rect x="0" y="4" width={GW} height="1" fill="var(--ground-edge)" />
        {tufts.map((on, x) => (on ? <rect key={x} x={x} y="0" width="1" height="1" fill="var(--ground-top)" /> : null))}
        {pebbles.map((p, i) => (
          <rect key={i} x={p.x} y={p.y} width={p.w} height="1" fill="rgba(0,0,0,0.18)" />
        ))}
      </svg>
    </div>
  );
}
