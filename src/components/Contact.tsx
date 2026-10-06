"use client";

import { useState, FormEvent } from "react";
import { ArrowUpRight, Check, Loader2, Mail, MapPin, Send } from "lucide-react";
import { profile } from "@/data/profile";
import { GithubIcon, LinkedinIcon } from "./BrandIcons";
import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";

type Status = "idle" | "loading" | "success" | "error";

const channels = [
  { href: `mailto:${profile.email}`, label: "Email", value: profile.email, icon: Mail, external: false },
  { href: profile.linkedin, label: "LinkedIn", value: "Arthur Paião", icon: LinkedinIcon, external: true },
  {
    href: profile.github,
    label: "GitHub",
    value: profile.github.replace(/^https?:\/\/(www\.)?github\.com\//, "@"),
    icon: GithubIcon,
    external: true,
  },
];

const inputClass = "pixel-input";

export default function Contact() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch("https://formspree.io/f/xnjbpzaz", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contato" className="py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader
          index="07"
          eyebrow="Contato"
          flavor="ponto de save"
          title="Vamos conversar?"
          description="Aberto a oportunidades como Desenvolvedor Full Stack, Back-end ou Front-end."
        />

        <div className="grid lg:grid-cols-[1fr_1.3fr] gap-8">
          <Reveal className="flex flex-col gap-6">
            {channels.map(({ href, label, value, icon: Icon, external }) => (
              <a
                key={label}
                href={href}
                target={external ? "_blank" : undefined}
                rel={external ? "noreferrer" : undefined}
                className="pixel-box pixel-card group flex items-center gap-4 p-4"
              >
                <div className="w-10 h-10 flex items-center justify-center bg-surface-2 text-muted group-hover:bg-accent-soft group-hover:text-accent transition-colors">
                  <Icon className="w-[18px] h-[18px]" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="font-pixel text-xs uppercase tracking-wider text-subtle">{label}</div>
                  <div className="text-fg font-medium truncate">{value}</div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-subtle group-hover:text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </a>
            ))}
            <div className="flex items-center gap-2 px-1 py-2 font-pixel text-sm text-subtle">
              <MapPin className="w-4 h-4" />
              {profile.location}
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <form onSubmit={handleSubmit} className="pixel-box p-6 md:p-8 space-y-5">
              {/* Honeypot do Formspree: invisível para pessoas, bots que preenchem tudo são descartados */}
              <input
                type="text"
                name="_gotcha"
                tabIndex={-1}
                autoComplete="off"
                aria-hidden
                className="hidden"
              />
              <div className="flex items-center gap-3 pb-1">
                <span className="w-3 h-3 bg-gold animate-twinkle" />
                <span className="font-pixel text-sm uppercase tracking-widest text-gold">Salvar progresso</span>
              </div>
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="block font-pixel text-sm text-fg mb-2">
                    Nome
                  </label>
                  <input id="name" name="name" type="text" required className={inputClass} placeholder="Seu nome" />
                </div>
                <div>
                  <label htmlFor="email" className="block font-pixel text-sm text-fg mb-2">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className={inputClass}
                    placeholder="seu@email.com"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="message" className="block font-pixel text-sm text-fg mb-2">
                  Mensagem
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  className={`${inputClass} resize-none`}
                  placeholder="Como posso ajudar?"
                />
              </div>

              <button
                type="submit"
                disabled={status === "loading"}
                className="pixel-btn w-full disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {status === "loading" && <Loader2 className="w-4 h-4 animate-spin" />}
                {status === "success" && <Check className="w-4 h-4" />}
                {(status === "idle" || status === "error") && <Send className="w-4 h-4" />}
                {status === "success" ? "Progresso salvo! Mensagem enviada." : "Enviar mensagem"}
              </button>

              <p aria-live="polite" className="text-sm text-center min-h-5">
                {status === "error" && (
                  <span className="text-danger">Algo deu errado. Tenta de novo ou manda um email direto.</span>
                )}
              </p>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
