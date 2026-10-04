import { Code, Database, GitBranch, Monitor, Server, TrendingUp, Zap, LucideIcon } from "lucide-react";
import { skillGroups, skillHighlights, type SkillGroup, type SkillHighlight } from "@/data/skills";
import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";

const highlightIcons: Record<SkillHighlight["icon"], LucideIcon> = {
  server: Server,
  monitor: Monitor,
  zap: Zap,
  database: Database,
};

const groupIcons: Record<SkillGroup["icon"], LucideIcon> = {
  code: Code,
  monitor: Monitor,
  server: Server,
  database: Database,
  "git-branch": GitBranch,
};

const allTech = skillGroups.flatMap((g) => g.items);
const half = Math.ceil(allTech.length / 2);
const marqueeRows = [allTech.slice(0, half), allTech.slice(half)];

function Marquee({ items, reverse = false }: { items: string[]; reverse?: boolean }) {
  return (
    <div className="group flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
      {/* Conteúdo duplicado: a animação desloca -50% e recomeça sem emenda visível */}
      <div
        className={`flex shrink-0 gap-3 pr-3 animate-marquee group-hover:[animation-play-state:paused] ${
          reverse ? "[animation-direction:reverse]" : ""
        }`}
      >
        {[...items, ...items].map((tech, i) => (
          <span
            key={i}
            aria-hidden={i >= items.length}
            className="whitespace-nowrap px-4 py-2 rounded-full border border-line bg-surface text-sm text-muted"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="competencias" className="py-24 md:py-32 border-t border-line">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader
          index="04"
          eyebrow="Competências"
          title="O que eu entrego"
          description="Do banco de dados à interface, com resultado medido sempre que possível."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {skillHighlights.map((skill, i) => {
            const Icon = highlightIcons[skill.icon];
            return (
              <Reveal key={skill.title} delay={i * 0.08}>
                <div className="group h-full flex flex-col p-6 rounded-2xl border border-line bg-surface hover:border-line-strong hover:-translate-y-0.5 transition-all duration-300">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-accent-soft text-accent mb-5 group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-300">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-semibold text-fg tracking-tight">{skill.title}</h3>
                  <p className="text-sm text-muted leading-relaxed mt-2 flex-grow">{skill.description}</p>
                  <div className="mt-5 pt-4 border-t border-line flex items-start gap-2 text-xs font-medium text-accent">
                    <TrendingUp className="w-3.5 h-3.5 mt-px shrink-0" />
                    <span>{skill.result}</span>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal className="mt-16 space-y-3 -mx-6 sm:mx-0">
          {marqueeRows.map((row, i) => (
            <Marquee key={i} items={row} reverse={i === 1} />
          ))}
        </Reveal>

        <div id="stack" className="mt-16 rounded-2xl border border-line bg-surface divide-y divide-line">
          {skillGroups.map((group, i) => {
            const Icon = groupIcons[group.icon];
            return (
              <Reveal
                key={group.title}
                delay={i * 0.05}
                className="grid md:grid-cols-[240px_1fr] gap-3 md:gap-8 p-5 md:p-6"
              >
                <div className="flex items-center gap-3 text-fg font-medium">
                  <Icon className="w-4 h-4 text-accent" />
                  {group.title}
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {group.items.map((tech) => (
                    <span
                      key={tech}
                      className="font-mono text-xs px-2.5 py-1 rounded-md bg-surface-2 text-muted border border-line"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
