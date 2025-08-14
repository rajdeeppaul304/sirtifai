"use client"
import { Header } from "../../components/layout/Header"
import { Footer } from "../../components/layout/Footer"
import AdminDashboard from "../../components/sections/admin/admin-dashboard"

export default function AdminPage() {
  return (
    <div className="bg-[#FEF7F1] font-sans min-h-screen">
      <Header />
      <AdminDashboard />
      <Footer />
    </div>
  )
}
