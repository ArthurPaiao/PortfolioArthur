import { tr, type Locale, type Localized } from "@/i18n/locales";

export type Project = {
  slug: string;
  title: string;
  description: string;
  stack: string[];
  result?: string;
  status?: string;
  icon: "heart-pulse" | "leaf" | "bot" | "layout" | "landmark" | "shopping-cart";
  githubUrl?: string;
  demoUrl?: string;
  /** Screenshot em /public (ex.: "/projects/srm.png"). Sem imagem, o card mostra uma prévia ilustrativa. */
  image?: string;
  /** Layout da prévia ilustrativa usada quando não há imagem. */
  preview: "list" | "dashboard" | "chat" | "site" | "map";
  /** Ocupa duas colunas no bento grid. A ordem do array define o encaixe das linhas. */
  featured?: boolean;
};

// Campos de texto aceitam uma versão por idioma; o resto é comum aos dois
type ProjectData = Omit<Project, "title" | "description" | "stack" | "result" | "status"> & {
  title: string | Localized;
  description: Localized;
  stack: string[] | Localized<string[]>;
  result?: Localized;
  status?: Localized;
};

export const projects: ProjectData[] = [
  {
    slug: "comparador-supermercados",
    title: { pt: "Comparador de Preços de Supermercados", en: "Supermarket Price Comparator" },
    description: {
      pt: "Plataforma que encontra o menor preço entre ofertas verificadas de supermercados em Mogi das Cruzes, por localização e raio de busca. Monorepo TypeScript com API em Fastify, contratos validados com Zod, coletores de dados com proteção contra SSRF, regras de negócio puras (dinheiro em centavos, GTIN, unidades, ranking) e PostgreSQL com migrações versionadas.",
      en: "Platform that finds the lowest price among verified supermarket offers in Mogi das Cruzes, by location and search radius. TypeScript monorepo with a Fastify API, Zod-validated contracts, data collectors with SSRF protection, pure business rules (money in cents, GTIN, units, ranking) and PostgreSQL with versioned migrations.",
    },
    stack: ["TypeScript", "Node.js", "Fastify", "PostgreSQL", "Zod", "Vitest", "Docker"],
    result: {
      pt: "100+ testes automatizados (unidade e integração)",
      en: "100+ automated tests (unit and integration)",
    },
    status: { pt: "Em desenvolvimento", en: "In development" },
    icon: "shopping-cart",
    preview: "list",
    featured: true,
  },
  {
    slug: "agente-ia-contratos",
    title: { pt: "Agente de IA para Contratos", en: "AI Contract Agent" },
    description: {
      pt: "Agente integrado à API Gemini que monitora vencimentos de contratos e dispara alertas, com dashboard de acompanhamento e análise automática.",
      en: "Agent integrated with the Gemini API that monitors contract expiration dates and sends alerts, with a tracking dashboard and automatic analysis.",
    },
    stack: {
      pt: ["Python", "Gemini API", "Integração de APIs"],
      en: ["Python", "Gemini API", "API integration"],
    },
    result: { pt: "-100% risco de perda de prazos", en: "-100% risk of missed deadlines" },
    icon: "bot",
    preview: "chat",
  },
  {
    slug: "portfolio",
    title: { pt: "Portfólio Pessoal", en: "Personal Portfolio" },
    description: {
      pt: "Aplicação web com Next.js (App Router) e TypeScript, em português e inglês, com componentes reutilizáveis orientados a dados, tema claro/escuro, animações com Framer Motion e formulário de contato integrado a um serviço externo.",
      en: "Web application built with Next.js (App Router) and TypeScript, in Portuguese and English, with data-driven reusable components, light/dark theme, Framer Motion animations and a contact form integrated with an external service.",
    },
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    icon: "layout",
    preview: "site",
    githubUrl: "https://github.com/ArthurPaiao/PortfolioArthur",
    demoUrl: "https://arthurpaiao-dev.vercel.app",
  },
  {
    slug: "srm-credit-engine",
    title: { pt: "SRM Credit Engine — Desafio Técnico", en: "SRM Credit Engine — Technical Challenge" },
    description: {
      pt: "Sistema full stack de precificação e liquidação de recebíveis para um FIDC, em BRL e USD, com precisão decimal e liquidação idempotente. API REST em Spring Boot com PostgreSQL e Flyway, motor de cálculo com Strategy, controle de concorrência com locks transacionais, importação CSV, liquidação em lote e front-end em React + TypeScript + Material UI.",
      en: "Full stack system for pricing and settling receivables for a FIDC (a Brazilian receivables fund), in BRL and USD, with decimal precision and idempotent settlement. Spring Boot REST API with PostgreSQL and Flyway, a pricing engine built on the Strategy pattern, concurrency control with transactional locks, CSV import, batch settlement and a React + TypeScript + Material UI front end.",
    },
    stack: ["Java 21", "Spring Boot", "PostgreSQL", "React", "TypeScript", "Material UI", "Docker", "Testcontainers"],
    result: {
      pt: "152 testes automatizados (120 back-end + 32 front-end)",
      en: "152 automated tests (120 back end + 32 front end)",
    },
    icon: "landmark",
    preview: "dashboard",
    githubUrl: "https://github.com/ArthurPaiao/Desafio_tecnico_SRM",
    featured: true,
  },
  {
    slug: "fila-triagem-hospitalar",
    title: { pt: "Fila de Triagem Hospitalar", en: "Hospital Triage Queue" },
    description: {
      pt: "Aplicação em Java para gerenciar filas de triagem e reduzir o tempo de espera, modelada com orientação a objetos e estruturas de dados.",
      en: "Java application that manages triage queues to cut waiting times, modeled with object-oriented programming and data structures.",
    },
    stack: {
      pt: ["Java", "POO", "Estruturas de Dados"],
      en: ["Java", "OOP", "Data Structures"],
    },
    icon: "heart-pulse",
    preview: "list",
    githubUrl: "https://github.com/ArthurPaiao/CareCheck-Project",
  },
  {
    slug: "greentech",
    title: "GreenTech",
    description: {
      pt: "Aplicação web integrada à API do Google Maps para localizar pontos de descarte sustentável de eletrônicos, mapeando 8 locais na região de São Paulo.",
      en: "Web application integrated with the Google Maps API to find sustainable e-waste disposal points, mapping 8 locations in the São Paulo area.",
    },
    stack: ["JavaScript", "HTML/CSS", "Google Maps API"],
    icon: "leaf",
    preview: "map",
  },
];

export function getProjects(locale: Locale): Project[] {
  return projects.map((proj) => ({
    ...proj,
    title: tr(proj.title, locale),
    description: tr(proj.description, locale),
    stack: tr(proj.stack, locale),
    result: proj.result && tr(proj.result, locale),
    status: proj.status && tr(proj.status, locale),
  }));
}
