# Changelog

---
**Idioma / Language:** Español (Latinoamérica) / English (United States)

---

All notable changes to this project will be documented in this file.  
Este archivo documenta todos los cambios notables de este proyecto.  
This project adheres to [Semantic Versioning](https://semver.org/).

---

## v5.0.0 — i18n (ES/EN) · Typewriter · Cookie Consent · Certificaciones · Community Manager · UI/UX · Bug Fixes

### 🌐 Internacionalización / Internationalization (i18n ES/EN)
- Soporte completo bilingüe ES/EN con detección automática de `navigator.language` / Full bilingual ES/EN support with automatic `navigator.language` detection
- Preferencia guardada en `localStorage` / Preference saved in `localStorage`
- Toggle de idioma en navbar (escritorio y móvil) con emoji de bandera / Language toggle in navbar (desktop + mobile) with flag emoji
- `<html lang>` actualizado dinámicamente / `<html lang>` updated dynamically
- Archivos: `src/lib/i18n.ts`, `src/lib/i18n-provider.tsx`, `src/components/language-toggle.tsx`

### ⌨️ Efecto Typewriter / Typewriter Effect (Hero)
- 7 frases rotativas alineadas con el CV / 7 rotating phrases aligned with CV
- Escritura carácter a carácter con jitter realista (+/-15ms) / Character-by-character typing with realistic jitter
- Pausa → borrar → siguiente frase / Pause → delete → next phrase loop
- Cursor parpadeante CSS `blink-cursor` / Blinking cursor via CSS `blink-cursor` keyframe
- Respeta `prefers-reduced-motion` / Fully respects `prefers-reduced-motion`
- Accesible con `aria-live="polite"` y `aria-atomic="true"`
- Altura mínima en `<h1>` para evitar CLS / Minimum height on `<h1>` to prevent CLS

### 🍪 Cookie Consent GDPR
- Banner no intrusivo bottom-center con delay 1.5s / Non-intrusive bottom-center banner with 1.5s delay
- 3 categorías: Esencial / Analytics / Marketing
- 3 acciones: Aceptar todo / Rechazar todo / Personalizar
- Preferencia en `localStorage` / Preference stored in `localStorage`
- Accesible `role="dialog"` / Bilingual ES/EN

### 📜 Sección Certificaciones / Certifications Section
- CS50x Harvard, UEES AI Talk, Épico PC Workshop, P4H Biorobotics Webinar
- Badges de estado: En curso (pulse animado) / Activo / Completado
- Completamente bilingüe / Fully bilingual

### 👨‍💼 Community Manager & UI/UX
- Rol completo: "Junior Full Stack Engineer / Developer | Community Manager"
- 2 nuevas categorías en Skills: Community Manager & Marketing Digital + Diseño UI/UX
- Tags de rol en About Me: Community Manager, UI/UX Designer, Meta Business Suite, Figma
- Datos actualizados con C#, Oracle, SQL Server, experiencia laboral

### 🔧 Bug Fixes
1. **"Ir al final"**: Botón flotante que tapaba la foto eliminado / Floating button removed from hero
2. **"Ir al inicio"**: Reposicionado a bottom-center (no solapaba WhatsApp) / Repositioned to bottom-center
3. **Zod icon**: SVG inline con fondo azul oficial #3E67B1 / Custom inline SVG with official blue
4. **Tech grid logos**: Devicon CDN colores oficiales, inversión en dark mode / Official brand colors, dark mode inversion
5. **Skills icons**: Logos Devicon con fondo sólido en contenedor blanco / Solid-background Devicon logos
6. **TypeScript error**: Fix `TranslationsType` para Vercel build / Fixed for Vercel deployment

### ✅ Nuevos estándares 2026 / New 2026 Standards
- PWA Manifest (`/public/manifest.json`)
- JSON-LD actualizado con `birthDate`, `address`, `email`
- `alternateLocale: 'en_US'` en Open Graph
- Badges de compliance en footer: WCAG 2.2, PWA, SEO, GDPR, CSP/HSTS, i18n ES/EN
- Print media query
- Script `type-check` en `package.json`
- `aria-live="polite"` en typewriter

### Archivos añadidos / Files Added
- `src/lib/i18n.ts`, `src/lib/i18n-provider.tsx`, `src/components/language-toggle.tsx`
- `src/components/cookie-consent.tsx`, `src/components/certifications.tsx`
- `public/manifest.json`

### Archivos modificados / Files Modified
- `src/lib/data.ts` · `src/app/layout.tsx` · `src/app/page.tsx` · `src/app/globals.css`
- `src/components/hero.tsx` · `src/components/scroll-buttons.tsx` · `src/components/navbar.tsx`
- `src/components/about-me.tsx` · `src/components/skills.tsx` · `src/components/tech-grid.tsx`
- `src/components/services.tsx` · `src/components/projects.tsx` · `src/components/contact.tsx`
- `src/components/footer.tsx` · `src/components/accessibility-widget.tsx` · `src/components/tech-marquee.tsx`
- `package.json` · `next.config.ts` · `CHANGELOG.md` · `README.md` · `SECURITY.md` · `LICENSE`

---

## v4.5.0 — Theme System Fix, Devicon Icons, Scroll Navigation, UX Polish
- Fix crítico `@custom-variant dark` para Tailwind CSS v4
- Iconos Devicon CDN con colores de marca
- Botones de scroll "Ir al final" / "Ir al inicio"
- Fix hamburger X en móvil, footer contraste

## v4.0.0 — Visual Polish, Brand Icons, Theme Contrast, Mobile UX
- Icono accesibilidad estándar universal
- Texto contraste corregido claro/oscuro
- Iconos con colores de marca originales
- Scroll indicator móvil (swipe up)

## v3.0.0 — Services, Tech Stack, Auto-Version, Accessibility Overhaul
- Sección Servicios (10 digitales + 5 técnicas)
- Tech Grid con iconos SVG CDN
- Auto-versión Dashboard desde GitHub API
- Widget accesibilidad WCAG 2.1/2.2

## v1.0.0 — Initial Release
- Hero con partículas, foto perfil, CTA
- Tech Marquee, About Me, Projects, Skills, Contact, Footer
- Sistema tema claro/oscuro/sistema (View Transitions API)
- SEO, JSON-LD, CSP/HSTS, protección de imágenes

---

**Daniel Fernando Castillo Mera** · danielfcastillom@gmail.com · https://danielcastillo-portfolio.vercel.app
