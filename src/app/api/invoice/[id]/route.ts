import { type NextRequest, NextResponse } from "next/server"
import { prisma } from "../../../../../lib/prisma"

export async function GET(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    const invoiceId = params.id

    const student = await prisma.student.findFirst({
      where: {
        invoiceLink: invoiceId,
        paymentStatus: "COMPLETED", // Only show invoices for completed payments
      },
    })

    if (!student) {
      return NextResponse.json({ error: "Invoice not found or payment not completed" }, { status: 404 })
    }

    return NextResponse.json({
      invoice: {
        id: student.id,
        invoiceNumber: student.invoiceNumber,
        createdAt: student.createdAt,
        programName: student.programName,
        programPrice: student.programPrice,
        programPriceINR: student.programPriceINR,
        programDuration: student.programDuration,
        addonName: student.addonName,
        addonPrice: student.addonPrice,
        addonPriceINR: student.addonPriceINR,
        subtotal: student.subtotal,
        subtotalINR: student.subtotalINR,
        gstRate: student.gstRate,
        gstAmount: student.gstAmount,
        gstAmountINR: student.gstAmountINR,
        total: student.totalAmount,
        totalINR: student.totalINR,
        exchangeRate: student.exchangeRateUsed,
        paymentStatus: student.paymentStatus,
        paymentMethod: student.paymentMethod,
        paymentDate: student.paymentDate,
        type: student.type, // Add type field for duration display logic
      },
      student: {
        fullName: student.fullName,
        email: student.email,
        primaryPhone: student.primaryPhone,
        residentialAddress: student.residentialAddress,
        city: student.city,
        state: student.state,
        zipCode: student.zipCode,
        country: student.country,
      },
    })
  } catch (error) {
    console.error("Error fetching invoice:", error)
    return NextResponse.json({ error: "Failed to fetch invoice" }, { status: 500 })
  }
}
