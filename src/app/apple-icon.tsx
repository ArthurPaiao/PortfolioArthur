import { ImageResponse } from "next/og";
import { avatarIdle } from "@/components/pixel/avatar";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

const PX = 9;
// Cabeça do avatar (16x16) centralizada sobre o céu noturno do site
const head = avatarIdle.rows.slice(0, 16).flatMap((row, y) =>
  [...row].flatMap((ch, x) => {
    const color = avatarIdle.palette[ch];
    return color ? [{ x, y, color }] : [];
  })
);

export default function AppleIcon() {
  const offset = (180 - 16 * PX) / 2;
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          position: "relative",
          background: "linear-gradient(to bottom, #140c2e 0%, #140c2e 50%, #3b2a6e 50%)",
        }}
      >
        {head.map((p, i) => (
          <div
            key={i}
            style={{
              position: "absolute",
              left: offset + p.x * PX,
              top: offset + 6 + p.y * PX,
              width: PX,
              height: PX,
              background: p.color,
            }}
          />
        ))}
      </div>
    ),
    size
  );
}
