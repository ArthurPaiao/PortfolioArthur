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
    "Desenvolvedor Full Stack e graduando em Engenharia de Software, com 2 anos de experiência construindo soluções de ponta a ponta. Java e Spring Boot no back-end, React, Next.js e TypeScript no front-end, SQL, Docker e AWS na infraestrutura, com foco em código limpo, boa arquitetura e impacto mensurável.",
  about: [
    "Sou graduando em Engenharia de Software na Universidade São Judas Tadeu e estagiário de Engenharia de Software na Cielo, onde atuo na evolução de uma aplicação Java e Spring Boot: migração de versão, redução de dívida técnica, testes automatizados e code review.",
    "Comecei automatizando processos e analisando dados, com Python, SQL, Power Automate e Power BI. Isso moldou meu jeito de programar: entender o problema do negócio antes de escrever código e medir o impacto depois.",
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
