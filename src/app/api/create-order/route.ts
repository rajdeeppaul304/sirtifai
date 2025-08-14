import { type NextRequest, NextResponse } from "next/server"
import Razorpay from "razorpay"

// Initialize Razorpay with your credentials
const razorpay = new Razorpay({
  key_id: "rzp_live_zHfDuyyqkZrhhP",
  key_secret: "0oZnTjgtBeJP9vbY9xMc0O8T",
})

const PROGRAM_PRICES: Record<string, number> = {
  skill: 5999,
  "practice-basic": 5999,
  "practice-pro": 9999,
  "practice-elite": 19999,
  "progress-basic": 19999,
  "progress-pro": 29999,
  "progress-elite": 59999,
}

const ADDON_PRICES: Record<string, number> = {
  payroll: 500,
  ca: 3999,
  legal: 5977,
}

const GST_RATE = 0.18 // 18% GST

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { selectedProgram, selectedMonths, selectedAddon, receipt } = body

    const programPrice = PROGRAM_PRICES[selectedProgram] || 0
    const addOnPrice = selectedAddon ? ADDON_PRICES[selectedAddon] || 0 : 0

    // Program price is per month, multiply by duration
    const totalProgramPrice = programPrice * selectedMonths

    // Add-on is single charge, not multiplied by duration
    const subtotal = totalProgramPrice + addOnPrice

    // Calculate GST
    const gstAmount = subtotal * GST_RATE
    const totalAmount = subtotal + gstAmount

    console.log("Pricing calculation:", {
      selectedProgram,
      selectedMonths,
      selectedAddon,
      programPrice,
      totalProgramPrice,
      addOnPrice,
      subtotal,
      gstAmount,
      totalAmount,
    })

    const options = {
      amount: Math.round(totalAmount * 100), // Razorpay expects amount in paise
      currency: "INR",
      receipt,
    }

    const order = await razorpay.orders.create(options)

    return NextResponse.json({
      ...order,
      pricing: {
        programPrice,
        totalProgramPrice,
        addOnPrice,
        subtotal,
        gstAmount,
        totalAmount: totalAmount,
        duration: selectedMonths,
      },
    })
  } catch (error) {
    console.error("Error creating order:", error)
    return NextResponse.json({ error: "Failed to create order" }, { status: 500 })
  }
}
