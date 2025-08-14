import type React from "react"

const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-16 px-4 bg-gray-50">
      <style>{`
        .testimonials-container {
          max-width: 1200px;
          margin: 0 auto;
          text-align: center;
        }
        .testimonial-card {
          background: white;
          border-radius: 12px;
          padding: 2rem;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
          border: 1px solid #f1f5f9;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .testimonial-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12);
        }
        .testimonial-avatar {
          width: 60px;
          height: 60px;
          border-radius: 50%;
          margin: 0 auto 1rem;
          background: linear-gradient(135deg, #ff6b35, #f7931e);
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-size: 24px;
          font-weight: bold;
        }
        .income-highlight {
          color: #ff6b35;
          font-weight: 700;
          font-size: 1.25rem;
        }
      `}</style>

      <div className="testimonials-container">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">Real People. Real Income.</h2>
        <p className="text-lg text-gray-600 mb-12">
          See how our students are transforming their lives through freelancing.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="testimonial-card">
            <div className="testimonial-avatar">R</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Rahul</h3>
            <p className="text-gray-600 mb-4">
              "I was just ₹5k in my first month but within 6 months, I'm now earning
              <span className="income-highlight"> ₹45k+ per month</span> consistently. This program changed my life
              completely."
            </p>
            <div className="text-sm text-gray-500">Software Developer → Freelancer</div>
          </div>

          <div className="testimonial-card">
            <div className="testimonial-avatar">P</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Priya</h3>
            <p className="text-gray-600 mb-4">
              "As a housewife, I never thought I could earn. Now I make
              <span className="income-highlight"> ₹30k+ monthly</span> working just 4 hours a day. Perfect work-life
              balance!"
            </p>
            <div className="text-sm text-gray-500">Homemaker → Digital Marketer</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TestimonialsSection
