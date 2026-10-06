import { tr, type Locale, type Localized } from "@/i18n/locales";

export type ExperienceItem = {
  role: string;
  company: string;
  period: string;
  /** Emprego atual: destaca o checkpoint e o selo "Missão ativa". */
  current?: boolean;
  bullets: { text: string; highlight?: string }[];
  stack?: string[];
};

type ExperienceData = Omit<ExperienceItem, "role" | "period" | "bullets"> & {
  role: Localized;
  period: Localized;
  bullets: { text: Localized; highlight?: string | Localized }[];
};

export const experience: ExperienceData[] = [
  {
    role: {
      pt: "Estagiário de Engenharia de Software — Cancelamento",
      en: "Software Engineering Intern — Cancellations",
    },
    company: "Cielo",
    period: { pt: "Set/2026 — Atual", en: "Sep 2026 — Present" },
    current: true,
    bullets: [
      {
        text: {
          pt: "Apoio na migração da aplicação de Java 21 para Java 25, atualizando dependências e garantindo a compatibilidade do código.",
          en: "Helping migrate the application from Java 21 to Java 25, updating dependencies and keeping the code compatible.",
        },
        highlight: "Java 21 → 25",
      },
      {
        text: {
          pt: "Refatoração e redução de dívida técnica, com remoção de classes e dependências obsoletas.",
          en: "Refactoring and paying down technical debt by removing obsolete classes and dependencies.",
        },
      },
      {
        text: {
          pt: "Escrita de testes automatizados e participação ativa nos code reviews do time.",
          en: "Writing automated tests and taking an active part in the team's code reviews.",
        },
      },
    ],
    stack: ["Java", "Spring Boot", "PostgreSQL", "React", "TypeScript", "Material UI", "Docker"],
  },
  {
    role: { pt: "Estagiário — Intercâmbio e Fee", en: "Intern — Interchange & Fees" },
    company: "Cielo",
    period: { pt: "Nov/2025 — Set/2026", en: "Nov 2025 — Sep 2026" },
    bullets: [
      {
        text: {
          pt: "Desenvolvimento de scripts em Python que automatizaram a produção de materiais para a ABECS, eliminando retrabalho manual da equipe.",
          en: "Built Python scripts that automated the production of materials for ABECS, eliminating the team's manual rework.",
        },
        highlight: { pt: "-40% tempo", en: "-40% time" },
      },
      {
        text: {
          pt: "Criação de consultas SQL para cruzar dados de subadquirentes e detectar inconsistências, resultando em recuperação de valores.",
          en: "Wrote SQL queries to cross-check sub-acquirer data and detect inconsistencies, which led to recovered amounts.",
        },
      },
      {
        text: {
          pt: "Apoio na migração de bases de dados para o Databricks e na extração via AWS (Athena), com integração ao Power BI.",
          en: "Supported the migration of databases to Databricks and data extraction via AWS (Athena), integrated with Power BI.",
        },
      },
    ],
    stack: ["Python", "SQL", "Databricks", "AWS"],
  },
  {
    role: { pt: "Estagiário — Relacionamento com Bandeiras", en: "Intern — Card Network Relations" },
    company: "Cielo",
    period: { pt: "Nov/2024 — Nov/2025", en: "Nov 2024 — Nov 2025" },
    bullets: [
      {
        text: {
          pt: "Desenvolvimento de um bot em Power Automate integrado ao Outlook, automatizando a distribuição de boletins informativos.",
          en: "Built a Power Automate bot integrated with Outlook that automated the distribution of newsletters.",
        },
        highlight: { pt: "-10h/semana", en: "-10h/week" },
      },
      {
        text: {
          pt: "Reengenharia de 2 processos obsoletos com soluções low-code, melhorando a comunicação com stakeholders.",
          en: "Redesigned 2 outdated processes with low-code solutions, improving communication with stakeholders.",
        },
        highlight: { pt: "-25% tempo", en: "-25% time" },
      },
      {
        text: {
          pt: "Construção de dashboards em Power BI para monitorar 3 KPIs da área em tempo real.",
          en: "Built Power BI dashboards to track 3 of the team's KPIs in real time.",
        },
      },
    ],
    stack: ["Power Automate", "Low-code", "Power BI"],
  },
  {
    role: { pt: "Jovem Aprendiz — Talent Acquisition", en: "Apprentice — Talent Acquisition" },
    company: "Johnson & Johnson",
    period: { pt: "Set/2023 — Out/2024", en: "Sep 2023 — Oct 2024" },
    bullets: [
      {
        text: {
          pt: "Automatização de planilhas e processos manuais no Excel.",
          en: "Automated spreadsheets and manual processes in Excel.",
        },
        highlight: { pt: "-50% tempo", en: "-50% time" },
      },
      {
        text: {
          pt: "Apoio de ponta a ponta no programa de estágio, contribuindo para a contratação de estagiários no ciclo.",
          en: "Supported the internship program end to end, contributing to the hiring of the cycle's interns.",
        },
        highlight: { pt: "40 contratados", en: "40 hires" },
      },
    ],
  },
];

export function getExperience(locale: Locale): ExperienceItem[] {
  return experience.map((job) => ({
    ...job,
    role: tr(job.role, locale),
    period: tr(job.period, locale),
    bullets: job.bullets.map((b) => ({
      text: tr(b.text, locale),
      highlight: b.highlight && tr(b.highlight, locale),
    })),
  }));
}
