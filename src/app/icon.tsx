import { ImageResponse } from "next/og";
import { avatarIdle } from "@/components/pixel/avatar";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

// Favicon: as 16 primeiras linhas do sprite (a cabeça) a 2px por pixel = 32x32
const head = avatarIdle.rows.slice(0, 16).flatMap((row, y) =>
  [...row].flatMap((ch, x) => {
    const color = avatarIdle.palette[ch];
    return color ? [{ x, y, color }] : [];
  })
);

export default function Icon() {
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", position: "relative" }}>
        {head.map((p, i) => (
          <div
            key={i}
            style={{ position: "absolute", left: p.x * 2, top: p.y * 2, width: 2, height: 2, background: p.color }}
          />
        ))}
      </div>
    ),
    size
  );
}
