import React from "react";

export default function PartnersAndCTA() {
  return (
    <div className="bg-white">
      {/* CTA Section */}
      <div className="bg-[#FF6F3C] text-white py-8 px-6 sm:px-10 lg:px-20 flex flex-col md:flex-row items-start justify-between gap-6">
        {/* Text */}
        <div className="text-left max-w-lg">
          <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 leading-snug">
            Your career starts here — and grows for life
          </h2>
          <p className="text-sm sm:text-base text-white/85">
            Our advisors will help you choose the right plan — domestic or
            international — based on your career goals.
          </p>
        </div>

        {/* Button */}
        <div className="mt-4 md:mt-0 flex-shrink-0">
          <button className="bg-white text-[#FF6F3C] px-5 sm:px-6 py-2 sm:py-3 rounded-full font-semibold hover:bg-gray-100 transition text-sm sm:text-base">
            Book free career call →
          </button>
        </div>
      </div>

      {/* Animation Keyframes */}
      <style>
        {`
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-marquee {
            animation: marquee 20s linear infinite;
          }
        `}
      </style>
    </div>
  );
}