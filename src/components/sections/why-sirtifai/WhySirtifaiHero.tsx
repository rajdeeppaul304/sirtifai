import { Button } from "../../ui/Button"

export const WhySirtifaiHero = () => {
  return (
    <section className="bg-white py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight">
              Why Sirtifai?{" "}
              <span className="block">
                Because Your Career Deserves <span className="text-orange-500">More</span>
              </span>
              <span className="block">
                Than Just A Course
                <span className="text-orange-500 text-4xl sm:text-5xl lg:text-6xl">✦</span>
              </span>
            </h1>

            <p className="text-gray-600 text-base sm:text-lg max-w-lg">
              We don't just teach you — we make you authentically competent, pay to test projects, pay you while you
              learn, and support your career for life.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-full font-semibold"
                size="lg"
              >
                Explore SPP Programmes
              </Button>
              <Button
                variant="outline"
                className="border-gray-300 text-gray-700 px-8 py-3 rounded-full font-semibold bg-transparent"
                size="lg"
              >
                Book Free Demo
              </Button>
            </div>
          </div>

          {/* Right Content - Image */}
          <div className="relative">
            <div className="relative bg-orange-50 rounded-3xl p-6 lg:p-8">
              {/* Main workspace image */}
              <div className="relative">
                <img src="/modern-workspace-dashboard.png" alt="Modern workspace" className="w-full rounded-2xl shadow-lg" />

                {/* Floating cards */}
                <div className="absolute -top-4 -left-4 bg-white rounded-xl shadow-lg p-4 border">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                      <span className="text-green-600 font-semibold text-sm">✓</span>
                    </div>
                    <div>
                      <p className="font-semibold text-sm text-gray-900">Real Project Done</p>
                      <p className="text-xs text-gray-500">Portfolio Building</p>
                    </div>
                  </div>
                </div>

                <div className="absolute -bottom-4 -right-4 bg-white rounded-xl shadow-lg p-4 border">
                  <div className="text-center">
                    <p className="text-2xl font-bold text-orange-500">₹25,000</p>
                    <p className="text-xs text-gray-500">Monthly Earning</p>
                    <div className="flex items-center justify-center gap-1 mt-1">
                      <span className="text-green-500 text-xs">●</span>
                      <span className="text-xs text-gray-600">Active</span>
                    </div>
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
