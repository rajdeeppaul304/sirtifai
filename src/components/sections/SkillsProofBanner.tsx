import { ChevronRight } from 'lucide-react';

export const SkillsProofBanner = () => {
  return (
    <section className="w-full py-16" style={{ backgroundColor: '#FE7743' }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          {/* Left Side - Text Content */}
          <div className="text-center lg:text-left">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
              Your Skills Deserve Proof Employers Can Trust
            </h2>
            <p className="text-xl text-white opacity-90 leading-relaxed max-w-2xl">
              Get certified with Sirtifai and turn your learning into job-ready credentials accepted worldwide.
            </p>
          </div>

          {/* Right Side - Call-to-Action Button */}
          <div className="flex-shrink-0">
            <button className="bg-white text-[#FE7743] px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-50 transition-colors shadow-lg hover:shadow-xl flex items-center gap-2">
              Join a certified program
              <ChevronRight size={20} className="text-[#FE7743]" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
