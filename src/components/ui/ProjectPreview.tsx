import Image from "next/image";
import type { CSSProperties } from "react";
import type { Project } from "@/data/projects";

type Props = {
  project: Pick<Project, "title" | "image" | "preview" | "demoUrl" | "githubUrl" | "slug">;
  tint: string;
  className?: string;
};

const bar = "bg-line";

function ListMock() {
  return (
    <div className="flex flex-col gap-2">
      {[0, 1, 2].map((i) => (
        <div
          key={i}
          className={`flex items-center gap-2.5 p-1.5 border ${i === 0 ? "border-line-strong bg-surface" : "border-transparent"}`}
        >
          <div className="w-6 h-6 tint-soft shrink-0" />
          <div className="flex-1 space-y-1.5">
            <div className={`${bar} h-1.5`} style={{ width: `${70 - i * 12}%` }} />
            <div className={`${bar} h-1.5 w-1/3 opacity-60`} />
          </div>
          <div className={`h-3.5 ${i === 0 ? "tint-strong w-12" : "tint-soft w-10"}`} />
        </div>
      ))}
    </div>
  );
}

function DashboardMock() {
  const heights = [40, 65, 50, 80, 58, 92, 70, 84];
  return (
    <div className="flex gap-3 h-full">
      <div className="hidden sm:flex flex-col gap-2 w-12 shrink-0 pt-1">
        <div className="h-2 tint-strong" />
        {[0, 1, 2].map((i) => (
          <div key={i} className={`${bar} h-2`} />
        ))}
      </div>
      <div className="flex-1 flex flex-col gap-3 min-w-0">
        <div className="grid grid-cols-3 gap-2">
          {[0, 1, 2].map((i) => (
            <div key={i} className="border border-line bg-surface p-2 space-y-1.5">
              <div className={`${bar} h-1.5 w-2/3 opacity-60`} />
              <div className={`h-2.5 w-1/2 ${i === 1 ? "tint-strong" : "bg-line-strong"}`} />
            </div>
          ))}
        </div>
        <div className="flex-1 flex items-end gap-1.5 border border-line bg-surface p-2 min-h-16">
          {heights.map((h, i) => (
            <div
              key={i}
              className={`flex-1 ${i === 5 ? "tint-strong" : "tint-soft"}`}
              style={{ height: `${h}%` }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function ChatMock() {
  return (
    <div className="flex flex-col gap-2">
      <div className="self-start max-w-[75%] bg-surface border border-line p-2 space-y-1.5 w-40">
        <div className={`${bar} h-1.5`} />
        <div className={`${bar} h-1.5 w-2/3`} />
      </div>
      <div className="self-end tint-soft p-2 space-y-1.5 w-32">
        <div className="h-1.5 tint-strong w-full opacity-70" />
        <div className="h-1.5 tint-strong w-1/2 opacity-70" />
      </div>
      <div className="self-start flex items-center gap-2 border border-line-strong bg-surface px-2 py-1.5">
        <div className="w-2 h-2 tint-strong tint-ring" />
        <div className={`${bar} h-1.5 w-20`} />
      </div>
    </div>
  );
}

function SiteMock() {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex items-center justify-between">
        <div className={`${bar} h-2 w-12`} />
        <div className="flex gap-1.5">
          {[0, 1, 2].map((i) => (
            <div key={i} className={`${bar} h-1.5 w-6 opacity-60`} />
          ))}
        </div>
      </div>
      <div className="space-y-1.5 pt-1">
        <div className="h-3 bg-line-strong w-4/5" />
        <div className="h-3 tint-strong w-1/2" />
      </div>
      <div className="flex gap-1.5">
        <div className="h-4 w-14 bg-fg/80" />
        <div className="h-4 w-10 border border-line-strong" />
      </div>
      <div className="grid grid-cols-3 gap-1.5 pt-1">
        {[0, 1, 2].map((i) => (
          <div key={i} className="h-8 border border-line bg-surface" />
        ))}
      </div>
    </div>
  );
}

function MapMock() {
  const pins = [
    [22, 30],
    [48, 22],
    [70, 44],
    [35, 62],
    [62, 72],
  ];
  return (
    <div
      className="relative h-full min-h-28 overflow-hidden border border-line"
      style={{
        backgroundImage:
          "linear-gradient(to right, var(--line) 1px, transparent 1px), linear-gradient(to bottom, var(--line) 1px, transparent 1px)",
        backgroundSize: "18px 18px",
      }}
    >
      <svg aria-hidden className="absolute inset-0 w-full h-full" preserveAspectRatio="none" viewBox="0 0 100 100">
        <path d="M0 70 C 25 55, 40 80, 60 50 S 90 30, 100 35" fill="none" stroke="var(--line-strong)" strokeWidth="3" />
      </svg>
      {pins.map(([x, y], i) => (
        <span
          key={i}
          className={`absolute w-2.5 h-2.5 -translate-x-1/2 -translate-y-1/2 tint-strong ${i === 2 ? "tint-ring" : ""}`}
          style={{ left: `${x}%`, top: `${y}%` }}
        />
      ))}
      <div className="absolute left-2 bottom-2 border border-line bg-surface p-1.5 space-y-1 w-20">
        <div className={`${bar} h-1.5`} />
        <div className={`${bar} h-1.5 w-1/2 opacity-60`} />
      </div>
    </div>
  );
}

// fill: o mockup ocupa toda a altura disponível; senão fica centralizado
const mocks: Record<Project["preview"], { Component: () => React.JSX.Element; fill: boolean }> = {
  list: { Component: ListMock, fill: false },
  dashboard: { Component: DashboardMock, fill: true },
  chat: { Component: ChatMock, fill: false },
  site: { Component: SiteMock, fill: false },
  map: { Component: MapMock, fill: true },
};

// Endereço real só aparece sobre um screenshot real; o mockup é sinalizado como ilustração.
function frameLabel(project: Props["project"]) {
  const url = project.demoUrl ?? project.githubUrl;
  if (project.image && url) return url.replace(/^https?:\/\/(www\.)?/, "");
  return "prévia ilustrativa";
}

export default function ProjectPreview({ project, tint, className = "" }: Props) {
  const mock = mocks[project.preview];

  return (
    <div
      className={`pixel-box relative flex flex-col bg-bg overflow-hidden transition-transform duration-150 group-hover:-translate-y-1 ${className}`}
      style={{ "--tint": tint } as CSSProperties}
    >
      {/* Barra do "navegador" */}
      <div className="flex items-center gap-2 px-3 h-7 border-b border-line bg-surface-2/60 shrink-0">
        <div className="flex gap-1">
          <span className="w-2 h-2 bg-line-strong" />
          <span className="w-2 h-2 bg-line-strong" />
          <span className="w-2 h-2 bg-line-strong" />
        </div>
        <div className="flex-1 min-w-0 mx-auto max-w-[70%] bg-bg/80 border border-line px-2 py-0.5 font-mono text-[10px] text-subtle truncate text-center">
          {frameLabel(project)}
        </div>
      </div>

      <div className="relative flex-1 min-h-0">
        {project.image ? (
          <Image
            src={project.image}
            alt={`Captura de tela do projeto ${project.title}`}
            fill
            sizes="(min-width: 1024px) 480px, 100vw"
            className="object-cover object-top"
          />
        ) : (
          <div aria-hidden className={`h-full p-3 flex flex-col ${mock.fill ? "" : "justify-center"}`}>
            <div className={mock.fill ? "flex-1 min-h-0" : ""}>
              <mock.Component />
            </div>
          </div>
        )}
        {/* Brilho suave da cor do projeto */}
        <div
          aria-hidden
          className="pointer-events-none absolute -bottom-10 -right-10 w-40 h-40 blur-2xl opacity-60 tint-soft"
        />
      </div>
    </div>
  );
}
