"use client"
import { Shield, Users, HeartPulse, Globe, FileCheck, Truck } from "lucide-react"
import { motion } from "framer-motion"

export const CoverageAtAGlanceSection = () => {
  return (
    <motion.section
      className="w-full bg-white py-10 sm:py-16 px-4 sm:px-6"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="w-full max-w-[1400px] xl:max-w-[1550px] 2xl:max-w-[1700px] mx-auto text-center">
        {/* Title */}
        <motion.h2
          className="text-4xl font-bold text-gray-900 mb-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Coverage At A Glance
        </motion.h2>
        <motion.p
          className="text-gray-600 text-base sm:text-lg lg:text-xl max-w-3xl xl:max-w-4xl mx-auto mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          Our insurance plans are tailored to your specific program needs, ensuring comprehensive protection throughout
          your journey.
        </motion.p>

        {/* Two Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 xl:gap-14">
          {/* Card 1 - Domestic Freelancer Protection */}
          <motion.div
            className="relative bg-white rounded-2xl shadow-xl shadow-black/10 p-8 text-left"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            whileHover={{ y: -5, scale: 1.02 }}
          >
            {/* Top Border Accent */}
            <div className="absolute top-0 left-0 right-0 h-2 rounded-t-2xl bg-gradient-to-r from-yellow-400 to-orange-400" />

            {/* Badge */}
            <motion.div
              className="absolute top-6 right-6"
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.8 }}
            >
              <span className="px-3 py-1 text-sm bg-gray-100 text-gray-800 rounded-md">Up to ₹40,000/month</span>
            </motion.div>

            {/* Icon */}
            <motion.div
              className="w-12 h-12 rounded-lg bg-orange-100 flex items-center justify-center mb-6"
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 500, delay: 1.0 }}
            >
              <Shield className="w-6 h-6 text-orange-500" />
            </motion.div>

            {/* Heading */}
            <motion.h3
              className="text-xl font-bold text-gray-900 mb-6"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 1.2 }}
            >
              Domestic Freelancer Protection
            </motion.h3>

            {/* Features */}
            <motion.ul className="space-y-4 mb-8">
              {[
                {
                  icon: Shield,
                  title: "Payment Guarantee",
                  desc: "Ensures you receive payment for all completed work",
                },
                { icon: Users, title: "EPF & ESI Coverage", desc: "Social security benefits through formal payroll" },
                {
                  icon: HeartPulse,
                  title: "Health & Accident Coverage",
                  desc: "Basic medical and accident protection",
                },
              ].map((item, index) => (
                <motion.li
                  key={index}
                  className="flex items-start gap-3"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 1.4 + index * 0.1 }}
                >
                  <item.icon className="w-5 h-5 text-orange-500 mt-1" />
                  <div>
                    <p className="font-semibold text-gray-900">{item.title}</p>
                    <p className="text-gray-600 text-sm md:text-base lg:text-lg">{item.desc}</p>
                  </div>
                </motion.li>
              ))}
            </motion.ul>

            {/* CTA */}
            <motion.button
              className="w-full py-3 bg-[#FE7642] text-white font-medium rounded-full hover:bg-orange-600 transition"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 1.8 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              View Detailed Coverage
            </motion.button>
          </motion.div>

          {/* Card 2 - International Track Protection */}
          <motion.div
            className="relative bg-white rounded-2xl shadow-xl shadow-black/10 p-8 text-left"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.8 }}
            whileHover={{ y: -5, scale: 1.02 }}
          >
            {/* Top Border Accent */}
            <div className="absolute top-0 left-0 right-0 h-2 rounded-t-2xl bg-gradient-to-r from-orange-400 to-red-400" />

            {/* Badge */}
            <motion.div
              className="absolute top-6 right-6"
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 1.0 }}
            >
              <span className="px-3 py-1 text-sm bg-gray-100 text-gray-800 rounded-md">Up to ₹80,000/month</span>
            </motion.div>

            {/* Icon */}
            <motion.div
              className="w-12 h-12 rounded-lg bg-orange-100 flex items-center justify-center mb-6"
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 500, delay: 1.2 }}
            >
              <Globe className="w-6 h-6 text-orange-500" />
            </motion.div>

            {/* Heading */}
            <motion.h3
              className="text-xl font-bold text-gray-900 mb-6"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 1.4 }}
            >
              International Track Protection
            </motion.h3>

            {/* Features */}
            <motion.ul className="space-y-4 mb-8">
              {[
                {
                  icon: Shield,
                  title: "Global Placement Assurance",
                  desc: "Compensation if placement doesn't materialize",
                },
                {
                  icon: FileCheck,
                  title: "Visa Process Coverage",
                  desc: "Financial protection during visa application",
                },
                { icon: Truck, title: "Relocation Support", desc: "Coverage for initial relocation expenses" },
              ].map((item, index) => (
                <motion.li
                  key={index}
                  className="flex items-start gap-3"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 1.6 + index * 0.1 }}
                >
                  <item.icon className="w-5 h-5 text-orange-500 mt-1" />
                  <div>
                    <p className="font-semibold text-gray-900">{item.title}</p>
                    <p className="text-gray-600 text-sm md:text-base lg:text-lg">{item.desc}</p>
                  </div>
                </motion.li>
              ))}
            </motion.ul>

            {/* CTA */}
            <motion.button
              className="w-full py-3 bg-[#FE7642] text-white font-medium rounded-full hover:bg-orange-600 transition"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 2.0 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              View Detailed Coverage
            </motion.button>
          </motion.div>
        </div>
      </div>
    </motion.section>
  )
}
