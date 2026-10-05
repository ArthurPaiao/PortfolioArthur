import type { SVGProps } from "react";

export type PixelMap = {
  /** Uma string por linha; cada caractere é um pixel. "." é transparente. */
  rows: readonly string[];
  /** Cor de cada caractere usado nas linhas. Aceita "currentColor" e var(--token). */
  palette: Readonly<Record<string, string>>;
};

type Props = Omit<SVGProps<SVGSVGElement>, "children"> & {
  map: PixelMap;
  /** Tamanho em px de cada pixel da arte. */
  scale?: number;
  title?: string;
};

// Junta pixels vizinhos da mesma cor numa linha em um único retângulo e
// agrupa tudo por cor: um <path> por cor em vez de um <rect> por pixel.
function buildPaths(map: PixelMap) {
  const byColor = new Map<string, string[]>();
  map.rows.forEach((row, y) => {
    let x = 0;
    while (x < row.length) {
      const ch = row[x];
      let run = 1;
      while (x + run < row.length && row[x + run] === ch) run++;
      if (ch !== "." && ch !== " " && map.palette[ch]) {
        const list = byColor.get(ch) ?? [];
        list.push(`M${x} ${y}h${run}v1h-${run}z`);
        byColor.set(ch, list);
      }
      x += run;
    }
  });
  return [...byColor.entries()].map(([ch, d]) => ({ ch, fill: map.palette[ch], d: d.join("") }));
}

export default function PixelArt({ map, scale = 4, title, className = "", ...rest }: Props) {
  const width = Math.max(...map.rows.map((r) => r.length));
  const height = map.rows.length;
  const paths = buildPaths(map);

  return (
    <svg
      viewBox={`0 0 ${width} ${height}`}
      width={width * scale}
      height={height * scale}
      shapeRendering="crispEdges"
      role={title ? "img" : undefined}
      aria-hidden={title ? undefined : true}
      className={className}
      {...rest}
    >
      {title && <title>{title}</title>}
      {paths.map((p) => (
        <path key={p.ch} fill={p.fill} d={p.d} />
      ))}
    </svg>
  );
}
