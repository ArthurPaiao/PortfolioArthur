import RootDocument from "@/components/RootDocument";
import { buildMetadata } from "@/i18n/metadata";

// Root layout da versão em inglês (servida em "/en")
export const metadata = buildMetadata("en");
export { viewport } from "@/i18n/metadata";

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <RootDocument locale="en">{children}</RootDocument>;
}
