"use client"
import { RotatingGlobe } from '../ui/RotatingGlobe';
import { ACADEMIC_PARTNERS } from '../../constants/data';

const PartnerLogo0 = "../../assets/Company logo.svg";
const PartnerLogo1 = "../../assets/Company logo (1).svg";
const PartnerLogo2 = "../../assets/Company logo (2).svg";
const PartnerLogo3 = "../../assets/Company logo (3).svg";
const PartnerLogo4 = "../../assets/Company logo (4).svg";
const PartnerLogo5 = "../../assets/Company logo (5).svg";
const PartnerLogo6 = "../../assets/Company logo (6).svg";

const accLogo1 = "/assets/about/university_logos/AU_University_Horizontal_COLOR_RGB.png";
const accLogo2 = "/assets/about/university_logos/Arcadia-logo-color.jpg";
const accLogo3 = "/assets/about/university_logos/CWRU_University_Formal_No_Tag_RGB_Blue.jpg";
const accLogo4 = "/assets/about/university_logos/columbia_logo_1.png";
const accLogo5 = "/assets/about/university_logos/ECON_logo.jpg";
import { Morquee } from '../ui/Morquee';
// import accLogo6 from "../../assets/about/university_logos/Emerson-College-Logo.png";
// import accLogo7 from "../../assets/about/university_logos/FOR-MSW_UniversityLogo_Short_RedBlack_RGB.png";

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
    accLogo1,
    accLogo2,
    accLogo3,
    accLogo4,
    accLogo5,
  ];
  return (
    <section className="relative w-full bg-white py-20 pb-8">
      <div className=" sm:max-w-7xl mx-auto px-6">
        <div className="flex flex-col justify-center items-center gap-20">
          {/* Left Side - Large Wireframe Globe */}
          <div className="flex-1 flex justify-center">
            <div className="absolute left-[-10%]  transform-3d top-[-30%] w-[700px] h-[700px]">
              <RotatingGlobe />
            </div>
          </div>

          {/* Right Side - Partner Categories */}
          <div className="flex flex-col justify-center items-center space-y-16">
            {/* Main Heading */}
            <div className="text-center mt-24" style={{ display: 'flex', justifyContent: 'center' }}>
              <h2 className="text-2xl sm:text-6xl font-bold text-gray-900 mb-16 w-[80%]">
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
