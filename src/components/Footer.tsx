import { GithubIcon, LinkedinIcon } from "./BrandIcons";
import { profile } from "@/data/profile";

export default function Footer() {
  return (
    <footer className="py-10 border-t border-slate-900 bg-slate-950">
      <div className="max-w-6xl mx-auto px-6 flex flex-col items-center gap-4">
        <div className="flex gap-4">
          <a
            href={profile.github}
            target="_blank"
            className="w-10 h-10 flex items-center justify-center rounded-full bg-slate-900 border border-slate-800 text-slate-400 hover:text-emerald-400 hover:border-emerald-800 transition-colors"
            aria-label="GitHub"
          >
            <GithubIcon className="w-5 h-5" />
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            className="w-10 h-10 flex items-center justify-center rounded-full bg-slate-900 border border-slate-800 text-slate-400 hover:text-blue-400 hover:border-blue-800 transition-colors"
            aria-label="LinkedIn"
          >
            <LinkedinIcon className="w-5 h-5" />
          </a>
        </div>
        <p className="text-slate-500 text-sm">
          © {new Date().getFullYear()} {profile.name}
        </p>
      </div>
    </footer>
  );
}
