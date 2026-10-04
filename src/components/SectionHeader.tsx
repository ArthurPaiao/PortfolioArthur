import Reveal from "./Reveal";

type Props = {
  index: string;
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export default function SectionHeader({ index, eyebrow, title, description, align = "left" }: Props) {
  const centered = align === "center";
  return (
    <Reveal className={`mb-12 md:mb-16 ${centered ? "text-center" : ""}`}>
      <div
        className={`flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] text-accent ${
          centered ? "justify-center" : ""
        }`}
      >
        <span className="text-subtle">{index}</span>
        <span className="h-px w-8 bg-line-strong" />
        <span>{eyebrow}</span>
      </div>
      <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-fg mt-4">{title}</h2>
      {description && (
        <p className={`text-muted mt-4 max-w-2xl leading-relaxed ${centered ? "mx-auto" : ""}`}>{description}</p>
      )}
    </Reveal>
  );
}
