"use client"

import type React from "react"
import { Button } from "../ui/Button"
import { FaPlay } from "react-icons/fa"
import { motion } from "framer-motion"

// Use specific freelancer vector asset
const vectorPath = "/assets/freelancer/Vector.svg"

const LandingFreelancer: React.FC = () => {
  return (
    <section className="relative bg-[#FCF8F5] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 pt-10 lg:py-28 grid grid-cols-1 lg:grid-cols-[56%_1fr] gap-6 xl:gap-10 items-center">
        {/* Left content */}
        <motion.div
          className="flex flex-col lg:flex-row justify-between items-start lg:pl-2 xl:pl-4"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <div className="relative inline-block mb-12 pt-3">
            <motion.img
              src={vectorPath}
              alt=""
              aria-hidden="true"
              className="pointer-events-none select-none absolute -top-8 left-1/2 ml-60 mt-12 w-14 h-14"
              initial={{ opacity: 0, rotate: -180, scale: 0 }}
              whileInView={{ opacity: 1, rotate: 0, scale: 1 }}
              transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
              viewport={{ once: true }}
            />
            <motion.h1
              className="font-bold text-[2.5rem] leading-[1.06] sm:text-[3.2rem] md:text-[4.1rem] 2xl:text-[4.4rem] tracking-tight text-[#0B0B0B] max-w-[880px]"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <motion.span
                className="block"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
              >
                Sirtifai Freelancer
              </motion.span>
              <motion.span
                className="block"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                Programme – Earn From
              </motion.span>
              <motion.span
                className="block"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                viewport={{ once: true }}
              >
                Day 1, Grow For Life.
              </motion.span>
            </motion.h1>
          </div>
          <motion.p
            className="hidden md:flex text-gray-700 text-sm sm:text-base md:text-lg max-w-2xl mb-12 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
          >
            Work on real projects, get paid monthly, build a verified freelance career with payroll, legal, and client
            access.
          </motion.p>
          <motion.div
            className="flex flex-wrap sm:flex-row gap-7 items-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            viewport={{ once: true }}
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                variant="secondary"
                size="lg"
                className="relative rounded-full bg-[#173447] text-white font-medium shadow-md hover:shadow-lg transition-all overflow-hidden ring-1 ring-[#0E212D] ring-inset after:content-[''] after:absolute after:inset-[4px] after:rounded-full after:border-2 after:border-gray-400 after:pointer-events-none hover:bg-[#142C3C] flex justify-between items-center gap-6"
              >
                Watch Stories
                <div className="bg-[#BDBDBD] rounded-full p-2 flex justify-center items-center text-white">
                  <FaPlay />
                </div>
              </Button>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                variant="primary"
                size="lg"
                className="rounded-full px-9 py-4 bg-[#FF6A2D] hover:bg-[#fe6d33] text-white font-medium shadow-sm hover:shadow-md transition-all"
              >
                Book A Free Call
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Right visual */}
        <motion.div
          className="absolute bottom-[-50%] right-[-20%] rounded-full bg-[#FE7642]"
          aria-hidden
          initial={{ opacity: 0, scale: 0.8, x: 100 }}
          whileInView={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
          viewport={{ once: true }}
        />
        <motion.img
          src="/assets/freelancer/guy-phone.png"
          alt="Freelancer using a tablet"
          className="z-10 h-full object-contain"
          initial={{ opacity: 0, scale: 0.9, y: 50 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          viewport={{ once: true }}
        />

        <motion.div
          className="relative hidden lg:flex justify-center lg:justify-end order-1 lg:order-2 pr-2"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <div className="relative w-[360px] h-[360px] sm:w-[430px] sm:h-[430px] lg:w-[460px] lg:h-[460px] flex items-center justify-center">
            <motion.div
              className="absolute inset-0 rounded-full bg-[#FE7642]"
              aria-hidden="true"
              initial={{ scale: 0.8, rotate: -10 }}
              whileInView={{ scale: 1, rotate: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
              viewport={{ once: true }}
            />
            <motion.img
              src="/assets/freelancer/guy-phone.png"
              alt="Freelancer using a tablet"
              className="relative z-10 h-full object-contain"
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, rotate: 2 }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default LandingFreelancer
