import type { PixelMap } from "./PixelArt";

// Sprite 16x29 do Arthur, desenhado a partir de foto: cabelo escuro cacheado
// (volume em cima, laterais curtas), sobrancelhas grossas, bigode leve,
// camiseta clara com bolso no peito e calça bege.
const palette = {
  K: "#1b1020", // contorno
  H: "#2b1b18", // cabelo
  h: "#4a3029", // brilho do cabelo
  S: "#f1c3a0", // pele
  s: "#d79a78", // sombra da pele
  B: "#2b1b18", // sobrancelhas
  E: "#1b1020", // olhos
  M: "#a06c56", // bigode leve
  m: "#c27a64", // boca
  T: "#f3eee4", // camiseta
  t: "#cfc5b4", // sombra da camiseta
  P: "#e1d9c8", // bolso
  L: "#d9c6a3", // calça
  l: "#b8a37f", // sombra da calça
  O: "#3b2a33", // tênis
} as const;

const idle = [
  "...KK.KKK.KK....",
  "..KhHKHhHKHhK...",
  ".KHHhHHHHhHHHK..",
  ".KHhHHhHHHHhHHK.",
  "KHHHHHHhHHHHHhHK",
  "KHhHHHHHHHhHHHHK",
  ".KHHShHHSShSHHK.",
  ".KHSSSSSSSSSSHK.",
  ".KHSBBBSSBBBSHK.",
  "KsHSSSSSSSSSSHsK",
  "KsSSSESSSSESSSsK",
  ".KSSSESSsSESSSK.",
  ".KsSSSMMMMSSSsK.",
  "..KsSSSmmSSSsK..",
  "...KssSSSSssK...",
  "....KKsSSsKK....",
  "..KKTTtSStTTKK..",
  ".KTTTTTttTTTTTK.",
  "KTTTTTTTTPPPTTTK",
  "KSKTTTTTTPPPTKSK",
  "KSKTTTTTTTTTTKSK",
  "KSKtTTTTTTTTtKSK",
  ".KKLLLLLLLLLLKK.",
  "..KLLLLllLLLLK..",
  "..KLLLLKKLLLLK..",
  "..KLLLK..KLLLK..",
  "..KlLLK..KLLlK..",
  ".KOOOOK..KOOOOK.",
  ".KKKKKK..KKKKKK.",
] as const;

// Piscada: a linha de cima dos olhos vira pele, sobra só a linha de baixo
const blink = idle.map((row, y) => (y === 10 ? row.replace(/E/g, "S") : row));

export const avatarIdle: PixelMap = { rows: idle, palette };
export const avatarBlink: PixelMap = { rows: blink, palette };
export const AVATAR_WIDTH = 16;
export const AVATAR_HEIGHT = idle.length;
