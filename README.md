# 📦 Mood Box - Themed Mystery Box Subscription Service

A modern, beautifully designed landing page for Mood Box - a startup that offers curated themed mystery boxes for special occasions like Halloween, Valentine's Day, Christmas, birthdays, and more.

## 🚀 Live Demo

Visit [http://localhost:3000](http://localhost:3000) to see the application in action.

## ✨ Features

### 🎨 Modern Design

- Beautiful gradient color schemes
- Smooth animations and transitions
- Dark mode support
- Fully responsive mobile design
- Modern glassmorphism effects

### 🔐 Authentication System

- Sign In/Sign Up functionality
- Email and password validation
- Persistent sessions with localStorage
- Protected cart functionality
- User email display in navigation

### 📦 Box Customization

- 6 themed box options (Halloween, Valentine's, Christmas, Birthday, Summer, Mystery)
- 4 box sizes (Mini, Standard, Deluxe, Premium)
- 3 surprise levels (Curated, Semi-Mystery, Full Mystery)
- Real-time price calculation
- Interactive preview
- Add to cart functionality (requires authentication)

### 📄 Landing Page Sections

1. **Hero Section**

   - Eye-catching headline
   - Call-to-action buttons
   - Theme preview cards

2. **How It Works**

   - 4-step process explanation
   - Icon-based visual guides
   - Clear user journey

3. **Themes Gallery**

   - 6 different themed boxes
   - Popular badges for trending themes
   - Detailed item lists per theme
   - Individual theme exploration

4. **Box Customizer**

   - Interactive customization tool
   - Live preview with selected options
   - Summary breakdown
   - Price calculation

5. **Pricing Plans**

   - 4 pricing tiers
   - Clear feature comparison
   - "Most Popular" highlighting
   - Transparent pricing structure

6. **Business Model**

   - Revenue stream breakdown (60% Direct Sales, 30% Subscriptions, 10% Add-ons)
   - Growth strategies visualization
   - Investor-friendly presentation

7. **FAQ Section**

   - Common questions and answers
   - Expandable/collapsible design
   - Comprehensive coverage

8. **Call-to-Action**

   - Social proof (10K+ customers, 50K+ boxes, 4.9★ rating)
   - Multiple action buttons
   - Statistics showcase

9. **Footer**
   - Quick links navigation
   - Newsletter signup
   - Support links

## 🛠️ Technology Stack

- **Framework**: Next.js 16.0.3 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Font**: Geist Sans & Geist Mono
- **Authentication**: Client-side with localStorage
- **State Management**: React Hooks

## 📦 Project Structure

```
mood-box/
├── app/
│   ├── components/
│   │   ├── AuthModal.tsx          # Sign in/sign up modal
│   │   ├── BoxCustomizer.tsx      # Interactive box builder
│   │   └── Navigation.tsx         # Header with auth state
│   ├── hooks/
│   │   └── useAuth.ts             # Authentication hook
│   ├── globals.css                # Global styles
│   ├── layout.tsx                 # Root layout
│   └── page.tsx                   # Main landing page
├── public/                        # Static assets
├── AUTH_GUIDE.md                  # Authentication documentation
├── README.md                      # This file
├── package.json                   # Dependencies
└── tsconfig.json                  # TypeScript config
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Clone the repository

```bash
git clone <repository-url>
cd mood-box
```

2. Install dependencies

```bash
npm install
# or
yarn install
```

3. Run the development server

```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Building for Production

```bash
npm run build
npm start
```

## 🔐 Authentication System

The application uses a localStorage-based authentication system for development. See [AUTH_GUIDE.md](./AUTH_GUIDE.md) for detailed documentation.

### Quick Start with Auth

1. Click "Get Started" button
2. Choose "Sign Up" in the modal
3. Enter email and password (min 6 characters)
4. You're now authenticated!
5. Try customizing a box and adding it to cart

**Test User**: Create any email/password combination to test the system.

## 💰 Business Model Overview

### Revenue Streams

1. **Direct Box Sales (60%)**

   - One-time themed box purchases
   - Premium margins on curated items
   - Seasonal spikes (Halloween, Christmas, Valentine's)

2. **Subscription Model (30%)**

   - Monthly recurring revenue
   - Customer retention focus
   - Predictable cash flow

3. **Premium Add-ons (10%)**
   - Gift wrapping upgrades
   - Exclusive limited items
   - Personalization services

### Growth Strategies

- 🎯 Targeted seasonal campaigns
- 🤝 Brand partnerships with popular franchises
- 📱 Social media influencer marketing
- 🎁 Referral program incentives

## 🎨 Design System

### Color Palette

- **Primary**: Purple (`#9333ea`)
- **Secondary**: Pink (`#ec4899`)
- **Accent**: Blue (`#3b82f6`)
- **Theme Colors**: Orange, Red, Green, Yellow (for themed boxes)

### Typography

- **Headings**: Geist Sans (Bold)
- **Body**: Geist Sans (Regular)
- **Code**: Geist Mono

### Components

- Gradient buttons with hover effects
- Glassmorphism cards
- Smooth transitions and animations
- Shadow elevation system

## 📱 Responsive Design

- **Mobile**: 320px - 767px
- **Tablet**: 768px - 1023px
- **Desktop**: 1024px+

All sections are fully responsive with mobile-first design approach.

## 🎯 Target Audience

- Gift shoppers looking for unique presents
- Subscription box enthusiasts
- Holiday celebrators
- Mystery/surprise lovers
- Ages 18-45, primarily female demographic

## 📈 Future Enhancements

### Phase 1 (MVP) ✅

- Landing page design
- Box customization tool
- Authentication system
- Cart functionality

### Phase 2 (Planned)

- [ ] Checkout and payment integration (Stripe)
- [ ] User dashboard and order history
- [ ] Subscription management
- [ ] Email notifications
- [ ] Admin panel for box management

### Phase 3 (Future)

- [ ] Mobile app (React Native)
- [ ] Loyalty rewards program
- [ ] Social sharing features
- [ ] Unboxing video gallery
- [ ] Community features

## 🤝 Contributing

This is a startup project. For collaboration opportunities:

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📝 License

This project is proprietary software for Mood Box startup.

## 📧 Contact

For business inquiries or support:

- Email: hello@moodbox.com (example)
- Website: www.moodbox.com (example)

---

**Built with 💜 by the Mood Box team**

_Making every occasion special, one box at a time_ 📦✨
