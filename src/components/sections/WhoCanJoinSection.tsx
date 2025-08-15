import studentImg from "../../assets/student.svg";
import jobseekersImg from "../../assets/jobseekers.svg";
import freelancersImg from "../../assets/freelancers.svg";
import womenImg from "../../assets/womens.svg";
import tierImg from "../../assets/tier.svg";

interface AudienceCard {
  id: string;
  title: string;
  description: string;
  image: any; // Changed from string to any to handle SVG imports
  topBorderColor: string;
}

const AUDIENCE_CARDS: AudienceCard[] = [
  {
    id: 'students',
    title: 'Students',
    description: 'Build industry-ready skills while completing your education',
    image: studentImg,
    topBorderColor: 'border-orange-500'
  },
  {
    id: 'jobseekers',
    title: 'Jobseekers',
    description: 'Gain practical experience and get placed in your dream role',
    image: jobseekersImg,
    topBorderColor: 'border-yellow-400'
  },
  {
    id: 'freelancers',
    title: 'Freelancers',
    description: 'Upgrade your skills and earn more with verified projects',
    image: freelancersImg,
    topBorderColor: 'border-yellow-300'
  },
  {
    id: 'women',
    title: 'Women',
    description: 'Flexible programs for career starters and returners',
    image: womenImg,
    topBorderColor: 'border-pink-400'
  },
  {
    id: 'tier-cities',
    title: 'Tier-2/3 Cities',
    description: 'Access global opportunities from anywhere in India',
    image: tierImg,
    topBorderColor: 'border-pink-300'
  }
];

export const WhoCanJoinSection = () => {
  return (
    <section className="w-full bg-white py-20 px-3 sm:px-0">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-6xl font-semibold font-['Open Sans'] capitalize text-gray-900 mb-4">
            Who Can Join Sirtifai
          </h2>
          <div className="w-[200px] sm:w-[850px] h-16 sm:h-7 text-center text-xs  justify-start text-gray-600 sm:text-lg font-normal font-['Inter'] mx-auto">
            Our programs are designed to support learners from diverse backgrounds and career stages.
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {AUDIENCE_CARDS.map((card) => (
            <div
              key={card.id}
              className={`bg-white rounded-xl shadow-lg border-t-4 ${card.topBorderColor} p-6 text-center hover:shadow-xl transition-shadow`}
            >
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <img
                  src={card.image.src}
                  alt={card.title}
                  className="w-6 h-6"
                />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {card.title}
              </h3>
              <p className="text-gray-600 text-sm">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
