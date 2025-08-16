"use client"
import { GraduationCap, Monitor, TrendingUp } from "lucide-react"
import { motion } from "framer-motion"

export const PhaseByPhaseCoverageSection = () => {
  return (
    <motion.section
      className="w-full bg-[#FEF7F1] py-10 sm:py-16 px-4 sm:px-6"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="w-full max-w-[1400px] xl:max-w-[1550px] 2xl:max-w-[1700px] mx-auto text-center">
        <motion.h2
          className="text-4xl font-bold text-gray-900 mb-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Phase-By-Phase Coverage
        </motion.h2>
        <motion.p
          className="text-gray-600 text-sm sm:text-base lg:text-xl max-w-3xl xl:max-w-4xl mx-auto mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          Our insurance protection follows you through each phase of your SPP journey, adapting to your evolving needs.
        </motion.p>

        <motion.div
          className="bg-white rounded-lg shadow-2xl shadow-black/10 overflow-hidden"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <motion.div
            className="bg-[#1f2937] text-white px-3 py-3 md:px-6 md:py-4"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <div className="grid grid-cols-[1.5fr_1.5fr_2fr] gap-3 md:gap-6">
              <div className="text-left font-bold text-sm md:text-lg">Program Phase</div>
              <div className="text-left font-bold text-sm md:text-lg">Coverage Type</div>
              <div className="text-left font-bold text-sm md:text-lg">Protection Details</div>
            </div>
          </motion.div>

          {/* Table Body */}
          <div className="divide-y divide-gray-200">
            {[
              {
                icon: GraduationCap,
                phase: "Skill Phase",
                coverage: ["Access", "Protection"],
                details: [
                  "Course completion guarantee",
                  "Platform access assurance",
                  "Learning materials availability",
                ],
                color: "bg-[#FE7642]",
              },
              {
                icon: Monitor,
                phase: "Practice Phase",
                coverage: ["Payment", "Guarantee"],
                details: [
                  "Client payment assurance",
                  "Monthly minimum income protection",
                  "Project continuity coverage",
                ],
                color: "bg-[#FE7642]",
              },
              {
                icon: TrendingUp,
                phase: "Progress Phase",
                coverage: ["Career", "Continuity"],
                details: [
                  "Placement guarantee (program-specific)",
                  "Career transition support",
                  "Re-entry assistance if needed",
                ],
                color: "bg-green-500",
              },
            ].map((row, index) => (
              <motion.div
                key={index}
                className="p-3 md:p-6"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 1.0 + index * 0.2 }}
                whileHover={{ backgroundColor: "#f9fafb" }}
              >
                <div className="grid grid-cols-[1.5fr_1.5fr_2fr] gap-3 md:gap-6 items-start">
                  <div className="flex items-center gap-2 md:gap-3">
                    <motion.div
                      className={`w-7 h-7 md:w-8 md:h-8 ${row.color} rounded-md md:rounded-lg flex items-center justify-center flex-shrink-0`}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 400 }}
                    >
                      <row.icon className="w-4 h-4 text-white" />
                    </motion.div>
                    <span className="font-medium text-gray-900 text-sm md:text-lg">{row.phase}</span>
                  </div>
                  <div className="text-left flex flex-col gap-0.5 md:gap-1 pt-0.5">
                    {row.coverage.map((item, i) => (
                      <motion.span
                        key={i}
                        className="font-medium text-gray-900 text-sm md:text-lg lg:text-xl leading-snug"
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: 1.2 + index * 0.2 + i * 0.1 }}
                      >
                        {item}
                      </motion.span>
                    ))}
                  </div>
                  <div className="text-left text-gray-600 text-xs md:text-base lg:text-lg">
                    <ul className="space-y-1">
                      {row.details.map((detail, i) => (
                        <motion.li
                          key={i}
                          initial={{ opacity: 0, x: 20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.4, delay: 1.4 + index * 0.2 + i * 0.1 }}
                        >
                          {detail}
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="mt-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 1.8 }}
        >
          <p className="text-gray-500 text-sm max-w-4xl mx-auto">
            Note: Coverage limits and details vary by program and plan level (Basic/Pro/Elite). Please refer to your
            specific plan documentation for exact coverage details.
          </p>
        </motion.div>
      </div>
    </motion.section>
  )
}
