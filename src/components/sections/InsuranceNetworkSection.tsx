import React from 'react';

export const InsuranceNetworkSection = () => {
  return (
  <section className="w-full bg-white py-8 sm:py-12 px-4 sm:px-6">
      <div className="w-full max-w-[1400px] xl:max-w-[1550px] 2xl:max-w-[1700px] mx-auto">
        {/* Top Section: Our Insurance Network */}
        <div className="text-center mb-10 sm:mb-12">
          <h2 className="text-[2.2rem] xs:text-3xl sm:text-4xl font-bold text-gray-900 mb-4 leading-tight">
            Our Insurance Network
          </h2>
          <p className="text-gray-600 text-base xs:text-lg lg:text-xl mb-8 max-w-3xl xl:max-w-4xl mx-auto">
            We&apos;ve partnered with leading insurance providers to ensure comprehensive and reliable coverage.
          </p>
          {/* Insurance Providers */}
          <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-4 text-gray-600 font-medium text-sm xs:text-xl sm:text-2xl">
            <span>Pazcare</span>
            <span>Star Health</span>
            <span>HDFC ERGO</span>
            <span>ICICI Lombard</span>
          </div>
        </div>

        {/* Table Card */}
  <div className="bg-[#FFE5D6] rounded-xl sm:rounded-2xl overflow-hidden max-w-full mx-auto shadow-2xl shadow-black/10">
          {/* Table Title */}
          <div className="text-center py-5 sm:py-6">
            <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900">
              Available Insurance Add-ons
            </h3>
          </div>

          {/* Table Header */}
          <div className="hidden sm:grid grid-cols-12 border-t border-b border-white/40 px-4 sm:px-6 py-3">
            <span className="text-[#FE7642] font-semibold col-span-2">Add-on</span>
            <span className="text-[#FE7642] font-semibold col-span-6">Description</span>
            <span className="text-[#FE7642] font-semibold col-span-2">Availability</span>
            <span className="text-[#FE7642] font-semibold col-span-2">Cost</span>
          </div>
          {/* Mobile Table Header */}
          <div className="grid sm:hidden grid-cols-4 border-t border-b border-white/40 px-2 py-2 text-xs font-semibold text-[#FE7642]">
            <span className="col-span-1">Add-on</span>
            <span className="col-span-1">Description</span>
            <span className="col-span-1">Availability</span>
            <span className="col-span-1">Cost</span>
          </div>

          {/* Table Rows */}
          {/* Desktop Rows */}
          <div className="hidden sm:block divide-y divide-white/40">
            <div className="grid grid-cols-12 px-6 py-4 text-sm lg:text-base">
              <span className="font-semibold text-gray-900 col-span-2">Legal Support</span>
              <span className="text-gray-800 col-span-6">Contract review, dispute resolution, legal consultation</span>
              <span className="text-gray-800 col-span-2">All Programs</span>
              <span className="font-semibold text-gray-900 col-span-2">₹4,999/year</span>
            </div>
            <div className="grid grid-cols-12 px-6 py-4 text-sm lg:text-base">
              <span className="font-semibold text-gray-900 col-span-2">CA/Tax Services</span>
              <span className="text-gray-800 col-span-6">Tax filing, GST registration, financial advice</span>
              <span className="text-gray-800 col-span-2">Domestic & International</span>
              <span className="font-semibold text-gray-900 col-span-2">₹7,499/year</span>
            </div>
            <div className="grid grid-cols-12 px-6 py-4 text-sm lg:text-base">
              <span className="font-semibold text-gray-900 col-span-2">Resume Verification</span>
              <span className="text-gray-800 col-span-6">Background check, credential verification, reference validation</span>
              <span className="text-gray-800 col-span-2">International Only</span>
              <span className="font-semibold text-gray-900 col-span-2">₹5,999/year</span>
            </div>
          </div>
          {/* Mobile Rows */}
          <div className="sm:hidden divide-y divide-white/40 text-xs">
            <div className="grid grid-cols-4 px-2 py-3">
              <span className="font-semibold text-gray-900 col-span-1">Legal Support</span>
              <span className="text-gray-800 col-span-1">Contract review, dispute resolution, legal consultation</span>
              <span className="text-gray-800 col-span-1">All Programs</span>
              <span className="font-semibold text-gray-900 col-span-1">₹4,999/year</span>
            </div>
            <div className="grid grid-cols-4 px-2 py-3">
              <span className="font-semibold text-gray-900 col-span-1">CA/Tax Services</span>
              <span className="text-gray-800 col-span-1">Tax filing, GST registration, financial advice</span>
              <span className="text-gray-800 col-span-1">Domestic & International</span>
              <span className="font-semibold text-gray-900 col-span-1">₹7,499/year</span>
            </div>
            <div className="grid grid-cols-4 px-2 py-3">
              <span className="font-semibold text-gray-900 col-span-1">Resume Verification</span>
              <span className="text-gray-800 col-span-1">Background check, credential verification, reference validation</span>
              <span className="text-gray-800 col-span-1">International Only</span>
              <span className="font-semibold text-gray-900 col-span-1">₹5,999/year</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
