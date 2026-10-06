import RootDocument from "@/components/RootDocument";
import { buildMetadata } from "@/i18n/metadata";

// Root layout da versão em português (servida em "/")
export const metadata = buildMetadata("pt");
export { viewport } from "@/i18n/metadata";

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <RootDocument locale="pt">{children}</RootDocument>;
}
