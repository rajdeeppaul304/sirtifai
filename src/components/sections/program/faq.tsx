import { useState } from "react";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const faqs = [
    {
      question: "Is this like a regular course?",
      answer:
        "No. This is a job-aligned, real-world project-based system with income, placement, and lifetime support.",
    },
    {
      question: "What if I don't get placed?",
      answer:
        "You retain all assets—certifications, resume, portfolio—and get lifetime re-entry support.",
    },
    {
      question: "Do you offer a refund policy?",
      answer:
        "Absolutely. We have a 14-day refund policy, no questions asked, if you are not satisfied with your purchase.",
    },
    {
      question: "Do I need to complete all 3 phases?",
      answer:
        "No. You can join at any phase. However, doing all 3 ensures maximum benefit.",
    },
    {
      question: "Is this legit and verifiable?",
      answer:
        "Yes. Sirtifai is a registered company with NSQF-certified programs and verified payroll via Deel.",
    },
    {
      question: "How quickly can I start earning?",
      answer:
        "In the Practice Phase, projects begin within 72 hours of onboarding.",
    },
  ];
  return (
    <section className="min-h-screen w-full py-4 md:py-16">
      <div className="min-h-screen w-full flex flex-col justify-center items-center">
        <div className="w-full max-w-7xl mx-auto">
          <h1 className="text-[30px] font-open-sans md:text-[60px] font-[600] text-black capitalize text-center w-full">
            Frequently Asked Questions
          </h1>

          <div className="space-y-4 w-full my-8">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white shadow-md rounded-lg border border-gray-200 w-full"
              >
                <button
                  onClick={() =>
                    setOpenIndex(openIndex === index ? null : index)
                  }
                  className="w-full font-inter flex justify-between items-center p-5 text-left text-lg font-medium text-[#1F2937]"
                >
                  {faq.question}
                  <span className="text-gray-500 text-2xl leading-none fon-inter">
                    {openIndex === index ? "−" : "+"}
                  </span>
                </button>
                {openIndex === index && (
                  <div className="p-5 border-t border-gray-200 text-[#4B5563] font-inter">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
