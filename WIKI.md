# Wiki del Proyecto / Project Wiki

> Documentación técnica y de negocio del portafolio profesional de Daniel Fernando Castillo Mera.

---

## Español (México)

### Índice

1. [Visión general](#visión-general)
2. [Arquitectura](#arquitectura)
3. [Decisiones de diseño](#decisiones-de-diseño)
4. [Sistema de temas](#sistema-de-temas)
5. [Internacionalización (i18n)](#internacionalización-i18n)
6. [Visor de PDF](#visor-de-pdf)
7. [Widget de accesibilidad](#widget-de-accesibilidad)
8. [SEO y metadatos](#seo-y-metadatos)
9. [Seguridad](#seguridad)
10. [Deploy y CI/CD](#deploy-y-cicd)
11. [Historial de versiones](#historial-de-versiones)

---

### Visión general

**danielcastillo-portfolio** es un portafolio web profesional de una sola página (SPA) construido con Next.js 15 (App Router), TypeScript 5 y Tailwind CSS 3. Su objetivo principal es presentar la trayectoria profesional, proyectos, habilidades y certificaciones de Daniel Fernando Castillo Mera de forma accesible, atractiva y funcional en cualquier dispositivo.

**URL de producción:** https://danielcastillo-portfolio.vercel.app/

**Versión actual:** 7.5.5

---

### Arquitectura

```
Renderizado:     Next.js App Router (SSG + CSR híbrido)
Lenguaje:        TypeScript 5 en modo estricto
Estilos:         Tailwind CSS 3 con variables CSS personalizadas
Fuentes:         DM Sans (texto) + JetBrains Mono (código) vía Google Fonts
Assets:          Servidos desde /public (Vercel CDN)
Deploy:          Vercel (automático desde rama main)
```

**Flujo de datos:**
- `src/lib/data.ts` — Single Source of Truth: toda la información del portafolio (experiencia, proyectos, certificaciones, habilidades, contacto).
- `src/lib/i18n.ts` — Traducciones ES/EN estáticas, cargadas en cliente por `I18nProvider`.
- Componentes consumen datos vía hooks `useT()` (traducciones) y constantes importadas de `data.ts`.

---

### Decisiones de diseño

| Decisión | Justificación |
|----------|---------------|
| Next.js App Router | SSG + streaming, mejor SEO, layout compartido |
| Single Source of Truth (`data.ts`) | Cambios de contenido en un solo lugar |
| Tailwind CSS + variables CSS | Temas sin JS adicional, purge automático |
| Sin base de datos | Portafolio estático, sin necesidad de backend |
| Sin imágenes en Experiencia/Proyectos/Certificaciones | Decisión de diseño: contenido limpio, foco en texto |
| Visor PDF multi-estrategia | Compatibilidad máxima entre browsers y OS |
| Emojis en OG image | Representación visual directa en social preview |
| Favicons sin recorte | Foto completa proporcional, sin distorsión |

---

### Sistema de temas

El sistema de temas usa una clase CSS `dark` en el elemento `<html>` controlada por `ThemeProvider`.

**Prioridad de detección:**
1. `localStorage.getItem('portfolio-theme')` (preferencia guardada)
2. `window.matchMedia('(prefers-color-scheme: dark)')` (preferencia del sistema)
3. Modo claro por defecto

**Variables CSS:** definidas en `globals.css` bajo selectores `:root` (claro) y `.dark` (oscuro).

**FOUC prevention:** snippet de JS inline en `<head>` (antes de que cargue React) aplica la clase `dark` y `color-scheme` síncronamente.

---

### Internacionalización (i18n)

Implementación ligera sin dependencias externas:

- **`src/lib/i18n.ts`** — objeto con todas las traducciones ES y EN
- **`src/lib/i18n-provider.tsx`** — Context provider con `useT()` y `useI18n()` hooks
- **Persistencia:** `localStorage` (`portfolio-locale`)
- **Sin rutas separadas:** el idioma es estado de la aplicación, no se cambia la URL

**Añadir una nueva traducción:**
```typescript
// En src/lib/i18n.ts, bajo 'es' y 'en':
export const translations = {
  es: { nuevaSeccion: { titulo: 'Mi Título' } },
  en: { nuevaSeccion: { titulo: 'My Title' } },
};
```

---

### Visor de PDF

**Archivo:** `src/components/certifications.tsx` → componente `PdfViewer`

**Estrategia de visualización por entorno:**

| Entorno | Método | Notas |
|---------|--------|-------|
| Chrome/Edge desktop | `<object data="...">` | Renderizado nativo PDF |
| Firefox desktop | `<embed>` (fallback de object) | Plugin PDF.js integrado |
| iOS Safari | `<iframe src="https://docs.google.com/viewer?url=...">` | Único método funcional en iOS |
| Android Chrome | `<object>` (nativo) | Soporte nativo PDF |
| Cualquier browser | Botón "Abrir ↗" | Fallback absoluto garantizado |

**Requisitos en `next.config.ts`:**
```typescript
"object-src 'self'",                                    // Para object/embed
"frame-src 'self' https://docs.google.com",             // Para iframe iOS proxy
// En headers específicos de /certs/:path*:
{ key: 'Content-Disposition', value: 'inline' },        // No forzar descarga
{ key: 'Content-Type', value: 'application/pdf' },      // MIME type explícito
```

---

### Widget de accesibilidad

**Archivo:** `src/components/accessibility-widget.tsx`

**Funcionalidades:**

| Feature | Implementación |
|---------|----------------|
| Tamaño de fuente | `root.style.fontSize` → 100% / 112.5% / 125% |
| Alto contraste | `data-high-contrast` attribute en `<html>` |
| Reducción de movimiento | Clase `a11y-reduced-motion` en `<html>` |
| Resaltado de enlaces | Clase `a11y-highlight-links` en `<html>` |
| Cursor grande | Clase `a11y-large-cursor` en `<html>` |

**Icono:** SVG ISO 21902 puro inline (sin raster, sin deformación).

**Persistencia:** `localStorage('a11y-settings')`.

---

### SEO y metadatos

**Archivos:** `src/app/layout.tsx`, `src/app/sitemap.ts`

| Tipo | Implementación |
|------|----------------|
| Open Graph | `og:title`, `og:description`, `og:image` (1200×630), `og:type`, `og:locale` |
| Twitter Card | `summary_large_image` con imagen OG |
| JSON-LD | Schema.org `Person` con jobTitle, knowsAbout, alumniOf, sameAs |
| Sitemap | `src/app/sitemap.ts` → `/sitemap.xml` automático (Next.js) |
| robots.txt | `public/robots.txt` |
| Favicons | 16/32/48/180/192/512 px + .ico |
| Manifest | `public/manifest.json` (PWA) |

**OG Image:** `public/og-image.png` — 1200×630 px (estándar Open Graph, compatible con WhatsApp, LinkedIn, Twitter/X, Facebook).

---

### Seguridad

Ver [SECURITY.md](SECURITY.md) para la política completa.

**CSP resumen:**
```
default-src 'self'
script-src 'self' 'unsafe-inline' 'unsafe-eval' https://fonts.googleapis.com
style-src 'self' 'unsafe-inline' https://fonts.googleapis.com
font-src 'self' https://fonts.gstatic.com
img-src 'self' data: https: blob:
connect-src 'self' https: https://api.github.com
object-src 'self'
frame-src 'self' https://docs.google.com
worker-src 'self' blob:
```

---

### Deploy y CI/CD

**Plataforma:** Vercel (Free tier → Pro según necesidad)

**Flujo de deploy:**
1. Push a rama `main` → trigger automático en Vercel
2. `npm run build` — compilación Next.js
3. Deploy a Edge Network de Vercel (CDN global)
4. Preview deployments automáticos en PRs (ramas feature/)

**URL de producción:** https://danielcastillo-portfolio.vercel.app/

---

### Historial de versiones

| Versión | Fecha | Resumen |
|---------|-------|---------|
| 7.5.5 | 2026-04-23 | Visor PDF, OG image, favicons, logros, limpieza |
| 7.5.0 | 2026-03-15 | Portafolio completo bilingüe inicial |

Ver [CHANGELOG.md](CHANGELOG.md) para el historial detallado.

---

---

## English (United States)

### Overview

**danielcastillo-portfolio** is a professional single-page portfolio (SPA) built with Next.js 15 (App Router), TypeScript 5 and Tailwind CSS 3. Its primary goal is to present Daniel Fernando Castillo Mera's professional background, projects, skills and certifications in an accessible, attractive and functional way on any device.

**Production URL:** https://danielcastillo-portfolio.vercel.app/

**Current version:** 7.5.5

---

### Architecture

```
Rendering:  Next.js App Router (SSG + hybrid CSR)
Language:   TypeScript 5 strict mode
Styles:     Tailwind CSS 3 with custom CSS variables
Fonts:      DM Sans (text) + JetBrains Mono (code) via Google Fonts
Assets:     Served from /public (Vercel CDN)
Deploy:     Vercel (automatic from main branch)
```

---

### PDF Viewer

**File:** `src/components/certifications.tsx` → `PdfViewer` component

**Rendering strategy by environment:**

| Environment | Method | Notes |
|-------------|--------|-------|
| Chrome/Edge desktop | `<object data="...">` | Native PDF rendering |
| Firefox desktop | `<embed>` (object fallback) | Built-in PDF.js plugin |
| iOS Safari | `<iframe src="https://docs.google.com/viewer?url=...">` | Only functional method on iOS |
| Android Chrome | `<object>` (native) | Native PDF support |
| Any browser | "Open ↗" button | Guaranteed absolute fallback |

---

### Accessibility Widget

Features: font size (100%/112.5%/125%), high contrast, reduced motion, link highlighting, large cursor. Icon: pure inline SVG ISO 21902. Persistent via `localStorage`.

---

### SEO & Metadata

OG Image: 1200×630 px (Open Graph standard, compatible with WhatsApp, LinkedIn, Twitter/X, Facebook). JSON-LD Schema.org Person. Auto-generated sitemap via Next.js. Favicons: 16/32/48/180/192/512 px + .ico (all from uncropped profile photo).

---

### Version History

| Version | Date | Summary |
|---------|------|---------|
| 7.5.5 | 2026-04-23 | PDF viewer, OG image, favicons, achievements, cleanup |
| 7.5.0 | 2026-03-15 | Initial complete bilingual portfolio |

See [CHANGELOG.md](CHANGELOG.md) for detailed history.
