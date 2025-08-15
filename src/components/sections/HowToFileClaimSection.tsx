import React from 'react';
import { Clock, CheckCircle } from 'lucide-react';

export const HowToFileClaimSection = () => {
  return (
  <section className="w-full bg-[#FEF7F1] py-8 sm:py-12 px-2 xs:px-4 sm:px-6">
      <div className="max-w-2xl sm:max-w-3xl mx-auto">
        {/* Main Title and Introduction */}
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="text-3xl xs:text-4xl sm:text-5xl font-bold text-gray-900 mb-3 sm:mb-4 leading-tight">
            How To File A Claim
          </h2>
          <p className="text-gray-600 text-base xs:text-lg lg:text-xl">
            We&apos;ve made the claim process simple and straightforward to ensure you get the support you need quickly.
          </p>
        </div>

        {/* Four-Step Process Flow */}
        <div className="ml-2 md:ml-0 relative flex flex-col gap-0 pl-4 xs:pl-5 sm:pl-4 pr-2 xs:pr-3 sm:pr-4">
          {/* Vertical Line (mobile slightly closer, desktop restored) */}
          <div className="absolute left-6 xs:left-8 sm:left-12 top-8 bottom-0 w-px bg-gray-300 z-0" style={{height: 'calc(100% - 2rem)'}}></div>

          {/* Step 1: Submit Claim Request */}
          <div className="relative flex items-start gap-3 xs:gap-5 sm:gap-8 mb-10 sm:mb-12 pl-2 xs:pl-4 sm:pl-8">
            {/* Step Number Circle */}
            <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-[#FE7642] rounded-full flex items-center justify-center z-10 mt-0.5 translate-x-[-55%] sm:translate-x-[-50%]">
              <span className="text-white text-xl font-bold">1</span>
            </div>

            {/* Step Content */}
            <div className="flex-1">
              <h3 className="text-lg xs:text-xl sm:text-2xl font-bold text-gray-900 mb-2 sm:mb-4">
                Submit Claim Request
              </h3>
              <p className="text-gray-700 mb-4 sm:mb-6 leading-relaxed text-sm xs:text-base lg:text-lg">
                Log in to your Sirtifai account and navigate to the Insurance section. Select &apos;File a Claim&apos; and choose the appropriate claim type.
              </p>

              {/* Required Information Box */}
              <div className="bg-white rounded-lg p-4 xs:p-5 sm:p-6">
                <h4 className="font-bold text-gray-900 mb-2 sm:mb-3 text-sm xs:text-base">Required Information:</h4>
                <ul className="space-y-1 xs:space-y-2 text-gray-700 text-sm xs:text-base lg:text-lg">
                  <li>Your SPP ID and program details</li>
                  <li>Date and nature of the issue</li>
                  <li>Brief description of your claim</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Step 2: Documentation Submission */}
          <div className="relative flex items-start gap-3 xs:gap-5 sm:gap-8 mb-10 sm:mb-12 pl-2 xs:pl-4 sm:pl-8">
            {/* Step Number Circle */}
            <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-[#FE7642] rounded-full flex items-center justify-center z-10 mt-0.5 translate-x-[-55%] sm:translate-x-[-50%]">
              <span className="text-white text-xl font-bold">2</span>
            </div>

            {/* Step Content */}
            <div className="flex-1">
              <h3 className="text-lg xs:text-xl sm:text-2xl font-bold text-gray-900 mb-2 sm:mb-4">
                Documentation Submission
              </h3>
              <p className="text-gray-700 mb-4 sm:mb-6 leading-relaxed text-sm xs:text-base lg:text-lg">
                Upload all required documentation to support your claim. Our system will guide you through the specific documents needed based on your claim type.
              </p>

              {/* Required Information Box */}
              <div className="bg-white rounded-lg p-4 xs:p-5 sm:p-6">
                <h4 className="font-bold text-gray-900 mb-2 sm:mb-3 text-sm xs:text-base">Required Information:</h4>
                <ul className="space-y-1 xs:space-y-2 text-gray-700 text-sm xs:text-base lg:text-lg">
                  <li>Your SPP ID and program details</li>
                  <li>Date and nature of the issue</li>
                  <li>Brief description of your claim</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Step 3: Claim Review */}
          <div className="relative flex items-start gap-3 xs:gap-5 sm:gap-8 mb-10 sm:mb-12 pl-2 xs:pl-4 sm:pl-8">
            {/* Step Number Circle */}
            <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-[#FE7642] rounded-full flex items-center justify-center z-10 mt-0.5 translate-x-[-55%] sm:translate-x-[-50%]">
              <span className="text-white text-xl font-bold">3</span>
            </div>

            {/* Step Content */}
            <div className="flex-1">
              <h3 className="text-lg xs:text-xl sm:text-2xl font-bold text-gray-900 mb-2 sm:mb-4">
                Claim Review
              </h3>
              <p className="text-gray-700 mb-4 sm:mb-6 leading-relaxed text-sm xs:text-base lg:text-lg">
                Our insurance team will review your claim and documentation. You&apos;ll receive regular updates on the status of your claim through your preferred communication channel.
              </p>

              {/* Information Box */}
              <div className="bg-white rounded-lg p-4 xs:p-5 sm:p-6">
                <div className="flex items-center gap-2 xs:gap-3">
                  <Clock className="w-5 h-5 text-[#FE7642]" />
                  <span className="text-gray-700 text-sm xs:text-base lg:text-lg">Most claims are reviewed within 5-7 business days.</span>
                </div>
              </div>
            </div>
          </div>

          {/* Step 4: Resolution & Payment */}
          <div className="relative flex items-start gap-3 xs:gap-5 sm:gap-8 pl-2 xs:pl-4 sm:pl-8">
            {/* Step Number Circle */}
            <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-[#FE7642] rounded-full flex items-center justify-center z-10 mt-0.5 translate-x-[-55%] sm:translate-x-[-50%]">
              <span className="text-white text-xl font-bold">4</span>
            </div>

            {/* Step Content */}
            <div className="flex-1">
              <h3 className="text-lg xs:text-xl sm:text-2xl font-bold text-gray-900 mb-2 sm:mb-4">
                Resolution & Payment
              </h3>
              <p className="text-gray-700 mb-4 sm:mb-6 leading-relaxed text-sm xs:text-base lg:text-lg">
                Once your claim is approved, you&apos;ll receive the appropriate compensation or support based on your coverage. Payments are typically processed within 3-5 business days after approval.
              </p>

              {/* Information Box */}
              <div className="bg-white rounded-lg p-4 xs:p-5 sm:p-6">
                <div className="flex items-center gap-2 xs:gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700 text-sm xs:text-base lg:text-lg">Direct deposit to your registered bank account</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
