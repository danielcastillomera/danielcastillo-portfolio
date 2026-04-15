# Daniel Fernando Castillo Mera — Portfolio v5.0.0

Portafolio profesional y página de servicios.
**Junior Full Stack Engineer / Developer | Community Manager** · Universidad de Guayaquil · Ingeniería en Software.

🌐 [danielcastillo-portfolio.vercel.app](https://danielcastillo-portfolio.vercel.app)

---

## Stack Tecnológico

| Capa | Tecnología |
|------|-----------|
| Framework | Next.js 15, React 19 |
| Lenguaje | TypeScript 5.9 |
| Estilos | Tailwind CSS 4 |
| Deployment | Vercel + GitHub |
| Fuentes | Google Fonts (DM Sans, JetBrains Mono) |
| Iconos | Devicon CDN, Lucide React |

---

## Características

- **i18n ES / EN** — Detección automática de idioma del navegador/dispositivo. Toggle en navbar.
- **Typewriter Effect** — Titular animado con 7 frases rotativas, efecto máquina de escribir realista.
- **Cookie Consent GDPR** — Banner no intrusivo en bottom-center con 3 niveles de control.
- **100% Responsive** — Mobile-first, adaptable a cualquier dispositivo.
- **WCAG 2.1 / 2.2** — Skip link, ARIA roles, prefers-reduced-motion, focus visible, high contrast, widget accesibilidad.
- **Cross-browser** — Chrome 80+, Firefox 78+, Safari 14+, Edge 80+
- **SEO optimizado** — Open Graph, JSON-LD structured data, meta tags, sitemap, alternate locale.
- **Seguridad** — CSP, HSTS, X-Frame-Options, Referrer-Policy, Permissions-Policy.
- **Tema claro/oscuro/sistema** — View Transitions API.
- **Protección de imágenes** — Prevención de clic derecho, arrastrar, copiar.
- **Auto-versión Dashboard** — Versión actualizada automáticamente desde GitHub API.
- **PWA Ready** — Web App Manifest para instalación en dispositivos.

---

## Secciones

1. **Hero** — Foto de perfil, badge disponibilidad, CTA, **Typewriter Effect**
2. **Tech Marquee** — Banner infinito de tecnologías
3. **Sobre mí** — Bio, educación, stats, Community Manager, UI/UX, redes sociales
4. **Servicios** — 10 soluciones digitales + 5 soluciones técnicas
5. **Stack Tecnológico** — Logos oficiales con versiones (Devicon CDN)
6. **Proyectos** — Dashboard Enterprise (destacado) + Proyecto Unificado POE + Invoice Manager
7. **Habilidades** — 6 categorías: Frontend, Backend, BD & Cloud, Herramientas, Community Manager, UI/UX
8. **Certificaciones** — CS50x Harvard, UEES, Épico, P4H Biorobotics
9. **Contacto** — 6 canales de contacto + WhatsApp CTA
10. **Footer** — Copyright, licencia, compliance badges
11. **WhatsApp Flotante** — Botón fijo bottom-right
12. **Widget Accesibilidad** — Fuente, contraste, animaciones, enlaces, cursor (bottom-left)
13. **"Ir al inicio"** — Botón bottom-center cuando el usuario hace scroll
14. **Cookie Consent** — Banner GDPR bottom-center con 1.5s delay

---

## Instalación

```bash
git clone https://github.com/danielcastillomera/danielcastillo-portfolio.git
cd danielcastillo-portfolio
npm install
npm run dev
```

## Scripts

```bash
npm run dev        # Desarrollo con Turbopack
npm run build      # Build de producción
npm run start      # Servidor de producción
npm run lint       # ESLint
npm run type-check # TypeScript check sin emitir
```

## Despliegue en Vercel

```bash
git add .
git commit -m "v5.0.0"
git push origin main
```

Vercel detecta automáticamente Next.js. No se requieren variables de entorno.

---

## Estructura del Proyecto

```
src/
├── app/
│   ├── globals.css             # Design system, temas, animaciones, blink-cursor
│   ├── layout.tsx              # Root layout, SEO, JSON-LD, I18nProvider
│   ├── page.tsx                # Composición de secciones
│   ├── not-found.tsx           # 404 bilingual
│   └── sitemap.ts              # Sitemap dinámico
├── components/
│   ├── navbar.tsx              # Navegación + LanguageToggle
│   ├── hero.tsx                # Typewriter + partículas
│   ├── tech-marquee.tsx        # Banner tecnologías
│   ├── about-me.tsx            # Bio + Community Manager + UI/UX
│   ├── services.tsx            # 15 servicios bilingual
│   ├── tech-grid.tsx           # Grid logos oficiales Devicon
│   ├── projects.tsx            # 3 proyectos bilingual
│   ├── skills.tsx              # 6 categorías + exploratorio
│   ├── certifications.tsx      # 4 certificados/talleres
│   ├── contact.tsx             # 6 canales de contacto
│   ├── footer.tsx              # Compliance badges
│   ├── cookie-consent.tsx      # GDPR banner
│   ├── language-toggle.tsx     # ES/EN toggle
│   ├── icons.tsx               # SVG social icons
│   ├── protected-image.tsx     # Imagen protegida
│   ├── theme-toggle.tsx        # Cambio de tema
│   ├── whatsapp-float.tsx      # Botón flotante WhatsApp
│   ├── accessibility-widget.tsx # WCAG widget
│   └── scroll-buttons.tsx      # Bottom-center "ir al inicio"
└── lib/
    ├── data.ts                 # Datos centralizados bilingüe
    ├── i18n.ts                 # Traducciones ES/EN
    ├── i18n-provider.tsx       # React context i18n
    ├── theme-provider.tsx      # Proveedor de tema
    └── use-reveal.ts           # Hook IntersectionObserver
```

---

## Idiomas Soportados

| Código | Idioma | Detección |
|--------|--------|-----------|
| `es` | Español (default) | `navigator.language` starts with `es` |
| `en` | English | `navigator.language` starts with `en` |

La preferencia del usuario se guarda en `localStorage` bajo la clave `portfolio-locale`.

---

## Cumplimiento de Estándares 2026

| Estándar | Estado |
|----------|--------|
| WCAG 2.2 Nivel A–AAA | ✅ |
| GDPR Cookie Consent | ✅ |
| PWA Web App Manifest | ✅ |
| SEO / Open Graph | ✅ |
| JSON-LD Person Schema | ✅ |
| CSP / HSTS / X-Frame-Options | ✅ |
| i18n ES/EN | ✅ |
| Responsive Mobile-First | ✅ |
| prefers-reduced-motion | ✅ |
| forced-colors (high contrast) | ✅ |

---

## Licencia

**Propiedad intelectual de Daniel Fernando Castillo Mera.**

Este software es privado y confidencial. Queda estrictamente prohibida la clonación, copia, distribución o uso no autorizado de este proyecto sin previo permiso escrito del titular. Ver [LICENSE](./LICENSE) para términos completos.

---

## Autor

**Daniel Fernando Castillo Mera**
- 🌐 Portfolio: [danielcastillo-portfolio.vercel.app](https://danielcastillo-portfolio.vercel.app)
- 💼 LinkedIn: [daniel-fernando-castillo-mera](https://www.linkedin.com/in/daniel-fernando-castillo-mera-461b8420a)
- 🐙 GitHub: [@danielcastillomera](https://github.com/danielcastillomera)
- 📱 WhatsApp: [+593 98 107 6185](https://wa.me/593981076185)
- 📧 Email: danielfcastillom@gmail.com
