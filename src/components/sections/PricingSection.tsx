import React from "react";

// Using a proper SVG for the checkmark for better quality and alignment.
const CheckIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="currentColor"
    className={`h-5 w-5 flex-shrink-0 ${className}`}
  >
    <path
      fillRule="evenodd"
      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
      clipRule="evenodd"
    />
  </svg>
);

interface Plan {
  id: string;
  name: string;
  price: string;
  oneTimeLabel: string;
  monthlyRange: string;
  features: string[];
  popular?: boolean;
}

const plans: Plan[] = [
  {
    id: "basic",
    name: "Basic",
    price: "₹11,798",
    oneTimeLabel: "one-time",
    monthlyRange: "Earn up to ₹100K/Month",
    features: [
      "1 Paid Project",
      "Mentor Feedback",
      "Portfolio Development",
      "Insurance Backed for Payment",
    ],
  },
  {
    id: "pro",
    name: "Pro",
    price: "₹23,598",
    oneTimeLabel: "one-time",
    monthlyRange: "Earn ₹105K – ₹184K/Month",
    features: [
      "Team Projects",
      "EPF Benefits",
      "Professional Payroll",
      "Dedicated Support",
      "Insurance Backed for Payment",
    ],
    popular: true,
  },
  {
    id: "elite",
    name: "Elite",
    price: "₹42,478",
    oneTimeLabel: "one-time",
    monthlyRange: "Earn ₹188K – ₹292K/Month",
    features: [
      "Premium Projects",
      "Complete Legal Pack",
      "Insurance Backed for Payment",
      "All Pro Features Included",
    ],
  },
];

const PricingSection: React.FC = () => {
  return (
    <section className="py-28 px-6 bg-[#FCF8F5]">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-center text-[2.4rem] sm:text-[2.9rem] md:text-[3.2rem] font-bold tracking-tight text-neutral-900 mb-20 leading-[1.1]">
          One-Time Payment. Monthly Earnings. Yearly Access.
        </h2>
        <div className="flex flex-col md:flex-row items-stretch justify-center gap-10 md:gap-7 lg:gap-10">
          {plans.map((plan) => (
            <PricingCard key={plan.id} plan={plan} />
          ))}
        </div>
      </div>
    </section>
  );
};

interface PricingCardProps {
  plan: Plan;
}

const PricingCard: React.FC<PricingCardProps> = ({ plan }) => {
  const { popular } = plan;

  return (
    <div
      className={`relative flex flex-col bg-white rounded-md border shadow-lg hover:shadow-lg w-full max-w-[360px] md:max-w-[340px] transition-all
        ${popular ? "scale-[1.045] shadow-lg" : ""}`}
      style={{
        borderColor: popular ? "#E0E0E0" : "#D1D5DB",
      }}
    >
      {/* Top Accent Bar */}
      <div
        className={`h-[5px] w-full rounded-t-md ${
          popular ? "bg-[#FF6A2D]" : plan.id === "elite" ? "bg-[#F4A004]" : "bg-[#2F3A44]"
        }`}
      />
      {popular && (
        <div className="absolute top-[5px] left-0 right-0 bg-[#FF6A2D] text-white text-[11px] tracking-wide font-medium py-1 text-center">
          Most Popular
        </div>
      )}
      <div className={`flex flex-col flex-1 px-6 pt-7 pb-8 ${popular ? "mt-6" : "mt-0"}`}>
        <h3 className="text-[15px] font-semibold text-slate-800 mb-3">{plan.name}</h3>
        <div className="flex items-baseline gap-2 mb-1">
          <span className="text-[32px] font-extrabold tracking-tight text-slate-900 leading-none">{plan.price}</span>
          <span className="text-[11px] font-medium text-gray-500 mt-1">{plan.oneTimeLabel}</span>
        </div>
        <p className="text-[11px] font-medium text-gray-600 mb-6">{plan.monthlyRange}</p>
        <ul className="space-y-3 mb-8 text-[12px] text-gray-800">
          {plan.features.map((feature) => (
            <li key={feature} className="flex items-start gap-2">
              <CheckIcon className="text-[#FF6A2D] mt-0.5 h-3.5 w-3.5" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
        <div className="mt-auto">
          <button
            className={`w-full rounded-full text-white text-[12px] font-medium tracking-wide py-3 transition-colors ${
              popular ? "bg-[#FF6A2D] hover:bg-[#fe6d33]" : "bg-[#FF6A2D] hover:bg-[#fe6d33]"
            }`}
          >
            Choose Plan
          </button>
        </div>
      </div>
    </div>
  );
};

export default PricingSection;