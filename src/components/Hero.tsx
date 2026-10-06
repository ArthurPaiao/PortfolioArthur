"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./BrandIcons";
import { getProfile } from "@/data/profile";
import { avatarLines } from "@/data/personal";
import type { Locale } from "@/i18n/locales";
import { getDictionary } from "@/i18n/ui";
import AnimatedCounter from "./AnimatedCounter";
import PixelScene, { GROUND_HEIGHT } from "./pixel/PixelScene";
import PixelAvatar from "./pixel/PixelAvatar";
import SystemDialog from "./pixel/SystemDialog";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.1 } },
};

// Entrada em degraus, como sprites surgindo na tela
const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" as const } },
};

export default function Hero({ locale }: { locale: Locale }) {
  const [line, setLine] = useState(0);
  const profile = getProfile(locale);
  const t = getDictionary(locale).hero;
  const lines = avatarLines[locale];

  const socials = [
    { href: profile.github, label: "GitHub", icon: GithubIcon, external: true },
    { href: profile.linkedin, label: "LinkedIn", icon: LinkedinIcon, external: true },
    { href: `mailto:${profile.email}`, label: "Email", icon: Mail, external: false },
  ];

  return (
    <section id="inicio" className="relative min-h-screen overflow-hidden flex flex-col">
      <PixelScene />

      <div
        className="relative z-10 flex-1 w-full max-w-6xl mx-auto px-6 pt-24 grid lg:grid-cols-[1.15fr_0.85fr] gap-10 lg:gap-6 items-end"
        style={{ paddingBottom: GROUND_HEIGHT - 6 }}
      >
        <motion.div variants={container} initial="hidden" animate="show" className="self-center pb-6 lg:pb-10">
          <motion.div
            variants={item}
            className="pixel-box inline-flex items-center gap-2 px-3 py-1.5 font-pixel text-xs sm:text-sm text-muted mb-5"
          >
            <span className="w-2 h-2 bg-accent animate-twinkle" />
            {profile.currentPosition}
          </motion.div>

          <motion.p variants={item} className="font-pixel text-sm sm:text-base text-accent-2 mb-2">
            &gt; PLAYER 1 · {profile.name}
          </motion.p>

          <motion.h1
            variants={item}
            className="font-pixel text-5xl sm:text-6xl lg:text-7xl leading-[0.9] text-fg mb-5 [text-shadow:4px_4px_0_var(--shadow-hard)]"
          >
            {t.headline} <span className="text-accent">{t.headlineAccent}</span>
          </motion.h1>

          <motion.div variants={item} className="pixel-box p-5 mb-7 max-w-xl">
            <p className="text-sm sm:text-base text-muted leading-relaxed">{profile.summary}</p>
            <p className="mt-3 inline-flex items-center gap-1.5 font-pixel text-xs text-subtle">
              <MapPin className="w-3.5 h-3.5" />
              {profile.location}
            </p>
          </motion.div>

          <motion.div variants={item} className="flex flex-col sm:flex-row sm:items-center gap-4 mb-7">
            <a href="/cv.pdf" target="_blank" className="pixel-btn">
              {t.downloadCv}
            </a>
            <a href="#contato" className="pixel-btn pixel-btn-ghost">
              {t.talk}
            </a>
            <div className="flex items-center gap-4 sm:ml-2">
              {socials.map(({ href, label, icon: Icon, external }) => (
                <a
                  key={label}
                  href={href}
                  target={external ? "_blank" : undefined}
                  rel={external ? "noreferrer" : undefined}
                  aria-label={label}
                  className="pixel-btn pixel-btn-ghost p-0 w-11 h-11"
                >
                  <Icon className="w-[18px] h-[18px]" />
                </a>
              ))}
            </div>
          </motion.div>

          <motion.div variants={item} className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-xl">
            {profile.stats.map((stat) => (
              <div
                key={stat.label}
                title={stat.detail}
                className="pixel-box px-3 py-2.5 cursor-default"
              >
                <div className="font-pixel text-2xl text-gold tabular-nums">
                  <AnimatedCounter value={stat.value} />
                </div>
                <div className="font-pixel text-[11px] uppercase tracking-wider text-subtle">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Avatar no chão com a janela de diálogo em cima */}
        <div className="flex flex-col items-center gap-5 lg:pb-0">
          <SystemDialog
            key={line}
            title={t.dialogTitle}
            text={lines[line]}
            hint={t.dialogHint}
            className="w-full max-w-sm"
          />
          <PixelAvatar
            scale={9}
            label={t.avatarLabel}
            onJump={() => setLine((l) => (l + 1) % lines.length)}
            className="origin-bottom scale-[0.8] sm:scale-100"
          />
        </div>
      </div>
    </section>
  );
}
