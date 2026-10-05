import Image from "next/image";
import { Briefcase, GraduationCap, Languages, MapPin } from "lucide-react";
import { profile } from "@/data/profile";
import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";
import PixelArt from "./pixel/PixelArt";
import { avatarIdle } from "./pixel/avatar";

function Portrait() {
  return (
    <div className="pixel-box p-3">
      <div
        className="relative aspect-[4/5] overflow-hidden flex items-end justify-center"
        style={{ backgroundImage: "linear-gradient(to bottom, var(--sky-top) 0 45%, var(--sky-bottom) 45% 100%)" }}
      >
        {profile.photo ? (
          <Image
            src={profile.photo}
            alt={`Foto de ${profile.name}`}
            fill
            sizes="(min-width: 1024px) 320px, 100vw"
            className="object-cover"
          />
        ) : (
          <>
            {/* Chão do retrato */}
            <div className="absolute inset-x-0 bottom-0 h-[18%]" style={{ backgroundColor: "var(--ground)" }}>
              <div className="h-2" style={{ backgroundColor: "var(--ground-top)" }} />
            </div>
            <PixelArt
              map={avatarIdle}
              scale={9}
              title={`Avatar em pixel art de ${profile.name}`}
              className="relative mb-[14%] w-auto h-[78%]"
            />
          </>
        )}
      </div>
      <div className="flex items-center justify-between gap-3 pt-3 px-1">
        <div className="min-w-0">
          <div className="font-pixel text-fg truncate">{profile.name}</div>
          <div className="flex items-center gap-1 text-xs text-subtle">
            <MapPin className="w-3 h-3" />
            {profile.location}
          </div>
        </div>
        <span className="font-pixel text-[11px] uppercase px-2 py-1 bg-accent-soft text-accent shrink-0">Disponível</span>
      </div>
    </div>
  );
}

export default function About() {
  const facts = [
    {
      icon: GraduationCap,
      label: "Formação",
      content: (
        <>
          <p className="text-fg font-medium">{profile.education.course}</p>
          <p className="text-muted">{profile.education.school}</p>
          <p className="text-subtle font-mono text-xs mt-1">{profile.education.period}</p>
        </>
      ),
    },
    {
      icon: Languages,
      label: "Idiomas",
      content: (
        <ul className="space-y-1">
          {profile.languages.map((lang) => (
            <li key={lang.name} className="flex justify-between gap-3">
              <span className="text-fg">{lang.name}</span>
              <span className="text-subtle">{lang.level}</span>
            </li>
          ))}
        </ul>
      ),
    },
    {
      icon: Briefcase,
      label: "Busco vagas de",
      content: (
        <div className="flex flex-wrap gap-2">
          {profile.lookingFor.map((area) => (
            <span key={area} className="font-pixel px-2.5 py-1 bg-accent-soft text-accent text-xs">
              {area}
            </span>
          ))}
        </div>
      ),
    },
  ];

  return (
    <section id="sobre" className="py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader index="01" eyebrow="Sobre" flavor="ficha do personagem" title="Quem está por trás do código" />

        <div className="grid lg:grid-cols-[300px_1fr] gap-10 lg:gap-14 items-start">
          <Reveal className="max-w-[260px] sm:max-w-[300px] w-full mx-auto lg:mx-0">
            <Portrait />
          </Reveal>

          <div>
            <Reveal delay={0.05}>
              <div className="font-pixel text-sm text-accent-2 mb-4">
                Classe: <span className="text-fg">{profile.role}</span>
              </div>
              <div className="space-y-5">
                {profile.about.map((paragraph, i) => (
                  <p
                    key={i}
                    className={`leading-relaxed ${i === 0 ? "text-lg md:text-xl text-fg" : "text-base md:text-lg text-muted"}`}
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </Reveal>

            <div className="grid sm:grid-cols-3 gap-5 mt-10">
              {facts.map(({ icon: Icon, label, content }, i) => (
                <Reveal key={label} delay={0.1 + i * 0.06}>
                  <div className="pixel-box h-full p-5 text-sm">
                    <div className="flex items-center gap-2 font-pixel text-xs uppercase tracking-wider text-accent mb-3">
                      <Icon className="w-3.5 h-3.5" />
                      {label}
                    </div>
                    {content}
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
