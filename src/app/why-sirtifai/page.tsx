import { Header } from "../../components/layout/Header"
import { Footer } from "../../components/layout/Footer"
import { WhySirtifaiHero } from "../../components/sections/why-sirtifai/WhySirtifaiHero"
import { ComparisonTable } from "../../components/sections/why-sirtifai/ComparisonTable"
import { RealProjectsSection } from "../../components/sections/why-sirtifai/RealProjectsSection"
import { NSQFCertificationSection } from "../../components/sections/why-sirtifai/NSQFCertificationSection"
import { PayrollDeelSection } from "../../components/sections/why-sirtifai/PayrollDeelSection"
import { LifetimeReentrySection } from "../../components/sections/why-sirtifai/LifetimeReentrySection"
import { AIPoweredLMSSection } from "../../components/sections/why-sirtifai/AIPoweredLMSSection"
import { CTASection } from "../../components/sections/why-sirtifai/CTASection"

export default function WhySirtifaiPage() {
  return (
    <div className="font-sans min-h-screen overflow-x-hidden">
      <Header />
      <WhySirtifaiHero />
      <ComparisonTable />
      <RealProjectsSection />
      <NSQFCertificationSection />
      <PayrollDeelSection />
      <LifetimeReentrySection />
      <AIPoweredLMSSection />
      <CTASection />
      <Footer />
    </div>
  )
}
