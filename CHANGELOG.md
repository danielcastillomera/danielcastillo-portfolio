# Registro de Cambios / Changelog

> Todos los cambios notables de este proyecto se documentan en este archivo.
> El formato sigue [Keep a Changelog](https://keepachangelog.com/es/1.0.0/) y el versionado sigue [Semantic Versioning](https://semver.org/lang/es/).

---

## v7.6.6 - Fix definitivo PDF canvas Android/iOS, Exploratorio móvil chips horizontal, CSP actualizado

### Añadido

- **`PdfCanvasViewer`** (`certifications.tsx`): renderizador PDF basado en **PDF.js v3.11.174** sobre `<canvas>`. Elimina por completo el uso de `<iframe>` y `<embed>`. Carga PDF.js dinámicamente desde CDN (unpkg) sin romper SSR. Fetch del PDF desde la API route interna `/api/pdf`. Renderiza la página 1 con DPR correcto (máx. 2x). Usa `IntersectionObserver` para renderizar solo cuando el componente es visible (performance). Muestra spinner con texto "Cargando PDF…" y estado de error con botón "Abrir ↗" como fallback. Compatible 100%: Android Chrome/Firefox/Samsung Internet, iOS Safari 16+, Desktop.
- **`scrollbar-hide`** (`globals.css`): clase utilitaria para ocultar la scrollbar manteniendo el scroll funcional (Chrome/Safari/Firefox/Edge).

### Modificado

- **`skills.tsx`** — Sección "En Aprendizaje / Exploratorio" rediseñada para móvil: en pantallas `< sm` muestra chips compactos con scroll horizontal tipo carrusel (`overflow-x-auto`, `snap-x`) sin texto descriptivo para no ocupar demasiado espacio. En `sm+` (tablet/desktop) mantiene el grid de tarjetas con nombre + descripción. Contador de tecnologías visible.
- **`next.config.ts`** — CSP actualizado: `script-src` incluye `https://cdnjs.cloudflare.com https://unpkg.com` para PDF.js CDN. `object-src 'none'` y `frame-src 'none'` — ya no se usan iframes/embeds para PDFs.
- **`certifications.tsx`** — `InlinePdfPreview` reemplazado por `PdfCanvasViewer`. Eliminada detección iOS (ya no necesaria, canvas funciona en todos los dispositivos).

### Corregido

- **Android Chrome**: PDF ya no muestra "Este contenido está bloqueado" — el canvas renderiza directamente sin depender de X-Frame-Options.
- **iOS Safari**: PDF renderizado en canvas — sin necesidad de mensaje informativo.
- **Sección Exploratorio en móvil**: ya no se ve como una lista interminable — chips compactos con scroll horizontal.

---

## v7.6.5 - Corrección de textos en español, fix PDF móvil iOS, badges "En desarrollo" unificados, versiones en tech-grid

### Añadido

- **Detección iOS en `InlinePdfPreview`**: cuando el dispositivo es iOS Safari (iPhone, iPad, iPod), se muestra un panel informativo con botón "Abrir ↗" prominente en lugar del `<iframe>` (que iOS no soporta para PDFs inline). Solución definitiva al problema de visualización de PDFs en móvil iOS.
- **Versiones en Tech Grid**: agregadas versiones faltantes en la sección "Conjunto de tecnologías" (Supabase v2, PostgreSQL v16, SQL Server v2022, Git v2.49).

### Modificado

- **`i18n.ts`** — Sección `es` completamente traducida al español: taglines del hero, `sectionLabel`, `title`, `subtitle`, `ctaServices`, `scroll`, `irAlFinal`, `irAlInicio`, `capabilities`, `items`, etiquetas de secciones (About, Experience, Services, Projects, Skills, Certifications, Contact, Cookies, Footer, TechGrid, A11y, Misc). Eliminados textos en inglés que aparecían en modo español.
- **`projects.tsx`** — Badge de estado unificado: todos los proyectos "En desarrollo" usan el mismo diseño naranja animado (borde, fondo y punto `animate-pulse`) igual que el proyecto destacado. Proyectos con estado "Terminado"/"Completed" usan badge verde consistente.
- **`data.ts`** — Estado `'Completado'` renombrado a `'Terminado'` (ES) manteniendo `'Completed'` en EN. Versión del portafolio actualizada a `v7.6.5` en el proyecto `portfolio-web`.
- **`about-me.tsx`** — Versión del stat actualizada a `v7.6.5`.
- **`layout.tsx`** — Descripción SEO actualizada a `v7.6.5`.
- **`package.json`** — Versión `7.6.5`.
- **`docs/`** — Todos los archivos wiki actualizados a v7.6.5: `Home.md`, `Architecture.md`, `Accessibility.md`, `Deployment.md`, `I18n.md`.

---

## v7.6.4 — Visor PDF con API route interna, TS build fixes, nuevo trabajo, logros, skills y taglines

### Añadido
- **API route interna `/api/pdf?file=`** (`src/app/api/pdf/route.ts`) — sirve PDFs desde el mismo origen con headers `Content-Disposition: inline` y whitelist de archivos permitidos. Elimina definitivamente el error "Contenido bloqueado" en móvil y desktop. No requiere Google Docs proxy ni configuración CSP especial.
- **Nuevo trabajo: Community Manager — Agro Industrias Warsa C.A.** (24-04-2026 — Presente) en `data.ts`: creación del perfil TikTok, contenido multimedia y campañas TikTok Ads B2B.
- **Nuevo logro**: "Construí la presencia en TikTok de Agro Industrias Warsa C.A." en `achievements.tsx` (ES y EN).
- **Skills exploratorias nuevas**: Angular, Laravel, Spring Boot, Bootstrap, Android Studio/Kotlin, Swift/Xcode (iOS), MongoDB, Oracle Database XE + SQL Developer, TDD, diseño de MVP, ElevenLabs, HeyGen, CapCut (PC y móvil). `EXPLORATORY_SKILLS` expandido con descripciones técnicas completas.
- **Taglines del hero actualizados**: nuevas frases sobre Clean Code, Agile/Scrum/Git, modos aleatorio, frases "enganchadoras" para clientes.

### Modificado
- **`certifications.tsx`** — usa `InlinePdfPreview` con `<iframe src="/api/pdf?file=...">` (mismo origen). Funciona en Android Chrome, iOS Safari, desktop — sin diálogos de confirmación, sin CSP bloqueado.
- **`data.ts`** — typo corregido: `Soluciones Técnicas Industriales D.C` → `Soluciones Técnicas Industriales D.C.`; PDFs de certificados reemplazados por versiones definitivas.
- Versión `7.6.4` en todos los archivos.
- **TypeScript fix 1** — `translations` en `i18n.ts` tipado como `Record<Locale, any>` para eliminar error `"Property 'en' does not exist on type..."`.
- **TypeScript fix 2** — `t.about.items.map((item: string) =>` — parámetro tipado explícitamente para eliminar `"Parameter 'item' implicitly has an 'any' type"`.
- **`package.json`** — eliminada dependencia `react-pdf` (no utilizada); añadidos `eslint` + `eslint-config-next` para build limpio.
- **SKILL_CATEGORIES actualizado** — skills nuevas: Facturación electrónica SRI (XML v2.1.0), LaTeX/Overleaf, Prompt Engineering/AI Dev, CapCut, Clean Code/SOLID/DRY/KISS.

### Eliminado
- PDFs anteriores reemplazados por versiones definitivas sin cambio de nombre de archivo.

---

## v7.6.3 — Visor PDF iframe móvil, widget accesibilidad mejorado, banderas en PC, espaciado y carta aparte

### Añadido
- **Sub-sección "Carta de Recomendación"** separada de los certificados, con datos completos (emisor, lugar, fecha) y vista previa PDF.

### Modificado
- **`certifications.tsx`** — visor PDF cambia de `<object>` a `<iframe>` directo (mejor compatibilidad móvil); iOS Safari sigue usando Google Docs proxy; botón "Abrir" con borde/marco amber; título sección actualizado a "FORMACIÓN CONTINUA Y CREDIBILIDAD / Certificados y talleres".
- **`accessibility-widget.tsx`** — botón "✕" para cerrar; títulos de opciones en `#F59E0B` negrita; etiquetas Normal/Grande/Extra grande sin negrita; botón "Restaurar" con borde `#F59E0B`; texto WCAG en negrita.
- **`globals.css`** — `a11y-reduced-motion` usa `animation: none !important` en lugar de solo `duration: 0.01ms`; también detiene `marquee-track`, `animate-ping`, `animate-pulse`, `animate-spin`, `animate-float`, `animate-bounce`.
- **`language-toggle.tsx`** — bandera del país visible en PC y móvil en el botón principal (no solo en el dropdown).
- **`achievements.tsx`** — separador cambia de " — " a ": " entre el highlight y el texto.
- **`i18n.ts`** — sección certificaciones: ES "Formación continua y credibilidad / Certificados y talleres"; EN "Continuous training & credibility / Certificates & Workshops".
- **Espaciado de secciones** — `py-24 sm:py-32` → `py-16 sm:py-24` en todas las secciones para reducir espacios en blanco excesivos.
- Versión `7.6.3`.

---

## v7.6.2 — Vista previa PDF inline, selección de texto habilitada, puntos finales y wiki en docs/

### Añadido
- **Vista previa PDF inline** en cada tarjeta de certificación (`InlinePdfPreview`): se muestra debajo de "Estado", centrada, sin botón "Ver documento", tamaño adaptativo con `clamp(280px, 45vw, 420px)`, sin opción de descarga. Estrategia por dispositivo: iOS Safari → Google Docs proxy; Android/Desktop → `<object>` mismo origen.
- **Carpeta `docs/`** con archivos wiki en GitHub Flavored Markdown (GFM): `Home.md`, `Architecture.md`, `Accessibility.md`, `Deployment.md`, `I18n.md`. Cada archivo bilingüe ES/EN.

### Modificado
- **`globals.css`** — `body` cambia de `user-select: none` a `user-select: text` (fix WCAG 1.3.4 y UX). Solo `img`, `.protected-image` y `.protected-image-wrapper` mantienen protección.
- **`src/lib/data.ts`** — Puntos finales añadidos a todos los `items` e `itemsEn` de `SERVICE_CATEGORIES` y `ADDITIONAL_SKILLS` que eran frases sin punto.
- **Scrum Fundamentals Certified (SFC™)** — ubicación corregida a "Estados Unidos (en línea)" / "United States (online)".
- **`certifications.tsx`** — reescritura completa con `InlinePdfPreview` embebido en la tarjeta; eliminado modal y botón "Ver documento".
- Versión `7.6.2` en `package.json`, `data.ts`, `about-me.tsx`, `manifest.json`, `layout.tsx`.

### Eliminado
- `WIKI.md` (raíz) — reemplazado por `docs/Home.md` y estructura completa en `docs/`.

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

## v7.5.5 — Visor PDF, OG image, favicons, logros y limpieza de assets

### Añadido
- Sección "Logros y resultados destacados" (9 logros, bilingüe).
- Visor PDF multi-estrategia: `<object>` → `<embed>` → Google Docs (iOS) → nueva pestaña.
- `achievements.tsx`, cabeceras HTTP para PDFs, favicons sin recorte, archivos de repositorio.

### Modificado
- Corregido error de build `Can not repeat "path" without a prefix and suffix`.
- `.section-title { color: #F59E0B }`, múltiples rewrites de componentes.
- Versión `7.5.5`.

---

## v7.5.0 — Portafolio bilingüe completo con temas, accesibilidad y despliegue en Vercel

### Añadido
- Portafolio web profesional completo con soporte bilingüe ES/EN, temas, WCAG 2.1 AA, Vercel.

---

---

# Changelog (English)

> All notable changes to this project are documented in this file.
> Format follows [Keep a Changelog](https://keepachangelog.com/en/1.0.0/) and versioning follows [Semantic Versioning](https://semver.org/).

---

## v7.6.1 — Android PDF viewer, photo centering, fb:app_id, Scrum SFC and updated assets

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

## v7.6.0 — SVG icons, adaptive scroll indicator, PDF viewer, UI/UX fixes

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

## v7.5.5 — PDF viewer, OG image, favicons, achievements and asset cleanup

### Added
- "Achievements & Notable Results" section (9 items, bilingual).
- Multi-strategy PDF viewer, favicons, repository documentation files.

### Changed
- Fixed build error in `next.config.ts`. Section title amber color. Multiple component rewrites.
- Version `7.5.5`.

---

## v7.5.0 — Complete bilingual portfolio with themes, accessibility and Vercel deployment

### Added
- Complete professional portfolio with bilingual ES/EN support, light/dark theme, WCAG 2.1 AA, Vercel deployment.
