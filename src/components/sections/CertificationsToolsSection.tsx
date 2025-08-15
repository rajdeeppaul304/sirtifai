import { CheckCircle2 } from 'lucide-react';

interface CertificationTool {
  id: string;
  title: string;
  description: string;
  features: string[];
}

const CERTIFICATION_TOOLS: CertificationTool[] = [
  {
    id: 'digital-certificates',
    title: 'Digital Certificates with Verification QR - Anti-Fraud & Instant Proof',
    description: 'Explain the security and convenience of Sirtifai\'s certification system.',
    features: [
      'Every certificate has a unique QR code',
      'Employers can verify within seconds — no calls or emails required',
      'Stored in the Sirtifai Digital Wallet for lifetime access.'
    ]
  },
  {
    id: 'certification-showcase',
    title: 'Certification Showcase - Real Examples',
    description: 'Display the design, detail, and prestige of Sirtifai certificates.',
    features: [
      'Skill Phase Certificate - Proof of domain learning & foundational project work.',
      'Practice Phase Certificate - Confirms paid project experience with payroll verification.',
      'Progress Phase Certificate - Confirms employability readiness and career track completion.'
    ]
  },
  {
    id: 'recruitment-help',
    title: 'How Certifications Help You in Recruitment - Real-World Value',
    description: 'Show tangible benefits of having a Sirtifai certificate during hiring.',
    features: [
      'Cuts Hiring Time: Employers can instantly verify skills without additional testing.',
      'Boosts Salary Negotiation: Verified work + NSQF credential allows higher initial offers.',
      'Unlocks Global Roles: Meets skill verification requirements for overseas job applications.',
      'Adds LinkedIn Credibility: Certificates link directly to public recruiter-facing pages.'
    ]
  }
];

export const CertificationsToolsSection = () => {
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
          {CERTIFICATION_TOOLS.map((tool) => (
            <div key={tool.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              {/* Top Orange Section */}
              <div className="bg-orange-500 p-6 text-white">
                <h3 className="text-lg font-bold mb-2 leading-tight">{tool.title}</h3>
                <p className="text-orange-100 text-sm leading-relaxed">{tool.description}</p>
              </div>
              
              {/* Bottom White Section */}
              <div className="p-6">
                {/* Features List */}
                <div className="space-y-3">
                  {tool.features.map((feature, index) => (
                    <div key={index} className="flex items-start">
                      <CheckCircle2 size={20} className="text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 text-sm leading-relaxed">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
