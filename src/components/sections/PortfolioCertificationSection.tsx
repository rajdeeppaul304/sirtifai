import { Sun, Folder, QrCode, Eye } from 'lucide-react';

interface BenefitItem {
  id: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
  title: string;
  description: string;
}

const BENEFIT_ITEMS: BenefitItem[] = [
  {
    id: 'nsqf-certifications',
    icon: Sun,
    title: 'NSQF Aligned Certifications',
    description: 'Government-recognized skill qualifications that validate your expertise.'
  },
  {
    id: 'digital-portfolio',
    icon: Folder,
    title: 'Digital Portfolio',
    description: 'Showcase real-world projects completed during your learning journey.'
  },
  {
    id: 'verifiable-credentials',
    icon: QrCode,
    title: 'Verifiable Credentials',
    description: 'QR-code verified certificates that employers can instantly validate.'
  }
];

export const PortfolioCertificationSection = () => {
  return (
    <section className="w-full bg-white py-20 px-3 sm:px-0">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Content */}
          <div>
            {/* Section Header */}
            <div className="mb-12">
              <h2 className="sm:text-4xl text-3xl font-semibold text-gray-900 mb-4">
                Portfolio & Certification
              </h2>
              <p className="sm:text-xl text-sm text-gray-600 leading-relaxed">
                Build a professional portfolio and earn industry-recognized certifications that help you stand out to employers.
              </p>
            </div>

            {/* Benefits List */}
            <div className="space-y-8 mb-8">
              {BENEFIT_ITEMS.map((benefit) => (
                <div key={benefit.id} className="flex items-start">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <benefit.icon size={24} className="text-orange-500" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Learn More Link */}
            <a 
              href="#" 
              className="inline-flex items-center text-orange-500 font-semibold hover:text-orange-600 transition-colors"
            >
              Learn more about our certifications →
            </a>
          </div>

          {/* Right Side - Portfolio Card */}
          <div className="relative">
            {/* Background Shape */}
            <div className="absolute inset-0 bg-orange-100 rounded-3xl transform rotate-3 scale-105"></div>
            
            {/* Portfolio Card */}
            <div className="relative bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
              {/* Header */}
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Rahul Sharma</h3>
                  <p className="text-gray-600">Full Stack Developer</p>
                </div>
                <div className="bg-orange-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                  Certified
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-6 mb-6">
                <div>
                  <p className="text-gray-500 text-sm mb-1">NSQF Level</p>
                  <p className="text-orange-500 font-bold">6 Advanced</p>
                </div>
                <div>
                  <p className="text-gray-500 text-sm mb-1">Projects</p>
                  <p className="text-orange-500 font-bold">12 Completed</p>
                </div>
              </div>

              {/* Skills */}
              <div className="mb-6">
                <h4 className="text-gray-900 font-semibold mb-3">Skills</h4>
                <div className="flex flex-wrap gap-2 mb-3">
                  {['React.js', 'Node.js', 'MongoDB', 'AWS'].map((skill) => (
                    <span 
                      key={skill}
                      className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-sm font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                  <span className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-sm font-medium">
                    +5 more
                  </span>
                </div>
                <div className="text-right">
                  <span className="text-green-600 text-sm font-medium">Verified</span>
                </div>
              </div>

              {/* Call to Action */}
              <div className="text-center">
                <button className="inline-flex items-center text-orange-500 font-semibold hover:text-orange-600 transition-colors">
                  <Eye size={20} className="mr-2" />
                  View Full Portfolio
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
