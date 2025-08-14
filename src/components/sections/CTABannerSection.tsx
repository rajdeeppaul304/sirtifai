export const CTABannerSection = () => {
  return (
    <section className="w-full bg-orange-500 py-20">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Main Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Ready to Start Your Journey?
        </h2>
        
        {/* Descriptive Text */}
        <p className="text-xl text-orange-50 mb-12 max-w-3xl mx-auto leading-relaxed">
          Join thousands of learners who have transformed their careers with Sirtifai's structured programs.
        </p>
        
        {/* Call-to-Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          {/* Take Career Quiz Button */}
          <button className="px-8 py-4 bg-white text-orange-500 border-2 border-orange-500 rounded-lg font-semibold hover:bg-orange-50 transition-colors shadow-md hover:shadow-lg min-w-[200px]">
            Take Career Quiz
          </button>
          
          {/* Join SPP Now Button */}
          <button className="px-8 py-4 bg-transparent text-white border-2 border-orange-400 rounded-lg font-semibold hover:bg-orange-600 hover:border-orange-600 transition-colors shadow-md hover:shadow-lg min-w-[200px]">
            Join SPP Now
          </button>
        </div>
      </div>
    </section>
  );
};
