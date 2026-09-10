# Registro de Cambios / Changelog

> Todos los cambios notables de este proyecto se documentan en este archivo.
> El formato sigue [Keep a Changelog](https://keepachangelog.com/es/1.0.0/) y el versionado sigue [Semantic Versioning](https://semver.org/lang/es/).

<div align="center">
  <i>Cambiar de idioma / Change language:</i> <a href="#español-méxico">Español (México)</a> | <a href="#english-united-states">English (United States)</a>
</div>

---

## Español (México)

### v9.1.1 - Hotfixes: causa raíz de animaciones GSAP prematuras, badges del footer reparados, encuadre de foto en el Hero

#### Corregido — Crítico

- **`use-reveal.ts` — causa raíz de "elementos ya visibles"**: se identificó y eliminó el temporizador de seguridad que forzaba `opacity: 1` de forma incondicional a los 650ms de cada sección, independientemente de si el usuario había llegado a esa parte de la página. Esto hacía que casi todo el contenido apareciera casi de inmediato tras la carga, mostrando solo un pequeño salto en lugar de una animación real disparada por scroll. Reescrito con `gsap.fromTo()`: el nodo arranca en `opacity: 0, y: 50` y GSAP ScrollTrigger calcula su estado real (visible u oculto) al montar, sin timers artificiales. `toggleActions: 'play reverse play reverse'` se mantiene sin condición: toda sección se desliza hacia arriba al bajar el scroll y se revierte al subir.
- **Icono WCAG 2.2 del footer**: reemplazado por el SVG de accesibilidad provisto, con `fill="currentColor"` y clases `text-black dark:text-white` — negro en modo claro, blanco en modo oscuro.
- **Icono PWA Ready del footer**: reemplazado por el ícono de icons8 con la clase `dark:invert`, ajustado a 12×12px para alinear con el resto de insignias del array.

#### Modificado

- **Foto de perfil del Hero**: corregido el encuadre horizontal (`object-[65%_0%]`) para centrar el rostro dentro del marco circular — antes aparecía ligeramente desplazado hacia la izquierda.

---

### v9.1.0 - Fix crítico de botones, logos reales de certificaciones, GSAP bidireccional, eliminación del Preloader, limpieza profunda de código muerto

#### Corregido — Crítico

- **Botones inoperantes en PC** (WhatsApp, "Ver credencial", "Ver documento"): eliminada por completo la ofuscación en Base64 (`handleSecureRedirect` / `security.ts`). Reemplazada por enlaces `<a target="_blank" rel="noopener noreferrer">` tradicionales en `whatsapp-float.tsx`, `contact.tsx`, `footer.tsx` y `certifications.tsx`. Prioridad: funcionamiento garantizado al 100% en todos los dispositivos, sin dependencia de hidratación de JavaScript.
- **Preloader eliminado**: quitados `preloader.tsx` y `preload-context.tsx` y toda referencia a ellos en `layout.tsx` y `smooth-scroll.tsx`. La página ya no bloquea su vista inicial con una pantalla de carga artificial.

#### Añadido

- **Logos reales de certificaciones**: Anthropic Education, VMEdu/SCRUMstudy, Microsoft, AWS y HarvardX integrados como imágenes en `/public/certs-logos/`, reemplazando el icono genérico de "escudo" tanto en las medallas del Hero como en las tarjetas de la sección Certificaciones.
- **GSAP ScrollTrigger bidireccional**: `useReveal` ahora anima con `toggleActions: 'play reverse play reverse'` por defecto — las secciones se deslizan hacia arriba al bajar el scroll y hacia abajo al subir, en todos dispositivos.
- **Entrada del Hero y del marquee**: animación `fade-in-up` disparada al cargar la página, sin depender del scroll.
- **Botón "Ver"** con icono de ojo (no emoji) en Dashboard Enterprise, POSTS-COMMENTS-MANAGER y Portafolio, enlazando a sus URLs de producción reales.

#### Modificado

- **Emisor corregido**: "Building with the Claude API" ahora indica "Anthropic Education" como entidad emisora.
- **Header**: nombre partido en dos líneas ("Daniel Fernando" / "Castillo Mera").
- **Selector de idioma**: subrayado ámbar (`#F59E0B`) al pasar el cursor sobre el idioma no seleccionado.
- **Footer**: copyright con año único dinámico (`© {añoActual}`); insignias (WCAG 2.2, PWA, SEO, GDPR, CSP/HSTS, i18n) reescritas con SVG inline — se corrigió una mezcla accidental de emojis pasados como `src` de imagen que rompía su renderizado.
- **Hero**: posición de la foto de perfil ajustada a `object-top` para centrar el rostro correctamente; eliminado el párrafo largo de subtítulo bajo el nombre.
- **Sección "Sobre mí"**: lista "Lo que hago" reescrita con el listado exacto solicitado.
- **Proyectos**: eliminado el truncado "+N" de etiquetas de stack tecnológico — se muestran todas con `flex-wrap`.
- **Logros y resultados**: eliminado el ítem de proyecto universitario obsoleto; los 4 contadores numéricos ahora inician en 1 y su animación dura 3.2s (antes 1.6s desde 0).

#### Eliminado

- **Componente `skills.tsx`** y las secciones "Mis capacidades — Habilidades técnicas" y "En Aprendizaje / Exploratorio" en su totalidad.
- **Código muerto en `data.ts`**: `SKILL_CATEGORIES`, `EXPLORATORY_SKILLS`, `ADDITIONAL_SKILLS` (sección de Ventas ya inactiva desde v9.0.0).
- **Archivos de certificados obsoletos**: PDFs e imágenes de certificaciones que ya no forman parte de la sección (se conserva únicamente la Carta de Recomendación).
- **`security.ts`**: utilidad de ofuscación Base64 retirada tras confirmarse que priorizar la funcionalidad de los botones era la solución correcta.

---

### v9.0.0 - Refactor mayor: GSAP + Lenis, navegación por acordeón, certificaciones estilo LinkedIn, enlaces ofuscados en Base64, nueva identidad profesional

#### Añadido

- **Lenis**: smooth scroll global (PC y móvil) sincronizado con el ticker de GSAP.
- **GSAP + ScrollTrigger**: motor de animación de entrada ("fade-in-up") integrado en el hook `useReveal`.
- **`PreloadProvider`**: contexto de precarga.
- **Navegación por acordeón/dropdown**: jerarquía completa de 8 categorías principales con subcategorías.
- **Insignias de certificaciones en el Hero**.
- **Contadores numéricos animados**: impulsados por GSAP.
- **Certificaciones estilo LinkedIn**: tarjetas con empresa emisora, fecha de expedición, ID de credencial y botón de verificación.
- **`handleSecureRedirect`**: utilidad de navegación segura (ofuscación).
- **Reglas anti-scraping**: `user-select: none` y `user-drag: none`.
- **Logo institucional**: Universidad de Guayaquil optimizado.

#### Modificado

- **Identidad profesional**: título actualizado a "Full Stack Software Engineer | AI-Assisted Developer".
- **Selector de idioma**: simplificado a un interruptor ES/EN.
- **Sección "Sobre mí"**: biografía ampliada.
- **Certificaciones**: eliminado el visor de PDF embebido en favor del formato de credencial profesional.
- **`page.tsx`**: orden de secciones alineado 1:1 con el menú.
- **Diseño global**: centrado consistente en todas las secciones principales.

#### Corregido

- **Enlace de LinkedIn**: URL obsoleta corregida en el Schema.org.

---

### v8.0.0 - Animaciones Framer Motion, WhatsApp siempre visible, solo 4 proyectos, nuevo perfil profesional, logro STI, LinkedIn actualizado

#### Añadido
- **Framer Motion v12** (MIT License).
- **Iconos inline en botones de proyectos**.
- **Logro cuantificado en STI**.

#### Modificado
- **`whatsapp-float.tsx`**: botón WhatsApp siempre visible.
- **`contact.tsx`**: eliminado botón "Escríbeme por WhatsApp" debajo de las cuadrículas.
- **`PROJECTS`**: reducido a exactamente 4 proyectos.
- **`PERSONAL.role`**: `'Full Stack Software Engineer | .NET · TypeScript · Angular | UI/UX Design | AI-Assisted Development'`.
- **`PERSONAL.linkedin`**: actualizado.

---

### v7.6.9 - Fix definitivo de contenido invisible en móvil, banderas correctas

#### Corregido — Causa raíz del bug
- **`use-reveal.ts`** — Identificada y corregida la causa raíz del bug de secciones permanentes en `opacity: 0`.

#### Corregido — Banderas
- **`language-toggle.tsx`** — Corregidas las 10 banderas SVG.

---

### v7.6.8 - Nombre H1, language toggle SVG flags, Exploratorio móvil fix

#### Añadido
- **Hero**: nombre completo.
- **Proyecto `posts-comments-manager`**.

#### Modificado
- **`skills.tsx`** sección Exploratorio unificada.

---

### v7.6.7 - Vista previa PDF estática pre-renderizada

#### Añadido
- **`/public/certs-preview/`** e imágenes PNG estáticas para PDFs.

#### Corregido
- **Android Chrome & iOS Safari**: spinner infinito y bloqueos resueltos.

---

### v7.6.6 - Fix definitivo PDF canvas Android/iOS

#### Añadido
- **`PdfCanvasViewer`**: renderizador PDF basado en PDF.js v3.11.174.

#### Corregido
- **Android Chrome / iOS**: PDF ya no muestra "Este contenido está bloqueado".

---

### v7.6.5 - Corrección de textos en español, fix PDF móvil iOS

#### Añadido
- **Detección iOS en `InlinePdfPreview`**.
- **Versiones en Tech Grid**.

---

### v7.6.4 — Visor PDF con API route interna

#### Añadido
- **API route interna `/api/pdf?file=`**.
- **Nuevo trabajo: Community Manager**.

---

### v7.6.3 — Visor PDF iframe móvil, widget accesibilidad

#### Añadido
- **Sub-sección "Carta de Recomendación"** separada.

---

### v7.6.2 — Vista previa PDF inline

#### Añadido
- **Vista previa PDF inline**.
- **Carpeta `docs/`** con archivos wiki.

---

### v7.6.1 — Visor PDF Android, centrado de foto

#### Añadido
- **Certificación Scrum Fundamentals Certified (SFC™)**.

---

### v7.6.0 — Iconos SVG, indicador scroll adaptativo

#### Añadido
- Meta tags OG con dimensiones explícitas.
- Scroll indicator adaptativo.

---

### v7.5.5 — Visor PDF, OG image, favicons, logros

#### Añadido
- Sección "Logros y resultados destacados".
- Visor PDF multi-estrategia.

---

### v7.5.0 — Portafolio bilingüe completo

#### Añadido
- Portafolio web profesional completo.

---

## English (United States)

### v7.6.1 — Android PDF viewer, photo centering, fb:app_id, Scrum SFC and updated assets

#### Added
- **Scrum Fundamentals Certified (SFC™)** — SCRUMstudy®, Avondale Arizona (online), 25-04-2026, status: in progress.
- **`fb:app_id`** in `layout.tsx` — meta tag required for Meta's Open Graph Debugger.

#### Changed
- **`certifications.tsx`** — Android PDF viewer fixed using `<object>`.
- **`hero.tsx`** — profile photo correctly centered in circle.
- **`public/og-image.png`** — replaced with definitive uploaded file.

---

### v7.6.0 — SVG icons, adaptive scroll indicator, PDF viewer, UI/UX fixes

#### Added
- OG meta tags with explicit dimensions and social media pre-cache.
- Adaptive scroll indicator by device type.

#### Changed
- Accessibility button uses uploaded SVG.

---

### v7.5.5 — PDF viewer, OG image, favicons, achievements and asset cleanup

#### Added
- "Achievements & Notable Results" section.
- Multi-strategy PDF viewer.

---

### v7.5.0 — Complete bilingual portfolio with themes, accessibility and Vercel deployment

#### Added
- Complete professional portfolio with bilingual ES/EN support, light/dark theme, WCAG 2.1 AA, Vercel deployment.