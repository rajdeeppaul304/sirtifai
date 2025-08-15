"use client"

import { useState, useEffect } from "react"
import { Search, Download, Eye, Users, CreditCard, TrendingUp, Calendar, FileText, ImageIcon } from "lucide-react"

interface StudentRecord {
  id: string
  fullName: string
  email: string
  primaryPhone: string
  secondaryPhone?: string
  dateOfBirth: string
  countryOfCitizenship: string
  residentialAddress: string
  city: string
  state: string
  zipCode: string
  country: string
  highestQualification: string
  specialization?: string
  currentProfession?: string
  currentOrganization?: string
  linkedinProfile?: string
  idType: string
  idNumber: string
  selectedProgram: string
  programDuration: number
  programPrice: number
  selectedAddon?: string
  addonPrice?: number
  totalAmount: number
  paymentId?: string
  paymentStatus: string
  razorpayOrderId?: string
  razorpayPaymentId?: string
  createdAt: string
  updatedAt: string
  referralCode?: string
  whatsappNotifications: boolean
  agreedToTerms: boolean
  certifiedInformation: boolean
  photoBase64?: string
  idDocumentBase64?: string
  photoUrl?: string
  idDocumentUrl?: string
}

const AdminDashboard = () => {
  const [students, setStudents] = useState<StudentRecord[]>([])
  const [filteredStudents, setFilteredStudents] = useState<StudentRecord[]>([])
  const [searchTerm, setSearchTerm] = useState("")
  const [statusFilter, setStatusFilter] = useState("all")
  const [programFilter, setProgramFilter] = useState("all")
  const [selectedStudent, setSelectedStudent] = useState<StudentRecord | null>(null)
  const [showModal, setShowModal] = useState(false)
  const [showPhotoModal, setShowPhotoModal] = useState(false)
  const [showDocumentModal, setShowDocumentModal] = useState(false)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("")

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        setLoading(true)
        const response = await fetch("/api/admin/students")
        const data = await response.json()

        if (data.success) {
          setStudents(data.data)
          setFilteredStudents(data.data)
        } else {
          setError("Failed to fetch student data")
        }
      } catch (error) {
        console.error("Error fetching students:", error)
        setError("Error loading student data")
      } finally {
        setLoading(false)
      }
    }

    fetchStudents()
  }, [])

  // Filter students based on search and filters
  useEffect(() => {
    let filtered = students

    // Search filter
    if (searchTerm) {
      filtered = filtered.filter(
        (student) =>
          student.fullName.toLowerCase().includes(searchTerm.toLowerCase()) ||
          student.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
          student.razorpayPaymentId?.toLowerCase().includes(searchTerm.toLowerCase()),
      )
    }

    // Status filter
    if (statusFilter !== "all") {
      filtered = filtered.filter((student) => student.paymentStatus === statusFilter)
    }

    // Program filter
    if (programFilter !== "all") {
      filtered = filtered.filter((student) => student.selectedProgram === programFilter)
    }

    setFilteredStudents(filtered)
  }, [searchTerm, statusFilter, programFilter, students])

  const handleViewDetails = (student: StudentRecord) => {
    setSelectedStudent(student)
    setShowModal(true)
  }

  const handleViewPhoto = (student: StudentRecord) => {
    setSelectedStudent(student)
    setShowPhotoModal(true)
  }

  const handleViewDocument = (student: StudentRecord) => {
    setSelectedStudent(student)
    setShowDocumentModal(true)
  }

  const handleDownloadDocument = (student: StudentRecord) => {
    if (student.idDocumentBase64) {
      const byteCharacters = atob(student.idDocumentBase64)
      const byteNumbers = new Array(byteCharacters.length)
      for (let i = 0; i < byteCharacters.length; i++) {
        byteNumbers[i] = byteCharacters.charCodeAt(i)
      }
      const byteArray = new Uint8Array(byteNumbers)
      const blob = new Blob([byteArray], { type: "application/pdf" })

      const url = window.URL.createObjectURL(blob)
      const a = document.createElement("a")
      a.href = url
      a.download = `${student.fullName}_ID_Document.pdf`
      a.click()
      window.URL.revokeObjectURL(url)
    }
  }

  const handleExportData = () => {
    const csvContent = [
      [
        "Name",
        "Email",
        "Phone",
        "Program",
        "Duration",
        "Amount",
        "Add-on",
        "Payment Date",
        "Status",
        "City",
        "State",
        "Qualification",
        "Organization",
        "ID Type",
        "ID Number",
        "Date of Birth",
        "Country",
        "Address",
        "Zip Code",
        "WhatsApp",
        "LinkedIn",
        "Referral Code",
      ],
      ...filteredStudents.map((student) => [
        student.fullName,
        student.email,
        student.primaryPhone,
        student.selectedProgram,
        `${student.programDuration} months`,
        student.totalAmount,
        student.selectedAddon || "None",
        new Date(student.createdAt).toLocaleDateString(),
        student.paymentStatus,
        student.city,
        student.state,
        student.highestQualification,
        student.currentOrganization || "N/A",
        student.idType,
        student.idNumber,
        new Date(student.dateOfBirth).toLocaleDateString(),
        student.countryOfCitizenship,
        student.residentialAddress,
        student.zipCode,
        student.whatsappNotifications ? "Yes" : "No",
        student.linkedinProfile || "N/A",
        student.referralCode || "N/A",
      ]),
    ]
      .map((row) => row.join(","))
      .join("\n")

    const blob = new Blob([csvContent], { type: "text/csv" })
    const url = window.URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    a.download = `students_data_${new Date().toISOString().split("T")[0]}.csv`
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
        className={`px-2 py-1 rounded-full text-xs font-medium ${statusStyles[status as keyof typeof statusStyles] || "bg-gray-100 text-gray-800"}`}
      >
        {status.charAt(0).toUpperCase() + status.slice(1)}
      </span>
    )
  }

  const totalRevenue = (students || [])
    .filter((s) => s.paymentStatus === "completed")
    .reduce((sum, s) => sum + s.totalAmount, 0)
  const completedPayments = (students || []).filter((s) => s.paymentStatus === "completed").length
  const pendingPayments = (students || []).filter((s) => s.paymentStatus === "pending").length

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-center h-64">
            <div className="text-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#FC4C03] mx-auto"></div>
              <p className="mt-4 text-gray-600">Loading student data...</p>
            </div>
          </div>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-center h-64">
            <div className="text-center">
              <p className="text-red-600 text-lg">{error}</p>
              <button
                onClick={() => window.location.reload()}
                className="mt-4 px-4 py-2 bg-[#FC4C03] text-white rounded-lg hover:bg-[#e63d00]"
              >
                Retry
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center">
              <div className="p-2 bg-blue-100 rounded-lg">
                <Users className="w-6 h-6 text-blue-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Total Students</p>
                <p className="text-2xl font-bold text-gray-900">{(students || []).length}</p>
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
                <option value="skill">Skill Phase</option>
                <option value="practice-basic">Practice Phase - Basic</option>
                <option value="practice-pro">Practice Phase - Pro</option>
                <option value="practice-elite">Practice Phase - Elite</option>
                <option value="progress-basic">Progress Phase - Basic</option>
                <option value="progress-pro">Progress Phase - Pro</option>
                <option value="progress-elite">Progress Phase - Elite</option>
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
                    Registration Date
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Documents
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
                        <div className="text-sm font-medium text-gray-900">{student.fullName}</div>
                        <div className="text-sm text-gray-500">{student.email}</div>
                        <div className="text-sm text-gray-500">{student.primaryPhone}</div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{student.selectedProgram}</div>
                      <div className="text-sm text-gray-500">{student.programDuration} months</div>
                      {student.selectedAddon && <div className="text-sm text-blue-600">+ {student.selectedAddon}</div>}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      ₹{student.totalAmount.toLocaleString()}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {new Date(student.createdAt).toLocaleDateString()}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">{getStatusBadge(student.paymentStatus)}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex space-x-2">
                        {student.photoBase64 && (
                          <button
                            onClick={() => handleViewPhoto(student)}
                            className="text-blue-600 hover:text-blue-800"
                            title="View Photo"
                          >
                            <ImageIcon className="w-4 h-4" />
                          </button>
                        )}
                        {student.idDocumentBase64 && (
                          <button
                            onClick={() => handleViewDocument(student)}
                            className="text-green-600 hover:text-green-800"
                            title="View ID Document"
                          >
                            <FileText className="w-4 h-4" />
                          </button>
                        )}
                      </div>
                    </td>
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
            <div className="bg-white rounded-lg max-w-6xl w-full max-h-[90vh] overflow-y-auto">
              <div className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-bold text-gray-900">Student Details</h2>
                  <button onClick={() => setShowModal(false)} className="text-gray-400 hover:text-gray-600">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {/* Personal Information */}
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Personal Information</h3>
                    <div className="space-y-3">
                      <div>
                        <label className="text-sm font-medium text-gray-600">Full Name</label>
                        <p className="text-gray-900">{selectedStudent.fullName}</p>
                      </div>
                      <div>
                        <label className="text-sm font-medium text-gray-600">Email</label>
                        <p className="text-gray-900">{selectedStudent.email}</p>
                      </div>
                      <div>
                        <label className="text-sm font-medium text-gray-600">Primary Phone</label>
                        <p className="text-gray-900">{selectedStudent.primaryPhone}</p>
                      </div>
                      {selectedStudent.secondaryPhone && (
                        <div>
                          <label className="text-sm font-medium text-gray-600">Secondary Phone</label>
                          <p className="text-gray-900">{selectedStudent.secondaryPhone}</p>
                        </div>
                      )}
                      <div>
                        <label className="text-sm font-medium text-gray-600">Date of Birth</label>
                        <p className="text-gray-900">{new Date(selectedStudent.dateOfBirth).toLocaleDateString()}</p>
                      </div>
                      <div>
                        <label className="text-sm font-medium text-gray-600">Citizenship</label>
                        <p className="text-gray-900">{selectedStudent.countryOfCitizenship}</p>
                      </div>
                      {selectedStudent.referralCode && (
                        <div>
                          <label className="text-sm font-medium text-gray-600">Referral Code</label>
                          <p className="text-gray-900">{selectedStudent.referralCode}</p>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Contact & Address */}
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Contact & Address</h3>
                    <div className="space-y-3">
                      <div>
                        <label className="text-sm font-medium text-gray-600">Address</label>
                        <p className="text-gray-900">{selectedStudent.residentialAddress}</p>
                      </div>
                      <div>
                        <label className="text-sm font-medium text-gray-600">City</label>
                        <p className="text-gray-900">{selectedStudent.city}</p>
                      </div>
                      <div>
                        <label className="text-sm font-medium text-gray-600">State</label>
                        <p className="text-gray-900">{selectedStudent.state}</p>
                      </div>
                      <div>
                        <label className="text-sm font-medium text-gray-600">Zip Code</label>
                        <p className="text-gray-900">{selectedStudent.zipCode}</p>
                      </div>
                      <div>
                        <label className="text-sm font-medium text-gray-600">Country</label>
                        <p className="text-gray-900">{selectedStudent.country}</p>
                      </div>
                      <div>
                        <label className="text-sm font-medium text-gray-600">WhatsApp Notifications</label>
                        <p className="text-gray-900">{selectedStudent.whatsappNotifications ? "Yes" : "No"}</p>
                      </div>
                    </div>
                  </div>

                  {/* Education & Professional */}
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Education & Professional</h3>
                    <div className="space-y-3">
                      <div>
                        <label className="text-sm font-medium text-gray-600">Highest Qualification</label>
                        <p className="text-gray-900">{selectedStudent.highestQualification}</p>
                      </div>
                      {selectedStudent.specialization && (
                        <div>
                          <label className="text-sm font-medium text-gray-600">Specialization</label>
                          <p className="text-gray-900">{selectedStudent.specialization}</p>
                        </div>
                      )}
                      {selectedStudent.currentProfession && (
                        <div>
                          <label className="text-sm font-medium text-gray-600">Current Profession</label>
                          <p className="text-gray-900">{selectedStudent.currentProfession}</p>
                        </div>
                      )}
                      {selectedStudent.currentOrganization && (
                        <div>
                          <label className="text-sm font-medium text-gray-600">Current Organization</label>
                          <p className="text-gray-900">{selectedStudent.currentOrganization}</p>
                        </div>
                      )}
                      {selectedStudent.linkedinProfile && (
                        <div>
                          <label className="text-sm font-medium text-gray-600">LinkedIn</label>
                          <p className="text-gray-900">
                            <a
                              href={selectedStudent.linkedinProfile}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-blue-600 hover:underline"
                            >
                              View Profile
                            </a>
                          </p>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Identity Document */}
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Identity Document</h3>
                    <div className="space-y-3">
                      <div>
                        <label className="text-sm font-medium text-gray-600">ID Type</label>
                        <p className="text-gray-900">{selectedStudent.idType}</p>
                      </div>
                      <div>
                        <label className="text-sm font-medium text-gray-600">ID Number</label>
                        <p className="text-gray-900">{selectedStudent.idNumber}</p>
                      </div>
                      <div className="flex space-x-2 mt-2">
                        {selectedStudent.photoBase64 && (
                          <button
                            onClick={() => handleViewPhoto(selectedStudent)}
                            className="flex items-center space-x-1 px-3 py-1 bg-blue-100 text-blue-700 rounded text-sm hover:bg-blue-200"
                          >
                            <ImageIcon className="w-4 h-4" />
                            <span>View Photo</span>
                          </button>
                        )}
                        {selectedStudent.idDocumentBase64 && (
                          <>
                            <button
                              onClick={() => handleViewDocument(selectedStudent)}
                              className="flex items-center space-x-1 px-3 py-1 bg-green-100 text-green-700 rounded text-sm hover:bg-green-200"
                            >
                              <FileText className="w-4 h-4" />
                              <span>View Document</span>
                            </button>
                            <button
                              onClick={() => handleDownloadDocument(selectedStudent)}
                              className="flex items-center space-x-1 px-3 py-1 bg-gray-100 text-gray-700 rounded text-sm hover:bg-gray-200"
                            >
                              <Download className="w-4 h-4" />
                              <span>Download</span>
                            </button>
                          </>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Program Information */}
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Program Information</h3>
                    <div className="space-y-3">
                      <div>
                        <label className="text-sm font-medium text-gray-600">Selected Program</label>
                        <p className="text-gray-900">{selectedStudent.selectedProgram}</p>
                      </div>
                      <div>
                        <label className="text-sm font-medium text-gray-600">Duration</label>
                        <p className="text-gray-900">{selectedStudent.programDuration} months</p>
                      </div>
                      <div>
                        <label className="text-sm font-medium text-gray-600">Program Price</label>
                        <p className="text-gray-900">₹{selectedStudent.programPrice.toLocaleString()}</p>
                      </div>
                      {selectedStudent.selectedAddon && (
                        <>
                          <div>
                            <label className="text-sm font-medium text-gray-600">Add-on</label>
                            <p className="text-gray-900">{selectedStudent.selectedAddon}</p>
                          </div>
                          <div>
                            <label className="text-sm font-medium text-gray-600">Add-on Price</label>
                            <p className="text-gray-900">₹{selectedStudent.addonPrice?.toLocaleString()}</p>
                          </div>
                        </>
                      )}
                      <div>
                        <label className="text-sm font-medium text-gray-600">Total Amount</label>
                        <p className="text-gray-900 font-semibold">₹{selectedStudent.totalAmount.toLocaleString()}</p>
                      </div>
                    </div>
                  </div>

                  {/* Payment Information */}
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Payment Information</h3>
                    <div className="space-y-3">
                      <div>
                        <label className="text-sm font-medium text-gray-600">Payment Status</label>
                        <div className="mt-1">{getStatusBadge(selectedStudent.paymentStatus)}</div>
                      </div>
                      {selectedStudent.razorpayOrderId && (
                        <div>
                          <label className="text-sm font-medium text-gray-600">Razorpay Order ID</label>
                          <p className="text-gray-900 font-mono text-sm">{selectedStudent.razorpayOrderId}</p>
                        </div>
                      )}
                      {selectedStudent.razorpayPaymentId && (
                        <div>
                          <label className="text-sm font-medium text-gray-600">Razorpay Payment ID</label>
                          <p className="text-gray-900 font-mono text-sm">{selectedStudent.razorpayPaymentId}</p>
                        </div>
                      )}
                      <div>
                        <label className="text-sm font-medium text-gray-600">Registration Date</label>
                        <p className="text-gray-900">{new Date(selectedStudent.createdAt).toLocaleString()}</p>
                      </div>
                      <div>
                        <label className="text-sm font-medium text-gray-600">Last Updated</label>
                        <p className="text-gray-900">{new Date(selectedStudent.updatedAt).toLocaleString()}</p>
                      </div>
                      <div>
                        <label className="text-sm font-medium text-gray-600">Terms Agreed</label>
                        <p className="text-gray-900">{selectedStudent.agreedToTerms ? "Yes" : "No"}</p>
                      </div>
                      <div>
                        <label className="text-sm font-medium text-gray-600">Information Certified</label>
                        <p className="text-gray-900">{selectedStudent.certifiedInformation ? "Yes" : "No"}</p>
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

        {showPhotoModal && selectedStudent && selectedStudent.photoBase64 && (
          <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-lg max-w-2xl w-full">
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-gray-900">Student Photo - {selectedStudent.fullName}</h3>
                  <button onClick={() => setShowPhotoModal(false)} className="text-gray-400 hover:text-gray-600">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
                <div className="flex justify-center">
                  <img
                    src={`data:image/jpeg;base64,${selectedStudent.photoBase64}`}
                    alt="Student Photo"
                    className="max-w-full max-h-96 object-contain rounded-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        )}

        {showDocumentModal && selectedStudent && selectedStudent.idDocumentBase64 && (
          <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh]">
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-gray-900">ID Document - {selectedStudent.fullName}</h3>
                  <div className="flex space-x-2">
                    <button
                      onClick={() => handleDownloadDocument(selectedStudent)}
                      className="flex items-center space-x-1 px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700"
                    >
                      <Download className="w-4 h-4" />
                      <span>Download</span>
                    </button>
                    <button onClick={() => setShowDocumentModal(false)} className="text-gray-400 hover:text-gray-600">
                      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>
                </div>
                <div className="flex justify-center">
                  <iframe
                    src={`data:application/pdf;base64,${selectedStudent.idDocumentBase64}`}
                    className="w-full h-96 border rounded-lg"
                    title="ID Document"
                  />
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
