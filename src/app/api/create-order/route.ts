import { type NextRequest, NextResponse } from "next/server"
import Razorpay from "razorpay"

// Initialize Razorpay with your credentials
const razorpay = new Razorpay({
  key_id: "rzp_live_zHfDuyyqkZrhhP",
  key_secret: "0oZnTjgtBeJP9vbY9xMc0O8T",
})

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { amount, currency = "INR", receipt } = body

    if (!amount || typeof amount !== "number") {
      return NextResponse.json({ error: "Invalid amount" }, { status: 400 })
    }

    const options = {
      amount: 100, // Convert to paise
      currency,
      receipt,
    }

    const order = await razorpay.orders.create(options)

    return NextResponse.json(order)
  } catch (error) {
    console.error("Error creating order:", error)
    return NextResponse.json({ error: "Failed to create order" }, { status: 500 })
  }
}
