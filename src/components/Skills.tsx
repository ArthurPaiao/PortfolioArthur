import { Zap, BarChart3, Database, Code2, TrendingUp, LucideIcon } from "lucide-react";
import { skillHighlights } from "@/data/skills";
import Reveal from "./Reveal";

const iconMap: Record<string, LucideIcon> = { zap: Zap, "bar-chart": BarChart3, database: Database, code: Code2 };
const colorMap: Record<string, string> = {
  zap: "bg-emerald-900/30 text-emerald-400",
  "bar-chart": "bg-blue-900/30 text-blue-400",
  database: "bg-green-900/30 text-green-400",
  code: "bg-orange-900/30 text-orange-400",
};

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-slate-950 border-t border-slate-900">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal className="mb-16">
          <span className="text-emerald-400 font-semibold tracking-wider text-sm uppercase">Competências</span>
          <h2 className="text-4xl font-bold text-white mt-2">O que eu entrego</h2>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillHighlights.map((skill, i) => {
            const Icon = iconMap[skill.icon];
            return (
              <Reveal key={skill.title} delay={i * 0.1}>
                <div className="group bg-slate-900 rounded-2xl border border-slate-800 hover:-translate-y-1 hover:shadow-xl hover:shadow-emerald-950/40 transition-all duration-300 p-6 h-full flex flex-col">
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300 ${colorMap[skill.icon]}`}
                  >
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-emerald-400 transition-colors">
                    {skill.title}
                  </h3>
                  <p className="text-slate-400 text-sm mb-4">{skill.description}</p>
                  <div className="flex items-center gap-2 text-sm font-semibold text-emerald-400 mb-4">
                    <TrendingUp className="w-4 h-4" />
                    <span>{skill.result}</span>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {skill.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-slate-800 text-slate-300 text-xs font-medium rounded-md border border-slate-700"
                      >
                        {tag}
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
