import type { MetadataRoute } from "next";
import { profile } from "@/data/profile";
import { htmlLang, localePath, locales } from "@/i18n/locales";

// Uma entrada por idioma, cada uma apontando para as versões alternativas
export default function sitemap(): MetadataRoute.Sitemap {
  const url = (path: string) => new URL(path, profile.siteUrl).href;
  const languages = Object.fromEntries(locales.map((l) => [htmlLang[l], url(localePath[l])]));

  return locales.map((locale) => ({
    url: url(localePath[locale]),
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: locale === "pt" ? 1 : 0.9,
    alternates: { languages },
  }));
}
