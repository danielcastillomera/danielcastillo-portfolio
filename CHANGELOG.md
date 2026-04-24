# Registro de Cambios / Changelog

> Todos los cambios notables de este proyecto se documentan en este archivo.
> El formato sigue [Keep a Changelog](https://keepachangelog.com/es/1.0.0/) y el versionado sigue [Semantic Versioning](https://semver.org/lang/es/).

---

## [7.5.5] — 2026-04-23 — Visor PDF, OG image, favicons, logros y limpieza de assets

### Añadido
- **Sección "Logros y resultados destacados"** con 9 logros profesionales en primera persona, bilingüe (ES/EN).
- **Visor PDF multi-estrategia**: `<object>` nativo → `<embed>` fallback → Google Docs proxy (iOS Safari) → botón "Abrir" como fallback absoluto.
- **`achievements.tsx`** — nuevo componente con animación reveal e i18n completo.
- **Cabeceras HTTP para PDFs** en `next.config.ts`: `Content-Disposition: inline`, `Content-Type: application/pdf`, `object-src 'self'` en CSP, `frame-src 'self' https://docs.google.com`.
- **OG Social Preview (`og-image.png`) regenerada** 1200×630 px: nombre en blanco (#FFFFFF) negrita, especialidad en ámbar (#F59E0B) negrita, indicadores visuales de ubicación y disponibilidad, URL centrada en blanco, foto de perfil completa sin recorte, sin badge de versión.
- **Favicons regenerados** (16/32/48/180/192/512 px + .ico) desde foto de perfil sin recortar, proporcionalmente encajada en canvas oscuro.
- **Archivos de repositorio**: `CHANGELOG.md`, `README.md`, `LICENSE`, `SECURITY.md`, `WIKI.md`.
- **`manifest.json`** actualizado con descripción v7.5.5.

### Modificado
- **`next.config.ts`** — corregido error de build `Can not repeat "path" without a prefix and suffix`; CSP reforzado con `object-src 'self'` y `frame-src 'self' https://docs.google.com`; cabeceras de caché individuales por asset.
- **`navbar.tsx`** — eliminada foto de perfil; color de texto negro en modo claro y blanco en modo oscuro; "Experiencia" capitalizada desde i18n.
- **`hero.tsx`** — foto de perfil con ratio 799×1238 px preservado; scroll indicator visible en móvil y desktop.
- **`about-me.tsx`** — negrita ámbar en palabras clave del bio; frase final añadida; bandera EE. UU. como SVG inline siempre visible.
- **`experience.tsx`** — reescritura completa: sin emojis, sin iconos, solo texto con dots CSS.
- **`projects.tsx`** — reescritura completa: sin imágenes de preview, tech stack como badges de texto.
- **`certifications.tsx`** — reescritura completa: sin logos, visor PDF multi-estrategia, PDFs definitivos.
- **`accessibility-widget.tsx`** — icono ISO 21902 como SVG inline puro sin deformación.
- **`globals.css`** — `.section-title { color: #F59E0B }` aplicado a todos los `<h2>` de sección.
- **`page.tsx`** — sección `<Achievements />` insertada entre `<Experience />` y `<Services />`.
- **`layout.tsx`** — metadata OG/Twitter actualizada; JSON-LD Schema.org actualizado.
- **`package.json`** — versión `7.5.5`.
- **`data.ts`** — versión v7.5.5; TikTok Ads icon usa `/icons/tiktok-ads.png`.
- **`public/certs/`** — todos los PDFs reemplazados por versiones definitivas.
- **`README.md`** — sin emojis en título ni cuerpo; secciones ES y EN completas.

### Eliminado
- `public/icons/accessibility-icon.svg` — archivo con raster embebido.
- `public/icons/tiktok.svg` — SVG roto/vacío.
- `public/icons/location-icon.png` — no referenciado en código.
- Foto de perfil de la navegación principal.
- Badge de versión del OG image.

### Seguridad
- Error de build corregido: patrón `'/favicon:path*'` reemplazado por entradas individuales por archivo.
- CSP: `object-src 'self'` habilita PDFs en `<object>`/`<embed>`; `frame-src` incluye `https://docs.google.com` para proxy iOS.
- `Content-Disposition: inline` garantiza renderizado en browser, no descarga forzada.

---

## [7.5.0] — 2026-03-15 — Portafolio bilingüe completo con temas, accesibilidad y despliegue en Vercel

### Añadido
- Portafolio web profesional completo con soporte bilingüe ES/EN.
- Sistema de temas claro/oscuro con detección automática y persistencia.
- Widget de accesibilidad WCAG 2.1 AA.
- Tech Marquee, todas las secciones, animaciones de partículas, WhatsApp Float, Cookie Consent, Scroll Buttons.
- JSON-LD Schema.org, sitemap automático, robots.txt.
- Deploy en Vercel con dominio personalizado.

---

---

# Changelog (English)

> All notable changes to this project are documented in this file.
> Format follows [Keep a Changelog](https://keepachangelog.com/en/1.0.0/) and versioning follows [Semantic Versioning](https://semver.org/).

---

## [7.5.5] — 2026-04-23 — PDF viewer, OG image, favicons, achievements and asset cleanup

### Added
- **"Achievements & Notable Results" section** with 9 professional achievements in first person, bilingual (ES/EN).
- **Multi-strategy PDF viewer**: native `<object>` → `<embed>` fallback → Google Docs proxy (iOS Safari) → "Open" button as absolute fallback.
- **`achievements.tsx`** — new component with reveal animation and full i18n support.
- **HTTP headers for PDFs** in `next.config.ts`: `Content-Disposition: inline`, `Content-Type: application/pdf`, `object-src 'self'` in CSP, `frame-src 'self' https://docs.google.com`.
- **OG Social Preview (`og-image.png`) regenerated** 1200×630 px: name in white (#FFFFFF) bold, specialty in amber (#F59E0B) bold, visual location and availability indicators, URL centered in white, full uncropped profile photo, no version badge.
- **Favicons regenerated** (16/32/48/180/192/512 px + .ico) from uncropped profile photo, proportionally fitted on dark canvas.
- **Repository files**: `CHANGELOG.md`, `README.md`, `LICENSE`, `SECURITY.md`, `WIKI.md`.
- **`manifest.json`** updated with v7.5.5 description.

### Changed
- **`next.config.ts`** — fixed build error `Can not repeat "path" without a prefix and suffix`; reinforced CSP; individual cache headers per asset.
- **`navbar.tsx`** — removed profile photo; black text in light mode, white in dark mode; "Experiencia" correctly capitalized.
- **`hero.tsx`** — profile photo ratio 799×1238 px preserved; scroll indicator visible on mobile and desktop.
- **`about-me.tsx`** — amber bold on key bio words; final sentence added; US flag as always-visible inline SVG.
- **`experience.tsx`** — full rewrite: text-only, no emojis, no icons, CSS dots as bullets.
- **`projects.tsx`** — full rewrite: no preview images, text badges for tech stack.
- **`certifications.tsx`** — full rewrite: no logos, multi-strategy PDF viewer, updated PDFs.
- **`accessibility-widget.tsx`** — ISO 21902 icon rebuilt as pure inline SVG.
- **`globals.css`** — `.section-title { color: #F59E0B }` applied to all section `<h2>` headings.
- **`page.tsx`** — `<Achievements />` section inserted between `<Experience />` and `<Services />`.
- **`layout.tsx`** — OG/Twitter metadata updated; JSON-LD Schema.org updated.
- **`package.json`** — version `7.5.5`.
- **`data.ts`** — version v7.5.5; TikTok Ads icon uses `/icons/tiktok-ads.png`.
- **`public/certs/`** — all PDFs replaced with definitive versions.
- **`README.md`** — no emojis in title or body; complete ES and EN sections.

### Removed
- `public/icons/accessibility-icon.svg` — raster-embedded file.
- `public/icons/tiktok.svg` — broken/empty SVG.
- `public/icons/location-icon.png` — unreferenced in source code.
- Profile photo from main navigation bar.
- Version badge from OG image.

### Security
- Build error fixed: `'/favicon:path*'` pattern replaced with individual per-file entries.
- CSP: `object-src 'self'` enables PDFs in `<object>`/`<embed>`; `frame-src` includes `https://docs.google.com` for iOS proxy only.
- `Content-Disposition: inline` ensures browser rendering, no forced download.

---

## [7.5.0] — 2026-03-15 — Complete bilingual portfolio with themes, accessibility and Vercel deployment

### Added
- Complete professional web portfolio with bilingual ES/EN support.
- Light/dark theme system with auto-detection and persistence.
- WCAG 2.1 AA accessibility widget.
- Tech Marquee, all sections, particle animations, WhatsApp Float, Cookie Consent, Scroll Buttons.
- JSON-LD Schema.org, auto sitemap, robots.txt.
- Vercel deployment with custom domain.
