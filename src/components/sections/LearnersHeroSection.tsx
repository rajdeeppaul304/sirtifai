"use client"
import { Calendar, HelpCircle } from 'lucide-react';

export const LearnersHeroSection = () => {
  return (
    <section className="w-full py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Content */}
          <div>
            {/* Headline with Star Icon */}
            <div className="mb-8">
              <h1 className="text-6xl font-extrabold text-gray-900 mb-6 tracking-tight">
                Find Your Path To Success
                <span className="inline-block ml-3">
                  <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center">
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                  </div>
                </span>
              </h1>
              
              <p className="text-lg text-gray-700 leading-relaxed font-normal">
                Discover personalised learning paths, industry-relevant tools, and support tailored to your career goals.
              </p>
            </div>

            {/* Call-to-Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              {/* Book A Demo Button */}
              <button className="flex items-center justify-center px-8 py-4 bg-gray-800 text-white rounded-full hover:bg-gray-900 transition-colors font-semibold text-base shadow-md">
                <div className="w-6 h-6 bg-white rounded mr-3 flex items-center justify-center">
                  <Calendar size={16} className="text-gray-800" />
                </div>
                Book A Demo
              </button>

              {/* Take Career Quiz Button */}
              <button className="flex items-center justify-center px-8 py-4 bg-orange-500 text-white rounded-full hover:bg-orange-600 transition-colors font-semibold text-base shadow-md">
                <div className="w-6 h-6 bg-white rounded mr-3 flex items-center justify-center">
                  <HelpCircle size={16} className="text-orange-500" />
                </div>
                Take Career Quiz
              </button>
            </div>
          </div>

          {/* Right Side - Visual Cluster */}
          <div className="relative lg:h-[600px] flex items-center justify-center">
            <div className="relative w-full h-full">
              {/* Profile Pictures and Icons */}
              <div className="relative w-full h-full">
                                       {/* Top Center Profile */}
                       <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-20 h-20">
                         <img
                           src="/assets/learners/l.png"
                           alt="Learner Profile"
                           className="w-full h-full rounded-full object-cover border-4 border-white shadow-lg"
                         />
                       </div>

                       {/* Top Right Profile */}
                       <div className="absolute top-16 right-16 w-20 h-20">
                         <img
                           src="/assets/learners/l.png"
                           alt="Learner Profile"
                           className="w-full h-full rounded-full object-cover border-4 border-white shadow-lg"
                         />
                       </div>

                       {/* Top Left Profile */}
                       <div className="absolute top-16 left-16 w-20 h-20">
                         <img
                           src="/assets/learners/l.png"
                           alt="Learner Profile"
                           className="w-full h-full rounded-full object-cover border-4 border-white shadow-lg"
                         />
                       </div>

                       {/* Bottom Right Profile */}
                       <div className="absolute bottom-16 right-16 w-20 h-20">
                         <img
                           src="/assets/learners/l.png"
                           alt="Learner Profile"
                           className="w-full h-full rounded-full object-cover border-4 border-white shadow-lg"
                         />
                       </div>

                       {/* Bottom Left Profile */}
                       <div className="absolute bottom-16 left-16 w-20 h-20">
                         <img
                           src="/assets/learners/l.png"
                           alt="Learner Profile"
                           className="w-full h-full rounded-full object-cover border-4 border-white shadow-lg"
                         />
                       </div>

                {/* Central GIF */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32">
                  <img
                    src="/assets/learners/center.gif"
                    alt="Central Learners Animation"
                    className="w-full h-full object-contain"
                    style={{ 
                      "borderRadius": "50%"
                    }}
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      const fallback = target.nextElementSibling as HTMLElement;
                      if (fallback) fallback.style.display = 'flex';
                    }}
                  />
                  {/* Fallback if GIF fails to load */}
                  <div className="hidden w-full h-full rounded-full bg-gradient-to-br from-pink-300 via-blue-300 to-green-300 opacity-80 flex items-center justify-center">
                    <div className="w-16 h-16 bg-white rounded-full opacity-60"></div>
                  </div>
                </div>

                {/* Connection Lines */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none">
                  <defs>
                    <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#F97316" stopOpacity="0.3" />
                      <stop offset="100%" stopColor="#F97316" stopOpacity="0.1" />
                    </linearGradient>
                  </defs>
                  
                                           {/* Lines from Central GIF to Profile Pictures in Perfect Semi-Circle */}
                         {/* Top Center */}
                         <path
                           d="M 50% 50% Q 50% 25% 50% 10%"
                           stroke="#F97316"
                           strokeWidth="2"
                           strokeDasharray="5,5"
                           fill="none"
                           opacity="0.6"
                         />
                         {/* Top Right */}
                         <path
                           d="M 50% 50% Q 65% 30% 80% 20%"
                           stroke="#F97316"
                           strokeWidth="2"
                           strokeDasharray="5,5"
                           fill="none"
                           opacity="0.6"
                         />
                         {/* Top Left */}
                         <path
                           d="M 50% 50% Q 35% 30% 20% 20%"
                           stroke="#F97316"
                           strokeWidth="2"
                           strokeDasharray="5,5"
                           fill="none"
                           opacity="0.6"
                         />
                         {/* Bottom Right */}
                         <path
                           d="M 50% 50% Q 65% 70% 80% 80%"
                           stroke="#F97316"
                           strokeWidth="2"
                           strokeDasharray="5,5"
                           fill="none"
                           opacity="0.6"
                         />
                         {/* Bottom Left */}
                         <path
                           d="M 50% 50% Q 35% 70% 20% 80%"
                           stroke="#F97316"
                           strokeWidth="2"
                           strokeDasharray="5,5"
                           fill="none"
                           opacity="0.6"
                         />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
