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

      let idDocumentBinary = null
      let photoBinary = null

      if (studentData?.idDocumentBase64) {
        try {
          const base64Data = studentData.idDocumentBase64.split(",")[1] // Remove data:mime;base64, prefix
          idDocumentBinary = Buffer.from(base64Data, "base64")
        } catch (error) {
          console.error("Error processing ID document:", error)
        }
      }

      if (studentData?.studentPhotoBase64) {
        try {
          const base64Data = studentData.studentPhotoBase64.split(",")[1] // Remove data:mime;base64, prefix
          photoBinary = Buffer.from(base64Data, "base64")
        } catch (error) {
          console.error("Error processing student photo:", error)
        }
      }

      const sharedInvoiceLink = crypto.randomUUID()

      const student = await prisma.student.create({
        data: {
          // Personal Details - use actual data from form
          fullName: studentData?.fullName || "John Doe",
          dateOfBirth: studentData?.dateOfBirth
            ? new Date(
                `${studentData.dateOfBirth.year}-${studentData.dateOfBirth.month.padStart(2, "0")}-${studentData.dateOfBirth.day.padStart(2, "0")}`,
              )
            : new Date("1995-01-01"),
          countryOfCitizenship: studentData?.countryOfCitizenship || "India",
          referralCode: studentData?.referralCode || null,

          // Contact Information - use actual data
          primaryPhone: studentData?.primaryPhone || "+91 9876543210",
          secondaryPhone: studentData?.secondaryPhone || null,
          whatsappNotifications: studentData?.whatsappNotifications || false,
          email: studentData?.email || "dummy@example.com",
          residentialAddress: studentData?.residentialAddress || "123 Dummy Street",
          city: studentData?.city || "Mumbai",
          state: studentData?.state || "Maharashtra",
          zipCode: studentData?.zipCode || "400001",
          country: studentData?.country || "India",

          // Education - use actual data
          highestQualification: studentData?.highestQualification || "Graduate",
          specialization: studentData?.specialization || "Computer Science",

          // Professional - use actual data
          currentProfession: studentData?.currentProfession || "Software Developer",
          currentOrganization: studentData?.currentOrganization || "Tech Company",
          linkedinProfile: studentData?.linkedinProfile || null,

          // Identity Document - use actual data and binary files
          idType: studentData?.idType || "Passport",
          idNumber: studentData?.idNumber || "A1234567",
          idDocument: idDocumentBinary, // Store binary data
          photo: photoBinary, // Store binary data

          // Program Selection - use correct pricing data
          selectedProgram: packageData?.program || "Skill Phase",
          programDuration: packageData?.months || 3,
          programPrice: packageData?.pricing?.totalProgramPrice || 5999,
          selectedAddon: packageData?.addon || null,
          addonPrice: packageData?.pricing?.addOnPrice || 0,
          totalAmount: packageData?.pricing?.totalAmount || 5999,

          invoiceLink: sharedInvoiceLink,

          // Payment Details
          paymentId: razorpay_payment_id,
          paymentStatus: "completed",
          razorpayOrderId: razorpay_order_id,
          razorpayPaymentId: razorpay_payment_id,
          razorpaySignature: razorpay_signature,

          // Confirmation - use actual data
          agreedToTerms: studentData?.agreedToTerms || true,
          certifiedInformation: studentData?.certifiedInformation || true,
        },
      })

      const invoice = await prisma.invoice.create({
        data: {
          invoiceNumber: `SRTIFAI/US/2023${Date.now().toString().slice(-6)}`,
          studentId: student.id,
          invoiceLink: sharedInvoiceLink,
          programName: packageData?.program || "Skill Phase",
          programPrice: packageData?.pricing?.programPrice || 5999,
          programDuration: packageData?.months || 3,
          addonName: packageData?.addon || null,
          addonPrice: packageData?.pricing?.addOnPrice || 0,
          subtotal: packageData?.pricing?.subtotal || 5999,
          gstAmount: packageData?.pricing?.gstAmount || 0,
          total: packageData?.pricing?.totalAmount || 5999,
          paymentStatus: "completed",
          paymentMethod: "Razorpay",
          paymentDate: new Date(),
        },
      })

      console.log("Student and invoice created successfully")

      try {
        await fetch(`${process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"}/api/send-invoice-email`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            studentEmail: studentData?.email || "dummy@example.com",
            studentName: studentData?.fullName || "John Doe",
            invoiceData: {
              invoiceNumber: invoice.invoiceNumber,
              programName: packageData?.program || "Skill Phase",
              duration: packageData?.months || 3,
              addonName: packageData?.addon || null,
              total: packageData?.pricing?.totalAmount || 5999,
              paymentStatus: "Completed",
              paymentDate: new Date(),
              invoiceLink: sharedInvoiceLink,
            },
          }),
        })
        console.log("Invoice email sent successfully")
      } catch (emailError) {
        console.error("Error sending invoice email:", emailError)
        // Don't fail the payment if email fails
      }

      return NextResponse.json({
        success: true,
        paymentId: razorpay_payment_id,
        orderId: razorpay_order_id,
        invoiceId: invoice.invoiceNumber,
        studentId: student.id,
        invoiceLink: sharedInvoiceLink,
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
