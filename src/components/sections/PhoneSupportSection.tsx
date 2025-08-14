"use client"
import { Check, Phone, MessageCircle, BarChart3, Image as ImageIcon } from 'lucide-react';

export const PhoneSupportSection = () => {
  return (
    <section className="w-full bg-[#FFF8F3] py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Typewriter Image with Overlay Bubbles */}
          <div className="relative">
            {/* Background Typewriter Image */}
            <div className="relative w-full h-[500px]">
              <img
                src="/assets/contact/contact.jpg"
                alt="Typewriter with Contact"
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
                  <p className="text-gray-600">Typewriter with Contact</p>
                </div>
              </div>

              {/* Overlay Speech Bubbles */}
              
              {/* Top Left Bubble - Availability */}
              <div className="absolute top-8 left-4 bg-white rounded-lg p-4 shadow-lg max-w-[200px]">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
                      <div className="w-4 h-4 bg-gray-500 rounded-full"></div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 text-sm">Availability</h4>
                      <p className="text-gray-700 text-xs">10:00 AM-6:00 PM</p>
                    </div>
                  </div>
                  <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center">
                    <MessageCircle size={14} className="text-white" />
                  </div>
                </div>
              </div>

              {/* Middle Right Bubble - Best For */}
              <div className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white rounded-lg p-4 shadow-lg max-w-[200px]">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-semibold text-gray-900 text-sm">Best For</h4>
                  <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center">
                    <BarChart3 size={14} className="text-white" />
                  </div>
                </div>
                <ul className="text-gray-700 text-xs space-y-1">
                  <li>• Verify Certificates</li>
                  <li>• Refund/payment Issues</li>
                  <li>• Tech issue Reports</li>
                  <li>• Formal Communication</li>
                </ul>
              </div>

              {/* Bottom Left Bubble - We are always there */}
              <div className="absolute bottom-8 left-4 bg-white rounded-lg p-4 shadow-lg max-w-[200px]">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center">
                    <Check size={14} className="text-white" />
                  </div>
                  <span className="text-gray-700 text-sm">We are always there for you</span>
                </div>
              </div>

              {/* Floating Icon - Picture Frame */}
              <div className="absolute top-24 left-2 w-6 h-6 bg-orange-500 rounded-lg flex items-center justify-center">
                <ImageIcon size={14} className="text-white" />
              </div>
            </div>
          </div>

          {/* Right Column - Phone Support Information */}
          <div>
            {/* Main Heading */}
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 leading-tight">
              Phone Support- Direct & Personal
            </h2>

            {/* Purpose */}
            <div className="flex items-start gap-3 mb-6">
              <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <Check size={14} className="text-white" />
              </div>
              <span className="text-gray-700">
                <span className="font-medium">Purpose: </span>
                For urgent, time-sensitive, or complex queries
              </span>
            </div>

            {/* Content Details */}
            <div className="mb-8">
              <div className="flex items-start gap-3 mb-4">
                <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Check size={14} className="text-white" />
                </div>
                <span className="text-gray-700 font-medium">Content:</span>
              </div>
              
              <div className="ml-9 space-y-2 text-gray-700">
                <div><span className="font-medium">Number: </span>91-xxxxxxxxxxx</div>
                <div><span className="font-medium">Availability: </span>10:00 AM- 6:00 PM</div>
                <div><span className="font-medium">Languages Supported: </span>English, Hindi, Telugu, Tamil</div>
              </div>
            </div>

            {/* Call Button */}
            <button className="flex items-center gap-3 bg-gray-700 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-blue-800 transition-colors shadow-md">
              <span>Call Now</span>
              <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                <Phone size={20} className="text-blue-700" />
              </div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
