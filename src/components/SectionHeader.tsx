import Reveal from "./Reveal";

type Props = {
  index: string;
  eyebrow: string;
  title: string;
  /** Legenda curta com o "toque de jogo" da seção, ex.: "log de missões". */
  flavor?: string;
  description?: string;
  align?: "left" | "center";
};

export default function SectionHeader({ index, eyebrow, title, flavor, description, align = "left" }: Props) {
  const centered = align === "center";
  return (
    <Reveal className={`mb-12 md:mb-16 ${centered ? "text-center" : ""}`}>
      <div
        className={`flex flex-wrap items-center gap-x-3 gap-y-1 font-pixel text-sm uppercase tracking-[0.15em] ${
          centered ? "justify-center" : ""
        }`}
      >
        <span className="text-gold">{index}</span>
        <span className="text-accent">▸ {eyebrow}</span>
        {flavor && <span className="font-mono normal-case tracking-normal text-xs text-subtle">{`// ${flavor}`}</span>}
      </div>
      <h2 className="font-pixel text-4xl md:text-5xl text-fg mt-3 [text-shadow:3px_3px_0_var(--shadow-hard)]">
        {title}
      </h2>
      {description && (
        <p className={`text-muted mt-4 max-w-2xl leading-relaxed ${centered ? "mx-auto" : ""}`}>{description}</p>
      )}
    </Reveal>
  );
}
