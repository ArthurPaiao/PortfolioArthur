import { ArrowUp } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./BrandIcons";
import { profile } from "@/data/profile";

export default function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-6">
        <p className="text-subtle text-sm">
          © {new Date().getFullYear()} {profile.name}
        </p>
        <div className="flex items-center gap-2">
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="w-9 h-9 flex items-center justify-center rounded-full text-muted hover:text-fg hover:bg-surface-2 transition-colors"
            aria-label="GitHub"
          >
            <GithubIcon className="w-4 h-4" />
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            className="w-9 h-9 flex items-center justify-center rounded-full text-muted hover:text-fg hover:bg-surface-2 transition-colors"
            aria-label="LinkedIn"
          >
            <LinkedinIcon className="w-4 h-4" />
          </a>
          <a
            href="#inicio"
            className="ml-2 inline-flex items-center gap-1.5 px-3 h-9 rounded-full border border-line text-sm text-muted hover:text-fg hover:border-line-strong transition-colors"
          >
            Topo
            <ArrowUp className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
