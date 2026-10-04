"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Bot, HeartPulse, Landmark, LayoutTemplate, Leaf, LucideIcon, ShoppingCart } from "lucide-react";
import { projects, type Project } from "@/data/projects";
import { profile } from "@/data/profile";
import { GithubIcon } from "./BrandIcons";
import SectionHeader from "./SectionHeader";
import { BentoGrid, type BentoItem } from "./ui/BentoGrid";

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

const items: BentoItem[] = projects.map((proj) => {
  const Icon = iconMap[proj.icon];
  return {
    title: proj.title,
    description: proj.description,
    icon: <Icon className="w-5 h-5" />,
    iconClassName: colorMap[proj.icon],
    status: proj.status,
    tags: proj.stack,
    result: proj.result,
    href: proj.githubUrl,
    cta: "Ver código",
    colSpan: proj.featured ? 2 : 1,
    hasPersistentHover: proj.slug === projects[0].slug,
  };
});

export default function Projects() {
  return (
    <section id="projetos" className="py-24 md:py-32 border-t border-line">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader
          index="02"
          eyebrow="Projetos"
          title="O que já construí"
          description="De desafios técnicos a produtos em desenvolvimento: back-end robusto, testes de verdade e interfaces cuidadas."
        />

        <BentoGrid items={items}>
          <motion.a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10% 0px" }}
            transition={{ duration: 0.6, delay: 0.16, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="group relative flex flex-col justify-between gap-8 p-6 rounded-2xl border border-dashed border-line-strong hover:border-accent hover:bg-accent-soft transition-colors md:col-span-2 lg:col-span-1"
          >
            <GithubIcon className="w-8 h-8 text-muted group-hover:text-accent transition-colors" />
            <div>
              <p className="text-lg font-semibold text-fg">Mais no GitHub</p>
              <p className="text-sm text-muted mt-1">Código, experimentos e estudos.</p>
              <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-accent">
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
