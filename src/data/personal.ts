// Lado pessoal do portfólio: falas do avatar e hobbies.
import { tr, type Locale, type Localized } from "@/i18n/locales";

export const avatarLines: Localized<string[]> = {
  pt: [
    "Olá, viajante! Eu sou o Arthur. Clique em mim que eu pulo.",
    "Classe: Desenvolvedor Full Stack. Java e Spring Boot no back, React e Next.js no front.",
    "Missão atual: estágio em Engenharia de Software na Cielo.",
    "Nas horas livres: Valorant, The Witcher 3 e muito anime.",
    "Próxima fase: criar meus próprios jogos. Em breve por aqui!",
  ],
  en: [
    "Hello, traveler! I'm Arthur. Click me and I'll jump.",
    "Class: Full Stack Developer. Java and Spring Boot on the back, React and Next.js on the front.",
    "Current quest: Software Engineering internship at Cielo.",
    "In my free time: Valorant, The Witcher 3 and lots of anime.",
    "Next level: making my own games. Coming soon!",
  ],
};

export type HobbyIcon = "crosshair" | "sword" | "katana" | "cursedFlame" | "strawHat" | "levelUp";

export type Hobby = {
  name: string;
  note: string;
  icon: HobbyIcon;
};

type HobbyData = Omit<Hobby, "note"> & { note: Localized };

const gameData: HobbyData[] = [
  { name: "Valorant", note: { pt: "FPS tático 5v5", en: "Tactical 5v5 FPS" }, icon: "crosshair" },
  { name: "The Witcher 3", note: { pt: "RPG de mundo aberto", en: "Open-world RPG" }, icon: "sword" },
];

const animeData: HobbyData[] = [
  { name: "Bleach", note: { pt: "Shinigamis e zanpakutōs", en: "Soul Reapers and zanpakutō" }, icon: "katana" },
  { name: "Jujutsu Kaisen", note: { pt: "Feiticeiros jujutsu", en: "Jujutsu sorcerers" }, icon: "cursedFlame" },
  { name: "One Piece", note: { pt: "A jornada do chapéu de palha", en: "The Straw Hat's journey" }, icon: "strawHat" },
  { name: "Solo Leveling", note: { pt: "O caçador que sobe de nível", en: "The hunter who levels up" }, icon: "levelUp" },
];

const nextQuestData = {
  title: { pt: "Criar meus próprios jogos", en: "Making my own games" },
  description: {
    pt: "Gosto muito de jogar e quero também criar. O próximo passo é transformar essa paixão em projetos próprios: os primeiros protótipos vão aparecer aqui.",
    en: "I love playing games and I want to make them too. The next step is turning that passion into my own projects: the first prototypes will show up here.",
  },
  status: { pt: "Em planejamento", en: "In planning" },
};

export function getPersonal(locale: Locale) {
  const hobby = (h: HobbyData): Hobby => ({ ...h, note: tr(h.note, locale) });
  return {
    games: gameData.map(hobby),
    animes: animeData.map(hobby),
    nextQuest: {
      title: tr(nextQuestData.title, locale),
      description: tr(nextQuestData.description, locale),
      status: tr(nextQuestData.status, locale),
    },
  };
}
