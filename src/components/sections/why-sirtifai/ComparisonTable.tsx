import { Check, X } from "lucide-react"

export const ComparisonTable = () => {
  const features = [
    {
      feature: "Real Tech Projects",
      sirtifai: true,
      others: false,
      description: "Verified + Payroll",
    },
    {
      feature: "Job Guarantee / Lifetime Support",
      sirtifai: true,
      others: false,
      description: "",
    },
    {
      feature: "Multi-Industry Tracks (24)",
      sirtifai: true,
      others: false,
      description: "Monthly Salary",
    },
    {
      feature: "AI-Powered LMS",
      sirtifai: true,
      others: false,
      description: "",
    },
    {
      feature: "NSQF Certification",
      sirtifai: true,
      others: false,
      description: "",
    },
    {
      feature: "Affordable Entry Plans",
      sirtifai: true,
      others: false,
      description: "₹1,500/month",
    },
  ]

  return (
    <section className="bg-gray-50 py-12 md:py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">How Sirtifai Is Different</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            See why thousands choose Sirtifai over traditional courses
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          {/* Table Header */}
          <div className="bg-orange-500 text-white">
            <div className="grid grid-cols-4 gap-4 p-6">
              <div className="font-semibold text-lg">Features</div>
              <div className="text-center font-semibold text-lg">Sirtifai</div>
              <div className="text-center font-semibold text-lg">Online Institutes</div>
              <div className="text-center font-semibold text-lg">Others</div>
            </div>
          </div>

          {/* Table Body */}
          <div className="divide-y divide-gray-200">
            {features.map((item, index) => (
              <div key={index} className="grid grid-cols-4 gap-4 p-6 hover:bg-gray-50">
                <div className="font-medium text-gray-900">
                  {item.feature}
                  {item.description && <div className="text-sm text-gray-500 mt-1">{item.description}</div>}
                </div>
                <div className="flex justify-center">
                  {item.sirtifai ? (
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                      <Check className="w-4 h-4 text-green-600" />
                    </div>
                  ) : (
                    <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center">
                      <X className="w-4 h-4 text-red-600" />
                    </div>
                  )}
                </div>
                <div className="flex justify-center">
                  <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center">
                    <X className="w-4 h-4 text-red-600" />
                  </div>
                </div>
                <div className="flex justify-center">
                  <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center">
                    <X className="w-4 h-4 text-red-600" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
