import { type NextRequest, NextResponse } from "next/server"
import { prisma } from "../../../../lib/prisma"
import crypto from "crypto"
import { getINRToUSDRate } from "../../../lib/currency"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature, orderId } = body

    console.log("Payment verification data:", {
      razorpay_order_id,
      razorpay_payment_id,
      razorpay_signature: razorpay_signature?.substring(0, 10) + "...",
    })

    const body_string = `${razorpay_order_id}|${razorpay_payment_id}`
    const expectedSignature = crypto
      .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET || "0oZnTjgtBeJP9vbY9xMc0O8T")
      .update(body_string)
      .digest("hex")

    console.log("Body string for signature:", body_string)
    console.log("Expected signature (full):", expectedSignature)
    console.log("Received signature (full):", razorpay_signature)

    const isSignatureValid = expectedSignature === razorpay_signature

    if (isSignatureValid) {
      console.log("Signature verification successful")

      const existingStudent = await prisma.student.findFirst({
        where: {
          razorpayOrderId: razorpay_order_id,
          paymentStatus: "PROCESSING",
        },
        orderBy: {
          createdAt: "desc",
        },
      })

      if (existingStudent) {
        const timestamp = Date.now()
        const randomString = crypto.randomBytes(8).toString("hex")
        const uniqueInvoiceLink = `${timestamp}-${randomString}`

        const inrToUsdRate = await getINRToUSDRate()
        const usdToInrRate = 1 / inrToUsdRate

        const programPriceINR = Math.round((existingStudent.programPrice || 72) * usdToInrRate)
        const addonPriceINR = existingStudent.addonPrice ? Math.round(existingStudent.addonPrice * usdToInrRate) : 0

        const calculatedSubtotalINR = programPriceINR + addonPriceINR
        const calculatedGstAmountINR = Math.round(calculatedSubtotalINR * 0.18)
        const calculatedTotalINR = calculatedSubtotalINR + calculatedGstAmountINR

        // Update existing record
        const updatedStudent = await prisma.student.update({
          where: { id: existingStudent.id },
          data: {
            paymentId: razorpay_payment_id,
            paymentStatus: "COMPLETED",
            razorpayPaymentId: razorpay_payment_id,
            razorpaySignature: razorpay_signature,
            invoiceLink: uniqueInvoiceLink, // Set unique invoice link
            exchangeRateUsed: usdToInrRate,
            totalAmountINR: calculatedTotalINR,
          },
        })

        const now = new Date()
        const dateStr = now.toISOString().slice(0, 10).replace(/-/g, "")
        const timeStr = now.getTime().toString().slice(-6) // Last 6 digits of timestamp
        const invoiceNumber = `SRT/INT/${dateStr}/${timeStr}`

        const invoice = await prisma.invoice.create({
          data: {
            invoiceNumber,
            studentId: updatedStudent.id,
            invoiceLink: uniqueInvoiceLink,
            programName: existingStudent.selectedProgram || "Skill Phase",
            programPrice: existingStudent.programPrice || 72,
            programDuration: existingStudent.programDuration || 1,
            addonName: existingStudent.selectedAddon || null,
            addonPrice: existingStudent.addonPrice || 0,
            subtotal: existingStudent.programPrice || 72 - (existingStudent.programPrice || 72) * 0.18, // USD subtotal
            gstAmount: (existingStudent.programPrice || 72) * 0.18, // USD GST
            total: existingStudent.programPrice || 72, // USD total
            exchangeRateUsed: usdToInrRate,
            programPriceINR: programPriceINR,
            addonPriceINR: addonPriceINR,
            subtotalINR: calculatedSubtotalINR,
            gstAmountINR: calculatedGstAmountINR,
            totalINR: calculatedTotalINR,
            paymentStatus: "completed",
            paymentMethod: "Razorpay",
            paymentDate: new Date(),
          },
        })

        console.log("Student record updated to COMPLETED and invoice created with stored INR amounts")

        // Send invoice email
        try {
          await fetch(`${process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"}/api/send-invoice-email`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              studentEmail: existingStudent.email,
              studentName: existingStudent.fullName,
              invoiceLink: uniqueInvoiceLink, // Use the unique invoice link
              invoiceData: {
                invoiceNumber: invoice.invoiceNumber,
                programName: existingStudent.selectedProgram || "Skill Phase",
                duration: existingStudent.programDuration || 1,
                addonName: existingStudent.selectedAddon || null,
                total: calculatedTotalINR, // Send corrected INR amount for email
                paymentStatus: "Completed",
                paymentDate: new Date(),
              },
            }),
          })
          console.log("Invoice email sent successfully")
        } catch (emailError) {
          console.error("Error sending invoice email:", emailError)
        }

        return NextResponse.json({
          success: true,
          paymentId: razorpay_payment_id,
          orderId: razorpay_order_id,
          invoiceId: invoice.invoiceNumber,
          studentId: updatedStudent.id,
          invoiceLink: uniqueInvoiceLink, // Return the unique invoice link
        })
      } else {
        console.log("No PROCESSING student record found for order:", razorpay_order_id)
        return NextResponse.json(
          {
            success: false,
            error: "No pending application found for this payment",
          },
          { status: 404 },
        )
      }
    } else {
      console.log("Signature verification failed - payment remains PROCESSING")
      return NextResponse.json(
        {
          success: false,
          error: "Invalid signature",
          debug: {
            bodyString: body_string,
            expected: expectedSignature,
            received: razorpay_signature,
          },
        },
        { status: 400 },
      )
    }
  } catch (error) {
    console.error("Error verifying payment:", error)
    return NextResponse.json(
      {
        success: false,
        error: "Payment verification failed",
        details: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 },
    )
  }
}
