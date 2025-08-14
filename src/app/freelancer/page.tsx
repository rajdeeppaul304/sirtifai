import { Header } from "../../components/layout/Header"
import { Footer } from "../../components/layout/Footer"
import WhatIsSection from "../../components/sections/WhatIsSection"
import PricingSection from "../../components/sections/PricingSection"
import TestimonialSection from "../../components/sections/TestimonialSection"
import WhoIsThisForSection from "../../components/sections/WhoIsThisForSection"
import WhatYouGetSection from "../../components/sections/WhatYouGetSection"
import TestimonialsSection from "../../components/sections/TestimonialsSectionFreelancer"
import AddOnsSection from "../../components/sections/AddOnsSection"
import BonusesSection from "../../components/sections/BonusesSection"
import FinalCTASection from "../../components/sections/FinalCTASection"
export default function FreelancerPage() {
  return (
    <div className="bg-[#FEF7F1] font-sans min-h-screen overflow-x-hidden">
      <Header />
      <WhatIsSection />
      <PricingSection />
      <TestimonialSection />
      <WhoIsThisForSection />
      <WhatYouGetSection />
      <TestimonialsSection />
      <AddOnsSection />
      <BonusesSection />
      <FinalCTASection />
      <Footer />
    </div>
  )
}
