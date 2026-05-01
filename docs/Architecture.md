# Arquitectura del Proyecto / Project Architecture

> `danielcastillo-portfolio` v7.6.7

---

## Español (México)

### Stack tecnológico

| Capa | Tecnología | Versión |
|------|-----------|---------|
| Framework | Next.js (App Router) | 15.x |
| Lenguaje | TypeScript | 5.9.x strict |
| Estilos | Tailwind CSS | 4.x + PostCSS |
| Íconos | Lucide React | 0.574.x |
| Fuentes | DM Sans + JetBrains Mono | Google Fonts |
| Deploy | Vercel | Edge Network |
| Linting | ESLint + eslint-config-next | 9.x / 15.x |

### Estructura de directorios

```
danielcastillo-portfolio/
├── docs/                    # Wiki del proyecto (GFM)
│   ├── Home.md
│   ├── Architecture.md
│   ├── Accessibility.md
│   ├── Deployment.md
│   └── I18n.md
├── public/
│   ├── certs/               # PDFs de certificados y carta de recomendación
│   ├── icons/               # Iconos SVG y PNG de tecnologías
│   ├── favicon-*.png        # Favicons en múltiples resoluciones
│   ├── favicon.ico
│   ├── og-image.png         # Social Preview 1200×630 px
│   ├── profile.png          # Foto de perfil 799×1238 px
│   └── manifest.json        # PWA manifest
├── src/
│   ├── app/
│   │   ├── globals.css      # Estilos globales y variables CSS
│   │   ├── layout.tsx       # Root layout con metadata SEO completa
│   │   ├── page.tsx         # Página principal — composición de secciones
│   │   └── sitemap.ts       # Sitemap automático
│   ├── components/
│   │   ├── accessibility-widget.tsx
│   │   ├── about-me.tsx
│   │   ├── achievements.tsx
│   │   ├── certifications.tsx
│   │   ├── contact.tsx
│   │   ├── cookie-consent.tsx
│   │   ├── experience.tsx
│   │   ├── footer.tsx
│   │   ├── hero.tsx
│   │   ├── icons.tsx
│   │   ├── language-toggle.tsx
│   │   ├── navbar.tsx
│   │   ├── projects.tsx
│   │   ├── protected-image.tsx
│   │   ├── scroll-buttons.tsx
│   │   ├── services.tsx
│   │   ├── skills.tsx
│   │   ├── tech-grid.tsx
│   │   ├── tech-marquee.tsx
│   │   ├── theme-toggle.tsx
│   │   └── whatsapp-float.tsx
│   └── lib/
│       ├── data.ts           # Single Source of Truth v7.6.7
│       ├── i18n.ts           # Traducciones ES/EN estáticas
│       ├── i18n-provider.tsx # Context provider para i18n
│       ├── theme-provider.tsx
│       └── use-reveal.ts     # Hook de animación por scroll
├── CHANGELOG.md
├── LICENSE
├── README.md
├── SECURITY.md
├── next.config.ts
├── package.json
└── tailwind.config.ts
```

### Principios de diseño

- **Single Source of Truth:** toda la información del portafolio vive en `src/lib/data.ts`.
- **SSG + CSR híbrido:** Next.js App Router genera el HTML estático en build y el cliente hidrata las interacciones.
- **Sin base de datos:** portafolio completamente estático, sin backend propio.
- **Sin imágenes en Experiencia/Proyectos/Certificaciones:** decisión deliberada de diseño limpio.
- **Protección de imágenes:** `user-select: none` + `pointer-events: none` solo en `img` y `.protected-image`. El texto es completamente seleccionable (cumplimiento WCAG 1.3.4).
- **Visor PDF multi-estrategia:** iOS Safari → Google Docs proxy; Android/Desktop → `<object>` mismo origen (sin diálogo de confirmación).

### Flujo de datos

```
data.ts (SSoT)
    └─→ Componentes React (consumen constantes tipadas)
         └─→ i18n-provider (useT hook → traducciones ES/EN)
              └─→ ThemeProvider (clase .dark en <html>)
```

---

---

## English (United States)

### Tech Stack

| Layer | Technology | Version |
|-------|-----------|---------|
| Framework | Next.js (App Router) | 15.x |
| Language | TypeScript | 5.x strict |
| Styles | Tailwind CSS | 3.x |
| Fonts | DM Sans + JetBrains Mono | Google Fonts |
| Deploy | Vercel | Edge Network |
| Linting | ESLint + TypeScript strict | — |

### Design Principles

- **Single Source of Truth:** all portfolio content lives in `src/lib/data.ts`.
- **SSG + hybrid CSR:** Next.js App Router generates static HTML at build time; client hydrates interactions.
- **No database:** fully static portfolio, no own backend.
- **No images in Experience/Projects/Certifications:** deliberate clean design decision.
- **Image protection:** `user-select: none` + `pointer-events: none` only on `img` and `.protected-image`. Text is fully selectable (WCAG 1.3.4 compliance).
- **Multi-strategy PDF viewer:** iOS Safari → Google Docs proxy; Android/Desktop → `<object>` same-origin (no confirmation dialog).
