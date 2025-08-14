"use client"
import { Header } from "../../components/layout/Header"
import { Footer } from "../../components/layout/Footer"
import InvoiceComponent from "../../components/sections/invoice/invoice-component"

export default function InvoicePage() {
  return (
    <div className="bg-[#FEF7F1] font-sans min-h-screen">
      <Header />
      <InvoiceComponent />
      <Footer />
    </div>
  )
}
