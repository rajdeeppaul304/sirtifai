"use client"

import { useState, useEffect } from "react"
import { Search, Download, Eye, Users, CreditCard, TrendingUp, Calendar } from "lucide-react"

interface StudentRecord {
  id: string
  studentName: string
  studentEmail: string
  studentPhone: string
  guardianName: string
  guardianPhone: string
  program: string
  programTier: string
  duration: number
  amount: number
  paymentId: string
  paymentDate: string
  status: "completed" | "pending" | "failed"
  addOns: string[]
  institution: string
  city: string
  state: string
}

const AdminDashboard = () => {
  const [students, setStudents] = useState<StudentRecord[]>([])
  const [filteredStudents, setFilteredStudents] = useState<StudentRecord[]>([])
  const [searchTerm, setSearchTerm] = useState("")
  const [statusFilter, setStatusFilter] = useState("all")
  const [programFilter, setProgramFilter] = useState("all")
  const [selectedStudent, setSelectedStudent] = useState<StudentRecord | null>(null)
  const [showModal, setShowModal] = useState(false)

  // Mock data - In a real application, this would come from your database
  useEffect(() => {
    const mockStudents: StudentRecord[] = [
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
      {
        id: "2",
        studentName: "Priya Patel",
        studentEmail: "priya.patel@email.com",
        studentPhone: "+91-9876543212",
        guardianName: "Ramesh Patel",
        guardianPhone: "+91-9876543213",
        program: "Skill Phase",
        programTier: "Basic",
        duration: 3,
        amount: 5999,
        paymentId: "pay_123456790",
        paymentDate: "2024-01-14T14:20:00Z",
        status: "completed",
        addOns: [],
        institution: "NIT Surat",
        city: "Surat",
        state: "Gujarat",
      },
      {
        id: "3",
        studentName: "Arjun Kumar",
        studentEmail: "arjun.kumar@email.com",
        studentPhone: "+91-9876543214",
        guardianName: "Vijay Kumar",
        guardianPhone: "+91-9876543215",
        program: "Progress Phase",
        programTier: "Elite",
        duration: 12,
        amount: 59999,
        paymentId: "pay_123456791",
        paymentDate: "2024-01-13T09:15:00Z",
        status: "completed",
        addOns: ["Payroll Services", "CA Services"],
        institution: "BITS Pilani",
        city: "Pilani",
        state: "Rajasthan",
      },
      {
        id: "4",
        studentName: "Sneha Reddy",
        studentEmail: "sneha.reddy@email.com",
        studentPhone: "+91-9876543216",
        guardianName: "Krishna Reddy",
        guardianPhone: "+91-9876543217",
        program: "Practice Phase",
        programTier: "Basic",
        duration: 3,
        amount: 5999,
        paymentId: "pay_123456792",
        paymentDate: "2024-01-12T16:45:00Z",
        status: "completed",
        addOns: ["CA Services"],
        institution: "IIIT Hyderabad",
        city: "Hyderabad",
        state: "Telangana",
      },
      {
        id: "5",
        studentName: "Vikash Singh",
        studentEmail: "vikash.singh@email.com",
        studentPhone: "+91-9876543218",
        guardianName: "Rajesh Singh",
        guardianPhone: "+91-9876543219",
        program: "Progress Phase",
        programTier: "Pro",
        duration: 8,
        amount: 29999,
        paymentId: "pay_123456793",
        paymentDate: "2024-01-11T11:30:00Z",
        status: "pending",
        addOns: ["Legal Services", "Contract & IP Support"],
        institution: "IIT Bombay",
        city: "Mumbai",
        state: "Maharashtra",
      },
    ]

    setStudents(mockStudents)
    setFilteredStudents(mockStudents)
  }, [])

  // Filter students based on search and filters
  useEffect(() => {
    let filtered = students

    // Search filter
    if (searchTerm) {
      filtered = filtered.filter(
        (student) =>
          student.studentName.toLowerCase().includes(searchTerm.toLowerCase()) ||
          student.studentEmail.toLowerCase().includes(searchTerm.toLowerCase()) ||
          student.paymentId.toLowerCase().includes(searchTerm.toLowerCase()),
      )
    }

    // Status filter
    if (statusFilter !== "all") {
      filtered = filtered.filter((student) => student.status === statusFilter)
    }

    // Program filter
    if (programFilter !== "all") {
      filtered = filtered.filter((student) => student.program === programFilter)
    }

    setFilteredStudents(filtered)
  }, [searchTerm, statusFilter, programFilter, students])

  const handleViewDetails = (student: StudentRecord) => {
    setSelectedStudent(student)
    setShowModal(true)
  }

  const handleExportData = () => {
    // In a real application, this would generate and download a CSV/Excel file
    const csvContent = [
      ["Name", "Email", "Phone", "Program", "Amount", "Payment Date", "Status"],
      ...filteredStudents.map((student) => [
        student.studentName,
        student.studentEmail,
        student.studentPhone,
        `${student.program} - ${student.programTier}`,
        student.amount,
        new Date(student.paymentDate).toLocaleDateString(),
        student.status,
      ]),
    ]
      .map((row) => row.join(","))
      .join("\n")

    const blob = new Blob([csvContent], { type: "text/csv" })
    const url = window.URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    a.download = "students_data.csv"
    a.click()
    window.URL.revokeObjectURL(url)
  }

  const getStatusBadge = (status: string) => {
    const statusStyles = {
      completed: "bg-green-100 text-green-800",
      pending: "bg-yellow-100 text-yellow-800",
      failed: "bg-red-100 text-red-800",
    }

    return (
      <span
        className={`px-2 py-1 rounded-full text-xs font-medium ${statusStyles[status as keyof typeof statusStyles]}`}
      >
        {status.charAt(0).toUpperCase() + status.slice(1)}
      </span>
    )
  }

  const totalRevenue = students.filter((s) => s.status === "completed").reduce((sum, s) => sum + s.amount, 0)
  const completedPayments = students.filter((s) => s.status === "completed").length
  const pendingPayments = students.filter((s) => s.status === "pending").length

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Admin Dashboard</h1>
          <p className="text-gray-600">Manage student enrollments and payments</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center">
              <div className="p-2 bg-blue-100 rounded-lg">
                <Users className="w-6 h-6 text-blue-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Total Students</p>
                <p className="text-2xl font-bold text-gray-900">{students.length}</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center">
              <div className="p-2 bg-green-100 rounded-lg">
                <CreditCard className="w-6 h-6 text-green-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Completed Payments</p>
                <p className="text-2xl font-bold text-gray-900">{completedPayments}</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center">
              <div className="p-2 bg-yellow-100 rounded-lg">
                <Calendar className="w-6 h-6 text-yellow-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Pending Payments</p>
                <p className="text-2xl font-bold text-gray-900">{pendingPayments}</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center">
              <div className="p-2 bg-[#FC4C03] bg-opacity-10 rounded-lg">
                <TrendingUp className="w-6 h-6 text-[#FC4C03]" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Total Revenue</p>
                <p className="text-2xl font-bold text-gray-900">₹{totalRevenue.toLocaleString()}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Filters and Search */}
        <div className="bg-white rounded-lg shadow p-6 mb-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
            <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <input
                  type="text"
                  placeholder="Search students..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FC4C03] focus:border-transparent"
                />
              </div>

              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FC4C03] focus:border-transparent"
              >
                <option value="all">All Status</option>
                <option value="completed">Completed</option>
                <option value="pending">Pending</option>
                <option value="failed">Failed</option>
              </select>

              <select
                value={programFilter}
                onChange={(e) => setProgramFilter(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FC4C03] focus:border-transparent"
              >
                <option value="all">All Programs</option>
                <option value="Skill Phase">Skill Phase</option>
                <option value="Practice Phase">Practice Phase</option>
                <option value="Progress Phase">Progress Phase</option>
              </select>
            </div>

            <button
              onClick={handleExportData}
              className="flex items-center space-x-2 px-4 py-2 bg-[#FC4C03] text-white rounded-lg hover:bg-[#e63d00] transition-colors"
            >
              <Download className="w-4 h-4" />
              <span>Export Data</span>
            </button>
          </div>
        </div>

        {/* Students Table */}
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Student
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Program
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Amount
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Payment Date
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredStudents.map((student) => (
                  <tr key={student.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div>
                        <div className="text-sm font-medium text-gray-900">{student.studentName}</div>
                        <div className="text-sm text-gray-500">{student.studentEmail}</div>
                        <div className="text-sm text-gray-500">{student.studentPhone}</div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{student.program}</div>
                      <div className="text-sm text-gray-500">
                        {student.programTier} - {student.duration} months
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      ₹{student.amount.toLocaleString()}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {new Date(student.paymentDate).toLocaleDateString()}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">{getStatusBadge(student.status)}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <button
                        onClick={() => handleViewDetails(student)}
                        className="flex items-center space-x-1 text-[#FC4C03] hover:text-[#e63d00]"
                      >
                        <Eye className="w-4 h-4" />
                        <span>View</span>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {filteredStudents.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500">No students found matching your criteria.</p>
            </div>
          )}
        </div>

        {/* Student Details Modal */}
        {showModal && selectedStudent && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
              <div className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-bold text-gray-900">Student Details</h2>
                  <button onClick={() => setShowModal(false)} className="text-gray-400 hover:text-gray-600">
                    <span className="sr-only">Close</span>
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* Student Information */}
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Student Information</h3>
                    <div className="space-y-3">
                      <div>
                        <label className="text-sm font-medium text-gray-600">Name</label>
                        <p className="text-gray-900">{selectedStudent.studentName}</p>
                      </div>
                      <div>
                        <label className="text-sm font-medium text-gray-600">Email</label>
                        <p className="text-gray-900">{selectedStudent.studentEmail}</p>
                      </div>
                      <div>
                        <label className="text-sm font-medium text-gray-600">Phone</label>
                        <p className="text-gray-900">{selectedStudent.studentPhone}</p>
                      </div>
                      <div>
                        <label className="text-sm font-medium text-gray-600">Institution</label>
                        <p className="text-gray-900">{selectedStudent.institution}</p>
                      </div>
                      <div>
                        <label className="text-sm font-medium text-gray-600">Location</label>
                        <p className="text-gray-900">
                          {selectedStudent.city}, {selectedStudent.state}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Guardian Information */}
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Guardian Information</h3>
                    <div className="space-y-3">
                      <div>
                        <label className="text-sm font-medium text-gray-600">Guardian Name</label>
                        <p className="text-gray-900">{selectedStudent.guardianName}</p>
                      </div>
                      <div>
                        <label className="text-sm font-medium text-gray-600">Guardian Phone</label>
                        <p className="text-gray-900">{selectedStudent.guardianPhone}</p>
                      </div>
                    </div>
                  </div>

                  {/* Program Information */}
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Program Information</h3>
                    <div className="space-y-3">
                      <div>
                        <label className="text-sm font-medium text-gray-600">Program</label>
                        <p className="text-gray-900">
                          {selectedStudent.program} - {selectedStudent.programTier}
                        </p>
                      </div>
                      <div>
                        <label className="text-sm font-medium text-gray-600">Duration</label>
                        <p className="text-gray-900">{selectedStudent.duration} months</p>
                      </div>
                      <div>
                        <label className="text-sm font-medium text-gray-600">Add-ons</label>
                        <p className="text-gray-900">
                          {selectedStudent.addOns.length > 0 ? selectedStudent.addOns.join(", ") : "None"}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Payment Information */}
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Payment Information</h3>
                    <div className="space-y-3">
                      <div>
                        <label className="text-sm font-medium text-gray-600">Amount</label>
                        <p className="text-gray-900">₹{selectedStudent.amount.toLocaleString()}</p>
                      </div>
                      <div>
                        <label className="text-sm font-medium text-gray-600">Payment ID</label>
                        <p className="text-gray-900">{selectedStudent.paymentId}</p>
                      </div>
                      <div>
                        <label className="text-sm font-medium text-gray-600">Payment Date</label>
                        <p className="text-gray-900">{new Date(selectedStudent.paymentDate).toLocaleString()}</p>
                      </div>
                      <div>
                        <label className="text-sm font-medium text-gray-600">Status</label>
                        <div className="mt-1">{getStatusBadge(selectedStudent.status)}</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-8 flex justify-end">
                  <button
                    onClick={() => setShowModal(false)}
                    className="px-6 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition-colors"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default AdminDashboard
