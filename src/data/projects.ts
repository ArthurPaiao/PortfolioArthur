export type Project = {
  slug: string;
  title: string;
  description: string;
  stack: string[];
  result?: string;
  icon: "heart-pulse" | "leaf" | "bot";
  githubUrl?: string;
};

export const projects: Project[] = [
  {
    slug: "fila-triagem-hospitalar",
    title: "Fila de Triagem Hospitalar",
    description:
      "Aplicação em Java para reduzir o tempo de espera em filas de triagem, pensada para atender hospitais e pacientes com mais agilidade.",
    stack: ["Java", "POO"],
    icon: "heart-pulse",
  },
  {
    slug: "greentech",
    title: "GreenTech",
    description:
      "Site com a API do Google Maps para localizar pontos de descarte sustentável de eletrônicos, mapeando 8 locais na região de São Paulo.",
    stack: ["Google Maps API", "JavaScript"],
    icon: "leaf",
  },
  {
    slug: "agente-ia-contratos",
    title: "Agente de IA para Contratos",
    description:
      "Agente com a API Gemini para alertar vencimento de contratos, com dashboard de monitoramento e análise automática.",
    stack: ["Gemini API", "Python"],
    result: "-100% risco de perda de prazos",
    icon: "bot",
  },
];
