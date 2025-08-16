"use client"

import { useState, useEffect, useRef } from "react"
import { ChevronDown } from "lucide-react"
import { useRouter } from "next/navigation"
import {
  getProgramAddons,
  getSkillPhaseProducts,
  getPracticePhaseProducts,
  getProgressPhaseProducts,
  createStandardizedPackageData,
  getProductPrice,
} from "../../../lib/products"
import { calculatePricing } from "../../../lib/pricing"

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

const ProgramSelection = () => {
  const router = useRouter()
  const [selectedProgram, setSelectedProgram] = useState<string>("skill-phase")
  const [programDurations, setProgramDurations] = useState<Record<string, number>>({
    "skill-phase": 3,
    "practice-basic": 3,
    "practice-pro": 3,
    "practice-elite": 3,
    "progress-basic": 1,
    "progress-pro": 1,
    "progress-elite": 1,
  })
  const [selectedAddOn, setSelectedAddOn] = useState<string>("")
  const [openDropdown, setOpenDropdown] = useState<string>("")
  const [calculatedPricing, setCalculatedPricing] = useState<any>(null)
  const [showAddOnSuggestion, setShowAddOnSuggestion] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  const skillPhaseProducts = getSkillPhaseProducts()
  const practicePhaseProducts = getPracticePhaseProducts()
  const progressPhaseProducts = getProgressPhaseProducts()
  const addonProducts = getProgramAddons()

  const selectedProgramData = [...skillPhaseProducts, ...practicePhaseProducts, ...progressPhaseProducts].find(
    (p) => p.id === selectedProgram,
  )
  const selectedAddOnData = addonProducts.find((a) => a.id === selectedAddOn)
  const currentDuration = programDurations[selectedProgram] || 3

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setOpenDropdown("")
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  useEffect(() => {
    if (selectedProgramData) {
      const pricing = calculatePricing(selectedProgram, selectedAddOn || null, currentDuration)
      setCalculatedPricing(pricing)
    }
  }, [selectedProgram, currentDuration, selectedAddOn, selectedProgramData, selectedAddOnData])

  const getDurationOptions = (programId: string) => {
    const product = [...skillPhaseProducts, ...practicePhaseProducts, ...progressPhaseProducts].find(
      (p) => p.id === programId,
    )
    if (!product) return []

    if (programId.startsWith("progress-")) {
      return Array.from({ length: 12 }, (_, i) => i + 1)
    }
    return [3, 6]
  }

  const handleDurationChange = (programId: string, duration: number) => {
    setProgramDurations((prev) => ({
      ...prev,
      [programId]: duration,
    }))
    setOpenDropdown("")
  }

  const handleDropdownToggle = (programId: string) => {
    setOpenDropdown(openDropdown === programId ? "" : programId)
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
    const packageData = createStandardizedPackageData(
      "program",
      selectedProgram,
      selectedAddOn || null,
      currentDuration,
    )

    localStorage.setItem("selectedPackage", JSON.stringify(packageData))
    router.push("/application")
  }

  const continueWithoutAddOn = () => {
    setShowAddOnSuggestion(false)
    proceedToPurchase()
  }

  return (
    <section className="min-h-screen w-screen bg-[#FEF7F1] py-8 md:py-16">
      <div className="max-w-7xl mx-auto px-4" ref={dropdownRef}>
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
            <div className="bg-white rounded-lg border border-gray-200">
              <div className="p-4 border-b border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900">Skill Phase</h3>
              </div>
              <div className="p-4">
                {skillPhaseProducts.map((program) => (
                  <label key={program.id} className="flex items-center space-x-3 cursor-pointer">
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
                        <span className="font-medium text-gray-900">${getProductPrice(program)} per month</span>
                        <div className="relative">
                          <button
                            onClick={() => handleDropdownToggle(program.id)}
                            className="flex items-center space-x-2 px-3 py-1 border border-gray-300 rounded-md text-sm"
                          >
                            <span>{programDurations[program.id]} Months</span>
                            <ChevronDown className="w-4 h-4" />
                          </button>
                          {openDropdown === program.id && (
                            <div className="absolute right-0 mt-1 bg-white border border-gray-300 rounded-md shadow-lg z-10 min-w-[120px]">
                              {getDurationOptions(program.id).map((duration) => (
                                <button
                                  key={duration}
                                  onClick={() => handleDurationChange(program.id, duration)}
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

            {/* Practice Phase */}
            <div className="bg-white rounded-lg border border-gray-200">
              <div className="p-4 border-b border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900">Practice Phase (Your Selected Plan)</h3>
              </div>
              <div className="space-y-3 p-4">
                {practicePhaseProducts.map((program) => (
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
                          <span className="font-medium text-gray-900 capitalize">
                            {program.name.replace("Practice Phase - ", "")}:
                          </span>
                          <span className="text-[#FC4C03] font-semibold">${getProductPrice(program)} per month</span>
                        </div>
                        <div className="relative">
                          <button
                            onClick={() => handleDropdownToggle(program.id)}
                            className="flex items-center space-x-2 px-3 py-1 border border-gray-300 rounded-md text-sm"
                          >
                            <span>{programDurations[program.id]} Months</span>
                            <ChevronDown className="w-4 h-4" />
                          </button>
                          {openDropdown === program.id && (
                            <div className="absolute right-0 mt-1 bg-white border border-gray-300 rounded-md shadow-lg z-10 min-w-[120px]">
                              {getDurationOptions(program.id).map((duration) => (
                                <button
                                  key={duration}
                                  onClick={() => handleDurationChange(program.id, duration)}
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
            <div className="bg-white rounded-lg border border-gray-200">
              <div className="p-4 border-b border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900">Progress Phase</h3>
              </div>
              <div className="space-y-3 p-4">
                {progressPhaseProducts.map((program) => (
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
                          <span className="font-medium text-gray-900 capitalize">
                            {program.name.replace("Progress Phase - ", "")}:
                          </span>
                          <span className="text-[#FC4C03] font-semibold">${getProductPrice(program)} per month</span>
                        </div>
                        <div className="relative">
                          <button
                            onClick={() => handleDropdownToggle(program.id)}
                            className="flex items-center space-x-2 px-3 py-1 border border-gray-300 rounded-md text-sm"
                          >
                            <span>{programDurations[program.id]} Months</span>
                            <ChevronDown className="w-4 h-4" />
                          </button>
                          {openDropdown === program.id && (
                            <div className="absolute right-0 mt-1 bg-white border border-gray-300 rounded-md shadow-lg z-10 min-w-[120px] max-h-48 overflow-y-auto">
                              {getDurationOptions(program.id).map((duration) => (
                                <button
                                  key={duration}
                                  onClick={() => handleDurationChange(program.id, duration)}
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
            <div className="bg-white rounded-lg border border-gray-200">
              <div className="p-4 border-b border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900">Add-on Services</h3>
                <p className="text-sm text-gray-600 mt-1">Select one add-on service to enhance your experience</p>
              </div>
              <div className="space-y-4 p-4">
                {addonProducts.map((addOn) => (
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
                          <span className="text-[#FC4C03] font-bold">${addOn.price.toLocaleString()}</span>
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
                      {selectedProgramData?.name} ({currentDuration} months):
                    </span>
                    <span className="font-semibold">${calculatedPricing.programPrice.toLocaleString()}</span>
                  </div>

                  {selectedAddOnData && (
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700">Add on ({selectedAddOnData.name}):</span>
                      <span className="font-semibold">${calculatedPricing.addonPrice.toLocaleString()}</span>
                    </div>
                  )}

                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Subtotal:</span>
                    <span className="font-semibold">${calculatedPricing.subtotal.toLocaleString()}</span>
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Tax (18%):</span>
                    <span className="font-semibold">${calculatedPricing.gst.toLocaleString()}</span>
                  </div>

                  <hr className="my-4" />

                  <div className="flex justify-between items-center text-lg font-bold">
                    <span>Total</span>
                    <span className="text-[#FC4C03]">${calculatedPricing.total.toLocaleString()}</span>
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
