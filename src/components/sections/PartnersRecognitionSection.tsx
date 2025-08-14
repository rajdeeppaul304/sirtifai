"use client"
import { CERTIFICATIONS } from '../../constants/data';
import { ACADEMIC_PARTNERS } from '../../constants/data';
import { MEMBERSHIP_RECOGNITION } from '../../constants/data';

const corpLogo1 = "/assets/home/Logos/sonyLogo.svg";
const corpLogo2 = "/assets/home/Logos/hpLogo.webp";
const corpLogo3 = "/assets/home/Logos/adobeLogo.webp";
const corpLogo4 = "/assets/home/Logos/adobeLogo.webp"; 
const corpLogo5 = "/assets/home/Logos/amazonLogo.png";
const corpLogo6 = "/assets/home/Logos/dropbox.svg";
const corpLogo7 = "/assets/home/Logos/firefoxLogo.png";
const corpLogo8 = "/assets/home/Logos/intelLogo.png";
const corpLogo9 = "/assets/home/Logos/ytLogo.webp";
const corpLogo10 = "/assets/home/Logos/netFlixLogo.webp";
const corpLogo11 = "/assets/home/Logos/IBM.webp";
const corpLogo12 = "/assets/home/Logos/sapLogo.jpeg";
const corpLogo13 = "/assets/home/Logos/zoomLogo.png";
const corpLogo14 = "/assets/home/Logos/walmartLogo.png";
const corpLogo15 = "/assets/home/Logos/cocacola.png";
const corpLogo16 = "/assets/home/Logos/fedexLogo.png";
const corpLogo17 = "/assets/home/Logos/fbLogo.jpg";
const corpLogo18 = "/assets/home/Logos/oracleLogo.jpg";
const corpLogo19 = "/assets/home/Logos/xLogo.webp";
const corpLogo20 = "/assets/home/Logos/GoogleLogo.png";
const corpLogo21 = "/assets/home/Logos/mircrosoftLogo.jpg";
const corpLogo22 = "/assets/home/Logos/linkiedLogo.webp";

import { Morquee } from '../ui/Morquee';




export const PartnersRecognitionSection = () => {

  const corpLogos = [
    corpLogo1,
    corpLogo2,
    corpLogo3,
    corpLogo4,
    corpLogo5,
    corpLogo6,
    corpLogo7,
    corpLogo8,
    corpLogo9,
    corpLogo10,
    corpLogo11,
    corpLogo12,
    corpLogo13,
    corpLogo14,
    corpLogo15,
    corpLogo16,
    corpLogo17,
    corpLogo18,
    corpLogo19,
    corpLogo20,
    corpLogo21,
    corpLogo22,
  ];
  return (
    <section className="w-full bg-white pt-0 pb-8">
            <style>{`

      `}</style>

      <div className="max-w-7xl mx-auto px-6">
        {/* CORPORATE PARTNERS Section */}
        <div className="text-center mb-6">
          <h3 className="text-2xl font-bold text-gray-900 uppercase tracking-wider mb-6">
            CORPORATE PARTNERS
          </h3>
          <div className="flex justify-center gap-8 sm:gap-30 w-full">
            <div className="relative py-8">
              <div className="">
                <Morquee logos={corpLogos} />
              </div>
            </div>
          </div>
        </div>

        {/* MEMBERSHIP & RECOGNITION Section */}
        <div className="text-center relative z-10">

          <div className="flex justify-center">
            <div className="bg-white rounded-4xl shadow-lg p-4 border border-gray-100 w-full max-w-4xl relative -mb-24">
              <h6 className="text-1xl font-bold text-gray-900 uppercase tracking-wider mb-6">
                MEMBERSHIP & RECOGNITION
              </h6>
              <div className="flex justify-center items-center gap-16">
                {MEMBERSHIP_RECOGNITION.map((cert) => (
                  <div key={cert.id} className="flex flex-col items-center text-center">
                    <div className="w-35 h-16 flex items-center justify-center mb-1">
                      <img
                        src={cert.logo}
                        alt={cert.name}
                        className="h-20 w-auto object-contain max-w-full"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.style.display = 'none';
                          const fallback = target.nextElementSibling as HTMLElement;
                          if (fallback) fallback.style.display = 'block';
                        }}
                      />
                      {/* Fallback text */}
                      <div className={`text-base font-bold ${cert.color} hidden`}>
                        {cert.name}
                      </div>
                    </div>

                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
