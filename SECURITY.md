# Política de Seguridad / Security Policy

## Español (México)

### Versiones soportadas

| Versión | Soporte de seguridad |
|---------|----------------------|
| 7.6.4   | ✅ Activa (versión actual) |
| 7.5.x   | ⚠️ Solo correcciones críticas |
| < 7.5.x | ❌ Sin soporte |

### Reporte de vulnerabilidades

Si descubres una vulnerabilidad de seguridad en este proyecto, **no la reportes como issue público**. Sigue el proceso de divulgación responsable:

1. **Envía un correo** a: `danielfcastillom@gmail.com`
2. **Asunto**: `[SECURITY] danielcastillo-portfolio — [descripción breve]`
3. **Incluye** en el cuerpo del mensaje:
   - Descripción detallada de la vulnerabilidad
   - Pasos para reproducirla
   - Impacto potencial estimado
   - Tu nombre o alias (opcional, para crédito)

### Tiempo de respuesta

| Acción | Plazo estimado |
|--------|----------------|
| Confirmación de recepción | 48 horas hábiles |
| Evaluación inicial | 5 días hábiles |
| Corrección y despliegue | 15 días hábiles (según severidad) |
| Divulgación pública | Tras corrección verificada |

### Medidas de seguridad implementadas

- **Content Security Policy (CSP)** — restringe fuentes de scripts, estilos, imágenes, objetos e iframes
- **HSTS** — `Strict-Transport-Security: max-age=63072000; includeSubDomains; preload`
- **X-Frame-Options: SAMEORIGIN** — previene clickjacking
- **X-Content-Type-Options: nosniff** — previene MIME sniffing
- **Referrer-Policy: strict-origin-when-cross-origin** — control de información del referrer
- **Permissions-Policy** — desactiva cámara, micrófono y geolocalización
- **Protección de imágenes** — `contextmenu` y `dragstart` deshabilitados en imágenes de perfil
- **No exposición de datos sensibles** — sin variables de entorno expuestas al cliente
- **Headers de caché seguros** — distintos para PDFs, assets estáticos e imágenes dinámicas

### Alcance

Esta política aplica únicamente al código fuente del repositorio `danielcastillomera/danielcastillo-portfolio` y a la instancia de producción en `https://danielcastillo-portfolio.vercel.app/`.

No aplica a:
- Infraestructura de Vercel (reportar directamente a Vercel)
- Servicios de terceros integrados (GitHub API, Google Fonts, Google Docs viewer)

---

---

## English (United States)

### Supported Versions

| Version | Security Support |
|---------|-----------------|
| 7.6.4   | ✅ Active (current version) |
| 7.5.x   | ⚠️ Critical fixes only |
| < 7.5.x | ❌ No support |

### Reporting a Vulnerability

If you discover a security vulnerability in this project, **do not report it as a public issue**. Follow responsible disclosure:

1. **Send an email** to: `danielfcastillom@gmail.com`
2. **Subject**: `[SECURITY] danielcastillo-portfolio — [brief description]`
3. **Include** in the message body:
   - Detailed description of the vulnerability
   - Steps to reproduce it
   - Estimated potential impact
   - Your name or alias (optional, for credit)

### Response Timeline

| Action | Estimated Timeframe |
|--------|---------------------|
| Receipt confirmation | 48 business hours |
| Initial assessment | 5 business days |
| Fix and deployment | 15 business days (depending on severity) |
| Public disclosure | After verified fix |

### Implemented Security Measures

- **Content Security Policy (CSP)** — restricts sources of scripts, styles, images, objects and iframes
- **HSTS** — `Strict-Transport-Security: max-age=63072000; includeSubDomains; preload`
- **X-Frame-Options: SAMEORIGIN** — prevents clickjacking
- **X-Content-Type-Options: nosniff** — prevents MIME sniffing
- **Referrer-Policy: strict-origin-when-cross-origin** — referrer information control
- **Permissions-Policy** — disables camera, microphone and geolocation
- **Image protection** — `contextmenu` and `dragstart` disabled on profile images
- **No sensitive data exposure** — no environment variables exposed to client
- **Secure cache headers** — different policies for PDFs, static assets and dynamic images

### Scope

This policy applies only to the source code of the `danielcastillomera/danielcastillo-portfolio` repository and the production instance at `https://danielcastillo-portfolio.vercel.app/`.

Does not apply to:
- Vercel infrastructure (report directly to Vercel)
- Integrated third-party services (GitHub API, Google Fonts, Google Docs viewer)
