import type React from "react"

const PricingSection: React.FC = () => {
  return (
    <section className="py-16 px-4 bg-gray-50">
      <style>{`
        .pricing-container {
          max-width: 1200px;
          margin: 0 auto;
          text-align: center;
        }
        .pricing-card {
          background: white;
          border-radius: 16px;
          padding: 2rem;
          box-shadow: 0 8px 30px rgba(0, 0, 0, 0.1);
          border: 2px solid transparent;
          transition: all 0.3s ease;
          height: 100%;
        }
        .pricing-card.popular {
          border-color: #ff6b35;
          transform: scale(1.05);
        }
        .pricing-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 40px rgba(0, 0, 0, 0.15);
        }
        .pricing-card.popular:hover {
          transform: scale(1.05) translateY(-4px);
        }
        .price-badge {
          background: linear-gradient(135deg, #ff6b35, #f7931e);
          color: white;
          padding: 0.5rem 1rem;
          border-radius: 20px;
          font-size: 0.875rem;
          font-weight: 600;
          display: inline-block;
          margin-bottom: 1rem;
        }
        .price-amount {
          font-size: 3rem;
          font-weight: 800;
          color: #1f2937;
        }
        .price-period {
          color: #6b7280;
          font-size: 1rem;
        }
        .feature-list {
          list-style: none;
          padding: 0;
          margin: 2rem 0;
        }
        .feature-list li {
          padding: 0.5rem 0;
          color: #4b5563;
          position: relative;
          padding-left: 1.5rem;
        }
        .feature-list li:before {
          content: "✓";
          position: absolute;
          left: 0;
          color: #10b981;
          font-weight: bold;
        }
      `}</style>

      <div className="pricing-container">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">One-Time Payment. Monthly Earnings. Yearly Access.</h2>
        <p className="text-lg text-gray-600 mb-12">
          Choose the plan that fits your goals and start your freelancing journey today.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="pricing-card">
            <div className="price-badge">Basic</div>
            <div className="price-amount">₹15,798</div>
            <div className="price-period">One-time payment</div>
            <ul className="feature-list">
              <li>Full Course Access</li>
              <li>Basic Support</li>
              <li>Certificate</li>
              <li>6 Months Access</li>
            </ul>
            <button className="w-full bg-gray-900 text-white py-3 px-6 rounded-lg font-semibold hover:bg-gray-800 transition-colors">
              Choose Basic Plan
            </button>
          </div>

          <div className="pricing-card popular">
            <div className="price-badge">Most Popular</div>
            <div className="price-amount">₹25,598</div>
            <div className="price-period">One-time payment</div>
            <ul className="feature-list">
              <li>Full Course Access</li>
              <li>Priority Support</li>
              <li>Certificate</li>
              <li>12 Months Access</li>
              <li>Live Sessions</li>
              <li>Project Reviews</li>
            </ul>
            <button className="w-full bg-orange-500 text-white py-3 px-6 rounded-lg font-semibold hover:bg-orange-600 transition-colors">
              Choose Popular Plan
            </button>
          </div>

          <div className="pricing-card">
            <div className="price-badge">Premium</div>
            <div className="price-amount">₹42,478</div>
            <div className="price-period">One-time payment</div>
            <ul className="feature-list">
              <li>Full Course Access</li>
              <li>Premium Support</li>
              <li>Certificate</li>
              <li>Lifetime Access</li>
              <li>Live Sessions</li>
              <li>Project Reviews</li>
              <li>1-on-1 Mentoring</li>
              <li>Job Placement Support</li>
            </ul>
            <button className="w-full bg-orange-500 text-white py-3 px-6 rounded-lg font-semibold hover:bg-orange-600 transition-colors">
              Choose Premium Plan
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PricingSection
