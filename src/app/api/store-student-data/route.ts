import { type NextRequest, NextResponse } from "next/server"
import { PrismaClient } from "@prisma/client"
import { getProgramPrice, getAddonPrice } from "../../../lib/pricing"

const prisma = new PrismaClient()

function base64ToBuffer(base64String: string): Buffer | null {
  try {
    // Remove data URL prefix if present
    const cleanBase64 = base64String.replace(/^data:[^;]+;base64,/, "")
    // Convert base64 directly to Buffer
    return Buffer.from(cleanBase64, "base64")
  } catch (error) {
    console.error("Error converting base64 to buffer:", error)
    return null
  }
}

export async function POST(request: NextRequest) {
  try {
    const { studentData, packageData, orderId, paymentStatus } = await request.json()

    const programPrice = getProgramPrice(packageData.program) // Get individual program price
    const addonPrice = packageData.addon ? getAddonPrice(packageData.addon) : 0 // Get individual addon price
    const basePrice = programPrice + addonPrice // Combined base price
    const totalPrice = basePrice * packageData.months
    const taxAmount = Math.round(totalPrice * 0.18)
    const finalAmount = totalPrice + taxAmount

    const photoBuffer = studentData.studentPhotoBase64 ? base64ToBuffer(studentData.studentPhotoBase64) : null
    const idDocumentBuffer = studentData.idDocumentBase64 ? base64ToBuffer(studentData.idDocumentBase64) : null

    // Create student record with PROCESSING status
    const student = await prisma.student.create({
      data: {
        // Personal Details
        fullName: studentData.fullName,
        dateOfBirth: new Date(
          `${studentData.dateOfBirth.year}-${studentData.dateOfBirth.month.toString().padStart(2, "0")}-${studentData.dateOfBirth.day.toString().padStart(2, "0")}`,
        ),
        countryOfCitizenship: studentData.countryOfCitizenship,
        referralCode: studentData.referralCode || null,

        // Contact Information
        primaryPhone: studentData.primaryPhone,
        secondaryPhone: studentData.secondaryPhone || null,
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
        photo: photoBuffer,
        idDocument: idDocumentBuffer,

        // Program Details
        selectedProgram: packageData.program,
        programDuration: packageData.months,
        programPrice: programPrice, // Only the program price, not including addons
        selectedAddon: packageData.addon || null,
        addonPrice: addonPrice, // Only the addon price
        totalAmount: finalAmount,

        // Payment Details
        razorpayOrderId: orderId,
        paymentStatus: paymentStatus,

        // Confirmation
        agreedToTerms: studentData.agreedToTerms,
        certifiedInformation: studentData.certifiedInformation,
      },
    })

    return NextResponse.json({
      success: true,
      studentId: student.id,
      message: "Student data stored successfully with PROCESSING status",
    })
  } catch (error) {
    console.error("Error storing student data:", error)
    return NextResponse.json({ success: false, error: "Failed to store student data" }, { status: 500 })
  }
}
