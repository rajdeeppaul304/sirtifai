"use client"

import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation } from "swiper/modules"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "../ui/Button"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import "swiper/css"
import "swiper/css/navigation"

const MotionDiv = motion.div
const MotionH2 = motion.h2
const MotionH3 = motion.h3
const MotionH4 = motion.h4
const MotionP = motion.p
const MotionImg = motion.img

const teamMembers = [
  {
    id: 1,
    name: "Vakati Ravichandra",
    title: "Visionary & Founder",
    quote: "Turning Bharat's talent potential into global career reality through Skill → Practice → Progress.",
    image: "/assets/about/person1.jpg",
  },
  {
    id: 2,
    name: "Vakati Ravichandra",
    title: "Visionary & Founder",
    quote: "Turning Bharat's talent potential into global career reality through Skill → Practice → Progress.",
    image: "/assets/about/person2.jpg",
  },
  {
    id: 3,
    name: "Vakati Ravichandra",
    title: "Visionary & Founder",
    quote: "Turning Bharat's talent potential into global career reality through Skill → Practice → Progress.",
    image: "/assets/about/person3.jpg",
  },
  {
    id: 4,
    name: "Sarah Johnson",
    title: "Head of Innovation",
    quote: "Bridging the gap between traditional education and modern industry needs through cutting-edge technology.",
    image: "/assets/about/person1.jpg",
  },
  {
    id: 5,
    name: "Michael Chen",
    title: "Chief Technology Officer",
    quote: "Building scalable solutions that empower millions of learners to achieve their career aspirations.",
    image: "/assets/about/person2.jpg",
  },
]

export default function TeamMemberCarousel() {
  const sectionRef = useRef(null)
  const headerRef = useRef(null)
  const carouselRef = useRef(null)

  const sectionInView = useInView(sectionRef, { once: true, margin: "-50px" })
  const headerInView = useInView(headerRef, { once: true, margin: "-100px" })
  const carouselInView = useInView(carouselRef, { once: true, margin: "-100px" })

  return (
    <MotionDiv
      ref={sectionRef}
      className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10"
      initial={{ opacity: 0 }}
      animate={sectionInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      <MotionImg
        src="/assets/about/team_member_background.png"
        alt="decorative background"
        aria-hidden="true"
        className="pointer-events-none select-none absolute -bottom-8 -left-8 w-60 sm:w-72 opacity-60"
        initial={{ opacity: 0, x: -50, rotate: -10 }}
        animate={sectionInView ? { opacity: 0.6, x: 0, rotate: 0 } : { opacity: 0, x: -50, rotate: -10 }}
        transition={{ duration: 1.0, delay: 0.5 }}
      />

      <style>
        {`
          .swiper-button-prev,
          .swiper-button-next {
            position: static !important;
            margin-top: 0 !important;
            width: auto !important;
            height: auto !important;
          }

          .swiper-button-prev:after,
          .swiper-button-next:after {
            display: none !important;
          }

          .swiper-button-disabled {
            opacity: 0.5 !important;
          }
        `}
      </style>

      <MotionDiv
        ref={headerRef}
        className="text-center mb-16"
        initial={{ opacity: 0, y: 50 }}
        animate={headerInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.8 }}
      >
        <MotionH2
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-orange-500 mb-4 sm:mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={headerInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className="text-orange-400">~</span> Team Member <span className="text-orange-400">~</span>
        </MotionH2>
        <MotionH3
          className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800 mb-4 sm:mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={headerInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          "Leaders, Innovators, Mentors – All in One Team"
        </MotionH3>
        <MotionP
          className="text-gray-600 text-sm sm:text-base md:text-lg max-w-4xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={headerInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          Our team combines the energy of startup culture with the expertise of industry veterans, uniting EdTech,
          HRTech, and CareerTech to change how Bharat learns and works.
        </MotionP>
      </MotionDiv>

      <MotionDiv
        ref={carouselRef}
        className="flex items-center gap-2 sm:gap-4 md:gap-8"
        initial={{ opacity: 0, y: 30 }}
        animate={carouselInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={carouselInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <Button
            variant="ghost"
            size="icon"
            className="swiper-button-prev w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white hover:bg-orange-50 shadow-lg border border-orange-200 hover:border-orange-300 transition-all duration-200"
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-orange-500" />
          </Button>
        </motion.div>

        {/* Carousel Container */}
        <div className="flex-1 overflow-hidden">
          <Swiper
            modules={[Navigation]}
            loop={true}
            slidesPerView={1}
            spaceBetween={16}
            navigation={{
              prevEl: ".swiper-button-prev",
              nextEl: ".swiper-button-next",
            }}
            breakpoints={{
              480: { slidesPerView: 1.25, spaceBetween: 16 },
              640: { slidesPerView: 2, spaceBetween: 20 },
              1024: { slidesPerView: 3, spaceBetween: 28 },
            }}
            className="pb-6 sm:pb-8"
          >
            {teamMembers.map((member, index) => (
              <SwiperSlide key={member.id}>
                <MotionDiv
                  className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 h-full flex flex-col"
                  initial={{ opacity: 0, y: 50, scale: 0.9 }}
                  animate={carouselInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 50, scale: 0.9 }}
                  transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
                  whileHover={{ y: -10, scale: 1.02 }}
                >
                  {/* Member Image */}
                  <MotionDiv
                    className="aspect-[3/4] overflow-hidden"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    <img
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </MotionDiv>

                  <MotionDiv
                    className="h-1 bg-orange-500"
                    initial={{ scaleX: 0 }}
                    animate={carouselInView ? { scaleX: 1 } : { scaleX: 0 }}
                    transition={{ duration: 0.8, delay: 1.0 + index * 0.1 }}
                  />

                  <MotionDiv
                    className="p-4 sm:p-5 text-center flex-grow"
                    initial={{ opacity: 0, y: 20 }}
                    animate={carouselInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.6, delay: 1.2 + index * 0.1 }}
                  >
                    <MotionH4
                      className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800 mb-1 sm:mb-2"
                      initial={{ opacity: 0, y: 10 }}
                      animate={carouselInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                      transition={{ duration: 0.4, delay: 1.4 + index * 0.1 }}
                    >
                      {member.name}
                    </MotionH4>
                    <MotionP
                      className="text-orange-500 text-sm sm:text-base font-medium mb-2 sm:mb-4"
                      initial={{ opacity: 0, y: 10 }}
                      animate={carouselInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                      transition={{ duration: 0.4, delay: 1.6 + index * 0.1 }}
                    >
                      {member.title}
                    </MotionP>
                    <MotionP
                      className="text-gray-600 text-xs sm:text-sm md:text-base leading-relaxed italic"
                      initial={{ opacity: 0, y: 10 }}
                      animate={carouselInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                      transition={{ duration: 0.4, delay: 1.8 + index * 0.1 }}
                    >
                      "{member.quote}"
                    </MotionP>
                  </MotionDiv>
                </MotionDiv>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={carouselInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <Button
            variant="ghost"
            size="icon"
            className="swiper-button-next w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white hover:bg-orange-50 shadow-lg border border-orange-200 hover:border-orange-300 transition-all duration-200"
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-orange-500" />
          </Button>
        </motion.div>
      </MotionDiv>
    </MotionDiv>
  )
}
