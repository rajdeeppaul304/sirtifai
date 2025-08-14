import { CheckCircle2 } from 'lucide-react';

interface JourneyStep {
  id: string;
  number: number;
  title: string;
  description: string;
  features: string[];
  color: string;
}

const JOURNEY_STEPS: JourneyStep[] = [
  {
    id: 'skill',
    number: 1,
    title: 'SKILL',
    description: 'Master in-demand skills through structured learning paths and hands-on projects.',
    features: [
      'Expert-led live sessions',
      'Industry-relevant curriculum',
      'Practical assignments'
    ],
    color: 'bg-blue-500'
  },
  {
    id: 'practice',
    number: 2,
    title: 'PRACTICE',
    description: 'Apply your skills on real client projects while earning a steady income.',
    features: [
      'Verified client projects',
      '₹12K-₹35K monthly earnings',
      'Professional portfolio building'
    ],
    color: 'bg-orange-500'
  },
  {
    id: 'progress',
    number: 3,
    title: 'PROGRESS',
    description: 'Get placed in your dream job with ongoing career support.',
    features: [
      'Job placement assistance',
      'Interview preparation',
      'Lifetime career support'
    ],
    color: 'bg-green-500'
  }
];

export const LearningJourneySection = () => {
  return (
    <section className="w-full bg-[#FEF7F1] py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Your Learning Journey
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A structured path that takes you from skill acquisition to career success.
          </p>
        </div>

        {/* Journey Steps */}
        <div className="relative flex flex-col items-center">
          {/* Vertical Connection Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-blue-200 transform -translate-x-1/2"></div>
          
          <div className="space-y-16">
            {JOURNEY_STEPS.map((step) => (
              <div key={step.id} className="relative flex flex-col items-center">
                {/* Step Number Circle */}
                <div className={`w-16 h-16 ${step.color} rounded-full flex items-center justify-center text-white text-2xl font-bold border-4 border-white shadow-lg z-10 relative`}>
                  {step.number}
                </div>
                
                {/* Connection Line from Number to Card */}
                <div className="w-1 h-8 bg-blue-200"></div>
                
                {/* Step Card */}
                <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100 w-full max-w-2xl">
                  {/* Step Title */}
                  <h3 className={`text-2xl font-bold mb-4 text-left ${step.title === 'PRACTICE' ? 'text-orange-500' : 'text-gray-900'}`}>
                    {step.title}
                  </h3>
                  
                  {/* Step Description */}
                  <p className="text-gray-600 mb-6 text-left leading-relaxed">
                    {step.description}
                  </p>
                  
                  {/* Features List */}
                  <div className="space-y-3">
                    {step.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center">
                        <CheckCircle2 size={20} className="text-green-500 mr-3 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
