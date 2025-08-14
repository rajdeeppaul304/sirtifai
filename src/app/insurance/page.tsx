import { Header } from "../../components/layout/Header"
import { Footer } from "../../components/layout/Footer"
import { InsuranceHeroSection } from "../../components/sections/InsuranceHeroSection"
import { CoverageAtAGlanceSection } from "../../components/sections/CoverageAtAGlanceSection"
import { PhaseByPhaseCoverageSection } from "../../components/sections/PhaseByPhaseCoverageSection"
import { InsuranceNetworkSection } from "../../components/sections/InsuranceNetworkSection"
import { HowToFileClaimSection } from "../../components/sections/HowToFileClaimSection"
import { InsuranceSupportFAQSection } from "../../components/sections/InsuranceSupportFAQSection"
import { InsuranceCTASection } from "../../components/sections/InsuranceCTASection"

export default function InsurancePage() {
  return (
    <div className="bg-[#FEF7F1] font-sans min-h-screen overflow-x-hidden">
      <Header />
      <InsuranceHeroSection />
      <CoverageAtAGlanceSection />
      <PhaseByPhaseCoverageSection />
      <InsuranceNetworkSection />
      <HowToFileClaimSection />
      <InsuranceSupportFAQSection />
      <InsuranceCTASection />
      <Footer />
    </div>
  )
}
