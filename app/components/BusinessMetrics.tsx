"use client";

import {
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
  CostItem,
  BoxEconomics,
} from "../data/businessMetrics";
import { useState } from "react";

export default function BusinessMetrics() {
  const formatPrice = (price: number) => price.toLocaleString("ru-KZ");
  const [selectedBox, setSelectedBox] =
    useState<keyof typeof allBoxEconomics>("standard");

  const boxOptions = [
    { key: "mini" as const, label: "Mini", emoji: "📦" },
    { key: "standard" as const, label: "Standard", emoji: "🎁" },
    { key: "deluxe" as const, label: "Deluxe", emoji: "🎀" },
    { key: "premium" as const, label: "Premium", emoji: "👑" },
  ];

  const currentBoxEconomics = allBoxEconomics[selectedBox];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4 bg-linear-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">
          Business Metrics & Economics
        </h1>
        <p className="text-gray-600 dark:text-gray-400">
          Financial breakdown and profitability analysis for Almaty region
        </p>
      </div>

      {/* Box Category Selector */}
      <section className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700">
        <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
          <span className="text-3xl">📊</span>
          Unit Economics by Category
        </h2>

        {/* Box Selector Tabs */}
        <div className="flex flex-wrap gap-3 mb-8">
          {boxOptions.map((box) => (
            <button
              key={box.key}
              onClick={() => setSelectedBox(box.key)}
              className={`px-6 py-3 rounded-xl font-medium transition-all ${
                selectedBox === box.key
                  ? "bg-purple-600 text-white shadow-lg"
                  : "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
              }`}
            >
              <span className="mr-2">{box.emoji}</span>
              {box.label}
            </button>
          ))}
        </div>

        {/* Box Info Header */}
        <div className="mb-6 p-4 bg-purple-50 dark:bg-purple-900/20 rounded-xl border border-purple-200 dark:border-purple-800">
          <h3 className="text-xl font-bold text-purple-700 dark:text-purple-300">
            {currentBoxEconomics.boxType}
          </h3>
          <p className="text-purple-600 dark:text-purple-400 italic">
            Concept: {currentBoxEconomics.concept}
          </p>
        </div>

        <div className="overflow-x-auto mb-6">
          <table className="w-full">
            <thead>
              <tr className="border-b-2 border-gray-200 dark:border-gray-700">
                <th className="text-left py-3 px-4">Category</th>
                <th className="text-left py-3 px-4">Item</th>
                <th className="text-right py-3 px-4">Price (₸)</th>
                <th className="text-left py-3 px-4">Source</th>
              </tr>
            </thead>
            <tbody>
              {currentBoxEconomics.cogs.map((cost, index) => (
                <tr
                  key={index}
                  className="border-b border-gray-100 dark:border-gray-800"
                >
                  <td className="py-3 px-4 text-gray-600 dark:text-gray-400">
                    {cost.category}
                  </td>
                  <td className="py-3 px-4">{cost.name}</td>
                  <td className="py-3 px-4 text-right font-medium">
                    {formatPrice(cost.price)} ₸
                  </td>
                  <td className="py-3 px-4 text-sm text-gray-500">
                    {cost.source}
                  </td>
                </tr>
              ))}
              <tr className="bg-purple-50 dark:bg-purple-900/20 font-bold">
                <td className="py-4 px-4" colSpan={2}>
                  Total COGS
                </td>
                <td className="py-4 px-4 text-right text-lg">
                  {formatPrice(currentBoxEconomics.totalCogs)} ₸
                </td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-green-50 dark:bg-green-900/20 rounded-xl p-6 border border-green-200 dark:border-green-800">
            <div className="text-sm text-green-600 dark:text-green-400 mb-2">
              Retail Price (RRP)
            </div>
            <div className="text-3xl font-bold text-green-700 dark:text-green-300">
              {formatPrice(currentBoxEconomics.retailPrice)} ₸
            </div>
          </div>

          <div className="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-6 border border-blue-200 dark:border-blue-800">
            <div className="text-sm text-blue-600 dark:text-blue-400 mb-2">
              Gross Margin (Profit per Unit)
            </div>
            <div className="text-3xl font-bold text-blue-700 dark:text-blue-300">
              {formatPrice(currentBoxEconomics.margin)} ₸
            </div>
          </div>

          <div className="bg-purple-50 dark:bg-purple-900/20 rounded-xl p-6 border border-purple-200 dark:border-purple-800">
            <div className="text-sm text-purple-600 dark:text-purple-400 mb-2">
              Margin %
            </div>
            <div className="text-3xl font-bold text-purple-700 dark:text-purple-300">
              {currentBoxEconomics.profitability}%
            </div>
          </div>
        </div>
      </section>

      {/* Startup Costs (CAPEX) */}
      <section className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700">
        <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
          <span className="text-3xl">💰</span>
          Launch Costs (CAPEX)
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-6">
          Initial investment required to start operations in Almaty
        </p>

        <div className="overflow-x-auto mb-6">
          <table className="w-full">
            <thead>
              <tr className="border-b-2 border-gray-200 dark:border-gray-700">
                <th className="text-left py-3 px-4">Category</th>
                <th className="text-left py-3 px-4">Description</th>
                <th className="text-right py-3 px-4">Amount (₸)</th>
                <th className="text-left py-3 px-4">Source</th>
              </tr>
            </thead>
            <tbody>
              {startupCosts.map((cost, index) => (
                <tr
                  key={index}
                  className="border-b border-gray-100 dark:border-gray-800"
                >
                  <td className="py-3 px-4 text-gray-600 dark:text-gray-400">
                    {cost.category}
                  </td>
                  <td className="py-3 px-4">{cost.item}</td>
                  <td className="py-3 px-4 text-right font-medium">
                    {formatPrice(cost.amount)} ₸
                  </td>
                  <td className="py-3 px-4 text-sm text-gray-500">
                    {cost.source}
                  </td>
                </tr>
              ))}
              <tr className="bg-orange-50 dark:bg-orange-900/20 font-bold">
                <td className="py-4 px-4" colSpan={2}>
                  TOTAL Required Capital
                </td>
                <td className="py-4 px-4 text-right text-lg">
                  {formatPrice(totalStartupCost)} ₸
                </td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-6 border border-blue-200 dark:border-blue-800">
          <div className="text-sm text-blue-600 dark:text-blue-400 mb-2">
            Required Startup Capital
          </div>
          <div className="text-4xl font-bold text-blue-700 dark:text-blue-300">
            {formatPrice(totalStartupCost)} ₸
          </div>
          <div className="text-sm text-blue-600 dark:text-blue-400 mt-2">
            ≈ ${Math.round(totalStartupCost / 480)} USD (rate: 1$ = 480₸)
          </div>
        </div>
      </section>

      {/* Monthly Operating Expenses (OPEX) */}
      <section className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700">
        <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
          <span className="text-3xl">📅</span>
          Operating Expenses (OPEX)
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-6">
          Monthly fixed costs (Almaty region)
        </p>

        <div className="overflow-x-auto mb-6">
          <table className="w-full">
            <thead>
              <tr className="border-b-2 border-gray-200 dark:border-gray-700">
                <th className="text-left py-3 px-4">Expense Item</th>
                <th className="text-left py-3 px-4">Description</th>
                <th className="text-right py-3 px-4">Amount (₸/month)</th>
                <th className="text-left py-3 px-4">Source</th>
              </tr>
            </thead>
            <tbody>
              {monthlyExpenses.map((expense, index) => (
                <tr
                  key={index}
                  className="border-b border-gray-100 dark:border-gray-800"
                >
                  <td className="py-3 px-4 font-medium">{expense.item}</td>
                  <td className="py-3 px-4 text-gray-600 dark:text-gray-400">
                    {expense.description}
                  </td>
                  <td className="py-3 px-4 text-right font-medium">
                    {formatPrice(expense.amount)} ₸
                  </td>
                  <td className="py-3 px-4 text-sm text-gray-500">
                    {expense.source}
                  </td>
                </tr>
              ))}
              <tr className="bg-red-50 dark:bg-red-900/20 font-bold">
                <td className="py-4 px-4" colSpan={2}>
                  Monthly Burn Rate
                </td>
                <td className="py-4 px-4 text-right text-lg">
                  {formatPrice(totalMonthlyExpenses)} ₸
                </td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="bg-red-50 dark:bg-red-900/20 rounded-xl p-6 border border-red-200 dark:border-red-800">
          <div className="text-sm text-red-600 dark:text-red-400 mb-2">
            Fixed Monthly Expenses (excluding COGS)
          </div>
          <div className="text-4xl font-bold text-red-700 dark:text-red-300">
            {formatPrice(totalMonthlyExpenses)} ₸/month
          </div>
        </div>
      </section>

      {/* Break-even Analysis */}
      <section className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700">
        <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
          <span className="text-3xl">📈</span>
          Break-even Analysis (Standard Box)
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6">
              <div className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                Monthly Fixed Costs
              </div>
              <div className="text-2xl font-bold">
                {formatPrice(breakEvenAnalysis.standardBox.monthlyFixedCosts)} ₸
              </div>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6">
              <div className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                Margin per Box (Standard)
              </div>
              <div className="text-2xl font-bold text-green-600">
                {formatPrice(
                  breakEvenAnalysis.standardBox.pricePerUnit -
                    breakEvenAnalysis.standardBox.cogsPerUnit
                )}{" "}
                ₸
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center">
            <div className="bg-linear-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-2xl p-8 border-2 border-purple-200 dark:border-purple-800 text-center">
              <div className="text-sm text-purple-600 dark:text-purple-400 mb-3">
                Minimum Sales for Break-even
              </div>
              <div className="text-6xl font-bold text-purple-700 dark:text-purple-300 mb-2">
                {breakEvenAnalysis.standardBox.breakEvenUnits}
              </div>
              <div className="text-lg text-purple-600 dark:text-purple-400">
                boxes per month
              </div>
              <div className="mt-4 text-sm text-gray-600 dark:text-gray-400">
                ≈ {Math.ceil(breakEvenAnalysis.standardBox.breakEvenUnits / 30)}{" "}
                boxes per day
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Box Pricing Tiers */}
      <section className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700">
        <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
          <span className="text-3xl">📦</span>
          Box Pricing Tiers
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {Object.entries(boxPricing).map(([key, box]) => (
            <div
              key={key}
              className="bg-linear-to-br from-purple-50 to-pink-50 dark:from-gray-800 dark:to-gray-700 rounded-xl p-6 border border-purple-200 dark:border-gray-600"
            >
              <h3 className="text-xl font-bold mb-2">{box.name}</h3>
              <p className="text-sm text-purple-600 dark:text-purple-400 italic mb-4">
                {box.concept}
              </p>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600 dark:text-gray-400">
                    Price:
                  </span>
                  <span className="font-bold text-purple-600 dark:text-purple-400">
                    {formatPrice(box.price)} ₸
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600 dark:text-gray-400">
                    Items:
                  </span>
                  <span className="font-medium">{box.itemsRange}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600 dark:text-gray-400">
                    COGS:
                  </span>
                  <span className="font-medium">
                    {formatPrice(box.estimatedCogs)} ₸
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600 dark:text-gray-400">
                    Margin:
                  </span>
                  <span className="font-medium text-green-600 dark:text-green-400">
                    {formatPrice(box.margin)} ₸
                  </span>
                </div>
                <div className="flex justify-between pt-3 border-t border-purple-200 dark:border-gray-600">
                  <span className="text-sm text-gray-600 dark:text-gray-400">
                    Profitability:
                  </span>
                  <span className="font-bold text-purple-600 dark:text-purple-400">
                    {box.profitability}%
                  </span>
                </div>
                {(box as { freeDelivery?: boolean }).freeDelivery && (
                  <div className="mt-2 text-xs text-green-600 dark:text-green-400 bg-green-50 dark:bg-green-900/20 rounded-lg p-2 text-center">
                    ✓ Free Delivery Included
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Strategic Recommendations */}
      <section className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700">
        <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
          <span className="text-3xl">💡</span>
          Strategic Recommendations
        </h2>

        {/* Pricing Strategy Alert */}
        <div className="mb-6 p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-xl border border-yellow-200 dark:border-yellow-800">
          <h3 className="font-bold text-lg mb-2 text-yellow-700 dark:text-yellow-300">
            ⚠️ Pricing Strategy
          </h3>
          <p className="text-sm text-yellow-600 dark:text-yellow-400">
            {recommendations.pricing.note}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-6 border border-blue-200 dark:border-blue-800">
            <h3 className="font-bold text-lg mb-3 text-blue-700 dark:text-blue-300">
              🚚 Logistics
            </h3>
            <p className="text-sm mb-2">{recommendations.logistics.strategy}</p>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Average cost: {recommendations.logistics.costRange}
            </p>
            <p className="text-xs text-blue-600 dark:text-blue-400 mt-2">
              {recommendations.logistics.note}
            </p>
          </div>

          <div className="bg-green-50 dark:bg-green-900/20 rounded-xl p-6 border border-green-200 dark:border-green-800">
            <h3 className="font-bold text-lg mb-3 text-green-700 dark:text-green-300">
              🏢 Warehouse
            </h3>
            <p className="text-sm mb-2">{recommendations.warehouse.type}</p>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Size: {recommendations.warehouse.size}
            </p>
            <p className="text-xs text-green-600 dark:text-green-400 mt-2">
              {recommendations.warehouse.note}
            </p>
          </div>

          <div className="bg-purple-50 dark:bg-purple-900/20 rounded-xl p-6 border border-purple-200 dark:border-purple-800">
            <h3 className="font-bold text-lg mb-3 text-purple-700 dark:text-purple-300">
              🛒 Procurement
            </h3>
            <p className="text-sm mb-2">
              {recommendations.procurement.strategy}
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Supplier: {recommendations.procurement.supplier}
            </p>
            <p className="text-xs text-purple-600 dark:text-purple-400 mt-2">
              Discount: {recommendations.procurement.discount}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
