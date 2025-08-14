import { Check, X } from 'lucide-react';

interface PricingPlan {
  id: string;
  title: string;
  price: string;
  description: string;
  includedFeatures: string[];
  excludedFeatures?: string[];
  isPopular?: boolean;
  buttonText: string;
}

const PRICING_PLANS: PricingPlan[] = [
  {
    id: 'basic',
    title: 'Basic',
    price: '$675',
    description: 'Essential support for your international career journey',
    includedFeatures: [
      'Complete skill development program',
      'Practice phase with real projects',
      'NSQF certification',
      'Basic international resume preparation',
      'Job application guidance'
    ],
    excludedFeatures: [
      'Direct job sourcing',
      'Visa support'
    ],
    buttonText: 'Select Basic Plan'
  },
  {
    id: 'pro',
    title: 'Pro',
    price: '$1345',
    description: 'Enhanced support with job sourcing and interview preparation',
    includedFeatures: [
      'Everything in Basic plan',
      'Advanced portfolio development',
      'Direct job sourcing with partners',
      'Interview preparation with industry experts',
      'Cultural training for target countries',
      'Basic visa application guidance'
    ],
    excludedFeatures: [
      'Complete visa support package'
    ],
    isPopular: true,
    buttonText: 'Select Pro Plan'
  },
  {
    id: 'elite',
    title: 'Elite',
    price: '$2020',
    description: 'Comprehensive support from training to relocation',
    includedFeatures: [
      'Everything in Pro plan',
      'Premium job sourcing with direct employer connections',
      'Complete visa support package',
      'Legal documentation assistance',
      'Relocation support services',
      'Dedicated international placement manager',
      '6-month post-placement support'
    ],
    buttonText: 'Select Elite Plan'
  }
];

export const InternationalPricingPlans = () => {
  return (
    <>
      <style>{`
        .pricing-card {
          position: relative;
          background: white;
          border-radius: 16px;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
          border: 2px solid #e5e7eb;
          transition: all 0.3s ease;
          overflow: hidden;
        }
        
        .pricing-card:hover {
          box-shadow: 0 8px 40px rgba(0, 0, 0, 0.15);
          transform: translateY(-2px);
        }
        
        .pricing-card.popular {
          border-color: #f97316;
          transform: scale(1.05);
        }
        
        .pricing-card.popular:hover {
          transform: scale(1.05) translateY(-2px);
        }
        
        .card-header {
          position: relative;
          padding: 0;
          overflow: hidden;
        }
        
        .header-band {
          height: 8px;
          width: 100%;
        }
        
        .header-band.basic {
          background: linear-gradient(90deg, #6b7280, #9ca3af);
        }
        
        .header-band.popular {
          background: linear-gradient(90deg, #f97316, #fb923c);
          position: relative;
          height:30px;
        }
        
        .header-band.elite {
          background: linear-gradient(90deg, #f59e0b, #fbbf24);
        }
        
        .popular-badge {
          position: absolute;
          top: -12px;
          left: 50%;
          transform: translateX(-50%);
          // background: #f97316;
          color: white;
          padding: 6px 16px;
          border-radius: 20px;
          font-size: 12px;
          font-weight: 600;
          z-index: 10;
          margin-top:10px;
          box-shadow: 0 2px 8px rgba(249, 115, 22, 0.3);
        }
        
        .card-content {
          padding: 24px;
        }
        
        .plan-title {
          font-size: 24px;
          font-weight: 700;
          color: #111827;
          margin-bottom: 8px;
        }
        
        .plan-price {
          font-size: 36px;
          font-weight: 800;
          color: #111827;
          margin-bottom: 4px;
          display: inline-block;
          margin-right: 12px;
        }
        
        .price-period {
          font-size: 14px;
          color: #6b7280;
          margin-bottom: 16px;
          display: inline-block;
        }
        
        .plan-description {
          color: #4b5563;
          font-size: 14px;
          line-height: 1.5;
          margin-bottom: 24px;
          text-align: left;
        }
        
        .features-list {
          margin-bottom: 32px;
        }
        
        .feature-item {
          display: flex;
          align-items: flex-start;
          margin-bottom: 12px;
        }
        
        .feature-item.excluded {
          opacity: 0.4;
        }
        
        .feature-icon {
          margin-right: 12px;
          margin-top: 2px;
          flex-shrink: 0;
        }
        
        .feature-text {
          font-size: 14px;
          line-height: 1.4;
          color: #374151;
        }
        
        .cta-button {
          width: 100%;
          background: #f97316;
          color: white;
          padding: 14px 24px;
          border-radius: 12px;
          font-weight: 600;
          font-size: 16px;
          border: none;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        
        .cta-button:hover {
          background: #ea580c;
          transform: translateY(-1px);
          box-shadow: 0 4px 12px rgba(249, 115, 22, 0.4);
        }
      `}</style>
      
      <section className="w-full bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-6">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-gray-900 mb-6">
              Choose Your International Journey Plan
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Select the plan that best fits your global career aspirations and budget. All plans include our core 18-month roadmap.
            </p>
          </div>

          {/* Pricing Plans Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
            {PRICING_PLANS.map((plan) => (
              <div key={plan.id} className={`pricing-card ${plan.isPopular ? 'popular' : ''}`}>
                
                {/* Header Band */}
                <div className="card-header">
                  <div className={`header-band ${plan.isPopular ? 'popular' : plan.id}`}></div>
                  {plan.isPopular && (
                    <div className="popular-badge">
                      Most Popular
                    </div>
                  )}
                </div>

                {/* Card Content */}
                <div className="card-content" style={{ paddingTop: plan.isPopular ? '24px' : '24px' }}>
                  <h3 className="plan-title">{plan.title}</h3>
                  <div style={{ marginBottom: '16px' }}>
                    <div className="plan-price">{plan.price}</div>
                    <div className="price-period">one-time</div>
                  </div>
                  <p className="plan-description">{plan.description}</p>

                  {/* Features List */}
                  <div className="features-list">
                    {plan.includedFeatures.map((feature, index) => (
                      <div key={`included-${index}`} className="feature-item">
                        <Check size={18} className="text-green-500 feature-icon" />
                        <span className="feature-text">{feature}</span>
                      </div>
                    ))}
                    
                    {plan.excludedFeatures && plan.excludedFeatures.map((feature, index) => (
                      <div key={`excluded-${index}`} className="feature-item excluded">
                        <X size={18} className="text-gray-400 feature-icon" />
                        <span className="feature-text">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <button className="cta-button">
                    {plan.buttonText}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}