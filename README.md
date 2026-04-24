<div align="center">

# Daniel Fernando Castillo Mera — Portafolio Web v7.5.5

**Junior Full Stack Engineer / Developer | Community Manager**

[![Version](https://img.shields.io/badge/version-7.5.5-F59E0B?style=for-the-badge)](https://github.com/danielcastillomera/danielcastillo-portfolio/releases)
[![Next.js](https://img.shields.io/badge/Next.js-15-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3-06B6D4?style=for-the-badge&logo=tailwindcss)](https://tailwindcss.com/)
[![Deploy](https://img.shields.io/badge/Deploy-Vercel-black?style=for-the-badge&logo=vercel)](https://danielcastillo-portfolio.vercel.app/)
[![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](LICENSE)

[Ver en producción](https://danielcastillo-portfolio.vercel.app/) · [CHANGELOG](CHANGELOG.md) · [SECURITY](SECURITY.md) · [WIKI](WIKI.md)

</div>

---

## Español (México)

### Descripción

Portafolio web profesional desarrollado con **Next.js 15**, **TypeScript** y **Tailwind CSS**. Diseñado y construido íntegramente por Daniel Fernando Castillo Mera como proyecto de presentación profesional orientado a contratación en el mercado tecnológico ecuatoriano e internacional.

Cuenta con soporte bilingüe (Español / English), sistema de temas claro/oscuro, widget de accesibilidad WCAG 2.1 AA, visor de documentos PDF funcional multi-estrategia, animaciones con respeto a `prefers-reduced-motion`, y despliegue en producción en [Vercel](https://danielcastillo-portfolio.vercel.app/).

### Características principales

- **Bilingüe** — Español e Inglés con toggle en tiempo real, sin recarga de página
- **Tema claro/oscuro** — detección automática del sistema con persistencia en `localStorage`
- **Accesibilidad WCAG 2.1 AA** — widget interactivo: tamaño de fuente, alto contraste, reducción de movimiento, cursor grande, resaltado de enlaces
- **Visor PDF** — multi-estrategia: `object` nativo → `embed` → Google Docs proxy (iOS) → nueva pestaña
- **100% Responsive** — mobile, tablet, laptop, desktop, smartwatch
- **SEO optimizado** — Open Graph, Twitter Card, JSON-LD Schema.org, sitemap automático, robots.txt
- **Seguridad** — CSP, HSTS, X-Frame-Options, X-Content-Type-Options, Referrer-Policy
- **Performance** — Next.js Image optimization, compresión, caché de assets, fonts con `display=swap`
- **Animaciones** — partículas canvas, reveals por scroll, typewriter, respeto a motion preferences

### Secciones

| Sección | ID | Descripción |
|---|---|---|
| Hero | `#inicio` | Presentación con typewriter y partículas |
| Sobre mí | `#sobre-mi` | Bio, estadísticas, educación, idiomas |
| Experiencia | `#experiencia` | Trayectoria laboral en timeline |
| Logros | `#logros` | Resultados destacados en producción |
| Servicios | `#servicios` | Servicios ofrecidos |
| Tecnologías | `#tecnologias` | Stack técnico con niveles |
| Proyectos | `#proyectos` | Proyectos destacados con links |
| Habilidades | `#habilidades` | Skills con barras de progreso |
| Certificaciones | `#certificaciones` | Talleres y certificados con visor PDF |
| Contacto | `#contacto` | Formulario de contacto |

### Stack tecnológico

```
Frontend:  Next.js 15 · React 18 · TypeScript 5 · Tailwind CSS 3
Fuentes:   DM Sans · JetBrains Mono (Google Fonts)
Deploy:    Vercel (Edge Network)
Linting:   ESLint · TypeScript strict mode
```

### Instalación y desarrollo local

```bash
# Clonar repositorio
git clone https://github.com/danielcastillomera/danielcastillo-portfolio.git
cd danielcastillo-portfolio

# Instalar dependencias
npm install

# Ejecutar en desarrollo
npm run dev
# Disponible en: http://localhost:3000

# Build de producción
npm run build
npm start

# Linting
npm run lint
```

### Estructura del proyecto

```
danielcastillo-portfolio/
├── public/
│   ├── certs/          # PDFs de certificados y carta de recomendación
│   ├── icons/          # Iconos SVG y PNG de tecnologías
│   ├── favicon-*.png   # Favicons en múltiples resoluciones
│   ├── favicon.ico
│   ├── og-image.png    # Social Preview 1200x630
│   ├── profile.png     # Foto de perfil 799x1238
│   └── manifest.json   # PWA manifest
├── src/
│   ├── app/
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   ├── page.tsx
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
│   │   ├── icons.tsx
│   │   ├── navbar.tsx
│   │   ├── projects.tsx
│   │   ├── protected-image.tsx
│   │   ├── scroll-buttons.tsx
│   │   ├── services.tsx
│   │   ├── skills.tsx
│   │   ├── tech-grid.tsx
│   │   ├── tech-marquee.tsx
│   │   └── whatsapp-float.tsx
│   └── lib/
│       ├── data.ts
│       ├── i18n.ts
│       ├── i18n-provider.tsx
│       ├── theme-provider.tsx
│       └── use-reveal.ts
├── CHANGELOG.md
├── LICENSE
├── README.md
├── SECURITY.md
├── WIKI.md
├── next.config.ts
├── package.json
└── tailwind.config.ts
```

### Licencia

MIT — Copyright (c) 2024-2026 Daniel Fernando Castillo Mera. Ver [LICENSE](LICENSE).

---

---

## English (United States)

### Description

Professional web portfolio built with **Next.js 15**, **TypeScript**, and **Tailwind CSS**. Fully designed and developed by Daniel Fernando Castillo Mera as a professional presentation project targeting the Ecuadorian and international tech job market.

Features bilingual support (Spanish / English), light/dark theme system, WCAG 2.1 AA accessibility widget, multi-strategy functional PDF viewer, animations respecting `prefers-reduced-motion`, and production deployment on [Vercel](https://danielcastillo-portfolio.vercel.app/).

### Key Features

- **Bilingual** — Spanish and English with real-time toggle, no page reload
- **Light/Dark theme** — automatic system detection with `localStorage` persistence
- **WCAG 2.1 AA Accessibility** — font size, high contrast, reduced motion, large cursor, link highlighting
- **PDF Viewer** — multi-strategy: native `object` → `embed` → Google Docs proxy (iOS) → new tab
- **100% Responsive** — mobile, tablet, laptop, desktop, smartwatch
- **SEO optimized** — Open Graph, Twitter Card, JSON-LD Schema.org, auto sitemap, robots.txt
- **Security** — CSP, HSTS, X-Frame-Options, X-Content-Type-Options, Referrer-Policy

### Local Development

```bash
git clone https://github.com/danielcastillomera/danielcastillo-portfolio.git
cd danielcastillo-portfolio
npm install
npm run dev   # http://localhost:3000
npm run build
```

### License

MIT — Copyright (c) 2024-2026 Daniel Fernando Castillo Mera. See [LICENSE](LICENSE).
