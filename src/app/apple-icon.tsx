import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "radial-gradient(circle at 30% 20%, #064e3b, #09090b 70%)",
          color: "#fafafa",
          fontSize: 96,
          fontWeight: 700,
          letterSpacing: -6,
        }}
      >
        AP<span style={{ color: "#34d399" }}>.</span>
      </div>
    ),
    size
  );
}
