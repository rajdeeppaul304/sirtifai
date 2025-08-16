import type React from "react";

interface Testimonial {
  name: string;
  subtitle: string;
  quote: string;
  plan: string;
  rating: number; // 0-5
}

const testimonials: Testimonial[] = [
  {
    name: "Neha",
    subtitle: "Freelancer (Hyderabad)",
    quote: "I earned ₹28K in my 2nd month from Sirtifai Elite.",
    plan: "Elite Plan Member",
    rating: 5,
  },
  {
    name: "Ravi",
    subtitle: "Tier-2 City Candidate",
    quote: "From ₹0 to ₹30K/month with legal payroll & EPF.",
    plan: "Pro Plan Member",
    rating: 4, // design shows slightly fewer stars
  },
];

const Star: React.FC<{ filled?: boolean }> = ({ filled = true }) => (
  <svg
    className={`w-4 h-4 ${filled ? "text-yellow-400" : "text-gray-300"}`}
    viewBox="0 0 20 20"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.122 3.455a1 1 0 00.95.69h3.632c.969 0 1.371 1.24.588 1.81l-2.938 2.136a1 1 0 00-.364 1.118l1.122 3.455c.3.921-.755 1.688-1.54 1.118L10.95 14.347a1 1 0 00-1.175 0L6.479 16.709c-.784.57-1.838-.197-1.539-1.118l1.122-3.455a1 1 0 00-.364-1.118L2.76 8.882c-.783-.57-.38-1.81.588-1.81h3.632a1 1 0 00.95-.69l1.12-3.455z" />
  </svg>
);

const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-20 bg-[#FCF8F5]">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-center text-4xl md:text-5xl font-bold tracking-tight mb-14">
          Real People. Real Income.
        </h2>
        <div className="flex justify-center items-center overflow-auto whitespace-nowrap md:grid gap-8 md:grid-cols-2 w-full pl-[10em]">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="w-full bg-white rounded-md border border-gray-200 shadow-lg hover:shadow-lg transition-shadow px-8 py-8 flex flex-col justify-between"
            >
              <div className="mb-6">
                <h3 className="font-semibold text-base md:text-lg text-gray-900 leading-snug">{t.name}</h3>
                <p className="text-[13px] md:text-sm text-gray-500 mt-1">{t.subtitle}</p>
                <p className="text-sm md:text-[15px] text-gray-800 mt-6 leading-relaxed">“{t.quote}”</p>
              </div>
              <div className="flex items-center gap-3 pt-2">
                <div className="flex">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} filled={i < t.rating} />
                  ))}
                </div>
                <span className="text-[11px] md:text-xs font-medium text-gray-600">{t.plan}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;