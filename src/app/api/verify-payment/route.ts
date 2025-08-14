import { type NextRequest, NextResponse } from "next/server"
import { prisma } from "../../../../lib/prisma"
import crypto from "crypto"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature, studentData, packageData } = body

    console.log("Payment verification data:", {
      razorpay_order_id,
      razorpay_payment_id,
      razorpay_signature: razorpay_signature?.substring(0, 10) + "...",
    })

    const body_string = `${razorpay_order_id}|${razorpay_payment_id}`
    const expectedSignature = crypto.createHmac("sha256", "0oZnTjgtBeJP9vbY9xMc0O8T").update(body_string).digest("hex")

    console.log("Body string for signature:", body_string)
    console.log("Expected signature (full):", expectedSignature)
    console.log("Received signature (full):", razorpay_signature)

    const isSignatureValid = expectedSignature === razorpay_signature

    if (isSignatureValid) {
      console.log("Signature verification successful")

      const student = await prisma.student.create({
        data: {
          // Personal Details
          fullName: studentData.fullName,
          dateOfBirth: new Date(
            `${studentData.dateOfBirth.year}-${studentData.dateOfBirth.month}-${studentData.dateOfBirth.day}`,
          ),
          countryOfCitizenship: studentData.countryOfCitizenship,
          referralCode: studentData.referralCode,

          // Contact Information
          primaryPhone: studentData.primaryPhone,
          secondaryPhone: studentData.secondaryPhone,
          whatsappNotifications: studentData.whatsappNotifications,
          email: studentData.email,
          residentialAddress: studentData.residentialAddress,
          city: studentData.city,
          state: studentData.state,
          zipCode: studentData.zipCode,
          country: studentData.country,

          // Education
          highestQualification: studentData.highestQualification,
          specialization: studentData.specialization,

          // Professional
          currentProfession: studentData.currentProfession,
          currentOrganization: studentData.currentOrganization,
          linkedinProfile: studentData.linkedinProfile,

          // Identity Document
          idType: studentData.idType,
          idNumber: studentData.idNumber,

          // Program Selection
          selectedProgram: packageData.program.name,
          programDuration: packageData.duration,
          programPrice: packageData.program.price,
          selectedAddon: packageData.addOn?.name,
          addonPrice: packageData.addOn?.price || 0,
          totalAmount: packageData.total,

          // Payment Details
          paymentId: razorpay_payment_id,
          paymentStatus: "completed",
          razorpayOrderId: razorpay_order_id,
          razorpayPaymentId: razorpay_payment_id,
          razorpaySignature: razorpay_signature,

          // Confirmation
          agreedToTerms: studentData.agreedToTerms,
          certifiedInformation: studentData.certifiedInformation,
        },
      })

      const invoice = await prisma.invoice.create({
        data: {
          invoiceNumber: `SRTIFAI/US/2023${Date.now().toString().slice(-6)}`,
          studentId: student.id,
          programName: packageData.program.name,
          programPrice: packageData.program.price,
          addonName: packageData.addOn?.name,
          addonPrice: packageData.addOn?.price || 0,
          subtotal: packageData.total,
          tax: 0,
          total: packageData.total,
          paymentStatus: "completed",
          paymentMethod: "Razorpay",
          paymentDate: new Date(),
        },
      })

      console.log("Student and invoice created successfully")

      return NextResponse.json({
        success: true,
        paymentId: razorpay_payment_id,
        orderId: razorpay_order_id,
        invoiceId: invoice.invoiceNumber,
        studentId: student.id,
      })
    } else {
      console.log("Signature verification failed")
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
