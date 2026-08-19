import { Award, GitBranch, Code, Coffee, Globe, Server, LucideIcon } from "lucide-react";
import { certifications } from "@/data/certifications";
import Reveal from "./Reveal";

const iconMap: Record<string, LucideIcon> = {
  award: Award,
  "git-branch": GitBranch,
  code: Code,
  coffee: Coffee,
  globe: Globe,
  server: Server,
};

export default function Certifications() {
  return (
    <section id="certificacoes" className="py-24 bg-slate-900/50 border-t border-slate-900">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal className="mb-16">
          <span className="text-emerald-400 font-semibold tracking-wider text-sm uppercase">Certificações</span>
          <h2 className="text-4xl font-bold text-white mt-2">Aprendizado contínuo</h2>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {certifications.map((cert, i) => {
            const Icon = iconMap[cert.icon];
            return (
              <Reveal key={cert.title} delay={(i % 3) * 0.06}>
                <div className="flex items-center gap-4 p-4 rounded-xl border border-slate-800 bg-slate-950 hover:border-emerald-900 hover:-translate-y-0.5 transition-all duration-300">
                  <div className="w-10 h-10 shrink-0 bg-emerald-950/50 rounded-lg flex items-center justify-center text-emerald-400">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-semibold text-white text-sm">{cert.title}</div>
                    <div className="text-slate-500 text-xs">{cert.issuer}</div>
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
