import { Header } from "../../components/layout/Header"
import { Footer } from "../../components/layout/Footer"
import { CertificationsHeroSection } from "../../components/sections/CertificationsHeroSection"
import { NSQFCredibilitySection } from "../../components/sections/NSQFCredibilitySection"
import { CertificationsToolsSection } from "../../components/sections/CertificationsToolsSection"
import { SkillsProofBanner } from "../../components/sections/SkillsProofBanner"


export default function CertificationsPage() {
  return (
    <div className="bg-[#FEF7F1] font-sans min-h-screen overflow-x-hidden">
      <Header />
      <CertificationsHeroSection />
      <NSQFCredibilitySection />

        {/* Industries ribbon */}
        <section className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-6 py-4 overflow-x-auto">
          <div className="flex gap-10 opacity-90 text-sm whitespace-nowrap">
            {[
              "HR",
              "Finance",
              "Legal",
              "Education",
              "Construction",
              "Healthcare",
              "Aerospace",
              "BFSI",
            ].map((i) => (
              <span key={i} className="italic">
                {i}
              </span>
            ))}
          </div>
        </div>
      </section>

      
             <CertificationsToolsSection />
       <SkillsProofBanner />

      
      <Footer />
    </div>
  );
}
