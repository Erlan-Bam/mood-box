/**
 * Business Metrics for Mood Box
 * All prices in Kazakhstani Tenge (₸)
 * Last updated: December 2025
 */

export interface CostItem {
  name: string;
  category: string;
  price: number;
  source: string;
}

export interface BoxEconomics {
  boxType: string;
  concept: string;
  cogs: CostItem[];
  totalCogs: number;
  retailPrice: number;
  margin: number;
  profitability: number;
}

// 7.1. Unit Economics - Mini Box (3-4 items)
export const miniBoxCosts: CostItem[] = [
  {
    name: "Self-assembly box (20x20x10 cm)",
    category: "Packaging",
    price: 380,
    source: "Korobka.kz",
  },
  {
    name: "Ceramic Mug (Standard)",
    category: "Item",
    price: 1200,
    source: "Magnum.kz",
  },
  {
    name: "Chocolate Bar (Milka/Alpen Gold)",
    category: "Item",
    price: 650,
    source: "Magnum.kz",
  },
  {
    name: "Tea bags (Pack of 25)",
    category: "Item",
    price: 550,
    source: "Magnum.kz",
  },
  {
    name: "Filler + Ribbon + Greeting Card",
    category: "Decor",
    price: 250,
    source: "Pack.kz",
  },
];

export const miniBoxEconomics: BoxEconomics = {
  boxType: "Mini Box",
  concept: "Affordable compliment",
  cogs: miniBoxCosts,
  totalCogs: 3030,
  retailPrice: 7900,
  margin: 4870,
  profitability: 61,
};

// 7.1. Unit Economics - Standard Box (5-7 items)
export const standardBoxCosts: CostItem[] = [
  {
    name: "Box (25x25x10 cm, White/Kraft)",
    category: "Packaging",
    price: 550,
    source: "Korobka.kz",
  },
  {
    name: "Thermo Cup (Plastic/Metal liner)",
    category: "Item",
    price: 2500,
    source: "Kaspi Shop",
  },
  {
    name: "Ground Coffee (Jacobs/Jardin)",
    category: "Item",
    price: 1800,
    source: "Magnum.kz",
  },
  {
    name: "Coffee Syrup (250 ml)",
    category: "Item",
    price: 1200,
    source: "Kaspi Shop",
  },
  {
    name: "Chocolate (Ritter Sport 100g)",
    category: "Item",
    price: 950,
    source: "Magnum.kz",
  },
  {
    name: "Marshmallows (Soft pack)",
    category: "Item",
    price: 400,
    source: "Magnum.kz",
  },
  {
    name: "Scented Candle (Small)",
    category: "Item",
    price: 800,
    source: "Kaspi Shop",
  },
  {
    name: "Filler (100g) + Premium Ribbon",
    category: "Decor",
    price: 400,
    source: "Korobka.kz",
  },
];

export const standardBoxEconomics: BoxEconomics = {
  boxType: "Standard Box",
  concept: "Cozy essentials",
  cogs: standardBoxCosts,
  totalCogs: 8600,
  retailPrice: 14900,
  margin: 6300,
  profitability: 42,
};

// 7.1. Unit Economics - Deluxe Box (8-10 items)
export const deluxeBoxCosts: CostItem[] = [
  {
    name: "Large Box (35x25x10 cm)",
    category: "Packaging",
    price: 950,
    source: "Korobka.kz",
  },
  {
    name: "Hardcover Notebook (A5)",
    category: "Item",
    price: 2800,
    source: "Kaspi Shop",
  },
  {
    name: "Gift Pen (in case)",
    category: "Item",
    price: 1500,
    source: "Zeta.kz",
  },
  {
    name: "Water Bottle (My Bottle style)",
    category: "Item",
    price: 1900,
    source: "Kaspi Shop",
  },
  {
    name: "Sweets Mix (Ferrero, Kinder, etc.)",
    category: "Items 4-6",
    price: 3500,
    source: "Magnum.kz",
  },
  {
    name: "Leaf Tea (Premium tin can)",
    category: "Item",
    price: 1800,
    source: "Magnum.kz",
  },
  {
    name: "Nuts/Dried Fruits (150g pack)",
    category: "Item",
    price: 1500,
    source: "Magnum.kz",
  },
  {
    name: "Designer Card",
    category: "Item",
    price: 300,
    source: "Local Print Shop",
  },
  {
    name: "Tissue paper, stickers, ribbon",
    category: "Decor",
    price: 600,
    source: "Pack.kz",
  },
];

export const deluxeBoxEconomics: BoxEconomics = {
  boxType: "Deluxe Box",
  concept: "Full gift set",
  cogs: deluxeBoxCosts,
  totalCogs: 14850,
  retailPrice: 22900,
  margin: 8050,
  profitability: 35,
};

// 7.1. Unit Economics - Premium Box (12+ items)
export const premiumBoxCosts: CostItem[] = [
  {
    name: "Rigid Box 'Lid-Bottom' type",
    category: "Packaging",
    price: 2500,
    source: "GoodBox.kz",
  },
  {
    name: "Powerbank + Coffee Beans + Thermos",
    category: "Top Items",
    price: 11500,
    source: "White Wind (Shop.kz) + Magnum",
  },
  {
    name: "Bath Salt + Scrub + Candle (Set of 3)",
    category: "Care Items",
    price: 5500,
    source: "Kaspi Shop",
  },
  {
    name: "Premium Set (Chocolate, Cookies, Honey)",
    category: "Sweets",
    price: 4000,
    source: "Magnum.kz",
  },
  {
    name: "Printed Socks + Card (Set of 2)",
    category: "Accessories",
    price: 1500,
    source: "Kaspi Shop",
  },
  {
    name: "Premium wrapping + Branding",
    category: "Decor",
    price: 1000,
    source: "GoodBox.kz",
  },
];

export const premiumBoxEconomics: BoxEconomics = {
  boxType: "Premium Box",
  concept: "VIP / Executive",
  cogs: premiumBoxCosts,
  totalCogs: 26000,
  retailPrice: 39900,
  margin: 13900,
  profitability: 34,
};

// All box economics for easy access
export const allBoxEconomics = {
  mini: miniBoxEconomics,
  standard: standardBoxEconomics,
  deluxe: deluxeBoxEconomics,
  premium: premiumBoxEconomics,
};

// 7.2. Startup Investment (CAPEX)
export interface StartupCost {
  category: string;
  item: string;
  amount: number;
  source: string;
}

export const startupCosts: StartupCost[] = [
  {
    category: "Packaging Stock",
    item: "80 boxes (Mixed sizes, wholesale)",
    amount: 45000,
    source: "Korobka.kz",
  },
  {
    category: "Inventory (Stock)",
    item: "Goods for first 25 boxes",
    amount: 180000,
    source: "Calculated based on Sec 7.1",
  },
  {
    category: "Equipment",
    item: "Thermal Printer Xprinter XP-365B",
    amount: 23800,
    source: "Kaspi Shop",
  },
  {
    category: "Marketing",
    item: "Initial Ad Budget (Instagram/TikTok)",
    amount: 100000,
    source: "Meta Ads Market Data",
  },
  {
    category: "Consumables",
    item: "Tissue paper, filler (10kg), ribbons",
    amount: 15000,
    source: "Korobka.kz",
  },
  {
    category: "Contingency",
    item: "Emergency fund (5%)",
    amount: 18000,
    source: "Reserve",
  },
];

export const totalStartupCost = 381800;

// 7.3. Monthly Operating Expenses (OPEX)
export interface MonthlyExpense {
  item: string;
  description: string;
  amount: number;
  source: string;
}

export const monthlyExpenses: MonthlyExpense[] = [
  {
    item: "Rent",
    description: "Warehouse/Storage (Basement/Pantry)",
    amount: 35000,
    source: "Krisha.kz: Storage <40k",
  },
  {
    item: "Taxes",
    description: "Sole Proprietorship (2025 Rates, Min. Wage Base)",
    amount: 17425,
    source: "Uchet.kz",
  },
  {
    item: "Communication",
    description: "Internet + Mobile (Business Tariff)",
    amount: 4990,
    source: "Beeline Business",
  },
];

export const totalMonthlyExpenses = 57415;

// 7.4. Strategic Recommendations
export const recommendations = {
  pricing: {
    note: "Attempting to sell a 12-item box for 24,900 KZT is financially risky. The COGS for quality items exceeds 25,000 KZT. Premium Box price adjusted to 39,900 KZT to maintain 34% margin.",
  },
  logistics: {
    strategy: "Use Yandex Delivery (Courier tariff) paid by customer",
    averageCost: 1200,
    note: "Offer 'Free Delivery' only for Premium tier to incentivize higher average checks",
    costRange: "1,100 – 1,300 KZT in Almaty",
  },
  warehouse: {
    type: "Storage in residential complex basements",
    size: "15-20 m²",
    note: "3x cheaper than offices in business centers",
  },
  procurement: {
    strategy: "Switch to distributors at >50 boxes/month volume",
    supplier: "Prima Distribution / Optovka (Rozybakiev St)",
    discount: "15–20% on sweets and tea",
  },
};

// Box pricing tiers based on economics
export const boxPricing = {
  mini: {
    name: "Mini Box",
    price: 7900,
    items: 3,
    itemsRange: "3-4",
    estimatedCogs: 3030,
    margin: 4870,
    profitability: 61,
    concept: "Affordable compliment",
  },
  standard: {
    name: "Standard Box",
    price: 14900,
    items: 6,
    itemsRange: "5-7",
    estimatedCogs: 8600,
    margin: 6300,
    profitability: 42,
    concept: "Cozy essentials",
  },
  deluxe: {
    name: "Deluxe Box",
    price: 22900,
    items: 9,
    itemsRange: "8-10",
    estimatedCogs: 14850,
    margin: 8050,
    profitability: 35,
    concept: "Full gift set",
  },
  premium: {
    name: "Premium Box",
    price: 39900,
    items: 12,
    itemsRange: "12+",
    estimatedCogs: 26000,
    margin: 13900,
    profitability: 34,
    concept: "VIP / Executive",
    freeDelivery: true,
  },
};

// Helper functions
export const calculateBreakEvenUnits = (
  fixedCosts: number,
  pricePerUnit: number,
  cogsPerUnit: number
): number => {
  return Math.ceil(fixedCosts / (pricePerUnit - cogsPerUnit));
};

export const calculateMonthlyRevenue = (
  units: number,
  pricePerUnit: number
): number => {
  return units * pricePerUnit;
};

export const calculateMonthlyProfit = (
  units: number,
  pricePerUnit: number,
  cogsPerUnit: number,
  monthlyOpex: number
): number => {
  const revenue = calculateMonthlyRevenue(units, pricePerUnit);
  const totalCogs = units * cogsPerUnit;
  return revenue - totalCogs - monthlyOpex;
};

// Break-even analysis for Standard Box
export const breakEvenAnalysis = {
  standardBox: {
    monthlyFixedCosts: totalMonthlyExpenses,
    pricePerUnit: standardBoxEconomics.retailPrice,
    cogsPerUnit: standardBoxEconomics.totalCogs,
    breakEvenUnits: calculateBreakEvenUnits(
      totalMonthlyExpenses,
      standardBoxEconomics.retailPrice,
      standardBoxEconomics.totalCogs
    ),
  },
};

export default {
  miniBoxCosts,
  miniBoxEconomics,
  standardBoxCosts,
  standardBoxEconomics,
  deluxeBoxCosts,
  deluxeBoxEconomics,
  premiumBoxCosts,
  premiumBoxEconomics,
  allBoxEconomics,
  startupCosts,
  totalStartupCost,
  monthlyExpenses,
  totalMonthlyExpenses,
  recommendations,
  boxPricing,
  breakEvenAnalysis,
};
