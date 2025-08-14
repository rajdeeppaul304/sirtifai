interface AudienceCard {
  id: string;
  title: string;
  description: string;
  topBorderColor: string;
  iconBgColor: string;
  iconColor: string;
}

const AUDIENCE_CARDS: AudienceCard[] = [
  {
    id: 'students',
    title: 'Students',
    description: 'Build industry-ready skills while completing your education',
    topBorderColor: 'border-orange-500',
    iconBgColor: 'bg-blue-100',
    iconColor: 'bg-blue-500'
  },
  {
    id: 'jobseekers',
    title: 'Jobseekers',
    description: 'Gain practical experience and get placed in your dream role',
    topBorderColor: 'border-yellow-400',
    iconBgColor: 'bg-orange-100',
    iconColor: 'bg-orange-500'
  },
  {
    id: 'freelancers',
    title: 'Freelancers',
    description: 'Upgrade your skills and earn more with verified projects',
    topBorderColor: 'border-yellow-300',
    iconBgColor: 'bg-orange-100',
    iconColor: 'bg-orange-400'
  },
  {
    id: 'women',
    title: 'Women',
    description: 'Flexible programs for career starters and returners',
    topBorderColor: 'border-pink-400',
    iconBgColor: 'bg-purple-100',
    iconColor: 'bg-purple-500'
  },
  {
    id: 'tier-cities',
    title: 'Tier-2/3 Cities',
    description: 'Access global opportunities from anywhere in India',
    topBorderColor: 'border-pink-300',
    iconBgColor: 'bg-blue-100',
    iconColor: 'bg-blue-500'
  }
];

export const WhoCanJoinSection = () => {
  return (
    <section className="w-full bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Who Can Join Sirtifai
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our programs are designed to support learners from diverse backgrounds and career stages.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {AUDIENCE_CARDS.map((card) => (
            <div
              key={card.id}
              className={`bg-white rounded-xl shadow-lg border-t-4 ${card.topBorderColor} p-6 text-center hover:shadow-xl transition-shadow`}
            >
              <div className={`w-16 h-16 ${card.iconBgColor} rounded-full flex items-center justify-center mx-auto mb-4`}>
                <div className={`w-8 h-8 ${card.iconColor} rounded-full flex items-center justify-center`}>
                  <div className="w-4 h-4 bg-white rounded-full"></div>
                </div>
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
