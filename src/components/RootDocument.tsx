import type { ReactNode } from "react";
import { Geist, Geist_Mono, Jersey_10 } from "next/font/google";
import { htmlLang, type Locale } from "@/i18n/locales";
import MotionProvider from "./MotionProvider";
import "@/app/globals.css";

const geistSans = Geist({ subsets: ["latin"], variable: "--font-geist-sans" });
const geistMono = Geist_Mono({ subsets: ["latin"], variable: "--font-geist-mono" });
// Fonte pixelada para títulos, botões e interface; o texto corrido continua em Geist
const jersey = Jersey_10({ weight: "400", subsets: ["latin", "latin-ext"], variable: "--font-jersey" });

// Roda antes da primeira pintura: aplica o tema salvo ou, sem escolha salva, o do sistema.
const themeScript = `(function(){try{var t=localStorage.getItem("theme");if(t!=="light"&&t!=="dark"){t=matchMedia("(prefers-color-scheme: light)").matches?"light":"dark"}document.documentElement.setAttribute("data-theme",t)}catch(e){}})()`;

// <html> e <body> compartilhados pelos root layouts de cada idioma
export default function RootDocument({ locale, children }: { locale: Locale; children: ReactNode }) {
  return (
    <html
      lang={htmlLang[locale]}
      data-theme="dark"
      className={`${geistSans.variable} ${geistMono.variable} ${jersey.variable}`}
      suppressHydrationWarning
    >
      {/* A regra só reconhece <head> dentro de app/; aqui ele é o documento raiz dos layouts */}
      {/* eslint-disable-next-line @next/next/no-head-element */}
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="font-sans antialiased">
        <MotionProvider>{children}</MotionProvider>
      </body>
    </html>
  );
}
