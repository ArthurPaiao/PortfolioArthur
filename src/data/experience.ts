export type ExperienceItem = {
  role: string;
  company: string;
  period: string;
  bullets: { text: string; highlight?: string }[];
};

export const experience: ExperienceItem[] = [
  {
    role: "Estagiário — Intercâmbio e Fee",
    company: "Cielo",
    period: "Nov/2025 — Atual",
    bullets: [
      {
        text: "Scripts em Python que reduziram o tempo de elaboração de materiais para a ABECS, eliminando retrabalho manual da equipe.",
        highlight: "-40% tempo",
      },
      {
        text: "Script em SQL para identificar lacunas entre subadquirentes, mapeando inconsistências que resultaram em recuperação de valores.",
      },
      {
        text: "Apoio na migração de bases de dados para o Databricks e extração via AWS, integradas ao Power BI.",
      },
    ],
  },
  {
    role: "Estagiário — Relacionamento com Bandeiras",
    company: "Cielo",
    period: "Nov/2024 — Nov/2025",
    bullets: [
      {
        text: "Bot em Power Automate integrado ao Outlook, eliminando trabalho manual na distribuição de boletins informativos.",
        highlight: "-10h/semana",
      },
      {
        text: "Dashboards em Power BI para monitorar 3 KPIs da área, dando visibilidade em tempo real à liderança.",
      },
      {
        text: "Otimização de 2 processos obsoletos com soluções low-code, melhorando a comunicação com stakeholders.",
        highlight: "-25% tempo",
      },
    ],
  },
  {
    role: "Jovem Aprendiz — Talent Acquisition",
    company: "Johnson & Johnson",
    period: "Set/2023 — Out/2024",
    bullets: [
      {
        text: "Apoio de ponta a ponta no programa de estágio, contribuindo para a contratação de estagiários no ciclo.",
        highlight: "40 contratados",
      },
      {
        text: "Automatização de planilhas e processos manuais no Excel.",
        highlight: "-50% tempo",
      },
      {
        text: "Representou a J&J na Feira de Estágios da USP, apresentando o programa a 200 candidatos.",
      },
    ],
  },
];
