import { type NextRequest, NextResponse } from "next/server"
import nodemailer from "nodemailer"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { studentEmail, studentName, invoiceData, attachmentData } = body

    // Create transporter using environment variables
    const transporter = nodemailer.createTransport({
      service: "gmail", // or your email service
      auth: {
        // user: process.env.EMAIL_USER,
        // pass: process.env.EMAIL_PASSWORD, // Use app password for Gmail
                user: "rajdeeppaul304@gmail.com",
        pass: "gmdb yrtg rybx recz", // consider moving this to an environment variable

      },
    })

    // Email content
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: studentEmail,
      subject: `Invoice ${invoiceData.invoiceNumber} - SIRTIFAI Programme`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background-color: #FC4C03; color: white; padding: 20px; text-align: center;">
            <h1>SIRTIFAI</h1>
            <h2>Payment Confirmation & Invoice</h2>
          </div>
          
          <div style="padding: 20px; background-color: #f9f9f9;">
            <p>Dear ${studentName},</p>
            
            <p>Thank you for your payment! Your enrollment has been confirmed.</p>
            
            <div style="background-color: white; padding: 15px; border-radius: 5px; margin: 20px 0;">
              <h3>Payment Details:</h3>
              <p><strong>Invoice Number:</strong> ${invoiceData.invoiceNumber}</p>
              <p><strong>Program:</strong> ${invoiceData.programName}</p>
              <p><strong>Duration:</strong> ${invoiceData.duration} months</p>
              ${invoiceData.addonName ? `<p><strong>Add-on:</strong> ${invoiceData.addonName}</p>` : ""}
              <p><strong>Total Amount:</strong> ₹${invoiceData.total.toLocaleString()}</p>
              <p><strong>Payment Status:</strong> ${invoiceData.paymentStatus}</p>
              <p><strong>Payment Date:</strong> ${new Date(invoiceData.paymentDate).toLocaleDateString()}</p>
            </div>
            
            <p>You will receive further instructions about your program shortly.</p>
            
            <p>If you have any questions, please contact us at support@sirtifai.com</p>
            
            <p>Best regards,<br>The SIRTIFAI Team</p>
          </div>
          
          <div style="background-color: #333; color: white; padding: 10px; text-align: center; font-size: 12px;">
            <p>&copy; 2023 SIRTIFAI. All rights reserved.</p>
          </div>
        </div>
      `,
    }

    // Send email
    await transporter.sendMail(mailOptions)

    return NextResponse.json({
      success: true,
      message: "Invoice email sent successfully",
    })
  } catch (error) {
    console.error("Error sending email:", error)
    return NextResponse.json(
      {
        success: false,
        error: "Failed to send email",
        details: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 },
    )
  }
}
