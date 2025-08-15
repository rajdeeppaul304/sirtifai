import { Header } from "../../components/layout/Header"
import { Footer } from "../../components/layout/Footer"
import { InternationalHeroSection } from "../../components/sections/InternationalHeroSection"
import { GlobalCareerRoadmap } from "../../components/sections/GlobalCareerRoadmap"
import { InternationalPricingPlans } from "../../components/sections/InternationalPricingPlans"
import { ComprehensiveVisaSupport } from "../../components/sections/ComprehensiveVisaSupport"
import { RealSuccessStories } from "../../components/sections/RealSuccessStories"
import { OptionalAddOns } from "../../components/sections/OptionalAddOns"
import { SuccessStoryCTABanner } from "../../components/sections/SuccessStoryCTABanner"

export default function SirtifyInternationalPage() {
  return (
    <div className="bg-[#FEF7F1] font-sans min-h-screen overflow-x-hidden">
      <Header />
      <InternationalHeroSection />
      <GlobalCareerRoadmap />
      <InternationalPricingPlans />
      <ComprehensiveVisaSupport />
      <RealSuccessStories />
      <OptionalAddOns />
      <SuccessStoryCTABanner />
      <Footer />
    </div>
  )
}
