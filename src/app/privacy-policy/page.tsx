import { Header } from "../../components/layout/Header"
import { Footer } from "../../components/layout/Footer"
import PrivacyPolicy  from "../../components/policies/PrivacyPolicy"

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-[#FEF7F1] font-sans min-h-screen overflow-x-hidden">
      <Header />
      <PrivacyPolicy />
      <Footer />
    </div>
  )
}
