"use client"

import { CheckCircle2 } from "lucide-react"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"

const MotionSection = motion.section
const MotionDiv = motion.div
const MotionH2 = motion.h2
const MotionH3 = motion.h3
const MotionP = motion.p
const MotionButton = motion.button

interface ToolCard {
  id: string
  title: string
  description: string
  features: string[]
  buttonText: string
}

const TOOL_CARDS: ToolCard[] = [
  {
    id: "career-quiz",
    title: "Career Quiz",
    description: "Discover your ideal career path based on your skills and interests",
    features: ["5-minute assessment", "Personalized recommendations", "Industry-specific insights"],
    buttonText: "Take Quiz Now",
  },
  {
    id: "ai-resume-score",
    title: "AI Resume Score",
    description: "Get instant feedback on your resume with AI-powered analysis",
    features: ["ATS compatibility check", "Industry-specific scoring", "Actionable improvement tips"],
    buttonText: "Check Your Resume",
  },
  {
    id: "job-role-mapping",
    title: "Job Role Mapping",
    description: "Explore career paths and skill requirements for in-demand roles",
    features: ["Interactive career paths", "Skill gap analysis", "Salary insights by location"],
    buttonText: "Explore Job Roles",
  },
]

export const ToolsSection = () => {
  const sectionRef = useRef(null)
  const headerRef = useRef(null)
  const cardsRef = useRef(null)

  const sectionInView = useInView(sectionRef, { once: true, margin: "-50px" })
  const headerInView = useInView(headerRef, { once: true, margin: "-100px" })
  const cardsInView = useInView(cardsRef, { once: true, margin: "-100px" })

  return (
    <MotionSection
      ref={sectionRef}
      className="w-full bg-[#FEF7F1] py-20 px-3 sm:px-0"
      initial={{ opacity: 0 }}
      animate={sectionInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <MotionDiv
          ref={headerRef}
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={headerInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <MotionH2
            className="text-3xl sm:text-4xl font-semibold text-gray-900 mb-4"
            initial={{ opacity: 0, y: 30 }}
            animate={headerInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Tools To Accelerate Your Journey
          </MotionH2>
          <MotionP
            className="text-sm sm:text-xl  text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={headerInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Free resources to help you identify your strengths, plan your career path, and showcase your skills.
          </MotionP>
        </MotionDiv>

        <MotionDiv
          ref={cardsRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial={{ opacity: 0, y: 30 }}
          animate={cardsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {TOOL_CARDS.map((tool, index) => (
            <MotionDiv
              key={tool.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={cardsInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 50, scale: 0.9 }}
              transition={{ duration: 0.4, delay: 0.4 + index * 0.2 }}
              whileHover={{ scale: 1.02, y: -5 }}
            >
              <MotionDiv
                className="bg-[#FF8F63] p-6 text-white"
                initial={{ opacity: 0, y: -20 }}
                animate={cardsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
                transition={{ duration: 0.4, delay: 0.6 + index * 0.2 }}
              >
                <MotionH3
                  className="text-xl font-bold mb-2"
                  initial={{ opacity: 0, x: -20 }}
                  animate={cardsInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ duration: 0.3, delay: 0.8 + index * 0.2 }}
                >
                  {tool.title}
                </MotionH3>
                <MotionP
                  className="text-orange-100 text-sm leading-relaxed"
                  initial={{ opacity: 0, x: -20 }}
                  animate={cardsInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ duration: 0.3, delay: 1.0 + index * 0.2 }}
                >
                  {tool.description}
                </MotionP>
              </MotionDiv>

              <MotionDiv
                className="p-6"
                initial={{ opacity: 0, y: 20 }}
                animate={cardsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.4, delay: 0.8 + index * 0.2 }}
              >
                <div className="space-y-3 mb-6">
                  {tool.features.map((feature, featureIndex) => (
                    <MotionDiv
                      key={featureIndex}
                      className="flex items-center"
                      initial={{ opacity: 0, x: -20 }}
                      animate={cardsInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                      transition={{ duration: 0.3, delay: 1.0 + index * 0.2 + featureIndex * 0.1 }}
                    >
                      <CheckCircle2 size={20} className="text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </MotionDiv>
                  ))}
                </div>

                <MotionButton
                  className="w-full bg-orange-500 text-white py-3 px-6 rounded-full font-semibold hover:bg-orange-600 transition-colors"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={cardsInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3, delay: 1.4 + index * 0.2 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {tool.buttonText}
                </MotionButton>
              </MotionDiv>
            </MotionDiv>
          ))}
        </MotionDiv>
      </div>
    </MotionSection>
  )
}
