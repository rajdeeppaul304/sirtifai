"use client"
import { MessageCircle, Image as ImageIcon, HeadphonesIcon } from 'lucide-react';

export const SupportServicesSection = () => {
  return (
    <section className="w-full bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Heading */}
          <div>
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
              What we<br />
              Support you<br />
              with
            </h2>
          </div>

          {/* Right Column - Support Image with Overlay Cards */}
          <div className="relative">
            {/* Background Support Image */}
            <div className="relative w-full h-[600px]">
              <img
                src="/assets/contact/support.jpg"
                alt="Support Services"
                className="w-full h-full object-cover rounded-lg"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                  const fallback = target.nextElementSibling as HTMLElement;
                  if (fallback) fallback.style.display = 'flex';
                }}
              />
              
              {/* Fallback if image fails to load */}
              <div className="hidden w-full h-full bg-gradient-to-br from-gray-300 to-gray-400 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <div className="w-32 h-32 bg-gray-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <div className="w-16 h-16 bg-white rounded-full opacity-60"></div>
                  </div>
                  <p className="text-gray-600">Support Services</p>
                </div>
              </div>

              {/* Overlay Support Service Cards */}
              
              {/* Program Support Card - Top, extending beyond right edge */}
              <div className="absolute top-8 -right-8 bg-white rounded-lg p-4 shadow-lg max-w-[220px]">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
                      <div className="w-4 h-4 bg-gray-500 rounded-full"></div>
                    </div>
                    <span className="text-gray-900 font-medium text-sm">Program Support</span>
                  </div>
                  <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center">
                    <MessageCircle size={14} className="text-white" />
                  </div>
                </div>
              </div>

              {/* Certification Verification Card - Top left, extending beyond left edge */}
              <div className="absolute top-8 -left-8 bg-white rounded-lg p-4 shadow-lg max-w-[220px]">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
                      <div className="w-4 h-4 bg-gray-500 rounded-full"></div>
                    </div>
                    <span className="text-gray-900 font-medium text-sm">Certification Verification</span>
                  </div>
                  <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center">
                    <MessageCircle size={14} className="text-white" />
                  </div>
                </div>
              </div>

              {/* Technical Support Card - Middle, extending beyond right edge */}
              <div className="absolute top-1/2 -right-8 transform -translate-y-1/2 bg-white rounded-lg p-4 shadow-lg max-w-[220px]">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
                      <div className="w-4 h-4 bg-gray-500 rounded-full"></div>
                    </div>
                    <span className="text-gray-900 font-medium text-sm">Technical Support</span>
                  </div>
                  <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center">
                    <MessageCircle size={14} className="text-white" />
                  </div>
                </div>
              </div>

              {/* Career Services Card - Middle left, extending beyond left edge */}
              <div className="absolute top-1/2 -left-8 transform -translate-y-1/2 bg-white rounded-lg p-4 shadow-lg max-w-[220px]">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
                      <div className="w-4 h-4 bg-gray-500 rounded-full"></div>
                    </div>
                    <span className="text-gray-900 font-medium text-sm">Career Services</span>
                  </div>
                  <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center">
                    <MessageCircle size={14} className="text-white" />
                  </div>
                </div>
              </div>

              {/* Payment Assistance Card - Bottom, extending beyond right edge */}
              <div className="absolute bottom-8 -right-8 bg-white rounded-lg p-4 shadow-lg max-w-[220px]">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
                      <div className="w-4 h-4 bg-gray-500 rounded-full"></div>
                    </div>
                    <span className="text-gray-900 font-medium text-sm">Payment Assistance</span>
                  </div>
                  <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center">
                    <MessageCircle size={14} className="text-white" />
                  </div>
                </div>
              </div>

              {/* Floating Icon - Picture Frame, positioned between Technical Support and Payment Assistance */}
              <div className="absolute top-3/4 -right-4 w-6 h-6 bg-orange-500 rounded-lg flex items-center justify-center">
                <ImageIcon size={14} className="text-white" />
              </div>


            </div>
            
            {/* Contact Us Button - Below the Image */}
            <div className="mt-8 text-center">
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
