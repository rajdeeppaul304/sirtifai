import { RotatingGlobe } from '../ui/RotatingGlobe';

export const GlobeSection = () => {
  return (
    <section className="w-full bg-[#FEF7F1] py-20 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between">
          {/* Left Side - Full Rotating Globe */}
          <div className="flex-1 flex justify-center">
            <RotatingGlobe />
          </div>
          
          {/* Right Side - Additional Content or Empty Space */}
          <div className="flex-1"></div>
        </div>
      </div>
    </section>
  );
};
