# Arquitectura

## Stack Tecnológico

| Capa | Tecnología | Versión |
|------|-----------|---------|
| Framework | Next.js | 15.x |
| UI Library | React | 19.x |
| Lenguaje | TypeScript | 5.9 |
| Estilos | Tailwind CSS | 4.x |
| Iconos UI | Lucide React | 0.574+ |
| Iconos Tech | Simple Icons CDN | Latest |
| Deploy | Vercel | — |

## Estructura de Archivos

El proyecto sigue la estructura estándar de Next.js App Router:

- `src/app/` — Páginas, layout global, estilos, sitemap
- `src/components/` — Componentes de UI (15 componentes)
- `src/lib/` — Datos centralizados, hooks, providers
- `public/` — Assets estáticos (imagen de perfil, robots.txt)
- `docs/` — Documentación wiki

## Patrones de Diseño

### Theme System
El sistema de temas utiliza tres modos: claro, oscuro y sistema. El modo sistema respeta la preferencia del navegador/dispositivo (`prefers-color-scheme`). Los cambios de tema se animan con la View Transitions API (`document.startViewTransition`). El tema se persiste en localStorage.

### Image Protection
El componente `ProtectedImage` implementa múltiples capas de protección: CSS (`user-select: none`, `pointer-events: none`, `-webkit-touch-callout: none`), overlay transparente `::after`, y event listeners para `contextmenu` y `dragstart`.

### Scroll Reveal
El hook `useReveal` usa IntersectionObserver para activar animaciones al hacer scroll. Respeta `prefers-reduced-motion`.

### Auto-Version Fetch
El componente de proyectos obtiene automáticamente la versión del Dashboard Enterprise desde el `package.json` del repositorio en GitHub, usando `fetch()` al montar el componente.

## Seguridad

Headers de seguridad configurados en `next.config.ts`:
- Strict-Transport-Security (HSTS)
- Content-Security-Policy (CSP)
- X-Frame-Options
- X-Content-Type-Options
- X-XSS-Protection
- Referrer-Policy
- Permissions-Policy

---

Daniel Fernando Castillo Mera
