import { certifications } from "./certifications";
import { projects } from "./projects";

const languages = [
  { name: "Português", level: "Nativo" },
  { name: "Espanhol", level: "Avançado" },
  { name: "Inglês", level: "Intermediário" },
] as const;

export const profile = {
  name: "Arthur Gomes Paião",
  role: "Desenvolvedor Full Stack",
  tagline: "Full Stack Developer & Software Engineer",
  currentPosition: "Estagiário de Engenharia de Software na Cielo",
  location: "São Paulo, SP",
  email: "paiao2057@gmail.com",
  github: "https://github.com/ArthurPaiao",
  linkedin: "https://www.linkedin.com/in/arthurpaiao/",
  siteUrl: "https://arthurpaiao-dev.vercel.app",
  // Coloque a foto em /public (ex.: /public/profile.jpg) e troque null pelo caminho "/profile.jpg"
  photo: null as string | null,
  summary:
    "Sou desenvolvedor full stack e estagiário na Cielo. Escrevo Java com Spring Boot no back-end e React com TypeScript no front, e me formo em Engenharia de Software em dezembro de 2026.",
  about: [
    "Estou no último ano de Engenharia de Software na São Judas e, desde setembro de 2026, sou estagiário de engenharia na Cielo. O time cuida de uma aplicação Java com Spring Boot, e meu trabalho lá vai de migrar o projeto do Java 21 para o 25 a apagar classes que ninguém usava mais, escrever testes e revisar o código dos colegas.",
    "Antes disso, passei dois anos em áreas de negócio da Cielo e um na Johnson & Johnson automatizando o que dava: planilhas no Excel, scripts em Python e SQL e um bot no Power Automate que tirou 10 horas por semana de trabalho manual do time. Foi ali que peguei o hábito de perguntar qual problema o código resolve antes de escrever a primeira linha, e de conferir depois se resolveu mesmo.",
  ],
  education: {
    course: "Bacharelado em Engenharia de Software",
    school: "Universidade São Judas Tadeu (USJT)",
    period: "2023 — Dez/2026 (previsto)",
  },
  languages,
  lookingFor: ["Full Stack", "Back-end", "Front-end"],
  // Contagens derivadas das listas para não saírem de sincronia com o conteúdo
  stats: [
    { value: "2+", label: "Anos de experiência" },
    {
      value: String(languages.length),
      label: "Idiomas",
      detail: languages.map((lang) => `${lang.name} (${lang.level.toLowerCase()})`).join(", "),
    },
    { value: String(certifications.length), label: "Certificações" },
    { value: String(projects.length), label: "Projetos" },
  ],
} as const;
