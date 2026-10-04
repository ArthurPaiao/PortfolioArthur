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

export const projects: Project[] = [
  {
    slug: "comparador-supermercados",
    title: "Comparador de Preços de Supermercados",
    description:
      "Plataforma que encontra o menor preço entre ofertas verificadas de supermercados em Mogi das Cruzes, por localização e raio de busca. Monorepo TypeScript com API em Fastify, contratos validados com Zod, coletores de dados com proteção contra SSRF, regras de negócio puras (dinheiro em centavos, GTIN, unidades, ranking) e PostgreSQL com migrações versionadas.",
    stack: ["TypeScript", "Node.js", "Fastify", "PostgreSQL", "Zod", "Vitest", "Docker"],
    result: "100+ testes automatizados (unidade e integração)",
    status: "Em desenvolvimento",
    icon: "shopping-cart",
    preview: "list",
    featured: true,
  },
  {
    slug: "agente-ia-contratos",
    title: "Agente de IA para Contratos",
    description:
      "Agente integrado à API Gemini que monitora vencimentos de contratos e dispara alertas, com dashboard de acompanhamento e análise automática.",
    stack: ["Python", "Gemini API", "Integração de APIs"],
    result: "-100% risco de perda de prazos",
    icon: "bot",
    preview: "chat",
  },
  {
    slug: "portfolio",
    title: "Portfólio Pessoal",
    description:
      "Aplicação web com Next.js (App Router) e TypeScript, componentes reutilizáveis orientados a dados, tema claro/escuro, animações com Framer Motion e formulário de contato integrado a um serviço externo.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    icon: "layout",
    preview: "site",
    githubUrl: "https://github.com/ArthurPaiao/PortfolioArthur",
    demoUrl: "https://arthurpaiao-dev.vercel.app",
  },
  {
    slug: "srm-credit-engine",
    title: "SRM Credit Engine — Desafio Técnico",
    description:
      "Sistema full stack de precificação e liquidação de recebíveis para um FIDC, em BRL e USD, com precisão decimal e liquidação idempotente. API REST em Spring Boot com PostgreSQL e Flyway, motor de cálculo com Strategy, controle de concorrência com locks transacionais, importação CSV, liquidação em lote e front-end em React + TypeScript + Material UI.",
    stack: ["Java 21", "Spring Boot", "PostgreSQL", "React", "TypeScript", "Material UI", "Docker", "Testcontainers"],
    result: "152 testes automatizados (120 back-end + 32 front-end)",
    icon: "landmark",
    preview: "dashboard",
    githubUrl: "https://github.com/ArthurPaiao/Desafio_tecnico_SRM",
    featured: true,
  },
  {
    slug: "fila-triagem-hospitalar",
    title: "Fila de Triagem Hospitalar",
    description:
      "Aplicação em Java para gerenciar filas de triagem e reduzir o tempo de espera, modelada com orientação a objetos e estruturas de dados.",
    stack: ["Java", "POO", "Estruturas de Dados"],
    icon: "heart-pulse",
    preview: "list",
    githubUrl: "https://github.com/ArthurPaiao/CareCheck-Project",
  },
  {
    slug: "greentech",
    title: "GreenTech",
    description:
      "Aplicação web integrada à API do Google Maps para localizar pontos de descarte sustentável de eletrônicos, mapeando 8 locais na região de São Paulo.",
    stack: ["JavaScript", "HTML/CSS", "Google Maps API"],
    icon: "leaf",
    preview: "map",
  },
];
