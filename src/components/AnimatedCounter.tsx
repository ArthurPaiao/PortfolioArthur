"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, useMotionValue, useSpring } from "framer-motion";

type Props = {
  value: string; // aceita "2+", "3", "9" etc.
  className?: string;
};

export default function AnimatedCounter({ value, className }: Props) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-10% 0px" });
  const numericMatch = value.match(/\d+/);
  const numericValue = numericMatch ? parseInt(numericMatch[0], 10) : 0;
  const suffix = value.replace(/^\d+/, "");

  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 1200, bounce: 0 });
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (isInView) {
      motionValue.set(numericValue);
    }
  }, [isInView, numericValue, motionValue]);

  useEffect(() => {
    return springValue.on("change", (latest) => {
      setDisplayValue(Math.round(latest));
    });
  }, [springValue]);

  return (
    <motion.span ref={ref} className={className}>
      {displayValue}
      {suffix}
    </motion.span>
  );
}
