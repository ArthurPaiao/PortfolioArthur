import { GithubIcon, LinkedinIcon } from "./BrandIcons";
import { profile } from "@/data/profile";
import type { Locale } from "@/i18n/locales";
import { getDictionary } from "@/i18n/ui";
import PixelArt from "./pixel/PixelArt";
import { heart } from "./pixel/icons";

export default function Footer({ locale }: { locale: Locale }) {
  const t = getDictionary(locale).footer;

  return (
    <footer className="relative mt-8">
      {/* Faixa de chão em pixel fechando a página, como o fim de uma fase */}
      <div aria-hidden className="h-3" style={{ backgroundColor: "var(--ground-top)" }} />
      <div aria-hidden className="h-1" style={{ backgroundColor: "var(--ground-edge)" }} />
      <div style={{ backgroundColor: "var(--ground)" }} className="text-[#f5eeff]">
        <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-center sm:text-left">
            <p className="font-pixel text-sm flex items-center gap-2 justify-center sm:justify-start">
              {t.thanks} <PixelArt map={heart} scale={2} />
            </p>
            <p className="text-xs opacity-75 mt-1">
              © {new Date().getFullYear()} {profile.name}
            </p>
          </div>
          <div className="flex items-center gap-4">
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="w-10 h-10 flex items-center justify-center bg-black/20 hover:bg-black/35 transition-colors"
              aria-label="GitHub"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="w-10 h-10 flex items-center justify-center bg-black/20 hover:bg-black/35 transition-colors"
              aria-label="LinkedIn"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
            <a href="#inicio" className="font-pixel text-sm px-3 h-10 inline-flex items-center bg-black/20 hover:bg-black/35 transition-colors">
              {t.backToTop}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
