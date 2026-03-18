# Daniel Fernando Castillo Mera — Portfolio

Portafolio profesional y página de servicios.
Junior Full Stack Engineer / Developer · Universidad de Guayaquil · Ingeniería en Software.

## Stack Tecnológico

| Capa | Tecnología |
|------|-----------|
| Framework | Next.js 15, React 19 |
| Lenguaje | TypeScript 5.9 |
| Estilos | Tailwind CSS 4 |
| Deployment | Vercel + GitHub |
| Fuentes | Google Fonts (DM Sans, JetBrains Mono) |
| Iconos | Lucide React, Simple Icons CDN |

## Características

- **100% responsive** — Mobile-first, adaptable a cualquier dispositivo
- **WCAG 2.1 / 2.2** — Skip link, ARIA roles, prefers-reduced-motion, focus visible, high contrast, widget de accesibilidad flotante
- **Cross-browser** — Chrome 80+, Firefox 78+, Safari 14+, Edge 80+
- **SEO optimizado** — Open Graph, JSON-LD structured data, meta tags, sitemap
- **Seguridad** — CSP, HSTS, X-Frame-Options, Referrer-Policy, Permissions-Policy
- **Tema claro/oscuro/sistema** — View Transitions API, respeta preferencia del navegador
- **Protección de imágenes** — Prevención de clic derecho, arrastrar, copiar
- **Auto-versión** — La versión de Dashboard Enterprise se actualiza automáticamente desde GitHub

## Secciones

1. **Hero** — Foto de perfil con glow, badge de disponibilidad, CTAs
2. **Tech Marquee** — Banner infinito de tecnologías
3. **Sobre mí** — Bio, educación, stats, redes sociales, edad, nacionalidad
4. **Servicios** — Soluciones Digitales (10 servicios) + Soluciones Técnicas (5 servicios)
5. **Stack Tecnológico** — Iconos vectoriales con nombre y versión
6. **Proyectos** — Dashboard Enterprise v3.1.0 (destacado) + Proyecto Unificado POE
7. **Habilidades** — Barras de progreso animadas por categoría
8. **Contacto** — WhatsApp, LinkedIn, GitHub, Instagram, Facebook, Email
9. **Footer** — Copyright, licencia, redes sociales
10. **WhatsApp Flotante** — Botón fijo con enlace directo
11. **Widget Accesibilidad** — Tamaño texto, contraste, animaciones, enlaces, cursor

## Instalación

```bash
git clone https://github.com/danielcastillomera/danielcastillo-portfolio.git
cd danielcastillo-portfolio
npm install
npm run dev
```

## Despliegue en Vercel

```bash
git add .
git commit -m "v3.0.0"
git push origin main
```

Vercel detecta automáticamente el proyecto Next.js y lo despliega.
No se requieren variables de entorno.

## Estructura del Proyecto

```
src/
├── app/
│   ├── globals.css          # Design system, temas, animaciones
│   ├── layout.tsx           # Root layout, SEO, JSON-LD
│   ├── page.tsx             # Composición de secciones
│   ├── not-found.tsx        # Página 404
│   └── sitemap.ts           # Sitemap dinámico
├── components/
│   ├── navbar.tsx            # Navegación sticky con foto
│   ├── hero.tsx              # Sección principal con partículas
│   ├── tech-marquee.tsx      # Banner de tecnologías
│   ├── about-me.tsx          # Sobre mí con perfil y stats
│   ├── services.tsx          # Servicios profesionales
│   ├── tech-grid.tsx         # Grid de tecnologías con iconos
│   ├── projects.tsx          # Proyectos con auto-versión
│   ├── skills.tsx            # Habilidades con barras
│   ├── contact.tsx           # Contacto y redes sociales
│   ├── footer.tsx            # Pie de página
│   ├── icons.tsx             # SVGs de redes sociales
│   ├── protected-image.tsx   # Componente de imagen protegida
│   ├── theme-toggle.tsx      # Botón de cambio de tema
│   ├── whatsapp-float.tsx    # Botón flotante WhatsApp
│   └── accessibility-widget.tsx # Widget WCAG
└── lib/
    ├── data.ts               # Datos centralizados
    ├── theme-provider.tsx     # Proveedor de tema
    └── use-reveal.ts         # Hook de animación scroll
```

## Licencia

**Propiedad intelectual de Daniel Fernando Castillo Mera.**

Este software es privado y confidencial. Queda estrictamente prohibida la clonación, copia,
distribución o uso no autorizado de este proyecto y de todos los proyectos del autor
sin previo permiso escrito del titular.
Ver archivo [LICENSE](./LICENSE) para términos completos.

## Autor

**Daniel Fernando Castillo Mera**
- GitHub: [@danielcastillomera](https://github.com/danielcastillomera)
- LinkedIn: [Daniel Fernando Castillo Mera](https://www.linkedin.com/in/daniel-fernando-castillo-mera-461b8420a)
- WhatsApp: [+593 98 107 6185](https://wa.me/593981076185)
- Email: danielfcastillom@gmail.com
