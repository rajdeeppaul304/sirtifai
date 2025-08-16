"use client"
import { Clock, CheckCircle } from "lucide-react"
import { motion } from "framer-motion"

export const HowToFileClaimSection = () => {
  return (
    <motion.section
      className="w-full bg-[#FEF7F1] py-8 sm:py-12 px-2 xs:px-4 sm:px-6"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-2xl sm:max-w-3xl mx-auto">
        <div className="text-center mb-10 sm:mb-16">
          <motion.h2
            className="text-3xl xs:text-4xl sm:text-5xl font-bold text-gray-900 mb-3 sm:mb-4 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            How To File A Claim
          </motion.h2>
          <motion.p
            className="text-gray-600 text-base xs:text-lg lg:text-xl"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            We&apos;ve made the claim process simple and straightforward to ensure you get the support you need quickly.
          </motion.p>
        </div>

        {/* Four-Step Process Flow */}
        <div className="ml-2 md:ml-0 relative flex flex-col gap-0 pl-4 xs:pl-5 sm:pl-4 pr-2 xs:pr-3 sm:pr-4">
          {/* Vertical Line */}
          <motion.div
            className="absolute left-6 xs:left-8 sm:left-12 top-8 bottom-0 w-px bg-gray-300 z-0"
            style={{ height: "calc(100% - 2rem)" }}
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, delay: 0.6 }}
          />

          {[
            {
              title: "Submit Claim Request",
              desc: "Log in to your Sirtifai account and navigate to the Insurance section. Select 'File a Claim' and choose the appropriate claim type.",
              info: [
                "Your SPP ID and program details",
                "Date and nature of the issue",
                "Brief description of your claim",
              ],
            },
            {
              title: "Documentation Submission",
              desc: "Upload all required documentation to support your claim. Our system will guide you through the specific documents needed based on your claim type.",
              info: [
                "Your SPP ID and program details",
                "Date and nature of the issue",
                "Brief description of your claim",
              ],
            },
            {
              title: "Claim Review",
              desc: "Our insurance team will review your claim and documentation. You'll receive regular updates on the status of your claim through your preferred communication channel.",
              icon: Clock,
              iconText: "Most claims are reviewed within 5-7 business days.",
            },
            {
              title: "Resolution & Payment",
              desc: "Once your claim is approved, you'll receive the appropriate compensation or support based on your coverage. Payments are typically processed within 3-5 business days after approval.",
              icon: CheckCircle,
              iconText: "Direct deposit to your registered bank account",
            },
          ].map((step, index) => (
            <motion.div
              key={index}
              className="relative flex items-start gap-3 xs:gap-5 sm:gap-8 mb-10 sm:mb-12 pl-2 xs:pl-4 sm:pl-8"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.8 + index * 0.3 }}
            >
              <motion.div
                className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-[#FE7642] rounded-full flex items-center justify-center z-10 mt-0.5 translate-x-[-55%] sm:translate-x-[-50%]"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 500, delay: 1.0 + index * 0.3 }}
                whileHover={{ scale: 1.1 }}
              >
                <span className="text-white text-xl font-bold">{index + 1}</span>
              </motion.div>

              {/* Step Content */}
              <div className="flex-1">
                <motion.h3
                  className="text-lg xs:text-xl sm:text-2xl font-bold text-gray-900 mb-2 sm:mb-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 1.2 + index * 0.3 }}
                >
                  {step.title}
                </motion.h3>
                <motion.p
                  className="text-gray-700 mb-4 sm:mb-6 leading-relaxed text-sm xs:text-base lg:text-lg"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 1.4 + index * 0.3 }}
                >
                  {step.desc}
                </motion.p>

                <motion.div
                  className="bg-white rounded-lg p-4 xs:p-5 sm:p-6"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 1.6 + index * 0.3 }}
                  whileHover={{ scale: 1.02, boxShadow: "0 10px 25px rgba(0,0,0,0.1)" }}
                >
                  {step.info ? (
                    <>
                      <h4 className="font-bold text-gray-900 mb-2 sm:mb-3 text-sm xs:text-base">
                        Required Information:
                      </h4>
                      <ul className="space-y-1 xs:space-y-2 text-gray-700 text-sm xs:text-base lg:text-lg">
                        {step.info.map((item, i) => (
                          <motion.li
                            key={i}
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: 1.8 + index * 0.3 + i * 0.1 }}
                          >
                            {item}
                          </motion.li>
                        ))}
                      </ul>
                    </>
                  ) : (
                    <div className="flex items-center gap-2 xs:gap-3">
                      <step.icon
                        className={`w-5 h-5 ${step.icon === CheckCircle ? "text-green-500" : "text-[#FE7642]"}`}
                      />
                      <span className="text-gray-700 text-sm xs:text-base lg:text-lg">{step.iconText}</span>
                    </div>
                  )}
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}
