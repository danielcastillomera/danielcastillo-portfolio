# Changelog — Daniel Fernando Castillo Mera Portfolio

---

## Español (México)

Todos los cambios notables se documentan en este archivo.
Este proyecto usa [Semantic Versioning](https://semver.org/).

---

### v6.0.0 — Foto de perfil, OG Image, Logos oficiales, Favicon, "Ir al final", Idioma desplegable, Cookies mejoradas

#### 1. Foto de perfil
- La imagen `/public/profile.png` fue reemplazada con `Foto_actualV2.png`
- Protección drag/contextmenu extendida a todos los `<img>` del sitio

#### 2. Favicon
- Generado desde la foto de perfil en los tamaños: 16×16, 32×32, 48×48, 180×180, 192×192, 512×512
- `favicon.ico` para compatibilidad máxima
- `<link rel="apple-touch-icon">` para iOS

#### 3. Vista previa social (OG Image / WhatsApp / Telegram)
- `metadataBase` configurado en `layout.tsx`
- `og:image` → `/public/og-image.png` (1200×630)
- `twitter:card: summary_large_image`
- Imagen generada con: foto de perfil, nombre, rol, tecnologías y URL

#### 4. Botón "Ir al final"
- Restaurado: aparece en bottom-center cuando el usuario está en la parte superior
- "Ir al inicio" continúa en bottom-center cuando el usuario hace scroll

#### 5. Logos oficiales en Tech Grid
- **Zod**: usa `/icons/zod.png` (logo oficial subido por el usuario)
- **Overleaf**: usa `/icons/overleaf.svg` (logo oficial subido por el usuario)
- **Meta Ads**: usa `/icons/meta.svg` (logo oficial Meta Platforms)
- **TikTok Ads**: usa `/icons/tiktok.png` (logo oficial TikTok)
- **Power BI**: eliminado de la categoría Diseño & Marketing

#### 6. Iconos de Habilidades Técnicas
- Cada categoría usa un ícono SVG contextual (no logos de tecnologías específicas)
- Frontend: ícono de código `</>`
- Backend: ícono de llave inglesa/herramienta
- Base de Datos: ícono de base de datos cilíndrica
- Herramientas: ícono de engranaje/herramientas
- Community Manager: ícono de compartir/redes sociales
- UI/UX: ícono de pincel/diseño

#### 7. Certificaciones
- Eliminado duplicado de CS50x

#### 8. Protección de imágenes
- `contextmenu` y `dragstart` bloqueados para todos los `<img>` del sitio

#### 9. Selector de idioma (Language Toggle)
- Nuevo diseño con ícono de globo terráqueo + nombre del idioma + chevron
- Lista desplegable al hover (mouse) y click (táctil)
- Ahora **visible en versión móvil** (era `hidden sm:block`, ahora siempre visible)
- Opciones: 🇪🇨 Español / 🇺🇸 English

#### 10. Cookie Consent mejorado
- Añadido botón **X** para cerrar (rechaza todo)
- Botones reorganizados en columna en móvil, fila en escritorio
- Más compacto y no abusivo visualmente

#### 11. Sección "En Aprendizaje / Exploratorio"
- Añadidos: **ABAP / SAP**, **COBOL**, **Prompt Engineering**
- Logos usando Devicon CDN cuando disponibles
- Estilo consistente con el resto de la página

#### 12. Proyectos - version badge responsive
- El badge de versión (ej: v3.1.0) ahora siempre visible en móvil


#### 13. Experiencia en Ventas, Servicio y Atención al Cliente
- Añadido en `data.ts` como `ADDITIONAL_SKILLS.ventas`
- Visible en sección "Sobre mí" como tarjeta adicional de capacidades
- Añadido en categoría "Community Manager" de Habilidades: Atención al Cliente + Ventas y Servicio
- Bilingüe ES/EN

#### 14. Botones "Ir al final" / "Ir al inicio" — Solo ícono
- Texto eliminado, ahora solo contiene el ícono de flecha dentro de círculo
- Tooltip aparece al pasar el cursor: "Ir al final" / "Ir al inicio"
- Accesible con `title` y `aria-label`
- Se colorea con `accent-500` al hover

#### 15. Wiki completado
- `docs/Home.md`, `docs/Architecture.md`, `docs/I18n.md`, `docs/Deployment.md`, `docs/Accessibility.md`
- Todos bilingüe ES/EN con formato consistente

### Archivos añadidos
- `public/profile.png` (foto actualizada)
- `public/og-image.png` (imagen OG 1200×630)
- `public/favicon.ico`, `favicon-16.png`, `favicon-32.png`, `favicon-48.png`, `favicon-180.png`, `favicon-192.png`, `favicon-512.png`
- `public/icons/zod.png`, `meta.svg`, `tiktok.png`, `overleaf.svg`

### Archivos modificados
- `src/app/layout.tsx` — metadataBase, icons, OG, Twitter cards
- `src/components/language-toggle.tsx` — dropdown con hover, visible en móvil
- `src/components/scroll-buttons.tsx` — "ir al final" restaurado
- `src/components/cookie-consent.tsx` — botón X, botones responsive
- `src/components/tech-grid.tsx` — drag protection en imágenes
- `src/components/skills.tsx` — iconos SVG contextuales, exploratorio mejorado
- `src/components/certifications.tsx` — sin duplicados
- `src/components/projects.tsx` — version badge responsive
- `src/components/navbar.tsx` — LanguageToggle visible siempre
- `src/lib/data.ts` — logos corregidos, Power BI eliminado de design
- `package.json` — versión 6.0.0
- `public/manifest.json` — íconos correctos

---

### v5.0.0 — i18n, Typewriter, Cookie Consent, Certificaciones, Community Manager, UI/UX
*(Ver entradas anteriores)*

### v4.5.0 — Theme Fix, Devicon, Scroll Navigation
*(Ver entradas anteriores)*

### v4.0.0 — Visual Polish, Brand Icons, Theme Contrast
*(Ver entradas anteriores)*

### v3.0.0 — Services, Tech Stack, Auto-Version, Accessibility
*(Ver entradas anteriores)*

### v1.0.0 — Lanzamiento inicial
*(Ver entradas anteriores)*

---

## English (United States)

All notable changes are documented in this file.
This project follows [Semantic Versioning](https://semver.org/).

---

### v6.0.0 — Profile Photo, OG Image, Official Logos, Favicon, "Go to bottom", Dropdown Language, Improved Cookies

#### 1. Profile photo
- `/public/profile.png` replaced with `Foto_actualV2.png`
- Drag/contextmenu protection extended to all `<img>` elements on the site

#### 2. Favicon
- Generated from profile photo in sizes: 16×16, 32×32, 48×48, 180×180, 192×192, 512×512
- `favicon.ico` for maximum browser compatibility
- `<link rel="apple-touch-icon">` for iOS devices

#### 3. Social media preview (OG Image / WhatsApp / Telegram)
- `metadataBase` configured in `layout.tsx`
- `og:image` → `/public/og-image.png` (1200×630)
- `twitter:card: summary_large_image`
- Image generated with: profile photo, name, role, tech stack and URL

#### 4. "Go to bottom" button
- Restored: appears at bottom-center when user is at the top of the page
- "Go to top" continues to appear at bottom-center when user scrolls down

#### 5. Official logos in Tech Grid
- **Zod**: uses `/icons/zod.png` (official logo uploaded by user)
- **Overleaf**: uses `/icons/overleaf.svg` (official logo uploaded by user)
- **Meta Ads**: uses `/icons/meta.svg` (official Meta Platforms logo)
- **TikTok Ads**: uses `/icons/tiktok.png` (official TikTok logo)
- **Power BI**: removed from Design & Marketing category

#### 6. Skills section icons
- Each category uses a contextual SVG icon (not specific technology logos)
- Frontend: code icon `</>`
- Backend: wrench/tool icon
- Database: cylindrical database icon
- Tools: gear/settings icon
- Community Manager: share/social networks icon
- UI/UX: brush/design icon

#### 7. Certifications
- Removed duplicate CS50x entry

#### 8. Image protection
- `contextmenu` and `dragstart` blocked for all `<img>` elements on the site

#### 9. Language selector (Language Toggle)
- New design with globe icon + language name + chevron dropdown indicator
- Dropdown list on hover (mouse) and click (touch)
- Now **visible on mobile** (was `hidden sm:block`, now always visible)
- Options: 🇪🇨 Español / 🇺🇸 English

#### 10. Improved Cookie Consent
- Added **X** close button (rejects all cookies)
- Buttons reorganized in column on mobile, row on desktop
- More compact and less visually intrusive

#### 11. "Learning / Exploratory" section
- Added: **ABAP / SAP**, **COBOL**, **Prompt Engineering**
- Logos from Devicon CDN when available
- Consistent style with the rest of the page

#### 12. Projects — responsive version badge
- Version badge (e.g., v3.1.0) now always visible on mobile


#### 13. Sales, Service & Customer Support Experience
- Added in `data.ts` as `ADDITIONAL_SKILLS.ventas`
- Visible in "About me" section as additional capabilities card
- Added in "Community Manager" skills category: Customer Support + Sales & Service
- Bilingual ES/EN

#### 14. "Go to bottom" / "Go to top" buttons — Icon only
- Text removed, now only contains arrow icon inside circle
- Tooltip appears on hover: "Ir al final" / "Ir al inicio" (or translated)
- Accessible with `title` and `aria-label`
- Colors with `accent-500` on hover

#### 15. Wiki completed
- `docs/Home.md`, `docs/Architecture.md`, `docs/I18n.md`, `docs/Deployment.md`, `docs/Accessibility.md`
- All bilingual ES/EN with consistent format

### Files added
- `public/profile.png` (updated photo)
- `public/og-image.png` (OG image 1200×630)
- `public/favicon.ico`, `favicon-16.png`, `favicon-32.png`, `favicon-48.png`, `favicon-180.png`, `favicon-192.png`, `favicon-512.png`
- `public/icons/zod.png`, `meta.svg`, `tiktok.png`, `overleaf.svg`

### Files modified
- `src/app/layout.tsx` — metadataBase, icons, OG, Twitter cards
- `src/components/language-toggle.tsx` — dropdown on hover, visible on mobile
- `src/components/scroll-buttons.tsx` — "go to bottom" restored
- `src/components/cookie-consent.tsx` — X button, responsive buttons
- `src/components/tech-grid.tsx` — drag protection on images
- `src/components/skills.tsx` — contextual SVG icons, improved exploratory section
- `src/components/certifications.tsx` — no duplicates
- `src/components/projects.tsx` — responsive version badge
- `src/components/navbar.tsx` — LanguageToggle always visible
- `src/lib/data.ts` — corrected logos, Power BI removed from design
- `package.json` — version 6.0.0
- `public/manifest.json` — correct icons

---

### v5.0.0 — i18n, Typewriter, Cookie Consent, Certifications, Community Manager, UI/UX
*(See previous entries)*

### v4.5.0 — Theme Fix, Devicon Icons, Scroll Navigation
*(See previous entries)*

### v4.0.0 — Visual Polish, Brand Icons, Theme Contrast
*(See previous entries)*

### v3.0.0 — Services, Tech Stack, Auto-Version, Accessibility Overhaul
*(See previous entries)*

### v1.0.0 — Initial Release
*(See previous entries)*

---

**Daniel Fernando Castillo Mera** · danielfcastillom@gmail.com · https://danielcastillo-portfolio.vercel.app
