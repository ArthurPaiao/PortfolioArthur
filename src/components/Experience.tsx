"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { experience } from "@/data/experience";
import Reveal from "./Reveal";

export default function Experience() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.8", "end 0.3"],
  });
  const lineHeight = useSpring(scrollYProgress, { stiffness: 80, damping: 24 });

  return (
    <section id="experiencia" className="py-24 bg-slate-950 border-t border-slate-900">
      <div className="max-w-4xl mx-auto px-6">
        <Reveal className="mb-16">
          <span className="text-emerald-400 font-semibold tracking-wider text-sm uppercase">Experiência</span>
          <h2 className="text-4xl font-bold text-white mt-2">Trajetória</h2>
        </Reveal>

        <div ref={containerRef} className="relative pl-10">
          {/* Trilho de fundo (estático) */}
          <div className="absolute left-[7px] top-2 bottom-2 w-[2px] bg-slate-800" />
          {/* Linha que "desenha" conforme o scroll */}
          <motion.div
            style={{ scaleY: lineHeight }}
            className="absolute left-[7px] top-2 bottom-2 w-[2px] bg-emerald-500 origin-top"
          />

          <div className="space-y-14">
            {experience.map((job, i) => (
              <Reveal key={job.company + job.period} delay={i * 0.05} className="relative">
                <span className="absolute -left-10 top-1.5 w-4 h-4 rounded-full bg-slate-950 border-2 border-emerald-500 flex items-center justify-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                </span>

                <div className="text-xs font-medium text-emerald-400 uppercase tracking-wider mb-1">
                  {job.period}
                </div>
                <h3 className="text-xl font-bold text-white">{job.role}</h3>
                <div className="text-slate-400 font-medium mb-3">{job.company}</div>

                <ul className="space-y-2">
                  {job.bullets.map((bullet, j) => (
                    <li key={j} className="text-slate-400 text-sm leading-relaxed flex gap-2">
                      <span className="text-emerald-600 mt-1.5 shrink-0">▸</span>
                      <span>
                        {bullet.text}{" "}
                        {bullet.highlight && (
                          <span className="font-semibold text-white">({bullet.highlight})</span>
                        )}
                      </span>
                    </li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
