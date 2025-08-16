"use client"
import Image from "next/image"
import { motion } from "framer-motion"

const insuranceImage = "/assets/insurance/Rectangle-9.png"
const star = "/assets/star.png"

export const InsuranceHeroSection = () => {
  return (
    <>
      <style>
        {`
          .double-border-btn { position: relative; background: #1f2937; color: white; border-radius: 9999px; padding: 0.65rem 1.25rem; font-weight: 600; font-size: 0.95rem; transition: all 0.3s ease; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1),0 2px 4px -1px rgba(0,0,0,0.06); }
          @media (min-width:640px){ .double-border-btn { padding: 1rem 2rem; font-size: 1.125rem; } }
          .double-border-btn::before { content:''; position:absolute; top:6px; left:6px; right:6px; bottom:6px; background:transparent; border:1px solid rgba(255,255,255,0.45); border-radius:9999px; z-index:1; pointer-events:none; }
          .double-border-btn:hover { background:#111827; box-shadow:0 10px 15px -3px rgba(0,0,0,0.1),0 4px 6px -2px rgba(0,0,0,0.05); }
          .mobile-hex-clip { clip-path: polygon(20px 0%, 100% 0%, 100% 100%, 20px 100%, 0% 50%); }
        `}
      </style>

      {/* Insurance Hero Section */}
      <motion.section
        className="w-full flex flex-col md:flex-row justify-between items-start overflow-hidden relative px-5 sm:px-6 md:px-8 xl:px-12 pt-8 md:pt-14 pb-10 md:pb-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        {/* Left Side - Content */}
        <div className="flex-1 max-w-[1150px] md:pr-6 lg:pr-10">
          <motion.h1
            className="font-sans font-medium text-[2.45rem] xs:text-[2.9rem] sm:text-6xl md:text-[4.2rem] lg:text-[5.3rem] leading-[1.1] tracking-tight text-[#0F0F0F]"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.span
              className="block font-bold"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Your Career.
              <span className="inline-block align-middle ml-1 sm:ml-2">
                <motion.div
                  initial={{ rotate: 0, scale: 0 }}
                  animate={{ rotate: 360, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                >
                  <Image
                    src={star || "/placeholder.svg"}
                    alt="Star"
                    width={30}
                    height={30}
                    className="inline w-5 h-5 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-[30px] lg:h-[30px] relative -top-1 sm:-top-2 md:-top-3 lg:-top-4"
                    priority
                  />
                </motion.div>
              </span>
            </motion.span>
            <motion.span
              className="block font-bold"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              Your Earnings.
            </motion.span>
            <motion.span
              className="block font-bold"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              Fully Protected.
            </motion.span>
          </motion.h1>

          <motion.div
            className="mt-8 ml-20 overflow-hidden mb-4 md:hidden w-full flex justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 1.0 }}
          >
            <div
              className="relative w-[300px] xs:w-[320px] h-[180px] xs:h-[190px] overflow-hidden"
              style={{
                clipPath: "polygon(20px 0%, 100% 0%, 100% 100%, 20px 100%, 0% 50%)",
              }}
            >
              <Image
                src={insuranceImage || "/placeholder.svg"}
                alt="Insurance coverage visual"
                fill
                className="object-cover object-center"
                priority
              />
            </div>
          </motion.div>

          <motion.p
            className="mt-4 sm:mt-6 md:mt-5 text-[#4B5563] font-sans font-normal text-[0.95rem] sm:text-lg md:text-xl lg:text-[1.5rem] leading-relaxed max-w-[900px]"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            We understand the importance of security in your career journey. Our comprehensive insurance coverage
            ensures your skills, earnings, and career progression are protected at every step.
          </motion.p>

          <motion.div
            className="flex flex-row flex-wrap gap-3 sm:gap-6 mt-10 sm:mt-12 md:mt-14 lg:mt-16 items-stretch w-full"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.4 }}
          >
            <motion.button
              className="double-border-btn relative group hover:opacity-90 hover:cursor-pointer transition-all duration-300 text-sm sm:text-base flex-1 min-w-[46%] basis-[46%] md:flex-initial md:basis-auto md:min-w-0"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              Check Your Coverage
            </motion.button>
            <motion.button
              className="px-3 py-2.5 sm:px-10 sm:py-4 bg-[#FE7642] text-white rounded-full text-sm sm:text-base font-semibold tracking-wide hover:bg-[#ff8d61] hover:cursor-pointer transition-all duration-300 shadow-md flex-1 min-w-[46%] basis-[46%] md:flex-initial md:basis-auto md:min-w-0"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              File A Claim
            </motion.button>
          </motion.div>
        </div>

        <motion.div
          className="relative hidden md:block md:w-[460px] lg:w-[600px] xl:w-[700px] h-[320px] sm:h-[380px] md:h-[420px] lg:h-[480px] xl:h-[500px] flex-shrink-0 mt-10 md:mt-0"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.0, delay: 0.6 }}
        >
          <div className="relative w-full h-full overflow-hidden">
            <Image
              src={insuranceImage || "/placeholder.svg"}
              alt="Insurance Coverage - Laptop with people's hands and legs"
              fill
              className="object-cover object-center"
              priority
            />
          </div>
        </motion.div>
      </motion.section>
    </>
  )
}
