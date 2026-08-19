"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const links = [
  { href: "#hero", label: "Início" },
  { href: "#sobre", label: "Sobre" },
  { href: "#skills", label: "Competências" },
  { href: "#projetos", label: "Projetos" },
  { href: "#experiencia", label: "Experiência" },
  { href: "#certificacoes", label: "Certificações" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800">
      <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
        <a
          href="#hero"
          className="text-lg font-bold tracking-tight hover:text-emerald-400 transition-colors"
        >
          Portfólio <span className="text-emerald-500">|</span> Arthur Paião
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-1 text-sm font-medium text-slate-300">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="px-4 py-2 rounded-full transition-colors hover:bg-slate-800 hover:text-emerald-400"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contato"
            className="ml-2 bg-white text-slate-950 px-5 py-2 rounded-full font-semibold hover:bg-emerald-100 transition-colors"
          >
            Contato
          </a>
        </div>

        {/* Mobile trigger */}
        <button
          onClick={() => setOpen((v) => !v)}
          className="md:hidden p-2 -mr-2 text-slate-200"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile panel */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="md:hidden overflow-hidden border-t border-slate-800 bg-slate-950"
          >
            <div className="flex flex-col px-6 py-4 gap-1">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="px-4 py-3 rounded-lg text-slate-200 hover:bg-slate-800 hover:text-emerald-400 transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contato"
                onClick={() => setOpen(false)}
                className="mt-2 text-center bg-white text-slate-950 px-6 py-3 rounded-lg font-semibold"
              >
                Contato
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
