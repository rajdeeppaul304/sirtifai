import { Header } from "../../components/layout/Header"
import { Footer } from "../../components/layout/Footer"
import LegalPolicies from "../../components/policies/LegalPolicies"
 
export default function LegalPoliciesPage() {
  return (
    <div className="bg-[#FEF7F1] font-sans min-h-screen overflow-x-hidden">
      <Header />
      <LegalPolicies />
      <Footer />
    </div>
  )
}
