import { Header } from "../../components/layout/Header"
import { Footer } from "../../components/layout/Footer"
import { AboutUsPage } from "../../components/sections/AboutUsPage"

export default function AboutPage() {
  return (
    <div className="bg-[#FEF7F1] font-sans min-h-screen overflow-x-hidden">
      <Header />
      <AboutUsPage />
      <Footer />
    </div>
  )
}
