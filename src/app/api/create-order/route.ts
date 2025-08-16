import { type NextRequest, NextResponse } from "next/server"
import Razorpay from "razorpay"
import { getProductById, createStandardizedPackageData } from "../../../lib/products"
import { getINRToUSDRate, convertUSDToINR } from "../../../lib/currency"
import { prisma } from "../../../../lib/prisma"
import { v4 as uuidv4 } from "uuid"

const GST_RATE = 0.18 // 18% GST

function generateInvoiceNumber(): string {
  const date = new Date()
  const dateStr = date.toISOString().slice(0, 10).replace(/-/g, "")
  const randomNum = Math.floor(Math.random() * 1000000)
    .toString()
    .padStart(6, "0")
  return `SRT/INT/${dateStr}/${randomNum}`
}

export async function POST(request: NextRequest) {
  try {
    const razorpay = new Razorpay({
      key_id: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID || "",
      key_secret: process.env.RAZORPAY_KEY_SECRET || "",
    })

    const body = await request.json()
    const { packageData, studentData, receipt } = body

    console.log("Received data in create-order:", { packageData, studentData })

    if (!packageData || !studentData) {
      return NextResponse.json({ error: "Missing package data or student data" }, { status: 400 })
    }

    const selectedProduct = packageData?.selectedProduct || packageData?.selectedProgram
    const selectedAddon = packageData?.selectedAddon
    const duration = packageData?.productData?.duration || packageData?.selectedMonths || 1
    const packageType = packageData?.type || "program"

    // Get product details from centralized JSON
    const product = getProductById(selectedProduct)
    const addon = selectedAddon ? getProductById(selectedAddon) : null

    if (!product) {
      console.error("Product not found for ID:", selectedProduct)
      return NextResponse.json({ error: "Product not found" }, { status: 400 })
    }

    // Calculate pricing using standardized data
    const standardizedData = createStandardizedPackageData(packageType, selectedProduct, selectedAddon, duration)

    const programPriceUSD = standardizedData.pricing.programPrice
    const addOnPriceUSD = standardizedData.pricing.addonPrice
    const subtotalUSD = standardizedData.pricing.subtotal

    if (isNaN(programPriceUSD) || isNaN(subtotalUSD)) {
      console.error("Invalid pricing calculation:", {
        programPriceUSD,
        duration,
        addOnPriceUSD,
        subtotalUSD,
      })
      return NextResponse.json({ error: "Invalid pricing calculation" }, { status: 400 })
    }

    const inrToUsdRate = await getINRToUSDRate()
    const usdToInrRate = 1 / inrToUsdRate
    const subtotalINR = convertUSDToINR(subtotalUSD, inrToUsdRate)
    const gstAmount = subtotalINR * GST_RATE
    const totalAmountINR = subtotalINR + gstAmount

    const programPriceINR = convertUSDToINR(programPriceUSD, inrToUsdRate)
    const addonPriceINR = addOnPriceUSD ? convertUSDToINR(addOnPriceUSD, inrToUsdRate) : null

    const options = {
      amount: Math.round(totalAmountINR * 100), // Razorpay expects amount in paise
      currency: "INR",
      receipt,
    }

    const order = await razorpay.orders.create(options)

    const invoiceNumber = generateInvoiceNumber()
    const invoiceLink = uuidv4()

    let parsedDateOfBirth: Date
    if (!studentData.dateOfBirth) {
      return NextResponse.json({ error: "Date of birth is required" }, { status: 400 })
    }

    if (
      typeof studentData.dateOfBirth === "object" &&
      studentData.dateOfBirth.day &&
      studentData.dateOfBirth.month &&
      studentData.dateOfBirth.year
    ) {
      const { day, month, year } = studentData.dateOfBirth
      // Create date using year, month-1 (0-indexed), day format
      const dateValue = new Date(Number.parseInt(year), Number.parseInt(month) - 1, Number.parseInt(day))
      if (!isNaN(dateValue.getTime())) {
        parsedDateOfBirth = dateValue
      } else {
        console.error("Invalid date of birth components:", studentData.dateOfBirth)
        return NextResponse.json({ error: "Invalid date of birth format" }, { status: 400 })
      }
    } else {
      // Fallback for string format
      const dateValue = new Date(studentData.dateOfBirth)
      if (!isNaN(dateValue.getTime())) {
        parsedDateOfBirth = dateValue
      } else {
        console.error("Invalid date of birth:", studentData.dateOfBirth)
        return NextResponse.json({ error: "Invalid date of birth format" }, { status: 400 })
      }
    }

    const student = await prisma.student.create({
      data: {
        // Personal Details
        fullName: studentData.fullName,
        dateOfBirth: parsedDateOfBirth, // Use validated date
        countryOfCitizenship: studentData.countryOfCitizenship,
        referralCode: studentData.referralCode || null,

        // Contact Information
        primaryPhone: studentData.primaryPhone,
        secondaryPhone: studentData.secondaryPhone || null,
        whatsappNotifications: studentData.whatsappNotifications || false,
        email: studentData.email,
        residentialAddress: studentData.residentialAddress,
        city: studentData.city,
        state: studentData.state,
        zipCode: studentData.zipCode,
        country: studentData.country,

        // Education
        highestQualification: studentData.highestQualification,
        specialization: studentData.specialization || null,

        // Professional
        currentProfession: studentData.currentProfession || null,
        currentOrganization: studentData.currentOrganization || null,
        linkedinProfile: studentData.linkedinProfile || null,

        // Identity Document
        idType: studentData.idType,
        idNumber: studentData.idNumber,
        idDocument: studentData.idDocumentBase64
          ? Buffer.from(studentData.idDocumentBase64.split(",")[1], "base64")
          : null,
        photo: studentData.studentPhotoBase64
          ? Buffer.from(studentData.studentPhotoBase64.split(",")[1], "base64")
          : null,

        // Program Selection
        type: packageType,
        selectedProgram: selectedProduct,
        programDuration: duration,
        programPrice: programPriceUSD,
        selectedAddon: selectedAddon || null,
        addonPrice: addOnPriceUSD || null,

        // Invoice Details
        invoiceNumber,
        programName: product.name,
        addonName: addon?.name || null,
        subtotal: subtotalUSD,
        gstRate: GST_RATE * 100, // Store as percentage
        gstAmount: subtotalUSD * GST_RATE, // GST in USD
        totalAmount: subtotalUSD * (1 + GST_RATE), // Total in USD

        // INR Calculations
        exchangeRateUsed: usdToInrRate,
        programPriceINR,
        addonPriceINR,
        subtotalINR,
        gstAmountINR: gstAmount,
        totalINR: totalAmountINR,

        // Payment Details
        paymentStatus: "PROCESSING",
        razorpayOrderId: order.id,
        invoiceLink,

        // Confirmation
        agreedToTerms: studentData.agreedToTerms || false,
        certifiedInformation: studentData.certifiedInformation || false,
      },
    })

    console.log("Student record created successfully:", {
      studentId: student.id,
      orderId: order.id,
      invoiceNumber,
      programName: product.name,
      addonName: addon?.name,
      totalAmountINR,
    })

    return NextResponse.json({
      ...order,
      studentId: student.id,
      invoiceLink,
      pricing: {
        programPriceUSD,
        totalProgramPriceUSD: programPriceUSD,
        addOnPriceUSD,
        subtotalUSD,
        subtotalINR,
        gstAmount,
        totalAmountUSD: subtotalUSD * (1 + GST_RATE),
        totalAmountINR: totalAmountINR,
        duration: duration,
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
