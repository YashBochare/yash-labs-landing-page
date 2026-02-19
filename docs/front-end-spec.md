# Yash Labs UI/UX Specification

**Project Name:** Yash Labs Landing Page  
**Status:** Approved  
**Version:** 1.0  
**Author:** BMad UX Expert (Sally)

---

## 1. Introduction & UX Goals

### Overall UX Vision
The Yash Labs experience is defined as **"Intelligent Immersivity."** The goal is to create a digital environment that feels like a high-end command interface—dark, deep, and highly responsive. We use glassmorphism and intentional motion to guide the user from initial curiosity to high-intent contact.

### Core Design Principles
1.  **Visual Depth:** Use of `backdrop-blur` and varying border opacities to create a layered 3D feel.
2.  **Narrative Motion:** Animations are sequential and rhythmic, designed to "resolve" the page as the user explores.
3.  **High-Fidelity Feedback:** Every interactive element (Buttons, Cards, Links) must provide immediate, smooth visual feedback.

| Date | Version | Description | Author |
| :--- | :--- | :--- | :--- |
| 2023-10-27 | 1.0 | Initial UI/UX Spec for Yash Labs | Sally (UX Expert) |

---

## 2. Visual Identity & Design System

### Color Palette
*   **Background:** `#0f0f14` (Deep Space Dark)
*   **Primary Gradient:** `from-indigo-500 via-purple-500 to-cyan-500` (Indigo → Purple → Cyan)
*   **Surface (Glass):** `bg-white/5` (5% opacity white)
*   **Border (Glass):** `border-white/10` (10% opacity white)
*   **Text (Primary):** `text-white` (Headings)
*   **Text (Secondary):** `text-gray-400` (Body/Descriptions)

### Typography
*   **Font Family:** **Space Grotesk** (tracking-tight)
*   **Hero Heading:** `text-6xl font-bold leading-[1.1]`
*   **Section Heading:** `text-4xl font-semibold`
*   **Body Text:** `text-lg font-medium`

### Layout Utilities
*   **Max Width:** `max-w-7xl mx-auto px-6`
*   **Section Spacing:** `py-24` (96px)
*   **Corner Radius:** `rounded-2xl` (16px)

---

## 3. Motion Identity (Framer Motion)

### Global Animation Values
*   **Duration:** `0.6s`
*   **Easing:** `[0.22, 1, 0.36, 1]` (Custom easeOut)
*   **Stagger:** `0.1s` between child elements.

### Specific Reveal Sequences
1.  **Navbar:** Fade and slide down (`y: -20` to `y: 0`) on mount.
2.  **Hero Title:** Staggered reveal per word or line (Fade up).
3.  **Service Cards:** `whileInView` staggered reveal. On hover, card scales to `1.05` with a subtle indigo glow behind it.
4.  **Stats Counter:** Linear increment over `2.0s` triggered by `whileInView`.

---

## 4. Key Screen Layouts

### A. Nexus Navbar
*   **Structure:** Fixed top, `flex justify-between items-center`.
*   **Interaction:** Transparent at top. When `window.scrollY > 50`, apply `bg-[#0f0f14]/80 backdrop-blur-md border-b border-white/10`.
*   **Mobile:** Right-aligned hamburger menu triggering a full-screen or slide-in glassmorphism overlay.

### B. Inception Hero
*   **Layout:** 2-column grid (`lg:grid-cols-2`).
*   **Text Side:** Heading uses a `bg-gradient-to-b from-white to-gray-500` for a metallic shine effect.
*   **Image Side:** Floating abstract dashboard. Use CSS `animate-pulse` at low opacity on background blurs to simulate "life."

### C. Logic Services Grid
*   **Layout:** 3-column grid (`md:grid-cols-2 lg:grid-cols-3`).
*   **Card Design:** Glassmorphism base. Hover state triggers a `border-indigo-500/50` color shift and a radial-gradient "flashlight" follow effect if possible.

### D. Contact Form
*   **Style:** Minimalist centered form.
*   **Inputs:** `bg-transparent border-white/10 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all`.
*   **CTA:** Full-width gradient button. On hover, apply `shadow-[0_0_20px_rgba(99,102,241,0.5)]`.

---

## 5. Master AI Frontend Prompt (v0 / Lovable / Bolt)

> Build a high-end, premium landing page for "Yash Labs", an AI-powered SaaS automation agency. The design must be futuristic, dark, and utilize a "Glassmorphism" aesthetic with high-quality Framer Motion animations.
> 
> **Tech Stack & Constraints:**
> - Framework: Next.js (App Router), Tailwind CSS, Framer Motion, Lucide React.
> - Font: 'Space Grotesk' (Google Fonts).
> - Color Palette: Background #0f0f14, Primary Gradient (Indigo-500 -> Purple-500 -> Cyan-500).
> - Components: Use bg-white/5, backdrop-blur-md, and border-white/10 for all cards/inputs.
> 
> **Structure:**
> 1. Navbar: Fixed top, blur on scroll, gradient "Get Started" button.
> 2. Hero: 2-column grid. Staggered fade-up text on left, futuristic abstract floating UI on right.
> 3. Services: 3-column glass grid. Hover scale 1.05 + subtle glow.
> 4. Stats: Count-up animation for "150+ Projects" and "99.9% Uptime."
> 5. Contact: Glassmorphism form with indigo-glow submit button.
> 6. Animations: 0.6s duration, easeOut easing, scroll-triggered reveals.

