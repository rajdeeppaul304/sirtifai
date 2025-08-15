"use client";

import { Calendar, HelpCircle } from "lucide-react";
import { CalendarCheck } from "lucide-react";

export const LearnersHeroSection = () => {
  return (
    <section className="w-full py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 sm:gap-80 items-center">
          {/* Left Side - Content */}
          <div className="-mt-16">
            {/* Headline with Star Icon */}
            <div className="mb-8 relative pt-12 sm:pt-0">
              <span className="absolute right-[10%] sm:-right-[26vw] -top-[1%] sm:-top-12">
                <img
                  className="sm:h-14 sm:w-20 h-8 w-12"
                  src="/assets/15.svg"
                  alt="star"
                />
              </span>
              <h1 className=" text-4xl sm:text-7xl text-wrap sm:text-nowrap font-semibold font-Open Sans text-gray-900 mb-6 tracking-tight">
                Find Your Path To Success
              </h1>

              <p className="text-sm sm:text-lg text-gray-700 leading-relaxed font-normal">
                Discover personalised learning paths, industry-relevant tools,
                and support tailored to your career goals.
              </p>
            </div>

            {/* Call-to-Action Buttons */}
            <div className="sm:flex flex flex-col sm:flex-row gap-4">
              {/* Book A Demo Button */}

              <button className="flex relative w-fit sm:w-auto items-center justify-between pl-4 pr-2 py-2 sm:px-[12px] sm:-mr-2 sm:mb-0 mb-7 sm:py-1 bg-[#243946] text-white rounded-full border border-white hover:bg-[#1b2c38] transition-colors font-semibold text-base shadow-md">
                <div className="flex -ml-2 items-center border  rounded-full px-5 py-1.5 border-zinc-300">
                  <span className="tracking-wide ">Book A Demo</span>
                  <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center ml-3">
                    <CalendarCheck size={20} className="text-white" />
                  </div>
                </div>
              </button>

              {/* Call-to-Action Links */}
              <div className="sm:hidden flex items-center gap-4 sm:-mt-0 -mt-7">
                <span className="sm:text-lg text-xs sm:font-semibold text-orange-500 sm:text-gray-900">
                  Join Now :
                </span>
                <div className="flex items-center gap-4">
                  <a
                    href="#"
                    className="text-orange-500 sm:text-lg text-xs sm:font-semibold hover:text-orange-600 transition-colors"
                  >
                    SPP Int
                  </a>
                  <span className="text-gray-400">|</span>
                  <a
                    href="#"
                    className="text-orange-500 sm:text-lg text-xs sm:font-semibold hover:text-orange-600 transition-colors"
                  >
                    SPP Freelance
                  </a>
                  <span className="text-gray-400">|</span>
                  <a
                    href="#"
                    className="text-orange-500 sm:text-lg text-xs sm:font-semibold hover:text-orange-600 transition-colors"
                  >
                    SPP Student
                  </a>
                </div>
              </div>

              {/* Take Career Quiz Button */}
              {/* <button className="flex items-center justify-center px-8 py-4 bg-orange-500 text-white rounded-full hover:bg-orange-600 transition-colors font-semibold text-base shadow-md">
                <div className="w-6 h-6 bg-white rounded mr-3 flex items-center justify-center">
                  <HelpCircle size={16} className="text-orange-500" />
                </div>
                Take Career Quiz
              </button> */}
            </div>
          </div>
          {/* Desktop / Tablet Cluster */}
          <div className=" relative w-[250px] h-[250px] sm:w-[400px] sm:h-[400px] sm:flex hidden  items-center justify-center sm:ml-12 sm:mt-14  ">
            {/* Connection Circle */}
            <svg className=" absolute inset-0 w-full h-full pointer-events-none">
              <defs>
                <linearGradient
                  id="lineGradient"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="100%"
                >
                  <stop offset="0%" stopColor="#F97316" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="#F97316" stopOpacity="0.1" />
                </linearGradient>
              </defs>
              <circle
                cx="50%"
                cy="63%"
                r="80"
                stroke="url(#lineGradient)"
                strokeWidth="2"
                strokeDasharray="5,5"
                fill="none"
              />
            </svg>

            <div className="flex items-center justify-center relative">
              {/* Center GIF */}
              <div className="absolute -mt-16 sm:-mt-12 h-18 w-18 sm:w-24 sm:h-24 rounded-full bg-white flex items-center justify-center shadow-lg">
                <img
                  src="/assets/learners/center.gif"
                  alt="Center Animation"
                  className="w-full h-full rounded-full object-cover"
                />
              </div>

              {/* Orange Icon Below Center */}
              <div className="absolute mt-52 sm:mt-65 w-14 h-14 sm:w-20 sm:h-20 rounded-full bg-orange-500 flex items-center justify-center shadow-lg">
                <img
                  src="/assets/ic_round-wifi-tethering.svg"
                  alt="Wifi Icon"
                  className="w-10 h-10"
                />
              </div>
            </div>

            {/* Profile Images */}
            <img
              src="/assets/learners/l.png"
              alt="Profile"
              className="absolute top-[-1%] left-1/2 -translate-x-1/2 w-14 h-14 sm:w-20 sm:h-20 rounded-full border-4 border-white shadow-lg object-cover"
            />
            <img
              src="/assets/learners/l.png"
              alt="Profile"
              className="absolute top-[42%] right-0 -translate-y-1/2 w-14 h-14 sm:w-20 sm:h-20 rounded-full border-4 border-white shadow-lg object-cover"
            />
            <img
              src="/assets/learners/l.png"
              alt="Profile"
              className="absolute bottom-[12%] right-0 translate-y-1/2 w-14 h-14 sm:w-20 sm:h-20 rounded-full border-4 border-white shadow-lg object-cover"
            />
            <img
              src="/assets/learners/l.png"
              alt="Profile"
              className="absolute bottom-[12%] left-0 translate-y-1/2 w-14 h-14 sm:w-20 sm:h-20 rounded-full border-4 border-white shadow-lg object-cover"
            />
            <img
              src="/assets/learners/l.png"
              alt="Profile"
              className="absolute top-[42%] left-0 -translate-y-1/2 w-14 h-14 sm:w-20 sm:h-20 rounded-full border-4 border-white shadow-lg object-cover"
            />
          </div>

          {/* Mobile Image */}
          <div className="block sm:hidden w-[350px] h-[370px] flex items-center justify-center">
            <img
              src="/assets/image.png"
              alt="Mobile Version"
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
