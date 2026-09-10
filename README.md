<div align="center">

# Daniel Fernando Castillo Mera — Portafolio Web v9.1.1

**Full Stack Software Engineer | AI-Assisted Developer**

[![Version](https://img.shields.io/badge/version-9.1.1-F59E0B?style=for-the-badge)](https://github.com/danielcastillomera/danielcastillo-portfolio/releases)
[![Next.js](https://img.shields.io/badge/Next.js-15-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3-06B6D4?style=for-the-badge&logo=tailwindcss)](https://tailwindcss.com/)
[![GSAP](https://img.shields.io/badge/GSAP-Animations-88CE02?style=for-the-badge&logo=greensock)](https://gsap.com/)
[![Deploy](https://img.shields.io/badge/Deploy-Vercel-black?style=for-the-badge&logo=vercel)](https://danielcastillo-portfolio.vercel.app/)

[Ver en producción](https://danielcastillo-portfolio.vercel.app/) · [CHANGELOG](CHANGELOG.md) · [SECURITY](SECURITY.md) · [WIKI](WIKI.md)

</div>

<div align="center">
  <i>Cambiar de idioma / Change language:</i> <a href="#español-méxico">Español (México)</a> | <a href="#english-united-states">English (United States)</a>
</div>

---

## Español (México)

### Descripción

Portafolio web profesional de nivel Enterprise desarrollado con **Next.js 15**, **TypeScript**, **Tailwind CSS** y animaciones fluidas con **GSAP + Lenis**. Diseñado y construido íntegramente como proyecto de presentación profesional orientado a posiciones de Ingeniería de Software e Integración de IA. Cuenta con soporte bilingüe, sistema de temas claro/oscuro, generación dinámica de Open Graph (OG Image) y despliegue continuo en [Vercel](https://danielcastillo-portfolio.vercel.app/).

### Características principales

- **Experiencia Inmersiva** — Smooth scrolling global (Lenis) y animaciones bidireccionales al hacer scroll (GSAP ScrollTrigger).
- **Bilingüe** — Español e Inglés con toggle en tiempo real, sin recarga de página.
- **Accesibilidad y SEO** — Widget interactivo WCAG 2.1 AA, `opengraph-image.tsx` dinámico, JSON-LD Schema.org y sitemap automático.
- **Seguridad** — CSP, HSTS y prevención de scraping web (CSS `user-select: none` y ofuscación estructural).

### Estructura de Secciones

| Sección | Componente | Descripción |
|---|---|---|
| **Inicio** | `hero.tsx` | Presentación con efecto typewriter, fondo animado y medallas de certificaciones. |
| **Sobre mí** | `about-me.tsx` | Biografía técnica, educación (Universidad de Guayaquil) y stack principal. |
| **Logros** | `achievements.tsx` | Resultados en producción con animaciones de conteo (GSAP CountUp). |
| **Tecnologías** | `tech-grid.tsx` | Stack técnico organizado en lenguajes, frontend, backend y cloud. |
| **Servicios** | `services.tsx` | Soluciones digitales e infraestructura técnica ofrecidas. |
| **Proyectos** | `projects.tsx` | Dashboard Enterprise, APIs REST, con enlaces a repositorios y despliegues. |
| **Experiencia** | `experience.tsx` | Trayectoria laboral estructurada en timeline. |
| **Certificaciones**| `certifications.tsx` | Credenciales oficiales (Anthropic, Scrum, Microsoft, AWS, HarvardX). |
| **Contacto** | `contact.tsx` | Enlaces a LinkedIn, GitHub, Email y WhatsApp directo. |

<details open>
<summary><strong>📁 Ver Estructura del Proyecto (Árbol de Directorios)</strong></summary>

```text
danielcastillo-portfolio/
├── public/
│   ├── images/         # Logos de certificaciones y UX
│   ├── icons/          # Iconos SVG para stack tecnológico
│   ├── favicon.ico     # Favicons
│   ├── profile.png     # Foto de perfil optimizada
│   └── manifest.json   # PWA manifest
├── src/
│   ├── app/
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   ├── opengraph-image.tsx # Generación dinámica de OG Image
│   │   └── sitemap.ts
│   ├── components/
│   │   ├── accessibility-widget.tsx
│   │   ├── about-me.tsx
│   │   ├── achievements.tsx
│   │   ├── certifications.tsx
│   │   ├── contact.tsx
│   │   ├── experience.tsx
│   │   ├── footer.tsx
│   │   ├── hero.tsx
│   │   ├── navbar.tsx          # Menú acordeón responsivo
│   │   ├── projects.tsx
│   │   ├── tech-grid.tsx
│   │   ├── tech-marquee.tsx
│   │   └── whatsapp-float.tsx
│   └── lib/
│       ├── data.ts             # Base de datos centralizada
│       ├── i18n.ts
│       ├── smooth-scroll.tsx   # Lenis Provider
│       └── use-reveal.ts       # GSAP ScrollTrigger Hook
├── CHANGELOG.md
├── README.md
└── package.json
```
</details>

### Instalación local

```bash
# 1. Clonar repositorio
git clone [https://github.com/danielcastillomera/danielcastillo-portfolio.git](https://github.com/danielcastillomera/danielcastillo-portfolio.git)
cd danielcastillo-portfolio

# 2. Instalar dependencias
npm install

# 3. Ejecutar en entorno de desarrollo
npm run dev
# Disponible en: http://localhost:3000
```

### Licencia

MIT - Copyright (c) 2023-2026 Daniel Fernando Castillo Mera. Ver [LICENSE](LICENSE).

---

## English (United States)

### Description

Enterprise-level professional web portfolio built with **Next.js 15**, **TypeScript**, **Tailwind CSS**, and fluid animations using **GSAP + Lenis**. Fully designed and developed as a professional showcase targeting Software Engineering and AI Integration roles. It features bilingual support, a light/dark theme system, dynamic Open Graph image generation, and continuous deployment on [Vercel](https://danielcastillo-portfolio.vercel.app/).

### Key Features

- **Immersive UX** — Global smooth scrolling (Lenis) and bidirectional scroll animations (GSAP ScrollTrigger).
- **Bilingual** — Spanish and English with real-time toggle, no page reload required.
- **Accessibility & SEO** — WCAG 2.1 AA interactive widget, dynamic `opengraph-image.tsx`, JSON-LD Schema.org, and auto sitemap.
- **Security** — CSP, HSTS, and web scraping prevention (CSS `user-select: none` and structural obfuscation).

### Section Structure

| Section | Component | Description |
|---|---|---|
| **Hero** | `hero.tsx` | Introduction with typewriter effect, animated background, and cert badges. |
| **About me** | `about-me.tsx` | Technical bio, education, and core stack. |
| **Achievements**| `achievements.tsx` | Production results with counting animations (GSAP CountUp). |
| **Technologies**| `tech-grid.tsx` | Tech stack organized by languages, frontend, backend, and cloud. |
| **Services** | `services.tsx` | Digital solutions and technical infrastructure offered. |
| **Projects** | `projects.tsx` | Dashboard Enterprise, REST APIs, with repository and live links. |
| **Experience** | `experience.tsx` | Work history structured in a timeline. |
| **Certifications**| `certifications.tsx` | Official credentials (Anthropic, Scrum, Microsoft, AWS, HarvardX). |
| **Contact** | `contact.tsx` | Links to LinkedIn, GitHub, Email, and direct WhatsApp. |

<details open>
<summary><strong>📁 View Project Structure (Directory Tree)</strong></summary>

```text
danielcastillo-portfolio/
├── public/
│   ├── images/         # Certification logos and UX assets
│   ├── icons/          # SVG icons for tech stack
│   ├── favicon.ico     # Favicons
│   ├── profile.png     # Optimized profile photo
│   └── manifest.json   # PWA manifest
├── src/
│   ├── app/
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   ├── opengraph-image.tsx # Dynamic OG Image generation
│   │   └── sitemap.ts
│   ├── components/
│   │   ├── accessibility-widget.tsx
│   │   ├── about-me.tsx
│   │   ├── achievements.tsx
│   │   ├── certifications.tsx
│   │   ├── contact.tsx
│   │   ├── experience.tsx
│   │   ├── footer.tsx
│   │   ├── hero.tsx
│   │   ├── navbar.tsx          # Responsive accordion menu
│   │   ├── projects.tsx
│   │   ├── tech-grid.tsx
│   │   ├── tech-marquee.tsx
│   │   └── whatsapp-float.tsx
│   └── lib/
│       ├── data.ts             # Centralized database
│       ├── i18n.ts
│       ├── smooth-scroll.tsx   # Lenis Provider
│       └── use-reveal.ts       # GSAP ScrollTrigger Hook
├── CHANGELOG.md
├── README.md
└── package.json
```
</details>

### Local Installation

```bash
# 1. Clone repository
git clone [https://github.com/danielcastillomera/danielcastillo-portfolio.git](https://github.com/danielcastillomera/danielcastillo-portfolio.git)
cd danielcastillo-portfolio

# 2. Install dependencies
npm install

# 3. Run development server
npm run dev
# Available at: http://localhost:3000
```

### License

MIT - Copyright (c) 2023-2026 Daniel Fernando Castillo Mera. See [LICENSE](LICENSE).