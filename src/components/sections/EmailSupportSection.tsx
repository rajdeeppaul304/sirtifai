"use client";
import {
  Check,
  Mail,
  MessageCircle,
  BarChart3,
  Image as ImageIcon,
} from "lucide-react";
import { Button } from "../ui/Button";
import Image from "next/image";

export const EmailSupportSection = () => {
  return (
    <section className="w-full bg-white py-10 sm:py-16 lg:py-20">
      {/* Reuse hero double-border button styling */}
      <style>{`
        .double-border-btn {position:relative;background:#1f2937;color:#fff;border-radius:9999px;padding:0.85rem 1.9rem;font-weight:600;font-size:0.95rem;line-height:1;display:inline-flex;align-items:center;transition:all .3s ease;box-shadow:0 4px 6px -1px rgba(0,0,0,.1),0 2px 4px -1px rgba(0,0,0,.06);}
        .double-border-btn::before {content:'';position:absolute;top:6px;left:6px;right:6px;bottom:6px;border:1px solid rgba(255,255,255,0.45);border-radius:9999px;pointer-events:none;}
        .double-border-btn:hover {background:#111827;box-shadow:0 10px 15px -3px rgba(0,0,0,.1),0 4px 6px -2px rgba(0,0,0,.05);}        
        @media (max-width: 640px){
          .email-card{backdrop-filter:blur(6px);background:rgba(255,248,243,0.92)!important;border:1px solid rgba(0,0,0,0.05);padding:10px 12px;border-radius:10px;box-shadow:0 4px 10px -2px rgba(0,0,0,0.08);} 
          .email-card h4{font-size:11px;margin-bottom:3px;} 
          .email-card p, .email-card li, .email-card span, .email-card div, .email-card ul{font-size:10px;line-height:1.2;} 
        }
      `}</style>
      <div className="max-w-7xl mx-auto px-5 xs:px-5 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start lg:items-center">
          {/* Left Column - Text Content */}
          <div>
            {/* Main Heading */}
            <h2 className="text-[1.9rem] xs:text-[2.25rem] md:text-[3.6rem] lg:text-[3.9rem] xl:text-[4.1rem] font-bold text-gray-900 mb-6 md:mb-10 leading-[1.07] tracking-tight">
              Email Support from us...
            </h2>

            {/* Service Details */}
            <div className="space-y-5 md:space-y-6 mb-10 md:mb-12">
              {/* Email ID */}
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check size={14} className="text-white" />
                </div>
                <div className="text-[13.5px] sm:text-[15px] md:text-xl lg:text-[1.55rem] text-gray-700">
                  <span className="font-medium">Email ID: </span>
                  <a
                    href="mailto:support@sirtifai.com"
                    className="text-blue-600 hover:text-blue-700 underline break-all"
                  >
                    support@sirtifai.com
                  </a>
                </div>
              </div>

              {/* Availability */}
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check size={14} className="text-white" />
                </div>
                <span className="text-[13.5px] sm:text-[15px] md:text-xl lg:text-[1.55rem] text-gray-700 leading-relaxed">
                  <span className="font-medium">Availability: </span>
                  24/7 submission, replies within 24-48 hours.
                </span>
              </div>

              {/* Attachments Accepted */}
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check size={14} className="text-white" />
                </div>
                <span className="text-[13.5px] sm:text-[15px] md:text-xl lg:text-[1.55rem] text-gray-700 leading-relaxed">
                  <span className="font-medium">Attachments Accepted: </span>
                  Screenshots, PDFs, invoices, certificates.
                </span>
              </div>
            </div>

            {/* Email Button */}
            <div className="mt-4">
              <div className="flex w-full">
                <Button
                  variant="secondary"
                  size="sm"
                  onClick={() => {
                    if (typeof window !== "undefined")
                      window.location.href = "mailto:support@sirtifai.com";
                  }}
                  className="double-border-btn ml-auto sm:ml-0 !rounded-full !bg-[#1f2937] hover:!bg-[#111827] !px-8 !py-4 text-[1.05rem] font-semibold gap-4"
                >
                  <span className="tracking-wide">Email</span>
                  <span className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center border border-white/40">
                    <Mail size={16} className="text-gray-700" />
                  </span>
                </Button>
              </div>
            </div>
          </div>

          {/* Right Column - Laptop Image with Overlay Cards */}
          <div className="hidden md:block relative lg:order-none -mx-2 xs:mx-0">
            {/* Background Laptop Image */}
            <div className="relative w-full h-[300px] xs:h-[340px] sm:h-[380px] md:h-[420px] lg:h-[500px]">
              <Image
                src="/assets/contact/laptop.png"
                alt="Office Desk Setup"
                fill
                className="object-cover rounded-lg"
                sizes="(max-width: 768px) 100vw, (max-width:1200px) 50vw, 600px"
                priority
                onError={(e) => {
                  const fallback = (
                    e.target as HTMLElement
                  ).parentElement?.querySelector(
                    ".image-fallback"
                  ) as HTMLElement;
                  if (fallback) fallback.classList.remove("hidden");
                }}
              />

              {/* Fallback if image fails to load */}
              <div className="image-fallback hidden w-full h-full bg-gradient-to-br from-gray-300 to-gray-400 rounded-lg items-center justify-center">
                <div className="text-center">
                  <div className="w-32 h-32 bg-gray-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <div className="w-16 h-16 bg-white rounded-full opacity-60"></div>
                  </div>
                  <p className="text-gray-600">Office Desk Setup</p>
                </div>
              </div>

              {/* Overlay Information Cards */}

              {/* Availability Card - Top Left */}
              <div className="email-card absolute top-3 xs:top-6 left-3 xs:left-4 bg-[#FFF8F3] p-3 xs:p-4 md:p-5 shadow-lg rounded-lg max-w-[160px] xs:max-w-[200px] md:max-w-[235px]">
                <div className="flex items-center justify-between mb-2 md:mb-3">
                  <div className="w-8 h-8 md:w-10 md:h-10 bg-gray-300 rounded-full flex items-center justify-center">
                    <div className="w-4 h-4 md:w-5 md:h-5 bg-gray-500 rounded-full"></div>
                  </div>
                  <div className="w-6 h-6 md:w-7 md:h-7 bg-orange-500 rounded-full flex items-center justify-center">
                    <MessageCircle size={14} className="text-white" />
                  </div>
                </div>
                <h4 className="font-semibold text-gray-900 text-xs xs:text-sm md:text-base mb-1 md:mb-1.5 leading-tight">
                  Availability
                </h4>
                <p className="text-gray-700 text-[10px] xs:text-xs md:text-[12.25px] leading-snug md:leading-snug">
                  24/7 support, replies in 24 hours.
                </p>
              </div>

              {/* Best For Card - Top Right */}
              <div className="email-card absolute top-24 xs:top-6 right-3 xs:right-4 bg-[#FFF8F3] p-3 xs:p-4 md:p-5 shadow-lg rounded-lg max-w-[160px] xs:max-w-[200px] md:max-w-[235px]">
                <div className="flex items-center justify-between mb-2 md:mb-3">
                  <h4 className="font-semibold text-gray-900 text-xs xs:text-sm md:text-base leading-tight">
                    Best For
                  </h4>
                  <div className="w-6 h-6 md:w-7 md:h-7 bg-orange-500 rounded-full flex items-center justify-center">
                    <BarChart3 size={14} className="text-white" />
                  </div>
                </div>
                <ul className="text-gray-700 text-[10px] xs:text-xs md:text-[12.25px] space-y-0.5 md:space-y-1 leading-snug">
                  <li>• Verify Certificates</li>
                  <li>• Refund / Payment</li>
                  <li>• Tech Reports</li>
                  <li>• Formal Docs</li>
                </ul>
              </div>

              {/* Attachments Accepted Card - Bottom Left */}
              <div className="email-card absolute bottom-5 xs:bottom-6 left-3 xs:left-4 bg-[#FFF8F3] p-3 xs:p-4 md:p-5 shadow-lg rounded-lg max-w-[170px] xs:max-w-[200px] md:max-w-[240px]">
                <div className="flex items-center justify-between mb-1.5 md:mb-2">
                  <div className="w-6 h-6 md:w-7 md:h-7 bg-orange-500 rounded-md flex items-center justify-center">
                    <ImageIcon size={13} className="text-white" />
                  </div>
                  <h4 className="font-semibold text-gray-900 text-xs xs:text-sm md:text-base leading-tight">
                    Attachments
                  </h4>
                </div>
                <div className="grid grid-cols-2 gap-1 md:gap-1.5 text-gray-700 text-[10px] xs:text-xs md:text-[12.25px] leading-snug md:leading-tight">
                  <span>• Screenshots</span>
                  <span>• PDFs</span>
                  <span>• Invoices</span>
                  <span>• Certificates</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
