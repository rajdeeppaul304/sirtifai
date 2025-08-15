'use client';

import { RotatingGlobe } from '../ui/RotatingGlobe';
import { ACADEMIC_PARTNERS } from '../../constants/data';

import PartnerLogo0 from "../../assets/Company logo.svg";
import PartnerLogo1 from "../../assets/Company logo (1).svg";
import PartnerLogo2 from "../../assets/Company logo (2).svg";
import PartnerLogo3 from "../../assets/Company logo (3).svg";
import PartnerLogo4 from "../../assets/Company logo (4).svg";
import PartnerLogo5 from "../../assets/Company logo (5).svg";
import PartnerLogo6 from "../../assets/Company logo (6).svg";

import { Morquee } from '../ui/Morquee';

export const PartnersSection = () => {
  const logos = [
    PartnerLogo0,
    PartnerLogo1,
    PartnerLogo2,
    PartnerLogo3,
    PartnerLogo4,
    PartnerLogo5,
    PartnerLogo6,
  ];
  const accLogos = [
    "/assets/about/university_logos/AU_University_Horizontal_COLOR_RGB.png",
    "/assets/about/university_logos/Arcadia-logo-color.jpg",
    "/assets/about/university_logos/CWRU_University_Formal_No_Tag_RGB_Blue.jpg",
    "/assets/about/university_logos/columbia_logo_1.png",
    "/assets/about/university_logos/ECON_logo.jpg",
  ];
  return (
    <section className="relative w-full bg-white py-20 pb-8">
      <div className=" sm:max-w-7xl mx-auto px-6">
        <div className="flex flex-col justify-center items-center gap-20">
          {/* Left Side - Large Wireframe Globe */}
          <div className="flex-1 flex justify-center">
            <div className="absolute sm:left-[-10%] left-[-70%] transform-3d sm:top-[-30%] top-[-29%] rotate-[-380deg] sm:rotate-0 w-[400px] h-[400px] sm:w-[700px] sm:h-[700px]">
              <RotatingGlobe />
            </div>
          </div>

          {/* Right Side - Partner Categories */}
          <div className="flex flex-col justify-center items-center space-y-16">
            {/* Main Heading */}
            <div className="text-center -mt-12 sm:mt-24" style={{ display: 'flex', justifyContent: 'center' }}>
              <h2 className="text-[11vw] sm:text-6xl font-semibold sm:font-bold text-gray-900 mb-16 w-[80%]">
                Trusted By Leading Organisations..
              </h2>
            </div>

            {/* ACADEMIC PARTNERS */}
            <div className="text-left">
              <h3 className="text-2xl text-center font-bold text-gray-900 uppercase tracking-wider mb-12">
                ACADEMIC PARTNERS
              </h3>
              <div className="w-full overflow-hidden bg-white border-b border-gray-100">
                <div className="relative py-8">
                {/* flex animate-marquee space-x-32 */}
                  <div className="">
                    <Morquee logos={accLogos} />

                    
                  </div>
         
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
