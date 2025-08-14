import type React from "react"

const FinalCTASection: React.FC = () => {
  return (
    <section className="py-16 px-4 bg-gradient-to-r from-orange-500 to-red-500">
      <style>{`
        .cta-container {
          max-width: 800px;
          margin: 0 auto;
          text-align: center;
        }
        .cta-text {
          color: white;
          font-size: 2.5rem;
          font-weight: 800;
          margin-bottom: 2rem;
          line-height: 1.2;
        }
        .cta-subtitle {
          color: rgba(255, 255, 255, 0.9);
          font-size: 1.25rem;
          margin-bottom: 3rem;
        }
        .cta-buttons {
          display: flex;
          gap: 1rem;
          justify-content: center;
          flex-wrap: wrap;
        }
        .cta-button {
          padding: 1rem 2rem;
          border-radius: 50px;
          font-weight: 600;
          font-size: 1.1rem;
          border: none;
          cursor: pointer;
          transition: all 0.3s ease;
          min-width: 200px;
        }
        .cta-button.primary {
          background: white;
          color: #ff6b35;
        }
        .cta-button.primary:hover {
          background: #f9fafb;
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
        }
        .cta-button.secondary {
          background: transparent;
          color: white;
          border: 2px solid white;
        }
        .cta-button.secondary:hover {
          background: white;
          color: #ff6b35;
          transform: translateY(-2px);
        }
        @media (max-width: 768px) {
          .cta-text {
            font-size: 2rem;
          }
          .cta-buttons {
            flex-direction: column;
            align-items: center;
          }
        }
      `}</style>

      <div className="cta-container">
        <h2 className="cta-text">"Still wondering? Let's help you decide."</h2>
        <p className="cta-subtitle">
          Join thousands of successful freelancers who started their journey with us. Your future self will thank you
          for taking action today.
        </p>

        <div className="cta-buttons">
          <button className="cta-button primary">Start Your Freelance Journey</button>
          <button className="cta-button secondary">Schedule a Free Call</button>
        </div>
      </div>
    </section>
  )
}

export default FinalCTASection
