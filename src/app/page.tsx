import { AboutSectionHome, Hero, LocationsSection, PartnersSection, ServicesSection } from "@/components/main";

export default function Home() {
  return (
    <main className="pt-9">
      <Hero />
      <ServicesSection />
      <AboutSectionHome />
      <PartnersSection />
      <LocationsSection />
    </main>
  );
}
