import { type NextRequest, NextResponse } from "next/server"
import Razorpay from "razorpay"
import { getProgramPrice, getAddonPrice } from "../../../lib/pricing"
import { prisma } from "../../../../lib/prisma"
import { getINRToUSDRate, convertUSDToINR } from "../../../lib/currency"

const GST_RATE = 0.18 // 18% GST

export async function POST(request: NextRequest) {
  try {
    const razorpay = new Razorpay({
      key_id: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID || "",
      key_secret: process.env.RAZORPAY_KEY_SECRET || "",
    })

    const body = await request.json()
    const { selectedProgram, selectedMonths, selectedAddon, receipt, studentData } = body

    const programPriceUSD = getProgramPrice(selectedProgram)
    const addOnPriceUSD = selectedAddon ? getAddonPrice(selectedAddon) : 0

    // Calculate in USD first
    const totalProgramPriceUSD = programPriceUSD * selectedMonths
    const subtotalUSD = totalProgramPriceUSD + addOnPriceUSD

    const inrToUsdRate = await getINRToUSDRate()
    const usdToInrRate = 1 / inrToUsdRate // Convert INR to USD rate to USD to INR rate
    const subtotalINR = convertUSDToINR(subtotalUSD, inrToUsdRate)
    const gstAmount = subtotalINR * GST_RATE
    const totalAmountINR = subtotalINR + gstAmount

    console.log("Pricing calculation:", {
      selectedProgram,
      selectedMonths,
      selectedAddon,
      programPriceUSD,
      totalProgramPriceUSD,
      addOnPriceUSD,
      subtotalUSD,
      inrToUsdRate,
      usdToInrRate,
      subtotalINR,
      gstAmount,
      totalAmountINR,
    })

    if (studentData) {
      let idDocumentBinary = null
      let photoBinary = null

      if (studentData?.idDocumentBase64) {
        try {
          const base64Data = studentData.idDocumentBase64.split(",")[1]
          idDocumentBinary = Buffer.from(base64Data, "base64")
        } catch (error) {
          console.error("Error processing ID document:", error)
        }
      }

      if (studentData?.studentPhotoBase64) {
        try {
          const base64Data = studentData.studentPhotoBase64.split(",")[1]
          photoBinary = Buffer.from(base64Data, "base64")
        } catch (error) {
          console.error("Error processing student photo:", error)
        }
      }

      const sharedInvoiceLink = crypto.randomUUID()

      await prisma.student.create({
        data: {
          fullName: studentData?.fullName || "John Doe",
          dateOfBirth: studentData?.dateOfBirth
            ? new Date(
                `${studentData.dateOfBirth.year}-${studentData.dateOfBirth.month.padStart(2, "0")}-${studentData.dateOfBirth.day.padStart(2, "0")}`,
              )
            : new Date("1995-01-01"),
          countryOfCitizenship: studentData?.countryOfCitizenship || "India",
          referralCode: studentData?.referralCode || null,
          primaryPhone: studentData?.primaryPhone || "+91 9876543210",
          secondaryPhone: studentData?.secondaryPhone || null,
          whatsappNotifications: studentData?.whatsappNotifications || false,
          email: studentData?.email || "dummy@example.com",
          residentialAddress: studentData?.residentialAddress || "123 Dummy Street",
          city: studentData?.city || "Mumbai",
          state: studentData?.state || "Maharashtra",
          zipCode: studentData?.zipCode || "400001",
          country: studentData?.country || "India",
          highestQualification: studentData?.highestQualification || "Graduate",
          specialization: studentData?.specialization || "Computer Science",
          currentProfession: studentData?.currentProfession || "Software Developer",
          currentOrganization: studentData?.currentOrganization || "Tech Company",
          linkedinProfile: studentData?.linkedinProfile || null,
          idType: studentData?.idType || "Passport",
          idNumber: studentData?.idNumber || "A1234567",
          idDocument: idDocumentBinary,
          photo: photoBinary,
          selectedProgram: selectedProgram || "Skill Phase",
          programDuration: selectedMonths || 3,
          programPrice: totalAmountINR,
          selectedAddon: selectedAddon || null,
          addonPrice: addOnPriceUSD > 0 ? convertUSDToINR(addOnPriceUSD, inrToUsdRate) : 0,
          totalAmount: totalAmountINR,
          invoiceLink: sharedInvoiceLink,
          paymentId: null,
          paymentStatus: "PROCESSING", // Set as PROCESSING initially
          razorpayOrderId: null,
          razorpayPaymentId: null,
          razorpaySignature: null,
          agreedToTerms: studentData?.agreedToTerms || true,
          certifiedInformation: studentData?.certifiedInformation || true,
        },
      })

      console.log("Student record created with PROCESSING status")
    }

    const options = {
      amount: Math.round(totalAmountINR * 100), // Razorpay expects amount in paise
      currency: "INR",
      receipt,
    }

    const order = await razorpay.orders.create(options)

    return NextResponse.json({
      ...order,
      pricing: {
        programPriceUSD,
        totalProgramPriceUSD,
        addOnPriceUSD,
        subtotalUSD,
        subtotalINR,
        gstAmount,
        totalAmountUSD: subtotalUSD,
        totalAmountINR: totalAmountINR,
        duration: selectedMonths,
        exchangeRate: {
          inrToUsd: inrToUsdRate,
          usdToInr: usdToInrRate,
        },
      },
    })
  } catch (error) {
    console.error("Error creating order:", error)
    return NextResponse.json({ error: "Failed to create order" }, { status: 500 })
  }
}
