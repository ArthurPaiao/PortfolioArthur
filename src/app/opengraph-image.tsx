import { ImageResponse } from "next/og";
import { profile } from "@/data/profile";

export const alt = `${profile.name} — ${profile.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const stack = ["Java", "Spring Boot", "React", "Next.js", "TypeScript"];
const ROWS = 11;
const CENTER = Math.floor(ROWS / 2);

// Grade de pontos que ecoa o campo de partículas do hero
const dots = Array.from({ length: ROWS * ROWS }, (_, i) => {
  const row = Math.floor(i / ROWS);
  const col = i % ROWS;
  const d = Math.hypot(row - CENTER, col - CENTER);
  return { row, col, size: Math.max(2, 11 - d * 1.4), opacity: Math.max(0.06, 1 - d * 0.16) };
});

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          position: "relative",
          background: "#09090b",
          color: "#fafafa",
          fontFamily: "sans-serif",
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: -220,
            left: -160,
            width: 620,
            height: 620,
            borderRadius: 9999,
            background: "radial-gradient(circle, rgba(52,211,153,0.28), transparent 70%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            right: 70,
            top: 135,
            width: ROWS * 32,
            height: ROWS * 32,
            display: "flex",
          }}
        >
          {dots.map((dot, i) => (
            <div
              key={i}
              style={{
                position: "absolute",
                left: dot.col * 32 + 16 - dot.size / 2,
                top: dot.row * 32 + 16 - dot.size / 2,
                width: dot.size,
                height: dot.size,
                borderRadius: 9999,
                background: "#34d399",
                opacity: dot.opacity,
              }}
            />
          ))}
        </div>

        <div style={{ display: "flex", flexDirection: "column", padding: "64px 80px", width: 800 }}>
          <div style={{ display: "flex", fontSize: 26, fontWeight: 600 }}>
            <span>arthur</span>
            <span style={{ color: "#34d399" }}>.</span>
            <span>paião</span>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginTop: 64,
              padding: "8px 16px",
              borderRadius: 9999,
              border: "1px solid #27272a",
              background: "#111113",
              fontSize: 20,
              color: "#a1a1aa",
              alignSelf: "flex-start",
            }}
          >
            <div style={{ width: 10, height: 10, borderRadius: 9999, background: "#34d399", marginRight: 10 }} />
            {profile.currentPosition}
          </div>

          <div style={{ display: "flex", fontSize: 64, fontWeight: 700, letterSpacing: -2, marginTop: 32, lineHeight: 1 }}>
            {profile.name}
          </div>
          <div style={{ display: "flex", fontSize: 38, fontWeight: 600, color: "#34d399", marginTop: 16 }}>
            {profile.role}
          </div>

          <div style={{ display: "flex", flexWrap: "wrap", gap: 10, marginTop: 36 }}>
            {stack.map((tech) => (
              <div
                key={tech}
                style={{
                  display: "flex",
                  padding: "8px 14px",
                  borderRadius: 10,
                  border: "1px solid #27272a",
                  background: "#18181b",
                  fontSize: 20,
                  color: "#d4d4d8",
                }}
              >
                {tech}
              </div>
            ))}
          </div>
        </div>

        <div
          style={{
            position: "absolute",
            left: 80,
            bottom: 48,
            display: "flex",
            fontSize: 20,
            color: "#71717a",
          }}
        >
          {profile.siteUrl.replace(/^https?:\/\//, "")}
        </div>
      </div>
    ),
    size
  );
}
