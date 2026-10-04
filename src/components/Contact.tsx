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

const inputClass =
  "w-full px-4 py-3 rounded-xl bg-bg border border-line text-fg placeholder:text-subtle focus:border-accent outline-none transition-colors";

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
    <section id="contato" className="py-24 md:py-32 border-t border-line">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader
          index="05"
          eyebrow="Contato"
          title="Vamos conversar?"
          description="Aberto a oportunidades como Desenvolvedor Full Stack, Back-end ou Front-end."
        />

        <div className="grid lg:grid-cols-[1fr_1.3fr] gap-6">
          <Reveal className="flex flex-col gap-3">
            {channels.map(({ href, label, value, icon: Icon, external }) => (
              <a
                key={label}
                href={href}
                target={external ? "_blank" : undefined}
                rel={external ? "noreferrer" : undefined}
                className="group flex items-center gap-4 p-5 rounded-2xl border border-line bg-surface hover:border-accent transition-colors"
              >
                <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-surface-2 text-muted group-hover:bg-accent-soft group-hover:text-accent transition-colors">
                  <Icon className="w-[18px] h-[18px]" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="text-xs text-subtle">{label}</div>
                  <div className="text-fg font-medium truncate">{value}</div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-subtle group-hover:text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </a>
            ))}
            <div className="flex items-center gap-2 px-5 py-4 text-sm text-subtle">
              <MapPin className="w-4 h-4" />
              {profile.location}
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <form onSubmit={handleSubmit} className="p-6 md:p-8 rounded-2xl border border-line bg-surface space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-fg mb-1.5">
                    Nome
                  </label>
                  <input id="name" name="name" type="text" required className={inputClass} placeholder="Seu nome" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-fg mb-1.5">
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
                <label htmlFor="message" className="block text-sm font-medium text-fg mb-1.5">
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
                className="w-full flex items-center justify-center gap-2 px-6 py-3.5 bg-fg text-bg rounded-xl font-medium hover:opacity-85 transition-opacity disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {status === "loading" && <Loader2 className="w-4 h-4 animate-spin" />}
                {status === "success" && <Check className="w-4 h-4" />}
                {(status === "idle" || status === "error") && <Send className="w-4 h-4" />}
                {status === "success" ? "Mensagem enviada!" : "Enviar mensagem"}
              </button>

              <p aria-live="polite" className="text-sm text-center min-h-5">
                {status === "error" && (
                  <span className="text-red-500">Algo deu errado. Tenta de novo ou manda um email direto.</span>
                )}
              </p>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
