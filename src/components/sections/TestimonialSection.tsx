import type React from "react"

const TestimonialSection: React.FC = () => {
  return (
    <section className="py-16 px-4 bg-white">
      <style>{`
        .testimonial-container {
          max-width: 1200px;
          margin: 0 auto;
        }
        .testimonial-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: center;
        }
        .testimonial-image {
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 0 8px 30px rgba(0, 0, 0, 0.1);
        }
        .achievement-item {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 1rem 0;
          border-bottom: 1px solid #f1f5f9;
        }
        .achievement-item:last-child {
          border-bottom: none;
        }
        .achievement-icon {
          width: 40px;
          height: 40px;
          background: linear-gradient(135deg, #ff6b35, #f7931e);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-size: 18px;
          flex-shrink: 0;
        }
        @media (max-width: 768px) {
          .testimonial-content {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
        }
      `}</style>

      <div className="testimonial-container">
        <div className="testimonial-content">
          <div className="testimonial-image">
            <img src="/professional-man-office.png" alt="Success story" className="w-full h-96 object-cover" />
          </div>

          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-gray-900">Get Paid Professionally, Like a Full-Time Employee</h2>
            <p className="text-lg text-gray-600">
              Join thousands of successful freelancers who have transformed their careers with our comprehensive
              program.
            </p>

            <div className="space-y-4">
              <div className="achievement-item">
                <div className="achievement-icon">💰</div>
                <div>
                  <h4 className="font-semibold text-gray-900">Earn ₹50,000+ monthly</h4>
                  <p className="text-gray-600">Average earnings after 6 months</p>
                </div>
              </div>

              <div className="achievement-item">
                <div className="achievement-icon">📈</div>
                <div>
                  <h4 className="font-semibold text-gray-900">95% Success Rate</h4>
                  <p className="text-gray-600">Students finding work within 3 months</p>
                </div>
              </div>

              <div className="achievement-item">
                <div className="achievement-icon">🎯</div>
                <div>
                  <h4 className="font-semibold text-gray-900">500+ Projects Completed</h4>
                  <p className="text-gray-600">Real client work by our students</p>
                </div>
              </div>

              <div className="achievement-item">
                <div className="achievement-icon">⭐</div>
                <div>
                  <h4 className="font-semibold text-gray-900">4.9/5 Student Rating</h4>
                  <p className="text-gray-600">Consistently high satisfaction scores</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TestimonialSection
