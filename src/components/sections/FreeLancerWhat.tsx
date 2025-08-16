"use client"

import type React from "react"
import { motion } from "framer-motion"

type InfoCard = { title: string; content: string }

const cardData: InfoCard[] = [
  {
    title: "Income from Month 1",
    content: "Start earning from your very first month in the programme.",
  },
  {
    title: "Deel™ Payroll Integration",
    content: "Professional payroll system for reliable monthly payments.",
  },
  {
    title: "Legal & Tax Compliant",
    content: "All work is legally documented and tax-compliant.",
  },
  {
    title: "Real Clients, Not Just Gig",
    content: "Work with established businesses on meaningful projects.",
  },
]

const FreeLancerWhat: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <motion.h2
          className="text-4xl md:text-5xl font-bold tracking-tight mb-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          What Is The Freelancer Programme?
        </motion.h2>
        <motion.p
          className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-12 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          Sirtifai&apos;s Freelancer Programme is a structured platform for freelancers, freshers, and career restarters
          to earn verified income through real projects while gaining mentorship, legal protection, and long-term client
          access.
        </motion.p>
        <motion.div
          className="grid grid-cols-2 justify-center place-items-center lg:flex lg:flex-nowrap lg:justify-center gap-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          {cardData.map((c, index) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{
                duration: 0.6,
                delay: 0.4 + index * 0.1,
                ease: "easeOut",
              }}
              viewport={{ once: true }}
              whileHover={{
                scale: 1.05,
                y: -5,
                transition: { duration: 0.2 },
              }}
            >
              <Card title={c.title} content={c.content} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

// Reusable card component (placed at bottom per request)
interface CardProps {
  title: string
  content: string
}

const Card: React.FC<CardProps> = ({ title, content }) => (
  <div className="bg-white border border-gray-200 rounded-xl shadow-lg hover:shadow-lg transition-shadow px-6 py-7 w-72 shrink-0 flex flex-col text-left min-h-[170px]">
    <motion.span
      className="inline-flex items-center justify-center w-6 h-6 bg-orange-500 rounded-full text-white mb-4"
      whileHover={{ rotate: 360, scale: 1.1 }}
      transition={{ duration: 0.3 }}
    >
      <svg
        width="14"
        height="14"
        viewBox="0 0 20 20"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M5 10l3 3 7-7" />
      </svg>
    </motion.span>
    <h3 className="font-semibold text-lg mb-2 leading-snug">{title}</h3>
    <p className="text-gray-600 text-sm md:text-base leading-relaxed">{content}</p>
  </div>
)

export default FreeLancerWhat
