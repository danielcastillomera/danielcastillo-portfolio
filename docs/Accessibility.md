# Accesibilidad

Este proyecto cumple con las pautas WCAG 2.1 y WCAG 2.2, apuntando a un nivel de conformidad mínimo Nivel A y máximo Nivel AAA.

## Funcionalidades de Accesibilidad

### Skip Link (Nivel A)
Enlace "Saltar al contenido principal" visible al hacer focus con Tab. Permite a usuarios de teclado y lectores de pantalla saltar la navegación.

### Widget de Accesibilidad Flotante
Botón en la esquina inferior izquierda con el ícono universal de accesibilidad. Al activarlo, abre un panel con 5 opciones:

| Opción | Descripción | WCAG |
|--------|-------------|------|
| Tamaño de fuente | 3 niveles: Normal (100%), Grande (112.5%), Extra grande (125%) | 1.4.4 (AA) |
| Alto contraste | Aumenta el contraste visual con filter: contrast(1.3) | 1.4.3 (AA), 1.4.6 (AAA) |
| Reducir animaciones | Desactiva todas las animaciones y transiciones | 2.3.3 (AAA) |
| Resaltar enlaces | Subraya y resalta todos los enlaces con outline amarillo | 2.4.7 (AA) |
| Cursor grande | Aumenta el tamaño del cursor del mouse | 2.5 |

Todas las preferencias se guardan en `localStorage` y sobreviven al cerrar el navegador.

### Soporte de Teclado
- Tab navigation en todos los elementos interactivos
- Escape cierra menú móvil y widget de accesibilidad
- `aria-expanded`, `aria-controls`, `aria-current` en navegación
- `role="switch"` con `aria-checked` en toggles del widget

### Semántica HTML
- `<header role="banner">` — Navegación principal
- `<main role="main">` — Contenido principal
- `<footer role="contentinfo">` — Pie de página
- `<nav aria-label>` — Navegaciones con etiquetas descriptivas
- `<section aria-labelledby>` — Secciones con headings asociados

### Reduced Motion
```css
@media (prefers-reduced-motion: reduce) {
  * { animation-duration: 0.01ms !important; transition-duration: 0.01ms !important; }
}
```
El hook `useReveal` también respeta esta preferencia, mostrando elementos sin animación.

### High Contrast Mode
```css
@media (forced-colors: active) {
  .text-gradient { -webkit-text-fill-color: CanvasText; }
  .glass { border: 2px solid CanvasText; }
}
```

### Focus Visible
Todos los elementos interactivos muestran un outline de 2px amber al recibir focus por teclado.

### Contraste de Color
- Modo claro: texto `#111827` sobre fondo `#ffffff` — ratio 15.4:1 (AAA)
- Modo oscuro: texto `#e5e7eb` sobre fondo `#0a0e1a` — ratio 13.2:1 (AAA)

## Testing

Para verificar la accesibilidad:
1. Chrome DevTools > Lighthouse > Accessibility
2. axe DevTools extension
3. Navegación completa solo con teclado (Tab, Enter, Escape)
4. Screen reader testing (NVDA, VoiceOver)

---

Daniel Fernando Castillo Mera
