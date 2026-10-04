"use client";

import { motion } from "framer-motion";
import { ArrowDown, ArrowRight, Download, Mail, MapPin } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./BrandIcons";
import { profile } from "@/data/profile";
import AnimatedCounter from "./AnimatedCounter";
import ParticleField from "./ui/ParticleField";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 20, filter: "blur(6px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] as const },
  },
};

const socials = [
  { href: profile.github, label: "GitHub", icon: GithubIcon, external: true },
  { href: profile.linkedin, label: "LinkedIn", icon: LinkedinIcon, external: true },
  { href: `mailto:${profile.email}`, label: "Email", icon: Mail, external: false },
];

export default function Hero() {
  return (
    <section id="inicio" className="relative min-h-screen overflow-hidden">
      {/* Fundo: grade sutil + brilhos ambientes */}
      <div aria-hidden className="absolute inset-0 pointer-events-none">
        <div
          className="absolute inset-0 opacity-[0.35] dark:opacity-[0.25]"
          style={{
            backgroundImage:
              "linear-gradient(to right, var(--line) 1px, transparent 1px), linear-gradient(to bottom, var(--line) 1px, transparent 1px)",
            backgroundSize: "56px 56px",
            maskImage: "radial-gradient(ellipse 70% 60% at 50% 40%, black 30%, transparent 100%)",
          }}
        />
        <div
          className="absolute -top-32 -left-32 w-[28rem] h-[28rem] rounded-full blur-3xl"
          style={{ background: "var(--glow)" }}
        />
        <div
          className="absolute bottom-0 right-0 w-[32rem] h-[32rem] rounded-full blur-3xl"
          style={{ background: "var(--glow)" }}
        />
      </div>

      {/* Partículas: atrás do texto no mobile, coluna própria no desktop */}
      <div className="absolute inset-0 flex items-center justify-center lg:justify-end lg:pr-[6vw] opacity-40 lg:opacity-100">
        <ParticleField rows={15} range={0.55} />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 min-h-screen flex flex-col justify-center pt-28 pb-24">
        <motion.div variants={container} initial="hidden" animate="show" className="max-w-2xl">
          <motion.div
            variants={item}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-surface/70 backdrop-blur border border-line text-xs sm:text-sm text-muted mb-8"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent" />
            </span>
            {profile.currentPosition}
          </motion.div>

          <motion.p variants={item} className="font-mono text-sm text-accent mb-4">
            Olá, eu sou {profile.name}
          </motion.p>

          <motion.h1
            variants={item}
            className="text-5xl sm:text-6xl lg:text-7xl font-semibold tracking-tighter leading-[0.95] text-fg mb-6"
          >
            Construindo software de{" "}
            <span className="bg-gradient-to-br from-accent via-accent-strong to-teal-600 bg-clip-text text-transparent">
              ponta a ponta.
            </span>
          </motion.h1>

          <motion.p variants={item} className="text-base sm:text-lg text-muted leading-relaxed mb-8 max-w-xl">
            {profile.summary}
          </motion.p>

          <motion.div variants={item} className="flex flex-col sm:flex-row sm:items-center gap-3 mb-10">
            <a
              href="/cv.pdf"
              target="_blank"
              className="group relative overflow-hidden inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-fg text-bg font-medium"
            >
              <Download className="relative z-10 w-4 h-4" />
              <span className="relative z-10">Baixar currículo</span>
              <span
                aria-hidden
                className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/25 dark:via-black/15 to-transparent"
              />
            </a>
            <a
              href="#contato"
              className="group inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl border border-line-strong bg-surface/60 backdrop-blur text-fg font-medium hover:border-accent transition-colors"
            >
              Vamos conversar
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </a>
            <div className="flex items-center gap-2 sm:ml-2">
              {socials.map(({ href, label, icon: Icon, external }) => (
                <a
                  key={label}
                  href={href}
                  target={external ? "_blank" : undefined}
                  rel={external ? "noreferrer" : undefined}
                  aria-label={label}
                  className="w-11 h-11 inline-flex items-center justify-center rounded-xl border border-line bg-surface/60 backdrop-blur text-muted hover:text-accent hover:border-accent transition-colors"
                >
                  <Icon className="w-[18px] h-[18px]" />
                </a>
              ))}
            </div>
          </motion.div>

          <motion.div
            variants={item}
            className="grid grid-cols-2 sm:grid-cols-4 gap-px rounded-2xl border border-line bg-line overflow-hidden max-w-xl"
          >
            {profile.stats.map((stat) => (
              <div
                key={stat.label}
                title={"detail" in stat ? stat.detail : undefined}
                className="px-4 py-3.5 bg-surface cursor-default"
              >
                <div className="text-2xl font-semibold text-fg tabular-nums">
                  <AnimatedCounter value={stat.value} />
                </div>
                <div className="text-xs text-subtle mt-0.5">{stat.label}</div>
              </div>
            ))}
          </motion.div>

          <motion.p variants={item} className="mt-6 inline-flex items-center gap-1.5 text-sm text-subtle">
            <MapPin className="w-4 h-4" />
            {profile.location}
          </motion.p>
        </motion.div>
      </div>

      <a
        href="#sobre"
        aria-label="Rolar para a próxima seção"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 hidden sm:flex flex-col items-center gap-2 text-subtle hover:text-accent transition-colors"
      >
        <span className="font-mono text-[11px] uppercase tracking-[0.3em]">role</span>
        <ArrowDown className="w-4 h-4 animate-bounce" />
      </a>
    </section>
  );
}
