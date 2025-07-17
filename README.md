# Vigovia New Zealand - Travel Website

![Vigovia New Zealand](public/vigovia-logo.svg)

A responsive travel website showcasing New Zealand tourism experiences, built with React, TypeScript, and Tailwind CSS.

## 📱 Features

- **Fully Responsive Design**: Optimized for all devices from mobile phones to large desktop screens
- **Modern UI Components**: Clean, accessible interface with intuitive navigation
- **Interactive Tour Booking**: Browse and filter tours by category
- **Activity Showcase**: Explore popular activities with detailed information
- **Seasonal Information**: Learn about the best times to visit New Zealand
- **Mobile-First Approach**: Designed with mobile users as the priority while maintaining desktop experience

## 🚀 Tech Stack

- **React**: UI library for building component-based interfaces
- **TypeScript**: Type-safe JavaScript for better developer experience
- **Tailwind CSS**: Utility-first CSS framework for rapid UI development
- **Vite**: Next-generation frontend tooling for fast development and optimized builds

## 📋 Project Structure

```
vigovia-newzealand/
├── client/
│   ├── components/
│   │   ├── data/          # Data models and mock data
│   │   ├── layout/        # Layout components (Header, Footer)
│   │   ├── sections/      # Page sections (Hero, Tours, Activities)
│   │   └── ui/            # Reusable UI components
│   ├── lib/               # Utility functions and hooks
│   ├── pages/             # Page components
│   └── types/             # TypeScript type definitions
├── public/                # Static assets
└── ...config files        # Configuration files for the project
```

## 🛠️ Installation & Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/vigovia-newzealand.git
   cd vigovia-newzealand
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

## 📱 Responsive Design

The website is fully responsive with specific optimizations:

- **Mobile Navigation**: Hamburger menu for smaller screens
- **Adaptive Layouts**: Grid layouts that adjust based on screen size
- **Touch-Friendly**: Larger touch targets on mobile devices
- **Optimized Images**: Properly sized images for different devices
- **Responsive Typography**: Text sizes that adjust based on viewport

## 🎨 Design System

The project uses a consistent design system with:

- **Color Palette**: Primary purple (#541C9C), accent colors, and supporting neutrals
- **Typography**: Responsive type scale with appropriate line heights
- **Spacing**: Consistent spacing system based on Tailwind's defaults
- **Components**: Reusable UI components like buttons, cards, and form elements

## 🔄 Data Flow

- Mock data is stored in `client/components/data/newZealandData.tsx`
- Components receive data through props from parent components
- Interactive elements use React state for local UI changes

## 🧩 Key Components

- **Header**: Navigation and user account access
- **HeroSection**: Main banner with call-to-action
- **ToursSection**: Filterable tour listings with responsive table/card views
- **ActivitiesSection**: Grid of activities with modal details
- **Footer**: Site navigation, contact information, and legal links

## 📈 Future Enhancements

- User authentication system
- Online booking and payment processing
- Interactive map integration
- Personalized recommendations
- Multi-language support
- Dark mode toggle

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 👥 Contributors

- Your Name - Initial work and design

---

Made with ❤️ by Vigovia Travel Technologies