export const AIPoweredLMSSection = () => {
  const features = [
    {
      icon: "🎯",
      title: "Personalised Learning Paths",
      description: "AI adapts to your learning style and pace for optimal results.",
    },
    {
      icon: "📈",
      title: "Career Analytics & AI Resume",
      description: "Track progress and optimize your career trajectory with AI insights.",
    },
    {
      icon: "👁️",
      title: "Real-time Progress Tracking",
      description: "Monitor your development with detailed analytics and feedback.",
    },
  ]

  return (
    <section className="bg-white py-12 md:py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left - Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                AI-Powered LMS – LearnX
                <span className="text-orange-500 text-3xl ml-2">✦</span>
              </h2>
              <p className="text-gray-600 text-lg">Experience the future of learning with our intelligent platform</p>
            </div>

            <div className="space-y-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="text-xl">{feature.icon}</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Visual */}
          <div className="relative">
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8">
              <div className="space-y-4">
                {/* AI Dashboard mockup */}
                <div className="bg-white rounded-xl p-4 shadow-sm">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-8 h-8 bg-blue-100 rounded-full"></div>
                    <div className="w-8 h-8 bg-green-100 rounded-full"></div>
                    <div className="w-8 h-8 bg-orange-100 rounded-full"></div>
                  </div>
                  <div className="space-y-2">
                    <div className="h-2 bg-gray-200 rounded w-3/4"></div>
                    <div className="h-2 bg-gray-200 rounded w-1/2"></div>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-4 shadow-sm">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium">Learning Progress</span>
                    <span className="text-sm text-blue-600">85%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-500 h-2 rounded-full w-4/5"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
