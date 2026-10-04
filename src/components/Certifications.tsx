import { Award, Code, Coffee, GitBranch, Globe, Server, LucideIcon } from "lucide-react";
import { certifications, type Certification } from "@/data/certifications";
import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";

const iconMap: Record<Certification["icon"], LucideIcon> = {
  award: Award,
  "git-branch": GitBranch,
  code: Code,
  coffee: Coffee,
  globe: Globe,
  server: Server,
};

export default function Certifications() {
  return (
    <section id="certificacoes" className="py-24 md:py-32 border-t border-line">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader index="05" eyebrow="Certificações" title="Aprendizado contínuo" />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {certifications.map((cert, i) => {
            const Icon = iconMap[cert.icon];
            return (
              <Reveal key={cert.title} delay={(i % 4) * 0.05}>
                <div className="group h-full flex flex-col gap-4 p-5 rounded-2xl border border-line bg-surface hover:border-line-strong transition-colors">
                  <div className="w-9 h-9 rounded-lg flex items-center justify-center bg-surface-2 text-muted group-hover:bg-accent-soft group-hover:text-accent transition-colors">
                    <Icon className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-medium text-fg text-sm leading-snug">{cert.title}</div>
                    <div className="text-subtle text-xs mt-1">{cert.issuer}</div>
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
