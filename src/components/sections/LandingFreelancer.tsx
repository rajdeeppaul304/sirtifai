import React from "react";
import { Button } from "../ui/Button";
import { FaPlay } from "react-icons/fa";
// Use specific freelancer vector asset
const vectorPath = "/assets/freelancer/Vector.svg";

const LandingFreelancer: React.FC = () => {
  return (
    <section className="relative bg-[#FCF8F5] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 pt-10 lg:py-28 grid grid-cols-1 lg:grid-cols-[56%_1fr] gap-6 xl:gap-10 items-center">
        {/* Left content */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:pl-2 xl:pl-4">
          <div className="relative inline-block mb-12 pt-3">
            <img
              src={vectorPath}
              alt=""
              aria-hidden="true"
              className="pointer-events-none select-none absolute -top-8 left-1/2 ml-60 mt-12 w-14 h-14"
            />
            <h1 className="font-bold text-[2.5rem] leading-[1.06] sm:text-[3.2rem] md:text-[4.1rem] 2xl:text-[4.4rem] tracking-tight text-[#0B0B0B] max-w-[880px]">
              <span className="block">Sirtifai Freelancer</span>
              <span className="block">Programme – Earn From</span>
              <span className="block">Day 1, Grow For Life.</span>
            </h1>
          </div>
          <p className="hidden md:flex text-gray-700 text-sm sm:text-base md:text-lg max-w-2xl mb-12 leading-relaxed">
            Work on real projects, get paid monthly, build a verified freelance career with payroll, legal, and client access.
          </p>
          <div className="flex flex-wrap sm:flex-row gap-7 items-center">
            <Button
              variant="secondary"
              size="lg"
              className="relative rounded-full bg-[#173447] text-white font-medium shadow-md hover:shadow-lg transition-all overflow-hidden ring-1 ring-[#0E212D] ring-inset after:content-[''] after:absolute after:inset-[4px] after:rounded-full after:border-2 after:border-gray-400 after:pointer-events-none hover:bg-[#142C3C] flex justify-between items-center gap-6"
            >
              Watch Stories
              <div className="bg-[#BDBDBD] rounded-full p-2 flex justify-center items-center text-white">
                <FaPlay/>
              </div>
            </Button>

            <Button
              variant="primary"
              size="lg"
              className="rounded-full px-9 py-4 bg-[#FF6A2D] hover:bg-[#fe6d33] text-white font-medium shadow-sm hover:shadow-md transition-all"
            >
              Book A Free Call
            </Button>
          </div>
        </div>

        {/* Right visual */}

        {/* <div className="flex lg:hidden justify-center lg:justify-end order-1 lg:order-2 pr-2"> */}
          {/* <div className="w-[360px] h-[360px] sm:w-[430px] sm:h-[430px] lg:w-[460px] lg:h-[460px] flex items-center justify-center"> */}
        <div className="absolute bottom-[-50%] right-[-20%] rounded-full bg-[#FE7642]" aria-hidden />
          <img
              src="/assets/freelancer/guy-phone.png"
              alt="Freelancer using a tablet"
              className="z-10 h-full object-contain"
            />
        </div>
        {/* </div> */}

        <div className="relative hidden lg:flex justify-center lg:justify-end order-1 lg:order-2 pr-2">
          <div className="relative w-[360px] h-[360px] sm:w-[430px] sm:h-[430px] lg:w-[460px] lg:h-[460px] flex items-center justify-center">
            <div className="absolute inset-0 rounded-full bg-[#FE7642]" aria-hidden />
            <img
              src="/assets/freelancer/guy-phone.png"
              alt="Freelancer using a tablet"
              className="relative z-10 h-full object-contain"
            />
          </div>
        {/* </div> */}
        </div>
    </section>
  );
};

export default LandingFreelancer;