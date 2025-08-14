import React from 'react';
import { ArrowRight } from 'lucide-react';

export const InsuranceCTASection = () => {
  return (
    <section className="w-full py-16 ">
      <div className="mx-auto">
        {/* Orange Call-to-Action Bar */}
        <div className="bg-[#FE7642] rounded-2xl p-12 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Ready to Start Your Journey?
          </h2>
          
          <p className="text-white text-lg mb-8 max-w-2xl mx-auto">
            Join thousands of learners who have transformed their careers with Sirtifai's structured programs.
          </p>
          
          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            {/* <button className="px-8 py-4 bg-white text-[#FE7642] rounded-full text-lg font-semibold hover:bg-gray-50 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 flex items-center gap-3">
              Take Career Quiz
              <ArrowRight className="w-5 h-5" />
            </button> */}
            
            <button className="px-8 py-4 bg-white text-[#FE7642] rounded-full text-lg font-semibold hover:bg-gray-50 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 flex items-center gap-3 cursor-pointer">
              Join SPP Now
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
