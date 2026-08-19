import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Arthur Gomes Paião | Portfólio",
  description:
    "Portfólio de Arthur Gomes Paião — Engenheiro de Software focado em Dados, Automação e Desenvolvimento. Estagiário na Cielo, formação prevista para dez/2026.",
  openGraph: {
    title: "Arthur Gomes Paião | Portfólio",
    description:
      "Engenheiro de Software focado em Dados, Automação e Desenvolvimento. Estagiário na Cielo.",
    type: "website",
    locale: "pt_BR",
  },
  twitter: {
    card: "summary_large_image",
    title: "Arthur Gomes Paião | Portfólio",
    description: "Engenheiro de Software focado em Dados, Automação e Desenvolvimento.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="dark">
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
