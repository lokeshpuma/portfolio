# Lokesh M — AI & ML Engineer Portfolio // Instrument Console

[![Vite](https://img.shields.io/badge/Vite-6.x-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
[![React](https://img.shields.io/badge/React-18.x-61DAFB?logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-3.x-38B2AC?logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-11.x-0055FF?logo=framer&logoColor=white)](https://www.framer.com/motion/)

A high-performance, instrument-panel portfolio and developer dashboard engineered for an AI & Machine Learning practitioner. Built with React, TypeScript, Vite, Tailwind CSS, and Framer Motion, featuring a physical **Modular Command Dock** with reel navigation, telemetry preview, and complete dual-theme token support.

---

## 🚀 Key Features

- **🎛️ Modular Command Dock**:
  - **Identity Module**: Chamfered instrument frame, dual avatar toggle (real / AI builder), breathing 260° telemetry arc, and status badge.
  - **Reel Channel Selector**: 5-slot vertical dial selector with keyboard navigation (Up/Down/Home/End), mousewheel scrolling, dynamic notch indicators, and vernier index lines.
  - **Live Preview Module**: Dynamic contextual telemetry displaying micro-gauges, metrics, or technical domain summaries per active route.
  - **Utility Module**: Machined rocker switches for GitHub, LinkedIn, and Email, pull-lever for resume PDF download, and a rotary knob for theme toggling.
  - **Collapsible Rail**: Collapses into a centered 64px icon-only instrument rail maintaining slot height and alignment without vertical layout jump.

- **🌓 Dual Token Themes (Real Light & Dark Mode)**:
  - **Dark Mode**: Precision instrument aesthetic with hairline highlights, subtle bevel depths, and amber glow (`#f59e0b`).
  - **Light Mode**: Warm off-white/paper base (`#f3f1ec`), crisp paper panels (`#faf9f6`), warm ink typography (`#1b1a17`), inverted depth shadows, and contrast-holding amber-700 (`#b45309`).
  - Theme choices persist in `localStorage` and automatically respect system `prefers-color-scheme`.

- **📐 Machine Typography & Alignment Rhythm**:
  - Tabular numerals (`font-variant-numeric: tabular-nums`) across all metrics, scores, percentages, counters, and dates to eliminate column drift.
  - Strict 8px baseline grid rhythm snapping spacing, tags, and ledger blocks.
  - Measure-constrained body copy (`max-w-[70ch]`, `leading-[1.7]`) and fixed 20×20px icon containers (`.icon-box`).

- **📊 Comprehensive Engineering Sections**:
  - **Overview**: Core profile telemetry, live roles typing animation, 6-metric ledger grid, and technology chips.
  - **Skills**: Structured capability matrix, ML interview probe coverage, and category breakdown.
  - **Projects**: In-depth architecture breakdowns, clinical metrics, Docker/FastAPI pipeline highlights, and live demo modals.
  - **Insights**: Recharts domain composition donut, evaluation rigor matrix, and validation telemetry.
  - **Journey**: Interactive chronological timeline from coursework to machine learning engineering.
  - **Certifications**: Filterable credential catalog with verification links and curriculum details.
  - **Social & Activity**: Developer profiles and platform telemetry.
  - **Contact**: Direct transmission console with secure dispatch simulation.

---

## 🛠️ Project Structure

```text
portfolio/
├── public/                 # Static assets & redirects
│   ├── favicon.svg         # Instrument console icon
│   └── _redirects          # SPA fallback routing
├── src/
│   ├── components/
│   │   ├── certificates/   # Certificate cards & detail modals
│   │   ├── common/         # StatCard, CTABanner, BackgroundGlow, CustomCursor, ParticleBackground
│   │   ├── layout/         # DashboardLayout, Topbar, Footer, Sidebar
│   │   │   └── command-dock/ # IdentityModule, ReelSelector, LivePreviewModule, UtilityModule
│   │   └── social/         # Social profile cards
│   ├── context/
│   │   └── ThemeContext.tsx # Dual theme provider & persistence
│   ├── data/               # Structured data sources
│   │   ├── certifications.ts
│   │   ├── insights.ts
│   │   ├── journey.ts
│   │   ├── profile.ts
│   │   ├── projects.ts
│   │   └── skills.ts
│   ├── pages/              # Route views
│   │   ├── CertificationsPage.tsx
│   │   ├── ContactPage.tsx
│   │   ├── InsightsPage.tsx
│   │   ├── JourneyPage.tsx
│   │   ├── OverviewPage.tsx
│   │   ├── ProjectsPage.tsx
│   │   ├── SkillsPage.tsx
│   │   └── SocialActivityPage.tsx
│   ├── types/              # TypeScript schemas
│   ├── App.tsx             # Application router
│   ├── index.css           # Design tokens, bevels, & utilities
│   └── main.tsx            # Entry point
├── index.html              # HTML shell
├── package.json            # Project manifest & dependencies
├── tailwind.config.js      # Tailwind configuration
├── tsconfig.json           # TypeScript configuration
└── vite.config.ts          # Vite build configuration
```

---

## 💻 Tech Stack

- **Core**: React 18, TypeScript, Vite
- **Styling**: Tailwind CSS + Custom CSS Variables & Bevel Design System
- **Animation & Physics**: Framer Motion
- **Icons**: Lucide React
- **Data Visualization**: Recharts
- **Routing**: React Router DOM (v6 HashRouter / BrowserRouter support)

---

## ⚡ Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- `npm` or `yarn` / `pnpm`

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/lokeshpuma/portfolio.git
   cd portfolio
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Launch local development server:
   ```bash
   npm run dev
   ```
   Open `http://localhost:5173` to view the application.

4. Build for production:
   ```bash
   npm run build
   ```

5. Preview production build:
   ```bash
   npm run preview
   ```

---

## 🌐 Deployment

The application is optimized for zero-configuration deployment on:
- **Vercel**: Preconfigured with `vercel.json` rewrite rules for client-side routing.
- **Netlify**: Preconfigured with `public/_redirects` SPA fallback.
- **GitHub Pages**: Fully compatible with client-side hash or static deployments.

---

## 👤 Author

**Lokesh M**
- **Role**: AI & ML Engineer
- **GitHub**: [@lokeshpuma](https://github.com/lokeshpuma)
- **LinkedIn**: [lokeshpuma](https://linkedin.com/in/lokeshpuma)
- **Email**: [lokeshpuma2704@gmail.com](mailto:lokeshpuma2704@gmail.com)

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
