"use client"
import { Download, Star } from 'lucide-react';

export const InternationalHeroSection = () => {
  return (
    <section className="w-full py-20">
          <style>
            {`
        .double-border-btn {
            position: relative;
            background: #1f2937;
            color: white;
            border-radius: 9999px;
            padding: 1rem 2rem;
            font-weight: 600;
            font-size: 1.125rem;
            transition: all 0.3s ease;
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
        }
        
        .double-border-btn::before {
            content: '';
            position: absolute;
            top: 6px;
            left: 6px;
            right: 6px;
            bottom: 6px;
            background: transparent;
            // border: 1px solid white;
            border: 1px solid rgba(255, 255, 255, 0.45);


            border-radius: 9999px;
            z-index: 1;
            pointer-events: none;
        }
        
        .double-border-btn:hover {
            background: #111827;
            box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
        }
            `}
    </style>

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Text Content and CTA */}
          <div>
            {/* Headline with Star Icon */}
            <div className="mb-8">
              <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-6 tracking-tight leading-tight">
                Your Global Career In Just 18 Months
                <span className="inline-block ml-3">
                  <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center">
                    <Star size={16} className="text-white fill-current" />
                  </div>
                </span>
              </h1>
              
              <p className="text-xl text-gray-700 leading-relaxed font-normal">
                A comprehensive roadmap to international opportunities with complete visa support and placement assistance.
              </p>
            </div>

            {/* Call-to-Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              {/* Start Your Global Career Button */}
<button className=" double-border-btn ">
  Start Your Global Career
</button>

              {/* Download Brochure Button */}
              <button className="px-8 py-4 bg-orange-500 text-white rounded-full font-semibold text-lg hover:bg-orange-600 transition-colors shadow-md hover:shadow-lg flex items-center gap-2">
                <Download size={20} />
                Download Brochure
              </button>
            </div>
          </div>

          {/* Right Side - Combined/Overlapping Images */}
          <div className="relative">
            {/* Main Large Image */}
            <div className="relative">
              <img
                src="/assets/international/int1.png"
                alt="International Career Opportunities"
                className="w-full h-auto rounded-lg shadow-lg"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                  const fallback = target.nextElementSibling as HTMLElement;
                  if (fallback) fallback.style.display = 'block';
                }}
              />
              {/* Fallback if image fails to load */}
              <div className="hidden w-full h-64 bg-gray-200 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gray-400 rounded-full mx-auto mb-4"></div>
                  <p className="text-gray-600">International Career Image</p>
                </div>
              </div>
            </div>

            {/* Smaller Second Image - Overlapping the bottom */}
            <div className="absolute bottom-0 right-0 w-3/4 transform translate-y-1/4">
              <img
                src="/assets/international/int2.png"
                alt="Global Opportunities"
                className="w-full h-auto rounded-lg shadow-lg border-4 border-white"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                  const fallback = target.nextElementSibling as HTMLElement;
                  if (fallback) fallback.style.display = 'block';
                }}
              />
              {/* Fallback if image fails to load */}
              <div className="hidden w-full h-32 bg-gray-200 rounded-lg flex items-center justify-center border-4 border-white">
                <div className="text-center">
                  <div className="w-12 h-12 bg-gray-400 rounded-full mx-auto mb-2"></div>
                  <p className="text-gray-600 text-sm">Global Opportunities</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
            <div className="w-full bg-white py-8 mt-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Transforming Careers Through Skills, Practice, And Progress
          </h2>
        </div>
      </div>

    </section>
  );
};
