export const NSQFCertificationSection = () => {
  const benefits = [
    {
      icon: "🎓",
      title: "Enhanced Credibility",
      description: "Build credibility recognized by top employers.",
      bgColor: "bg-orange-100",
    },
    {
      icon: "✅",
      title: "Verification Ready",
      description: "Credentials are verification-ready for recruiters.",
      bgColor: "bg-green-100",
    },
    {
      icon: "🌍",
      title: "Global Recognition",
      description: "Certification trusted by employers in India, MENA, and SEA.",
      bgColor: "bg-blue-100",
    },
  ]

  return (
    <section className="bg-gray-50 py-12 md:py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">NSQF Certification</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Globally recognized certification that employers trust
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 text-center shadow-sm hover:shadow-md transition-shadow"
            >
              <div
                className={`w-16 h-16 ${benefit.bgColor} rounded-full flex items-center justify-center mx-auto mb-6`}
              >
                <span className="text-2xl">{benefit.icon}</span>
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-4">{benefit.title}</h3>

              <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
