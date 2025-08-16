"use client"

import type React from "react"
import { motion } from "framer-motion"

// Data matching design reference
const benefits = [
  {
    title: "Real Projects with Monthly Pay",
    description: "Work on actual client projects with guaranteed monthly payments.",
  },
  {
    title: "Mentor Feedback on Every Task",
    description: "Get professional guidance to improve your skills with each project.",
  },
  {
    title: "Legal Contracts (Elite only)",
    description: "Professional legal protection for your freelance work.",
  },
  {
    title: "Career & Client Growth",
    description: "Build long-term relationships with clients and expand your network.",
  },
  {
    title: "Verified Portfolio Access",
    description: "Showcase your verified work experience to future clients.",
  },
  {
    title: "AI Resume & Profile Setup",
    description: "Get professional help setting up your freelance profile.",
  },
]

const WhatYouGetSection: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <motion.h2
          className="text-4xl md:text-5xl font-bold tracking-tight mb-14"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          What You Get
        </motion.h2>
        <motion.div
          className="grid gap-x-12 gap-y-12 md:grid-cols-3 text-left mb-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {benefits.map((b, index) => (
            <motion.div
              key={b.title}
              className="flex flex-col space-y-2"
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{
                duration: 0.5,
                delay: 0.3 + index * 0.1,
                ease: "easeOut",
              }}
              viewport={{ once: true }}
              whileHover={{
                scale: 1.05,
                x: 5,
                transition: { duration: 0.2 },
              }}
            >
              <div className="flex items-start gap-3">
                <motion.span
                  className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-orange-500 flex-shrink-0 mt-1"
                  aria-hidden="true"
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  transition={{ duration: 0.3 }}
                >
                  <svg width="12" height="12" viewBox="0 0 16 16" fill="none">
                    <path
                      d="M4 8.2l2.4 2.4L12 5"
                      stroke="#fff"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </motion.span>
                <div>
                  <h3 className="font-semibold text-sm md:text-base text-gray-900 leading-snug mb-1">{b.title}</h3>
                  <p className="text-gray-600 text-xs md:text-sm leading-relaxed">{b.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-flex items-center gap-2 rounded-md bg-slate-200/70 px-5 py-3 text-[13px] md:text-sm font-medium text-gray-800"
            whileHover={{ scale: 1.05, y: -2 }}
            transition={{ duration: 0.2 }}
          >
            <motion.svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-slate-600"
              aria-hidden="true"
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.5 }}
            >
              <path d="M12 2l3 7h7l-5.5 4.5L18 22l-6-4-6 4 1.5-8.5L2 9h7z" />
            </motion.svg>
            <span className="font-bold">
              <span>Bonus:</span> Certificate of Freelance Readiness (Sirtifai Verified)
            </span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default WhatYouGetSection
