import type { PixelMap } from "./PixelArt";

// Ícones em pixel art desenhados para o site. São formas genéricas
// (mira, espada, chapéu de palha...), sem logos ou artes oficiais.

export const crosshair: PixelMap = {
  rows: [
    "....AA....",
    "....AA....",
    "..........",
    "..........",
    "AA..BB..AA",
    "AA..BB..AA",
    "..........",
    "..........",
    "....AA....",
    "....AA....",
  ],
  palette: { A: "#ff4655", B: "#f5eeff" },
};

export const sword: PixelMap = {
  rows: [
    "........WW",
    ".......WWW",
    "......WWW.",
    ".....WWW..",
    "..G.WWW...",
    "..GGWW....",
    "...GG.....",
    "..BGGG....",
    ".BB..G....",
    "BB........",
  ],
  palette: { W: "#dce4f5", G: "#d4a53c", B: "#7a4a2a" },
};

export const katana: PixelMap = {
  rows: [
    ".........W",
    "........WW",
    ".......WW.",
    "......WW..",
    ".....WW...",
    "..Y.WW....",
    "...YY.....",
    "..KYY.....",
    ".KK..Y....",
    "KK........",
  ],
  palette: { W: "#e8eefc", Y: "#d4a53c", K: "#3a2a4a" },
};

export const cursedFlame: PixelMap = {
  rows: [
    "....P.....",
    "...PP..P..",
    "...PPP.PP.",
    "..PPLPPPP.",
    "..PLLPPP..",
    ".PPLLLPPP.",
    ".PLLWLLPP.",
    ".PLWWWLPP.",
    "..PLWWLP..",
    "...PPPP...",
  ],
  palette: { P: "#7b5cff", L: "#b49cff", W: "#f1eaff" },
};

export const strawHat: PixelMap = {
  rows: [
    "..........",
    "..........",
    "...YYYY...",
    "..YYYYYY..",
    "..YyyyyY..",
    "..RRRRRR..",
    "YYYYYYYYYY",
    ".YyyyyyyY.",
    "..........",
    "..........",
  ],
  palette: { Y: "#f2c94c", y: "#d9a92e", R: "#d64545" },
};

export const levelUp: PixelMap = {
  rows: [
    "....CC....",
    "...CCCC...",
    "..CCCCCC..",
    ".CCCCCCCC.",
    "...CccC...",
    "...CccC...",
    "...CccC...",
    "..........",
    ".CCCCCCCC.",
    ".cccccccc.",
  ],
  palette: { C: "#6ee7f9", c: "#2bb5d6" },
};

export const gamepad: PixelMap = {
  rows: [
    "..........",
    ".KKKKKKKK.",
    "KGGGGGGGGK",
    "KGWGGGGRGK",
    "KWWWGGRGRK",
    "KGWGGGGRGK",
    "KGGGKKGGGK",
    ".KKK..KKK.",
  ],
  palette: { K: "#1b1020", G: "#8b7bd8", W: "#f5eeff", R: "#ff6fae" },
};

export const trophy: PixelMap = {
  rows: [
    "..YYYYYY..",
    "YYYYYYYYYY",
    "Y.YYYyYY.Y",
    "Y.YYYyYY.Y",
    ".YYYYYYYY.",
    "...YYYY...",
    "....YY....",
    "....YY....",
    "..BBBBBB..",
    "..BBBBBB..",
  ],
  palette: { Y: "#ffd166", y: "#fff1c2", B: "#8a5a3c" },
};

export const flag: PixelMap = {
  rows: [
    "KFFFFF....",
    "KFFFFFFF..",
    "KFFFFF....",
    "K.........",
    "K.........",
    "K.........",
    "K.........",
    "KK........",
  ],
  palette: { K: "currentColor", F: "#ff6fae" },
};

export const heart: PixelMap = {
  rows: [".RR..RR.", "RRRRRRRR", "RRRRRRRR", ".RRRRRR.", "..RRRR..", "...RR..."],
  palette: { R: "#ff4a6e" },
};

export const sun: PixelMap = {
  rows: [
    "....Y....",
    ".Y.....Y.",
    "...YYY...",
    "..YYYYY..",
    "Y.YYYYY.Y",
    "..YYYYY..",
    "...YYY...",
    ".Y.....Y.",
    "....Y....",
  ],
  palette: { Y: "#ffc93c" },
};

export const moon: PixelMap = {
  rows: [
    "...MMM...",
    "..MMM....",
    ".MMM.....",
    ".MMM.....",
    ".MMM.....",
    ".MMMM....",
    "..MMMMMM.",
    "...MMMM..",
    ".........",
  ],
  palette: { M: "#c9c2ff" },
};

export const chest: PixelMap = {
  rows: [
    ".KKKKKKKK.",
    "KBBBBBBBBK",
    "KBbbbbbbBK",
    "KKKKYYKKKK",
    "KBBBYYBBBK",
    "KBbbbbbbBK",
    "KBBBBBBBBK",
    "KKKKKKKKKK",
  ],
  palette: { K: "#2a1a14", B: "#a0663b", b: "#c4834f", Y: "#ffd166" },
};

export const scroll: PixelMap = {
  rows: [
    ".KKKKKKKK.",
    "KPPPPPPPPK",
    ".KPppppPK.",
    ".KPPPPPPK.",
    ".KPppppPK.",
    ".KPPPPPPK.",
    "KPPPPPPPPK",
    ".KKKKKKKK.",
  ],
  palette: { K: "#5a3a26", P: "#f3e2b8", p: "#c9ad7a" },
};
