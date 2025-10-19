# React Phishing Dashboard

React + TS + Vite: professional UI, analytics dashboard, auth system, responsive design with theme support.

---

## 📈 Status

- **Status:** active (Active)
- **Focus:** React + TS + Vite: professional UI, analytics dashboard, auth system, responsive design with theme support.
- **Last updated:** 13/10/2025
- **Target completion:** 20/10/2025

---

## 🔑 Highlights

- **Professional UI** → Modern dashboard with analytics and responsive design
- **Theme System** → Light/dark mode with centralized design tokens
- **Flutter-style Scaffold** → App bar, drawer, and bottom navigation patterns
- **Analytics Dashboard** → Comprehensive metrics and threat visualization
- **Co-located Styles** → Component styles in separate .styles.ts files
- **Centralized Routing** → Route configuration with authentication guards
- **VS Code Integration** → Extensions, settings, snippets, and Plop generators
- **Modern Tooling** → ESLint, Prettier, TypeScript, Vite
- **State Management** → Zustand for lightweight state management
- **HTTP Client** → Axios with interceptors and error handling

---

## 🏗 Architecture Overview

```
src/
 ├─ pages/          # Page components with co-located styles
 │  ├─ Dashboard/   # Dashboard page + Dashboard.styles.ts
 │  ├─ Login/       # Login page + Login.styles.ts
 │  └─ Analytics/   # Analytics page + Analytics.styles.ts
 ├─ components/     # Reusable UI components
 │  ├─ Button/      # Button component + Button.styles.ts
 │  ├─ Input/       # Input component + Input.styles.ts
 │  ├─ Scaffold/    # Flutter-style Scaffold component
 │  └─ DashboardLayout/ # Main app layout component
 ├─ theme/          # Theme system (light/dark mode)
 │  ├─ theme.ts     # Color palettes and design tokens
 │  ├─ ThemeProvider.tsx # React Context provider
 │  └─ styled.ts    # Styled-components theme extension
 ├─ shared/         # API client, utilities, types
 ├─ store/          # Zustand state management
 ├─ routes/         # Centralized route configuration
 ├─ hooks/          # Custom React hooks (useBreakpoint, etc.)
 └─ config/         # Debug configuration and feature flags
```

**Patterns used:**

- **React + TypeScript** → type-safe component development
- **Vite** → fast build tool and dev server
- **Styled Components** → CSS-in-JS with theme support
- **Zustand** → lightweight state management
- **Axios** → HTTP client with interceptors
- **Co-located Styles** → Component styles in separate .styles.ts files
- **Theme System** → Centralized design tokens and dark/light mode
- **Flutter-style Scaffold** → App bar, drawer, bottom navigation patterns
- **Centralized Routing** → Route configuration with protection guards
- **VS Code Integration** → Extensions, settings, snippets, and Plop generators

---

## 📱 What It Demonstrates

- Professional dashboard development with React + TypeScript
- Theme system implementation with light/dark mode support
- Flutter-style UI patterns adapted for web (Scaffold, App Bar, Drawer)
- Analytics dashboard with responsive design and data visualization
- Co-located styling patterns with styled-components
- Centralized routing with authentication guards and protected routes
- VS Code integration with extensions, settings, and code generators
- Modern development workflow with Vite, ESLint, and Prettier

---

## 🚀 Getting Started

```bash
git clone https://github.com/Krispy145/react-phishing-dashboard.git
cd react-phishing-dashboard
npm install
```

**Run:**
```bash
npm run dev
```

**Build:**
```bash
npm run build
```

**Generate Components:**
```bash
npm run plop
```

**VS Code Setup:**
- Install recommended extensions (auto-suggested on first open)
- Use `Ctrl+Shift+P` → "Developer: Reload Window" to apply settings
- Use snippets: `rft` (React functional component), `usehook` (custom hook)

---

## 🧪 Testing

```bash
npm test
```

- Unit → components and utilities
- Integration → API interactions
- E2E → user flows
- Component → UI component testing with React Testing Library
- Theme → light/dark mode theme testing
- Responsive → breakpoint and layout testing

---

## 🔒 Security & Next Steps

- Follow security best practices for the technology stack
- Implement proper authentication and authorization
- Add comprehensive error handling and validation
- Set up monitoring and logging

---

## 🗓 Roadmap

| Milestone                    | Category              | Target Date | Status     |
| ---------------------------- | --------------------- | ----------- | ---------- |
| Scaffold repo | React Web | 11/10/2025 | ✅ Done |
| Auth + protected routes | React Web | 14/10/2025 | ✅ Done |
| Professional UI + Analytics Dashboard | React Web | 18/10/2025 | ✅ Done |


---

## 📄 License

MIT © Krispy145