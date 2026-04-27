# Accesibilidad / Accessibility

> `danielcastillo-portfolio` v7.6.3 · WCAG 2.1 Level AA

---

## Español (México)

### Estándar implementado

El portafolio cumple con **WCAG 2.1 Level AA** y las pautas de accesibilidad de **ARIA 1.2**.

### Widget de accesibilidad

Ubicado en la esquina inferior izquierda de la pantalla. Persiste configuración en `localStorage('a11y-settings')`.

| Función | Implementación técnica |
|---------|----------------------|
| Tamaño de fuente | `document.documentElement.style.fontSize` → 100% / 112.5% / 125% |
| Alto contraste | `data-high-contrast` attribute en `<html>` |
| Reducción de movimiento | Clase `a11y-reduced-motion` en `<html>` |
| Resaltado de enlaces | Clase `a11y-highlight-links` en `<html>` |
| Cursor grande | Clase `a11y-large-cursor` en `<html>` |

**Icono:** SVG adjunto por el autor, renderizado via `<Image>` de Next.js sin deformación.

### Selección de texto (v7.6.3)

Desde v7.6.3, **todo el texto es completamente seleccionable** en PC y móvil.
Solo las imágenes (`img`, `.protected-image`) y los iconos tienen `user-select: none` y `pointer-events: none`.

**Justificación técnica:**
- WCAG 1.3.4 (Orientación): bloquear interacciones de usuario sin necesidad funcional viola las pautas.
- Bloquear la selección de texto afecta a lectores de pantalla, usuarios con dislexia y flujos de trabajo de copia/pegado.
- Los navegadores modernos ignoran `user-select: none` en algunos contextos de accesibilidad.

### Navegación por teclado

- **Skip link:** `<a href="#main-content">` visible al recibir foco (clase `.skip-link`).
- **Focus visible:** contorno de 2px en color `--color-primary-400` via `:focus-visible`.
- **Escape:** cierra el menú móvil y el panel del widget de accesibilidad.
- **ARIA:** roles `banner`, `navigation`, `main`, `dialog`, `switch`, `list` aplicados correctamente.

### Respeto a preferencias del sistema

- `prefers-reduced-motion`: desactiva animaciones de partículas y transiciones en `hero.tsx`.
- `prefers-color-scheme`: detecta automáticamente el tema claro/oscuro en el primer acceso.

---

---

## English (United States)

### Implemented Standard

The portfolio complies with **WCAG 2.1 Level AA** and **ARIA 1.2** accessibility guidelines.

### Accessibility Widget

Located in the bottom-left corner. Settings persisted in `localStorage('a11y-settings')`.

| Feature | Technical implementation |
|---------|------------------------|
| Font size | `document.documentElement.style.fontSize` → 100% / 112.5% / 125% |
| High contrast | `data-high-contrast` attribute on `<html>` |
| Reduced motion | `a11y-reduced-motion` class on `<html>` |
| Link highlighting | `a11y-highlight-links` class on `<html>` |
| Large cursor | `a11y-large-cursor` class on `<html>` |

### Text Selection (v7.6.3)

From v7.6.3, **all text is fully selectable** on PC and mobile.
Only images (`img`, `.protected-image`) and icons have `user-select: none` and `pointer-events: none`.

**Technical justification:**
- WCAG 1.3.4: blocking user interactions without functional need violates guidelines.
- Blocking text selection affects screen readers, dyslexic users and copy/paste workflows.
- Modern browsers ignore `user-select: none` in some accessibility contexts.

### Keyboard Navigation

- **Skip link:** `<a href="#main-content">` visible on focus (`.skip-link` class).
- **Focus visible:** 2px outline in `--color-primary-400` via `:focus-visible`.
- **Escape:** closes mobile menu and accessibility widget panel.
- **ARIA:** `banner`, `navigation`, `main`, `dialog`, `switch`, `list` roles applied correctly.
