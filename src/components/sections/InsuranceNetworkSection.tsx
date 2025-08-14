import React from 'react';

export const InsuranceNetworkSection = () => {
  return (
    <section className="w-full bg-white py-16 px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* Top Section: Our Insurance Network */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our Insurance Network
          </h2>
          <p className="text-gray-600 text-lg mb-8">
            We've partnered with leading insurance providers to ensure comprehensive and reliable coverage.
          </p>
          
          {/* Insurance Providers */}
          <div className="flex justify-center items-center gap-12 flex-wrap text-gray-600 font-medium text-lg">
            <span>Pazcare</span>
            <span>Star Health</span>
            <span>HDFC ERGO</span>
            <span>ICICI Lombard</span>
          </div>
        </div>

        {/* Table Card */}
        <div className="bg-[#FFE5D6] rounded-2xl overflow-hidden">
          {/* Table Title */}
          <div className="text-center py-6">
            <h3 className="text-xl font-bold text-gray-900">
              Available Insurance Add-ons
            </h3>
          </div>

          {/* Table Header */}
          <div className="grid grid-cols-12 border-t border-b border-white/40 px-6 py-3">
            <span className="text-[#FE7642] font-semibold col-span-2">Add-on</span>
            <span className="text-[#FE7642] font-semibold col-span-6">Description</span>
            <span className="text-[#FE7642] font-semibold col-span-2">Availability</span>
            <span className="text-[#FE7642] font-semibold col-span-2">Cost</span>
          </div>

          {/* Table Rows */}
          <div className="divide-y divide-white/40">
            <div className="grid grid-cols-12 px-6 py-4">
              <span className="font-semibold text-gray-900 col-span-2">Legal Support</span>
              <span className="text-gray-800 col-span-6">Contract review, dispute resolution, legal consultation</span>
              <span className="text-gray-800 col-span-2">All Programs</span>
              <span className="font-semibold text-gray-900 col-span-2">₹4,999/year</span>
            </div>
            <div className="grid grid-cols-12 px-6 py-4">
              <span className="font-semibold text-gray-900 col-span-2">CA/Tax Services</span>
              <span className="text-gray-800 col-span-6">Tax filing, GST registration, financial advice</span>
              <span className="text-gray-800 col-span-2">Domestic & International</span>
              <span className="font-semibold text-gray-900 col-span-2">₹7,499/year</span>
            </div>
            <div className="grid grid-cols-12 px-6 py-4">
              <span className="font-semibold text-gray-900 col-span-2">Resume Verification</span>
              <span className="text-gray-800 col-span-6">Background check, credential verification, reference validation</span>
              <span className="text-gray-800 col-span-2">International Only</span>
              <span className="font-semibold text-gray-900 col-span-2">₹5,999/year</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
