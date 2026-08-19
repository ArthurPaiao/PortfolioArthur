import { Code, Database, Zap, Layers, Kanban, LucideIcon } from "lucide-react";
import { skillGroups } from "@/data/skills";
import Reveal from "./Reveal";

const iconMap: Record<string, LucideIcon> = { code: Code, database: Database, zap: Zap, layers: Layers, kanban: Kanban };
const colorMap: Record<string, string> = {
  code: "bg-emerald-900/30 text-emerald-400",
  database: "bg-blue-900/30 text-blue-400",
  zap: "bg-green-900/30 text-green-400",
  layers: "bg-orange-900/30 text-orange-400",
  kanban: "bg-pink-900/30 text-pink-400",
};

export default function About() {
  return (
    <section id="sobre" className="py-24 bg-slate-900/50 border-t border-slate-900">
      <div className="max-w-5xl mx-auto px-6">
        <Reveal className="mb-16">
          <span className="text-emerald-400 font-semibold tracking-wider text-sm uppercase">Sobre</span>
          <h2 className="text-4xl font-bold text-white mt-2">Stack &amp; Ferramentas</h2>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {skillGroups.map((group, i) => {
            const Icon = iconMap[group.icon];
            const isLast = i === skillGroups.length - 1;
            return (
              <Reveal
                key={group.title}
                delay={i * 0.08}
                className={isLast ? "sm:col-span-2" : undefined}
              >
                <div className="group bg-slate-950 p-6 rounded-2xl border border-slate-800 hover:border-emerald-900 hover:-translate-y-1 transition-all duration-300 h-full">
                  <div
                    className={`w-10 h-10 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300 ${colorMap[group.icon]}`}
                  >
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-bold text-white mb-3 group-hover:text-emerald-400 transition-colors">
                    {group.title}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {group.items.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-slate-800 text-slate-300 text-xs font-medium rounded-md border border-slate-700"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
