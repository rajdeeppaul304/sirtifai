import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import "./globals.css"

export const metadata: Metadata = {
  title: "Sirtify - Professional Certification & Training Platform",
  description:
    "Transform your career with Sirtify's comprehensive certification programs, professional training, and global career opportunities.",
  generator: "Next.js",
  keywords: "certification, training, professional development, career growth, skills development",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={GeistSans.className}>{children}</body>
    </html>
  )
}
