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
          // Personal Details - only name is real, rest are dummy
          fullName: studentData?.fullName || "John Doe",
          dateOfBirth: new Date("1995-01-01"),
          countryOfCitizenship: "India",
          referralCode: "DUMMY123",

          // Contact Information - dummy data
          primaryPhone: "+91 9876543210",
          secondaryPhone: "+91 9876543211",
          whatsappNotifications: true,
          email: "dummy2@example.com",
          residentialAddress: "123 Dummy Street, Dummy City",
          city: "Mumbai",
          state: "Maharashtra",
          zipCode: "400001",
          country: "India",

          // Education - dummy data
          highestQualification: "Graduate",
          specialization: "Computer Science",

          // Professional - dummy data
          currentProfession: "Software Developer",
          currentOrganization: "Tech Company",
          linkedinProfile: "https://linkedin.com/in/dummy",

          // Identity Document - dummy data
          idType: "Passport",
          idNumber: "A1234567",

          // Program Selection - use actual package data
          selectedProgram: packageData?.program?.name || "Skill Phase",
          programDuration: packageData?.duration || 3,
          programPrice: packageData?.program?.price || 5999,
          selectedAddon: packageData?.addOn?.name || null,
          addonPrice: packageData?.addOn?.price || 0,
          totalAmount: packageData?.total || 5999,

          // Payment Details
          paymentId: razorpay_payment_id,
          paymentStatus: "completed",
          razorpayOrderId: razorpay_order_id,
          razorpayPaymentId: razorpay_payment_id,
          razorpaySignature: razorpay_signature,

          // Confirmation - dummy data
          agreedToTerms: true,
          certifiedInformation: true,
        },
      })

      const invoice = await prisma.invoice.create({
        data: {
          invoiceNumber: `SRTIFAI/US/2023${Date.now().toString().slice(-6)}`,
          studentId: student.id,
          programName: packageData?.program?.name || "Skill Phase",
          programPrice: packageData?.program?.price || 5999,
          addonName: packageData?.addOn?.name || null,
          addonPrice: packageData?.addOn?.price || 0,
          subtotal: packageData?.total || 5999,
          tax: 0,
          total: packageData?.total || 5999,
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
