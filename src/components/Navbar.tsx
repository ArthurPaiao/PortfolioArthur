"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

const links = [
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
        className={`w-full max-w-4xl rounded-2xl border transition-all duration-300 ${
          scrolled || open
            ? "bg-surface/80 border-line backdrop-blur-xl shadow-lg shadow-black/5"
            : "bg-transparent border-transparent"
        }`}
      >
        <div className="h-14 pl-5 pr-2 flex items-center justify-between">
          <a href="#inicio" className="font-semibold tracking-tight text-fg">
            arthur<span className="text-accent">.</span>paião
          </a>

          {/* Desktop */}
          <div className="hidden md:flex items-center gap-1 text-sm">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`relative px-3.5 py-2 rounded-full transition-colors ${
                  active === link.href ? "text-fg" : "text-muted hover:text-fg"
                }`}
              >
                {active === link.href && (
                  <motion.span
                    layoutId="nav-active"
                    className="absolute inset-0 rounded-full bg-surface-2 border border-line"
                    transition={{ type: "spring", stiffness: 380, damping: 32 }}
                  />
                )}
                <span className="relative">{link.label}</span>
              </a>
            ))}
            <ThemeToggle className="ml-1" />
            <a
              href="#contato"
              className="ml-1 bg-fg text-bg px-4 py-2 rounded-full font-medium hover:opacity-85 transition-opacity"
            >
              Contato
            </a>
          </div>

          {/* Mobile */}
          <div className="md:hidden flex items-center gap-1">
            <ThemeToggle />
            <button
              onClick={() => setOpen((v) => !v)}
              className="w-9 h-9 inline-flex items-center justify-center rounded-full text-fg hover:bg-surface-2"
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
              transition={{ duration: 0.25, ease: "easeInOut" }}
              className="md:hidden overflow-hidden"
            >
              <div className="flex flex-col px-3 pb-3 gap-1 border-t border-line pt-3">
                {links.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="px-3 py-2.5 rounded-lg text-muted hover:text-fg hover:bg-surface-2 transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
                <a
                  href="#contato"
                  onClick={() => setOpen(false)}
                  className="mt-1 text-center bg-fg text-bg px-4 py-2.5 rounded-lg font-medium"
                >
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
