import { CheckCircle2 } from 'lucide-react';

interface ToolCard {
  id: string;
  title: string;
  description: string;
  features: string[];
  buttonText: string;
}

const TOOL_CARDS: ToolCard[] = [
  {
    id: 'career-quiz',
    title: 'Career Quiz',
    description: 'Discover your ideal career path based on your skills and interests',
    features: [
      '5-minute assessment',
      'Personalized recommendations',
      'Industry-specific insights'
    ],
    buttonText: 'Take Quiz Now'
  },
  {
    id: 'ai-resume-score',
    title: 'AI Resume Score',
    description: 'Get instant feedback on your resume with AI-powered analysis',
    features: [
      'ATS compatibility check',
      'Industry-specific scoring',
      'Actionable improvement tips'
    ],
    buttonText: 'Check Your Resume'
  },
  {
    id: 'job-role-mapping',
    title: 'Job Role Mapping',
    description: 'Explore career paths and skill requirements for in-demand roles',
    features: [
      'Interactive career paths',
      'Skill gap analysis',
      'Salary insights by location'
    ],
    buttonText: 'Explore Job Roles'
  }
];

export const ToolsSection = () => {
  return (
    <section className="w-full bg-[#FEF7F1] py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Tools To Accelerate Your Journey
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Free resources to help you identify your strengths, plan your career path, and showcase your skills.
          </p>
        </div>

        {/* Tools Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {TOOL_CARDS.map((tool) => (
            <div key={tool.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              {/* Top Orange Section */}
              <div className="bg-[#FF8F63] p-6 text-white">
                <h3 className="text-xl font-bold mb-2">{tool.title}</h3>
                <p className="text-orange-100 text-sm leading-relaxed">
                  {tool.description}
                </p>
              </div>

              {/* Bottom White Section */}
              <div className="p-6">
                {/* Features List */}
                <div className="space-y-3 mb-6">
                  {tool.features.map((feature, index) => (
                    <div key={index} className="flex items-center">
                      <CheckCircle2 size={20} className="text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Call-to-Action Button */}
                <button className="w-full bg-orange-500 text-white py-3 px-6 rounded-lg font-semibold hover:bg-orange-600 transition-colors">
                  {tool.buttonText}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
