"use client";

import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Bot,
  ExternalLink,
  HeartPulse,
  Landmark,
  LayoutTemplate,
  Leaf,
  LucideIcon,
  ShoppingCart,
} from "lucide-react";
import { getProjects, type Project } from "@/data/projects";
import { profile } from "@/data/profile";
import type { Locale } from "@/i18n/locales";
import { getDictionary } from "@/i18n/ui";
import { GithubIcon } from "./BrandIcons";
import SectionHeader from "./SectionHeader";
import { BentoGrid, type BentoItem, type BentoLink } from "./ui/BentoGrid";
import ProjectPreview from "./ui/ProjectPreview";

const iconMap: Record<Project["icon"], LucideIcon> = {
  "heart-pulse": HeartPulse,
  leaf: Leaf,
  bot: Bot,
  layout: LayoutTemplate,
  landmark: Landmark,
  "shopping-cart": ShoppingCart,
};

const colorMap: Record<Project["icon"], string> = {
  "shopping-cart": "bg-sky-500/10 text-sky-600 dark:text-sky-400",
  landmark: "bg-amber-500/10 text-amber-600 dark:text-amber-400",
  "heart-pulse": "bg-rose-500/10 text-rose-600 dark:text-rose-400",
  leaf: "bg-green-500/10 text-green-600 dark:text-green-400",
  bot: "bg-violet-500/10 text-violet-600 dark:text-violet-400",
  layout: "bg-blue-500/10 text-blue-600 dark:text-blue-400",
};

// Cor de destaque de cada projeto, usada nas prévias ilustrativas
const tintMap: Record<Project["icon"], string> = {
  "shopping-cart": "#0ea5e9",
  landmark: "#f59e0b",
  "heart-pulse": "#f43f5e",
  leaf: "#22c55e",
  bot: "#8b5cf6",
  layout: "#3b82f6",
};

export default function Projects({ locale }: { locale: Locale }) {
  const projects = getProjects(locale);
  const t = getDictionary(locale).projects;

  const items: BentoItem[] = projects.map((proj, i) => {
    const Icon = iconMap[proj.icon];
    const links: BentoLink[] = [];
    if (proj.githubUrl) {
      links.push({ label: t.code, href: proj.githubUrl, icon: <GithubIcon className="w-3.5 h-3.5" /> });
    }
    if (proj.demoUrl) {
      links.push({ label: t.live, href: proj.demoUrl, icon: <ExternalLink className="w-3.5 h-3.5" /> });
    }
    return {
      title: proj.title,
      description: proj.description,
      icon: <Icon className="w-5 h-5" />,
      iconClassName: colorMap[proj.icon],
      meta: t.level(i + 1),
      status: proj.status,
      tags: proj.stack,
      result: proj.result,
      preview: (
        <ProjectPreview
          project={proj}
          tint={tintMap[proj.icon]}
          labels={{ illustrative: t.illustrative, screenshotAlt: t.screenshotAlt(proj.title) }}
          className="h-full"
        />
      ),
      links,
      colSpan: proj.featured ? 2 : 1,
      hasPersistentHover: proj.slug === projects[0].slug,
    };
  });

  return (
    <section id="projetos" className="py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader index="04" eyebrow={t.eyebrow} flavor={t.flavor} title={t.title} description={t.description} />

        <BentoGrid items={items}>
          <motion.a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10% 0px" }}
            transition={{ duration: 0.5, delay: 0.16, ease: "easeOut" }}
            className="pixel-box pixel-card group relative flex flex-col justify-between gap-8 p-6 bg-surface-2 md:col-span-2 lg:col-span-1"
          >
            <div className="flex items-center justify-between">
              <GithubIcon className="w-8 h-8 text-muted group-hover:text-accent transition-colors" />
              <span className="font-pixel text-xs uppercase tracking-widest text-subtle">{t.bonus}</span>
            </div>
            <div>
              <p className="font-pixel text-xl  text-fg">{t.moreOnGithub}</p>
              <p className="text-sm text-muted mt-1">{t.moreOnGithubText}</p>
              <span className="mt-4 inline-flex items-center gap-1 font-pixel text-sm text-accent">
                {profile.github.replace(/^https?:\/\//, "")}
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </span>
            </div>
          </motion.a>
        </BentoGrid>
      </div>
    </section>
  );
}
