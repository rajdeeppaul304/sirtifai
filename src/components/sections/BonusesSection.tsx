"use client"

import type React from "react"
import { motion } from "framer-motion"

interface Bonus {
  icon: string // image path
  title: string
  subtitle: string
}

const bonuses: Bonus[] = [
  {
    icon: "/assets/freelancer/resume.svg",
    title: "Free Resume Review",
    subtitle: "₹999 value",
  },
  {
    icon: "/assets/freelancer/job.svg",
    title: "1 Extra Paid Project",
    subtitle: "Additional income opportunity",
  },
  {
    icon: "/assets/freelancer/document.svg",
    title: "Bonus Legal Contract Templates",
    subtitle: "Professional documentation",
  },
  {
    icon: "/assets/freelancer/tick.svg",
    title: "7-Day Income Challenge Guarantee*",
    subtitle: "Start earning in your first week",
  },
]

const BonusesSection: React.FC = () => {
  return (
    <section className="py-24 bg-[#FCF8F5]">
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2
          className="text-center text-4xl md:text-5xl font-bold tracking-tight mb-14 leading-tight"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          Enroll Today And Get These Bonuses Free:
        </motion.h2>
        <motion.div
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {bonuses.map((b, index) => (
            <motion.div
              key={b.title}
              className="bg-white rounded-md border border-gray-200 shadow-lg hover:shadow-lg transition-shadow px-6 py-8 text-center flex flex-col items-center"
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{
                duration: 0.6,
                delay: 0.3 + index * 0.1,
                ease: "easeOut",
              }}
              viewport={{ once: true }}
              whileHover={{
                scale: 1.05,
                y: -10,
                transition: { duration: 0.3 },
              }}
            >
              <motion.div
                className="flex items-center justify-center w-10 h-10 rounded bg-orange-50 mb-5"
                whileHover={{ scale: 1.2, rotate: 360 }}
                transition={{ duration: 0.4 }}
              >
                <img src={b.icon || "/placeholder.svg"} alt="" className="w-6 h-6 object-contain" />
              </motion.div>
              <motion.h3
                className="font-semibold text-[13px] md:text-sm text-gray-900 leading-snug mb-2"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.4 + index * 0.05 }}
                viewport={{ once: true }}
              >
                {b.title}
              </motion.h3>
              <motion.p
                className="text-[11px] md:text-xs text-gray-600 leading-relaxed max-w-[180px]"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.5 + index * 0.05 }}
                viewport={{ once: true }}
              >
                {b.subtitle}
              </motion.p>
            </motion.div>
          ))}
        </motion.div>
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <motion.button
            className="inline-flex justify-center items-center rounded-sm bg-orange-500 hover:bg-orange-600 text-white font-medium text-sm px-8 py-3 shadow-sm transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500/40"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Apply Now
          </motion.button>
          <motion.button
            className="inline-flex justify-center items-center rounded-sm border border-orange-300 text-orange-600 font-medium text-sm px-8 py-3 bg-white hover:bg-orange-50 transition-colors shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500/30"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Talk to a Career Advisor
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

export default BonusesSection
