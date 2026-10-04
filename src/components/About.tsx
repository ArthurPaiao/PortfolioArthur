import Image from "next/image";
import { Briefcase, GraduationCap, Languages, MapPin } from "lucide-react";
import { profile } from "@/data/profile";
import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";

const initials = profile.name
  .split(" ")
  .filter((_, i, arr) => i === 0 || i === arr.length - 1)
  .map((part) => part[0])
  .join("");

function Portrait() {
  return (
    <div className="group relative aspect-[4/5] rounded-2xl overflow-hidden border border-line bg-surface">
      {profile.photo ? (
        <Image
          src={profile.photo}
          alt={`Foto de ${profile.name}`}
          fill
          sizes="(min-width: 1024px) 320px, 100vw"
          className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
          priority={false}
        />
      ) : (
        // Sem foto: monograma sobre a mesma grade do hero
        <div
          className="absolute inset-0 flex items-center justify-center"
          style={{
            backgroundImage:
              "linear-gradient(to right, var(--line) 1px, transparent 1px), linear-gradient(to bottom, var(--line) 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        >
          <div
            aria-hidden
            className="absolute w-56 h-56 rounded-full blur-3xl"
            style={{ background: "var(--glow)" }}
          />
          <span className="relative text-8xl font-semibold tracking-tighter bg-gradient-to-br from-accent to-teal-600 bg-clip-text text-transparent">
            {initials}
          </span>
        </div>
      )}
      <div className="absolute inset-x-3 bottom-3 flex items-center justify-between gap-2 rounded-xl border border-line bg-surface/80 backdrop-blur px-3 py-2.5">
        <div className="min-w-0">
          <div className="text-sm font-medium text-fg truncate">{profile.name}</div>
          <div className="flex items-center gap-1 text-xs text-subtle">
            <MapPin className="w-3 h-3" />
            {profile.location}
          </div>
        </div>
        <span className="relative flex h-2.5 w-2.5 shrink-0" title="Disponível para oportunidades">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-accent" />
        </span>
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
        <div className="flex flex-wrap gap-1.5">
          {profile.lookingFor.map((area) => (
            <span key={area} className="px-2.5 py-1 rounded-md bg-accent-soft text-accent text-xs font-medium">
              {area}
            </span>
          ))}
        </div>
      ),
    },
  ];

  return (
    <section id="sobre" className="py-24 md:py-32 border-t border-line">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader index="01" eyebrow="Sobre" title="Quem está por trás do código" />

        <div className="grid lg:grid-cols-[320px_1fr] gap-8 lg:gap-14 items-start">
          <Reveal className="max-w-[260px] sm:max-w-sm w-full mx-auto lg:mx-0">
            <Portrait />
          </Reveal>

          <div>
            <Reveal delay={0.05} className="space-y-5">
              {profile.about.map((paragraph, i) => (
                <p
                  key={i}
                  className={`leading-relaxed ${i === 0 ? "text-lg md:text-xl text-fg" : "text-base md:text-lg text-muted"}`}
                >
                  {paragraph}
                </p>
              ))}
            </Reveal>

            <div className="grid sm:grid-cols-3 gap-3 mt-10">
              {facts.map(({ icon: Icon, label, content }, i) => (
                <Reveal key={label} delay={0.1 + i * 0.06}>
                  <div className="h-full p-5 rounded-2xl border border-line bg-surface text-sm">
                    <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-accent mb-3">
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
