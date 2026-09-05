import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/portfolio/hero";
import {
  AboutSection,
  CertificatesSection,
  ContactSection,
  EducationSection,
  ExperienceSection,
  ProjectsSection,
  SkillsSection,
} from "@/components/portfolio/sections";
import { SiteFooter } from "@/components/portfolio/site-footer";
import { SiteHeader } from "@/components/portfolio/site-header";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  return (
    <div className="min-h-screen">
      <SiteHeader />
      <main>
        <Hero />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ExperienceSection />
        <EducationSection />
        <CertificatesSection />
        <ContactSection />
      </main>
      <SiteFooter />
    </div>
  );
}
