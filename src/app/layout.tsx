import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Jersey_10 } from "next/font/google";
import { profile } from "@/data/profile";
import MotionProvider from "@/components/MotionProvider";
import "./globals.css";

const geistSans = Geist({ subsets: ["latin"], variable: "--font-geist-sans" });
const geistMono = Geist_Mono({ subsets: ["latin"], variable: "--font-geist-mono" });
// Fonte pixelada para títulos, botões e interface; o texto corrido continua em Geist
const jersey = Jersey_10({ weight: "400", subsets: ["latin", "latin-ext"], variable: "--font-jersey" });

const title = "Arthur Gomes Paião | Desenvolvedor Full Stack";
const description =
  "Portfólio de Arthur Gomes Paião — Desenvolvedor Full Stack e estagiário de Engenharia de Software na Cielo. Java, Spring Boot, React, Next.js e TypeScript. Formação prevista para dez/2026.";

export const metadata: Metadata = {
  metadataBase: new URL(profile.siteUrl),
  title,
  description,
  applicationName: "Portfólio Arthur Paião",
  authors: [{ name: profile.name, url: profile.siteUrl }],
  creator: profile.name,
  keywords: [
    "Arthur Gomes Paião",
    "Arthur Paião",
    "Desenvolvedor Full Stack",
    "Engenharia de Software",
    "Java",
    "Spring Boot",
    "React",
    "Next.js",
    "TypeScript",
    "Portfólio",
    "São Paulo",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    title,
    description:
      "Desenvolvedor Full Stack e Engenheiro de Software. Java, Spring Boot, React, Next.js e TypeScript.",
    url: "/",
    siteName: "Arthur Paião",
    type: "profile",
    locale: "pt_BR",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description: "Desenvolvedor Full Stack e Engenheiro de Software.",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#eef3ff" },
    { media: "(prefers-color-scheme: dark)", color: "#120c24" },
  ],
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
      className={`${geistSans.variable} ${geistMono.variable} ${jersey.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="font-sans antialiased">
        <MotionProvider>{children}</MotionProvider>
      </body>
    </html>
  );
}
