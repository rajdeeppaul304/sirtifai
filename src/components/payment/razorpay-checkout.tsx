"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"

interface RazorpayCheckoutProps {
  amount: number
  studentData: any
  packageData: any
  onSuccess?: (paymentData: any) => void
  onError?: (error: any) => void
}

declare global {
  interface Window {
    Razorpay: any
  }
}

const RazorpayCheckout: React.FC<RazorpayCheckoutProps> = ({
  amount,
  studentData,
  packageData,
  onSuccess,
  onError,
}) => {
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  const loadRazorpayScript = () => {
    return new Promise((resolve) => {
      const script = document.createElement("script")
      script.src = "https://checkout.razorpay.com/v1/checkout.js"
      script.onload = () => resolve(true)
      script.onerror = () => resolve(false)
      document.body.appendChild(script)
    })
  }

  const handlePayment = async () => {
    setLoading(true)

    try {
      // Load Razorpay script
      const scriptLoaded = await loadRazorpayScript()
      if (!scriptLoaded) {
        alert("Failed to load Razorpay. Please check your internet connection.")
        setLoading(false)
        return
      }

      // Create order
      const orderResponse = await fetch("/api/create-order", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          amount,
          currency: "INR",
          receipt: `receipt_${Date.now()}`,
        }),
      })

      const order = await orderResponse.json()

      if (!orderResponse.ok) {
        alert(`Order creation failed: ${order.error}`)
        setLoading(false)
        return
      }

      // Configure Razorpay options
      const options = {
        key: "rzp_live_zHfDuyyqkZrhhP",
        amount: order.amount,
        currency: order.currency,
        name: "Sirtifai",
        description: `Payment for ${packageData.program?.name || "Program"}`,
        order_id: order.id,
        prefill: {
          name: studentData.fullName || studentData.studentName,
          email: studentData.email || studentData.studentEmail,
          contact: studentData.primaryPhone || studentData.studentPhone,
        },
        theme: {
          color: "#FC4C03",
        },
        handler: async (response: any) => {
          try {
            // Verify payment
            const verifyResponse = await fetch("/api/verify-payment", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                razorpay_order_id: response.razorpay_order_id,
                razorpay_payment_id: response.razorpay_payment_id,
                razorpay_signature: response.razorpay_signature,
                studentData,
                packageData,
              }),
            })

            const verifyResult = await verifyResponse.json()

            if (verifyResult.success) {
              // Store payment data for invoice
              localStorage.setItem(
                "paymentData",
                JSON.stringify({
                  ...verifyResult,
                  studentData,
                  packageData,
                  paymentDate: new Date().toISOString(),
                }),
              )

              // Redirect to invoice page
              router.push("/invoice")

              if (onSuccess) {
                onSuccess(verifyResult)
              }
            } else {
              alert(`Payment verification failed: ${verifyResult.error}`)
            }
          } catch (error) {
            console.error("Payment verification error:", error)
            alert("Payment verification failed. Please contact support.")
            if (onError) {
              onError(error)
            }
          }
        },
        modal: {
          ondismiss: () => {
            setLoading(false)
          },
        },
      }

      // Open Razorpay checkout
      const razorpay = new window.Razorpay(options)
      razorpay.open()
    } catch (error) {
      console.error("Payment error:", error)
      alert("Payment failed. Please try again.")
      setLoading(false)
      if (onError) {
        onError(error)
      }
    }
  }

  return (
    <button
      onClick={handlePayment}
      disabled={loading}
      className={`w-full font-semibold py-4 px-6 rounded-lg text-lg transition-colors ${
        loading ? "bg-gray-400 text-gray-600 cursor-not-allowed" : "bg-[#FC4C03] text-white hover:bg-[#e63d00]"
      }`}
    >
      {loading ? "Processing..." : `Pay Now - ₹${amount.toLocaleString()}`}
    </button>
  )
}

export default RazorpayCheckout
