export type Certification = {
  title: string;
  issuer: string;
  icon: "award" | "git-branch" | "code" | "coffee" | "globe" | "server";
};

export const certifications: Certification[] = [
  { title: "AI Intelligence Fundamentals", issuer: "IBM", icon: "award" },
  { title: "Six Sigma White Belt", issuer: "Certificação de processos", icon: "award" },
  { title: "Transformação Digital", issuer: "Santander", icon: "award" },
  { title: "Git e GitHub: Formação Básica", issuer: "LinkedIn Learning", icon: "git-branch" },
  { title: "Python do Básico ao Avançado", issuer: "Udemy", icon: "code" },
  { title: "Java Completo: POO + Projetos", issuer: "Udemy — Nelio Alves", icon: "coffee" },
  { title: "Complete Full-Stack Web Bootcamp", issuer: "Udemy — Dr. Angela Yu", icon: "globe" },
  { title: "Spring Boot Expert: JPA, REST, JWT, OAuth2", issuer: "Udemy — Douglas Sousa", icon: "server" },
];
