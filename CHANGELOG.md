# Registro de Cambios / Changelog

> Todos los cambios notables de este proyecto se documentan en este archivo.
> El formato sigue [Keep a Changelog](https://keepachangelog.com/es/1.0.0/) y el versionado sigue [Semantic Versioning](https://semver.org/lang/es/).

---

## [7.6.0] — 2026-04-25 — Iconos SVG, indicador scroll adaptativo, visor PDF, correcciones UI/UX

### Añadido
- **Meta tags OG con dimensiones explícitas** en `layout.tsx`: `og:image:width`, `og:image:height`, `og:image:type`, `og:image:alt`, `twitter:image:width`, `twitter:image:height`, `<link rel="preload" as="image">` para precaché en redes sociales.
- **Scroll indicator adaptativo** en `hero.tsx`: móvil muestra teléfono con dedo animado, tablet muestra tablet con flecha, desktop mantiene animación clásica de ratón.

### Modificado
- **`accessibility-widget.tsx`** — botón usa el SVG adjunto (`/icons/accessibility.svg`) vía `<Image>` sin deformación; panel también usa el mismo SVG a escala reducida; sin clase `svg` inline.
- **`public/icons/tiktok-ads.svg`** — reemplazado por SVG vectorial puro sin raster embebido; `data.ts` apunta al `.svg`.
- **`public/og-image.png`** — reemplazado por el archivo definitivo adjunto (1200×630 px).
- **`public/icons/accessibility.svg`** — reemplazado por el SVG definitivo adjunto.
- **`certifications.tsx`** — eliminado botón de descarga; visor PDF con `loading="eager"` para renderizado inmediato en móvil al primer clic; detección Safari mejorada.
- **`scroll-buttons.tsx`** — tooltip de "Ir al final" e "Ir al inicio" cambia a `bg-gray-700` en modo claro (combina con fondo blanco) y `bg-navy-700` en modo oscuro.
- **`navbar.tsx`** — `whitespace-nowrap` en links de navegación desktop para que "Sobre mí" se muestre en una sola línea.
- **`achievements.tsx`** — primera letra en mayúscula en todos los `highlight` (ES y EN).
- **`package.json`** — versión `7.6.0`.
- **`data.ts`** — versión v7.6.0; TikTok Ads icon usa `/icons/tiktok-ads.svg`.
- **`manifest.json`** — versión v7.6.0.
- **`layout.tsx`** — versión en descripción v7.6.0.

### Eliminado
- `public/icons/tiktok-ads.png` — reemplazado por SVG vectorial limpio.

---

## [7.5.5] — 2026-04-23 — Visor PDF, OG image, favicons, logros y limpieza de assets

### Añadido
- Sección "Logros y resultados destacados" con 9 logros en primera persona, bilingüe.
- Visor PDF multi-estrategia: `<object>` → `<embed>` → Google Docs proxy (iOS) → nueva pestaña.
- `achievements.tsx` — nuevo componente con reveal y i18n.
- Cabeceras HTTP para PDFs: `Content-Disposition: inline`, `object-src 'self'`, `frame-src 'self' https://docs.google.com`.
- Favicons (16/32/48/180/192/512 px + .ico) sin recorte.
- Archivos de repositorio: `CHANGELOG.md`, `README.md`, `LICENSE`, `SECURITY.md`, `WIKI.md`.

### Modificado
- `next.config.ts` — corregido error de build `Can not repeat "path" without a prefix and suffix`.
- `navbar.tsx`, `hero.tsx`, `about-me.tsx`, `experience.tsx`, `projects.tsx`, `certifications.tsx`.
- `accessibility-widget.tsx` — icono SVG inline ISO 21902.
- `globals.css` — `.section-title { color: #F59E0B }`.
- `page.tsx` — `<Achievements />` entre `<Experience />` y `<Services />`.
- `package.json` — versión `7.5.5`.

### Eliminado
- `public/icons/accessibility-icon.svg`, `public/icons/tiktok.svg`, `public/icons/location-icon.png`.
- Foto de perfil de la navegación principal.

---

## [7.5.0] — 2026-03-15 — Portafolio bilingüe completo con temas, accesibilidad y despliegue en Vercel

### Añadido
- Portafolio web profesional completo con soporte bilingüe ES/EN.
- Sistema de temas claro/oscuro con detección automática y persistencia.
- Widget de accesibilidad WCAG 2.1 AA.
- Tech Marquee, todas las secciones, animaciones, WhatsApp Float, Cookie Consent, Scroll Buttons.
- JSON-LD Schema.org, sitemap automático, robots.txt.
- Deploy en Vercel con dominio personalizado.

---

---

# Changelog (English)

> All notable changes to this project are documented in this file.
> Format follows [Keep a Changelog](https://keepachangelog.com/en/1.0.0/) and versioning follows [Semantic Versioning](https://semver.org/).

---

## [7.6.0] — 2026-04-25 — SVG icons, adaptive scroll indicator, PDF viewer, UI/UX fixes

### Added
- **OG meta tags with explicit dimensions** in `layout.tsx`: `og:image:width`, `og:image:height`, `og:image:type`, `og:image:alt`, `twitter:image:width`, `twitter:image:height`, `<link rel="preload" as="image">` for social media pre-cache.
- **Adaptive scroll indicator** in `hero.tsx`: mobile shows animated phone+finger, tablet shows tablet+arrow, desktop keeps classic mouse animation.

### Changed
- **`accessibility-widget.tsx`** — button uses uploaded SVG (`/icons/accessibility.svg`) via `<Image>` without distortion; panel also uses same SVG at reduced scale; no inline `svg` class.
- **`public/icons/tiktok-ads.svg`** — replaced with pure vectorial SVG without embedded raster; `data.ts` points to `.svg`.
- **`public/og-image.png`** — replaced with definitive uploaded file (1200×630 px).
- **`public/icons/accessibility.svg`** — replaced with definitive uploaded SVG.
- **`certifications.tsx`** — download button removed; PDF viewer with `loading="eager"` for immediate first-click rendering on mobile; improved Safari detection.
- **`scroll-buttons.tsx`** — tooltip changes to `bg-gray-700` in light mode (compatible with white background) and `bg-navy-700` in dark mode.
- **`navbar.tsx`** — `whitespace-nowrap` on desktop nav links so "Sobre mí" displays on a single line.
- **`achievements.tsx`** — first letter capitalized in all `highlight` items (ES and EN).
- **`package.json`** — version `7.6.0`.
- **`data.ts`** — version v7.6.0; TikTok Ads icon uses `/icons/tiktok-ads.svg`.

### Removed
- `public/icons/tiktok-ads.png` — replaced by clean vectorial SVG.

---

## [7.5.5] — 2026-04-23 — PDF viewer, OG image, favicons, achievements and asset cleanup

### Added
- "Achievements & Notable Results" section with 9 achievements in first person, bilingual.
- Multi-strategy PDF viewer: `<object>` → `<embed>` → Google Docs proxy (iOS) → new tab.
- `achievements.tsx` — new component with reveal and i18n.
- HTTP headers for PDFs, favicons, repository files.

### Changed
- Fixed build error `Can not repeat "path" without a prefix and suffix` in `next.config.ts`.
- Multiple component rewrites; `.section-title { color: #F59E0B }` in globals.css.
- Version `7.5.5`.

---

## [7.5.0] — 2026-03-15 — Complete bilingual portfolio with themes, accessibility and Vercel deployment

### Added
- Complete professional portfolio with bilingual ES/EN support, light/dark theme, WCAG 2.1 AA widget, Vercel deployment.
