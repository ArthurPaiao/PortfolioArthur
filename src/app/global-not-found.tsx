import type { Metadata } from "next";
import Link from "next/link";
import RootDocument from "@/components/RootDocument";

// Com um root layout por idioma não há layout único para compor o 404,
// então ele é uma página completa e bilíngue (ativado em next.config.ts).
export const metadata: Metadata = {
  title: "404 | Arthur Paião",
  robots: { index: false },
};

export default function GlobalNotFound() {
  return (
    <RootDocument locale="pt">
      <main className="min-h-screen flex items-center justify-center px-6">
        <div className="pixel-box max-w-md w-full p-8 text-center">
          <p className="font-pixel text-6xl text-accent [text-shadow:4px_4px_0_var(--shadow-hard)]">404</p>
          <p className="font-pixel text-xl text-fg mt-4">Fase não encontrada</p>
          <p lang="en" className="font-pixel text-base text-subtle">Level not found</p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/" className="pixel-btn">
              ▶ Voltar ao início
            </Link>
            <Link href="/en" lang="en" className="pixel-btn pixel-btn-ghost">
              Back to home
            </Link>
          </div>
        </div>
      </main>
    </RootDocument>
  );
}
