# Registro de Cambios / Changelog

> Todos los cambios notables de este proyecto se documentan en este archivo.
> El formato sigue [Keep a Changelog](https://keepachangelog.com/es/1.0.0/) y el versionado sigue [Semantic Versioning](https://semver.org/lang/es/).

---

## [7.6.1] — 2026-04-25 — Visor PDF Android, centrado de foto, fb:app_id, Scrum SFC y assets actualizados

### Añadido
- **Certificación Scrum Fundamentals Certified (SFC™)** — SCRUMstudy®, Avondale Arizona (en línea), 25-04-2026, estado: en curso.
- **`fb:app_id`** en `layout.tsx` — meta tag requerida para depuración del Open Graph Debugger de Meta y distribución correcta del contenido compartido en Facebook/WhatsApp.

### Modificado
- **`certifications.tsx`** — visor PDF Android corregido: Android Chrome ya no usa Google Docs proxy (que causaba el diálogo "Abrir" intermedio); ahora usa `<object>` con URL del mismo origen → visualización inmediata al primer tap sin confirmación del sistema. Solo iOS Safari sigue usando Google Docs proxy.
- **`hero.tsx`** — foto de perfil centrada correctamente en el círculo: `object-center` (antes `object-top` causaba descentrado horizontal).
- **`public/og-image.png`** — reemplazado por el archivo definitivo adjunto.
- **`public/icons/accessibility.svg`** — reemplazado por el SVG definitivo adjunto.
- **`public/icons/tiktok-ads.png`** — reemplazado por el PNG definitivo adjunto.
- **`data.ts`** — `tiktok-ads.svg` → `tiktok-ads.png`; versión v7.6.1.
- **`package.json`** — versión `7.6.1`.
- **`manifest.json`** — versión v7.6.1.

### Eliminado
- `public/icons/tiktok-ads.svg` — reemplazado por PNG definitivo.

---

## [7.6.0] — 2026-04-25 — Iconos SVG, indicador scroll adaptativo, visor PDF, correcciones UI/UX

### Añadido
- Meta tags OG con dimensiones explícitas: `og:image:width`, `og:image:height`, `og:image:type`, `<link rel="preload" as="image">`.
- Scroll indicator adaptativo: móvil=teléfono+dedo, tablet=tablet+flecha, desktop=ratón clásico.

### Modificado
- `accessibility-widget.tsx` — botón usa SVG adjunto via `<Image>` sin deformación.
- `tiktok-ads.svg` — SVG vectorial puro (sin raster embebido).
- `certifications.tsx` — sin botón de descarga; `loading="eager"` para renderizado inmediato.
- `scroll-buttons.tsx` — tooltip `bg-gray-700` en modo claro, `bg-navy-700` en oscuro.
- `navbar.tsx` — `whitespace-nowrap` para "Sobre mí" en una sola línea.
- `achievements.tsx` — primera letra en mayúscula en todos los highlights.
- Versión `7.6.0`.

---

## [7.5.5] — 2026-04-23 — Visor PDF, OG image, favicons, logros y limpieza de assets

### Añadido
- Sección "Logros y resultados destacados" (9 logros, bilingüe).
- Visor PDF multi-estrategia: `<object>` → `<embed>` → Google Docs (iOS) → nueva pestaña.
- `achievements.tsx`, cabeceras HTTP para PDFs, favicons sin recorte, archivos de repositorio.

### Modificado
- Corregido error de build `Can not repeat "path" without a prefix and suffix`.
- `.section-title { color: #F59E0B }`, múltiples rewrites de componentes.
- Versión `7.5.5`.

---

## [7.5.0] — 2026-03-15 — Portafolio bilingüe completo con temas, accesibilidad y despliegue en Vercel

### Añadido
- Portafolio web profesional completo con soporte bilingüe ES/EN, temas, WCAG 2.1 AA, Vercel.

---

---

# Changelog (English)

> All notable changes to this project are documented in this file.
> Format follows [Keep a Changelog](https://keepachangelog.com/en/1.0.0/) and versioning follows [Semantic Versioning](https://semver.org/).

---

## [7.6.1] — 2026-04-25 — Android PDF viewer, photo centering, fb:app_id, Scrum SFC and updated assets

### Added
- **Scrum Fundamentals Certified (SFC™)** — SCRUMstudy®, Avondale Arizona (online), 25-04-2026, status: in progress.
- **`fb:app_id`** in `layout.tsx` — meta tag required for Meta's Open Graph Debugger and correct content distribution on Facebook/WhatsApp.

### Changed
- **`certifications.tsx`** — Android PDF viewer fixed: Android Chrome no longer uses Google Docs proxy (which caused the intermediate "Open" dialog); now uses `<object>` with same-origin URL → immediate display on first tap without system confirmation. Only iOS Safari still uses Google Docs proxy.
- **`hero.tsx`** — profile photo correctly centered in circle: `object-center` (previously `object-top` caused horizontal misalignment).
- **`public/og-image.png`** — replaced with definitive uploaded file.
- **`public/icons/accessibility.svg`** — replaced with definitive uploaded SVG.
- **`public/icons/tiktok-ads.png`** — replaced with definitive uploaded PNG.
- **`data.ts`** — `tiktok-ads.svg` → `tiktok-ads.png`; version v7.6.1.
- **`package.json`** — version `7.6.1`.

### Removed
- `public/icons/tiktok-ads.svg` — replaced by definitive PNG.

---

## [7.6.0] — 2026-04-25 — SVG icons, adaptive scroll indicator, PDF viewer, UI/UX fixes

### Added
- OG meta tags with explicit dimensions and social media pre-cache.
- Adaptive scroll indicator by device type.

### Changed
- Accessibility button uses uploaded SVG via `<Image>` without distortion.
- Scroll buttons tooltip adapts to light/dark mode.
- Navbar `whitespace-nowrap` fixes "Sobre mí" single-line display.
- Achievements highlights capitalized.
- Version `7.6.0`.

---

## [7.5.5] — 2026-04-23 — PDF viewer, OG image, favicons, achievements and asset cleanup

### Added
- "Achievements & Notable Results" section (9 items, bilingual).
- Multi-strategy PDF viewer, favicons, repository documentation files.

### Changed
- Fixed build error in `next.config.ts`. Section title amber color. Multiple component rewrites.
- Version `7.5.5`.

---

## [7.5.0] — 2026-03-15 — Complete bilingual portfolio with themes, accessibility and Vercel deployment

### Added
- Complete professional portfolio with bilingual ES/EN support, light/dark theme, WCAG 2.1 AA, Vercel deployment.
