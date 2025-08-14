import { Card } from "../ui/Card"

export default function IncomeTrackerWall() {
  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Income Tracker Wall</h2>
          <p className="text-lg text-gray-600">Real-time salary increases from our community</p>
        </div>

        {/* Main Stats Card */}
        <Card className="bg-gradient-to-r from-gray-800 to-gray-900 text-white p-8 rounded-2xl mb-8">
          <div className="text-center">
            <h3 className="text-5xl lg:text-6xl font-bold text-[#ff7847] mb-2">$7,423,419</h3>
            <p className="text-xl text-gray-300">Total salary increases tracked this year</p>
          </div>
        </Card>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <Card className="p-6 text-center">
            <h4 className="text-sm font-medium text-gray-500 mb-2">Average Monthly</h4>
            <p className="text-2xl font-bold text-gray-900">$2,847</p>
          </Card>
          <Card className="p-6 text-center">
            <h4 className="text-sm font-medium text-gray-500 mb-2">Highest Earner</h4>
            <p className="text-2xl font-bold text-gray-900">$8,500</p>
          </Card>
          <Card className="p-6 text-center">
            <h4 className="text-sm font-medium text-gray-500 mb-2">Placement Rate</h4>
            <p className="text-2xl font-bold text-gray-900">94%</p>
          </Card>
        </div>

        {/* Leaderboard and Badges */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Monthly Leaderboard */}
          <Card className="p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-6">Monthly Leaderboard</h3>
            <div className="space-y-4">
              {[
                { name: "Vikram Singh", amount: "$8,500", rank: 1 },
                { name: "Ankit Verma", amount: "$7,200", rank: 2 },
                { name: "Neha Sharma", amount: "$6,800", rank: 3 },
                { name: "Rohit Kumar", amount: "$6,200", rank: 4 },
                { name: "Priya Gupta", amount: "$5,900", rank: 5 },
              ].map((person) => (
                <div key={person.name} className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                        person.rank === 1 ? "bg-[#ff7847] text-white" : "bg-gray-100 text-gray-600"
                      }`}
                    >
                      {person.rank}
                    </div>
                    <span className="font-medium text-gray-900">{person.name}</span>
                  </div>
                  <span className="font-bold text-[#ff7847]">{person.amount}</span>
                </div>
              ))}
            </div>
          </Card>

          {/* Milestone Badges */}
          <Card className="p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-6">Milestone Badges</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-4 bg-orange-50 rounded-lg">
                <div className="w-12 h-12 bg-[#ff7847] rounded-full flex items-center justify-center mx-auto mb-2">
                  <span className="text-white font-bold">5K</span>
                </div>
                <p className="text-sm font-medium text-gray-900">First $5K</p>
                <p className="text-xs text-gray-500">847 achievers</p>
              </div>
              <div className="text-center p-4 bg-orange-50 rounded-lg">
                <div className="w-12 h-12 bg-[#ff7847] rounded-full flex items-center justify-center mx-auto mb-2">
                  <span className="text-white font-bold">10K</span>
                </div>
                <p className="text-sm font-medium text-gray-900">Career Switch</p>
                <p className="text-xs text-gray-500">423 achievers</p>
              </div>
              <div className="text-center p-4 bg-orange-50 rounded-lg">
                <div className="w-12 h-12 bg-[#ff7847] rounded-full flex items-center justify-center mx-auto mb-2">
                  <span className="text-white font-bold">💼</span>
                </div>
                <p className="text-sm font-medium text-gray-900">Dream Job</p>
                <p className="text-xs text-gray-500">312 achievers</p>
              </div>
              <div className="text-center p-4 bg-orange-50 rounded-lg">
                <div className="w-12 h-12 bg-[#ff7847] rounded-full flex items-center justify-center mx-auto mb-2">
                  <span className="text-white font-bold">🌟</span>
                </div>
                <p className="text-sm font-medium text-gray-900">Consistent Growth</p>
                <p className="text-xs text-gray-500">156 achievers</p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}