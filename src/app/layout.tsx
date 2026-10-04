import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({ subsets: ["latin"], variable: "--font-geist-sans" });
const geistMono = Geist_Mono({ subsets: ["latin"], variable: "--font-geist-mono" });

export const metadata: Metadata = {
  title: "Arthur Gomes Paião | Desenvolvedor Full Stack",
  description:
    "Portfólio de Arthur Gomes Paião — Desenvolvedor Full Stack e estagiário de Engenharia de Software na Cielo. Java, Spring Boot, React, Next.js e TypeScript. Formação prevista para dez/2026.",
  openGraph: {
    title: "Arthur Gomes Paião | Desenvolvedor Full Stack",
    description:
      "Desenvolvedor Full Stack e Engenheiro de Software. Java, Spring Boot, React, Next.js e TypeScript.",
    type: "website",
    locale: "pt_BR",
  },
  twitter: {
    card: "summary_large_image",
    title: "Arthur Gomes Paião | Desenvolvedor Full Stack",
    description: "Desenvolvedor Full Stack e Engenheiro de Software.",
  },
};

// Roda antes da primeira pintura: aplica o tema salvo ou, sem escolha salva, o do sistema.
const themeScript = `(function(){try{var t=localStorage.getItem("theme");if(t!=="light"&&t!=="dark"){t=matchMedia("(prefers-color-scheme: light)").matches?"light":"dark"}document.documentElement.setAttribute("data-theme",t)}catch(e){}})()`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      data-theme="dark"
      className={`${geistSans.variable} ${geistMono.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
