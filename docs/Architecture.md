# Arquitectura / Architecture — v6.0.0

---

## Español (México)

### Stack Tecnológico

| Capa | Tecnología | Versión |
|------|-----------|---------|
| Framework | Next.js | 15.x |
| UI Library | React | 19.x |
| Lenguaje | TypeScript | 5.9 |
| Estilos | Tailwind CSS | 4.x |
| Iconos | Devicon CDN + activos locales | — |
| Deployment | Vercel | — |

### Estructura de Archivos

```
src/
├── app/
│   ├── globals.css          # Design system, temas, animaciones, protección de imágenes
│   ├── layout.tsx           # Root layout, SEO, JSON-LD, favicon, OG image
│   ├── page.tsx             # Composición de secciones
│   ├── not-found.tsx        # Página 404 bilingüe
│   └── sitemap.ts           # Sitemap dinámico
├── components/
│   ├── navbar.tsx           # Navegación + LanguageToggle (visible en móvil)
│   ├── hero.tsx             # Typewriter + partículas animadas
│   ├── about-me.tsx         # Bio + Community Manager + UI/UX + Ventas
│   ├── services.tsx         # 15 servicios bilingüe
│   ├── tech-grid.tsx        # Logos oficiales (Zod, Meta, TikTok, Overleaf)
│   ├── projects.tsx         # Proyectos con version badge responsive
│   ├── skills.tsx           # 6 categorías + exploratorio con logos
│   ├── certifications.tsx   # Certificados sin duplicados
│   ├── contact.tsx          # 6 canales de contacto
│   ├── footer.tsx           # Compliance badges
│   ├── cookie-consent.tsx   # GDPR: botón X + responsive
│   ├── language-toggle.tsx  # Dropdown hover + visible en móvil
│   ├── scroll-buttons.tsx   # Solo icono + tooltip
│   ├── accessibility-widget.tsx
│   ├── whatsapp-float.tsx
│   ├── protected-image.tsx
│   ├── theme-toggle.tsx
│   └── icons.tsx
└── lib/
    ├── data.ts              # Datos + ADDITIONAL_SKILLS (Ventas/Atención)
    ├── i18n.ts              # Traducciones ES/EN
    ├── i18n-provider.tsx    # React context
    ├── theme-provider.tsx
    └── use-reveal.ts
public/
├── profile.png              # Foto de perfil
├── og-image.png             # 1200×630 para WhatsApp/Telegram
├── favicon.ico              # Favicon principal
├── favicon-16.png           # 16×16
├── favicon-32.png           # 32×32
├── favicon-180.png          # Apple Touch Icon
├── favicon-192.png          # PWA Android
├── favicon-512.png          # PWA
├── manifest.json            # PWA manifest
├── robots.txt
└── icons/
    ├── zod.png              # Logo oficial Zod
    ├── meta.svg             # Logo oficial Meta Platforms
    ├── tiktok.png           # Logo oficial TikTok
    └── overleaf.svg         # Logo oficial Overleaf
```

### Vista previa social (OG / WhatsApp)

Al compartir la URL, plataformas como WhatsApp, Telegram y LinkedIn obtienen:
1. `og:image` → `/public/og-image.png` (1200×630 px)
2. `og:title` → Nombre + rol
3. `og:description` → Descripción profesional
4. `metadataBase` → `https://danielcastillo-portfolio.vercel.app`

---

## English (United States)

### Social Preview (OG / WhatsApp)

When sharing the URL, platforms like WhatsApp, Telegram and LinkedIn will fetch:
1. `og:image` → `/public/og-image.png` (1200×630 px)
2. `og:title` → Name + role
3. `og:description` → Professional description
4. `metadataBase` → `https://danielcastillo-portfolio.vercel.app`

**Daniel Fernando Castillo Mera** · All rights reserved.
