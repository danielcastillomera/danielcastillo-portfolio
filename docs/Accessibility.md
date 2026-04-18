# Accesibilidad / Accessibility — WCAG 2.2

---

## Español (México)

Este proyecto cumple con WCAG 2.1 y WCAG 2.2, nivel mínimo A y máximo AAA.

### Widget de Accesibilidad
Botón en esquina inferior izquierda (ícono universal de accesibilidad):

| Opción | WCAG |
|--------|------|
| Tamaño de fuente (3 niveles) | 1.4.4 (AA) |
| Alto contraste | 1.4.3 (AA), 1.4.6 (AAA) |
| Reducir animaciones | 2.3.3 (AAA) |
| Resaltar enlaces | 2.4.7 (AA) |
| Cursor grande | 2.5 |

### Protección de Imágenes
Todos los `<img>`, SVG y logos tienen:
- `draggable={false}`
- `user-select: none` (CSS global)
- `pointer-events: none` (CSS global)
- `contextmenu` y `dragstart` bloqueados via JavaScript

---

## English (United States)

This project meets WCAG 2.1 and WCAG 2.2, minimum level A and maximum AAA.

### Image Protection
All `<img>`, SVG and logos have:
- `draggable={false}`
- `user-select: none` (global CSS)
- `pointer-events: none` (global CSS)
- `contextmenu` and `dragstart` blocked via JavaScript

**Daniel Fernando Castillo Mera** · All rights reserved.
