"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { experience } from "@/data/experience";
import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";

export default function Experience() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.8", "end 0.3"],
  });
  const lineHeight = useSpring(scrollYProgress, { stiffness: 80, damping: 24 });

  return (
    <section id="experiencia" className="py-24 md:py-32 border-t border-line">
      <div className="max-w-5xl mx-auto px-6">
        <SectionHeader
          index="01"
          eyebrow="Experiência"
          title="Trajetória"
          description="Dois anos evoluindo de automação de processos para engenharia de software em produção."
        />

        <div ref={containerRef} className="relative">
          {/* Trilho de fundo + linha que "desenha" conforme o scroll */}
          <div className="absolute left-[7px] md:left-[211px] top-2 bottom-2 w-px bg-line" />
          <motion.div
            style={{ scaleY: lineHeight }}
            className="absolute left-[7px] md:left-[211px] top-2 bottom-2 w-px bg-accent origin-top"
          />

          <div className="space-y-14 md:space-y-16">
            {experience.map((job, i) => (
              <Reveal
                key={job.company + job.period}
                delay={i * 0.05}
                className="relative grid md:grid-cols-[180px_1fr] gap-2 md:gap-16 pl-10 md:pl-0"
              >
                <span className="absolute left-0 md:left-[204px] top-1.5 w-[15px] h-[15px] rounded-full bg-bg border-2 border-accent flex items-center justify-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                </span>

                <div className="md:text-right md:pt-0.5">
                  <div className="font-mono text-xs text-accent uppercase tracking-wider">{job.period}</div>
                  <div className="text-fg font-medium mt-1">{job.company}</div>
                </div>

                <div className="group rounded-2xl md:-mt-4 md:p-5 md:border md:border-transparent md:hover:border-line md:hover:bg-surface transition-colors">
                  <h3 className="text-lg md:text-xl font-semibold text-fg tracking-tight">{job.role}</h3>

                  <ul className="mt-3 space-y-2.5">
                    {job.bullets.map((bullet, j) => (
                      <li key={j} className="text-muted text-sm leading-relaxed flex gap-2.5">
                        <span className="mt-2 w-1 h-1 rounded-full bg-subtle shrink-0" />
                        <span>
                          {bullet.text}
                          {bullet.highlight && (
                            <span className="ml-2 inline-flex items-center px-2 py-0.5 rounded-md bg-accent-soft text-accent text-xs font-medium whitespace-nowrap">
                              {bullet.highlight}
                            </span>
                          )}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {job.stack && (
                    <div className="flex flex-wrap gap-1.5 mt-4">
                      {job.stack.map((tech) => (
                        <span
                          key={tech}
                          className="font-mono text-[11px] px-2 py-1 rounded-md bg-surface-2 text-muted border border-line"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
