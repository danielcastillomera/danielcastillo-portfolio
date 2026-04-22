# Daniel Fernando Castillo Mera — Portfolio v7.5.0

---

## Español (México)

Portafolio profesional y página de servicios.
**Junior Full Stack Engineer / Developer | Community Manager** · Universidad de Guayaquil · Ingeniería en Software.

🌐 [danielcastillo-portfolio.vercel.app](https://danielcastillo-portfolio.vercel.app)

### Stack Tecnológico

| Capa | Tecnología |
|------|-----------|
| Framework | Next.js 15, React 19 |
| Lenguaje | TypeScript 5.9 |
| Estilos | Tailwind CSS 4 |
| Deployment | Vercel + GitHub |
| Fuentes | Google Fonts (DM Sans, JetBrains Mono) |
| Iconos | Devicon CDN, activos locales (`/public/icons/`) |

### Características v7.5.0

| Característica | Estado |
|----------------|--------|
| i18n ES / EN (auto-detección) | ✅ |
| Typewriter Effect (7 frases) | ✅ |
| Foto perfil proporción 35×45 mm (estándar CV) | ✅ |
| Favicon desde foto de perfil (circular, sin borde) | ✅ |
| OG Image 1200×630 (WhatsApp/Telegram/LinkedIn) | ✅ |
| Visor PDF protegido (zoom in/out, sin descarga) | ✅ |
| Sección Experiencia Laboral (3 posiciones del CV) | ✅ |
| Certificados completos con país/ciudad/horas | ✅ |
| Cookie Consent GDPR | ✅ |
| 100% Responsive (mobile-first) | ✅ |
| WCAG 2.2 Nivel A–AAA | ✅ |
| Sistema de colores semántico (CSS Custom Properties) | ✅ |
| SEO / Open Graph / JSON-LD | ✅ |
| CSP / HSTS / X-Frame-Options | ✅ |
| Ícono accesibilidad SVG (figura blanca, sin pixelado) | ✅ |
| Primera persona — concordancia total con CV 2026 | ✅ |

### Instalación

```bash
git clone https://github.com/danielcastillomera/danielcastillo-portfolio.git
cd danielcastillo-portfolio
npm install
npm run dev
```

### Scripts

```bash
npm run dev        # Desarrollo con Turbopack
npm run build      # Build de producción
npm run start      # Servidor de producción
npm run lint       # ESLint
npm run type-check # TypeScript check
```

### Estructura del Proyecto

```
src/
├── app/
│   ├── globals.css          # Design tokens, colores semánticos, animaciones
│   ├── layout.tsx           # Root layout, SEO, JSON-LD, favicon, OG
│   ├── page.tsx             # Composición de secciones
│   ├── not-found.tsx        # Página 404 bilingüe
│   └── sitemap.ts           # Sitemap dinámico
├── components/
│   ├── navbar.tsx           # Navegación + nombre siempre visible
│   ├── hero.tsx             # Typewriter + partículas animadas
│   ├── about-me.tsx         # Bio CV + proporción foto 35:45
│   ├── experience.tsx       # ★ NUEVO — Experiencia laboral (3 posiciones)
│   ├── services.tsx         # Servicios bilingüe
│   ├── tech-grid.tsx        # Logos oficiales de tecnologías
│   ├── projects.tsx         # Proyectos + fix título móvil
│   ├── skills.tsx           # Habilidades + exploratorio
│   ├── certifications.tsx   # ★ Rediseñado — sin iconos, visor PDF
│   ├── contact.tsx          # 6 canales de contacto
│   ├── footer.tsx           # Compliance badges
│   ├── accessibility-widget.tsx # Ícono SVG blanco, textos corregidos
│   └── ...
└── lib/
    ├── data.ts              # Fuente única de verdad — concordante con CV
    ├── i18n.ts              # Traducciones ES/EN
    ├── i18n-provider.tsx    # React context
    ├── theme-provider.tsx   # Tema claro/oscuro/sistema
    └── use-reveal.ts        # Intersection Observer
public/
├── profile.png              # Foto de perfil (proporción 35:45 mm)
├── og-image.png             # 1200×630 para WhatsApp/Telegram/LinkedIn
├── favicon.ico + favicon-*.png
├── manifest.json            # PWA manifest
├── robots.txt
├── certs/                   # PDFs de certificados (solo lectura)
│   ├── cs50x.pdf
│   ├── uees-talks.pdf
│   ├── taller-pc.pdf
│   ├── biorobotics.pdf
│   └── carta-recomendacion.pdf
└── icons/
    ├── accessibility.svg    # ★ SVG — figura blanca sobre ámbar
    ├── zod.png              # ★ Sin fondo negro
    ├── meta.svg
    ├── overleaf.svg
    └── tiktok.svg
```

### Licencia

**Propiedad intelectual de Daniel Fernando Castillo Mera.**

Queda estrictamente prohibida la clonación, copia, distribución o uso no autorizado de este proyecto sin previo permiso escrito. Ver [LICENSE](./LICENSE) para los términos completos.

### Autor

**Daniel Fernando Castillo Mera**
- 🌐 [danielcastillo-portfolio.vercel.app](https://danielcastillo-portfolio.vercel.app)
- 💼 [LinkedIn](https://www.linkedin.com/in/daniel-fernando-castillo-mera-461b8420a)
- 🐙 [GitHub @danielcastillomera](https://github.com/danielcastillomera)
- 📱 [WhatsApp +593 98 107 6185](https://api.whatsapp.com/send?phone=593981076185&text=Hola%20Daniel%20%F0%9F%91%8B)
- 📧 danielfcastillom@gmail.com

---

## English (United States)

Professional portfolio and services page.
**Junior Full Stack Engineer / Developer | Community Manager** · University of Guayaquil · Software Engineering.

🌐 [danielcastillo-portfolio.vercel.app](https://danielcastillo-portfolio.vercel.app)

### Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 15, React 19 |
| Language | TypeScript 5.9 |
| Styles | Tailwind CSS 4 |
| Deployment | Vercel + GitHub |
| Fonts | Google Fonts (DM Sans, JetBrains Mono) |
| Icons | Devicon CDN, local assets (`/public/icons/`) |

### v7.5.0 Features

| Feature | Status |
|---------|--------|
| i18n ES / EN (auto-detection) | ✅ |
| Typewriter Effect (7 phrases) | ✅ |
| Profile photo 35×45 mm ratio (CV standard) | ✅ |
| Favicon from profile photo (circular, no border) | ✅ |
| OG Image 1200×630 (WhatsApp/Telegram/LinkedIn) | ✅ |
| Protected PDF viewer (zoom in/out, no download) | ✅ |
| Work Experience section (3 positions from CV) | ✅ |
| Full certificates with country/city/hours | ✅ |
| GDPR Cookie Consent | ✅ |
| 100% Responsive (mobile-first) | ✅ |
| WCAG 2.2 Level A–AAA | ✅ |
| Semantic color system (CSS Custom Properties) | ✅ |
| SEO / Open Graph / JSON-LD | ✅ |
| CSP / HSTS / X-Frame-Options | ✅ |
| SVG accessibility icon (white figure, no pixelation) | ✅ |
| First person — full alignment with CV 2026 | ✅ |

### Installation

```bash
git clone https://github.com/danielcastillomera/danielcastillo-portfolio.git
cd danielcastillo-portfolio
npm install
npm run dev
```

### License

**Intellectual property of Daniel Fernando Castillo Mera.**

Cloning, copying, distribution or unauthorized use of this project is strictly prohibited without prior written permission. See [LICENSE](./LICENSE) for complete terms.

### Author

**Daniel Fernando Castillo Mera**
- 🌐 [danielcastillo-portfolio.vercel.app](https://danielcastillo-portfolio.vercel.app)
- 💼 [LinkedIn](https://www.linkedin.com/in/daniel-fernando-castillo-mera-461b8420a)
- 🐙 [GitHub @danielcastillomera](https://github.com/danielcastillomera)
- 📱 [WhatsApp +593 98 107 6185](https://api.whatsapp.com/send?phone=593981076185&text=Hola%20Daniel%20%F0%9F%91%8B)
- 📧 danielfcastillom@gmail.com
