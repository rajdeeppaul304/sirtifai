import React from 'react';
import { Clock, CheckCircle } from 'lucide-react';

export const HowToFileClaimSection = () => {
  return (
    <section className="w-full bg-[#FEF7F1] py-16 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Main Title and Introduction */}
        <div className="text-center mb-16">
          <h2 className="text-6xl font-bold text-gray-900 mb-4">
            How To File A Claim
          </h2>
          <p className="text-gray-600 text-lg">
            We've made the claim process simple and straightforward to ensure you get the support you need quickly.
          </p>
        </div>

        {/* Four-Step Process Flow */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-10 top-0 bottom-0 w-0.5 bg-gray-300"></div>

          {/* Step 1: Submit Claim Request */}
          <div className="relative flex items-start gap-8 mb-12">
            {/* Step Number Circle */}
            <div className="flex-shrink-0 w-20 h-12 bg-[#FE7642] rounded-full flex items-center justify-center z-10">
              <span className="text-white text-2xl font-bold">1</span>
            </div>

            {/* Step Content */}
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Submit Claim Request
              </h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Log in to your Sirtifai account and navigate to the Insurance section. Select 'File a Claim' and choose the appropriate claim type.
              </p>

              {/* Required Information Box */}
              <div className="bg-[white] rounded-lg p-6">
                <h4 className="font-bold text-gray-900 mb-3">Required Information:</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>  Your SPP ID and program details</li>
                  <li>  Date and nature of the issue</li>
                  <li>  Brief description of your claim</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Step 2: Documentation Submission */}
          <div className="relative flex items-start gap-8 mb-12">
            {/* Step Number Circle */}
            <div className="flex-shrink-0 w-20 h-12 bg-[#FE7642] rounded-full flex items-center justify-center z-10">
              <span className="text-white text-2xl font-bold">2</span>
            </div>

            {/* Step Content */}
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Documentation Submission
              </h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Upload all required documentation to support your claim. Our system will guide you through the specific documents needed based on your claim type.
              </p>

              {/* Document Checklist Box */}
              <div className="bg-[white] rounded-lg p-6">
                <h4 className="font-bold text-gray-900 mb-3">Document Checklist:</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>  Proof of completed work (for payment claims)</li>
                  <li>  Communication records with clients/employers</li>
                  <li>  Any relevant contracts or agreements</li>
                  <li>  Additional documentation specific to your claim</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Step 3: Claim Review */}
          <div className="relative flex items-start gap-8 mb-12">
            {/* Step Number Circle */}
            <div className="flex-shrink-0 w-20 h-12 bg-[#FE7642] rounded-full flex items-center justify-center z-10">
              <span className="text-white text-2xl font-bold">3</span>
            </div>

            {/* Step Content */}
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Claim Review
              </h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Our insurance team will review your claim and documentation. You'll receive regular updates on the status of your claim through your preferred communication channel.
              </p>

              {/* Information Box */}
              <div className="bg-[white] rounded-lg p-6">
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-[#FE7642]" />
                  <span className="text-gray-700">Most claims are reviewed within 5-7 business days.</span>
                </div>
              </div>
            </div>
          </div>

          {/* Step 4: Resolution & Payment */}
          <div className="relative flex items-start gap-8">
            {/* Step Number Circle */}
            <div className="flex-shrink-0 w-20 h-12 bg-[#FE7642] rounded-full flex items-center justify-center z-10">
              <span className="text-white text-2xl font-bold">4</span>
            </div>

            {/* Step Content */}
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Resolution & Payment
              </h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Once your claim is approved, you'll receive the appropriate compensation or support based on your coverage. Payments are typically processed within 3-5 business days after approval.
              </p>

              {/* Information Box */}
              <div className="bg-[white] rounded-lg p-6">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700">Direct deposit to your registered bank account</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
