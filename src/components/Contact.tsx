"use client";

import { useState, FormEvent } from "react";
import { Send, Check, Loader2 } from "lucide-react";
import Reveal from "./Reveal";

type Status = "idle" | "loading" | "success" | "error";

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
    <section id="contato" className="py-24 bg-slate-950 border-t border-slate-900">
      <div className="max-w-xl mx-auto px-6">
        <Reveal className="mb-12 text-center">
          <span className="text-emerald-400 font-semibold tracking-wider text-sm uppercase">Contato</span>
          <h2 className="text-4xl font-bold text-white mt-2">Vamos conversar?</h2>
          <p className="text-slate-400 mt-3">
            Aberto a oportunidades em Dados, Automação ou Desenvolvimento.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-1.5">
                Nome
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-800 text-white placeholder:text-slate-500 focus:border-emerald-600 outline-none transition-colors"
                placeholder="Seu nome"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-1.5">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-800 text-white placeholder:text-slate-500 focus:border-emerald-600 outline-none transition-colors"
                placeholder="seu@email.com"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-1.5">
                Mensagem
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-800 text-white placeholder:text-slate-500 focus:border-emerald-600 outline-none transition-colors resize-none"
                placeholder="Como posso ajudar?"
              />
            </div>

            <button
              type="submit"
              disabled={status === "loading"}
              className="w-full flex items-center justify-center gap-2 px-6 py-3.5 bg-white text-slate-950 rounded-xl font-semibold hover:bg-emerald-100 transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {status === "loading" && <Loader2 className="w-5 h-5 animate-spin" />}
              {status === "success" && <Check className="w-5 h-5" />}
              {status === "idle" && <Send className="w-5 h-5" />}
              {status === "error" && <Send className="w-5 h-5" />}
              {status === "success" ? "Mensagem enviada!" : "Enviar mensagem"}
            </button>

            {status === "error" && (
              <p className="text-red-400 text-sm text-center">
                Algo deu errado. Tenta de novo ou manda um email direto.
              </p>
            )}
          </form>
        </Reveal>
      </div>
    </section>
  );
}
