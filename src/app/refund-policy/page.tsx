import { Header } from "../../components/layout/Header"
import { Footer } from "../../components/layout/Footer"
import RefundPolicy  from "../../components/policies/RefundPolicy"

export default function RefundPolicyPage() {
  return (
    <div className="bg-[#FEF7F1] font-sans min-h-screen overflow-x-hidden">
      <Header />
      <RefundPolicy />
      <Footer />
    </div>
  )
}
