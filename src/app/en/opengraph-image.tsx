import { ogAlt, ogSize, renderOgImage } from "@/components/og/renderOgImage";

export const alt = ogAlt("en");
export const size = ogSize;
export const contentType = "image/png";

export default function OpengraphImage() {
  return renderOgImage("en");
}
