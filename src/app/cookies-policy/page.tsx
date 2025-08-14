import { Header } from "../../components/layout/Header"
import { Footer } from "../../components/layout/Footer"
import CookiesPolicy  from "../../components/policies/CookiesPolicy"

export default function CookiesPolicyPage() {
  return (
    <div className="bg-[#FEF7F1] font-sans min-h-screen overflow-x-hidden">
      <Header />
      <CookiesPolicy />
      <Footer />
    </div>
  )
}
