"use client"
import { MessageCircle, Image as ImageIcon, HeadphonesIcon } from 'lucide-react';
import Image from 'next/image';

export const SupportServicesSection = () => {
  return (
  <section className="w-full bg-white py-16 md:py-20">
      <style>{`
        @media (max-width: 767px){
          .double-border-btn{position:relative;background:#1f2937;color:#fff;border-radius:9999px;padding:.9rem 2.3rem;font-weight:600;font-size:.95rem;display:inline-flex;align-items:center;gap:.9rem;transition:all .3s ease;box-shadow:0 4px 6px -1px rgba(0,0,0,.12),0 2px 4px -1px rgba(0,0,0,.06);} 
          .double-border-btn::before{content:'';position:absolute;top:6px;left:6px;right:6px;bottom:6px;border:1px solid rgba(255,255,255,.45);border-radius:9999px;pointer-events:none;} 
          .double-border-btn:hover{background:#111827;}
        }
      `}</style>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Heading */}
          <div>
            {/* Mobile Single-Line Heading */}
            <h2 className="block md:hidden text-[1.85rem] xs:text-[2.05rem] font-bold text-gray-900 leading-tight tracking-tight">
              What we Support you with
            </h2>
            {/* Desktop / Tablet Multi-Line Heading (unchanged) */}
            <h2 className="hidden md:block text-[3.6rem] lg:text-[3.9rem] xl:text-[4.1rem] font-bold text-gray-900 leading-tight">
              What we<br />
              Support you<br />
              with
            </h2>
          </div>

          {/* Right Column - Support Image with Overlay Cards */}
          <div className="relative">
            {/* Background Support Image */}
            <div className="relative w-3/4   md:w-full h-[460px] md:h-[600px] ml-0 md:ml-auto">
              <Image
                src="/assets/contact/support.jpg"
                alt="Support Services"
                fill
                className="object-cover rounded-lg"
                sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 600px"
                priority
                onError={(e) => {
                  const fallback = (e.target as HTMLElement).parentElement?.querySelector('.image-fallback') as HTMLElement;
                  if (fallback) fallback.classList.remove('hidden');
                }}
              />

              {/* Fallback if image fails to load */}
              <div className="image-fallback hidden absolute inset-0 bg-gradient-to-br from-gray-300 to-gray-400 rounded-lg items-center justify-center">
                <div className="text-center">
                  <div className="w-32 h-32 bg-gray-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <div className="w-16 h-16 bg-white rounded-full opacity-60"></div>
                  </div>
                  <p className="text-gray-600">Support Services</p>
                </div>
              </div>

              {/* Overlay Support Service Cards */}
              
              {/* Program Support Card - Desktop */}
              <div className="hidden md:block absolute top-8 -right-8 bg-white rounded-lg p-4 shadow-lg max-w-[300px]">
                <div className="flex items-center gap-3">
                  <Image src="/assets/contact/program.png" alt="Program Support" width={40} height={40} className="rounded-full shrink-0" />
                  <span className="text-gray-900 font-medium text-sm">Program Support</span>
                  <div className="w-7 h-7 bg-orange-500 rounded-full flex items-center justify-center shadow-sm ml-auto shrink-0">
                    <MessageCircle size={14} className="text-white" />
                  </div>
                </div>
              </div>

              {/* Certification Verification Card - Desktop */}
              <div className="hidden md:block absolute top-8 right-0 md:right-auto md:-left-8 bg-white rounded-lg p-4 shadow-lg max-w-[300px]"> 
                <div className="flex items-center gap-3">
                  <Image src="/assets/contact/certfication.png" alt="Certification Verification" width={40} height={40} className="rounded-full shrink-0" />
                  <span className="text-gray-900 font-medium text-sm">Certification Verification</span>
                  <div className="w-7 h-7 bg-orange-500 rounded-full flex items-center justify-center shadow-sm ml-auto shrink-0">
                    <MessageCircle size={14} className="text-white" />
                  </div>
                </div>
              </div>

              {/* Technical Support Card - Desktop */}
              <div className="hidden md:block absolute top-1/2 -right-8 transform -translate-y-1/2 bg-white rounded-lg p-4 shadow-lg max-w-[300px]">
                <div className="flex items-center gap-3">
                  <Image src="/assets/contact/technical.png" alt="Technical Support" width={40} height={40} className="rounded-full shrink-0" />
                  <span className="text-gray-900 font-medium text-sm">Technical Support</span>
                  <div className="w-7 h-7 bg-orange-500 rounded-full flex items-center justify-center shadow-sm ml-auto shrink-0">
                    <MessageCircle size={14} className="text-white" />
                  </div>
                </div>
              </div>

              {/* Career Services Card - Desktop */}
              <div className="hidden md:block absolute top-1/2 -left-8 transform -translate-y-1/2 bg-white rounded-lg p-4 shadow-lg max-w-[300px]">
                <div className="flex items-center gap-3">
                  <Image src="/assets/contact/career.png" alt="Career Services" width={40} height={40} className="rounded-full shrink-0" />
                  <span className="text-gray-900 font-medium text-sm">Career Services</span>
                  <div className="w-7 h-7 bg-orange-500 rounded-full flex items-center justify-center shadow-sm ml-auto shrink-0">
                    <MessageCircle size={14} className="text-white" />
                  </div>
                </div>
              </div>

              {/* Payment Assistance Card - Desktop */}
              <div className="hidden md:block absolute bottom-8 -right-8 bg-white rounded-lg p-4 shadow-lg max-w-[300px]">
                <div className="flex items-center gap-3">
                  <Image src="/assets/contact/payment.png" alt="Payment Assistance" width={40} height={40} className="rounded-full shrink-0" />
                  <span className="text-gray-900 font-medium text-sm">Payment Assistance</span>
                  <div className="w-7 h-7 bg-orange-500 rounded-full flex items-center justify-center shadow-sm ml-auto shrink-0">
                    <MessageCircle size={14} className="text-white" />
                  </div>
                </div>
              </div>

              {/* Floating Icon - Desktop Only */}
              <div className="hidden md:flex absolute top-3/4 -right-4 w-6 h-6 bg-orange-500 rounded-lg items-center justify-center">
                <ImageIcon size={14} className="text-white" />
              </div>

              {/* Mobile Vertical Cards */}
              <div className="md:hidden absolute top-4 left-1/2 -translate-x-[5%] flex flex-col items-end gap-3.5">
                {[
                  'Program Support',
                  'Certification Verification',
                  'Technical Support',
                  'Career Services',
                  'Payment Assistance'
                ].map(label => {
                  const imgMap: Record<string,string> = {
                    'Program Support': '/assets/contact/program.png',
                    'Certification Verification': '/assets/contact/certfication.png',
                    'Technical Support': '/assets/contact/technical.png',
                    'Career Services': '/assets/contact/career.png',
                    'Payment Assistance': '/assets/contact/payment.png'
                  };
                  return (
                    <div key={label} className="bg-[#FFF6EE]/95 backdrop-blur-sm w-[230px] rounded-md px-3.5 py-2.5 shadow-lg flex items-center gap-3">
                      <Image src={imgMap[label]} alt={label} width={40} height={40} />
                      <span className="text-gray-900 font-medium text-[12.5px] leading-snug tracking-tight">{label}</span>
                    </div>
                  );
                })}
                {/* Overlapping Contact Button */}
                <button className="double-border-btn mt-1.5 flex items-center justify-between w-[230px] px-5 py-3 text-[0.9rem] gap-3 shadow-lg">
                  <span className="tracking-wide">Contact Us</span>
                  <span className="w-7 h-7 rounded-full bg-gray-200 flex items-center justify-center border border-white/40">
                    <HeadphonesIcon size={14} className="text-gray-700" />
                  </span>
                </button>
              </div>
            </div>
            
            {/* Contact Us Button - Desktop (retain original) */}
            <div className="hidden md:block mt-8 text-center">
              <button className="flex items-center gap-3 bg-gray-700 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-800 transition-colors shadow-md border-2 border-blue-500 mx-auto">
                <span>Contact Us</span>
                <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                  <HeadphonesIcon size={20} className="text-blue-700" />
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
