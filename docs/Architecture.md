# Arquitectura / Architecture — v7.5.0

---

## Español (México)

### Stack

| Capa | Tecnología | Versión |
|------|-----------|---------|
| Framework | Next.js | 15.x |
| UI Library | React | 19.x |
| Lenguaje | TypeScript | 5.9 |
| Estilos | Tailwind CSS | 4.x |
| Deployment | Vercel | — |

### Sistema de Colores (CSS Custom Properties)

```css
:root {
  --color-primary-500: #f59e0b;    /* Ámbar — color de marca */
  --color-text-primary: #000000;   /* Texto — modo claro */
  --color-body: #000000;           /* Párrafos — modo claro */
}
.dark {
  --color-text-primary: #f5f6f8;   /* Texto — modo oscuro */
  --color-body: #f5f6f8;           /* Párrafos — modo oscuro */
}
```

### Secciones (orden en page.tsx)
1. Hero — Typewriter + partículas
2. TechMarquee — Marquee de tecnologías
3. AboutMe — Bio CV, primera persona, foto 35:45
4. **Experience** — ★ NUEVO: 3 posiciones laborales
5. Services — Servicios digitales y técnicos
6. TechGrid — Grid de tecnologías con logos
7. Projects — 5 proyectos con visor de estados
8. Skills — 6 categorías + exploratorio
9. Certifications — Visor PDF, sin iconos
10. Contact — 6 canales de contacto

---

## English (United States)

### Color System (CSS Custom Properties)

```css
:root {
  --color-primary-500: #f59e0b;    /* Amber — brand color */
  --color-text-primary: #000000;   /* Text — light mode */
  --color-body: #000000;           /* Paragraphs — light mode */
}
.dark {
  --color-text-primary: #f5f6f8;   /* Text — dark mode */
  --color-body: #f5f6f8;           /* Paragraphs — dark mode */
}
```

**Daniel Fernando Castillo Mera** · All rights reserved.
