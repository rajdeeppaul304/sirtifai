'use client';

import { CERTIFICATIONS } from '../../constants/data';
import { ACADEMIC_PARTNERS } from '../../constants/data';
import { MEMBERSHIP_RECOGNITION } from '../../constants/data';

import { Morquee } from '../ui/Morquee';

export const PartnersRecognitionSection = () => {

  const corpLogos = [
    "/assets/home/Logos/sonyLogo.svg",
    "/assets/home/Logos/hpLogo.webp",
    "/assets/home/Logos/adobeLogo.webp",
    "/assets/home/Logos/adobeLogo.webp",
    "/assets/home/Logos/amazonLogo.png",
    "/assets/home/Logos/dropbox.svg",
    "/assets/home/Logos/firefoxLogo.png",
    "/assets/home/Logos/intelLogo.png",
    "/assets/home/Logos/ytLogo.webp",
    "/assets/home/Logos/netFlixLogo.webp",
    "/assets/home/Logos/IBM.webp",
    "/assets/home/Logos/sapLogo.jpeg",
    "/assets/home/Logos/zoomLogo.png",
    "/assets/home/Logos/walmartLogo.png",
    "/assets/home/Logos/cocacola.png",
    "/assets/home/Logos/fedexLogo.png",
    "/assets/home/Logos/fbLogo.jpg",
    "/assets/home/Logos/oracleLogo.jpg",
    "/assets/home/Logos/xLogo.webp",
    "/assets/home/Logos/GoogleLogo.png",
    "/assets/home/Logos/mircrosoftLogo.jpg",
    "/assets/home/Logos/linkiedLogo.webp",
  ];
  return (
    <section className="w-full bg-white pt-0 pb-8">
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
                    <div className="w-32 h-16 flex items-center justify-center mb-1">
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
