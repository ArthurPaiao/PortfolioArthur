"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

const links = [
  { href: "#sobre", label: "Sobre" },
  { href: "#experiencia", label: "Experiência" },
  { href: "#projetos", label: "Projetos" },
  { href: "#competencias", label: "Competências" },
  { href: "#certificacoes", label: "Certificações" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Destaca o link da seção visível no momento. Início e Contato também são observados
  // para que o destaque saia quando o usuário está neles.
  useEffect(() => {
    const sections = ["#inicio", ...links.map((l) => l.href), "#contato"]
      .map((href) => document.querySelector(href))
      .filter((el): el is Element => el !== null);
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(`#${entry.target.id}`);
        }
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <header className="fixed top-0 inset-x-0 z-50 flex justify-center px-4 pt-4">
      <nav
        className={`w-full max-w-5xl transition-[background-color,box-shadow] duration-200 ${
          scrolled || open ? "pixel-box bg-surface/90 backdrop-blur" : "bg-transparent"
        }`}
      >
        <div className="h-14 pl-4 pr-2 flex items-center justify-between">
          <a href="#inicio" className="font-pixel text-lg text-fg [text-shadow:2px_2px_0_var(--shadow-hard)]">
            arthur<span className="text-accent">.</span>paião
          </a>

          {/* Desktop: itens de menu com cursor ▶ na seção ativa */}
          <div className="hidden lg:flex items-center gap-0.5 font-pixel text-sm">
            {links.map((link) => {
              const isActive = active === link.href;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  className={`group relative flex items-center px-2.5 py-2 transition-colors ${
                    isActive ? "text-accent" : "text-muted hover:text-fg"
                  }`}
                >
                  <span
                    aria-hidden
                    className={`mr-1 text-[10px] transition-opacity ${isActive ? "opacity-100" : "opacity-0 group-hover:opacity-60"}`}
                  >
                    ▶
                  </span>
                  {link.label}
                </a>
              );
            })}
            <ThemeToggle className="ml-1" />
            <a href="#contato" className="pixel-btn ml-3 text-sm px-4 py-1.5">
              Contato
            </a>
          </div>

          {/* Mobile */}
          <div className="lg:hidden flex items-center gap-1">
            <ThemeToggle />
            <button
              onClick={() => setOpen((v) => !v)}
              className="w-10 h-10 inline-flex items-center justify-center text-fg hover:text-accent"
              aria-label={open ? "Fechar menu" : "Abrir menu"}
              aria-expanded={open}
            >
              {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.2, ease: "easeInOut" }}
              className="lg:hidden overflow-hidden"
            >
              <div className="flex flex-col px-3 pb-4 gap-1 border-t-4 border-dotted border-line pt-3 font-pixel">
                {links.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className={`px-3 py-2.5 transition-colors ${
                      active === link.href ? "text-accent" : "text-muted hover:text-fg"
                    }`}
                  >
                    {active === link.href ? "▶ " : ""}
                    {link.label}
                  </a>
                ))}
                <a href="#contato" onClick={() => setOpen(false)} className="pixel-btn mt-3 mx-1">
                  Contato
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
