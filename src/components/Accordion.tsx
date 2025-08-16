import React, { useState } from 'react';
import { Plus } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "Is this like a regular course?",
    answer: "No. This is a job-aligned, real-world project-based system with income, placement, and lifetime support."
  },
  {
    question: "What if I don't get placed?",
    answer: "You retain all assets—certifications, resume, portfolio—and get lifetime re-entry support."
  },
  {
    question: "Do I need to complete all 3 phases?",
    answer: "No. You can join at any phase. However, doing all 3 ensures maximum benefit."
  },
  {
    question: "Is this legit and verifiable?",
    answer: "Yes. Sirtifai is a registered company with NSQF-certified programs and verified payroll via Deel."
  },
  {
    question: "How quickly can I start earning?",
    answer: "In the Practice Phase, projects begin within 72 hours of onboarding."
  }
];

export const Accordion: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-2xl mx-auto flex flex-col justify-center items-center gap-[18px]">
      {faqData.map((item, index) => (
        <div 
          key={index}
        className="bg-white sm:bg-[#FEF7F1] sm:border-none border border-orange-300 shadow-xl w-full rounded-lg overflow-hidden transition-all duration-200 hover:shadow-sm"
        >
          <button
            onClick={() => toggleAccordion(index)}
            className="w-full px-6 py-5 text-left flex items-center gap-4"
            aria-expanded={openIndex === index}
            aria-controls={`faq-answer-${index}`}
          >
            <div className="flex-shrink-0">
              <Plus 
                className={`w-5 h-5 text-gray-600 transition-transform duration-200 ${
                  openIndex === index ? 'rotate-45' : ''
                }`}
              />
            </div>
            <h3 className="text-lg font-semibold text-gray-900">
              {item.question}
            </h3>
          </button>
          
          <div
            id={`faq-answer-${index}`}
            className={`overflow-hidden transition-all duration-300 ease-in-out ${
              openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
            }`}
          >
            <div className="px-6 pb-5">
              <p className="text-gray-700 leading-relaxed">
                {item.answer}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};