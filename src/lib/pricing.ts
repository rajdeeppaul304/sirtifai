import productsData from "../data/products.json"

// Helper function to get product price from environment or fallback to JSON
const getProductPrice = (envVar: string, fallbackPrice: number): number => {
  return Number.parseFloat(process.env[envVar] || fallbackPrice.toString())
}

// Get product by ID from centralized JSON
export const getProductById = (id: string) => {
  const allProducts = {
    ...productsData.programs,
    ...productsData.programAddons,
    ...productsData.freelancer,
    ...productsData.freelancerAddons,
  }
  return allProducts[id as keyof typeof allProducts]
}

// Get program price using environment variables or JSON fallback
export const getProgramPrice = (programId: string): number => {
  const product = getProductById(programId)
  if (!product) return 72 // fallback

  return getProductPrice(product.priceEnvVar, product.price)
}

// Get addon price using environment variables or JSON fallback
export const getAddonPrice = (addonId: string): number => {
  const addon = getProductById(addonId)
  if (!addon) return 0

  return getProductPrice(addon.priceEnvVar, addon.price)
}

// Format price in USD
export const formatPrice = (price: number): string => {
  return `$${price.toLocaleString()}`
}

// Calculate total for program and addons
export const calculateTotal = (programId: string, addonIds: string[] = [], duration = 1): number => {
  const programPrice = getProgramPrice(programId) * duration
  const addonsPrice = addonIds.reduce((total, addonId) => total + getAddonPrice(addonId), 0)
  return programPrice + addonsPrice
}

// Calculate pricing breakdown
export const calculatePricing = (programId: string, addonId: string | null, duration = 1) => {
  const programPrice = getProgramPrice(programId) * duration
  const addonPrice = addonId ? getAddonPrice(addonId) : 0
  const subtotal = programPrice + addonPrice
  const gst = Math.round(subtotal * 0.18)
  const total = subtotal + gst

  return {
    programPrice,
    addonPrice,
    subtotal,
    gst,
    total,
  }
}

// Legacy exports for backward compatibility
export const PRICING = {
  SKILL_PHASE: getProgramPrice("skill-phase"),
  PRACTICE_BASIC: getProgramPrice("practice-basic"),
  PRACTICE_PRO: getProgramPrice("practice-pro"),
  PRACTICE_ELITE: getProgramPrice("practice-elite"),
  PROGRESS_BASIC: getProgramPrice("progress-basic"),
  PROGRESS_PRO: getProgramPrice("progress-pro"),
  PROGRESS_ELITE: getProgramPrice("progress-elite"),
  FREELANCER_BASIC: getProgramPrice("freelancer-basic"),
  FREELANCER_PRO: getProgramPrice("freelancer-pro"),
  FREELANCER_ELITE: getProgramPrice("freelancer-elite"),
}
