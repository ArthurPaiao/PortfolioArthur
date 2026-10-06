import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Hobbies from "@/components/Hobbies";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Certifications from "@/components/Certifications";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ui/ScrollProgress";
import ClickSparkles from "@/components/ui/ClickSparkles";
import { getProfile } from "@/data/profile";
import { localePath, type Locale } from "@/i18n/locales";

// Página única do portfólio, renderizada uma vez por idioma
export default function HomePage({ locale }: { locale: Locale }) {
  const profile = getProfile(locale);

  // Dados estruturados (schema.org) para buscadores entenderem quem é a pessoa do site
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profile.name,
    jobTitle: profile.role,
    url: new URL(localePath[locale], profile.siteUrl).href,
    email: `mailto:${profile.email}`,
    address: { "@type": "PostalAddress", addressLocality: "São Paulo", addressRegion: "SP", addressCountry: "BR" },
    alumniOf: { "@type": "CollegeOrUniversity", name: profile.education.school },
    worksFor: { "@type": "Organization", name: "Cielo" },
    knowsLanguage: profile.languages.map((lang) => lang.name),
    knowsAbout: ["Java", "Spring Boot", "React", "Next.js", "TypeScript", "PostgreSQL", "Docker", "SQL"],
    sameAs: [profile.github, profile.linkedin],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
      />
      <ScrollProgress />
      <ClickSparkles />
      <Navbar locale={locale} />
      <main>
        <Hero locale={locale} />
        <About locale={locale} />
        <Hobbies locale={locale} />
        <Experience locale={locale} />
        <Projects locale={locale} />
        <Skills locale={locale} />
        <Certifications locale={locale} />
        <Contact locale={locale} />
      </main>
      <Footer locale={locale} />
    </>
  );
}
