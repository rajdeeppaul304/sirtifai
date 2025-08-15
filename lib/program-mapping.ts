// Centralized mapping for program and addon IDs to full descriptions
export interface ProgramDetails {
  id: string
  name: string
  description: string
  features: string[]
  price: number
  category: "skill" | "practice" | "progress"
}

export interface AddonDetails {
  id: string
  name: string
  description: string
  features: string[]
  price: number
  category: "payroll" | "ca" | "legal"
}

export const PROGRAM_MAPPING: Record<string, ProgramDetails> = {
  skill: {
    id: "skill",
    name: "Skill Phase",
    description: "Core Skill Development",
    features: ["Learning Materials", "Foundational Knowledge", "Core Tracking Progress"],
    price: 72,
    category: "skill",
  },
  "practice-basic": {
    id: "practice-basic",
    name: "Practice Phase - Basic",
    description: "Basic Practice Training",
    features: ["Hands-on Projects", "Basic Skill Development", "Progress Tracking", "Community Support"],
    price: 72,
    category: "practice",
  },
  "practice-pro": {
    id: "practice-pro",
    name: "Practice Phase - Pro",
    description: "Professional Practice Training",
    features: [
      "Advanced Projects",
      "Professional Skill Development",
      "Mentorship Support",
      "Industry Connections",
      "Portfolio Building",
    ],
    price: 120,
    category: "practice",
  },
  "practice-elite": {
    id: "practice-elite",
    name: "Practice Phase - Elite",
    description: "Elite Practice Training",
    features: [
      "Premium Projects",
      "Elite Skill Development",
      "One-on-One Mentorship",
      "Industry Partnerships",
      "Job Placement Support",
      "Advanced Certifications",
    ],
    price: 220,
    category: "practice",
  },
  "progress-basic": {
    id: "progress-basic",
    name: "Progress Phase - Basic",
    description: "Basic Progress Tracking",
    features: ["Progress Monitoring", "Basic Analytics", "Monthly Reports", "Goal Setting"],
    price: 220,
    category: "progress",
  },
  "progress-pro": {
    id: "progress-pro",
    name: "Progress Phase - Pro",
    description: "Professional Progress Tracking",
    features: [
      "Advanced Progress Monitoring",
      "Detailed Analytics",
      "Weekly Reports",
      "Performance Insights",
      "Career Guidance",
    ],
    price: 300,
    category: "progress",
  },
  "progress-elite": {
    id: "progress-elite",
    name: "Progress Phase - Elite",
    description: "Elite Progress Tracking",
    features: [
      "Training Program",
      "Career Projects",
      "AI Tools",
      "PDF Initial Certification",
      "Career Mapping",
      "Premium Analytics",
      "Personal Career Coach",
    ],
    price: 700,
    category: "progress",
  },
}

export const ADDON_MAPPING: Record<string, AddonDetails> = {
  payroll: {
    id: "payroll",
    name: "Payroll Services (via Deel™)",
    description: "Professional payroll management services",
    features: [
      "Global payroll processing",
      "Tax compliance",
      "Direct deposit setup",
      "Payroll reporting",
      "Multi-currency support",
    ],
    price: 500,
    category: "payroll",
  },
  ca: {
    id: "ca",
    name: "CA Services",
    description: "Chartered Accountant Support",
    features: [
      "Financial consultation",
      "Tax planning",
      "Audit support",
      "Compliance management",
      "Financial reporting",
    ],
    price: 3999,
    category: "ca",
  },
  legal: {
    id: "legal",
    name: "Legal Services",
    description: "Contract & IP Support",
    features: [
      "Contract review",
      "Intellectual property protection",
      "Legal consultation",
      "Document drafting",
      "Compliance guidance",
    ],
    price: 5977,
    category: "legal",
  },
}

// Helper functions to get details
export function getProgramDetails(programId: string): ProgramDetails | null {
  return PROGRAM_MAPPING[programId] || null
}

export function getAddonDetails(addonId: string): AddonDetails | null {
  return ADDON_MAPPING[addonId] || null
}

// Helper function to get full program name with description
export function getFullProgramName(programId: string): string {
  const program = getProgramDetails(programId)
  if (!program) return programId
  return `${program.name}: ${program.description}`
}

// Helper function to get full addon name with description
export function getFullAddonName(addonId: string): string {
  const addon = getAddonDetails(addonId)
  if (!addon) return addonId
  return `${addon.name}: ${addon.description}`
}

// Helper function to get program features as a formatted string
export function getProgramFeaturesString(programId: string): string {
  const program = getProgramDetails(programId)
  if (!program) return ""
  return program.features.join(", ")
}

// Helper function to get addon features as a formatted string
export function getAddonFeaturesString(addonId: string): string {
  const addon = getAddonDetails(addonId)
  if (!addon) return ""
  return addon.features.join(", ")
}

// Helper function for invoice display - combines name, description and features
export function getInvoiceDisplayName(programId: string, isAddon = false): string {
  if (isAddon) {
    const addon = getAddonDetails(programId)
    if (!addon) return programId
    return `${addon.name}\n${addon.features.join(", ")}`
  } else {
    const program = getProgramDetails(programId)
    if (!program) return programId
    return `${program.name}\n${program.features.join(", ")}`
  }
}
