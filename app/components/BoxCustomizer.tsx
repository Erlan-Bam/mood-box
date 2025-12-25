'use client';

import { useState } from 'react';

interface BoxOption {
  id: string;
  name: string;
  price: number;
  items: number;
}

const themes = [
  { id: 'halloween', name: '🎃 Halloween', color: 'from-orange-500 to-purple-600' },
  { id: 'valentine', name: '💝 Valentine\'s Day', color: 'from-pink-500 to-red-600' },
  { id: 'christmas', name: '🎄 Christmas', color: 'from-green-500 to-red-600' },
  { id: 'birthday', name: '🎂 Birthday', color: 'from-blue-500 to-purple-600' },
  { id: 'summer', name: '☀️ Summer Vibes', color: 'from-yellow-400 to-orange-500' },
  { id: 'mystery', name: '✨ Mystery', color: 'from-indigo-500 to-purple-600' },
];

const boxSizes: BoxOption[] = [
  { id: 'mini', name: 'Mini Box', price: 19.99, items: 3 },
  { id: 'standard', name: 'Standard Box', price: 39.99, items: 5 },
  { id: 'deluxe', name: 'Deluxe Box', price: 69.99, items: 8 },
  { id: 'premium', name: 'Premium Box', price: 99.99, items: 12 },
];

const surpriseLevel = [
  { id: 'curated', name: 'Curated - You choose items', icon: '🎯' },
  { id: 'semi', name: 'Semi-Mystery - Mix of chosen & surprise', icon: '🎲' },
  { id: 'full', name: 'Full Mystery - All surprises!', icon: '🎁' },
];

export default function BoxCustomizer() {
  const [selectedTheme, setSelectedTheme] = useState(themes[0].id);
  const [selectedSize, setSelectedSize] = useState(boxSizes[1].id);
  const [selectedSurprise, setSelectedSurprise] = useState(surpriseLevel[1].id);

  const currentBox = boxSizes.find(box => box.id === selectedSize)!;
  const currentTheme = themes.find(theme => theme.id === selectedTheme)!;

  return (
    <div className="w-full max-w-6xl mx-auto">
      <div className="grid lg:grid-cols-2 gap-8">
        {/* Left Side - Customization Options */}
        <div className="space-y-8">
          {/* Theme Selection */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Choose Your Theme</h3>
            <div className="grid grid-cols-2 gap-3">
              {themes.map((theme) => (
                <button
                  key={theme.id}
                  onClick={() => setSelectedTheme(theme.id)}
                  className={`p-4 rounded-xl border-2 transition-all ${
                    selectedTheme === theme.id
                      ? 'border-purple-500 bg-purple-50 dark:bg-purple-900/20'
                      : 'border-gray-200 dark:border-gray-700 hover:border-purple-300'
                  }`}
                >
                  <div className={`text-2xl mb-2`}>{theme.name.split(' ')[0]}</div>
                  <div className="text-sm font-medium">{theme.name.split(' ').slice(1).join(' ')}</div>
                </button>
              ))}
            </div>
          </div>

          {/* Box Size Selection */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Select Box Size</h3>
            <div className="space-y-3">
              {boxSizes.map((box) => (
                <button
                  key={box.id}
                  onClick={() => setSelectedSize(box.id)}
                  className={`w-full p-4 rounded-xl border-2 transition-all text-left ${
                    selectedSize === box.id
                      ? 'border-purple-500 bg-purple-50 dark:bg-purple-900/20'
                      : 'border-gray-200 dark:border-gray-700 hover:border-purple-300'
                  }`}
                >
                  <div className="flex justify-between items-center">
                    <div>
                      <div className="font-semibold">{box.name}</div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">
                        {box.items} curated items
                      </div>
                    </div>
                    <div className="text-xl font-bold text-purple-600 dark:text-purple-400">
                      ${box.price}
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Surprise Level */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Surprise Level</h3>
            <div className="space-y-3">
              {surpriseLevel.map((level) => (
                <button
                  key={level.id}
                  onClick={() => setSelectedSurprise(level.id)}
                  className={`w-full p-4 rounded-xl border-2 transition-all text-left ${
                    selectedSurprise === level.id
                      ? 'border-purple-500 bg-purple-50 dark:bg-purple-900/20'
                      : 'border-gray-200 dark:border-gray-700 hover:border-purple-300'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{level.icon}</span>
                    <span className="font-medium">{level.name}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Right Side - Preview */}
        <div className="lg:sticky lg:top-8 h-fit">
          <div className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 rounded-2xl p-8 border border-gray-200 dark:border-gray-700">
            <h3 className="text-2xl font-bold mb-6">Your Custom Box</h3>
            
            {/* Box Preview */}
            <div className={`bg-gradient-to-br ${currentTheme.color} rounded-xl p-8 mb-6 text-white shadow-xl`}>
              <div className="text-center">
                <div className="text-6xl mb-4">📦</div>
                <h4 className="text-2xl font-bold mb-2">{currentBox.name}</h4>
                <p className="text-white/90">{currentTheme.name}</p>
              </div>
            </div>

            {/* Summary */}
            <div className="space-y-4 mb-6">
              <div className="flex justify-between py-2 border-b border-gray-200 dark:border-gray-700">
                <span className="text-gray-600 dark:text-gray-400">Theme:</span>
                <span className="font-semibold">{currentTheme.name}</span>
              </div>
              <div className="flex justify-between py-2 border-b border-gray-200 dark:border-gray-700">
                <span className="text-gray-600 dark:text-gray-400">Box Size:</span>
                <span className="font-semibold">{currentBox.name}</span>
              </div>
              <div className="flex justify-between py-2 border-b border-gray-200 dark:border-gray-700">
                <span className="text-gray-600 dark:text-gray-400">Items:</span>
                <span className="font-semibold">{currentBox.items} items</span>
              </div>
              <div className="flex justify-between py-2 border-b border-gray-200 dark:border-gray-700">
                <span className="text-gray-600 dark:text-gray-400">Surprise Level:</span>
                <span className="font-semibold">
                  {surpriseLevel.find(s => s.id === selectedSurprise)?.icon}
                </span>
              </div>
              <div className="flex justify-between items-center py-4 mt-4">
                <span className="text-xl font-semibold">Total:</span>
                <span className="text-3xl font-bold text-purple-600 dark:text-purple-400">
                  ${currentBox.price}
                </span>
              </div>
            </div>

            <button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold py-4 px-6 rounded-xl transition-all transform hover:scale-105 shadow-lg">
              Add to Cart
            </button>
            
            <p className="text-center text-sm text-gray-500 dark:text-gray-400 mt-4">
              Free shipping on orders over $50
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
