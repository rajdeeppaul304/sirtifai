import { Header } from "../../components/layout/Header"
import { Footer } from "../../components/layout/Footer"
import { FaqHero } from "@/components/sections/FaqHero"
import { Faqs } from "@/components/sections/Faqs"
import { GotMoreQuestions } from "@/components/sections/GotMoreQuestions"
 
export default function LearnersPage() {
  return (
    <div className="bg-[#FEF7F1] font-sans min-h-screen overflow-x-hidden">
      <Header />
       <FaqHero/>
       <Faqs/>
       <GotMoreQuestions/>   
      <Footer />
    </div>
  )
}
