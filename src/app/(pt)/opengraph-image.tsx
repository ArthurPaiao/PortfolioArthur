import { ogAlt, ogSize, renderOgImage } from "@/components/og/renderOgImage";

export const alt = ogAlt("pt");
export const size = ogSize;
export const contentType = "image/png";

export default function OpengraphImage() {
  return renderOgImage("pt");
}
