export type ExperienceItem = {
  role: string;
  company: string;
  period: string;
  bullets: { text: string; highlight?: string }[];
  stack?: string[];
};

export const experience: ExperienceItem[] = [
  {
    role: "Estagiário de Engenharia de Software — Cancelamento",
    company: "Cielo",
    period: "Set/2026 — Atual",
    bullets: [
      {
        text: "Apoio na migração da aplicação de Java 21 para Java 25, atualizando dependências e garantindo a compatibilidade do código.",
        highlight: "Java 21 → 25",
      },
      {
        text: "Refatoração e redução de dívida técnica, com remoção de classes e dependências obsoletas.",
      },
      {
        text: "Escrita de testes automatizados e participação ativa nos code reviews do time.",
      },
    ],
    stack: ["Java", "Spring Boot", "PostgreSQL", "React", "TypeScript", "Material UI", "Docker"],
  },
  {
    role: "Estagiário — Intercâmbio e Fee",
    company: "Cielo",
    period: "Nov/2025 — Set/2026",
    bullets: [
      {
        text: "Desenvolvimento de scripts em Python que automatizaram a produção de materiais para a ABECS, eliminando retrabalho manual da equipe.",
        highlight: "-40% tempo",
      },
      {
        text: "Criação de consultas SQL para cruzar dados de subadquirentes e detectar inconsistências, resultando em recuperação de valores.",
      },
      {
        text: "Apoio na migração de bases de dados para o Databricks e na extração via AWS (Athena), com integração ao Power BI.",
      },
    ],
    stack: ["Python", "SQL", "Databricks", "AWS"],
  },
  {
    role: "Estagiário — Relacionamento com Bandeiras",
    company: "Cielo",
    period: "Nov/2024 — Nov/2025",
    bullets: [
      {
        text: "Desenvolvimento de um bot em Power Automate integrado ao Outlook, automatizando a distribuição de boletins informativos.",
        highlight: "-10h/semana",
      },
      {
        text: "Reengenharia de 2 processos obsoletos com soluções low-code, melhorando a comunicação com stakeholders.",
        highlight: "-25% tempo",
      },
      {
        text: "Construção de dashboards em Power BI para monitorar 3 KPIs da área em tempo real.",
      },
    ],
    stack: ["Power Automate", "Low-code", "Power BI"],
  },
  {
    role: "Jovem Aprendiz — Talent Acquisition",
    company: "Johnson & Johnson",
    period: "Set/2023 — Out/2024",
    bullets: [
      {
        text: "Automatização de planilhas e processos manuais no Excel.",
        highlight: "-50% tempo",
      },
      {
        text: "Apoio de ponta a ponta no programa de estágio, contribuindo para a contratação de estagiários no ciclo.",
        highlight: "40 contratados",
      },
    ],
  },
];
