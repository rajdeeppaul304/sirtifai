import { type NextRequest, NextResponse } from "next/server"

// Mock data - In a real application, this would come from your database
const mockStudents = [
  {
    id: "1",
    studentName: "Rahul Sharma",
    studentEmail: "rahul.sharma@email.com",
    studentPhone: "+91-9876543210",
    guardianName: "Suresh Sharma",
    guardianPhone: "+91-9876543211",
    program: "Practice Phase",
    programTier: "Pro",
    duration: 6,
    amount: 9999,
    paymentId: "pay_123456789",
    paymentDate: "2024-01-15T10:30:00Z",
    status: "completed",
    addOns: ["Legal Services"],
    institution: "IIT Delhi",
    city: "Delhi",
    state: "Delhi",
  },
  // Add more mock data as needed
]

export async function GET(request: NextRequest) {
  try {
    // In a real application, you would:
    // 1. Verify admin authentication
    // 2. Query your database for student records
    // 3. Apply any filters or pagination

    const { searchParams } = new URL(request.url)
    const status = searchParams.get("status")
    const program = searchParams.get("program")
    const search = searchParams.get("search")

    let filteredStudents = mockStudents

    if (status && status !== "all") {
      filteredStudents = filteredStudents.filter((student) => student.status === status)
    }

    if (program && program !== "all") {
      filteredStudents = filteredStudents.filter((student) => student.program === program)
    }

    if (search) {
      filteredStudents = filteredStudents.filter(
        (student) =>
          student.studentName.toLowerCase().includes(search.toLowerCase()) ||
          student.studentEmail.toLowerCase().includes(search.toLowerCase()) ||
          student.paymentId.toLowerCase().includes(search.toLowerCase()),
      )
    }

    return NextResponse.json({
      success: true,
      data: filteredStudents,
      total: filteredStudents.length,
    })
  } catch (error) {
    console.error("Error fetching students:", error)
    return NextResponse.json({ success: false, error: "Failed to fetch students" }, { status: 500 })
  }
}
