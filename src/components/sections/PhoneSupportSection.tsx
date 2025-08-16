"use client"
import { Check, Phone, MessageCircle, BarChart3, Image as ImageIcon } from 'lucide-react';
import Image from 'next/image';

export const PhoneSupportSection = () => {
  return (
  <section className="w-full bg-[#FFF8F3] py-10 sm:py-16 lg:py-20">
      {/* Local style for hero-style double border pill button */}
      <style>{`
        .double-border-btn {position:relative;background:#1f2937;color:#fff;border-radius:9999px;padding:.85rem 1.9rem;font-weight:600;font-size:.95rem;display:inline-flex;align-items:center;gap:1rem;transition:all .3s ease;box-shadow:0 4px 6px -1px rgba(0,0,0,.1),0 2px 4px -1px rgba(0,0,0,.06);} 
        .double-border-btn::before {content:'';position:absolute;top:6px;left:6px;right:6px;bottom:6px;border:1px solid rgba(255,255,255,.45);border-radius:9999px;pointer-events:none;} 
        .double-border-btn:hover {background:#111827;box-shadow:0 10px 15px -3px rgba(0,0,0,.1),0 4px 6px -2px rgba(0,0,0,.05);} 
      `}</style>
  <div className="max-w-7xl mx-auto px-5 xs:px-5 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start lg:items-center">
          {/* Image (hidden on small to match mobile design focus) */}
          <div className="relative hidden sm:block">
            <div className="relative w-full h-[380px] md:h-[460px]">
              <Image
                src="/assets/contact/contact.jpg"
                alt="Typewriter with Contact"
                fill
                className="object-cover rounded-lg"
                sizes="(max-width: 768px) 100vw, (max-width:1200px) 50vw, 600px"
                priority
                onError={(e) => {
                  const fallback = (e.target as HTMLElement).parentElement?.querySelector('.image-fallback') as HTMLElement;
                  if (fallback) fallback.classList.remove('hidden');
                }}
              />
              <div className="image-fallback hidden absolute inset-0 bg-gradient-to-br from-gray-300 to-gray-400 rounded-lg items-center justify-center">
                <div className="text-center">
                  <div className="w-28 h-28 bg-gray-500 rounded-full mx-auto mb-3 flex items-center justify-center">
                    <div className="w-14 h-14 bg-white rounded-full opacity-60"></div>
                  </div>
                  <p className="text-gray-600 text-sm">Typewriter with Contact</p>
                </div>
              </div>

              {/* Desktop overlay cards */}
              <div className="hidden lg:block">
                {/* Availability Card */}
                <div className="absolute -top-4 left-4 bg-white rounded-md shadow-lg px-4 py-3 flex items-center gap-3">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full overflow-hidden bg-gray-200 flex items-center justify-center">
                      <div className="w-4 h-4 rounded-full bg-gray-500" />
                    </div>
                    <div className="space-y-0.5">
                      <p className="text-[13px] font-medium text-gray-900 leading-none">Availability</p>
                      <p className="text-[11px] text-gray-600 leading-none">10:00 AM–6:00PM</p>
                    </div>
                  </div>
                  <div className="w-7 h-7 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <MessageCircle size={14} className="text-white" />
                  </div>
                </div>

                {/* Best For Card */}
                <div className="absolute top-24 md:top-28 right-0 bg-white rounded-md shadow-lg px-4 py-3 w-[180px]">
                  <div className="flex items-start justify-between mb-2">
                    <p className="text-[12px] font-semibold text-gray-800">Best For</p>
                    <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center">
                      <BarChart3 size={13} className="text-white" />
                    </div>
                  </div>
                  <ul className="text-[11px] leading-[1.15rem] text-gray-700 space-y-0.5">
                    <li>• Verify Certificates</li>
                    <li>• Refund/payment Issues</li>
                    <li>• Tech issue Reports</li>
                    <li>• Formal Communication</li>
                  </ul>
                </div>

                {/* Support Message Card */}
                <div className="absolute bottom-6 left-6 bg-white rounded-md shadow-lg px-4 py-2.5 flex items-center gap-2">
                  <div className="w-5 h-5 bg-orange-500 rounded-full flex items-center justify-center">
                    <Check size={12} className="text-white" />
                  </div>
                  <p className="text-[12px] text-gray-700">We are always there for you</p>
                </div>

                {/* Floating orange square icon */}
                <div className="absolute top-32 -left-3 w-8 h-8 bg-orange-500 rounded-md rotate-12 flex items-center justify-center shadow-lg">
                  <ImageIcon size={18} className="text-white -rotate-12" />
                </div>
              </div>
            </div>
          </div>

          {/* Content Column */}
          <div className="bg-[#FFF8F3] rounded-lg">
            <h2 className="text-[1.85rem] xs:text-[2.2rem] md:text-[3.4rem] lg:text-[3.7rem] xl:text-[3.9rem] font-bold text-gray-900 leading-[1.07] mb-6 md:mb-10 max-w-2xl">
              <span className="block">Phone Support-</span>
              <span className="block">Direct & Personal</span>
            </h2>

            {/* Purpose */}
            <div className="flex items-start gap-2.5 mb-5">
              <div className="w-5 h-5 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <Check size={12} className="text-white" />
              </div>
              <p className="text-gray-800 text-[13.5px] sm:text-[15px] md:text-xl lg:text-[1.55rem] leading-relaxed max-w-xl">
                <span className="font-semibold">Purpose: </span>
                For urgent, time-sensitive, or complex queries
              </p>
            </div>

            {/* Content Details */}
            <div className="flex items-start gap-2.5 mb-4">
              <div className="w-5 h-5 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <Check size={12} className="text-white" />
              </div>
              <div className="text-gray-800 text-[13.5px] sm:text-[15px] md:text-xl lg:text-[1.55rem] leading-relaxed max-w-xl w-full">
                <span className="font-semibold block mb-1">Content:</span>
                <ul className="list-disc pl-5 space-y-1.5 marker:text-gray-600">
                  <li><span className="font-semibold">Number:</span> 91-xxxxxxxxxxx</li>
                  <li><span className="font-semibold">Availability:</span> 10:00 AM-6:00PM</li>
                  <li>
                    <span className="font-semibold">Languages Supported:</span><br />
                    English, Hindi, Telugu & Tamil
                  </li>
                </ul>
              </div>
            </div>

            {/* Call Button aligned right (mobile too) */}
            <div className="mt-8 flex w-full">
              <a
                href="tel:+919000000000"
                className="double-border-btn ml-auto lg:ml-0 !px-8 !py-3 !text-sm sm:!text-base font-semibold group"
                aria-label="Call Support"
              >
                <span>Call Now</span>
                <span className="w-7 h-7 rounded-full bg-gray-200 flex items-center justify-center border border-white/40 group-hover:bg-gray-100 transition-colors">
                  <Phone size={14} className="text-gray-700" />
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
