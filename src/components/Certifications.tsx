import { certifications } from "@/data/certifications";
import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";
import PixelArt from "./pixel/PixelArt";
import { trophy } from "./pixel/icons";

export default function Certifications() {
  return (
    <section id="certificacoes" className="py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader
          index="06"
          eyebrow="Certificações"
          flavor="conquistas desbloqueadas"
          title="Aprendizado contínuo"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {certifications.map((cert, i) => (
            <Reveal key={cert.title} delay={(i % 4) * 0.05}>
              {/* Cartão no estilo "conquista desbloqueada" */}
              <div className="pixel-box pixel-card group h-full flex items-start gap-4 p-4">
                <div className="shrink-0 w-12 h-12 flex items-center justify-center bg-surface-2 transition-transform duration-150 group-hover:-translate-y-0.5">
                  <PixelArt map={trophy} scale={3} />
                </div>
                <div className="min-w-0">
                  <div className="font-pixel text-[10px] uppercase tracking-widest text-gold">Conquista</div>
                  <div className="font-pixel text-fg text-sm leading-snug mt-0.5">{cert.title}</div>
                  <div className="text-subtle text-xs mt-1">{cert.issuer}</div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
