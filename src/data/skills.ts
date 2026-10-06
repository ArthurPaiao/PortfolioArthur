import { tr, type Locale, type Localized } from "@/i18n/locales";

export type SkillGroup = {
  title: string;
  icon: "code" | "monitor" | "server" | "database" | "git-branch";
  items: string[];
};

export type SkillHighlight = {
  title: string;
  description: string;
  result: string;
  tags: string[];
  icon: "server" | "monitor" | "zap" | "database";
};

// Nomes de tecnologia ficam iguais; só termos em português ganham tradução
type Item = string | Localized;

const skillGroupData: { title: string | Localized; icon: SkillGroup["icon"]; items: Item[] }[] = [
  {
    title: { pt: "Linguagens", en: "Languages" },
    icon: "code",
    items: ["Java", "TypeScript", "JavaScript", "Python", "SQL"],
  },
  {
    title: "Front-end",
    icon: "monitor",
    items: ["React", "Next.js", "Vite", "Material UI", "Tailwind CSS", "Framer Motion", "HTML", "CSS"],
  },
  {
    title: "Back-end",
    icon: "server",
    items: [
      "Spring Boot",
      "JPA/Hibernate",
      "Node.js",
      "Fastify",
      "Zod",
      { pt: "APIs REST", en: "REST APIs" },
      "JWT",
      "OAuth2",
    ],
  },
  {
    title: { pt: "Banco de Dados & Cloud", en: "Databases & Cloud" },
    icon: "database",
    items: ["PostgreSQL", "SQL Server", "Flyway", "Docker", "AWS (Athena)", "Databricks"],
  },
  {
    title: { pt: "Engenharia & Práticas", en: "Engineering & Practices" },
    icon: "git-branch",
    items: [
      "Git/GitHub",
      "Code Review",
      { pt: "Refatoração", en: "Refactoring" },
      { pt: "Testes automatizados", en: "Automated testing" },
      "JUnit",
      "Testcontainers",
      "Vitest",
      { pt: "POO", en: "OOP" },
      "Design Patterns",
      { pt: "Arquitetura de Software", en: "Software Architecture" },
      "Scrum",
    ],
  },
];

const skillHighlightData: (Omit<SkillHighlight, "title" | "description" | "result"> & {
  title: string | Localized;
  description: Localized;
  result: Localized;
})[] = [
  {
    title: "Back-end & APIs",
    description: {
      pt: "APIs REST com Spring Boot e JPA, autenticação via JWT/OAuth2 e aplicações containerizadas com Docker.",
      en: "REST APIs with Spring Boot and JPA, JWT/OAuth2 authentication and containerized applications with Docker.",
    },
    result: {
      pt: "Arquitetura em camadas e orientação a objetos",
      en: "Layered architecture and object-oriented design",
    },
    tags: ["Java", "Spring Boot", "Docker"],
    icon: "server",
  },
  {
    title: { pt: "Front-end Moderno", en: "Modern Front-end" },
    description: {
      pt: "Interfaces responsivas, acessíveis e animadas com React, Next.js, TypeScript e Tailwind CSS.",
      en: "Responsive, accessible and animated interfaces with React, Next.js, TypeScript and Tailwind CSS.",
    },
    result: { pt: "Este portfólio: Next.js 16 + TypeScript", en: "This portfolio: Next.js 16 + TypeScript" },
    tags: ["React", "Next.js", "TypeScript"],
    icon: "monitor",
  },
  {
    title: { pt: "Automação & Scripts", en: "Automation & Scripts" },
    description: {
      pt: "Scripts e integrações que eliminam trabalho manual e conectam sistemas.",
      en: "Scripts and integrations that eliminate manual work and connect systems.",
    },
    result: {
      pt: "-40% no tempo de elaboração de materiais (Cielo)",
      en: "-40% time to produce materials (Cielo)",
    },
    tags: ["Python", "SQL"],
    icon: "zap",
  },
  {
    title: { pt: "Dados & Integrações", en: "Data & Integrations" },
    description: {
      pt: "Modelagem e consultas SQL, migração de bases para Databricks e extração via AWS, integrando back-end e análise.",
      en: "SQL modeling and queries, database migration to Databricks and extraction via AWS, bridging back end and analytics.",
    },
    result: {
      pt: "Bases integradas entre Databricks, AWS e Power BI",
      en: "Data integrated across Databricks, AWS and Power BI",
    },
    tags: ["SQL", "Databricks", "AWS"],
    icon: "database",
  },
];

export function getSkillGroups(locale: Locale): SkillGroup[] {
  return skillGroupData.map((group) => ({
    ...group,
    title: tr(group.title, locale),
    items: group.items.map((item) => tr(item, locale)),
  }));
}

export function getSkillHighlights(locale: Locale): SkillHighlight[] {
  return skillHighlightData.map((skill) => ({
    ...skill,
    title: tr(skill.title, locale),
    description: tr(skill.description, locale),
    result: tr(skill.result, locale),
  }));
}
