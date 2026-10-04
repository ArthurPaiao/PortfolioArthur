export type SkillGroup = {
  title: string;
  icon: "code" | "monitor" | "server" | "database" | "git-branch";
  items: string[];
};

export const skillGroups: SkillGroup[] = [
  { title: "Linguagens", icon: "code", items: ["Java", "TypeScript", "JavaScript", "Python", "SQL"] },
  {
    title: "Front-end",
    icon: "monitor",
    items: ["React", "Next.js", "Vite", "Material UI", "Tailwind CSS", "Framer Motion", "HTML", "CSS"],
  },
  {
    title: "Back-end",
    icon: "server",
    items: ["Spring Boot", "JPA/Hibernate", "Node.js", "Fastify", "Zod", "APIs REST", "JWT", "OAuth2"],
  },
  {
    title: "Banco de Dados & Cloud",
    icon: "database",
    items: ["PostgreSQL", "SQL Server", "Flyway", "Docker", "AWS (Athena)", "Databricks"],
  },
  {
    title: "Engenharia & Práticas",
    icon: "git-branch",
    items: [
      "Git/GitHub",
      "Code Review",
      "Refatoração",
      "Testes automatizados",
      "JUnit",
      "Testcontainers",
      "Vitest",
      "POO",
      "Design Patterns",
      "Arquitetura de Software",
      "Scrum",
    ],
  },
];

export type SkillHighlight = {
  title: string;
  description: string;
  result: string;
  tags: string[];
  icon: "server" | "monitor" | "zap" | "database";
};

export const skillHighlights: SkillHighlight[] = [
  {
    title: "Back-end & APIs",
    description:
      "APIs REST com Spring Boot e JPA, autenticação via JWT/OAuth2 e aplicações containerizadas com Docker.",
    result: "Arquitetura em camadas e orientação a objetos",
    tags: ["Java", "Spring Boot", "Docker"],
    icon: "server",
  },
  {
    title: "Front-end Moderno",
    description:
      "Interfaces responsivas, acessíveis e animadas com React, Next.js, TypeScript e Tailwind CSS.",
    result: "Este portfólio: Next.js 16 + TypeScript",
    tags: ["React", "Next.js", "TypeScript"],
    icon: "monitor",
  },
  {
    title: "Automação & Scripts",
    description: "Scripts e integrações que eliminam trabalho manual e conectam sistemas.",
    result: "-40% no tempo de elaboração de materiais (Cielo)",
    tags: ["Python", "SQL"],
    icon: "zap",
  },
  {
    title: "Dados & Integrações",
    description:
      "Modelagem e consultas SQL, migração de bases para Databricks e extração via AWS, integrando back-end e análise.",
    result: "Bases integradas entre Databricks, AWS e Power BI",
    tags: ["SQL", "Databricks", "AWS"],
    icon: "database",
  },
];
