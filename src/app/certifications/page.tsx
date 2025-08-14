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
      <CertificationsToolsSection />
      <SkillsProofBanner />
      <Footer />
    </div>
  )
}
