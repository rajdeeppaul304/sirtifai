import { Users, TrendingUp, IndianRupee, Building2 } from 'lucide-react';

interface ImpactMetric {
  id: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
  value: string;
  label: string;
  iconColor: string;
}

const IMPACT_METRICS: ImpactMetric[] = [
  {
    id: 'learners',
    icon: Users,
    value: '15,000+',
    label: 'Learners Trained',
    iconColor: 'text-blue-400'
  },
  {
    id: 'placement',
    icon: TrendingUp,
    value: '93%',
    label: 'Placement/Earning Rate',
    iconColor: 'text-green-400'
  },
  {
    id: 'income',
    icon: IndianRupee,
    value: '₹22K',
    label: 'Avg Practice Phase Income',
    iconColor: 'text-orange-400'
  },
  {
    id: 'companies',
    icon: Building2,
    value: '250+',
    label: 'Hiring Companies',
    iconColor: 'text-blue-400'
  }
];

export const ImpactNumbersSection = () => {
  return (
    <section className="w-full bg-[#1F2937] py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Our Impact in Numbers
          </h2>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {IMPACT_METRICS.map((metric) => (
            <div key={metric.id} className="bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              {/* Icon */}
              <div className="flex justify-center mb-6">
                <div className={`p-4 rounded-full bg-gray-100 ${metric.iconColor}`}>
                  <metric.icon size={32} />
                </div>
              </div>

              {/* Value */}
              <div className="text-3xl font-bold text-gray-900 mb-3">
                {metric.value}
              </div>

              {/* Label */}
              <div className="text-gray-600 font-medium">
                {metric.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
