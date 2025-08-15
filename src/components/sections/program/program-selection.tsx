"use client"

import { useState, useEffect } from "react"
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
  const [showSkillDropdown, setShowSkillDropdown] = useState(false)
  const [showPracticeDropdown, setShowPracticeDropdown] = useState<string>("")
  const [showProgressDropdown, setShowProgressDropdown] = useState<string>("")
  const [calculatedPricing, setCalculatedPricing] = useState<any>(null)
  const [showAddOnSuggestion, setShowAddOnSuggestion] = useState(false)

  const selectedProgramData = programOptions.find((p) => p.id === selectedProgram)
  const selectedAddOnData = addOns.find((a) => a.id === selectedAddOn)

  useEffect(() => {
    if (selectedProgramData) {
      const validDurations = getDurationOptions()
      if (!validDurations.includes(selectedDuration)) {
        // Reset to first valid duration (3 for skill/practice, 1 for progress)
        setSelectedDuration(selectedProgramData.category === "progress" ? 1 : 3)
      }
    }
  }, [selectedProgram])

  useEffect(() => {
    if (selectedProgramData) {
      const programTotal = selectedProgramData.price * selectedDuration
      const addonTotal = selectedAddOnData?.price || 0
      const subtotal = programTotal + addonTotal
      const gst = Math.round(subtotal * 0.18)
      const total = subtotal + gst

      setCalculatedPricing({
        programTotal,
        addonTotal,
        subtotal,
        gst,
        total,
      })
    }
  }, [selectedProgram, selectedDuration, selectedAddOn, selectedProgramData, selectedAddOnData])

  const getDurationOptions = (programId?: string) => {
    const program = programId ? programOptions.find((p) => p.id === programId) : selectedProgramData
    if (!program) return []

    if (program.category === "progress") {
      return Array.from({ length: 12 }, (_, i) => i + 1)
    }
    return [3, 6]
  }

  const handleAddOnSelect = (addOnId: string) => {
    setSelectedAddOn(selectedAddOn === addOnId ? "" : addOnId)
  }

  const handleBuyNow = () => {
    if (!selectedAddOn) {
      setShowAddOnSuggestion(true)
      return
    }

    proceedToPurchase()
  }

  const proceedToPurchase = () => {
    const packageData = {
      selectedProgram,
      selectedDuration,
      selectedAddOn,
      programData: selectedProgramData,
      addOnData: selectedAddOnData,
      pricing: calculatedPricing,
    }

    localStorage.setItem("selectedPackage", JSON.stringify(packageData))
    router.push("/application")
  }

  const continueWithoutAddOn = () => {
    setShowAddOnSuggestion(false)
    proceedToPurchase()
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
            <div className="bg-white rounded-lg border border-gray-200  ">
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
                      <span className="font-medium text-gray-900">Rs.5999 per month</span>
                      <div className="relative">
                        <button
                          onClick={() => setShowSkillDropdown(!showSkillDropdown)}
                          className="flex items-center space-x-2 px-3 py-1 border border-gray-300 rounded-md text-sm"
                        >
                          <span>{selectedDuration} Months</span>
                          <ChevronDown className="w-4 h-4" />
                        </button>
                        {showSkillDropdown && (
                          <div className="absolute right-0 mt-1 bg-white border border-gray-300 rounded-md shadow-lg z-10 min-w-[120px]">
                            {getDurationOptions("skill").map((duration) => (
                              <button
                                key={duration}
                                onClick={() => {
                                  setSelectedDuration(duration)
                                  setShowSkillDropdown(false)
                                }}
                                className="block w-full px-4 py-2 text-left hover:bg-gray-50 text-sm"
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
            <div className="bg-white rounded-lg border border-gray-200  ">
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
                            <span className="text-[#FC4C03] font-semibold">
                              ₹{program.price.toLocaleString()} per month
                            </span>
                          </div>
                          <div className="relative">
                            <button
                              onClick={() =>
                                setShowPracticeDropdown(showPracticeDropdown === program.id ? "" : program.id)
                              }
                              className="flex items-center space-x-2 px-3 py-1 border border-gray-300 rounded-md text-sm"
                            >
                              <span>{selectedDuration} Months</span>
                              <ChevronDown className="w-4 h-4" />
                            </button>
                            {showPracticeDropdown === program.id && (
                              <div className="absolute right-0 mt-1 bg-white border border-gray-300 rounded-md shadow-lg z-10 min-w-[120px]">
                                {getDurationOptions(program.id).map((duration) => (
                                  <button
                                    key={duration}
                                    onClick={() => {
                                      setSelectedDuration(duration)
                                      setShowPracticeDropdown("")
                                    }}
                                    className="block w-full px-4 py-2 text-left hover:bg-gray-50 text-sm"
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
            <div className="bg-white rounded-lg border border-gray-200  ">
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
                            <span className="text-[#FC4C03] font-semibold">
                              ₹{program.price.toLocaleString()} per month
                            </span>
                          </div>
                          <div className="relative">
                            <button
                              onClick={() =>
                                setShowProgressDropdown(showProgressDropdown === program.id ? "" : program.id)
                              }
                              className="flex items-center space-x-2 px-3 py-1 border border-gray-300 rounded-md text-sm"
                            >
                              <span>{selectedDuration} Months</span>
                              <ChevronDown className="w-4 h-4" />
                            </button>
                            {showProgressDropdown === program.id && (
                              <div className="absolute right-0 mt-1 bg-white border border-gray-300 rounded-md shadow-lg z-10 min-w-[120px] max-h-48 overflow-y-auto">
                                {getDurationOptions(program.id).map((duration) => (
                                  <button
                                    key={duration}
                                    onClick={() => {
                                      setSelectedDuration(duration)
                                      setShowProgressDropdown("")
                                    }}
                                    className="block w-full px-4 py-2 text-left hover:bg-gray-50 text-sm"
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

            {/* Add-ons */}
            <div className="bg-white rounded-lg border border-gray-200  ">
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

              {calculatedPricing && (
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">
                      {selectedProgramData?.name} ({selectedDuration} months):
                    </span>
                    <span className="font-semibold">₹{calculatedPricing.programTotal.toLocaleString()}</span>
                  </div>

                  {selectedAddOnData && (
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700">Add on ({selectedAddOnData.name}):</span>
                      <span className="font-semibold">₹{calculatedPricing.addonTotal.toLocaleString()}</span>
                    </div>
                  )}

                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Subtotal:</span>
                    <span className="font-semibold">₹{calculatedPricing.subtotal.toLocaleString()}</span>
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">GST (18%):</span>
                    <span className="font-semibold">₹{calculatedPricing.gst.toLocaleString()}</span>
                  </div>

                  <hr className="my-4" />

                  <div className="flex justify-between items-center text-lg font-bold">
                    <span>Total</span>
                    <span className="text-[#FC4C03]">₹{calculatedPricing.total.toLocaleString()}</span>
                  </div>
                </div>
              )}

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

        {/* Add-on suggestion modal */}
        {showAddOnSuggestion && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg p-6 max-w-md mx-4">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Enhance Your Experience!</h3>
              <p className="text-gray-600 mb-6">
                We noticed you haven't selected any add-on services. Our add-ons can significantly enhance your learning
                experience with professional support, legal assistance, and career services. Would you like to review
                them?
              </p>
              <div className="flex space-x-3">
                <button
                  onClick={() => setShowAddOnSuggestion(false)}
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
                >
                  Let me choose
                </button>
                <button
                  onClick={continueWithoutAddOn}
                  className="flex-1 px-4 py-2 bg-[#FC4C03] text-white rounded-md hover:bg-[#e63d00]"
                >
                  Continue without add-on
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

export default ProgramSelection
