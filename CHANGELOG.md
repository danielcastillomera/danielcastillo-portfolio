# Changelog

All notable changes to this project will be documented in this file.

This project adheres to [Semantic Versioning](https://semver.org/).

---

## v4.0.0 — Visual Polish, Brand Icons, Theme Contrast, Mobile UX

### Accessibility Widget
- **New icon** — Replaced generic icon with the official universal accessibility symbol (person with arms open inside circle), matching the ISO/W3C standard.
- Icon renders in blue (`text-blue-600 dark:text-blue-400`) for immediate recognition.

### Theme Contrast Fix
- **Paragraph text** now uses `text-gray-800 dark:text-gray-100` — near-black in light mode, near-white in dark mode. No content "gets lost" on either background.
- **Labels and secondary text** upgraded from `text-gray-400` to `text-gray-500`/`text-gray-600` for readability on white.
- **Footer** — Background changed to `bg-gray-50 dark:bg-navy-950` with `text-gray-700 dark:text-navy-300` for copyright and `text-gray-600 dark:text-navy-400` for license text. Fully legible in both themes.
- **Tech marquee**, **skills percentages**, **education dates**, and all secondary info upgraded for contrast.

### Tech Stack Icons
- **Original brand colors** — Each technology now displays its official brand color (TypeScript blue, React cyan, Node.js green, Git red, etc.) instead of a single monochrome color.
- Dark logos (Next.js, Vercel, GitHub, Prisma) automatically switch to white in dark mode.

### Skills Section
- **Herramientas & Metodologías** icon replaced with wrench-and-hammer SVG (matching 🛠️ emoji).

### Mobile UX
- **Scroll indicator** — Desktop shows mouse scroll widget; mobile (`sm:hidden`) shows a phone with swipe-up gesture animation, matching mobile interaction patterns.

### Dashboard Enterprise
- Project information updated to reflect latest version (auto-fetched from GitHub API at runtime).

### Files Modified
- `src/components/accessibility-widget.tsx` (new icon SVG)
- `src/components/tech-grid.tsx` (brand colors per icon)
- `src/components/hero.tsx` (mobile scroll indicator)
- `src/components/footer.tsx` (contrast fix)
- `src/components/skills.tsx` (tools icon)
- `src/components/about-me.tsx` (text contrast)
- `src/components/contact.tsx` (text contrast)
- `src/components/projects.tsx` (text contrast)
- `src/components/services.tsx` (text contrast)
- `src/components/tech-marquee.tsx` (text contrast)
- `src/lib/data.ts` (brandColor field, project info)
- `package.json` (version 4.0.0)
- `CHANGELOG.md`, `README.md`, `SECURITY.md`, `docs/Home.md`

---

## v3.0.0 — Services, Tech Stack, Auto-Version, Accessibility Overhaul

### New Sections
- **Services section** — Two categories: "Soluciones Digitales (Software y Aplicaciones)" with 10 services (Sistematización, Dashboards, Facturación, Páginas Web, E-Commerce, SaaS, Software a la Medida, PWA, APIs, ERP/CRM) and "Soluciones Técnicas (Infraestructura y TI)" with 5 services (Reparación PC/Laptops, Soporte Técnico, Redes, Respaldo de Datos, Consultoría TI).
- **Tech Grid section** — All technologies displayed as vector icons from cdn.simpleicons.org with name and version. Icons adapt automatically to light/dark theme. Categories: Languages, Frontend, Backend, Database & Cloud, Tools.

### Profile Updates
- **Role** updated: "Junior Full Stack Engineer / Developer"
- **Age** corrected to 21 years
- **Dashboard Enterprise** version updated to v3.1.0
- **Auto-version fetch** — Dashboard Enterprise version is fetched automatically from the GitHub repository's package.json at runtime, ensuring the portfolio always displays the latest version without manual updates.

### Hero Section
- **Availability badge** moved below profile photo with green checkmark icon
- **Badge text** updated: "Disponible para contratación inmediata y para realizar proyectos"
- **CTA button** links to Services section
- **Info pills** now display age and location

### Accessibility (WCAG 2.1/2.2)
- **Floating accessibility widget** (bottom-left) with 5 options: font size (3 levels), high contrast, reduced motion, link highlighting, large cursor
- All preferences persisted in localStorage
- Widget adapts to light/dark theme
- Escape key closes the panel
- ARIA roles, labels, and states throughout

### Social Media Icons
- All social icons (WhatsApp, GitHub, LinkedIn, Instagram, Facebook, Email) use `currentColor` SVG — automatically adapts to light/dark theme
- Icons present in: About Me profile card, Contact section, Footer

### Documentation
- Added `CHANGELOG.md` with full version history
- Added `SECURITY.md` with security policy and measures
- Updated `LICENSE` — proprietary license covering this and all projects by Daniel Fernando Castillo Mera
- Updated `README.md` with complete documentation
- Added `docs/` wiki directory with Home, Architecture, Deployment, and Accessibility guides

### Security
- All HTTP security headers maintained (HSTS, CSP, X-Frame-Options, etc.)
- Image protection (right-click, drag, copy prevention)
- `poweredByHeader: false`

### Files Added
- `src/components/services.tsx`
- `src/components/tech-grid.tsx`
- `CHANGELOG.md`
- `SECURITY.md`
- `docs/Home.md`
- `docs/Architecture.md`
- `docs/Deployment.md`
- `docs/Accessibility.md`

### Files Modified
- `src/lib/data.ts` (role, age, v3.1.0, services data, tech stack with CDN slugs)
- `src/app/layout.tsx` (metadata updated to Junior Full Stack Engineer)
- `src/app/page.tsx` (added Services and TechGrid sections)
- `src/components/hero.tsx` (badge below photo, green checkmark, services CTA)
- `src/components/about-me.tsx` (v3.1.0 reference)
- `src/components/projects.tsx` (auto-version fetch from GitHub API)
- `package.json` (version 3.0.0)
- `LICENSE` (expanded scope)
- `README.md` (complete rewrite)

---

## v1.0.0 — Initial Release

### Features
- **Hero section** with particle animation, profile photo with glow ring, CTA buttons
- **Tech Marquee** — infinite scrolling technology banner
- **About Me** — profile card with photo, social links, education, stats grid
- **Projects** — Dashboard Enterprise v2.5.0 (featured) and Proyecto Unificado POE
- **Skills** — animated progress bars organized by category (Frontend, Backend, DB & Cloud, Tools)
- **Contact** — 6 contact cards (WhatsApp, LinkedIn, GitHub, Instagram, Facebook, Email) with WhatsApp CTA
- **Footer** — copyright, license notice, social links

### Theme System
- Light/Dark/System theme with View Transitions API animation
- System theme respects browser/device preference
- Theme persisted in localStorage
- Inline script prevents flash of wrong theme (FOUC)

### Accessibility (WCAG 2.1/2.2)
- Skip-to-content link
- ARIA roles, labels, and landmarks
- `prefers-reduced-motion` support
- `forced-colors` (high contrast) support
- Focus-visible outlines
- Semantic HTML structure

### Image Protection
- `ProtectedImage` component preventing right-click, drag, copy
- Transparent overlay blocking context menu
- CSS `user-select: none`, `pointer-events: none`, `-webkit-touch-callout: none`

### SEO
- Complete meta tags (Open Graph, Twitter Cards)
- JSON-LD structured data (Person schema)
- Dynamic sitemap
- robots.txt

### Security
- HTTP security headers via next.config.ts (HSTS, CSP, X-Frame-Options, nosniff, XSS-Protection, Referrer-Policy, Permissions-Policy)
- `poweredByHeader: false`

### Cross-Browser Compatibility
- Chrome 80+, Firefox 78+, Safari 14+, Edge 80+
- `X-UA-Compatible: IE=edge`
- Responsive mobile-first design

### Stack
- Next.js 15, React 19, TypeScript, Tailwind CSS 4
- Deployed on Vercel via GitHub

### Files
- 23 source files, 0 junk files
- Proprietary license (Daniel Fernando Castillo Mera)

---

**Daniel Fernando Castillo Mera**
