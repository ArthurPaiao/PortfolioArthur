export const profile = {
  name: "Arthur Gomes Paião",
  role: "Desenvolvedor Full Stack",
  tagline: "Full Stack Developer & Software Engineer",
  currentPosition: "Estagiário de Engenharia de Software na Cielo",
  location: "São Paulo, SP",
  email: "paiao2057@gmail.com",
  phone: "(11) 97074-7602",
  github: "https://github.com/ArthurPaiao",
  linkedin: "https://www.linkedin.com/in/arthur-pai%C3%A3o-1302a5274/",
  siteUrl: "https://arthurpaiao-dev.vercel.app",
  // Coloque a foto em /public (ex.: /public/profile.jpg) e troque null pelo caminho "/profile.jpg"
  photo: null as string | null,
  summary:
    "Sou desenvolvedor full stack e estagiário na Cielo. Escrevo Java com Spring Boot no back-end e React com TypeScript no front, e me formo em Engenharia de Software em dezembro de 2026.",
  about: [
    "Estou no último ano de Engenharia de Software na São Judas e, desde setembro, sou estagiário de engenharia na Cielo. O time cuida de uma aplicação Java com Spring Boot, e meu trabalho lá vai de migrar o projeto do Java 21 para o 25 a apagar classes que ninguém usava mais, escrever testes e revisar o código dos colegas.",
    "Antes disso, passei dois anos em áreas de negócio da Cielo e um na Johnson & Johnson automatizando o que dava: planilhas no Excel, scripts em Python e SQL e um bot no Power Automate que tirou 10 horas por semana de trabalho manual do time. Foi ali que peguei o hábito de perguntar qual problema o código resolve antes de escrever a primeira linha, e de conferir depois se resolveu mesmo.",
  ],
  education: {
    course: "Bacharelado em Engenharia de Software",
    school: "Universidade São Judas Tadeu (USJT)",
    period: "2023 — Dez/2026 (previsto)",
  },
  languages: [
    { name: "Português", level: "Nativo" },
    { name: "Espanhol", level: "Avançado" },
    { name: "Inglês", level: "Intermediário" },
  ],
  lookingFor: ["Full Stack", "Back-end", "Front-end"],
  stats: [
    { value: "2+", label: "Anos de experiência" },
    { value: "3", label: "Idiomas", detail: "Português (nativo), Espanhol (avançado), Inglês (intermediário)" },
    { value: "9", label: "Certificações" },
    { value: "6", label: "Projetos" },
  ],
} as const;
