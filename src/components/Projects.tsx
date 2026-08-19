import { HeartPulse, Leaf, Bot, TrendingUp, LucideIcon } from "lucide-react";
import { projects } from "@/data/projects";
import Reveal from "./Reveal";

const iconMap: Record<string, LucideIcon> = { "heart-pulse": HeartPulse, leaf: Leaf, bot: Bot };
const colorMap: Record<string, string> = {
  "heart-pulse": "bg-red-900/30 text-red-400",
  leaf: "bg-green-900/30 text-green-400",
  bot: "bg-emerald-900/30 text-emerald-400",
};

export default function Projects() {
  return (
    <section id="projetos" className="py-24 bg-slate-900/50 border-t border-slate-900">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal className="mb-16">
          <span className="text-emerald-400 font-semibold tracking-wider text-sm uppercase">Projetos</span>
          <h2 className="text-4xl font-bold text-white mt-2">O que já construí</h2>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((proj, i) => {
            const Icon = iconMap[proj.icon];
            return (
              <Reveal key={proj.slug} delay={i * 0.1}>
                <div className="group bg-slate-950 rounded-2xl border border-slate-800 hover:-translate-y-1 hover:shadow-xl hover:shadow-emerald-950/40 transition-all duration-300 p-6 h-full flex flex-col">
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300 ${colorMap[proj.icon]}`}
                  >
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-emerald-400 transition-colors">
                    {proj.title}
                  </h3>
                  <p className="text-slate-400 text-sm mb-6 flex-grow">{proj.description}</p>
                  {proj.result && (
                    <div className="flex items-center gap-2 text-sm font-semibold text-emerald-400 mb-4">
                      <TrendingUp className="w-4 h-4" />
                      <span>{proj.result}</span>
                    </div>
                  )}
                  <div className="flex flex-wrap gap-2">
                    {proj.stack.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-slate-800 text-slate-300 text-xs font-medium rounded-md border border-slate-700"
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
