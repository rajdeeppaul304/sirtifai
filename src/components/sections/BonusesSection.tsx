import type React from "react"

const BonusesSection: React.FC = () => {
  return (
    <section className="py-16 px-4 bg-gray-50">
      <style>{`
        .bonuses-container {
          max-width: 1200px;
          margin: 0 auto;
          text-align: center;
        }
        .bonus-card {
          background: white;
          border-radius: 12px;
          padding: 2rem;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
          border: 2px solid #fed7aa;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          height: 100%;
        }
        .bonus-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 8px 30px rgba(255, 107, 53, 0.15);
        }
        .bonus-icon {
          width: 60px;
          height: 60px;
          background: linear-gradient(135deg, #ff6b35, #f7931e);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 1rem;
          color: white;
          font-size: 24px;
        }
        .bonus-value {
          background: linear-gradient(135deg, #ff6b35, #f7931e);
          color: white;
          padding: 0.5rem 1rem;
          border-radius: 20px;
          font-size: 0.875rem;
          font-weight: 600;
          display: inline-block;
          margin-bottom: 1rem;
        }
      `}</style>

      <div className="bonuses-container">
        <h2 className="text-4xl font-bold text-gray-900 mb-12">Enroll Today And Get These Bonuses Free:</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bonus-card">
            <div className="bonus-icon">📋</div>
            <div className="bonus-value">Worth ₹5,999</div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Free Business Startup Checklist</h3>
            <p className="text-gray-600">
              Complete checklist to start your freelancing business the right way from day one.
            </p>
          </div>

          <div className="bonus-card">
            <div className="bonus-icon">📊</div>
            <div className="bonus-value">Worth ₹7,999</div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">1 Year Free Project Management Tool</h3>
            <p className="text-gray-600">
              Professional project management software to organize your client work efficiently.
            </p>
          </div>

          <div className="bonus-card">
            <div className="bonus-icon">⚖️</div>
            <div className="bonus-value">Worth ₹12,999</div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Ready Legal Contract Templates</h3>
            <p className="text-gray-600">
              Professional contract templates to protect your business and ensure smooth client relationships.
            </p>
          </div>

          <div className="bonus-card">
            <div className="bonus-icon">🎓</div>
            <div className="bonus-value">Worth ₹15,999</div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Free Income Diploma Certificate Course</h3>
            <p className="text-gray-600">
              Additional certification course to boost your credibility and earning potential.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BonusesSection
