import { ImageResponse } from "next/og";
import { profile } from "@/data/profile";
import { avatarIdle } from "@/components/pixel/avatar";

export const alt = `${profile.name} — ${profile.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const stack = ["Java", "Spring Boot", "React", "Next.js", "TypeScript"];
const PX = 13; // tamanho de cada pixel do avatar na imagem
const GROUND = 70;

// Estrelas fixas no céu
const stars = Array.from({ length: 34 }, (_, i) => {
  const v = (n: number) => {
    const x = Math.sin(i * 12.9898 + n * 78.233) * 43758.5453;
    return x - Math.floor(x);
  };
  return { x: Math.round(v(1) * 1200), y: Math.round(v(2) * 360), s: v(3) > 0.8 ? 5 : 3 };
});

// Cada pixel do sprite vira um <div> posicionado (o renderizador do next/og só entende flexbox e absolute)
const avatarPixels = avatarIdle.rows.flatMap((row, y) =>
  [...row].flatMap((ch, x) => {
    const color = avatarIdle.palette[ch];
    return color ? [{ x, y, color }] : [];
  })
);

export default function OpengraphImage() {
  const avatarW = 16 * PX;
  const avatarH = avatarIdle.rows.length * PX;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          position: "relative",
          background: "linear-gradient(to bottom, #140c2e 0%, #140c2e 30%, #251a4d 30%, #251a4d 60%, #3b2a6e 60%)",
          color: "#f5eeff",
          fontFamily: "sans-serif",
        }}
      >
        {stars.map((s, i) => (
          <div
            key={i}
            style={{ position: "absolute", left: s.x, top: s.y, width: s.s, height: s.s, background: "#fff6c9" }}
          />
        ))}

        {/* Chão nevado */}
        <div style={{ position: "absolute", left: 0, right: 0, bottom: 0, height: GROUND, display: "flex", flexDirection: "column" }}>
          <div style={{ height: 12, background: "#e3e8ff" }} />
          <div style={{ height: 4, background: "#a9b3e6" }} />
          <div style={{ flex: 1, background: "#2a2152" }} />
        </div>

        {/* Avatar em pixel art em pé no chão */}
        <div
          style={{
            position: "absolute",
            right: 150,
            bottom: GROUND - 4,
            width: avatarW,
            height: avatarH,
            display: "flex",
          }}
        >
          {avatarPixels.map((p, i) => (
            <div
              key={i}
              style={{
                position: "absolute",
                left: p.x * PX,
                top: p.y * PX,
                width: PX,
                height: PX,
                background: p.color,
              }}
            />
          ))}
        </div>

        <div style={{ display: "flex", flexDirection: "column", padding: "60px 72px", width: 780 }}>
          <div style={{ display: "flex", fontSize: 26, fontWeight: 700 }}>
            <span>arthur</span>
            <span style={{ color: "#ff6fae" }}>.</span>
            <span>paião</span>
          </div>

          <div style={{ display: "flex", marginTop: 54, fontSize: 22, color: "#6ee7f9" }}>
            {`> PLAYER 1 · ${profile.currentPosition}`}
          </div>
          <div style={{ display: "flex", fontSize: 66, fontWeight: 800, letterSpacing: -2, marginTop: 18, lineHeight: 1 }}>
            {profile.name}
          </div>
          <div style={{ display: "flex", fontSize: 40, fontWeight: 700, color: "#ff6fae", marginTop: 14 }}>
            {profile.role}
          </div>

          <div style={{ display: "flex", flexWrap: "wrap", gap: 12, marginTop: 34 }}>
            {stack.map((tech) => (
              <div
                key={tech}
                style={{
                  display: "flex",
                  padding: "8px 14px",
                  border: "4px solid #5b4b94",
                  background: "#1b1433",
                  fontSize: 20,
                  color: "#d8cff5",
                }}
              >
                {tech}
              </div>
            ))}
          </div>
        </div>

        <div style={{ position: "absolute", left: 72, bottom: GROUND + 24, display: "flex", fontSize: 20, color: "#8e83b8" }}>
          {profile.siteUrl.replace(/^https?:\/\//, "")}
        </div>
      </div>
    ),
    size
  );
}
