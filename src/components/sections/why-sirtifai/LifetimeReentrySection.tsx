export const LifetimeReentrySection = () => {
  const benefits = [
    {
      icon: "🔄",
      title: "Rejoin Anytime",
      description: "Return to Programs anytime your plans later.",
    },
    {
      icon: "🔀",
      title: "Switch Industries",
      description: "Change tracks without additional costs.",
    },
    {
      icon: "🌍",
      title: "Global Opportunities",
      description: "Access support for global job markets.",
    },
  ]

  return (
    <section className="bg-gray-50 py-12 md:py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left - Image */}
          <div className="relative">
            <img
              src="/placeholder-nytcz.png"
              alt="Career consultation meeting"
              className="w-full rounded-2xl shadow-lg"
            />
          </div>

          {/* Right - Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Lifetime Re-Entry & Career Switch</h2>
              <p className="text-gray-600 text-lg">
                Your career journey doesn't end with graduation. We support you for life.
              </p>
            </div>

            <div className="space-y-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="text-xl">{benefit.icon}</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                    <p className="text-gray-600">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
