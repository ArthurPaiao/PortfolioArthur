// Idiomas do site: português em "/" (padrão) e inglês em "/en".

export const locales = ["pt", "en"] as const;
export type Locale = (typeof locales)[number];

/** Valor com uma versão por idioma. */
export type Localized<T = string> = Record<Locale, T>;

export const localePath: Record<Locale, string> = { pt: "/", en: "/en" };
export const htmlLang: Record<Locale, string> = { pt: "pt-BR", en: "en" };
export const ogLocale: Record<Locale, string> = { pt: "pt_BR", en: "en_US" };

function isLocalized<T>(value: T | Localized<T>): value is Localized<T> {
  return typeof value === "object" && value !== null && !Array.isArray(value) && "pt" in value && "en" in value;
}

/** Resolve um campo que pode ser comum aos dois idiomas ou ter uma versão por idioma. */
export function tr<T>(value: T | Localized<T>, locale: Locale): T {
  return isLocalized(value) ? value[locale] : value;
}
