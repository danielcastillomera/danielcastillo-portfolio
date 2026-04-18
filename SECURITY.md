# Política de Seguridad / Security Policy

---

## Español (México)

### Reportar una Vulnerabilidad

Si descubres una vulnerabilidad de seguridad en este proyecto, repórtala de forma responsable.

**Contacto:** Daniel Fernando Castillo Mera  
**Email:** danielfcastillom@gmail.com  
**Tiempo de respuesta:** Dentro de 48 horas

### Medidas de Seguridad

#### Headers HTTP (via `next.config.ts`)
| Header | Valor |
|--------|-------|
| `Strict-Transport-Security` | `max-age=63072000; includeSubDomains; preload` |
| `Content-Security-Policy` | Restringe scripts, estilos, fuentes e imágenes a fuentes confiables |
| `X-Frame-Options` | `SAMEORIGIN` — previene clickjacking |
| `X-Content-Type-Options` | `nosniff` |
| `X-XSS-Protection` | `1; mode=block` |
| `Referrer-Policy` | `strict-origin-when-cross-origin` |
| `Permissions-Policy` | Deshabilita cámara, micrófono y geolocalización |

#### Seguridad de la Aplicación
- Server-side rendering con Next.js (sin claves API expuestas)
- Protección de imágenes contra copia no autorizada (clic derecho, arrastrar)
- Sin formularios de entrada de usuario — sitio estático
- `poweredByHeader: false` para evitar fingerprinting
- Consentimiento de cookies GDPR — sin seguimiento de terceros sin consentimiento explícito
- Favicon e imagen OG generados localmente (sin dependencias externas)

#### Privacidad
- Sin cookies de análisis ni seguimiento por defecto
- Preferencias guardadas solo en `localStorage` del usuario
- Sin recopilación de datos personales en el servidor

### Versiones Soportadas

| Versión | Soportada |
|---------|-----------|
| 6.0.x   | ✅ Sí    |
| 5.0.x   | ❌ No    |
| < 5.0   | ❌ No    |

---

## English (United States)

### Reporting a Vulnerability

If you discover a security vulnerability in this project, please report it responsibly.

**Contact:** Daniel Fernando Castillo Mera  
**Email:** danielfcastillom@gmail.com  
**Response Time:** Within 48 hours

### Security Measures

#### HTTP Headers (via `next.config.ts`)
| Header | Value |
|--------|-------|
| `Strict-Transport-Security` | `max-age=63072000; includeSubDomains; preload` |
| `Content-Security-Policy` | Restricts scripts, styles, fonts, images to trusted sources |
| `X-Frame-Options` | `SAMEORIGIN` — prevents clickjacking |
| `X-Content-Type-Options` | `nosniff` — prevents MIME sniffing |
| `X-XSS-Protection` | `1; mode=block` |
| `Referrer-Policy` | `strict-origin-when-cross-origin` |
| `Permissions-Policy` | Disables camera, microphone, and geolocation |

#### Application Security
- Server-side rendering with Next.js (no exposed API keys or secrets)
- Image protection against unauthorized copying (right-click, drag)
- No user input forms — static portfolio site
- `poweredByHeader: false` to prevent technology fingerprinting
- Cookie consent follows GDPR — no third-party tracking without explicit consent
- Favicon and OG image generated locally (no external dependencies)

#### Privacy
- No analytics or tracking cookies by default
- User preferences stored locally in `localStorage` only
- No server-side personal data collection

### Supported Versions

| Version | Supported |
|---------|-----------|
| 6.0.x   | ✅ Yes   |
| 5.0.x   | ❌ No    |
| < 5.0   | ❌ No    |

---

**Daniel Fernando Castillo Mera** · danielfcastillom@gmail.com · All rights reserved.
