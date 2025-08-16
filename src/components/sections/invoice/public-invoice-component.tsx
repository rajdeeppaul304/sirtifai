"use client"

import { useState, useEffect } from "react"
import { Button } from "../../ui/Button"
import { Download, Printer, Mail } from "lucide-react"
import { getProductById } from "../../../lib/products"

interface ApiResponse {
  invoice: {
    id: string
    invoiceNumber: string
    createdAt: string
    programName: string
    programPrice: number
    programPriceINR: number
    programDuration: number
    addonName?: string
    addonPrice?: number
    addonPriceINR?: number
    subtotal: number
    subtotalINR: number
    gstRate: number
    gstAmount: number
    gstAmountINR: number
    total: number
    totalINR: number
    exchangeRate: number
    paymentStatus: string
    paymentMethod: string
    paymentDate: string
    type: string
  }
  student: {
    fullName: string
    email: string
    primaryPhone: string
    residentialAddress: string
    city: string
    state: string
    zipCode: string
    country: string
  }
}

interface PublicInvoiceComponentProps {
  invoiceId: string
}

const numberToWords = (num: number): string => {
  const ones = ["", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine"]
  const teens = [
    "Ten",
    "Eleven",
    "Twelve",
    "Thirteen",
    "Fourteen",
    "Fifteen",
    "Sixteen",
    "Seventeen",
    "Eighteen",
    "Nineteen",
  ]
  const tens = ["", "", "Twenty", "Thirty", "Forty", "Fifty", "Sixty", "Seventy", "Eighty", "Ninety"]

  if (num === 0) return "Zero"
  if (num < 10) return ones[num]
  if (num < 20) return teens[num - 10]
  if (num < 100) return tens[Math.floor(num / 10)] + (num % 10 ? " " + ones[num % 10] : "")
  if (num < 1000) return ones[Math.floor(num / 100)] + " Hundred" + (num % 100 ? " " + numberToWords(num % 100) : "")
  if (num < 100000)
    return numberToWords(Math.floor(num / 1000)) + " Thousand" + (num % 1000 ? " " + numberToWords(num % 1000) : "")
  if (num < 10000000)
    return numberToWords(Math.floor(num / 100000)) + " Lakh" + (num % 100000 ? " " + numberToWords(num % 100000) : "")
  return (
    numberToWords(Math.floor(num / 10000000)) + " Crore" + (num % 10000000 ? " " + numberToWords(num % 10000000) : "")
  )
}

export function PublicInvoiceComponent({ invoiceId }: PublicInvoiceComponentProps) {
  const [invoiceData, setInvoiceData] = useState<ApiResponse | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [showEmailModal, setShowEmailModal] = useState(false)
  const [emailAddress, setEmailAddress] = useState("")
  const [emailLoading, setEmailLoading] = useState(false)
  const [emailSuccess, setEmailSuccess] = useState(false)

  useEffect(() => {
    const fetchInvoice = async () => {
      try {
        const response = await fetch(`/api/invoice/${invoiceId}`)
        if (!response.ok) {
          throw new Error("Invoice not found")
        }
        const data = await response.json()
        setInvoiceData(data)
      } catch (err) {
        setError(err instanceof Error ? err.message : "Failed to load invoice")
      } finally {
        setLoading(false)
      }
    }

    fetchInvoice()
  }, [invoiceId])

  const handlePrint = () => {
    window.print()
  }

  const handleDownload = () => {
    window.print()
  }

  const handleEmailInvoice = () => {
    setShowEmailModal(true)
    setEmailAddress(invoiceData?.student.email || "")
  }

  const sendEmailInvoice = async () => {
    if (!emailAddress.trim()) {
      alert("Please enter a valid email address")
      return
    }

    setEmailLoading(true)
    try {
      const response = await fetch("/api/send-invoice-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          studentEmail: emailAddress,
          studentName: invoiceData?.student.fullName || "Customer",
          invoiceData: {
            invoiceNumber: invoiceData?.invoice.invoiceNumber,
            programName: invoiceData?.invoice.programName,
            duration: invoiceData?.invoice.programDuration,
            addonName: invoiceData?.invoice.addonName,
            total: invoiceData?.invoice.total,
            paymentStatus: invoiceData?.invoice.paymentStatus,
            paymentDate: new Date(invoiceData?.invoice.paymentDate || ""),
            invoiceLink: invoiceId,
          },
        }),
      })

      if (response.ok) {
        setEmailSuccess(true)
        setTimeout(() => {
          setShowEmailModal(false)
          setEmailSuccess(false)
          setEmailAddress("")
        }, 2000)
      } else {
        throw new Error("Failed to send email")
      }
    } catch (error) {
      console.error("Error sending email:", error)
      alert("Failed to send email. Please try again.")
    } finally {
      setEmailLoading(false)
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-500 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading invoice...</p>
        </div>
      </div>
    )
  }

  if (error || !invoiceData) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Invoice Not Found</h1>
          <p className="text-gray-600 mb-4">{error || "The requested invoice could not be found."}</p>
          <Button onClick={() => window.history.back()}>Go Back</Button>
        </div>
      </div>
    )
  }

  const { invoice, student } = invoiceData

  const isFreelancerPackage = () => {
    return invoice.type === "freelancer" || invoice.programName.toLowerCase().includes("freelancer")
  }

  const getDurationText = () => {
    if (isFreelancerPackage()) {
      return "One-time"
    }
    return invoice.programDuration > 1 ? `${invoice.programDuration} Months` : `${invoice.programDuration} Month`
  }

  const getServiceDetails = (programName: string) => {
    const programProduct = getProductById(programName.toLowerCase().replace(/\s+/g, "-"))
    if (programProduct) {
      return {
        title: programProduct.name,
        description: programProduct.description,
        sacCode: programProduct.sacCode,
      }
    }

    const isFreelancerPackageLocal = isFreelancerPackage()
    if (isFreelancerPackageLocal) {
      if (programName.toLowerCase().includes("basic")) {
        return {
          title: "Freelancer Basic Package",
          description: "Essential freelancing tools and basic templates",
          sacCode: "999293",
        }
      } else if (programName.toLowerCase().includes("pro")) {
        return {
          title: "Freelancer Pro Package",
          description: "Advanced freelancing tools, premium templates, client management pro, marketing resources",
          sacCode: "999293",
        }
      } else if (programName.toLowerCase().includes("elite")) {
        return {
          title: "Freelancer Elite Package",
          description: "Complete freelancing suite with advanced tools and premium support",
          sacCode: "999293",
        }
      }
    }
    return {
      title: "SPP - International Edition Pro",
      description:
        "Training & Certification Recorded + Live Classes, Projects, AI Tools, NSQF Global Certification, Career Mapping",
      sacCode: "999293",
    }
  }

  const getAddonDetails = (addonName: string) => {
    const addonProduct = getProductById(addonName.toLowerCase().replace(/\s+/g, "-"))
    if (addonProduct) {
      return {
        title: addonProduct.name,
        description: addonProduct.description,
        sacCode: addonProduct.sacCode,
      }
    }

    if (addonName.toLowerCase().includes("payroll")) {
      return {
        title: "Payroll + EPF Services",
        description: "Complete payroll management, EPF compliance, tax calculations, automated payments",
        sacCode: "998596",
      }
    }
    return {
      title: "Career Placement & Visa Guidance Services",
      description: "Employer Connect, Visa Sponsorship Support, Resume & Interview Prep, Lifetime Re-Entry",
      sacCode: "998596",
    }
  }

  const serviceDetails = getServiceDetails(invoice.programName)
  const addonDetails = invoice.addonName ? getAddonDetails(invoice.addonName) : null

  const cgstAmount = invoice.gstAmountINR / 2
  const sgstAmount = invoice.gstAmountINR / 2

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto p-8">
        <div className="border-2 border-black">
          <div className="bg-white p-6">
            <div className="text-center mb-6">
              <h1 className="text-2xl font-bold text-black">SIRTIFAI – TAX INVOICE</h1>
            </div>

            <div className="grid grid-cols-2 gap-8 mb-6">
              <div className="text-sm">
                <p className="font-semibold mb-2">Registered Office:</p>
                <p>123 Tech Park, Whitefield</p>
                <p>Bangalore, Karnataka 560066</p>
                <p className="mt-2">
                  <strong>CIN:</strong> U72900KA2020PTC123456
                </p>
                <p>
                  <strong>GSTIN:</strong> 29AABCS1234A1Z5
                </p>
                <p>
                  <strong>Email:</strong> accounts@sirtifai.com
                </p>
                <p>
                  <strong>Phone:</strong> +91-9876543210
                </p>
                <p>
                  <strong>Website:</strong> www.sirtifai.com
                </p>
              </div>

              <div className="text-sm">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p>
                      <strong>Invoice No:</strong>
                    </p>
                    <p>{invoice.invoiceNumber}</p>
                  </div>
                  <div>
                    <p>
                      <strong>Due Date:</strong>
                    </p>
                    <p>
                      {new Date(new Date(invoice.paymentDate).getTime() + 7 * 24 * 60 * 60 * 1000).toLocaleDateString(
                        "en-GB",
                      )}
                    </p>
                  </div>
                  <div>
                    <p>
                      <strong>State Code:</strong>
                    </p>
                    <p>29</p>
                  </div>
                  <div>
                    <p>
                      <strong>Invoice Date:</strong>
                    </p>
                    <p>{new Date(invoice.createdAt).toLocaleDateString("en-GB")}</p>
                  </div>
                  <div className="col-span-2">
                    <p>
                      <strong>Place of Supply:</strong>
                    </p>
                    <p>Karnataka</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mb-6">
              <div className="bg-gray-100 p-4 border border-black">
                <h3 className="font-bold mb-3">Bill To:</h3>
                <div className="grid grid-cols-2 gap-8 text-sm">
                  <div>
                    <p>
                      <strong>Name:</strong> {student.fullName}
                    </p>
                    <p>
                      <strong>City:</strong> {student.city}
                    </p>
                    <p>
                      <strong>PIN:</strong> {student.zipCode}
                    </p>
                    <p>
                      <strong>Mobile:</strong> {student.primaryPhone}
                    </p>
                  </div>
                  <div>
                    <p>
                      <strong>Address:</strong> {student.residentialAddress}
                    </p>
                    <p>
                      <strong>State:</strong> {student.state}
                    </p>
                    <p>
                      <strong>Email:</strong> {student.email}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mb-6">
              <table className="w-full border-collapse border border-black text-sm">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border border-black p-2 text-left">Sr. No.</th>
                    <th className="border border-black p-2 text-left">Description of Service</th>
                    <th className="border border-black p-2 text-left">SAC Code</th>
                    <th className="border border-black p-2 text-left">Duration</th>
                    <th className="border border-black p-2 text-left">Qty</th>
                    <th className="border border-black p-2 text-right">Unit Price (₹)</th>
                    <th className="border border-black p-2 text-right">Taxable Value (₹)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-black p-2">1</td>
                    <td className="border border-black p-2">
                      <div>
                        <p className="font-semibold">{serviceDetails.title}</p>
                        <p className="text-xs">{serviceDetails.description}</p>
                      </div>
                    </td>
                    <td className="border border-black p-2">{serviceDetails.sacCode}</td>
                    <td className="border border-black p-2">{getDurationText()}</td>
                    <td className="border border-black p-2">1</td>
                    <td className="border border-black p-2 text-right">
                      {(invoice.programPriceINR || 0).toLocaleString()}.00
                    </td>
                    <td className="border border-black p-2 text-right">
                      {(invoice.programPriceINR || 0).toLocaleString()}.00
                    </td>
                  </tr>
                  {invoice.addonName && addonDetails && (
                    <tr>
                      <td className="border border-black p-2">2</td>
                      <td className="border border-black p-2">
                        <div>
                          <p className="font-semibold">{addonDetails.title}</p>
                          <p className="text-xs">{addonDetails.description}</p>
                        </div>
                      </td>
                      <td className="border border-black p-2">{addonDetails.sacCode}</td>
                      <td className="border border-black p-2">One-time</td>
                      <td className="border border-black p-2">1</td>
                      <td className="border border-black p-2 text-right">
                        {invoice.addonPriceINR && invoice.addonPriceINR > 0
                          ? `${invoice.addonPriceINR.toLocaleString()}.00`
                          : "Included"}
                      </td>
                      <td className="border border-black p-2 text-right">
                        {(invoice.addonPriceINR || 0).toLocaleString()}.00
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>

            <div className="grid grid-cols-2 gap-8 mb-6">
              <div></div>
              <div className="text-sm">
                <table className="w-full border-collapse border border-black">
                  <tbody>
                    <tr>
                      <td className="border border-black p-2 font-semibold">Total Taxable Value:</td>
                      <td className="border border-black p-2 text-right">
                        ₹ {(invoice.subtotalINR || 0).toLocaleString()}.00
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-black p-2">Tax Type</td>
                      <td className="border border-black p-2 text-center">Rate</td>
                      <td className="border border-black p-2 text-right">Amount (₹)</td>
                    </tr>
                    <tr>
                      <td className="border border-black p-2">CGST</td>
                      <td className="border border-black p-2 text-center">9%</td>
                      <td className="border border-black p-2 text-right">
                        {Math.round(cgstAmount).toLocaleString()}.00
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-black p-2">SGST</td>
                      <td className="border border-black p-2 text-center">9%</td>
                      <td className="border border-black p-2 text-right">
                        {Math.round(sgstAmount).toLocaleString()}.00
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-black p-2">IGST</td>
                      <td className="border border-black p-2 text-center">18%</td>
                      <td className="border border-black p-2 text-right">N/A</td>
                    </tr>
                    <tr className="bg-gray-100">
                      <td className="border border-black p-2 font-bold">Total GST:</td>
                      <td className="border border-black p-2 text-center font-bold">*</td>
                      <td className="border border-black p-2 text-right font-bold">
                        {invoice.gstAmountINR.toLocaleString()}.00
                      </td>
                    </tr>
                    <tr className="bg-gray-200">
                      <td className="border border-black p-2 font-bold">Total Invoice Value (INR):</td>
                      <td className="border border-black p-2"></td>
                      <td className="border border-black p-2 text-right font-bold">
                        ₹{invoice.totalINR.toLocaleString()}.00
                      </td>
                    </tr>
                  </tbody>
                </table>
                <p className="mt-2 text-xs">
                  <strong>In Words:</strong> {numberToWords(invoice.totalINR)} Only
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-8 mb-6">
              <div className="text-sm">
                <h3 className="font-bold mb-2">Payment Details:</h3>
                <p>
                  <strong>Bank Name:</strong> HDFC Bank
                </p>
                <p>
                  <strong>Account Name:</strong> Sirtifai Technologies Pvt Ltd
                </p>
                <p>
                  <strong>A/c No.:</strong> 50100123456789
                </p>
                <p>
                  <strong>IFSC Code:</strong> HDFC0001234
                </p>
                <p>
                  <strong>UPI:</strong> accounts@sirtifai@hdfc
                </p>
              </div>
              <div className="text-sm">
                <h3 className="font-bold mb-2">Notes & Terms:</h3>
                <p>This invoice is valid only upon receipt of payment.</p>
              </div>
            </div>

            <div className="flex justify-end mb-6">
              <div className="text-center">
                <div className="w-48 h-16 mb-2"></div>
                <div className="border-t border-black pt-2">
                  <p className="text-sm font-semibold">Authorized Signatory</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap gap-4 justify-center mt-8 print:hidden">
          <Button onClick={handlePrint} className="bg-orange-500 hover:bg-orange-600">
            <Printer className="w-4 h-4 mr-2" />
            Print Invoice
          </Button>
          <Button onClick={handleDownload} variant="outline">
            <Download className="w-4 h-4 mr-2" />
            Download PDF
          </Button>
          <Button onClick={handleEmailInvoice} variant="outline">
            <Mail className="w-4 h-4 mr-2" />
            Email Invoice
          </Button>
        </div>

        {showEmailModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg p-6 w-full max-w-md mx-4">
              <h3 className="text-lg font-semibold mb-4">Email Invoice</h3>
              {emailSuccess ? (
                <div className="text-center">
                  <div className="text-green-600 mb-2">✓</div>
                  <p className="text-green-600">Invoice sent successfully!</p>
                </div>
              ) : (
                <>
                  <div className="mb-4">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={emailAddress}
                      onChange={(e) => setEmailAddress(e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                      placeholder="Enter email address"
                      disabled={emailLoading}
                    />
                  </div>
                  <div className="flex gap-3 justify-end">
                    <Button variant="outline" onClick={() => setShowEmailModal(false)} disabled={emailLoading}>
                      Cancel
                    </Button>
                    <Button
                      onClick={sendEmailInvoice}
                      disabled={emailLoading}
                      className="bg-orange-500 hover:bg-orange-600"
                    >
                      {emailLoading ? "Sending..." : "Send Email"}
                    </Button>
                  </div>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
