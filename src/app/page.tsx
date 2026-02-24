import ThreeCanvas from "@/components/ThreeCanvas";
import ParticleBackground from "@/components/ParticleBackground";
import { HeroSection } from "@/components/HeroSection";
import { ShowreelSection } from "@/components/ShowreelSection";
import { FeaturedWorkSection } from "@/components/FeaturedWorkSection";
import { SkillsSection } from "@/components/SkillsSection";
import { AboutSection } from "@/components/AboutSection";
import { ContactSection } from "@/components/ContactSection";

export default function Page() {
  return (
    <main className="relative min-h-screen">
      <ThreeCanvas />
      <ParticleBackground />

      {/* Overlay Content */}
      <div className="relative z-10 w-full flex flex-col items-center">
        <HeroSection />
        <ShowreelSection />
        <FeaturedWorkSection />
        <SkillsSection />
        <AboutSection />
        <ContactSection />
      </div>
    </main>
  );
}
