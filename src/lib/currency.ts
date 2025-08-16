export async function getINRToUSDRate(): Promise<number> {
  try {
    const response = await fetch("https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/inr.json")
    const data = await response.json()
    return data.inr.usd || 0.012 // Fallback rate if API fails
  } catch (error) {
    console.error("Failed to fetch currency rate:", error)
    return 0.012 // Fallback rate
  }
}

export function convertINRToUSD(inrAmount: number, rate: number): number {
  return Math.round(inrAmount * rate)
}

export function convertUSDToINR(usdAmount: number, rate: number): number {
  return Math.round(usdAmount / rate)
}
