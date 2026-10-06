"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { getExperience } from "@/data/experience";
import type { Locale } from "@/i18n/locales";
import { getDictionary } from "@/i18n/ui";
import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";

export default function Experience({ locale }: { locale: Locale }) {
  const experience = getExperience(locale);
  const t = getDictionary(locale).experience;
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.8", "end 0.3"],
  });
  const lineHeight = useSpring(scrollYProgress, { stiffness: 80, damping: 24 });

  return (
    <section id="experiencia" className="py-24 md:py-32">
      <div className="max-w-5xl mx-auto px-6">
        <SectionHeader index="03" eyebrow={t.eyebrow} flavor={t.flavor} title={t.title} description={t.description} />

        <div ref={containerRef} className="relative">
          {/* Trilho tracejado em pixel + barra que "enche" conforme o scroll */}
          <div
            className="absolute left-[6px] md:left-[210px] top-2 bottom-2 w-1"
            style={{ backgroundImage: "repeating-linear-gradient(to bottom, var(--line-strong) 0 8px, transparent 8px 14px)" }}
          />
          <motion.div
            style={{ scaleY: lineHeight }}
            className="absolute left-[6px] md:left-[210px] top-2 bottom-2 w-1 bg-accent origin-top"
          />

          <div className="space-y-14 md:space-y-16">
            {experience.map((job, i) => {
              const active = job.current === true;
              return (
                <Reveal
                  key={job.company + job.period}
                  delay={i * 0.05}
                  className="relative grid md:grid-cols-[180px_1fr] gap-3 md:gap-16 pl-10 md:pl-0"
                >
                  {/* Checkpoint: quadrado pixelado; a missão atual pisca */}
                  <span
                    className={`absolute left-0 md:left-[204px] top-1 w-4 h-4 border-4 ${
                      active ? "bg-gold border-gold animate-twinkle" : "bg-bg border-accent"
                    }`}
                  />

                  <div className="md:text-right md:pt-0.5">
                    <div className="font-pixel text-sm text-accent uppercase tracking-wider">{job.period}</div>
                    <div className="font-pixel text-fg text-lg mt-0.5">{job.company}</div>
                  </div>

                  <div className="pixel-box pixel-card p-5 md:-mt-3">
                    <div className="flex flex-wrap items-start justify-between gap-x-4 gap-y-2">
                      <h3 className="font-pixel text-lg md:text-xl text-fg">{job.role}</h3>
                      <span
                        className={`font-pixel text-[11px] uppercase tracking-wider px-2 py-0.5 ${
                          active ? "bg-gold text-[#2a1a00]" : "bg-surface-2 text-subtle"
                        }`}
                      >
                        {active ? t.active : t.done}
                      </span>
                    </div>

                    <ul className="mt-3 space-y-2.5">
                      {job.bullets.map((bullet, j) => (
                        <li key={j} className="text-muted text-sm leading-relaxed flex gap-2.5">
                          <span className="text-accent font-pixel shrink-0">▸</span>
                          <span>
                            {bullet.text}
                            {bullet.highlight && (
                              <span className="ml-2 inline-flex items-center px-2 py-0.5 bg-accent-soft text-accent font-pixel text-xs whitespace-nowrap">
                                {bullet.highlight}
                              </span>
                            )}
                          </span>
                        </li>
                      ))}
                    </ul>

                    {job.stack && (
                      <div className="flex flex-wrap gap-2.5 mt-4">
                        {job.stack.map((tech) => (
                          <span key={tech} className="pixel-chip">
                            {tech}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
