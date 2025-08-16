import { type NextRequest, NextResponse } from "next/server"
import { prisma } from "../../../../../lib/prisma"

export async function GET(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    const invoiceId = params.id

    // Find invoice by invoiceLink UUID
    const invoice = await prisma.invoice.findFirst({
      where: {
        invoiceLink: invoiceId,
      },
      include: {
        student: true,
      },
    })

    if (!invoice) {
      return NextResponse.json({ error: "Invoice not found" }, { status: 404 })
    }

    // Return invoice data with student information
    return NextResponse.json({
      invoice: {
        id: invoice.id,
        invoiceNumber: invoice.invoiceNumber,
        createdAt: invoice.createdAt,
        programName: invoice.programName,
        programPrice: invoice.programPrice,
        programPriceINR: invoice.programPriceINR,
        programDuration: invoice.programDuration,
        addonName: invoice.addonName,
        addonPrice: invoice.addonPrice,
        addonPriceINR: invoice.addonPriceINR,
        subtotal: invoice.subtotal,
        subtotalINR: invoice.subtotalINR,
        gstRate: invoice.gstRate,
        gstAmount: invoice.gstAmount,
        gstAmountINR: invoice.gstAmountINR,
        total: invoice.total,
        totalINR: invoice.totalINR,
        exchangeRate: invoice.exchangeRateUsed,
        paymentStatus: invoice.paymentStatus,
        paymentMethod: invoice.paymentMethod,
        paymentDate: invoice.paymentDate,
      },
      student: {
        fullName: invoice.student.fullName,
        email: invoice.student.email,
        primaryPhone: invoice.student.primaryPhone,
        residentialAddress: invoice.student.residentialAddress,
        city: invoice.student.city,
        state: invoice.student.state,
        zipCode: invoice.student.zipCode,
        country: invoice.student.country,
      },
    })
  } catch (error) {
    console.error("Error fetching invoice:", error)
    return NextResponse.json({ error: "Failed to fetch invoice" }, { status: 500 })
  }
}
