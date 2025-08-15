'use client';

import { BarChart3 } from 'lucide-react';

export const CertificationsHeroSection = () => {
  return (
    <section className="w-full py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Text Content */}
          <div>
            {/* Main Headline */}
            <h1 className="text-6xl font-extrabold text-gray-900 mb-8 tracking-tight leading-tight">
              Get Certified. Get Hired. Globally.
            </h1>
            
            {/* Description */}
            <p className="text-xl text-gray-700 leading-relaxed mb-8">
              Sirtifai certifications are NSQF-aligned, globally valid, and instantly verifiable — proof that your skills meet industry and employer standards worldwide.
            </p>
            
            {/* Call-to-Action Links */}
            <div className="flex items-center gap-4">
              <span className="text-lg font-semibold text-gray-900">Join Now :</span>
              <div className="flex items-center gap-4">
                <a href="#" className="text-orange-500 font-semibold hover:text-orange-600 transition-colors">
                  SPP Int
                </a>
                <span className="text-gray-400">|</span>
                <a href="#" className="text-orange-500 font-semibold hover:text-orange-600 transition-colors">
                  SPP Freelance
                </a>
                <span className="text-gray-400">|</span>
                <a href="#" className="text-orange-500 font-semibold hover:text-orange-600 transition-colors">
                  SPP Student
                </a>
              </div>
            </div>
          </div>

          {/* Right Side - Graphic & Information Box */}
          <div className="relative">
            {/* Main 3D Illustration */}
            <div className="relative w-full h-[500px] flex items-center justify-center">
              <img
                src="/assets/certification/main.png"
                alt="Sirtifai Certifications 3D Illustration"
                className="w-full h-full object-contain"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                  const fallback = target.nextElementSibling as HTMLElement;
                  if (fallback) fallback.style.display = 'flex';
                }}
              />
              
              {/* Fallback if image fails to load */}
              <div className="hidden w-full h-full bg-gradient-to-br from-orange-100 to-orange-200 rounded-2xl flex items-center justify-center">
                <div className="text-center">
                  <div className="w-32 h-32 bg-orange-300 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <div className="w-16 h-16 bg-white rounded-full opacity-60"></div>
                  </div>
                  <p className="text-orange-600 font-semibold">3D Illustration</p>
                </div>
              </div>
            </div>

            {/* "Best For" Box */}
            <div className="absolute bottom-8 right-8 bg-white rounded-xl p-6 shadow-xl border border-gray-100 max-w-xs">
              {/* Icon */}
              <div className="flex justify-end mb-3">
                <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center">
                  <BarChart3 size={20} className="text-orange-500" />
                </div>
              </div>
              
              {/* Title */}
              <h3 className="text-lg font-bold text-gray-900 mb-4">Best For</h3>
              
              {/* Bullet Points */}
              <ul className="space-y-2">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-sm text-gray-700">NSQF-certified and employer-approved.</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-sm text-gray-700">Verification QR on every certificate.</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-sm text-gray-700">Recognized in India, MENA, SEA, and other global regions.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
