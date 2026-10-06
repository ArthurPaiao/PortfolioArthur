import { tr, type Locale } from "@/i18n/locales";
import { certifications } from "./certifications";
import { projects } from "./projects";

// Dados que não mudam com o idioma (links, nome, URL do site)
export const profile = {
  name: "Arthur Gomes Paião",
  email: "paiao2057@gmail.com",
  github: "https://github.com/ArthurPaiao",
  linkedin: "https://www.linkedin.com/in/arthurpaiao/",
  siteUrl: "https://arthurpaiao-dev.vercel.app",
  // Coloque a foto em /public (ex.: /public/profile.jpg) e troque null pelo caminho "/profile.jpg"
  photo: null as string | null,
};

const languages = [
  { name: { pt: "Português", en: "Portuguese" }, level: { pt: "Nativo", en: "Native" } },
  { name: { pt: "Espanhol", en: "Spanish" }, level: { pt: "Avançado", en: "Advanced" } },
  { name: { pt: "Inglês", en: "English" }, level: { pt: "Intermediário", en: "Intermediate" } },
];

const localized = {
  role: { pt: "Desenvolvedor Full Stack", en: "Full Stack Developer" },
  currentPosition: {
    pt: "Estagiário de Engenharia de Software na Cielo",
    en: "Software Engineering Intern at Cielo",
  },
  location: { pt: "São Paulo, SP", en: "São Paulo, Brazil" },
  summary: {
    pt: "Sou desenvolvedor full stack e estagiário na Cielo. Escrevo Java com Spring Boot no back-end e React com TypeScript no front, e me formo em Engenharia de Software em dezembro de 2026.",
    en: "I'm a full stack developer and an intern at Cielo. I write Java with Spring Boot on the back end and React with TypeScript on the front end, and I graduate in Software Engineering in December 2026.",
  },
  about: {
    pt: [
      "Estou no último ano de Engenharia de Software na São Judas e, desde setembro de 2026, sou estagiário de engenharia na Cielo. O time cuida de uma aplicação Java com Spring Boot, e meu trabalho lá vai de migrar o projeto do Java 21 para o 25 a apagar classes que ninguém usava mais, escrever testes e revisar o código dos colegas.",
      "Antes disso, passei dois anos em áreas de negócio da Cielo e um na Johnson & Johnson automatizando o que dava: planilhas no Excel, scripts em Python e SQL e um bot no Power Automate que tirou 10 horas por semana de trabalho manual do time. Foi ali que peguei o hábito de perguntar qual problema o código resolve antes de escrever a primeira linha, e de conferir depois se resolveu mesmo.",
    ],
    en: [
      "I'm in my final year of Software Engineering at São Judas, and since September 2026 I've been a software engineering intern at Cielo. The team maintains a Java application built with Spring Boot, and my work there ranges from migrating the project from Java 21 to 25 to deleting classes nobody used anymore, writing tests and reviewing my teammates' code.",
      "Before that, I spent two years on business teams at Cielo and one at Johnson & Johnson automating whatever I could: Excel spreadsheets, Python and SQL scripts, and a Power Automate bot that took 10 hours a week of manual work off the team. That's where I picked up the habit of asking what problem the code solves before writing the first line, and checking afterwards whether it actually did.",
    ],
  },
  education: {
    course: { pt: "Bacharelado em Engenharia de Software", en: "Bachelor's in Software Engineering" },
    school: "Universidade São Judas Tadeu (USJT)",
    period: { pt: "2023 — Dez/2026 (previsto)", en: "2023 — Dec 2026 (expected)" },
  },
  statLabels: {
    experience: { pt: "Anos de experiência", en: "Years of experience" },
    languages: { pt: "Idiomas", en: "Languages" },
    certifications: { pt: "Certificações", en: "Certifications" },
    projects: { pt: "Projetos", en: "Projects" },
  },
};

export function getProfile(locale: Locale) {
  const langs = languages.map((lang) => ({ name: tr(lang.name, locale), level: tr(lang.level, locale) }));
  const label = (key: keyof typeof localized.statLabels) => tr(localized.statLabels[key], locale);

  return {
    ...profile,
    role: tr(localized.role, locale),
    currentPosition: tr(localized.currentPosition, locale),
    location: tr(localized.location, locale),
    summary: tr(localized.summary, locale),
    about: tr(localized.about, locale),
    education: {
      course: tr(localized.education.course, locale),
      school: localized.education.school,
      period: tr(localized.education.period, locale),
    },
    languages: langs,
    lookingFor: ["Full Stack", "Back-end", "Front-end"],
    // Contagens derivadas das listas para não saírem de sincronia com o conteúdo
    stats: [
      { value: "2+", label: label("experience") },
      {
        value: String(langs.length),
        label: label("languages"),
        detail: langs.map((lang) => `${lang.name} (${lang.level.toLowerCase()})`).join(", "),
      },
      { value: String(certifications.length), label: label("certifications") },
      { value: String(projects.length), label: label("projects") },
    ] as { value: string; label: string; detail?: string }[],
  };
}
