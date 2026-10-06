import type { Metadata, Viewport } from "next";
import { getProfile, profile } from "@/data/profile";
import { htmlLang, localePath, locales, ogLocale, type Locale } from "./locales";
import { getDictionary } from "./ui";

// Cada idioma aponta para a versão alternativa (hreflang), com o português como padrão
const languageAlternates = {
  ...Object.fromEntries(locales.map((l) => [htmlLang[l], localePath[l]])),
  "x-default": localePath.pt,
};

export function buildMetadata(locale: Locale): Metadata {
  const t = getDictionary(locale).meta;
  const { role } = getProfile(locale);

  return {
    metadataBase: new URL(profile.siteUrl),
    title: t.title,
    description: t.description,
    applicationName: t.applicationName,
    authors: [{ name: profile.name, url: profile.siteUrl }],
    creator: profile.name,
    keywords: [
      profile.name,
      "Arthur Paião",
      role,
      ...t.keywords,
      "Java",
      "Spring Boot",
      "React",
      "Next.js",
      "TypeScript",
    ],
    alternates: { canonical: localePath[locale], languages: languageAlternates },
    openGraph: {
      title: t.title,
      description: t.ogDescription,
      url: localePath[locale],
      siteName: "Arthur Paião",
      type: "profile",
      locale: ogLocale[locale],
      alternateLocale: locales.filter((l) => l !== locale).map((l) => ogLocale[l]),
    },
    twitter: {
      card: "summary_large_image",
      title: t.title,
      description: t.twitterDescription,
    },
    robots: { index: true, follow: true },
  };
}

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#eef3ff" },
    { media: "(prefers-color-scheme: dark)", color: "#120c24" },
  ],
};
