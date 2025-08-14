"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { Upload } from "lucide-react"
import RazorpayCheckout from "../../payment/razorpay-checkout"

interface FormData {
  // Personal Details
  fullName: string
  dateOfBirth: {
    day: string
    month: string
    year: string
  }
  countryOfCitizenship: string
  referralCode: string

  // Contact Information
  primaryPhone: string
  secondaryPhone: string
  whatsappNotifications: boolean
  email: string
  residentialAddress: string
  city: string
  state: string
  zipCode: string
  country: string

  // Education
  highestQualification: string
  specialization: string

  // Professional
  currentProfession: string
  currentOrganization: string
  linkedinProfile: string

  // Identity Document
  idType: string
  idNumber: string
  idDocument: File | null
  studentPhoto: File | null

  // Confirmation
  agreedToTerms: boolean
  certifiedInformation: boolean
}

const ApplicationForm = () => {
  const [selectedPackage, setSelectedPackage] = useState<any>(null)
  const [formData, setFormData] = useState<FormData>({
    // Personal Details
    fullName: "",
    dateOfBirth: { day: "", month: "", year: "" },
    countryOfCitizenship: "",
    referralCode: "",

    // Contact Information
    primaryPhone: "",
    secondaryPhone: "",
    whatsappNotifications: false,
    email: "",
    residentialAddress: "",
    city: "",
    state: "",
    zipCode: "",
    country: "",

    // Education
    highestQualification: "",
    specialization: "",

    // Professional
    currentProfession: "",
    currentOrganization: "",
    linkedinProfile: "",

    // Identity Document
    idType: "",
    idNumber: "",
    idDocument: null,
    studentPhoto: null,

    // Confirmation
    agreedToTerms: false,
    certifiedInformation: false,
  })

  useEffect(() => {
    // Load selected package from localStorage
    const packageData = localStorage.getItem("selectedPackage")
    if (packageData) {
      setSelectedPackage(JSON.parse(packageData))
    }
  }, [])

  const handleInputChange = (field: string, value: any) => {
    if (field.includes(".")) {
      const [parent, child] = field.split(".")
      setFormData((prev) => ({
        ...prev,
        [parent]: {
          ...(prev as any)[parent],
          [child]: value,
        },
      }))
    } else {
      setFormData((prev) => ({
        ...prev,
        [field]: value,
      }))
    }
  }

  const handleFileUpload = (field: string, event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0] || null
    handleInputChange(field, file)
  }

  const handlePaymentSuccess = (paymentData: any) => {
    console.log("Payment successful:", paymentData)
  }

  const handlePaymentError = (error: any) => {
    console.error("Payment failed:", error)
    alert("Payment failed. Please try again.")
  }

  return (
    <div className="min-h-screen bg-[#FEF7F1] py-8">
      <div className="max-w-4xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center mb-4">
            <div className="w-8 h-8 bg-[#FC4C03] rounded-sm flex items-center justify-center mr-3">
              <span className="text-white font-bold text-lg">S</span>
            </div>
            <h1 className="text-2xl font-bold text-[#FC4C03]">SIRTIFAI - Programme Application</h1>
          </div>
        </div>

        {/* Single Page Form with Sections */}
        <div className="bg-white rounded-lg shadow-lg p-8 space-y-8">
          {/* Personal Details */}
          <section>
            <h2 className="text-lg font-semibold text-[#FC4C03] mb-4">Personal Details</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-1">Full Legal Name</label>
                <input
                  type="text"
                  value={formData.fullName}
                  onChange={(e) => handleInputChange("fullName", e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#FC4C03] focus:border-transparent"
                  placeholder="Daniel Brown"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Date of Birth</label>
                <div className="grid grid-cols-3 gap-2">
                  <input
                    type="text"
                    placeholder="DD"
                    value={formData.dateOfBirth.day}
                    onChange={(e) => handleInputChange("dateOfBirth.day", e.target.value)}
                    className="px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#FC4C03] focus:border-transparent"
                  />
                  <input
                    type="text"
                    placeholder="MM"
                    value={formData.dateOfBirth.month}
                    onChange={(e) => handleInputChange("dateOfBirth.month", e.target.value)}
                    className="px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#FC4C03] focus:border-transparent"
                  />
                  <input
                    type="text"
                    placeholder="YYYY"
                    value={formData.dateOfBirth.year}
                    onChange={(e) => handleInputChange("dateOfBirth.year", e.target.value)}
                    className="px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#FC4C03] focus:border-transparent"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Country of Citizenship</label>
                <input
                  type="text"
                  value={formData.countryOfCitizenship}
                  onChange={(e) => handleInputChange("countryOfCitizenship", e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#FC4C03] focus:border-transparent"
                  placeholder="danielbrown@gmail.com"
                />
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-1">Referral Code (optional)</label>
                <input
                  type="text"
                  value={formData.referralCode}
                  onChange={(e) => handleInputChange("referralCode", e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#FC4C03] focus:border-transparent"
                  placeholder="eg:HUTTY720"
                />
              </div>
            </div>
          </section>

          {/* Contact Information */}
          <section>
            <h2 className="text-lg font-semibold text-[#FC4C03] mb-4">Contact Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Primary Phone Number</label>
                <input
                  type="tel"
                  value={formData.primaryPhone}
                  onChange={(e) => handleInputChange("primaryPhone", e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#FC4C03] focus:border-transparent"
                  placeholder="+91 7888089345"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Secondary Phone Number</label>
                <input
                  type="tel"
                  value={formData.secondaryPhone}
                  onChange={(e) => handleInputChange("secondaryPhone", e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#FC4C03] focus:border-transparent"
                  placeholder="+91 7888089345"
                />
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Do you want WhatsApp for notifications?
                </label>
                <div className="flex items-center space-x-4">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="whatsapp"
                      checked={formData.whatsappNotifications === true}
                      onChange={() => handleInputChange("whatsappNotifications", true)}
                      className="w-4 h-4 text-[#FC4C03] border-gray-300 focus:ring-[#FC4C03]"
                    />
                    <span className="ml-2 text-sm text-gray-700">Yes</span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="whatsapp"
                      checked={formData.whatsappNotifications === false}
                      onChange={() => handleInputChange("whatsappNotifications", false)}
                      className="w-4 h-4 text-[#FC4C03] border-gray-300 focus:ring-[#FC4C03]"
                    />
                    <span className="ml-2 text-sm text-gray-700">No</span>
                  </label>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email (Primary)</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#FC4C03] focus:border-transparent"
                  placeholder="danielbrown@gmail.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Residential Address</label>
                <input
                  type="text"
                  value={formData.residentialAddress}
                  onChange={(e) => handleInputChange("residentialAddress", e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#FC4C03] focus:border-transparent"
                  placeholder="985/bkmini cAsomgs"
                />
              </div>

              <div className="grid grid-cols-4 gap-2">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">City</label>
                  <input
                    type="text"
                    value={formData.city}
                    onChange={(e) => handleInputChange("city", e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#FC4C03] focus:border-transparent"
                    placeholder="Indore"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">State</label>
                  <input
                    type="text"
                    value={formData.state}
                    onChange={(e) => handleInputChange("state", e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#FC4C03] focus:border-transparent"
                    placeholder="Mp"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Zip</label>
                  <input
                    type="text"
                    value={formData.zipCode}
                    onChange={(e) => handleInputChange("zipCode", e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#FC4C03] focus:border-transparent"
                    placeholder="453000"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Country</label>
                  <input
                    type="text"
                    value={formData.country}
                    onChange={(e) => handleInputChange("country", e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#FC4C03] focus:border-transparent"
                    placeholder="India"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Education */}
          <section>
            <h2 className="text-lg font-semibold text-[#FC4C03] mb-4">Education</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Highest Qualification</label>
                <input
                  type="text"
                  value={formData.highestQualification}
                  onChange={(e) => handleInputChange("highestQualification", e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#FC4C03] focus:border-transparent"
                  placeholder="graduate"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Specialization</label>
                <input
                  type="text"
                  value={formData.specialization}
                  onChange={(e) => handleInputChange("specialization", e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#FC4C03] focus:border-transparent"
                  placeholder="Science"
                />
              </div>
            </div>
          </section>

          {/* Professional */}
          <section>
            <h2 className="text-lg font-semibold text-[#FC4C03] mb-4">Professional</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Current Profession</label>
                <input
                  type="text"
                  value={formData.currentProfession}
                  onChange={(e) => handleInputChange("currentProfession", e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#FC4C03] focus:border-transparent"
                  placeholder="graduate"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Current Organisation</label>
                <input
                  type="text"
                  value={formData.currentOrganization}
                  onChange={(e) => handleInputChange("currentOrganization", e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#FC4C03] focus:border-transparent"
                  placeholder="Science"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">LinkedIn</label>
                <input
                  type="url"
                  value={formData.linkedinProfile}
                  onChange={(e) => handleInputChange("linkedinProfile", e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#FC4C03] focus:border-transparent"
                  placeholder="Science"
                />
              </div>
            </div>
          </section>

          {/* Program Summary */}
          <section>
            <h2 className="text-lg font-semibold text-[#FC4C03] mb-4">Select the Program</h2>
            {selectedPackage ? (
              <div className="bg-gray-50 rounded-lg p-4">
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">{selectedPackage.programData?.name}</span>
                    <span className="text-gray-600">
                      ₹{selectedPackage.programData?.price.toLocaleString()} × {selectedPackage.selectedDuration} months
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Program Total:</span>
                    <span className="font-semibold">₹{selectedPackage.pricing?.programTotal.toLocaleString()}</span>
                  </div>
                  {selectedPackage.addOnData && (
                    <>
                      <div className="flex justify-between items-center">
                        <span className="text-sm">Add-on: {selectedPackage.addOnData.name}</span>
                        <span className="font-semibold">₹{selectedPackage.pricing?.addonTotal.toLocaleString()}</span>
                      </div>
                    </>
                  )}
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Subtotal:</span>
                    <span className="font-semibold">₹{selectedPackage.pricing?.subtotal.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">GST (18%):</span>
                    <span className="font-semibold">₹{selectedPackage.pricing?.gst.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between items-center font-bold text-[#FC4C03]">
                    <span>Total Amount:</span>
                    <span>₹{selectedPackage.pricing?.total.toLocaleString()}</span>
                  </div>
                </div>
              </div>
            ) : (
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                <p className="text-yellow-800">No program selected. Please go back to select a program.</p>
              </div>
            )}
          </section>

          {/* Identity Document */}
          <section>
            <h2 className="text-lg font-semibold text-[#FC4C03] mb-4">Identity Document</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">ID Type</label>
                <input
                  type="text"
                  value={formData.idType}
                  onChange={(e) => handleInputChange("idType", e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#FC4C03] focus:border-transparent"
                  placeholder="E.g. Passport"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">ID Number</label>
                <input
                  type="text"
                  value={formData.idNumber}
                  onChange={(e) => handleInputChange("idNumber", e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#FC4C03] focus:border-transparent"
                  placeholder="777-888-444-11"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Upload ID Document</label>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center hover:border-[#FC4C03] transition-colors">
                  <Upload className="mx-auto h-8 w-8 text-gray-400" />
                  <div className="mt-2">
                    <label className="cursor-pointer">
                      <span className="text-sm font-medium text-gray-900">Upload PDF/Doc</span>
                      <input
                        type="file"
                        className="hidden"
                        accept=".pdf,.doc,.docx"
                        onChange={(e) => handleFileUpload("idDocument", e)}
                      />
                    </label>
                  </div>
                  {formData.idDocument && (
                    <p className="mt-1 text-xs text-green-600">File selected: {formData.idDocument.name}</p>
                  )}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Upload Photo (Passport - Size )</label>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center hover:border-[#FC4C03] transition-colors">
                  <Upload className="mx-auto h-8 w-8 text-gray-400" />
                  <div className="mt-2">
                    <label className="cursor-pointer">
                      <span className="text-sm font-medium text-gray-900">Upload PDF/Doc</span>
                      <input
                        type="file"
                        className="hidden"
                        accept="image/*"
                        onChange={(e) => handleFileUpload("studentPhoto", e)}
                      />
                    </label>
                  </div>
                  {formData.studentPhoto && (
                    <p className="mt-1 text-xs text-green-600">File selected: {formData.studentPhoto.name}</p>
                  )}
                </div>
              </div>
            </div>
          </section>

          {/* Confirmation */}
          <section>
            <h2 className="text-lg font-semibold text-[#FC4C03] mb-4">Confirmation</h2>
            <div className="space-y-4">
              <label className="flex items-start space-x-3">
                <input
                  type="checkbox"
                  checked={formData.agreedToTerms}
                  onChange={(e) => handleInputChange("agreedToTerms", e.target.checked)}
                  className="w-4 h-4 text-[#FC4C03] border-gray-300 rounded focus:ring-[#FC4C03] mt-1"
                />
                <span className="text-sm text-gray-700">
                  I have reviewed and understand the membership benefits, features, and services.
                </span>
              </label>

              <label className="flex items-start space-x-3">
                <input
                  type="checkbox"
                  checked={formData.certifiedInformation}
                  onChange={(e) => handleInputChange("certifiedInformation", e.target.checked)}
                  className="w-4 h-4 text-[#FC4C03] border-gray-300 rounded focus:ring-[#FC4C03] mt-1"
                />
                <span className="text-sm text-gray-700">
                  I agree to the terms, community guidelines, and privacy policy.
                </span>
              </label>

              <div className="mt-4">
                <p className="text-sm text-gray-700 mb-2">
                  I certify that all information provided is true and accurate.
                </p>
                <div className="flex items-center space-x-4">
                  <div>
                    <label className="block text-xs text-gray-500 mb-1">Signature</label>
                    <div className="border-b border-gray-300 w-32 h-8"></div>
                  </div>
                  <div>
                    <label className="block text-xs text-gray-500 mb-1">Date</label>
                    <div className="border-b border-gray-300 w-24 h-8 flex items-end">
                      <span className="text-sm text-gray-600">__/__/__</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Payment Section */}
          {selectedPackage && (
            <section className="border-t pt-8">
              <div className="bg-white border-2 border-[#FC4C03] rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Payment Summary</h3>

                <div className="space-y-3 mb-6">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">
                      {selectedPackage.programData?.name} ({selectedPackage.selectedDuration} months):
                    </span>
                    <span className="font-semibold">₹{selectedPackage.pricing?.programTotal.toLocaleString()}</span>
                  </div>

                  {selectedPackage.addOnData && (
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700">Add on ({selectedPackage.addOnData.name}):</span>
                      <span className="font-semibold">₹{selectedPackage.pricing?.addonTotal.toLocaleString()}</span>
                    </div>
                  )}

                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Subtotal:</span>
                    <span className="font-semibold">₹{selectedPackage.pricing?.subtotal.toLocaleString()}</span>
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">GST (18%):</span>
                    <span className="font-semibold">₹{selectedPackage.pricing?.gst.toLocaleString()}</span>
                  </div>

                  <hr className="my-4" />

                  <div className="flex justify-between items-center text-lg font-bold">
                    <span>Total Amount</span>
                    <span className="text-[#FC4C03]">₹{selectedPackage.pricing?.total.toLocaleString()}</span>
                  </div>
                </div>

                <RazorpayCheckout
                  selectedProgram={selectedPackage.selectedProgram}
                  selectedMonths={selectedPackage.selectedDuration}
                  selectedAddon={selectedPackage.selectedAddOn}
                  studentData={formData}
                  onSuccess={handlePaymentSuccess}
                  onError={handlePaymentError}
                />
              </div>
            </section>
          )}
        </div>
      </div>
    </div>
  )
}

export default ApplicationForm
