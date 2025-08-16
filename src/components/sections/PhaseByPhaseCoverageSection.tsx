import React from 'react';
import { GraduationCap, Monitor, TrendingUp } from 'lucide-react';

export const PhaseByPhaseCoverageSection = () => {
  return (
  <section className="w-full bg-[#FEF7F1] py-10 sm:py-16 px-4 sm:px-6">
      <div className="w-full max-w-[1400px] xl:max-w-[1550px] 2xl:max-w-[1700px] mx-auto text-center">
        {/* Header Section */}
    <h2 className="text-4xl font-bold text-gray-900 mb-4">
          Phase-By-Phase Coverage
        </h2>
  <p className="text-gray-600 text-sm sm:text-base lg:text-xl max-w-3xl xl:max-w-4xl mx-auto mb-12">
          Our insurance protection follows you through each phase of your SPP journey, adapting to your evolving needs.
        </p>

        {/* Table Component */}
        {/*highlight-next-line*/}
  <div className="bg-white rounded-lg shadow-2xl shadow-black/10 overflow-hidden">
          {/* Table Header */}
          {/*highlight-next-line*/}
          <div className="bg-[#1f2937] text-white px-3 py-3 md:px-6 md:py-4">
            {/* Using custom grid columns to better distribute space */}
            {/*highlight-next-line*/}
            <div className="grid grid-cols-[1.5fr_1.5fr_2fr] gap-3 md:gap-6">
              <div className="text-left font-bold text-sm md:text-lg">Program Phase</div>
              <div className="text-left font-bold text-sm md:text-lg">Coverage Type</div>
              <div className="text-left font-bold text-sm md:text-lg">Protection Details</div>
            </div>
          </div>

          {/* Table Body */}
          <div className="divide-y divide-gray-200">
            {/* Row 1: Skill Phase */}
            {/*highlight-next-line*/}
            <div className="p-3 md:p-6">
              {/*highlight-next-line*/}
              <div className="grid grid-cols-[1.5fr_1.5fr_2fr] gap-3 md:gap-6 items-start">
                <div className="flex items-center gap-2 md:gap-3">
                  <div className="w-7 h-7 md:w-8 md:h-8 bg-[#FE7642] rounded-md md:rounded-lg flex items-center justify-center flex-shrink-0">
                    <GraduationCap className="w-4 h-4 text-white" />
                  </div>
                  <span className="font-medium text-gray-900 text-sm md:text-lg">Skill Phase</span>
                </div>
                <div className="text-left flex flex-col gap-0.5 md:gap-1 pt-0.5">
                  <span className="font-medium text-gray-900 text-sm md:text-lg lg:text-xl leading-snug">Access</span>
                  <span className="font-medium text-gray-900 text-sm md:text-lg lg:text-xl leading-snug">Protection</span>
                </div>
                <div className="text-left text-gray-600 text-xs md:text-base lg:text-lg">
                  <ul className="space-y-1">
                    <li>Course completion guarantee</li>
                    <li>Platform access assurance</li>
                    <li>Learning materials availability</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Row 2: Practice Phase */}
            {/*highlight-next-line*/}
            <div className="p-3 md:p-6">
              {/*highlight-next-line*/}
              <div className="grid grid-cols-[1.5fr_1.5fr_2fr] gap-3 md:gap-6 items-start">
                <div className="flex items-center gap-2 md:gap-3">
                  <div className="w-7 h-7 md:w-8 md:h-8 bg-[#FE7642] rounded-md md:rounded-lg flex items-center justify-center flex-shrink-0">
                    <Monitor className="w-4 h-4 text-white" />
                  </div>
                  <span className="font-medium text-gray-900 text-sm md:text-lg">Practice Phase</span>
                </div>
                <div className="text-left flex flex-col gap-0.5 md:gap-1 pt-0.5">
                  <span className="font-medium text-gray-900 text-sm md:text-lg lg:text-xl leading-snug">Payment</span>
                  <span className="font-medium text-gray-900 text-sm md:text-lg lg:text-xl leading-snug">Guarantee</span>
                </div>
                <div className="text-left text-gray-600 text-xs md:text-base lg:text-lg">
                  <ul className="space-y-1">
                    <li>Client payment assurance</li>
                    <li>Monthly minimum income protection</li>
                    <li>Project continuity coverage</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Row 3: Progress Phase */}
            {/*highlight-next-line*/}
            <div className="p-3 md:p-6">
              {/*highlight-next-line*/}
              <div className="grid grid-cols-[1.5fr_1.5fr_2fr] gap-3 md:gap-6 items-start">
                <div className="flex items-center gap-2 md:gap-3">
                  <div className="w-7 h-7 md:w-8 md:h-8 bg-green-500 rounded-md md:rounded-lg flex items-center justify-center flex-shrink-0">
                    <TrendingUp className="w-4 h-4 text-white" />
                  </div>
                  <span className="font-medium text-gray-900 text-sm md:text-lg">Progress Phase</span>
                </div>
                <div className="text-left flex flex-col gap-0.5 md:gap-1 pt-0.5">
                  <span className="font-medium text-gray-900 text-sm md:text-lg lg:text-xl leading-snug">Career</span>
                  <span className="font-medium text-gray-900 text-sm md:text-lg lg:text-xl leading-snug">Continuity</span>
                </div>
                <div className="text-left text-gray-600 text-xs md:text-base lg:text-lg">
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