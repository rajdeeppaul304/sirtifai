-- CreateTable
CREATE TABLE "students" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "fullName" TEXT NOT NULL,
    "dateOfBirth" TIMESTAMP(3) NOT NULL,
    "countryOfCitizenship" TEXT NOT NULL,
    "referralCode" TEXT,
    "primaryPhone" TEXT NOT NULL,
    "secondaryPhone" TEXT,
    "whatsappNotifications" BOOLEAN NOT NULL DEFAULT false,
    "email" TEXT NOT NULL,
    "residentialAddress" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "state" TEXT NOT NULL,
    "zipCode" TEXT NOT NULL,
    "country" TEXT NOT NULL,
    "highestQualification" TEXT NOT NULL,
    "specialization" TEXT,
    "currentProfession" TEXT,
    "currentOrganization" TEXT,
    "linkedinProfile" TEXT,
    "idType" TEXT NOT NULL,
    "idNumber" TEXT NOT NULL,
    "idDocumentUrl" TEXT,
    "photoUrl" TEXT,
    "selectedProgram" TEXT NOT NULL,
    "programDuration" INTEGER NOT NULL,
    "programPrice" DOUBLE PRECISION NOT NULL,
    "selectedAddon" TEXT,
    "addonPrice" DOUBLE PRECISION,
    "totalAmount" DOUBLE PRECISION NOT NULL,
    "paymentId" TEXT,
    "paymentStatus" TEXT NOT NULL DEFAULT 'pending',
    "razorpayOrderId" TEXT,
    "razorpayPaymentId" TEXT,
    "razorpaySignature" TEXT,
    "agreedToTerms" BOOLEAN NOT NULL DEFAULT false,
    "certifiedInformation" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "students_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "invoices" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "invoiceNumber" TEXT NOT NULL,
    "studentId" TEXT NOT NULL,
    "programName" TEXT NOT NULL,
    "programPrice" DOUBLE PRECISION NOT NULL,
    "addonName" TEXT,
    "addonPrice" DOUBLE PRECISION,
    "subtotal" DOUBLE PRECISION NOT NULL,
    "tax" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "total" DOUBLE PRECISION NOT NULL,
    "paymentStatus" TEXT NOT NULL,
    "paymentMethod" TEXT NOT NULL,
    "paymentDate" TIMESTAMP(3),

    CONSTRAINT "invoices_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "students_email_key" ON "students"("email");

-- CreateIndex
CREATE UNIQUE INDEX "invoices_invoiceNumber_key" ON "invoices"("invoiceNumber");

-- AddForeignKey
ALTER TABLE "invoices" ADD CONSTRAINT "invoices_studentId_fkey" FOREIGN KEY ("studentId") REFERENCES "students"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
