import React from 'react';
import { Mail, MessageCircle, Phone, ArrowRight } from 'lucide-react';

export const InsuranceSupportFAQSection = () => {
  return (
    <section className="w-full bg-[white] py-16 pl-6 ">
      <div className="max-w-12xl ">
        <div className="grid lg:grid-cols-2 gap-12">
          
          {/* Left Column: Need Assistance */}
          <div className="bg-white p-8 rounded-2xl">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Need Assistance?
            </h2>
            <p className="text-gray-600 mb-8">
              Our dedicated insurance support team is here to help you with any questions or concerns about your coverage.
            </p>

            {/* Contact Options */}
            <div className="space-y-6">
              {/* Email Support */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-[#FE7642]" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900 mb-1">Email Support</h3>
                  <p className="text-gray-500 text-sm mb-2">24-hour response time</p>
                  <a href="mailto:insurance@sirtifai.com" className="text-[#FE7642] font-medium">
                    insurance@sirtifai.com
                  </a>
                </div>
              </div>

              {/* Live Chat */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MessageCircle className="w-6 h-6 text-[#FE7642]" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900 mb-1">Live Chat</h3>
                  <p className="text-gray-500 text-sm mb-3">Available Monday-Friday, 9am-6pm IST</p>
                  <button className="px-6 py-2 bg-[#FE7642] text-white rounded-lg text-sm font-medium hover:bg-orange-600 transition-colors">
                    Start Chat
                  </button>
                </div>
              </div>

              {/* Phone Support */}
              {/* <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-[#FE7642]" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900 mb-1">Phone Support</h3>
                  <p className="text-gray-500 text-sm mb-2">For urgent claims and inquiries</p>
                  <span className="text-gray-700 font-medium">+91 9876543210</span>
                </div>
              </div> */}
            </div>
          </div>

          {/* Right Column: Frequently Asked Questions */}
          <div className="bg-[#FEE0D4] p-8 rounded-2xl">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Frequently Asked Questions
            </h2>

            {/* FAQ Items */}
            <div className="space-y-6">
              {/* FAQ 1 */}
              <div className="border-b border-gray-200 pb-4">
                <h3 className="font-semibold text-gray-900 mb-2">
                  How soon can I file a claim after joining?
                </h3>
                <p className="text-gray-600 text-sm">
                  There's a 15-day waiting period for most claims after enrolling in the program, except for access-related issues which can be reported immediately.
                </p>
              </div>

              {/* FAQ 2 */}
              <div className="border-b border-gray-200 pb-4">
                <h3 className="font-semibold text-gray-900 mb-2">
                  Is there a limit to how many claims I can file?
                </h3>
                <p className="text-gray-600 text-sm">
                  There's no strict limit, but frequent claims may be subject to additional review. Our goal is to provide support when you genuinely need it.
                </p>
              </div>

              {/* FAQ 3 */}
              <div className="border-b border-gray-200 pb-4">
                <h3 className="font-semibold text-gray-900 mb-2">
                  How does the payment guarantee work?
                </h3>
                <p className="text-gray-600 text-sm">
                  If a client fails to pay for completed work during your Practice Phase, we'll compensate you up to your coverage limit while we pursue the client for payment.
                </p>
              </div>

              {/* FAQ 4 */}
              <div className="border-b border-gray-200 pb-4">
                <h3 className="font-semibold text-gray-900 mb-2">
                  Can I upgrade my insurance coverage?
                </h3>
                <p className="text-gray-600 text-sm">
                  Yes, you can upgrade your insurance coverage by upgrading your SPP plan or purchasing additional add-ons at any time.
                </p>
              </div>
            </div>

            {/* View All FAQs Link */}
            <div className="mt-8">
              <a href="#" className="inline-flex items-center gap-2 text-gray-700 font-medium hover:text-[#FE7642] transition-colors">
                View all FAQs
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
