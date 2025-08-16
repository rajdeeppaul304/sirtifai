"use client"
import { Mail, MessageCircle, ArrowRight } from "lucide-react"
import { motion } from "framer-motion"

export const InsuranceSupportFAQSection = () => {
  return (
    <div className="flex flex-col lg:flex-row">
      <motion.div
        className="w-full lg:w-1/2 bg-white flex items-start py-10 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-12"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="w-full">
          <motion.h2
            className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Need Assistance?
          </motion.h2>
          <motion.p
            className="text-gray-600 mb-8 text-base lg:text-xl"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Our dedicated insurance support team is here to help you with any questions or concerns about your coverage.
          </motion.p>

          <div className="space-y-6">
            {[
              {
                icon: Mail,
                title: "Email Support",
                subtitle: "24-hour response time",
                action: "insurance@sirtifai.com",
                isLink: true,
              },
              {
                icon: MessageCircle,
                title: "Live Chat",
                subtitle: "Available Monday-Friday, 9am-6pm IST",
                action: "Start Chat",
                isButton: true,
              },
            ].map((contact, index) => (
              <motion.div
                key={index}
                className="flex items-start gap-4"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.2 }}
              >
                <motion.div
                  className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <contact.icon className="w-6 h-6 text-[#FE7642]" />
                </motion.div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-gray-900 mb-1 text-lg lg:text-xl">{contact.title}</h3>
                  <p className="text-gray-500 text-sm mb-2">{contact.subtitle}</p>
                  {contact.isLink ? (
                    <motion.a
                      href={`mailto:${contact.action}`}
                      className="text-[#FE7642] font-medium break-all text-base"
                      whileHover={{ scale: 1.05 }}
                    >
                      {contact.action}
                    </motion.a>
                  ) : (
                    <motion.button
                      className="px-6 py-2 bg-[#FE7642] text-white rounded-lg text-sm font-medium hover:bg-orange-600 transition-colors"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {contact.action}
                    </motion.button>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      <motion.div
        className="w-full lg:w-1/2 bg-[#FEE0D4] flex items-start py-10 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-12"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="w-full">
          <motion.h2
            className="text-3xl lg:text-4xl font-bold text-gray-900 mb-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Frequently Asked Questions
          </motion.h2>

          <div className="space-y-8">
            {[
              {
                q: "How soon can I file a claim after joining?",
                a: "There's a 15-day waiting period for most claims after enrolling in the program, except for access-related issues which can be reported immediately.",
              },
              {
                q: "Is there a limit to how many claims I can file?",
                a: "There's no strict limit, but frequent claims may be subject to additional review. Our goal is to provide support when you genuinely need it.",
              },
              {
                q: "How does the payment guarantee work?",
                a: "If a client fails to pay for completed work during your Practice Phase, we'll compensate you up to your coverage limit while we pursue the client for payment.",
              },
              {
                q: "Can I upgrade my insurance coverage?",
                a: "Yes, you can upgrade your insurance coverage by upgrading your SPP plan or purchasing additional add-ons at any time.",
              },
            ].map((faq, index) => (
              <motion.div
                key={index}
                className={`${index < 3 ? "border-b border-[#FDB89B] pb-5" : "border-b-0 pb-0"}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                whileHover={{ x: 5 }}
              >
                <h3 className="font-semibold text-gray-900 mb-2 text-lg lg:text-xl">{faq.q}</h3>
                <p className="text-gray-600 text-base lg:text-lg leading-relaxed">{faq.a}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="mt-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <motion.a
              href="#"
              className="inline-flex items-center gap-2 text-gray-700 font-medium hover:text-[#FE7642] transition-colors text-base"
              whileHover={{ x: 5 }}
            >
              View all FAQs
              <ArrowRight className="w-4 h-4" />
            </motion.a>
          </motion.div>
        </div>
      </motion.div>
    </div>
  )
}
