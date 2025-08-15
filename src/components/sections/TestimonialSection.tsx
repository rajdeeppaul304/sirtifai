import type React from "react";

// Circular check icon per design
const Check: React.FC<{ className?: string }> = ({ className = "" }) => (
  <span className={"inline-flex items-center justify-center w-5 h-5 rounded-full bg-[#FF6A2D] mt-[2px] " + className}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="none"
      stroke="#ffffff"
      strokeWidth={2}
      className="w-3 h-3"
    >
      <path d="M5 10l3 3 7-7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  </span>
);

const features = [
  "Monthly salary slips",
  "Bank statements + ESI/EPF inclusion (Pro & Elite)",
  "Verified proof for loans, visas, and taxes",
  "Long-term income records",
];

const TestimonialSection: React.FC = () => {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
        {/* Visual */}
        <div className="relative mx-auto w-full max-w-[380px] sm:max-w-[440px] md:max-w-[500px] lg:max-w-[540px] aspect-square">
          <div className="absolute -top-5 -left-5 w-full h-full bg-orange-500 rounded-md" aria-hidden="true" />
          <div className="relative w-full h-full border-2 border-sky-500 rounded-sm overflow-hidden shadow-sm">
            <img
              src="/assets/freelancer/man-front-view-freelance.png"
              alt="Professional working with tablet"
              className="w-full h-full object-cover object-center"
              loading="lazy"
            />
          </div>
        </div>

        {/* Content */}
        <div className="max-w-xl mx-auto lg:mx-0">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 leading-snug">
            Get Paid Professionally, Like a Full-Time Employee
          </h2>
          <p className="mt-5 text-sm md:text-base text-slate-600">
            Your income goes through Deel™, giving you:
          </p>
          <ul className="mt-6 space-y-4">
            {features.map((f) => (
              <li key={f} className="flex gap-3 text-sm md:text-base text-slate-700">
                <Check />
                <span>{f}</span>
              </li>
            ))}
          </ul>
          <p className="mt-8 italic font-medium text-slate-800 leading-relaxed">
            "This isn't freelancing with guesswork—it's verified, traceable, and legal."
          </p>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;