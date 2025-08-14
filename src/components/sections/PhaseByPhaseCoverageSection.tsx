import React from 'react';
import { GraduationCap, Monitor, TrendingUp, ArrowRight } from 'lucide-react';

export const PhaseByPhaseCoverageSection = () => {
  return (
    <section className="w-full bg-[#FEF7F1] py-16 px-6">
      <div className="max-w-7xl mx-auto text-center">
        {/* Header Section */}
        <h2 className="text-4xl font-bold text-gray-900 mb-4">
          Phase-By-Phase Coverage
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-12">
          Our insurance protection follows you through each phase of your SPP journey, adapting to your evolving needs.
        </p>

        {/* Table Component */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          {/* Table Header */}
          <div className="bg-[#1f2937] text-white p-6">
            <div className="grid grid-cols-3 gap-6">
              <div className="text-left font-bold">Program Phase</div>
              <div className="text-left font-bold">Coverage Type</div>
              <div className="text-left font-bold">Protection Details</div>
              {/* <div className="text-right font-bold">Claim Process</div> */}
            </div>
          </div>

          {/* Table Body */}
          <div className="divide-y divide-gray-200">
            {/* Row 1: Skill Phase */}
            <div className="p-6">
              <div className="grid grid-cols-3 gap-6 items-start">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-[#FE7642] rounded-lg flex items-center justify-center">
                    <GraduationCap className="w-4 h-4 text-white" />
                  </div>
                  <span className="font-medium text-gray-900">Skill Phase</span>
                </div>
                <div className="text-left">
                  <span className="font-medium text-gray-900">Access Protection</span>
                </div>
                <div className="text-left text-gray-600">
                  <ul className="space-y-1">
                    <li>Course completion guarantee</li>
                    <li>Platform access assurance</li>
                    <li>Learning materials availability</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Row 2: Practice Phase */}
            <div className="p-6">
              <div className="grid grid-cols-3 gap-6 items-start">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-[#FE7642] rounded-lg flex items-center justify-center">
                    <Monitor className="w-4 h-4 text-white" />
                  </div>
                  <span className="font-medium text-gray-900">Practice Phase</span>
                </div>
                <div className="text-left">
                  <span className="font-medium text-gray-900">Payment Guarantee</span>
                </div>
                <div className="text-left text-gray-600">
                  <ul className="space-y-1">
                    <li>Client payment assurance</li>
                    <li>Monthly minimum income protection</li>
                    <li>Project continuity coverage</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Row 3: Progress Phase */}
            <div className="p-6">
              <div className="grid grid-cols-3 gap-6 items-start">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center">
                    <TrendingUp className="w-4 h-4 text-white" />
                  </div>
                  <span className="font-medium text-gray-900">Progress Phase</span>
                </div>
                <div className="text-left">
                  <span className="font-medium text-gray-900">Career Continuity</span>
                </div>
                <div className="text-left text-gray-600">
                  <ul className="space-y-1">
                    <li>Placement guarantee (program-specific)</li>
                    <li>Career transition support</li>
                    <li>Re-entry assistance if needed</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Note */}
        <div className="mt-8">
          <p className="text-gray-500 text-sm max-w-4xl mx-auto">
            Note: Coverage limits and details vary by program and plan level (Basic/Pro/Elite). Please refer to your specific plan documentation for exact coverage details.
          </p>
        </div>
      </div>
    </section>
  );
};
