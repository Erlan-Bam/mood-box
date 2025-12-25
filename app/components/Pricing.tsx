"use client";

interface PricingPlan {
  id: string;
  name: string;
  price: string;
  emoji: string;
  items: string;
  concept: string;
  features: string[];
  margin: string;
  popular?: boolean;
}

const pricingPlans: PricingPlan[] = [
  {
    id: "mini",
    name: "Mini",
    price: "7,900 ₸",
    emoji: "📦",
    items: "3-4 items",
    concept: "Affordable compliment",
    margin: "61%",
    features: [
      "Ceramic Mug",
      "Chocolate Bar",
      "Tea bags (25 pcs)",
      "Gift wrapping",
    ],
  },
  {
    id: "standard",
    name: "Standard",
    price: "14,900 ₸",
    emoji: "🎁",
    items: "5-7 items",
    concept: "Cozy essentials",
    margin: "42%",
    features: [
      "Thermo Cup",
      "Ground Coffee",
      "Coffee Syrup",
      "Ritter Sport Chocolate",
      "Marshmallows",
      "Scented Candle",
      "Premium wrapping",
    ],
    popular: true,
  },
  {
    id: "deluxe",
    name: "Deluxe",
    price: "22,900 ₸",
    emoji: "🎀",
    items: "8-10 items",
    concept: "Full gift set",
    margin: "35%",
    features: [
      "Hardcover Notebook",
      "Gift Pen",
      "Water Bottle",
      "Sweets Mix (Ferrero, Kinder)",
      "Premium Leaf Tea",
      "Nuts/Dried Fruits",
      "Designer Card",
    ],
  },
  {
    id: "premium",
    name: "Premium",
    price: "39,900 ₸",
    emoji: "👑",
    items: "12+ items",
    concept: "VIP / Executive",
    margin: "34%",
    features: [
      "Powerbank",
      "Coffee Beans + Thermos",
      "Bath Salt + Scrub + Candle",
      "Premium Sweets Set",
      "Printed Socks + Card",
      "Premium wrapping & Branding",
      "Free Delivery",
    ],
  },
];

interface PricingProps {
  onChoosePlan?: (planId: string) => void;
}

export default function Pricing({ onChoosePlan }: PricingProps) {
  return (
    <section
      id="pricing"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900"
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-white">
          Choose Your Perfect Box
        </h2>
        <p className="text-xl text-gray-300 text-center mb-16 max-w-3xl mx-auto">
          Select the plan that matches your gifting needs
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {pricingPlans.map((plan) => (
            <div
              key={plan.id}
              className={`relative rounded-3xl p-8 transition-all duration-300 hover:scale-105 ${
                plan.popular
                  ? "bg-gradient-to-br from-slate-800 to-slate-900 border-2 border-purple-500 shadow-2xl shadow-purple-500/20"
                  : "bg-gradient-to-br from-slate-800/80 to-slate-900/80 border border-slate-700"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-2 rounded-full text-sm font-semibold shadow-lg">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="text-center">
                <div className="text-6xl mb-4">{plan.emoji}</div>
                <h3 className="text-2xl font-bold text-white mb-2">
                  {plan.name}
                </h3>
                <div className="mb-2">
                  <span className="text-5xl font-bold text-transparent bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text">
                    {plan.price}
                  </span>
                </div>
                <p className="text-gray-400 mb-2">{plan.items}</p>
                <p className="text-sm text-purple-300 italic mb-4">{plan.concept}</p>
                <p className="text-xs text-green-400">Margin: {plan.margin}</p>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, index) => (
                  <li
                    key={index}
                    className="flex items-center text-gray-300 text-sm"
                  >
                    <svg
                      className="w-5 h-5 mr-3 text-green-400 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>

              <button
                onClick={() => onChoosePlan?.(plan.id)}
                className={`w-full py-4 rounded-xl font-semibold transition-all duration-300 ${
                  plan.popular
                    ? "bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white shadow-lg hover:shadow-xl"
                    : "bg-slate-700 hover:bg-slate-600 text-white"
                }`}
              >
                Choose Plan
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
