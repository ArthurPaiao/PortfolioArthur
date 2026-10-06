"use client";

import { MotionConfig } from "framer-motion";
import type { ReactNode } from "react";

// Com reducedMotion="user", o Framer Motion desliga animações de transform/layout
// para quem pediu menos movimento no sistema (a regra do globals.css só cobre CSS).
export default function MotionProvider({ children }: { children: ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
