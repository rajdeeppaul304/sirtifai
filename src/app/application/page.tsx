"use client"
import { Header } from "../../components/layout/Header"
import { Footer } from "../../components/layout/Footer"
import ApplicationForm from "../../components/sections/application/application-form"

export default function ApplicationPage() {
  return (
    <div className="bg-[#FEF7F1] font-sans min-h-screen">
      <Header />
      <ApplicationForm />
      <Footer />
    </div>
  )
}
