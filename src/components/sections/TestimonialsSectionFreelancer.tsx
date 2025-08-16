"use client"

import type React from "react"
import { motion } from "framer-motion"

interface Testimonial {
  name: string
  subtitle: string
  quote: string
  plan: string
  rating: number // 0-5
}

const testimonials: Testimonial[] = [
  {
    name: "Neha",
    subtitle: "Freelancer (Hyderabad)",
    quote: "I earned ₹28K in my 2nd month from Sirtifai Elite.",
    plan: "Elite Plan Member",
    rating: 5,
  },
  {
    name: "Ravi",
    subtitle: "Tier-2 City Candidate",
    quote: "From ₹0 to ₹30K/month with legal payroll & EPF.",
    plan: "Pro Plan Member",
    rating: 4, // design shows slightly fewer stars
  },
]

const Star: React.FC<{ filled?: boolean }> = ({ filled = true }) => (
  <motion.svg
    className={`w-4 h-4 ${filled ? "text-yellow-400" : "text-gray-300"}`}
    viewBox="0 0 20 20"
    fill="currentColor"
    aria-hidden="true"
    whileHover={{ scale: 1.2, rotate: 360 }}
    transition={{ duration: 0.3 }}
  >
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.122 3.455a1 1 0 00.95.69h3.632c.969 0 1.371 1.24.588 1.81l-2.938 2.136a1 1 0 00-.364 1.118l1.122 3.455c.3.921-.755 1.688-1.54 1.118L10.95 14.347a1 1 0 00-1.175 0L6.479 16.709c-.784.57-1.838-.197-1.539-1.118l1.122-3.455a1 1 0 00-.364-1.118L2.76 8.882c-.783-.57-.38-1.81.588-1.81h3.632a1 1 0 00.95-.69l1.12-3.455z" />
  </motion.svg>
)

const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-20 bg-[#FCF8F5]">
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2
          className="text-center text-4xl md:text-5xl font-bold tracking-tight mb-14"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          Real People. Real Income.
        </motion.h2>
        <motion.div
          className="grid gap-8 md:grid-cols-2"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {testimonials.map((t, index) => (
            <motion.div
              key={t.name}
              className="bg-white rounded-md border border-gray-200 shadow-lg hover:shadow-lg transition-shadow px-8 py-8 flex flex-col justify-between"
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{
                duration: 0.6,
                delay: 0.3 + index * 0.2,
                ease: "easeOut",
              }}
              viewport={{ once: true }}
              whileHover={{
                scale: 1.02,
                y: -5,
                transition: { duration: 0.3 },
              }}
            >
              <div className="mb-6">
                <motion.h3
                  className="font-semibold text-base md:text-lg text-gray-900 leading-snug"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  viewport={{ once: true }}
                >
                  {t.name}
                </motion.h3>
                <motion.p
                  className="text-[13px] md:text-sm text-gray-500 mt-1"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  viewport={{ once: true }}
                >
                  {t.subtitle}
                </motion.p>
                <motion.p
                  className="text-sm md:text-[15px] text-gray-800 mt-6 leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  viewport={{ once: true }}
                >
                  "{t.quote}"
                </motion.p>
              </div>
              <motion.div
                className="flex items-center gap-3 pt-2"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} filled={i < t.rating} />
                  ))}
                </div>
                <span className="text-[11px] md:text-xs font-medium text-gray-600">{t.plan}</span>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default TestimonialsSection
