"use client"

import { useState, useEffect } from "react"
import { Button } from "../../ui/Button"
import { Separator } from "../../ui/Separator"
import { Download, Printer, Mail } from "lucide-react"
import { getProgramDetails, getAddonDetails } from "../../../../lib/program-mapping"

interface InvoiceData {
  invoice: {
    id: string
    invoiceNumber: string
    createdAt: string
    programName: string
    programPrice: number
    programDuration: number
    addonName?: string
    addonPrice?: number
    subtotal: number
    gstRate: number
    gstAmount: number
    total: number
    paymentStatus: string
    paymentMethod: string
    paymentDate: string
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

export function PublicInvoiceComponent({ invoiceId }: PublicInvoiceComponentProps) {
  const [invoiceData, setInvoiceData] = useState<InvoiceData | null>(null)
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

  const programDetails = getProgramDetails(invoice.programName)
  const addonDetails = invoice.addonName ? getAddonDetails(invoice.addonName) : null

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4">
        {/* Header */}
        <div className="bg-white rounded-lg shadow-sm p-8 mb-6">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">S</span>
              </div>
              <div>
                <h1 className="text-2xl font-bold text-orange-500">SIRTIFAI - INVOICE</h1>
              </div>
            </div>
            <div className="text-right text-sm text-gray-600">
              <p>Registered Office (India):</p>
              <p>123 Tech Park, Whitefield</p>
              <p>Bangalore, Karnataka 560066</p>
              <p>Email: accounts@sirtifai.com</p>
              <p>Phone: +91 98 76543210</p>
              <p>Website: www.sirtifai.com</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Invoice No:</h3>
              <p className="text-gray-600">{invoice.invoiceNumber}</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Invoice Date:</h3>
              <p className="text-gray-600">{new Date(invoice.createdAt).toLocaleDateString()}</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Due Date:</h3>
              <p className="text-gray-600">{new Date(invoice.paymentDate).toLocaleDateString()}</p>
            </div>
          </div>

          {/* Bill To Customer Details */}
          <div className="mb-8">
            <h3 className="font-semibold text-gray-900 mb-4">Bill To (Customer Details):</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <p className="font-medium text-gray-900">{student.fullName}</p>
                <p className="text-gray-600">{student.residentialAddress}</p>
                <p className="text-gray-600">
                  {student.city}, {student.state}
                </p>
                <p className="text-gray-600">
                  {student.zipCode}, {student.country}
                </p>
              </div>
              <div>
                <p className="text-gray-600">
                  <span className="font-medium">Email:</span> {student.email}
                </p>
                <p className="text-gray-600">
                  <span className="font-medium">Phone:</span> {student.primaryPhone}
                </p>
              </div>
            </div>
          </div>

          {/* Invoice Items */}
          <div className="mb-8">
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-gray-300">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Sr. No.</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Description</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Duration</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Qty</th>
                    <th className="border border-gray-300 px-4 py-3 text-right font-semibold">Unit Price (USD)</th>
                    <th className="border border-gray-300 px-4 py-3 text-right font-semibold">Amount (USD)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3">1</td>
                    <td className="border border-gray-300 px-4 py-3">
                      <div>
                        <p className="font-medium">{programDetails?.name || invoice.programName}</p>
                        <p className="text-sm text-gray-600">
                          {programDetails?.features.join(", ") ||
                            "Training Program, Career Projects, AI Tools, PDF Initial Certification, Career Mapping"}
                        </p>
                      </div>
                    </td>
                    <td className="border border-gray-300 px-4 py-3">{invoice.programDuration} months</td>
                    <td className="border border-gray-300 px-4 py-3">1</td>
                    <td className="border border-gray-300 px-4 py-3 text-right">₹{invoice.programPrice.toFixed(2)}</td>
                    <td className="border border-gray-300 px-4 py-3 text-right">
                      ₹{(invoice.programPrice * invoice.programDuration).toFixed(2)}
                    </td>
                  </tr>
                  {invoice.addonName && (
                    <tr>
                      <td className="border border-gray-300 px-4 py-3">2</td>
                      <td className="border border-gray-300 px-4 py-3">
                        <div>
                          <p className="font-medium">{addonDetails?.name || invoice.addonName}</p>
                          <p className="text-sm text-gray-600">
                            {addonDetails?.features.join(", ") || "Additional Service"}
                          </p>
                        </div>
                      </td>
                      <td className="border border-gray-300 px-4 py-3">One-time</td>
                      <td className="border border-gray-300 px-4 py-3">1</td>
                      <td className="border border-gray-300 px-4 py-3 text-right">₹{invoice.addonPrice?.toFixed(2)}</td>
                      <td className="border border-gray-300 px-4 py-3 text-right">₹{invoice.addonPrice?.toFixed(2)}</td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>

          {/* Payment Summary */}
          <div className="flex justify-end mb-8">
            <div className="w-full max-w-sm">
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-600">Subtotal:</span>
                  <span className="font-medium">₹{invoice.subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">GST ({invoice.gstRate}%):</span>
                  <span className="font-medium">₹{invoice.gstAmount.toFixed(2)}</span>
                </div>
                <Separator />
                <div className="flex justify-between text-lg font-bold">
                  <span>Total Invoice Value (INR):</span>
                  <span>₹{invoice.total.toFixed(2)}</span>
                </div>
                <p className="text-sm text-gray-600 mt-2">In Words: {numberToWords(invoice.total)} Rupees Only</p>
              </div>
            </div>
          </div>

          {/* Payment Information */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Payment Method:</h3>
              <p className="text-gray-600">{invoice.paymentMethod}</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Payment Status:</h3>
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                {invoice.paymentStatus}
              </span>
            </div>
          </div>

          {/* Terms */}
          <div className="mb-8">
            <h3 className="font-semibold text-gray-900 mb-2">Notes & Terms:</h3>
            <p className="text-sm text-gray-600">
              Payment due within 7 business days of invoice date. Sirtifai reserves the right to delay service delivery
              until payment is confirmed. Candidate must complete training phases to access placement services.
            </p>
          </div>

          {/* Signature */}
          <div className="flex justify-end">
            <div className="text-center">
              <div className="w-48 h-16 border-b border-gray-300 mb-2"></div>
              <p className="text-sm font-medium">Authorized Signatory</p>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-4 justify-center print:hidden">
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

function numberToWords(num: number): string {
  // Simple implementation for Indian numbering system
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

  let result = ""
  const crores = Math.floor(num / 10000000)
  const lakhs = Math.floor((num % 10000000) / 100000)
  const thousands = Math.floor((num % 100000) / 1000)
  const hundreds = Math.floor((num % 1000) / 100)
  const remainder = num % 100

  if (crores > 0) {
    result += convertHundreds(crores) + " Crore "
  }
  if (lakhs > 0) {
    result += convertHundreds(lakhs) + " Lakh "
  }
  if (thousands > 0) {
    result += convertHundreds(thousands) + " Thousand "
  }
  if (hundreds > 0) {
    result += ones[hundreds] + " Hundred "
  }
  if (remainder > 0) {
    if (remainder < 10) {
      result += ones[remainder]
    } else if (remainder < 20) {
      result += teens[remainder % 10]
    } else {
      result += tens[Math.floor(remainder / 10)]
      if (remainder % 10 > 0) {
        result += " " + ones[remainder % 10]
      }
    }
  }

  return result.trim()

  function convertHundreds(n: number): string {
    let str = ""
    const h = Math.floor(n / 100)
    const t = Math.floor((n % 100) / 10)
    const o = n % 10

    if (h > 0) {
      str += ones[h] + " Hundred"
    }
    if (n % 100 >= 10 && n % 100 < 20) {
      str += (str ? " " : "") + teens[(n % 100) - 10]
    } else {
      if (t > 0) {
        str += (str ? " " : "") + tens[t]
      }
      if (o > 0) {
        str += (str ? " " : "") + ones[o]
      }
    }

    return str
  }
}
