"use client";

import { motion } from "framer-motion";
import { Download, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./BrandIcons";
import { profile } from "@/data/profile";
import AnimatedCounter from "./AnimatedCounter";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] as const } },
};

export default function Hero() {
  return (
    <section
      id="hero"
      className="pt-32 pb-20 px-6 max-w-4xl mx-auto min-h-screen flex flex-col justify-center text-center"
    >
      <motion.div variants={container} initial="hidden" animate="show">
        <motion.div
          variants={item}
          className="mx-auto inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900 border border-slate-800 text-sm text-slate-300 mb-8"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
          </span>
          Estagiário na Cielo — {profile.role}
        </motion.div>

        <motion.h1
          variants={item}
          className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-6"
        >
          Transformando <span className="text-emerald-400">dados</span> em resultados
        </motion.h1>

        <motion.p
          variants={item}
          className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed mb-10"
        >
          {profile.summary}
        </motion.p>

        <motion.div
          variants={item}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 flex-wrap mb-16"
        >
          <a
            href="/cv.pdf"
            target="_blank"
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3 bg-white text-slate-950 rounded-xl font-medium hover:bg-emerald-100 transition-colors"
          >
            <Download className="w-5 h-5" />
            Baixar Currículo
          </a>
          <a
            href={profile.github}
            target="_blank"
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3 bg-slate-900 border border-slate-800 rounded-xl hover:border-emerald-700 transition-colors group"
          >
            <GithubIcon className="w-5 h-5 text-slate-400 group-hover:text-emerald-400 transition-colors" />
            <span className="font-medium">GitHub</span>
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3 bg-slate-900 border border-slate-800 rounded-xl hover:border-blue-700 transition-colors group"
          >
            <LinkedinIcon className="w-5 h-5 text-slate-400 group-hover:text-blue-400 transition-colors" />
            <span className="font-medium">LinkedIn</span>
          </a>
          <a
            href={`mailto:${profile.email}`}
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3 bg-slate-900 border border-slate-800 rounded-xl hover:border-red-800 transition-colors group"
          >
            <Mail className="w-5 h-5 text-slate-400 group-hover:text-red-400 transition-colors" />
            <span className="font-medium">Email</span>
          </a>
        </motion.div>

        <motion.div variants={item} className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
          {profile.stats.map((stat) => (
            <div
              key={stat.label}
              title={"detail" in stat ? stat.detail : undefined}
              className="p-4 rounded-xl border border-transparent hover:border-emerald-900 hover:bg-slate-900 transition-colors cursor-default"
            >
              <div className="text-3xl font-bold text-white mb-1">
                <AnimatedCounter value={stat.value} />
              </div>
              <div className="text-slate-400 text-sm">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
