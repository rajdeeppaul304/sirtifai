

export default function UpcomingProjectsHero() {
  return (
    <div className="relative w-full bg-gray-100 min-h-96 overflow-hidden">
      {/* Background circle - responsive */}
      <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-64 h-64 md:w-96 md:h-96 lg:w-[500px] lg:h-[500px] bg-orange-200 rounded-full opacity-80 -left-8 md:left-16 lg:left-[100px]"></div>
      
      <div className="relative z-10 flex flex-col lg:flex-row lg:items-center lg:justify-between px-4 md:px-6 lg:px-8 py-8 md:py-10 lg:py-12 max-w-6xl mx-auto gap-8 lg:gap-0">
        {/* Left content */}
        <div className="flex-1 max-w-none lg:max-w-md">
          <h1 className="text-3xl md:text-4xl lg:text-4xl font-bold text-gray-900 mb-4 leading-tight">
            Upcoming<br />Projects
          </h1>
          <p className="text-gray-700 mb-6 md:mb-8 leading-relaxed text-sm md:text-base">
            Inclusive Support, Mentorship, and Resources for
            Underrepresented Students
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-full font-medium transition-colors text-center">
              Apply Now
            </button>
            <button className="border border-orange-300 text-orange-600 hover:bg-orange-50 px-6 py-3 rounded-full font-medium transition-colors text-center">
              Contact
            </button>
          </div>
        </div>

        {/* Right images section */}
        <div className="flex-1 lg:ml-8 max-w-none lg:max-w-lg">
          {/* Images container */}
          <div className="flex flex-col sm:flex-row gap-4 mb-6">
            {/* First image - students working together */}
            <div className="flex-1 h-32 sm:h-32 md:h-36 bg-gray-300 rounded-lg overflow-hidden shadow-lg">
              <img 
                src="/assets/about1.jpg"
                alt="Students working together"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Second image - student at computer */}
            <div className="flex-1 h-32 sm:h-32 md:h-36 bg-gray-300 rounded-lg overflow-hidden shadow-lg">
              <img 
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='192' height='128' viewBox='0 0 192 128'%3E%3Crect width='192' height='128' fill='%23e5e7eb'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' fill='%236b7280' font-family='Arial, sans-serif' font-size='12'%3EStudent at Computer%3C/text%3E%3C/svg%3E"
                alt="Student at computer"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Quote text below images */}
          <div className="bg-white p-4 rounded-lg shadow-lg">
            <p className="text-gray-600 text-sm leading-relaxed">
              "All the help you can get in one place. I feel supported by members and I know that I can get any kind of help."
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}