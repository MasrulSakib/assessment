# Chargeflow & Domu.ai Assessment Project

This project is a high-fidelity replication of key components and animations from the Chargeflow and Domu.ai websites, built using Next.js 16, Tailwind CSS, and Framer Motion.

## Features

- **Morphing Navbar**: A scroll-sensitive navigation bar that transforms from a full-width transparent header into a compact, frosted-glass pill.
- **Domu Integrations Animation**: Complex scroll-based convergence of integration icons toward a central logo, with precise timing for text and logo transitions.
- **Interactive Dropdowns**: Custom-built desktop dropdown menus with viewport-centered positioning and smooth entry/exit animations.
- **Optimized Performance**: Cleaned and pruned project structure with minimal dependencies and efficient CSS.

## Screenshots

### Scrolled Navbar
![Scrolled Navbar](/screenshots/navbar-scrolled.png)

### Dropdown Menu
![Dropdown Menu](/screenshots/dropdown-menu.png)

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v20 or newer recommended)
- [npm](https://www.npmjs.com/) or another package manager

### Setup

1. Install dependencies:
   ```bash
   npm install
   ```

2. Run the development server:
   ```bash
   npm run dev
   ```

3. Build for production:
   ```bash
   npm run build
   ```

The application will be available at [http://localhost:3000](http://localhost:3000).

## Implementation Assumptions & Decisions

- **Framework Selection**: Next.js 16 with Turbopack was utilized as the primary framework for build speed and modern routing.
- **Animation Strategy**: Framer Motion's `useScroll` and `useTransform` hooks were chosen for their precision in scroll-based animations, particularly for the navbar's morphing and the integration icons' convergence.
- **Design Fidelity**: Prioritized exact visual replication of color schemes, typography, and spacing from the requested reference sites.
- **Responsiveness**: Used a combination of Tailwind's breakpoint utilities and CSS `clamp`/`min` functions to ensure high-fidelity appearance on both mobile and large desktop screens.
- **Maintenance & Cleanup**: A full audit was performed to remove unused legacy dependencies (like original boilerplate Shadcn components and Radix-UI primitives) to reduce bundle size and maintain a clean codebase.
