"use client"

import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation } from "swiper/modules"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "../ui/Button"
import "swiper/css"
import "swiper/css/navigation"

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
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
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
      {/* Header Section */}
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-orange-500 mb-6">
          <span className="text-orange-400">~</span> Team Member <span className="text-orange-400">~</span>
        </h2>
        <h3 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-6">
          "Leaders, Innovators, Mentors – All in One Team"
        </h3>
        <p className="text-gray-600 text-lg max-w-4xl mx-auto leading-relaxed">
          Our team combines the energy of startup culture with the expertise of industry veterans, uniting EdTech,
          HRTech, and CareerTech to change how Bharat learns and works.
        </p>
      </div>

      <div className="flex items-center gap-8">
        {/* Left Navigation Button */}
        <Button
          variant="ghost"
          size="icon"
          className="swiper-button-prev flex-shrink-0 w-12 h-12 rounded-full bg-white hover:bg-orange-50 shadow-lg border border-orange-200 hover:border-orange-300 transition-all duration-200"
        >
          <ChevronLeft className="w-6 h-6 text-orange-500" />
        </Button>

        {/* Carousel Container */}
        <div className="flex-1 overflow-hidden">
          <Swiper
            modules={[Navigation]}
            spaceBetween={30}
            slidesPerView={1}
            navigation={{
              prevEl: ".swiper-button-prev",
              nextEl: ".swiper-button-next",
            }}
            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
            }}
            className="pb-8"
          >
            {teamMembers.map((member) => (
              <SwiperSlide key={member.id}>
                <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                  {/* Member Image */}
                  <div className="aspect-[3/4] overflow-hidden">
                    <img
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Orange Accent Bar */}
                  <div className="h-1 bg-orange-500"></div>

                  {/* Member Info */}
                  <div className="p-6 text-center">
                    <h4 className="text-xl font-bold text-gray-800 mb-2">{member.name}</h4>
                    <p className="text-orange-500 font-medium mb-4">{member.title}</p>
                    <p className="text-gray-600 text-sm leading-relaxed italic">"{member.quote}"</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Right Navigation Button */}
        <Button
          variant="ghost"
          size="icon"
          className="swiper-button-next flex-shrink-0 w-12 h-12 rounded-full bg-white hover:bg-orange-50 shadow-lg border border-orange-200 hover:border-orange-300 transition-all duration-200"
        >
          <ChevronRight className="w-6 h-6 text-orange-500" />
        </Button>
      </div>
    </div>
  )
}
