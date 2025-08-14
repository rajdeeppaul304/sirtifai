import type React from "react"

const WhatIsSection: React.FC = () => {
  return (
    <section className="py-16 px-4 bg-white">
      <style>{`
        .what-is-container {
          max-width: 1200px;
          margin: 0 auto;
          text-align: center;
        }
        .feature-card {
          background: white;
          border-radius: 12px;
          padding: 2rem;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
          border: 1px solid #f1f5f9;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .feature-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12);
        }
        .feature-icon {
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
      `}</style>

      <div className="what-is-container">
        <h2 className="text-5xl font-semibold text-gray-900 mb-4">What Is The Freelancer Programme?</h2>
        <p className="text-lg  text-center text-gray-600 mb-12 max-w-3xl mx-auto">
Sirtifai's Freelancer Programme is a structured platform for freelancers, freshers, and <br/>         

career restarters to earn verified income through real projects while gaining mentorship, <br/>

legal protection, and long-term client access.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="feature-card">
            <div className="feature-icon">📚</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Learning From Scratch</h3>
            <p className="text-gray-600">
              Start from the basics and build your skills step by step with our structured curriculum.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">🎯</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Goal-Focused Programme</h3>
            <p className="text-gray-600">
              Every lesson is designed with clear objectives to help you achieve your freelancing goals.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">👨‍🏫</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Learn & Tax Consultant</h3>
            <p className="text-gray-600">
              Get expert guidance on both skills development and managing your freelance business.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">💰</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Real Clients, Real and Pay</h3>
            <p className="text-gray-600">
              Work with actual clients and earn real money while you learn and grow your skills.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhatIsSection
