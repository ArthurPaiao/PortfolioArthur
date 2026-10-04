import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#09090b",
          borderRadius: 8,
          color: "#fafafa",
          fontSize: 20,
          fontWeight: 700,
          letterSpacing: -1,
        }}
      >
        a<span style={{ color: "#34d399" }}>.</span>
      </div>
    ),
    size
  );
}
