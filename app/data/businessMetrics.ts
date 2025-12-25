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
  cogs: CostItem[];
  totalCogs: number;
  retailPrice: number;
  margin: number;
  profitability: number;
}

// 7.1. Unit Economics - Standard Box (Middle Segment)
export const standardBoxCosts: CostItem[] = [
  {
    name: "Коробка самосборная 25x25x10 см",
    category: "Упаковка",
    price: 430,
    source: "Korobka.kz",
  },
  {
    name: "Шоколад Ritter Sport (100г)",
    category: "Наполнение",
    price: 950,
    source: "Magnum.kz",
  },
  {
    name: "Термокружка (металлик/пластик)",
    category: "Наполнение",
    price: 2450,
    source: "Kaspi Shop",
  },
  {
    name: "Чай листовой (Richard/Tess, 90г)",
    category: "Наполнение",
    price: 1090,
    source: "Magnum.kz",
  },
  {
    name: "Наполнитель бумажный (50г)",
    category: "Декор",
    price: 150,
    source: "Korobka.kz",
  },
  {
    name: "Наклейка с лого + Открытка",
    category: "Полиграфия",
    price: 200,
    source: "Типография",
  },
];

export const standardBoxEconomics: BoxEconomics = {
  boxType: "Standard Box",
  cogs: standardBoxCosts,
  totalCogs: 5270, // Sum of all costs
  retailPrice: 12900,
  margin: 7630, // retailPrice - totalCogs
  profitability: 59, // (margin / retailPrice) * 100
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
    category: "Оборудование",
    item: "Термопринтер Xprinter XP-365B",
    amount: 23880,
    source: "Kaspi Shop",
  },
  {
    category: "Товарный запас",
    item: "Закуп наполнения (тест-партия на 30 наборов)",
    amount: 158100,
    source: "5270 ₸ × 30 шт",
  },
  {
    category: "Упаковка (Опт)",
    item: "Закуп коробок (мин. партия 50 шт)",
    amount: 21500,
    source: "Korobka.kz",
  },
  {
    category: "Расходники",
    item: "Термоэтикетки (3 рулона) + Ленты",
    amount: 5000,
    source: "Kaspi Shop",
  },
  {
    category: "Регистрация",
    item: "Открытие счетов, ЭЦП",
    amount: 0,
    source: "Бесплатно (Kaspi Pay / Halyk)",
  },
];

export const totalStartupCost = 208480;

// 7.3. Monthly Operating Expenses (OPEX)
export interface MonthlyExpense {
  item: string;
  description: string;
  amount: number;
  source: string;
}

export const monthlyExpenses: MonthlyExpense[] = [
  {
    item: "Аренда",
    description: "Склад/Кладовая (15-20 м²)",
    amount: 35000,
    source: "Krisha.kz",
  },
  {
    item: "Налоги",
    description: "ИП (ОПВ + СО + ВОСМС от мин. базы)",
    amount: 17425,
    source: "Uchet.kz",
  },
  {
    item: "Маркетинг",
    description: "Таргет (Instagram Ads)",
    amount: 100000,
    source: "Meta Business",
  },
  {
    item: "Связь",
    description: "Тариф для бизнеса (интернет/звонки)",
    amount: 4990,
    source: "Beeline Business",
  },
];

export const totalMonthlyExpenses = 157415;

// 7.4. Implementation Recommendations
export const recommendations = {
  logistics: {
    strategy: "Использовать Яндекс Доставка",
    averageCost: 1100,
    note: "Не нанимать штат курьеров",
  },
  warehouse: {
    type: "Кладовая в ЖК (цокольные этажи)",
    size: "15-20 м²",
    note: "Дешевле офисов в БЦ в 3 раза",
  },
  procurement: {
    strategy: "Договор с оптовиками при объеме >50 боксов",
    supplier: "Прима Дистрибьюшн",
    discount: "15-20% на шоколад/чай",
  },
};

// Box pricing tiers based on economics
export const boxPricing = {
  mini: {
    name: "Mini Box",
    price: 7900,
    items: 3,
    estimatedCogs: 3200,
    margin: 4700,
    profitability: 59,
  },
  standard: {
    name: "Standard Box",
    price: 12900,
    items: 5,
    estimatedCogs: 5270,
    margin: 7630,
    profitability: 59,
  },
  deluxe: {
    name: "Deluxe Box",
    price: 18900,
    items: 8,
    estimatedCogs: 7900,
    margin: 11000,
    profitability: 58,
  },
  premium: {
    name: "Premium Box",
    price: 24900,
    items: 12,
    estimatedCogs: 10500,
    margin: 14400,
    profitability: 58,
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
  standardBoxCosts,
  standardBoxEconomics,
  startupCosts,
  totalStartupCost,
  monthlyExpenses,
  totalMonthlyExpenses,
  recommendations,
  boxPricing,
  breakEvenAnalysis,
};
