# Changelog — Daniel Fernando Castillo Mera Portfolio

---

## Español (México)

Todos los cambios notables se documentan en este archivo.
Este proyecto sigue [Semantic Versioning](https://semver.org/).

---

## v7.5.0 — Foto CV, OG mejorada, Visor PDF, Experiencia Laboral, Colores semánticos, Accesibilidad, Certificados completos, Concordancia CV

### Cambios v7.5.0

#### 1. Foto de perfil — Proporción curricular estándar (35×45 mm / 3×4 cm)
- Foto recortada y exportada en la proporción oficial 35:45 (ancho:alto) según normativa Ecuador y estándar internacional para CV.
- Solo se incluye `profile.png` en la carpeta `public/` — no se distribuye la foto original de cuerpo completo.
- La misma proporción se aplica al visor de la sección "Sobre mí" y al favicon.

#### 2. Ícono de accesibilidad — SVG (formato óptimo)
- Se eligió formato **SVG** por ser vectorial: escala sin pérdida de calidad, sin pixelado en zoom, peso mínimo.
- Figura/persona de color blanco `#ffffff` sobre fondo ámbar `#f59e0b` (color primario del proyecto).
- Archivo: `public/icons/accessibility.svg`.

#### 3. Nombre visible en versión móvil (navbar)
- Eliminado `hidden sm:inline` del span de nombre en navbar.
- El nombre "Daniel Fernando / Castillo Mera" ahora se muestra en **todas** las resoluciones de pantalla.

#### 4. Sistema de colores semántico (CSS Custom Properties — estándar industria)
- Implementado sistema completo de tokens de color:
  - `--color-primary-*`: Ámbar/dorado (color de marca)
  - `--color-secondary-*`: Navy azul (fondo dark)
  - `--color-text-primary`: `#000000` en modo claro, `#f5f6f8` en modo oscuro
  - `--color-heading`, `--color-body`, `--color-bg-base`, `--color-bg-surface`
- Todos los textos y párrafos ahora usan el color correcto en ambos modos.
- Widget de accesibilidad: textos corregidos a `text-gray-900 dark:text-gray-100`.

#### 5. Limpieza de archivos innecesarios
- Eliminadas fotos de perfil anteriores de la carpeta `public/`.
- Solo se conserva `profile.png` (versión actual).
- Sin archivos basura ni assets obsoletos.

#### 6. Favicon y OG Image actualizados
- Favicon regenerado desde la nueva foto de perfil (proporción circular, sin borde de color).
- OG Image (1200×630 px) rediseñada: texto más grande, colores semánticos correctos, foto en proporción CV.
- Aplica en WhatsApp, Telegram, LinkedIn y barra de dirección del navegador.

#### 7. Visor de PDFs protegido
- Implementado visor modal con `<iframe sandbox>` para todos los certificados y carta de recomendación.
- Sin botón de descarga — solo lectura.
- Controles nativos: **zoom in (+25%)**, **zoom out (-25%)**, **restablecer al 100%**.
- Compatible con PC, móvil, tablet y demás dispositivos.
- Carta de Recomendación — Agro Industrias Warsa C.A. añadida.

#### 8. Logo Zod — sin fondo
- Reemplazado `zod.png` por versión con fondo transparente (0% píxeles negros).

#### 9. OG Image — texto más grande y colores correctos
- Nombre en 62px, rol en 36px, color de texto: `#f5f6f8` (modo oscuro estándar).
- Tags de tecnología con colores de marca reales.

#### 10. Sección "Mi trabajo" — correcciones
- Título "Dashboard Enterprise" siempre visible en móvil (eliminado truncado, usa `break-words`).
- "Invoice Manager System" corregido a estado **"En desarrollo"** (concordante con CV).
- Portafolio Web Personal añadido como proyecto.

#### 11. Sección "Certificados" — rediseño completo
- **Sin iconos ni emojis** en ninguna tarjeta.
- Información completa del CV: emisor, lugar (ciudad y país), fecha, duración (horas/minutos), estado.
- **Estado y horas posicionados al final** de la tarjeta, debajo de todos los demás datos.
- Carta de Recomendación incluida como documento verificable.

#### 12. Nueva sección: Experiencia Laboral
- Tres experiencias del CV: Community Manager, Pasante/Aux. Tesorería, Pasante/Aux. Sistemas (Soprisa S.A.).
- Sin logo ni imagen — solo texto estructurado con timeline visual.
- Bilingüe ES/EN, fechas y ubicaciones exactas del CV.

#### 13. Corrección de coma en texto bio
- Eliminada coma redundante: "Mi proyecto principal, Dashboard Enterprise v3.4.0, es un sistema…" → sin coma extra.

#### 14. Sección "Sobre mí" — concordancia total con CV
- Redacción en **primera persona** (estándar portafolios 2024-2026, según tendencias Google, LinkedIn, Vercel, Stripe).
- Bio y párrafos tomados directamente del CV 2026.
- Proporción de foto: 35×45 mm (ancho:alto).

#### 15. Primera persona en toda la redacción
- Todos los textos del portafolio reescritos en primera persona.
- Orientación a logros (achievement-oriented), concordante con el CV.

#### 16. Datos actualizados al CV 2026
- Número de proyectos: 5 (Dashboard Enterprise, Portafolio, CNE Figma, Proyecto Unificado, Invoice Manager).
- Habilidades exploratorias: AWS, Docker, GitHub Actions, Flutter/Dart, GraphQL, JWT, Redis, Jest/Vitest, etc.
- Soft skills y hard skills del CV incluidas.

#### 17. Documentos del repositorio actualizados
- `CHANGELOG.md`, `README.md`, `LICENSE`, `SECURITY.md` y wiki (`docs/`) actualizados a v7.5.0.
- Formato bilingüe ES/EN en todos los documentos.

### Archivos modificados principales
- `src/app/globals.css` — sistema de tokens CSS semánticos
- `src/app/page.tsx` — sección Experience añadida
- `src/lib/data.ts` — datos completos del CV
- `src/lib/i18n.ts` — claves nuevas (experience, certifications.location, etc.)
- `src/components/about-me.tsx` — primera persona, proporción foto CV
- `src/components/experience.tsx` — **NUEVO** componente
- `src/components/certifications.tsx` — sin iconos, info completa, visor PDF
- `src/components/projects.tsx` — título móvil, Invoice Manager estado
- `src/components/accessibility-widget.tsx` — colores de texto corregidos
- `src/components/navbar.tsx` — nombre siempre visible
- `public/profile.png` — proporción 35:45
- `public/og-image.png` — texto grande, colores correctos
- `public/icons/accessibility.svg` — figura blanca, formato SVG
- `public/icons/zod.png` — sin fondo negro
- `public/certs/carta-recomendacion.pdf` — añadido

---

## English (United States)

All notable changes are documented in this file.
This project follows [Semantic Versioning](https://semver.org/).

---

## v7.5.0 — CV Photo, Enhanced OG, PDF Viewer, Work Experience, Semantic Colors, Accessibility, Full Certificates, CV Alignment

### Changes v7.5.0

#### 1. Profile photo — Standard CV proportion (35×45 mm / 3×4 cm)
- Photo cropped and exported in the official 35:45 (width:height) ratio per Ecuador regulations and international CV standard.
- Only `profile.png` is included in the `public/` folder — the original full-body photo is not distributed.
- Same ratio applied in the "About me" section viewer and favicon.

#### 2. Accessibility icon — SVG (optimal format)
- **SVG** format chosen: vector-based, scales without quality loss, zero pixelation on zoom, minimal file size.
- White `#ffffff` figure/person on amber `#f59e0b` background (project primary color).
- File: `public/icons/accessibility.svg`.

#### 3. Name visible on mobile (navbar)
- Removed `hidden sm:inline` from the navbar name span.
- "Daniel Fernando / Castillo Mera" now shows on **all** screen sizes.

#### 4. Semantic color system (CSS Custom Properties — industry standard)
- Full color token system implemented:
  - `--color-primary-*`: Amber/gold (brand color)
  - `--color-secondary-*`: Navy blue (dark background)
  - `--color-text-primary`: `#000000` in light mode, `#f5f6f8` in dark mode
  - `--color-heading`, `--color-body`, `--color-bg-base`, `--color-bg-surface`
- All text and paragraphs now use the correct color in both modes.
- Accessibility widget: text corrected to `text-gray-900 dark:text-gray-100`.

#### 5. Cleanup of unnecessary files
- Removed previous profile photos from the `public/` folder.
- Only `profile.png` (current version) is kept.
- No junk files or obsolete assets.

#### 6. Updated Favicon and OG Image
- Favicon regenerated from the new profile photo (circular crop, no color border).
- OG Image (1200×630 px) redesigned: larger text, correct semantic colors, CV-ratio photo.
- Applies in WhatsApp, Telegram, LinkedIn and browser address bar.

#### 7. Protected PDF viewer
- Modal viewer implemented with `<iframe sandbox>` for all certificates and recommendation letter.
- No download button — read-only.
- Native controls: **zoom in (+25%)**, **zoom out (-25%)**, **reset to 100%**.
- Compatible with PC, mobile, tablet and other devices.
- Letter of Recommendation — Agro Industrias Warsa C.A. added.

#### 8. Zod logo — no background
- Replaced `zod.png` with transparent background version (0% black pixels).

#### 9. OG Image — larger text and correct colors
- Name at 62px, role at 36px, text color: `#f5f6f8` (dark mode standard).
- Technology tags with real brand colors.

#### 10. "My work" section — fixes
- "Dashboard Enterprise" title always visible on mobile (removed truncation, uses `break-words`).
- "Invoice Manager System" corrected to **"In development"** status (aligned with CV).
- Personal Portfolio Web added as a project.

#### 11. "Certificates" section — full redesign
- **No icons or emojis** in any card.
- Complete CV information: issuer, location (city and country), date, duration (hours/minutes), status.
- **Status and hours positioned at the bottom** of the card, below all other data.
- Letter of Recommendation included as a verifiable document.

#### 12. New section: Work Experience
- Three experiences from CV: Community Manager, Intern/Treasury Assistant, Intern/Systems Assistant (Soprisa S.A.).
- No logo or image — structured text only with visual timeline.
- Bilingual ES/EN, exact dates and locations from CV.

#### 13. Bio text comma fix
- Removed redundant comma from bio paragraph.

#### 14. "About me" section — full CV alignment
- Written in **first person** (2024-2026 portfolio standard, per Google, LinkedIn, Vercel, Stripe trends).
- Bio and paragraphs taken directly from CV 2026.
- Photo ratio: 35×45 mm (width:height).

#### 15. First-person voice throughout
- All portfolio texts rewritten in first person.
- Achievement-oriented writing, aligned with CV.

#### 16. Data updated to CV 2026
- Projects count: 5 (Dashboard Enterprise, Portfolio, CNE Figma, Unified Project, Invoice Manager).
- Exploratory skills: AWS, Docker, GitHub Actions, Flutter/Dart, GraphQL, JWT, Redis, Jest/Vitest, etc.

#### 17. Repository documents updated
- `CHANGELOG.md`, `README.md`, `LICENSE`, `SECURITY.md` and wiki (`docs/`) updated to v7.5.0.
- Bilingual ES/EN format in all documents.

---

**Daniel Fernando Castillo Mera** · danielfcastillom@gmail.com · https://danielcastillo-portfolio.vercel.app
