export type SkillGroup = {
  title: string;
  icon: "code" | "database" | "zap" | "layers" | "kanban";
  items: string[];
};

export const skillGroups: SkillGroup[] = [
  { title: "Linguagens", icon: "code", items: ["Python", "Java", "SQL", "JavaScript"] },
  { title: "Dados & BI", icon: "database", items: ["Power BI", "Databricks", "AWS"] },
  { title: "Automação", icon: "zap", items: ["Power Automate", "RPA"] },
  { title: "Frameworks & APIs", icon: "layers", items: ["Spring Boot", "React", "Docker"] },
  { title: "Metodologias", icon: "kanban", items: ["Scrum", "Agile", "Six Sigma"] },
];

export type SkillHighlight = {
  title: string;
  description: string;
  result: string;
  tags: string[];
  icon: "zap" | "bar-chart" | "database" | "code";
};

export const skillHighlights: SkillHighlight[] = [
  {
    title: "Automação de Processos",
    description: "Bots e scripts para eliminar trabalho manual repetitivo.",
    result: "10h/semana economizadas com bot no Outlook",
    tags: ["Power Automate", "RPA"],
    icon: "zap",
  },
  {
    title: "Dashboards Analíticos",
    description: "Dashboards em Power BI para monitoramento de KPIs e análises estratégicas.",
    result: "3 KPIs monitorados em tempo real para a liderança",
    tags: ["Power BI", "SQL"],
    icon: "bar-chart",
  },
  {
    title: "Migração de Dados",
    description: "Migração de bases para Databricks e extração via AWS.",
    result: "40% menos tempo na elaboração de materiais (ABECS)",
    tags: ["Databricks", "Python"],
    icon: "database",
  },
  {
    title: "Desenvolvimento Web",
    description: "Interfaces e APIs modernas com foco em boas práticas de mercado.",
    result: "3 projetos próprios em produção (Java, React, IA)",
    tags: ["HTML/CSS", "Spring Boot"],
    icon: "code",
  },
];
