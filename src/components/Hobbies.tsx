import type { ReactNode } from "react";
import { animes, games, nextQuest, type Hobby, type HobbyIcon } from "@/data/personal";
import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";
import PixelArt, { type PixelMap } from "./pixel/PixelArt";
import { chest, crosshair, cursedFlame, gamepad, katana, levelUp, scroll, strawHat, sword } from "./pixel/icons";

const iconMap: Record<HobbyIcon, PixelMap> = { crosshair, sword, katana, cursedFlame, strawHat, levelUp };

function Panel({ icon, title, children, className = "" }: { icon: PixelMap; title: string; children: ReactNode; className?: string }) {
  return (
    <div className={`pixel-box p-5 sm:p-6 h-full ${className}`}>
      <div className="flex items-center gap-3 mb-5">
        <PixelArt map={icon} scale={3} />
        <h3 className="font-pixel text-xl text-fg">{title}</h3>
      </div>
      {children}
    </div>
  );
}

// Item no estilo slot de inventário: ícone num quadrado + nome + nota
function HobbyItem({ hobby }: { hobby: Hobby }) {
  return (
    <li className="group flex items-center gap-4">
      <div className="pixel-box shrink-0 w-14 h-14 flex items-center justify-center bg-surface-2 transition-transform duration-150 group-hover:-translate-y-0.5">
        <PixelArt map={iconMap[hobby.icon]} scale={3} />
      </div>
      <div className="min-w-0">
        <div className="font-pixel text-fg">{hobby.name}</div>
        <div className="text-sm text-subtle">{hobby.note}</div>
      </div>
    </li>
  );
}

export default function Hobbies() {
  return (
    <section id="hobbies" className="py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader
          index="02"
          eyebrow="Fora do código"
          flavor="side quests"
          title="Quando não estou programando"
          description="Jogos e animes são parte de quem eu sou e de onde vem boa parte da minha vontade de criar."
        />

        <div className="grid lg:grid-cols-[1fr_1.35fr] gap-8">
          <Reveal>
            <Panel icon={gamepad} title="Jogando">
              <ul className="space-y-6">
                {games.map((g) => (
                  <HobbyItem key={g.name} hobby={g} />
                ))}
              </ul>
            </Panel>
          </Reveal>

          <Reveal delay={0.05}>
            <Panel icon={scroll} title="Assistindo">
              <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-6">
                {animes.map((a) => (
                  <HobbyItem key={a.name} hobby={a} />
                ))}
              </ul>
            </Panel>
          </Reveal>

          {/* Missão futura ocupa a linha inteira */}
          <Reveal delay={0.1} className="lg:col-span-2">
            <div
              className="pixel-box p-5 sm:p-6 grid md:grid-cols-[auto_1fr_220px] gap-5 md:gap-8 items-center"
              style={{ ["--pb" as string]: "var(--gold)" }}
            >
              <div className="w-16 h-16 flex items-center justify-center bg-surface-2">
                <PixelArt map={chest} scale={4} />
              </div>
              <div>
                <div className="font-pixel text-xs uppercase tracking-widest text-gold mb-1">Próxima fase</div>
                <h3 className="font-pixel text-2xl text-fg">{nextQuest.title}</h3>
                <p className="text-sm text-muted leading-relaxed mt-1">{nextQuest.description}</p>
              </div>
              <div>
                <div className="font-pixel text-xs uppercase text-subtle mb-2 md:text-right">{nextQuest.status}</div>
                {/* Barra de progresso em segmentos, ainda no começo */}
                <div className="flex gap-1" aria-hidden>
                  {Array.from({ length: 10 }, (_, i) => (
                    <span key={i} className={`h-3 flex-1 ${i < 1 ? "bg-gold" : "bg-surface-2"}`} />
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
