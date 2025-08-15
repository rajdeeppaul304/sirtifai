export default function UpcomingProjectsHero() {
  return (
    <div
      className="relative w-full overflow-hidden pt-12 pb-24 md:py-20"
      style={{ backgroundColor: '#FFEAD6' }}
    >
      {/* Background decorative circle */}
      <div className="absolute top-1/2 left-0 h-[300px] w-[300px] -translate-x-1/4 -translate-y-1/2 transform rounded-full bg-orange-200 opacity-80 sm:h-[500px] sm:w-[500px] lg:left-[50px]" />

      <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-center gap-12 px-4 lg:flex-row lg:gap-8 lg:px-8">
        {/* Text Content */}
        <div className="flex-1 text-center lg:text-left">
          <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">
            Upcoming
            <br />
            Projects
          </h1>
          <p className="mx-auto mt-4 max-w-md text-base leading-relaxed text-gray-700 sm:text-lg lg:mx-0">
            Inclusive Support, Mentorship, and Resources for Underrepresented Students
          </p>
          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row lg:justify-start">
            <button className="transform rounded-full bg-orange-500 px-8 py-3 font-medium text-white transition-transform hover:scale-105 hover:bg-orange-600">
              Apply Now
            </button>
            <button className="transform rounded-full border border-orange-300 px-8 py-3 font-medium text-orange-600 transition-transform hover:scale-105 hover:bg-orange-50">
              Contact
            </button>
          </div>
        </div>

        {/* Images & Quote Wrapper */}
        <div className="flex flex-1 flex-col items-center w-full">
          {/* Mobile / Tablet Layered Images */}
          <div className="relative w-full flex justify-center lg:hidden mt-2">
            <div className="relative w-[260px] sm:w-[320px] h-[230px] sm:h-[280px]">
              {/* Decorative gradient blob */}
              <div className="absolute -bottom-4 -left-6 w-40 h-40 sm:w-48 sm:h-48 bg-gradient-to-tr from-orange-300 via-orange-200 to-orange-100 rounded-full blur-2xl opacity-70" />
              <div className="absolute top-0 left-0 w-40 h-52 sm:w-48 sm:h-64 rounded-2xl overflow-hidden shadow-xl ring-4 ring-white z-20 bg-white rotate-[-2deg]">
                <img
                  src="/assets/about/project-first.png"
                  alt="Students collaborating"
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="absolute top-6 left-20 sm:left-24 w-40 h-52 sm:w-48 sm:h-64 rounded-2xl overflow-hidden shadow-lg ring-4 ring-white z-10 bg-white rotate-3">
                <img
                  src="/assets/about/project-second.png"
                  alt="Focused student at computer"
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          {/* Mobile Quote (moved up directly below images) */}
          <div className="lg:hidden w-full flex justify-center">
            <div className="mt-6 sm:mt-8 max-w-xs sm:max-w-sm rounded-2xl bg-white/90 backdrop-blur shadow-lg border border-orange-100 p-4">
              <p className="text-center text-sm leading-relaxed text-gray-600 sm:text-base">
                All the help you can get in one place. I feel supported by members and I know that I can get any kind of help.
              </p>
            </div>
          </div>

          {/* Desktop Original Layout (unchanged visually) */}
          <div className="hidden lg:flex relative w-full justify-center gap-6 mt-4">
            <div className="h-96 w-64 overflow-hidden rounded-2xl shadow-lg">
              <img
                src="/assets/about/project-first.png"
                alt="Students working together"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="h-96 w-64 overflow-hidden rounded-2xl shadow-lg mt-24">
              <img
                src="/assets/about/project-second.png"
                alt="Student at computer"
                className="h-full w-full object-cover"
              />
            </div>
            {/* Desktop Quote */}
            <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 max-w-md rounded-full bg-white p-5 shadow-lg">
              <p className="text-center text-sm leading-relaxed text-gray-600 sm:text-base">
                All the help you can get in one place. I feel supported by members and I know that I can get any kind of help.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}