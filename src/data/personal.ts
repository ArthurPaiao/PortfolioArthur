// Lado pessoal do portfólio: falas do avatar e hobbies.

export const avatarLines = [
  "Olá, viajante! Eu sou o Arthur. Clique em mim que eu pulo.",
  "Classe: Desenvolvedor Full Stack. Java e Spring Boot no back, React e Next.js no front.",
  "Missão atual: estágio em Engenharia de Software na Cielo.",
  "Nas horas livres: Valorant, The Witcher 3 e muito anime.",
  "Próxima fase: criar meus próprios jogos. Em breve por aqui!",
] as const;

export type HobbyIcon = "crosshair" | "sword" | "katana" | "cursedFlame" | "strawHat" | "levelUp";

export type Hobby = {
  name: string;
  note: string;
  icon: HobbyIcon;
};

export const games: Hobby[] = [
  { name: "Valorant", note: "FPS tático 5v5", icon: "crosshair" },
  { name: "The Witcher 3", note: "RPG de mundo aberto", icon: "sword" },
];

export const animes: Hobby[] = [
  { name: "Bleach", note: "Shinigamis e zanpakutōs", icon: "katana" },
  { name: "Jujutsu Kaisen", note: "Feiticeiros jujutsu", icon: "cursedFlame" },
  { name: "One Piece", note: "A jornada do chapéu de palha", icon: "strawHat" },
  { name: "Solo Leveling", note: "O caçador que sobe de nível", icon: "levelUp" },
];

export const nextQuest = {
  title: "Criar meus próprios jogos",
  description:
    "Gosto muito de jogar e quero também criar. O próximo passo é transformar essa paixão em projetos próprios: os primeiros protótipos vão aparecer aqui.",
  status: "Em planejamento",
};
