import { Check, FileText, Euro, Building } from 'lucide-react';

interface VisaService {
  id: string;
  title: string;
  description: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
  services: string[];
}

interface TargetCountry {
  id: string;
  name: string;
  image: string; // Path or file name for the flag image
}

const VISA_SERVICES: VisaService[] = [
  {
    id: 'h1b',
    title: 'H1B Visa (USA)',
    description: 'Work visa for specialty occupations in the United States.',
    icon: FileText,
    services: [
      'Documentation preparation',
      'Employer sponsorship guidance',
      'Interview preparation'
    ]
  },
  {
    id: 'eu-blue-card',
    title: 'EU Blue Card',
    description: 'Work permit for highly skilled non-EU nationals in European Union countries.',
    icon: Euro,
    services: [
      'Country-specific requirements',
      'Qualification verification',
      'Application submission assistance'
    ]
  },
  {
    id: 'ict',
    title: 'ICT Visa (Intra-Company Transfer)',
    description: 'Intra-Company Transfer visa for employees of multinational companies.',
    icon: Building,
    services: [
      'Company documentation',
      'Employment verification',
      'Transfer justification support'
    ]
  }
];

const TARGET_COUNTRIES: TargetCountry[] = [
  { id: 'usa', name: 'United States', image: '/assets/international/unitedstates.jpg' },
  { id: 'germany', name: 'Germany', image: '/assets/international/germany.jpg' },
  { id: 'canada', name: 'Canada', image: '/assets/international/canada.jpg' },
  { id: 'australia', name: 'Australia', image: '/assets/international/australia.jpg' },
  { id: 'uk', name: 'United Kingdom', image: '/assets/international/unitedkingdom.jpg' },
  { id: 'singapore', name: 'Singapore', image: '/assets/international/singapore.jpg' },
  { id: 'netherlands', name: 'Netherlands', image: '/assets/international/netherlands.jpg' },
  { id: 'sweden', name: 'Sweden', image: '/assets/international/sweden.jpg' }
];

export const ComprehensiveVisaSupport = () => {
  return (
    <section className="w-full bg-[#FEF7F1] py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Visa Support Overview */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Comprehensive Visa Support
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our Elite plan includes complete visa support for your target country, ensuring a smooth transition to your international career.
          </p>
        </div>

        {/* Visa Services Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {VISA_SERVICES.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow"
            >
              {/* Service Header */}
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <service.icon size={32} className="text-orange-500" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>

              {/* Services List */}
              <div className="space-y-3 mb-6">
                {service.services.map((serviceItem, index) => (
                  <div key={index} className="flex items-center">
                    <Check
                      size={20}
                      className="text-green-500 mr-3 flex-shrink-0"
                    />
                    <span className="text-gray-700 text-sm">{serviceItem}</span>
                  </div>
                ))}
              </div>

              {/* Footer */}
              <div className="text-center">
                <p className="text-orange-500 text-sm font-medium">
                  Available with Elite plan or as an add-on service
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Target Countries Section */}
        <div className="text-center">
          <h3 className="text-3xl font-bold text-gray-900 mb-12">
            Target Countries
          </h3>

         <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
  {TARGET_COUNTRIES.map((country) => (
    <div
      key={country.id}
      className="bg-white rounded-lg p-6 shadow-md border border-gray-100 hover:shadow-lg transition-shadow text-center"
    >
      <img
        src={country.image}
        alt={country.name}
        className="mx-auto mb-3 w-16 h-16 object-cover rounded-full"
      />
      <h4 className="text-lg font-semibold text-gray-900">
        {country.name}
      </h4>
    </div>
  ))}
</div>

        </div>
      </div>
    </section>
  );
};
