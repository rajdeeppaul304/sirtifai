import productsData from "@/data/products.json"

export interface Product {
  id: string
  name: string
  description: string
  category: "program" | "program-addon" | "freelancer" | "freelancer-addon"
  type: "one-time" | "monthly"
  monthlyOptions?: "1-12" | "3-6"
  sacCode: string
  priceEnvVar: string
  price: number
  features: string[]
  tier?: "basic" | "pro" | "elite"
  popular?: boolean
  earningRange?: string
}

export interface ProductsData {
  programs: Record<string, Product>
  programAddons: Record<string, Product>
  freelancer: Record<string, Product>
  freelancerAddons: Record<string, Product>
}

export const PRODUCTS: ProductsData = productsData as ProductsData

// Helper functions
export const getAllProducts = (): Product[] => {
  return [
    ...Object.values(PRODUCTS.programs),
    ...Object.values(PRODUCTS.programAddons),
    ...Object.values(PRODUCTS.freelancer),
    ...Object.values(PRODUCTS.freelancerAddons),
  ]
}

export const getProductById = (id: string): Product | null => {
  const allProducts = getAllProducts()
  return allProducts.find((product) => product.id === id) || null
}

export const getProductPrice = (product: Product): number => {
  if (typeof window !== "undefined") {
    const envPrice = process.env[product.priceEnvVar]
    return envPrice ? Number.parseFloat(envPrice) : product.price
  }
  return product.price
}

export const getProgramProducts = (): Product[] => {
  return Object.values(PRODUCTS.programs)
}

export const getProgramAddons = (): Product[] => {
  return Object.values(PRODUCTS.programAddons)
}

export const getFreelancerProducts = (): Product[] => {
  return Object.values(PRODUCTS.freelancer)
}

export const getFreelancerAddons = (): Product[] => {
  return Object.values(PRODUCTS.freelancerAddons)
}

export const getProductsByCategory = (category: Product["category"]): Product[] => {
  return getAllProducts().filter((product) => product.category === category)
}

export const getSkillPhaseProducts = (): Product[] => {
  return Object.values(PRODUCTS.programs).filter((product) => product.id === "skill-phase")
}

export const getPracticePhaseProducts = (): Product[] => {
  return Object.values(PRODUCTS.programs).filter((product) => product.id.startsWith("practice-"))
}

export const getProgressPhaseProducts = (): Product[] => {
  return Object.values(PRODUCTS.programs).filter((product) => product.id.startsWith("progress-"))
}

export interface StandardizedPackageData {
  type: "program" | "freelancer" | "international"
  selectedProduct: string
  selectedAddon: string | null
  productData: {
    id: string
    name: string
    price: number
    duration?: number
    category?: string
    tier?: string
    features: string[]
  }
  addonData: {
    id: string
    name: string
    price: number
    description: string
    features: string[]
  } | null
  pricing: {
    programPrice: number
    addonPrice: number
    subtotal: number
    gst: number
    total: number
  }
}

export const createStandardizedPackageData = (
  type: "program" | "freelancer",
  productId: string,
  addonId: string | null = null,
  duration = 1,
): StandardizedPackageData => {
  const product = getProductById(productId)
  const addon = addonId ? getProductById(addonId) : null

  if (!product) {
    throw new Error(`Product with id ${productId} not found`)
  }

  const productPrice = getProductPrice(product)
  const addonPrice = addon ? getProductPrice(addon) : 0

  const programPrice = type === "program" ? productPrice * duration : productPrice
  const subtotal = programPrice + addonPrice
  const gst = Math.round(subtotal * 0.18)
  const total = subtotal + gst

  return {
    type,
    selectedProduct: productId,
    selectedAddon: addonId,
    productData: {
      id: product.id,
      name: product.name,
      price: productPrice,
      duration: type === "program" ? duration : undefined,
      category: product.category.includes("program") ? product.category.replace("program-", "") : undefined,
      tier: product.name.toLowerCase().includes("basic")
        ? "basic"
        : product.name.toLowerCase().includes("pro")
          ? "pro"
          : product.name.toLowerCase().includes("elite")
            ? "elite"
            : undefined,
      features: product.features || [],
    },
    addonData: addon
      ? {
          id: addon.id,
          name: addon.name,
          price: addonPrice,
          description: addon.description,
          features: addon.features || [],
        }
      : null,
    pricing: {
      programPrice,
      addonPrice,
      subtotal,
      gst,
      total,
    },
  }
}
