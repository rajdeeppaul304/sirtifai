"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { PRICING, formatPrice } from "../../lib/pricing"

const CheckIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="currentColor"
    className={`h-5 w-5 flex-shrink-0 ${className}`}
  >
    <path
      fillRule="evenodd"
      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
      clipRule="evenodd"
    />
  </svg>
)

interface FreelancerPlan {
  id: string
  name: string
  price: number
  features: string[]
  popular?: boolean
  earningRange: string
}

interface FreelancerAddOn {
  id: string
  name: string
  price: number
  description: string
  features: string[]
  highlight?: boolean
  badge?: string
}

const freelancerPlans: FreelancerPlan[] = [
  {
    id: "freelancer-basic",
    name: "Basic",
    price: PRICING.FREELANCER_BASIC,
    earningRange: "Earn up to $1,200/Month",
    features: ["1 Paid Project", "Mentor Feedback", "Portfolio Development", "Insurance Backed for Payment"],
  },
  {
    id: "freelancer-pro",
    name: "Pro",
    price: PRICING.FREELANCER_PRO,
    earningRange: "Earn $1,260 – $2,208/Month",
    features: [
      "Team Projects",
      "EPF Benefits",
      "Professional Payroll",
      "Dedicated Support",
      "Insurance Backed for Payment",
    ],
    popular: true,
  },
  {
    id: "freelancer-elite",
    name: "Elite",
    price: PRICING.FREELANCER_ELITE,
    earningRange: "Earn $2,256 – $3,504/Month",
    features: ["Premium Projects", "Complete Legal Pack", "Insurance Backed for Payment", "All Pro Features Included"],
  },
]

const freelancerAddOns: FreelancerAddOn[] = [
  {
    id: "payroll-epf",
    name: "Payroll + EPF",
    price: PRICING.PAYROLL_EPF,
    description: "Get paid like a professional with verified income, payslips, and statutory benefits.",
    features: ["Deel™ Payroll", "International structure for US/UK/Canada clients", "Tax-ready payout"],
  },
  {
    id: "ca-services",
    name: "CA Services",
    price: PRICING.CA_SERVICES,
    description: "Chartered Accountant Support - Manage your income, taxes, and filings with expert CA assistance.",
    features: ["ITR Filing", "GST Filing", "Tax Reports", "Bank reconciliation", "Professional invoicing"],
  },
  {
    id: "legal-support",
    name: "Legal Support",
    price: PRICING.LEGAL_SUPPORT,
    description: "Contract & IP Support - Stay legally protected while working with clients—India or abroad.",
    features: ["NDA Templates", "Service Contract", "IP Safety", "Legal compliance", "Basic dispute advisory"],
  },
  {
    id: "freelancer-shield-combo",
    name: "Freelancer Shield Combo",
    price: PRICING.FREELANCER_SHIELD_COMBO,
    description: "All of the above services in one comprehensive bundle for maximum protection and support.",
    features: ["All Payroll + EPF features", "Complete CA Services", "Full Legal Support", "Priority support"],
    highlight: true,
    badge: "Best Value",
  },
]

const PricingSection: React.FC = () => {
  const router = useRouter()
  const [selectedPlan, setSelectedPlan] = useState<string>("freelancer-pro")
  const [selectedAddOn, setSelectedAddOn] = useState<string>("")
  const [calculatedPricing, setCalculatedPricing] = useState<any>(null)

  const selectedPlanData = freelancerPlans.find((p) => p.id === selectedPlan)

  useEffect(() => {
    if (selectedPlanData) {
      const planTotal = selectedPlanData.price
      const addonTotal = selectedAddOn ? freelancerAddOns.find((a) => a.id === selectedAddOn)?.price || 0 : 0
      const subtotal = planTotal + addonTotal
      const tax = Math.round(subtotal * 0.18)
      const total = subtotal + tax

      setCalculatedPricing({
        planTotal,
        addonTotal,
        subtotal,
        tax,
        total,
      })
    }
  }, [selectedPlan, selectedAddOn, selectedPlanData])

  const handleAddOnChange = (addOnId: string) => {
    setSelectedAddOn(addOnId)
  }

  const handleBuyNow = () => {
    const packageData = {
      selectedProgram: selectedPlan,
      selectedAddOn: selectedAddOn || null,
      selectedAddOns: selectedAddOn ? [selectedAddOn] : [],
      selectedDuration: 1, // One-time payment
      programData: {
        name: selectedPlanData?.name,
        price: selectedPlanData?.price,
        features: selectedPlanData?.features,
      },
      addOnData: selectedAddOn
        ? {
            name: freelancerAddOns.find((a) => a.id === selectedAddOn)?.name,
            price: calculatedPricing?.addonTotal,
          }
        : null,
      pricing: calculatedPricing,
      type: "freelancer",
    }

    localStorage.setItem("selectedPackage", JSON.stringify(packageData))
    router.push("/application")
  }

  return (
    <section className="min-h-screen w-screen bg-[#FEF7F1] py-8 md:py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-[30px] md:text-[60px] font-[600] text-black">One-Time Payment. Monthly Earnings.</h1>
          <p className="text-[#4B5563] text-base max-w-[538px] mx-auto mt-4">
            Choose your freelancer plan and add optional services for complete professional support.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column - Plan Selection and Add-ons */}
          <div className="space-y-6">
            {/* Plan Selection */}
            <div className="bg-white rounded-lg border border-gray-200">
              <div className="p-4 border-b border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900">Select Your Freelancer Plan</h3>
              </div>
              <div className="space-y-3 p-4">
                {freelancerPlans.map((plan) => (
                  <label
                    key={plan.id}
                    className="flex items-center space-x-3 cursor-pointer p-3 rounded-lg hover:bg-gray-50"
                  >
                    <input
                      type="radio"
                      name="plan"
                      value={plan.id}
                      checked={selectedPlan === plan.id}
                      onChange={(e) => setSelectedPlan(e.target.value)}
                      className="w-4 h-4 text-[#FC4C03] border-gray-300 focus:ring-[#FC4C03]"
                    />
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <div>
                          <span className="font-medium text-gray-900">{plan.name}: </span>
                          <span className="text-[#FC4C03] font-semibold">{formatPrice(plan.price)} one-time</span>
                          {plan.popular && (
                            <span className="ml-2 bg-[#FF6A2D] text-white text-xs px-2 py-1 rounded">Most Popular</span>
                          )}
                        </div>
                      </div>
                      <p className="text-sm text-gray-600 mt-1">{plan.earningRange}</p>
                    </div>
                  </label>
                ))}
              </div>
            </div>

            {/* Add-ons Selection */}
            <div className="bg-white rounded-lg border border-gray-200">
              <div className="p-4 border-b border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900">Optional Add-On Service</h3>
                <p className="text-sm text-gray-600 mt-1">
                  Choose one add-on service to enhance your freelancer experience
                </p>
              </div>
              <div className="p-4 space-y-4">
                <div
                  className={`border rounded-lg p-4 cursor-pointer transition-all ${
                    selectedAddOn === "" ? "border-[#FC4C03] bg-[#FBF2EE]" : "border-gray-200 hover:border-gray-300"
                  }`}
                  onClick={() => handleAddOnChange("")}
                >
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center space-x-3">
                      <input
                        type="radio"
                        name="addon"
                        value=""
                        checked={selectedAddOn === ""}
                        onChange={() => handleAddOnChange("")}
                        className="w-4 h-4 text-[#FC4C03] border-gray-300 focus:ring-[#FC4C03]"
                      />
                      <h4 className="font-medium text-gray-900">No Add-on</h4>
                    </div>
                    <div className="text-right">
                      <span className="text-[#FC4C03] font-bold">$0</span>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600">Continue with just the freelancer plan</p>
                </div>

                {freelancerAddOns.map((addOn) => (
                  <div
                    key={addOn.id}
                    className={`border rounded-lg p-4 cursor-pointer transition-all ${
                      selectedAddOn === addOn.id
                        ? "border-[#FC4C03] bg-[#FBF2EE]"
                        : addOn.highlight
                          ? "border-[#FF6A2D] bg-[#FBF2EE]"
                          : "border-gray-200 hover:border-gray-300"
                    }`}
                    onClick={() => handleAddOnChange(addOn.id)}
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-center space-x-3">
                        <input
                          type="radio"
                          name="addon"
                          value={addOn.id}
                          checked={selectedAddOn === addOn.id}
                          onChange={() => handleAddOnChange(addOn.id)}
                          className="w-4 h-4 text-[#FC4C03] border-gray-300 focus:ring-[#FC4C03]"
                        />
                        <h4 className="font-medium text-gray-900">{addOn.name}</h4>
                      </div>
                      <div className="text-right">
                        <span className="text-[#FC4C03] font-bold">{formatPrice(addOn.price)}</span>
                        {addOn.highlight && addOn.badge && (
                          <div className="mt-1">
                            <span className="bg-[#0F2533] text-white text-xs px-2 py-1 rounded">{addOn.badge}</span>
                          </div>
                        )}
                      </div>
                    </div>
                    <p className="text-sm text-gray-600 mb-2">{addOn.description}</p>
                    <div className="space-y-1">
                      {addOn.features.slice(0, 3).map((feature, index) => (
                        <div key={index} className="flex items-center space-x-2">
                          <span className="text-green-500 text-xs">✓</span>
                          <span className="text-xs text-gray-600">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Plan Details & Summary */}
          <div className="space-y-6">
            {/* Selected Plan Details */}
            {selectedPlanData && (
              <div className="bg-white rounded-lg border border-gray-200 p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{selectedPlanData.name} Plan Details</h3>
                <div className="space-y-3 mb-4">
                  {selectedPlanData.features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <CheckIcon className="text-[#FF6A2D]" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
                <div className="bg-[#FBF2EE] rounded-lg p-3">
                  <p className="text-sm font-medium text-[#FC4C03]">{selectedPlanData.earningRange}</p>
                </div>
              </div>
            )}

            {/* Selected Add-on Details */}
            {selectedAddOn && (
              <div className="bg-white rounded-lg border border-gray-200 p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Selected Add-On Service</h3>
                <div className="space-y-3">
                  {(() => {
                    const addOn = freelancerAddOns.find((a) => a.id === selectedAddOn)
                    return addOn ? (
                      <div className="border-l-4 border-[#FC4C03] pl-4">
                        <div className="flex justify-between items-start mb-2">
                          <h4 className="font-medium text-gray-900">{addOn.name}</h4>
                          <span className="text-[#FC4C03] font-semibold">{formatPrice(addOn.price)}</span>
                        </div>
                        <p className="text-sm text-gray-600">{addOn.description}</p>
                      </div>
                    ) : null
                  })()}
                </div>
              </div>
            )}

            {/* Package Summary */}
            <div className="bg-white rounded-lg border-2 border-[#FC4C03] p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Package Summary</h3>

              {calculatedPricing && (
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">{selectedPlanData?.name} Plan:</span>
                    <span className="font-semibold">{formatPrice(calculatedPricing.planTotal)}</span>
                  </div>

                  {calculatedPricing.addonTotal > 0 && (
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700">Add-on Service:</span>
                      <span className="font-semibold">{formatPrice(calculatedPricing.addonTotal)}</span>
                    </div>
                  )}

                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Subtotal:</span>
                    <span className="font-semibold">{formatPrice(calculatedPricing.subtotal)}</span>
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Tax (18%):</span>
                    <span className="font-semibold">{formatPrice(calculatedPricing.tax)}</span>
                  </div>

                  <hr className="my-4" />

                  <div className="flex justify-between items-center text-lg font-bold">
                    <span>Total Amount</span>
                    <span className="text-[#FC4C03]">{formatPrice(calculatedPricing.total)}</span>
                  </div>
                </div>
              )}

              <button
                onClick={handleBuyNow}
                className="w-full bg-[#FC4C03] text-white font-semibold py-3 px-6 rounded-lg hover:bg-[#e63d00] transition-colors"
              >
                Buy Now - Complete Application
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PricingSection
