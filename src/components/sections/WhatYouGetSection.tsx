import { FaBook, FaCalendarAlt, FaCertificate, FaChartLine, FaComments, FaLaptop } from "react-icons/fa";

const benefits = [
  {
    icon: <FaCalendarAlt className="text-[#FF5C35]"/>,
    iconColor: 'text-orange-500',
    title: 'Paid Weekly With Benefits Pay',
    description: 'Regular payment cycles with bonuses'
  },
  {
    icon: <FaLaptop className="text-[#FF5C35]"/>,
    iconColor: 'text-orange-500',
    title: 'Remote Flexibility on Every Task',
    description: 'Work from anywhere, anytime'
  },
  {
    icon: <FaCertificate className="text-[#FF5C35]"/>,
    iconColor: 'text-red-500',
    title: 'Legal Certificate When Hired',
    description: 'Recognized professional credentials'
  },
  {
    icon: <FaComments className="text-[#FF5C35]"/>,
    iconColor: 'text-purple-500',
    title: 'Support & Communication',
    description: 'Always available assistance'
  },
  {
    icon: <FaBook className="text-[#FF5C35]"/>,
    iconColor: 'text-orange-500',
    title: 'Detailed Training Access',
    description: 'Comprehensive learning materials'
  },
  {
    icon: <FaChartLine className="text-[#FF5C35]"/>,
    iconColor: 'text-pink-500',
    title: 'Professional Growth Paths',
    description: 'Career advancement opportunities'
  }
];

const WhatYouGetSection: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 text-center flex flex-col justify-start items-start gap-4">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-14">What You Get</h2>
        <div className="grid gap-x-12 gap-y-12 md:grid-cols-3 text-left mb-10">
          {benefits.map((b) => (
            <div key={b.title} className="flex flex-col space-y-2">
              <div className="flex items-start gap-3">
                {b.icon}
                <div>
                  <h3 className="font-semibold text-sm md:text-base text-gray-900 leading-snug mb-1">
                    {b.title}
                  </h3>
                  <p className="text-gray-600 text-xs md:text-sm leading-relaxed">
                    {b.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center">
          <div className="inline-flex items-center gap-2 rounded-md bg-slate-200/70 px-5 py-3 text-[13px] md:text-sm font-medium text-gray-800">
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-slate-600"
              aria-hidden="true"
            >
              <path d="M12 2l3 7h7l-5.5 4.5L18 22l-6-4-6 4 1.5-8.5L2 9h7z" />
            </svg>
            <span className="font-bold">
              <span>Bonus:</span> Certificate of Freelance Readiness (Sirtifai Verified)
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatYouGetSection;