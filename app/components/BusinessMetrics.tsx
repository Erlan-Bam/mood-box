"use client";

import {
  standardBoxCosts,
  standardBoxEconomics,
  startupCosts,
  totalStartupCost,
  monthlyExpenses,
  totalMonthlyExpenses,
  recommendations,
  boxPricing,
  breakEvenAnalysis,
} from "../data/businessMetrics";

export default function BusinessMetrics() {
  const formatPrice = (price: number) => price.toLocaleString("ru-KZ");

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4 bg-linear-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">
          Business Metrics & Economics
        </h1>
        <p className="text-gray-600 dark:text-gray-400">
          Financial breakdown and profitability analysis
        </p>
      </div>

      {/* Unit Economics - Standard Box */}
      <section className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700">
        <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
          <span className="text-3xl">📊</span>
          Unit Economics - Standard Box
        </h2>

        <div className="overflow-x-auto mb-6">
          <table className="w-full">
            <thead>
              <tr className="border-b-2 border-gray-200 dark:border-gray-700">
                <th className="text-left py-3 px-4">Категория</th>
                <th className="text-left py-3 px-4">Наименование</th>
                <th className="text-right py-3 px-4">Цена (₸)</th>
                <th className="text-left py-3 px-4">Источник</th>
              </tr>
            </thead>
            <tbody>
              {standardBoxCosts.map((cost, index) => (
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
                  ИТОГО (COGS)
                </td>
                <td className="py-4 px-4 text-right text-lg">
                  {formatPrice(standardBoxEconomics.totalCogs)} ₸
                </td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-green-50 dark:bg-green-900/20 rounded-xl p-6 border border-green-200 dark:border-green-800">
            <div className="text-sm text-green-600 dark:text-green-400 mb-2">
              Розничная цена
            </div>
            <div className="text-3xl font-bold text-green-700 dark:text-green-300">
              {formatPrice(standardBoxEconomics.retailPrice)} ₸
            </div>
            <div className="text-xs text-green-600 dark:text-green-400 mt-1">
              Наценка ~140%
            </div>
          </div>

          <div className="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-6 border border-blue-200 dark:border-blue-800">
            <div className="text-sm text-blue-600 dark:text-blue-400 mb-2">
              Маржа с 1 шт.
            </div>
            <div className="text-3xl font-bold text-blue-700 dark:text-blue-300">
              {formatPrice(standardBoxEconomics.margin)} ₸
            </div>
            <div className="text-xs text-blue-600 dark:text-blue-400 mt-1">
              Валовая прибыль
            </div>
          </div>

          <div className="bg-purple-50 dark:bg-purple-900/20 rounded-xl p-6 border border-purple-200 dark:border-purple-800">
            <div className="text-sm text-purple-600 dark:text-purple-400 mb-2">
              Рентабельность
            </div>
            <div className="text-3xl font-bold text-purple-700 dark:text-purple-300">
              {standardBoxEconomics.profitability}%
            </div>
            <div className="text-xs text-purple-600 dark:text-purple-400 mt-1">
              Маржинальность
            </div>
          </div>
        </div>
      </section>

      {/* Startup Costs (CAPEX) */}
      <section className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700">
        <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
          <span className="text-3xl">💰</span>
          Стартовые вложения (CAPEX)
        </h2>

        <div className="overflow-x-auto mb-6">
          <table className="w-full">
            <thead>
              <tr className="border-b-2 border-gray-200 dark:border-gray-700">
                <th className="text-left py-3 px-4">Категория</th>
                <th className="text-left py-3 px-4">Статья расходов</th>
                <th className="text-right py-3 px-4">Сумма (₸)</th>
                <th className="text-left py-3 px-4">Источник</th>
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
                  Итого инвестиций
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
            Необходимый стартовый капитал
          </div>
          <div className="text-4xl font-bold text-blue-700 dark:text-blue-300">
            {formatPrice(totalStartupCost)} ₸
          </div>
          <div className="text-sm text-blue-600 dark:text-blue-400 mt-2">
            ≈ ${Math.round(totalStartupCost / 480)} USD (курс: 1$ = 480₸)
          </div>
        </div>
      </section>

      {/* Monthly Operating Expenses (OPEX) */}
      <section className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700">
        <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
          <span className="text-3xl">📅</span>
          Ежемесячные расходы (OPEX)
        </h2>

        <div className="overflow-x-auto mb-6">
          <table className="w-full">
            <thead>
              <tr className="border-b-2 border-gray-200 dark:border-gray-700">
                <th className="text-left py-3 px-4">Статья расходов</th>
                <th className="text-left py-3 px-4">Описание</th>
                <th className="text-right py-3 px-4">Сумма (₸/мес)</th>
                <th className="text-left py-3 px-4">Источник</th>
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
                  Месячные расходы
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
            Постоянные расходы (без учета COGS)
          </div>
          <div className="text-4xl font-bold text-red-700 dark:text-red-300">
            {formatPrice(totalMonthlyExpenses)} ₸/мес
          </div>
        </div>
      </section>

      {/* Break-even Analysis */}
      <section className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700">
        <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
          <span className="text-3xl">📈</span>
          Точка безубыточности
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6">
              <div className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                Постоянные расходы в месяц
              </div>
              <div className="text-2xl font-bold">
                {formatPrice(breakEvenAnalysis.standardBox.monthlyFixedCosts)} ₸
              </div>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6">
              <div className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                Маржа с одного бокса
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
                Минимум продаж для break-even
              </div>
              <div className="text-6xl font-bold text-purple-700 dark:text-purple-300 mb-2">
                {breakEvenAnalysis.standardBox.breakEvenUnits}
              </div>
              <div className="text-lg text-purple-600 dark:text-purple-400">
                боксов в месяц
              </div>
              <div className="mt-4 text-sm text-gray-600 dark:text-gray-400">
                ≈{" "}
                {Math.ceil(
                  breakEvenAnalysis.standardBox.breakEvenUnits / 30
                )}{" "}
                боксов в день
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Box Pricing Tiers */}
      <section className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700">
        <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
          <span className="text-3xl">📦</span>
          Ценовые категории боксов
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {Object.entries(boxPricing).map(([key, box]) => (
            <div
              key={key}
              className="bg-linear-to-br from-purple-50 to-pink-50 dark:from-gray-800 dark:to-gray-700 rounded-xl p-6 border border-purple-200 dark:border-gray-600"
            >
              <h3 className="text-xl font-bold mb-4">{box.name}</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600 dark:text-gray-400">
                    Цена:
                  </span>
                  <span className="font-bold text-purple-600 dark:text-purple-400">
                    {formatPrice(box.price)} ₸
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600 dark:text-gray-400">
                    Товаров:
                  </span>
                  <span className="font-medium">{box.items} шт</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600 dark:text-gray-400">
                    Себестоимость:
                  </span>
                  <span className="font-medium">
                    {formatPrice(box.estimatedCogs)} ₸
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600 dark:text-gray-400">
                    Маржа:
                  </span>
                  <span className="font-medium text-green-600 dark:text-green-400">
                    {formatPrice(box.margin)} ₸
                  </span>
                </div>
                <div className="flex justify-between pt-3 border-t border-purple-200 dark:border-gray-600">
                  <span className="text-sm text-gray-600 dark:text-gray-400">
                    Рентабельность:
                  </span>
                  <span className="font-bold text-purple-600 dark:text-purple-400">
                    {box.profitability}%
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Recommendations */}
      <section className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700">
        <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
          <span className="text-3xl">💡</span>
          Рекомендации к реализации
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-6 border border-blue-200 dark:border-blue-800">
            <h3 className="font-bold text-lg mb-3 text-blue-700 dark:text-blue-300">
              🚚 Логистика
            </h3>
            <p className="text-sm mb-2">{recommendations.logistics.strategy}</p>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Средний чек: {formatPrice(recommendations.logistics.averageCost)} ₸
            </p>
            <p className="text-xs text-blue-600 dark:text-blue-400 mt-2">
              {recommendations.logistics.note}
            </p>
          </div>

          <div className="bg-green-50 dark:bg-green-900/20 rounded-xl p-6 border border-green-200 dark:border-green-800">
            <h3 className="font-bold text-lg mb-3 text-green-700 dark:text-green-300">
              🏢 Помещение
            </h3>
            <p className="text-sm mb-2">{recommendations.warehouse.type}</p>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Размер: {recommendations.warehouse.size}
            </p>
            <p className="text-xs text-green-600 dark:text-green-400 mt-2">
              {recommendations.warehouse.note}
            </p>
          </div>

          <div className="bg-purple-50 dark:bg-purple-900/20 rounded-xl p-6 border border-purple-200 dark:border-purple-800">
            <h3 className="font-bold text-lg mb-3 text-purple-700 dark:text-purple-300">
              🛒 Закупки
            </h3>
            <p className="text-sm mb-2">
              {recommendations.procurement.strategy}
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Поставщик: {recommendations.procurement.supplier}
            </p>
            <p className="text-xs text-purple-600 dark:text-purple-400 mt-2">
              Скидка: {recommendations.procurement.discount}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
