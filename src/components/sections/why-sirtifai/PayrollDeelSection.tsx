export const PayrollDeelSection = () => {
  const features = [
    {
      icon: "💳",
      title: "Compliant Payments",
      description: "Ensure EPF/ESI for domestic plans and international payroll compliance.",
      bgColor: "bg-blue-100",
    },
    {
      icon: "📊",
      title: "Transparent Tracking",
      description: "Transparent payment tracking through PayPal.",
      bgColor: "bg-green-100",
    },
    {
      icon: "🌐",
      title: "Global Reach",
      description: "Used by global companies for seamless international payments.",
      bgColor: "bg-orange-100",
    },
  ]

  return (
    <section className="bg-white py-12 md:py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Payroll Via Deel™
            <span className="text-orange-500 text-3xl ml-2">✦</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Seamless, compliant payment system used by global companies
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <div
                className={`w-16 h-16 ${feature.bgColor} rounded-full flex items-center justify-center mx-auto mb-6`}
              >
                <span className="text-2xl">{feature.icon}</span>
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>

              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
