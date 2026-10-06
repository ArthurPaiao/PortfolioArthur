"use client";

import { useEffect, useRef, useState, type MouseEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { htmlLang, localePath, type Locale } from "@/i18n/locales";
import { getDictionary } from "@/i18n/ui";
import ThemeToggle from "./ThemeToggle";

// Os ids das seções são os mesmos nos dois idiomas
const sectionIds = ["sobre", "hobbies", "experiencia", "projetos", "competencias", "certificacoes"] as const;

// Link para a mesma página no outro idioma (troca de root layout = recarga completa)
function LanguageSwitch({ locale, label }: { locale: Locale; label: string }) {
  const other: Locale = locale === "pt" ? "en" : "pt";
  return (
    <a
      href={localePath[other]}
      hrefLang={htmlLang[other]}
      lang={htmlLang[other]}
      aria-label={label}
      title={label}
      className="w-10 h-10 inline-flex items-center justify-center font-pixel text-sm uppercase text-muted hover:text-accent hover:bg-surface-2 transition-colors"
    >
      {other}
    </a>
  );
}

export default function Navbar({ locale }: { locale: Locale }) {
  const t = getDictionary(locale).nav;
  const links = sectionIds.map((id) => ({ href: `#${id}`, label: t.links[id] }));
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");
  const pendingHref = useRef<string | null>(null);

  // No menu mobile, fechar o painel no mesmo instante do clique cancelava a rolagem
  // suave do link. Agora o clique só fecha o menu e a rolagem acontece quando a
  // animação de saída termina (onExitComplete).
  function goTo(e: MouseEvent<HTMLAnchorElement>, href: string) {
    e.preventDefault();
    pendingHref.current = href;
    setOpen(false);
  }

  function scrollToPending() {
    const href = pendingHref.current;
    pendingHref.current = null;
    if (!href) return;
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    history.pushState(null, "", href);
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Destaca o link da seção visível no momento. Início e Contato também são observados
  // para que o destaque saia quando o usuário está neles.
  useEffect(() => {
    const sections = ["#inicio", ...sectionIds.map((id) => `#${id}`), "#contato"]
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
            <LanguageSwitch locale={locale} label={t.switchLanguage} />
            <ThemeToggle locale={locale} />
            <a href="#contato" className="pixel-btn ml-3 text-sm px-4 py-1.5">
              {t.contact}
            </a>
          </div>

          {/* Mobile */}
          <div className="lg:hidden flex items-center gap-1">
            <LanguageSwitch locale={locale} label={t.switchLanguage} />
            <ThemeToggle locale={locale} />
            <button
              onClick={() => setOpen((v) => !v)}
              className="w-10 h-10 inline-flex items-center justify-center text-fg hover:text-accent"
              aria-label={open ? t.closeMenu : t.openMenu}
              aria-expanded={open}
            >
              {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        <AnimatePresence onExitComplete={scrollToPending}>
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
                    onClick={(e) => goTo(e, link.href)}
                    className={`px-3 py-2.5 transition-colors ${
                      active === link.href ? "text-accent" : "text-muted hover:text-fg"
                    }`}
                  >
                    {active === link.href ? "▶ " : ""}
                    {link.label}
                  </a>
                ))}
                <a href="#contato" onClick={(e) => goTo(e, "#contato")} className="pixel-btn mt-3 mx-1">
                  {t.contact}
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
