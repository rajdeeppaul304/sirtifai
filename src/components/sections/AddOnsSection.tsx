import type React from "react"

const AddOnsSection: React.FC = () => {
  return (
    <section className="py-16 px-4 bg-white">
      <style>{`
        .addons-container {
          max-width: 1200px;
          margin: 0 auto;
          text-align: center;
        }
        .addons-table {
          background: white;
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 0 8px 30px rgba(0, 0, 0, 0.1);
          border: 1px solid #f1f5f9;
        }
        .table-header {
          background: linear-gradient(135deg, #ff6b35, #f7931e);
          color: white;
          padding: 1.5rem;
        }
        .table-row {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr 1fr;
          align-items: center;
          padding: 1rem 1.5rem;
          border-bottom: 1px solid #f1f5f9;
        }
        .table-row:last-child {
          border-bottom: none;
        }
        .table-row:nth-child(even) {
          background: #f9fafb;
        }
        .addon-name {
          text-align: left;
          font-weight: 600;
          color: #1f2937;
        }
        .addon-price {
          font-weight: 700;
          color: #ff6b35;
        }
        .addon-button {
          background: #ff6b35;
          color: white;
          padding: 0.5rem 1rem;
          border-radius: 6px;
          border: none;
          font-weight: 600;
          cursor: pointer;
          transition: background-color 0.3s ease;
        }
        .addon-button:hover {
          background: #e55a2b;
        }
        .addon-button.secondary {
          background: #374151;
        }
        .addon-button.secondary:hover {
          background: #1f2937;
        }
        @media (max-width: 768px) {
          .table-row {
            grid-template-columns: 1fr;
            gap: 0.5rem;
            text-align: center;
          }
          .addon-name {
            text-align: center;
          }
        }
      `}</style>

      <div className="addons-container">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">Supercharge Your Career With Optional Add-Ons</h2>
        <p className="text-lg text-gray-600 mb-12">
          Take your freelancing to the next level with these specialized add-on courses.
        </p>

        <div className="addons-table">
          <div className="table-header">
            <div className="table-row">
              <div className="font-bold text-lg">Add-On Course</div>
              <div className="font-bold">Duration</div>
              <div className="font-bold">Price</div>
              <div className="font-bold">Action</div>
            </div>
          </div>

          <div className="table-row">
            <div className="addon-name">Advanced SEO Mastery</div>
            <div>8 weeks</div>
            <div className="addon-price">₹12,999</div>
            <div>
              <button className="addon-button">Add to Cart</button>
            </div>
          </div>

          <div className="table-row">
            <div className="addon-name">Social Media Marketing Pro</div>
            <div>6 weeks</div>
            <div className="addon-price">₹9,999</div>
            <div>
              <button className="addon-button">Add to Cart</button>
            </div>
          </div>

          <div className="table-row">
            <div className="addon-name">Content Writing Excellence</div>
            <div>10 weeks</div>
            <div className="addon-price">₹15,999</div>
            <div>
              <button className="addon-button">Add to Cart</button>
            </div>
          </div>

          <div className="table-row">
            <div className="addon-name">E-commerce Store Setup</div>
            <div>4 weeks</div>
            <div className="addon-price">₹8,999</div>
            <div>
              <button className="addon-button secondary">Add to Cart</button>
            </div>
          </div>

          <div className="table-row">
            <div className="addon-name">Personal Brand Building</div>
            <div>12 weeks</div>
            <div className="addon-price">₹18,999</div>
            <div>
              <button className="addon-button secondary">Add to Cart</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AddOnsSection
