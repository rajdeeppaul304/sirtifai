import { STEPS } from "../../constants/data";

export const AboutSection = () => {
  return (
  <section className="w-full bg-[#fef7f1] py-12 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col gap-10">
        {/* Header */}
        <div className="w-full flex flex-col justify-start items-start gap-3">
          <p className="text-orange-500 text-xs sm:text-sm font-semibold font-open-sans uppercase tracking-wider">
            Our
          </p>
          <h2 className="text-4xl sm:text-6xl lg:text-7xl text-gray-900 leading-tight font-open-sans tracking-tight font-bold">
            Mission • Vision • Future Goals
          </h2>
        </div>

        {/* Content */}
  <div className="w-full flex flex-col lg:flex-row justify-between items-start gap-8 sm:gap-12 lg:gap-20">
          {/* Left - Images & Button (hidden on small screens to avoid empty space) */}
          <div className="hidden md:flex md:w-1/2 justify-center items-center gap-8">
            {/* Male Image */}
            <div className="relative hidden md:block">
              <img src="/assets/male.png" alt="Male" className="relative" />
              <img
                className="absolute bottom-[-30%] left-4"
                src="/assets/male-name.png"
                alt="Male Name"
              />
            </div>

            <div className="flex flex-col gap-6">
              {/* Button */}
              <button className="hidden md:flex px-6 sm:px-8 py-3 sm:py-4 bg-[#FC4C03] text-white rounded-full text-sm sm:text-lg font-semibold items-center gap-3 hover:bg-orange-600 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105">
                <img src="/assets/home/transform-icon.svg" alt="Share Icon" />
                Transform Your Career With Sirtifai
              </button>

              {/* Female Image */}
              <div className="relative hidden md:block">
                <img
                  src="/assets/female.png"
                  alt="Female"
                  className="relative"
                />
                <img
                  className="absolute bottom-[-50%] right-[-40%]"
                  src="/assets/female-name.png"
                  alt="Female Name"
                />
              </div>
            </div>
          </div>

          {/* Right - Steps */}
          <div className="w-full lg:w-1/2 flex flex-col gap-8 sm:gap-10">
            {STEPS.map((step) => {
              // Determine image path based on step id (expects step1.png, step2.png, step3.png)
              const imgSrc = `/assets/about/step${step.id}.png`;
              return (
                <div key={step.id} className="flex items-start gap-4 sm:gap-5">
                  <div className="flex-shrink-0 w-14 h-14 sm:w-16 sm:h-16">
                    <img
                      src={imgSrc}
                      alt={`Step ${step.id}`}
                      className="w-full h-full object-contain"
                      onError={(e) => {
                        (e.currentTarget as HTMLImageElement).style.display = 'none';
                      }}
                    />
                  </div>
                  <div>
                    <p className="text-orange-500 text-xs sm:text-sm font-semibold uppercase tracking-wider mb-1 sm:mb-2">
                      Step {step.id}
                    </p>
                    <h4 className="text-lg sm:text-2xl lg:text-3xl text-gray-900 mb-1 sm:mb-2">
                      {step.title}
                    </h4>
                    <p className="text-gray-600 text-sm sm:text-base leading-relaxed whitespace-pre-line">
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};