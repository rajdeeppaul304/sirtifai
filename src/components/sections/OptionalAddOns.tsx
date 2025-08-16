
'use client';
import { Check, ArrowRight, FileText, Scale } from 'lucide-react';

interface AddOnService {
  id: string
  title: string
  description: string
  icon: React.ComponentType<{ size?: number; className?: string }>
  features: string[]
  price: string
}

const ADD_ON_SERVICES: AddOnService[] = [
  {
    id: "global-payroll",
    title: "Global Payroll",
    description: "International payroll setup and tax optimization for your global income.",
    icon: ArrowRight,
    features: ["International bank account setup", "Tax optimization guidance", "Remittance support"],
    price: "$180", // Converted to USD
  },
  {
    id: "ca-for-visa",
    title: "CA for Visa",
    description: "Chartered Accountant services for financial documentation required for visa applications.",
    icon: FileText,
    features: ["Financial documents preparation", "Income verification", "Tax compliance certification"],
    price: "$144", // Converted to USD
  },
  {
    id: "legal-pack",
    title: "Legal Pack",
    description: "Legal assistance for international contracts, work permits, and immigration matters.",
    icon: Scale,
    features: ["Contract review", "Legal documentation support", "Immigration attorney consultation"],
    price: "$240", // Converted to USD
  },
]

export const OptionalAddOns = () => {
  return (
    <section className="w-full bg-[#FEF7F1] py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Optional Add-Ons</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Enhance your international journey with these specialized services
          </p>
        </div>

        {/* Add-On Services */}
        <div className="add-ons-wrapper">
          {ADD_ON_SERVICES.map((service) => (
            <div key={service.id} className="add-on-card bg-white rounded-xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">

              {/* Service Header */}
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-orange-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <service.icon size={32} className="text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </div>

              {/* Features List */}
              <div className="space-y-3 mb-6">
                {service.features.map((feature, index) => (
                  <div key={index} className="flex items-center">
                    <Check size={20} className="text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700 text-sm">{feature}</span>
                  </div>
                ))}
              </div>

              {/* Price and Action */}
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900 mb-4">{service.price}</div>
                <button className="text-orange-500 font-semibold hover:text-orange-600 transition-colors">
                  Add to plan
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scoped CSS for mobile scroll */}
      <style jsx>{`
        .add-ons-wrapper {
          display: flex;
          gap: 1.5rem;
          overflow-x: auto;
          scroll-snap-type: x mandatory;
          -webkit-overflow-scrolling: touch;
          padding-bottom: 1rem;
        }

        .add-on-card {
          flex: 0 0 85%;
          scroll-snap-align: center;
        }

        .add-ons-wrapper::-webkit-scrollbar {
          display: none;
        }
        .add-ons-wrapper {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }

        @media (min-width: 768px) {
          .add-ons-wrapper {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            overflow-x: visible;
          }
        }

        @media (min-width: 1024px) {
          .add-ons-wrapper {
            grid-template-columns: repeat(3, 1fr);
          }
        }
      `}</style>
    </section>
  )
}
