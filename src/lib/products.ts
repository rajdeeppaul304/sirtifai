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
  defaultPrice: number
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
    return envPrice ? Number.parseFloat(envPrice) : product.defaultPrice
  }
  return product.defaultPrice
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
