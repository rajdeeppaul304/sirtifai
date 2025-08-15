export const PRICING = {
  // Main Programs - using environment variables in USD
  SKILL_PHASE: Number.parseFloat(process.env.NEXT_PUBLIC_SKILL_PHASE_PRICE || "72"),
  PRACTICE_BASIC: Number.parseFloat(process.env.NEXT_PUBLIC_PRACTICE_BASIC_PRICE || "99"),
  PRACTICE_PRO: Number.parseFloat(process.env.NEXT_PUBLIC_PRACTICE_PRO_PRICE || "149"),
  PRACTICE_ELITE: Number.parseFloat(process.env.NEXT_PUBLIC_PRACTICE_ELITE_PRICE || "199"),
  PROGRESS_BASIC: Number.parseFloat(process.env.NEXT_PUBLIC_PROGRESS_BASIC_PRICE || "299"),
  PROGRESS_PRO: Number.parseFloat(process.env.NEXT_PUBLIC_PROGRESS_PRO_PRICE || "399"),
  PROGRESS_ELITE: Number.parseFloat(process.env.NEXT_PUBLIC_PROGRESS_ELITE_PRICE || "499"),

  FREELANCER_BASIC: Number.parseFloat(process.env.NEXT_PUBLIC_FREELANCER_BASIC_PRICE || "140"),
  FREELANCER_PRO: Number.parseFloat(process.env.NEXT_PUBLIC_FREELANCER_PRO_PRICE || "280"),
  FREELANCER_ELITE: Number.parseFloat(process.env.NEXT_PUBLIC_FREELANCER_ELITE_PRICE || "505"),

  // Add-ons - converted to USD equivalents
  CAREER_PLACEMENT_VISA_GUIDANCE: 36,
  EMPLOYER_CONNECT: 24,
  RESUME_INTERVIEW_PREP: 12,
  LIFETIME_REENTRY: 18,

  PAYROLL_EPF: 400,
  CA_SERVICES: 60,
  LEGAL_SUPPORT: 66,
  FREELANCER_SHIELD_COMBO: 480,

  // Optional Add-ons - converted to USD equivalents
  PERSONAL_BRANDING: 10,
  LINKEDIN_OPTIMIZATION: 7,
  MOCK_INTERVIEWS: 11,
  PORTFOLIO_REVIEW: 8,

  // Bundles - converted to USD equivalents
  COMPLETE_PACKAGE: 156,
  CAREER_BOOST_BUNDLE: 60,
} as const

export type PricingKey = keyof typeof PRICING

export const getProgramPrice = (programType: string): number => {
  switch (programType) {
    case "skill-phase":
      return PRICING.SKILL_PHASE
    case "practice-basic":
      return PRICING.PRACTICE_BASIC
    case "practice-pro":
      return PRICING.PRACTICE_PRO
    case "practice-elite":
      return PRICING.PRACTICE_ELITE
    case "progress-basic":
      return PRICING.PROGRESS_BASIC
    case "progress-pro":
      return PRICING.PROGRESS_PRO
    case "progress-elite":
      return PRICING.PROGRESS_ELITE
    case "freelancer-basic":
      return PRICING.FREELANCER_BASIC
    case "freelancer-pro":
      return PRICING.FREELANCER_PRO
    case "freelancer-elite":
      return PRICING.FREELANCER_ELITE
    default:
      return PRICING.SKILL_PHASE
  }
}

export const getAddonPrice = (addonType: string): number => {
  switch (addonType) {
    case "career-placement-visa-guidance":
      return PRICING.CAREER_PLACEMENT_VISA_GUIDANCE
    case "employer-connect":
      return PRICING.EMPLOYER_CONNECT
    case "resume-interview-prep":
      return PRICING.RESUME_INTERVIEW_PREP
    case "lifetime-reentry":
      return PRICING.LIFETIME_REENTRY
    case "personal-branding":
      return PRICING.PERSONAL_BRANDING
    case "linkedin-optimization":
      return PRICING.LINKEDIN_OPTIMIZATION
    case "mock-interviews":
      return PRICING.MOCK_INTERVIEWS
    case "portfolio-review":
      return PRICING.PORTFOLIO_REVIEW
    case "payroll-epf":
      return PRICING.PAYROLL_EPF
    case "ca-services":
      return PRICING.CA_SERVICES
    case "legal-support":
      return PRICING.LEGAL_SUPPORT
    case "freelancer-shield-combo":
      return PRICING.FREELANCER_SHIELD_COMBO
    default:
      return 0
  }
}

export const formatPrice = (price: number): string => {
  return `$${price.toLocaleString()}`
}

export const calculateTotal = (programType: string, addons: string[] = []): number => {
  const programPrice = getProgramPrice(programType)
  const addonsPrice = addons.reduce((total, addon) => total + getAddonPrice(addon), 0)
  return programPrice + addonsPrice
}

export const convertUSDToINR = (usdAmount: number): number => {
  const usdToInrRate = Number.parseFloat(process.env.USD_TO_INR_RATE || "83")
  return Math.round(usdAmount * usdToInrRate)
}

export const formatINRPrice = (usdPrice: number): string => {
  const inrPrice = convertUSDToINR(usdPrice)
  return `₹${inrPrice.toLocaleString()}`
}
