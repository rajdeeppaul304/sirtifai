"use client"

import type React from "react"
import { FaShieldAlt, FaWallet } from "react-icons/fa"
import { MdAccessTimeFilled } from "react-icons/md"
import { FaMoneyBillTransfer } from "react-icons/fa6"
import { motion } from "framer-motion"

const vectorPath = "/assets/freelancer/Vector.svg"

// Circular check icon per design
const Check: React.FC<{ className?: string }> = ({ className = "" }) => (
  <span className={"inline-flex items-center justify-center w-5 h-5 rounded-full bg-[#FF6A2D] mt-[2px] " + className}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="none"
      stroke="#ffffff"
      strokeWidth={2}
      className="w-3 h-3"
    >
      <path d="M5 10l3 3 7-7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  </span>
)

const features = [
  {
    icon: <FaWallet className="text-[#FF5C35]" />,
    title: "Receive every task payment",
    text: "Get paid for each completed task",
  },
  {
    icon: <FaMoneyBillTransfer className="text-[#FF5C35]" />,
    title: "All payment methods supported",
    text: "UPI, Bank transfer, wallet and more",
  },
  {
    icon: <FaShieldAlt className="text-[#FF5C35]" />,
    title: "Secure payment protection",
    text: "Your earnings are safe and guaranteed",
  },
  {
    icon: <MdAccessTimeFilled className="text-[#FF5C35]" />,
    title: "Transparent payment processing",
    text: "No hidden fees, no surprises",
  },
]

const TestimonialSection: React.FC = () => {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
        {/* Visual */}
        <motion.div
          className="relative mx-auto w-full max-w-[380px] sm:max-w-[440px] md:max-w-[500px] lg:max-w-[540px] aspect-square"
          initial={{ opacity: 0, x: -50, scale: 0.9 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <motion.div
            className="absolute -top-5 -left-5 w-full h-full bg-orange-500 rounded-md"
            aria-hidden="true"
            initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true }}
          />
          <motion.div
            className="relative w-full h-full border-2 border-sky-500 rounded-sm overflow-hidden shadow-sm"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02, rotate: 1 }}
          >
            <img
              src="/assets/freelancer/man-front-view-freelance.png"
              alt="Professional working with tablet"
              className="w-full h-full object-cover object-center"
              loading="lazy"
            />
          </motion.div>
        </motion.div>

        {/* Content */}
        <motion.div
          className="max-w-xl mx-auto lg:mx-0"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <div className="relative w-[60%] lg:w-full ">
            <motion.h2
              className="text-[2rem] md:text-4xl font-bold text-slate-900 leading-snug"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              Get Paid Professionally, Like a Full-Time Employee
            </motion.h2>
            <motion.img
              src={vectorPath}
              alt=""
              aria-hidden="true"
              className="pointer-events-none select-none absolute -top-15 -left-20 ml-60 mt-12 w-14 h-14"
              initial={{ opacity: 0, rotate: -180, scale: 0 }}
              whileInView={{ opacity: 1, rotate: 0, scale: 1 }}
              transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
              viewport={{ once: true }}
            />
          </div>
          <motion.p
            className="mt-5 text-sm md:text-base text-slate-600 hidden lg:flex"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            Your income goes through Deel™, giving you:
          </motion.p>
          <motion.ul
            className="mt-6 space-y-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
          >
            {features.map((f, index) => (
              <motion.li
                key={index}
                className="flex gap-3 text-sm md:text-base text-slate-700"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.5,
                  delay: 0.6 + index * 0.1,
                  ease: "easeOut",
                }}
                viewport={{ once: true }}
                whileHover={{ x: 5, transition: { duration: 0.2 } }}
              >
                <motion.div
                  className="bg-[#FF5C351A] rounded-full w-[40px] h-[40px] flex justify-center items-center"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  {f.icon}
                </motion.div>
                <div className="flex flex-col gap-.5">
                  <h3 className="text-[#1A1A1A] text-[.875rem] font-semibold">Receive every task payment</h3>
                  <p className="text-[#4B5563] text-[.75rem] font-normal">Get paid for each completed task</p>
                </div>
              </motion.li>
            ))}
          </motion.ul>
          <motion.p
            className="hidden lg:flex mt-8 italic font-medium text-slate-800 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            "This isn&apos;t freelancing with guesswork—it&apos;s verified, traceable, and legal."
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}

export default TestimonialSection
