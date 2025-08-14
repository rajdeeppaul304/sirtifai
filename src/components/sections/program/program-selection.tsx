"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"
import { useRouter } from "next/navigation"

interface ProgramOption {
  id: string
  name: string
  price: number
  features: string[]
  category: "skill" | "practice" | "progress"
  tier?: "basic" | "pro" | "elite"
}

interface AddOn {
  id: string
  name: string
  price: number
  description: string
  features: string[]
}

const programOptions: ProgramOption[] = [
  {
    id: "skill",
    name: "Skill Phase",
    price: 5999,
    category: "skill",
    features: ["Core skill development", "Learning Materials", "Foundational Knowledge", "Core Tracking progress"],
  },
  {
    id: "practice-basic",
    name: "Practice Phase - Basic",
    price: 5999,
    category: "practice",
    tier: "basic",
    features: ["Basic project assignments", "Peer collaboration", "Weekly mentorship", "Portfolio development"],
  },
  {
    id: "practice-pro",
    name: "Practice Phase - Pro",
    price: 9999,
    category: "practice",
    tier: "pro",
    features: [
      "Advanced project assignments",
      "Client simulation projects",
      "Daily mentorship",
      "Professional portfolio",
      "Industry connections",
    ],
  },
  {
    id: "practice-elite",
    name: "Practice Phase - Elite",
    price: 19999,
    category: "practice",
    tier: "elite",
    features: [
      "Real client projects",
      "Premium mentorship",
      "Personal branding",
      "Elite portfolio",
      "Direct industry placement",
      "Global opportunities",
    ],
  },
  {
    id: "progress-basic",
    name: "Progress Phase - Basic",
    price: 19999,
    category: "progress",
    tier: "basic",
    features: ["Job placement assistance", "Resume optimization", "Interview preparation", "Basic career support"],
  },
  {
    id: "progress-pro",
    name: "Progress Phase - Pro",
    price: 29999,
    category: "progress",
    tier: "pro",
    features: [
      "Guaranteed job placement",
      "Premium resume service",
      "Mock interviews",
      "Salary negotiation",
      "Career coaching",
    ],
  },
  {
    id: "progress-elite",
    name: "Progress Phase - Elite",
    price: 59999,
    category: "progress",
    tier: "elite",
    features: [
      "Premium job placement",
      "Executive resume service",
      "Leadership coaching",
      "Global placement",
      "Lifetime career support",
      "Network access",
    ],
  },
]

const addOns: AddOn[] = [
  {
    id: "payroll",
    name: "Payroll Services (via Deel™)",
    price: 500,
    description: "Get paid like a professional with verified income, payslips, and statutory benefits.",
    features: ["Global Freelance Payroll", "International structure for US/UK/Canada clients", "Tax-ready payout"],
  },
  {
    id: "ca",
    name: "CA Services",
    price: 3999,
    description: "Chartered Accountant Support - Manage your income, taxes, and filings with expert CA assistance.",
    features: ["GST filing", "Advance tax planning", "Bank reconciliation", "Income mapping", "Professional invoicing"],
  },
  {
    id: "legal",
    name: "Legal Services",
    price: 5977,
    description: "Contract & IP Support - Stay legally protected while working with clients—India or abroad.",
    features: [
      "5 legal drafts",
      "IP rights protection",
      "Basic dispute advisory",
      "Contract templates",
      "Legal compliance",
    ],
  },
]

const ProgramSelection = () => {
  const router = useRouter()
  const [selectedProgram, setSelectedProgram] = useState<string>("skill")
  const [selectedDuration, setSelectedDuration] = useState<number>(3)
  const [selectedAddOn, setSelectedAddOn] = useState<string>("")
  const [showDurationDropdown, setShowDurationDropdown] = useState(false)

  const selectedProgramData = programOptions.find((p) => p.id === selectedProgram)
  const selectedAddOnData = addOns.find((a) => a.id === selectedAddOn)

  const getDurationOptions = () => {
    if (!selectedProgramData) return []

    if (selectedProgramData.category === "progress") {
      return Array.from({ length: 12 }, (_, i) => i + 1)
    }
    return [3, 6]
  }

  const calculateTotal = () => {
    const programPrice = selectedProgramData?.price || 0
    const addOnPrice = selectedAddOnData?.price || 0
    return programPrice + addOnPrice
  }

  const handleAddOnSelect = (addOnId: string) => {
    setSelectedAddOn(selectedAddOn === addOnId ? "" : addOnId)
  }

  const handleBuyNow = () => {
    const packageData = {
      program: selectedProgramData,
      duration: selectedDuration,
      addOn: selectedAddOnData,
      total: calculateTotal(),
    }

    localStorage.setItem("selectedPackage", JSON.stringify(packageData))
    router.push("/application")
  }

  return (
    <section className="min-h-screen w-screen bg-[#FEF7F1] py-8 md:py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-[30px] md:text-[60px] font-[600] text-black capitalize">Select the Program</h1>
          <p className="text-[#4B5563] text-base max-w-[538px] mx-auto mt-4">
            Choose your learning path and customize your experience with add-on services.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Program Selection */}
          <div className="space-y-6">
            {/* Skill Phase */}
            <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
              <div className="p-4 border-b border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900">Skill Phase</h3>
              </div>
              <div className="p-4">
                <label className="flex items-center space-x-3 cursor-pointer">
                  <input
                    type="radio"
                    name="program"
                    value="skill"
                    checked={selectedProgram === "skill"}
                    onChange={(e) => setSelectedProgram(e.target.value)}
                    className="w-4 h-4 text-[#FC4C03] border-gray-300 focus:ring-[#FC4C03]"
                  />
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <span className="font-medium text-gray-900">Rs.5999 + 18% GST</span>
                      <div className="relative">
                        <button
                          onClick={() => setShowDurationDropdown(!showDurationDropdown)}
                          className="flex items-center space-x-2 px-3 py-1 border border-gray-300 rounded-md text-sm"
                        >
                          <span>{selectedDuration} Months</span>
                          <ChevronDown className="w-4 h-4" />
                        </button>
                        {showDurationDropdown && selectedProgram === "skill" && (
                          <div className="absolute right-0 mt-1 bg-white border border-gray-300 rounded-md shadow-lg z-10">
                            {getDurationOptions().map((duration) => (
                              <button
                                key={duration}
                                onClick={() => {
                                  setSelectedDuration(duration)
                                  setShowDurationDropdown(false)
                                }}
                                className="block w-full px-4 py-2 text-left hover:bg-gray-50"
                              >
                                {duration} Months
                              </button>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </label>
              </div>
            </div>

            {/* Practice Phase */}
            <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
              <div className="p-4 border-b border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900">Practice Phase (Your Selected Plan)</h3>
              </div>
              <div className="space-y-3 p-4">
                {programOptions
                  .filter((p) => p.category === "practice")
                  .map((program) => (
                    <label
                      key={program.id}
                      className="flex items-center space-x-3 cursor-pointer p-3 rounded-lg hover:bg-gray-50"
                    >
                      <input
                        type="radio"
                        name="program"
                        value={program.id}
                        checked={selectedProgram === program.id}
                        onChange={(e) => setSelectedProgram(e.target.value)}
                        className="w-4 h-4 text-[#FC4C03] border-gray-300 focus:ring-[#FC4C03]"
                      />
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <div>
                            <span className="font-medium text-gray-900 capitalize">{program.tier}: </span>
                            <span className="text-[#FC4C03] font-semibold">₹{program.price.toLocaleString()}</span>
                          </div>
                          <div className="relative">
                            <button
                              onClick={() => setShowDurationDropdown(!showDurationDropdown)}
                              className="flex items-center space-x-2 px-3 py-1 border border-gray-300 rounded-md text-sm"
                            >
                              <span>{selectedDuration} Months</span>
                              <ChevronDown className="w-4 h-4" />
                            </button>
                            {showDurationDropdown && selectedProgram === program.id && (
                              <div className="absolute right-0 mt-1 bg-white border border-gray-300 rounded-md shadow-lg z-10">
                                {getDurationOptions().map((duration) => (
                                  <button
                                    key={duration}
                                    onClick={() => {
                                      setSelectedDuration(duration)
                                      setShowDurationDropdown(false)
                                    }}
                                    className="block w-full px-4 py-2 text-left hover:bg-gray-50"
                                  >
                                    {duration} Months
                                  </button>
                                ))}
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    </label>
                  ))}
              </div>
            </div>

            {/* Progress Phase */}
            <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
              <div className="p-4 border-b border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900">Progress Phase</h3>
              </div>
              <div className="space-y-3 p-4">
                {programOptions
                  .filter((p) => p.category === "progress")
                  .map((program) => (
                    <label
                      key={program.id}
                      className="flex items-center space-x-3 cursor-pointer p-3 rounded-lg hover:bg-gray-50"
                    >
                      <input
                        type="radio"
                        name="program"
                        value={program.id}
                        checked={selectedProgram === program.id}
                        onChange={(e) => setSelectedProgram(e.target.value)}
                        className="w-4 h-4 text-[#FC4C03] border-gray-300 focus:ring-[#FC4C03]"
                      />
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <div>
                            <span className="font-medium text-gray-900 capitalize">{program.tier}: </span>
                            <span className="text-[#FC4C03] font-semibold">₹{program.price.toLocaleString()}</span>
                          </div>
                          <div className="relative">
                            <select
                              value={selectedDuration}
                              onChange={(e) => setSelectedDuration(Number(e.target.value))}
                              className="px-3 py-1 border border-gray-300 rounded-md text-sm"
                            >
                              {getDurationOptions().map((duration) => (
                                <option key={duration} value={duration}>
                                  {duration} Months
                                </option>
                              ))}
                            </select>
                          </div>
                        </div>
                      </div>
                    </label>
                  ))}
              </div>
            </div>

            {/* Add-ons */}
            <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
              <div className="p-4 border-b border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900">Add-on Services</h3>
                <p className="text-sm text-gray-600 mt-1">Select one add-on service to enhance your experience</p>
              </div>
              <div className="space-y-4 p-4">
                {addOns.map((addOn) => (
                  <div key={addOn.id} className="border border-gray-200 rounded-lg p-4">
                    <label className="flex items-start space-x-3 cursor-pointer">
                      <input
                        type="radio"
                        name="addon"
                        checked={selectedAddOn === addOn.id}
                        onChange={() => handleAddOnSelect(addOn.id)}
                        className="w-4 h-4 text-[#FC4C03] border-gray-300 focus:ring-[#FC4C03] mt-1"
                      />
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="font-semibold text-gray-900">{addOn.name}</h4>
                          <span className="text-[#FC4C03] font-bold">₹{addOn.price.toLocaleString()}</span>
                        </div>
                        <p className="text-sm text-gray-600 mb-3">{addOn.description}</p>
                        <div className="space-y-1">
                          {addOn.features.map((feature, index) => (
                            <div key={index} className="flex items-center space-x-2">
                              <span className="text-green-500 text-xs">✓</span>
                              <span className="text-xs text-gray-700">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </label>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Program Details & Summary */}
          <div className="space-y-6">
            {/* Selected Program Details */}
            {selectedProgramData && (
              <div className="bg-white rounded-lg border border-gray-200 p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{selectedProgramData.name}</h3>
                <div className="space-y-3">
                  {selectedProgramData.features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <span className="text-green-500">✅</span>
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Selected Add-on Details */}
            {selectedAddOnData && (
              <div className="bg-white rounded-lg border border-gray-200 p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{selectedAddOnData.name}</h3>
                <p className="text-gray-600 mb-4">{selectedAddOnData.description}</p>
                <div className="space-y-2">
                  {selectedAddOnData.features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <span className="text-green-500">✅</span>
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Package Summary */}
            <div className="bg-white rounded-lg border-2 border-[#FC4C03] p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Package Summary</h3>

              <div className="space-y-3 mb-6">
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">{selectedProgramData?.name}:</span>
                  <span className="font-semibold">₹{selectedProgramData?.price.toLocaleString()}</span>
                </div>

                {selectedAddOnData && (
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Add on ({selectedAddOnData.name}):</span>
                    <span className="font-semibold">₹{selectedAddOnData.price.toLocaleString()}</span>
                  </div>
                )}

                <hr className="my-4" />

                <div className="flex justify-between items-center text-lg font-bold">
                  <span>Total</span>
                  <span className="text-[#FC4C03]">₹{calculateTotal().toLocaleString()}</span>
                </div>
              </div>

              <div className="text-xs text-gray-500 mb-4">
                ADD Declaration: I hereby declare that the information provided above is true and correct to the best of
                my knowledge and belief. I understand that any false statement may result in the cancellation of my
                request.
              </div>

              <button
                onClick={handleBuyNow}
                className="w-full bg-[#FC4C03] text-white font-semibold py-3 px-6 rounded-lg hover:bg-[#e63d00] transition-colors"
              >
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProgramSelection
