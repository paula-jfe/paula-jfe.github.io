# Jessica Ladislau · Design Engineer Portfolio

Personal portfolio at **https://paula-jfe.github.io/**, designed in Figma and built with **React 19, TypeScript and Tailwind CSS**.

## Highlights

-   **Design tokens from Figma**: colors, font sizes and radii mirror the Figma variables (`tailwind.config.js` + `src/index.css`). Font sizes switch per breakpoint (Mobile < 768px, Tablet ≥ 768px, Desktop ≥ 1280px).
-   **Responsive** desktop, tablet and mobile layouts, including an accessible mobile menu.
-   **Accessible (WCAG 2.2 AA)**: skip link, landmarks, one `h1` per page, visible focus rings, `aria-current` on the active section, reduced-motion support, 48px touch targets, contrast-checked colors (audited with axe-core).
-   **Contact form edge cases**: inline validation (on blur and submit), error summary, character limit, sending state that blocks double submits, server error, offline, rate limit (HTTP 429), honeypot anti-spam and an announced success state. Messages go through [Formspree](https://formspree.io).
-   **Case study route** (`/work/brightfield-solar`) with GitHub Pages–friendly routing (static entry + `404.html` fallback).
-   **Self-hosted fonts** (Fontsource): no third-party font requests.

## Tech stack

-   React 19 + React Router 7 + TypeScript
-   Tailwind CSS 3 (PostCSS) · Webpack 5 · Babel
-   Jest + React Testing Library (coverage threshold 80%)
-   GitHub Actions → GitHub Pages

## Getting started

```bash
git clone https://github.com/paula-jfe/paula-jfe.github.io.git
cd paula-jfe.github.io
npm install
npm start          # dev server on http://localhost:3000
npm test           # unit tests with coverage
npm run build:prod # production build in dist/
```

## Project structure

```
src/
  components/
    layout/    Header, Footer, SectionLink
    sections/  Hero, TechMarquee, Experience, About, SelectedWorks, Process, Testimonials, Contact, ContactForm
    ui/        Button, FormField, Icon, ProjectCard, SectionHeader, StatusBadge
  data/        content.ts (all copy, projects, skills and testimonials)
  hooks/       useActiveSection
  pages/       Home, CaseBrightfield, NotFound
  services/    api.ts (Formspree)
```

## Deployment

Pushing to `main` runs the tests, builds the production bundle and publishes `dist/` to GitHub Pages (`.github/workflows/deploy.yml`).
