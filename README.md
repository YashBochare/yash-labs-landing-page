# Yash Labs — AI-Powered SaaS Automation Agency

A modern, premium landing page for **Yash Labs**, an AI-powered SaaS development and automation agency. Built with **Next.js 16**, **React 19**, **Tailwind CSS 4**, and **Framer Motion**, the site delivers a polished, high-conversion experience with smooth animations and a fully responsive design.

---

## ✨ Features

- **Hero Section** — Bold headline with animated call-to-action and gradient accents
- **Services** — Showcase of AI & SaaS automation capabilities
- **Work / Portfolio** — Highlights of past projects and case studies
- **About** — Company mission and team overview
- **Contact Form** — Validated contact form with Zod schemas and React Hook Form
- **Responsive Navbar** — Sticky navigation with smooth scroll links
- **Footer** — Social links, quick navigation, and branding
- **Micro-Animations** — Page transitions and scroll-triggered animations via Framer Motion
- **Premium Design System** — Custom design tokens, Space Grotesk typography, and utility helpers (`clsx` + `tailwind-merge`)

---

## 🛠 Tech Stack

| Layer        | Technology                                  |
| ------------ | ------------------------------------------- |
| Framework    | [Next.js 16](https://nextjs.org/) (App Router) |
| UI Library   | [React 19](https://react.dev/)              |
| Styling      | [Tailwind CSS 4](https://tailwindcss.com/)  |
| Animations   | [Framer Motion](https://www.framer.com/motion/) |
| Forms        | [React Hook Form](https://react-hook-form.com/) + [Zod](https://zod.dev/) |
| Icons        | [Lucide React](https://lucide.dev/)         |
| Language     | TypeScript 5                                |

---

## 📁 Project Structure

```
src/
├── app/                  # Next.js App Router pages & layout
│   ├── design-system/    # Design system preview page
│   ├── layout.tsx        # Root layout (fonts, metadata)
│   ├── page.tsx          # Home page — assembles all sections
│   └── globals.css       # Global styles & Tailwind directives
├── components/
│   ├── sections/         # Page sections (Navbar, Hero, Services, Work, About, Contact, Footer)
│   ├── shared/           # Shared / reusable components
│   └── ui/               # Base UI primitives
├── constants/            # App-wide constants & config
├── lib/                  # Utility functions & helpers
└── types/                # TypeScript type definitions
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** ≥ 18
- **npm** (or your preferred package manager)

### Installation

```bash
# Clone the repository
git clone https://github.com/YashBochare/yash-labs-landing-page.git
cd yash-labs-landing-page

# Install dependencies
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

```bash
npm run build
npm run start
```

---

## 📜 Available Scripts

| Command          | Description                        |
| ---------------- | ---------------------------------- |
| `npm run dev`    | Start the development server       |
| `npm run build`  | Create an optimized production build |
| `npm run start`  | Serve the production build         |
| `npm run lint`   | Run ESLint checks                  |

---

## 📄 License

This project is private and proprietary.
