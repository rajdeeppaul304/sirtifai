import React from "react";
import { Shield, Users, HeartPulse, Globe, FileCheck, Truck } from "lucide-react";

export const CoverageAtAGlanceSection = () => {
  return (
  <section className="w-full bg-white py-10 sm:py-16 px-4 sm:px-6">
      <div className="w-full max-w-[1400px] xl:max-w-[1550px] 2xl:max-w-[1700px] mx-auto text-center">
        {/* Title */}
    <h2 className="text-4xl font-bold text-gray-900 mb-4">
          Coverage At A Glance
        </h2>
  <p className="text-gray-600 text-base sm:text-lg lg:text-xl max-w-3xl xl:max-w-4xl mx-auto mb-12">
          Our insurance plans are tailored to your specific program needs, ensuring comprehensive protection throughout your journey.
        </p>

        {/* Two Cards */}
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 xl:gap-14">
          {/* Card 1 - Domestic Freelancer Protection */}
          <div className="relative bg-white rounded-2xl shadow-xl shadow-black/10 p-8 text-left">
            {/* Top Border Accent */}
            <div className="absolute top-0 left-0 right-0 h-2 rounded-t-2xl bg-gradient-to-r from-yellow-400 to-orange-400" />

            {/* Badge */}
            <div className="absolute top-6 right-6">
              <span className="px-3 py-1 text-sm bg-gray-100 text-gray-800 rounded-md">
                Up to ₹40,000/month
              </span>
            </div>

            {/* Icon */}
            <div className="w-12 h-12 rounded-lg bg-orange-100 flex items-center justify-center mb-6">
              <Shield className="w-6 h-6 text-orange-500" />
            </div>

            {/* Heading */}
            <h3 className="text-xl font-bold text-gray-900 mb-6">
              Domestic Freelancer Protection
            </h3>

            {/* Features */}
            <ul className="space-y-4 mb-8">
              <li className="flex items-start gap-3">
                <Shield className="w-5 h-5 text-orange-500 mt-1" />
                <div>
                  <p className="font-semibold text-gray-900">Payment Guarantee</p>
                  <p className="text-gray-600 text-sm md:text-base lg:text-lg">
                    Ensures you receive payment for all completed work
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Users className="w-5 h-5 text-orange-500 mt-1" />
                <div>
                  <p className="font-semibold text-gray-900">EPF & ESI Coverage</p>
                  <p className="text-gray-600 text-sm md:text-base lg:text-lg">
                    Social security benefits through formal payroll
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <HeartPulse className="w-5 h-5 text-orange-500 mt-1" />
                <div>
                  <p className="font-semibold text-gray-900">
                    Health & Accident Coverage
                  </p>
                  <p className="text-gray-600 text-sm md:text-base lg:text-lg">
                    Basic medical and accident protection
                  </p>
                </div>
              </li>
            </ul>

            {/* CTA */}
            <button className="w-full py-3 bg-[#FE7642] text-white font-medium rounded-full hover:bg-orange-600 transition">
              View Detailed Coverage
            </button>
          </div>

          {/* Card 2 - International Track Protection */}
          <div className="relative bg-white rounded-2xl shadow-xl shadow-black/10 p-8 text-left">
            {/* Top Border Accent */}
            <div className="absolute top-0 left-0 right-0 h-2 rounded-t-2xl bg-gradient-to-r from-orange-400 to-red-400" />

            {/* Badge */}
            <div className="absolute top-6 right-6">
              <span className="px-3 py-1 text-sm bg-gray-100 text-gray-800 rounded-md">
                Up to ₹80,000/month
              </span>
            </div>

            {/* Icon */}
            <div className="w-12 h-12 rounded-lg bg-orange-100 flex items-center justify-center mb-6">
              <Globe className="w-6 h-6 text-orange-500" />
            </div>

            {/* Heading */}
            <h3 className="text-xl font-bold text-gray-900 mb-6">
              International Track Protection
            </h3>

            {/* Features */}
            <ul className="space-y-4 mb-8">
              <li className="flex items-start gap-3">
                <Shield className="w-5 h-5 text-orange-500 mt-1" />
                <div>
                  <p className="font-semibold text-gray-900">
                    Global Placement Assurance
                  </p>
                  <p className="text-gray-600 text-sm md:text-base lg:text-lg">
                    Compensation if placement doesn&apos;t materialize
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <FileCheck className="w-5 h-5 text-orange-500 mt-1" />
                <div>
                  <p className="font-semibold text-gray-900">Visa Process Coverage</p>
                  <p className="text-gray-600 text-sm md:text-base lg:text-lg">
                    Financial protection during visa application
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Truck className="w-5 h-5 text-orange-500 mt-1" />
                <div>
                  <p className="font-semibold text-gray-900">Relocation Support</p>
                  <p className="text-gray-600 text-sm md:text-base lg:text-lg">
                    Coverage for initial relocation expenses
                  </p>
                </div>
              </li>
            </ul>

            {/* CTA */}
            <button className="w-full py-3 bg-[#FE7642] text-white font-medium rounded-full hover:bg-orange-600 transition">
              View Detailed Coverage
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
