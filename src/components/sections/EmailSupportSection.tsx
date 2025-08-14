"use client"
import { Check, Mail, MessageCircle, BarChart3, Image as ImageIcon } from 'lucide-react';

export const EmailSupportSection = () => {
  return (
    <section className="w-full bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Text Content */}
          <div>
            {/* Main Heading */}
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 leading-tight">
              Email Support from us...
            </h2>

            {/* Service Details */}
            <div className="space-y-6 mb-12">
              {/* Email ID */}
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Check size={14} className="text-white" />
                </div>
                <div>
                  <span className="text-gray-700 font-medium">Email ID: </span>
                  <a href="mailto:support@sirtifai.com" className="text-blue-600 hover:text-blue-700 underline">
                    support@sirtifai.com
                  </a>
                </div>
              </div>

              {/* Availability */}
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Check size={14} className="text-white" />
                </div>
                <span className="text-gray-700">
                  <span className="font-medium">Availability: </span>
                  24/7 submission, replies within 24-48 hours.
                </span>
              </div>

              {/* Attachments Accepted */}
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Check size={14} className="text-white" />
                </div>
                <span className="text-gray-700">
                  <span className="font-medium">Attachments Accepted: </span>
                  Screenshots, PDFs, invoices, certificates.
                </span>
              </div>
            </div>

            {/* Email Button */}
            <button className="flex items-center gap-3 bg-gray-700 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-800 transition-colors shadow-md">
              <span>Email</span>
              <div className="w-8 h-8 bg-gray-500 rounded-full flex items-center justify-center">
                <Mail size={20} className="text-white" />
              </div>
            </button>
          </div>

          {/* Right Column - Laptop Image with Overlay Cards */}
          <div className="relative">
            {/* Background Laptop Image */}
            <div className="relative w-full h-[500px]">
              <img
                src="/assets/contact/laptop.png"
                alt="Office Desk Setup"
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
                  <p className="text-gray-600">Office Desk Setup</p>
                </div>
              </div>

              {/* Overlay Information Cards */}
              
              {/* Availability Card - Top Left */}
              <div className="absolute top-8 left-4 bg-[#FFF8F3] rounded-lg p-4 shadow-lg max-w-[200px]">
                <div className="flex items-center justify-between mb-2">
                  <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
                    <div className="w-4 h-4 bg-gray-500 rounded-full"></div>
                  </div>
                  <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center">
                    <MessageCircle size={14} className="text-white" />
                  </div>
                </div>
                <h4 className="font-semibold text-gray-900 text-sm mb-1">Availability</h4>
                <p className="text-gray-700 text-xs">24/7 support, replies in 24 hours.</p>
              </div>

              {/* Best For Card - Top Right */}
              <div className="absolute top-8 right-4 bg-[#FFF8F3] rounded-lg p-4 shadow-lg max-w-[200px]">
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

              {/* Attachments Accepted Card - Bottom Left */}
              <div className="absolute bottom-8 left-4 bg-[#FFF8F3] rounded-lg p-4 shadow-lg max-w-[200px]">
                <div className="flex items-center justify-between mb-2">
                  <div className="w-6 h-6 bg-orange-500 rounded-lg flex items-center justify-center">
                    <ImageIcon size={14} className="text-white" />
                  </div>
                  <h4 className="font-semibold text-gray-900 text-sm">Attachments Accepted</h4>
                </div>
                <div className="grid grid-cols-2 gap-1 text-gray-700 text-xs">
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
