import React from "react";

// import PartnerLogo0 from "../../assets/Company logo.svg";
// import PartnerLogo1 from "../../assets/Company logo (1).svg";
// import PartnerLogo2 from "../../assets/Company logo (2).svg";
// import PartnerLogo3 from "../../assets/Company logo (3).svg";
// import PartnerLogo4 from "../../assets/Company logo (4).svg";
// import PartnerLogo5 from "../../assets/Company logo (5).svg";
// import PartnerLogo6 from "../../assets/Company logo (6).svg";

export default function PartnersAndCTA() {
  // const logos = [
  //   PartnerLogo0,
  //   PartnerLogo1,
  //   PartnerLogo2,
  //   PartnerLogo3,
  //   PartnerLogo4,
  //   PartnerLogo5,
  //   PartnerLogo6,
  // ];

  return (
    <div className="bg-white">
      {/* Marquee Section */}
      {/* <div className="overflow-hidden whitespace-nowrap py-8 bg-white border-b border-gray-100">
        <div className="inline-flex animate-marquee space-x-12">
          {logos.concat(logos).map((src, i) => (
            <div
              key={i}
              className="flex items-center justify-center"
            >
              <img
                src={src}
                alt={`Partner ${i + 1}`}
                className="h-16 w-auto opacity-80"
              />
            </div>
          ))}
        </div>
      </div> */}

      {/* CTA Section */}
      <div className="bg-[#FF6F3C] text-white py-8 px-30 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-center md:text-left">
          <h2 className="text-lg font-bold mb-1">
            Your career starts here — and grows for life
          </h2>
          <p className="text-sm text-white/85 max-w-md">
            Our advisors will help you choose the right plan — domestic or
            international — based on your career goals.
          </p>
        </div>
        <button className="bg-white text-[#FF6F3C] px-5 py-2 rounded-full font-semibold hover:bg-gray-100 transition">
          Book free career call →
        </button>
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