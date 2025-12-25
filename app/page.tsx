import BoxCustomizer from './components/BoxCustomizer';

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-950">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 dark:bg-gray-950/80 backdrop-blur-md z-50 border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2">
              <span className="text-3xl">📦</span>
              <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Mood Box
              </span>
            </div>
            <div className="hidden md:flex items-center gap-8">
              <a href="#how-it-works" className="hover:text-purple-600 transition-colors">How It Works</a>
              <a href="#themes" className="hover:text-purple-600 transition-colors">Themes</a>
              <a href="#customize" className="hover:text-purple-600 transition-colors">Customize</a>
              <a href="#pricing" className="hover:text-purple-600 transition-colors">Pricing</a>
            </div>
            <button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-6 py-2 rounded-full font-semibold transition-all transform hover:scale-105">
              Get Started
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 dark:from-gray-900 dark:via-purple-900/20 dark:to-pink-900/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent leading-tight">
              Unwrap Joy with Every Themed Box
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
              Curated mystery boxes tailored to your favorite occasions. Choose your theme, 
              customize your experience, and discover unique treasures that match your mood.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#customize" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 rounded-full font-bold text-lg transition-all transform hover:scale-105 shadow-xl">
                Create Your Box
              </a>
              <a href="#how-it-works" className="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-900 dark:text-white px-8 py-4 rounded-full font-bold text-lg transition-all border-2 border-gray-200 dark:border-gray-700">
                Learn More
              </a>
            </div>
          </div>
          
          {/* Hero Visual */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {[
              { emoji: '🎃', name: 'Halloween', color: 'from-orange-400 to-purple-600' },
              { emoji: '💝', name: 'Valentine', color: 'from-pink-400 to-red-600' },
              { emoji: '🎄', name: 'Christmas', color: 'from-green-400 to-red-600' },
              { emoji: '🎂', name: 'Birthday', color: 'from-blue-400 to-purple-600' },
            ].map((box, idx) => (
              <div key={idx} className={`bg-gradient-to-br ${box.color} rounded-2xl p-6 text-center text-white shadow-lg transform hover:scale-105 transition-all cursor-pointer`}>
                <div className="text-5xl mb-2">{box.emoji}</div>
                <div className="font-semibold">{box.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-950">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">How Mood Box Works</h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 text-center mb-16 max-w-3xl mx-auto">
            Four simple steps to receive your perfect themed box
          </p>
          
          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: '1',
                icon: '🎨',
                title: 'Choose Your Theme',
                description: 'Select from seasonal themes like Halloween, Christmas, Valentine\'s Day, or create a custom mood.'
              },
              {
                step: '2',
                icon: '⚙️',
                title: 'Customize Your Box',
                description: 'Pick your box size, decide between curated items or full mystery, and set your preferences.'
              },
              {
                step: '3',
                icon: '💳',
                title: 'Place Your Order',
                description: 'Complete your purchase with secure payment. Subscribe for monthly surprises or order one-time.'
              },
              {
                step: '4',
                icon: '🎁',
                title: 'Unwrap & Enjoy',
                description: 'Receive your beautifully packaged box and discover unique, themed treasures inside!'
              },
            ].map((item, idx) => (
              <div key={idx} className="text-center group">
                <div className="bg-gradient-to-br from-purple-100 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 text-4xl group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <div className="text-sm font-bold text-purple-600 dark:text-purple-400 mb-2">STEP {item.step}</div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Themes Section */}
      <section id="themes" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">Explore Our Themes</h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 text-center mb-16 max-w-3xl mx-auto">
            Every box is carefully curated to match your chosen theme with exclusive, high-quality items
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                theme: 'Halloween',
                emoji: '🎃',
                gradient: 'from-orange-500 to-purple-700',
                items: ['Spooky decorations', 'Themed apparel', 'Treats & candies', 'Collectibles'],
                popular: true
              },
              {
                theme: 'Valentine\'s Day',
                emoji: '💝',
                gradient: 'from-pink-500 to-red-600',
                items: ['Romantic gifts', 'Chocolates & treats', 'Love notes', 'Accessories'],
                popular: false
              },
              {
                theme: 'Christmas',
                emoji: '🎄',
                gradient: 'from-green-500 to-red-600',
                items: ['Holiday decor', 'Festive apparel', 'Winter accessories', 'Seasonal treats'],
                popular: true
              },
              {
                theme: 'Birthday Bash',
                emoji: '🎂',
                gradient: 'from-blue-500 to-purple-600',
                items: ['Party supplies', 'Fun gadgets', 'Personalized gifts', 'Sweet treats'],
                popular: false
              },
              {
                theme: 'Summer Vibes',
                emoji: '☀️',
                gradient: 'from-yellow-400 to-orange-500',
                items: ['Beach essentials', 'Summer fashion', 'Outdoor gear', 'Cool refreshments'],
                popular: false
              },
              {
                theme: 'Mystery Box',
                emoji: '✨',
                gradient: 'from-indigo-500 to-purple-600',
                items: ['Surprise theme!', 'Random treasures', 'Limited editions', 'Exclusive items'],
                popular: true
              },
            ].map((box, idx) => (
              <div key={idx} className="relative group">
                {box.popular && (
                  <div className="absolute -top-3 -right-3 bg-yellow-400 text-gray-900 px-3 py-1 rounded-full text-sm font-bold z-10 shadow-lg">
                    ⭐ Popular
                  </div>
                )}
                <div className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all group-hover:-translate-y-2">
                  <div className={`bg-gradient-to-br ${box.gradient} p-8 text-center text-white`}>
                    <div className="text-6xl mb-3">{box.emoji}</div>
                    <h3 className="text-2xl font-bold">{box.theme}</h3>
                  </div>
                  <div className="p-6">
                    <h4 className="font-semibold mb-3 text-gray-900 dark:text-white">What's Inside:</h4>
                    <ul className="space-y-2">
                      {box.items.map((item, i) => (
                        <li key={i} className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                          <span className="text-purple-600 dark:text-purple-400">✓</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                    <button className="w-full mt-6 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold py-3 rounded-xl transition-all">
                      Explore Theme
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Box Customizer Section */}
      <section id="customize" className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-950">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">Build Your Perfect Box</h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 text-center mb-16 max-w-3xl mx-auto">
            Customize every aspect of your box to create a unique unboxing experience
          </p>
          <BoxCustomizer />
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 dark:from-gray-900 dark:via-purple-900/20 dark:to-pink-900/20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">Simple, Transparent Pricing</h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 text-center mb-16 max-w-3xl mx-auto">
            Choose the perfect size for your budget. All boxes include free shipping over $50
          </p>
          
          <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[
              { name: 'Mini', price: '19.99', items: '3-4', icon: '📦', best: false },
              { name: 'Standard', price: '39.99', items: '5-7', icon: '🎁', best: true },
              { name: 'Deluxe', price: '69.99', items: '8-10', icon: '🎀', best: false },
              { name: 'Premium', price: '99.99', items: '12+', icon: '👑', best: false },
            ].map((tier, idx) => (
              <div key={idx} className={`relative bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg ${tier.best ? 'ring-4 ring-purple-500 scale-105' : ''}`}>
                {tier.best && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-purple-600 text-white px-4 py-1 rounded-full text-sm font-bold">
                    Most Popular
                  </div>
                )}
                <div className="text-center">
                  <div className="text-5xl mb-3">{tier.icon}</div>
                  <h3 className="text-2xl font-bold mb-2">{tier.name}</h3>
                  <div className="text-4xl font-bold text-purple-600 dark:text-purple-400 mb-1">
                    ${tier.price}
                  </div>
                  <div className="text-gray-600 dark:text-gray-400 mb-4">{tier.items} items</div>
                  <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-2 mb-6">
                    <li>✓ Curated items</li>
                    <li>✓ Theme matching</li>
                    <li>✓ Gift wrapping</li>
                    {tier.price !== '19.99' && <li>✓ Free shipping</li>}
                  </ul>
                  <button className={`w-full py-3 rounded-xl font-semibold transition-all ${
                    tier.best 
                      ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700' 
                      : 'bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600'
                  }`}>
                    Choose Plan
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Revenue Model Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-950">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">Our Business Model</h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 text-center mb-16 max-w-3xl mx-auto">
            Sustainable growth through multiple revenue streams
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Direct Box Sales',
                icon: '💰',
                description: 'One-time purchases and themed box sales with premium margins on curated items',
                percentage: '60%'
              },
              {
                title: 'Subscription Model',
                icon: '🔄',
                description: 'Monthly recurring revenue from subscribers receiving regular themed boxes',
                percentage: '30%'
              },
              {
                title: 'Premium Add-ons',
                icon: '⭐',
                description: 'Exclusive items, gift wrapping upgrades, and personalization services',
                percentage: '10%'
              },
            ].map((model, idx) => (
              <div key={idx} className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-2xl p-8 border border-purple-100 dark:border-purple-800">
                <div className="text-5xl mb-4">{model.icon}</div>
                <h3 className="text-2xl font-bold mb-3">{model.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">{model.description}</p>
                <div className="text-3xl font-bold text-purple-600 dark:text-purple-400">{model.percentage}</div>
                <div className="text-sm text-gray-500 dark:text-gray-500">of revenue</div>
              </div>
            ))}
          </div>

          <div className="mt-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-8 md:p-12 text-white text-center">
            <h3 className="text-3xl font-bold mb-4">Key Growth Strategies</h3>
            <div className="grid md:grid-cols-4 gap-6 mt-8">
              {[
                { icon: '🎯', text: 'Targeted seasonal campaigns' },
                { icon: '🤝', text: 'Brand partnerships' },
                { icon: '📱', text: 'Social media marketing' },
                { icon: '🎁', text: 'Referral program' },
              ].map((strategy, idx) => (
                <div key={idx} className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                  <div className="text-4xl mb-2">{strategy.icon}</div>
                  <div className="font-semibold">{strategy.text}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">Frequently Asked Questions</h2>
          
          <div className="space-y-4">
            {[
              {
                q: 'How does the subscription work?',
                a: 'Choose your preferred theme and box size, and we\'ll deliver a new curated box every month. Cancel anytime with no commitment.'
              },
              {
                q: 'Can I customize what\'s inside my box?',
                a: 'Yes! Choose between fully curated (you select items), semi-mystery (mix of both), or full mystery (all surprises). Each option offers unique value.'
              },
              {
                q: 'What if I don\'t like an item?',
                a: 'We offer a 100% satisfaction guarantee. If you\'re not happy with any item, contact us within 14 days for a replacement or refund.'
              },
              {
                q: 'Do you ship internationally?',
                a: 'Currently we ship within the US and Canada. International shipping is coming soon! Sign up for our newsletter to be notified.'
              },
              {
                q: 'How are themes rotated?',
                a: 'We offer seasonal themes (Halloween, Christmas, Valentine\'s) during their respective months, plus year-round themes like Birthday, Summer, and Mystery boxes.'
              },
            ].map((faq, idx) => (
              <details key={idx} className="group bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm hover:shadow-md transition-all">
                <summary className="font-semibold text-lg cursor-pointer list-none flex justify-between items-center">
                  {faq.q}
                  <span className="text-purple-600 dark:text-purple-400 group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="mt-4 text-gray-600 dark:text-gray-400">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Start Your Journey?</h2>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of happy customers who discover joy in every box
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#customize" className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-4 rounded-full font-bold text-lg transition-all transform hover:scale-105 shadow-xl">
              Create Your First Box
            </a>
            <a href="#pricing" className="bg-transparent border-2 border-white hover:bg-white/10 text-white px-8 py-4 rounded-full font-bold text-lg transition-all">
              View Pricing
            </a>
          </div>
          <div className="mt-12 flex justify-center gap-8 text-sm">
            <div>
              <div className="text-3xl font-bold">10K+</div>
              <div className="opacity-90">Happy Customers</div>
            </div>
            <div>
              <div className="text-3xl font-bold">50K+</div>
              <div className="opacity-90">Boxes Delivered</div>
            </div>
            <div>
              <div className="text-3xl font-bold">4.9★</div>
              <div className="opacity-90">Average Rating</div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="text-3xl">📦</span>
                <span className="text-xl font-bold text-white">Mood Box</span>
              </div>
              <p className="text-sm text-gray-400">
                Curating joy, one themed box at a time.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#how-it-works" className="hover:text-purple-400 transition-colors">How It Works</a></li>
                <li><a href="#themes" className="hover:text-purple-400 transition-colors">Themes</a></li>
                <li><a href="#pricing" className="hover:text-purple-400 transition-colors">Pricing</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Support</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-purple-400 transition-colors">Contact Us</a></li>
                <li><a href="#" className="hover:text-purple-400 transition-colors">Shipping Info</a></li>
                <li><a href="#" className="hover:text-purple-400 transition-colors">Returns</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Stay Connected</h4>
              <p className="text-sm text-gray-400 mb-4">Subscribe for exclusive offers</p>
              <div className="flex gap-2">
                <input 
                  type="email" 
                  placeholder="Your email" 
                  className="bg-gray-800 text-white px-4 py-2 rounded-lg flex-1 text-sm"
                />
                <button className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg text-sm font-semibold">
                  →
                </button>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-400">
            <p>&copy; 2024 Mood Box. All rights reserved. Made with 💜 for the joy of unboxing.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
