export const RealProjectsSection = () => {
  const projects = [
    {
      icon: "🏭",
      title: "Verified Industry Projects",
      description: "Work on verified industry projects from real companies, not simulations.",
      bgColor: "bg-blue-50",
      iconBg: "bg-blue-100",
    },
    {
      icon: "💼",
      title: "Portfolio Building",
      description: "Demonstrate real clients' success to build portfolios that employers trust.",
      bgColor: "bg-green-50",
      iconBg: "bg-green-100",
    },
    {
      icon: "💰",
      title: "Earn While Learning",
      description: "Earn ₹12K-₹35K/month during the Practice Phase.",
      amount: "₹25,000",
      bgColor: "bg-orange-50",
      iconBg: "bg-orange-100",
    },
  ]

  return (
    <section className="bg-white py-12 md:py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Real Projects, Not Just Courses</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Work on verified industry projects from real companies
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className={`${project.bgColor} rounded-2xl p-8 text-center relative`}>
              <div className={`w-16 h-16 ${project.iconBg} rounded-2xl flex items-center justify-center mx-auto mb-6`}>
                <span className="text-2xl">{project.icon}</span>
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-4">{project.title}</h3>

              <p className="text-gray-600 leading-relaxed">{project.description}</p>

              {project.amount && (
                <div className="absolute top-4 right-4 bg-white rounded-lg px-3 py-2 shadow-sm">
                  <p className="text-orange-500 font-bold text-sm">{project.amount}</p>
                  <p className="text-xs text-gray-500">Monthly</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
