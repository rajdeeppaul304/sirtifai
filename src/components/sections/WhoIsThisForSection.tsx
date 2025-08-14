import type React from "react"

const WhoIsThisForSection: React.FC = () => {
  return (
    <section className="py-16 px-4 bg-orange-50">
      <style>{`
        .who-is-container {
          max-width: 1200px;
          margin: 0 auto;
          text-align: center;
        }
        .persona-card {
          background: white;
          border-radius: 12px;
          padding: 2rem;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
          border: 1px solid #fed7aa;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          height: 100%;
        }
        .persona-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 8px 30px rgba(255, 107, 53, 0.15);
        }
        .persona-icon {
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

      <div className="who-is-container">
        <h2 className="text-4xl font-bold text-gray-900 mb-12">Who Is This For?</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="persona-card">
            <div className="persona-icon">🎓</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">New Students</h3>
            <p className="text-gray-600">
              Recent graduates looking to start their career in freelancing with proper guidance and structure.
            </p>
          </div>

          <div className="persona-card">
            <div className="persona-icon">💼</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Freelancers on Fiverr</h3>
            <p className="text-gray-600">
              Existing freelancers who want to scale their business and increase their earning potential.
            </p>
          </div>

          <div className="persona-card">
            <div className="persona-icon">👩‍💼</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Housewives / Dropouts</h3>
            <p className="text-gray-600">Anyone looking for flexible work opportunities that can be done from home.</p>
          </div>

          <div className="persona-card">
            <div className="persona-icon">🏢</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Corporate Employees</h3>
            <p className="text-gray-600">
              Working professionals seeking additional income streams or career transition.
            </p>
          </div>

          <div className="persona-card">
            <div className="persona-icon">🎯</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Career-Break Mothers</h3>
            <p className="text-gray-600">Mothers returning to work who need flexible, skill-based opportunities.</p>
          </div>

          <div className="persona-card">
            <div className="persona-icon">💡</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Skill Job Seekers</h3>
            <p className="text-gray-600">
              Individuals with skills looking to monetize them through freelancing platforms.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhoIsThisForSection
