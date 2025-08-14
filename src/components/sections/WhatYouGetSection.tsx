import type React from "react"

const WhatYouGetSection: React.FC = () => {
  return (
    <section className="py-16 px-4 bg-white">
      <style>{`
        .what-you-get-container {
          max-width: 1200px;
          margin: 0 auto;
          text-align: center;
        }
        .benefit-item {
          display: flex;
          align-items: flex-start;
          gap: 1rem;
          padding: 1.5rem;
          background: white;
          border-radius: 12px;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
          border: 1px solid #f1f5f9;
          transition: all 0.3s ease;
        }
        .benefit-item:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
        }
        .benefit-icon {
          width: 50px;
          height: 50px;
          background: linear-gradient(135deg, #ff6b35, #f7931e);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-size: 20px;
          flex-shrink: 0;
        }
        .certificate-badge {
          background: linear-gradient(135deg, #ff6b35, #f7931e);
          color: white;
          padding: 1rem 2rem;
          border-radius: 50px;
          font-weight: 600;
          display: inline-block;
          margin-top: 2rem;
        }
      `}</style>

      <div className="what-you-get-container">
        <h2 className="text-4xl font-bold text-gray-900 mb-12">What You Get</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="benefit-item">
            <div className="benefit-icon">🎥</div>
            <div className="text-left">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">50+ Hours of Video Content</h3>
              <p className="text-gray-600">
                Comprehensive video tutorials covering all aspects of freelancing from basics to advanced strategies.
              </p>
            </div>
          </div>

          <div className="benefit-item">
            <div className="benefit-icon">📚</div>
            <div className="text-left">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Downloadable Resources</h3>
              <p className="text-gray-600">
                Templates, checklists, and guides that you can download and use throughout your freelancing journey.
              </p>
            </div>
          </div>

          <div className="benefit-item">
            <div className="benefit-icon">💼</div>
            <div className="text-left">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Portfolio Building Guidance</h3>
              <p className="text-gray-600">
                Step-by-step guidance on creating a compelling portfolio that attracts high-paying clients.
              </p>
            </div>
          </div>

          <div className="benefit-item">
            <div className="benefit-icon">🎯</div>
            <div className="text-left">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Client Acquisition Strategies</h3>
              <p className="text-gray-600">
                Proven methods to find and secure your first clients, plus strategies for long-term growth.
              </p>
            </div>
          </div>

          <div className="benefit-item">
            <div className="benefit-icon">💰</div>
            <div className="text-left">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Pricing & Negotiation Training</h3>
              <p className="text-gray-600">
                Learn how to price your services competitively and negotiate with confidence.
              </p>
            </div>
          </div>

          <div className="benefit-item">
            <div className="benefit-icon">🤝</div>
            <div className="text-left">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Community Access</h3>
              <p className="text-gray-600">
                Join our exclusive community of freelancers for networking, support, and collaboration opportunities.
              </p>
            </div>
          </div>

          <div className="benefit-item">
            <div className="benefit-icon">📞</div>
            <div className="text-left">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Live Q&A Sessions</h3>
              <p className="text-gray-600">
                Regular live sessions where you can get your questions answered by industry experts.
              </p>
            </div>
          </div>

          <div className="benefit-item">
            <div className="benefit-icon">⚡</div>
            <div className="text-left">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Lifetime Updates</h3>
              <p className="text-gray-600">
                Get access to all future course updates and new content additions at no extra cost.
              </p>
            </div>
          </div>
        </div>

        <div className="certificate-badge">🏆 Bonus: Certificate of Freelance Business Startup Certified</div>
      </div>
    </section>
  )
}

export default WhatYouGetSection
