# Despliegue / Deployment

> `danielcastillo-portfolio` v7.6.2

---

## Español (México)

### Plataforma

**Vercel** — despliegue automático desde la rama `main` del repositorio de GitHub.

### Flujo de despliegue

```
Push a main
  └─→ Vercel detecta cambios
       └─→ npm install (5s aprox.)
            └─→ npm run build (next build)
                 └─→ Deploy a Edge Network global
                      └─→ URL de producción disponible
```

### Comandos locales

```bash
# Instalar dependencias
npm install

# Desarrollo (http://localhost:3000)
npm run dev

# Build de producción
npm run build

# Servir build local
npm start

# Linting
npm run lint
```

### Configuración de producción (`next.config.ts`)

| Parámetro | Valor | Motivo |
|-----------|-------|--------|
| `poweredByHeader` | `false` | No exponer versión de Next.js en headers |
| `compress` | `true` | Compresión gzip/brotli de assets |
| `reactStrictMode` | `true` | Detección temprana de problemas |
| `images.formats` | `['avif','webp']` | Optimización automática de imágenes |

### Cabeceras de seguridad

Configuradas en `next.config.ts` vía `async headers()`:

- `Content-Security-Policy` — restringe orígenes de scripts, estilos, imágenes y frames.
- `Strict-Transport-Security` — HSTS con 2 años de `max-age`.
- `X-Frame-Options: SAMEORIGIN` — previene clickjacking.
- `X-Content-Type-Options: nosniff` — previene MIME sniffing.
- `Referrer-Policy: strict-origin-when-cross-origin`.
- `Permissions-Policy` — desactiva cámara, micrófono y geolocalización.

### Cabeceras de PDFs

Los archivos en `/certs/*.pdf` reciben:

```
Content-Disposition: inline
Content-Type: application/pdf
Cache-Control: public, max-age=604800
```

Esto garantiza que los PDFs se rendericen en el visor del browser (no se fuercen como descarga) y que estén en caché una semana.

### Variables de entorno

No se requieren variables de entorno para el funcionamiento básico. El proyecto es completamente estático.

### URLs de producción

- **Portafolio:** https://danielcastillo-portfolio.vercel.app/
- **Sitemap:** https://danielcastillo-portfolio.vercel.app/sitemap.xml
- **Robots:** https://danielcastillo-portfolio.vercel.app/robots.txt

---

---

## English (United States)

### Platform

**Vercel** — automatic deployment from the `main` branch of the GitHub repository.

### Deployment Flow

```
Push to main
  └─→ Vercel detects changes
       └─→ npm install (~5s)
            └─→ npm run build (next build)
                 └─→ Deploy to global Edge Network
                      └─→ Production URL available
```

### Local Commands

```bash
npm install       # Install dependencies
npm run dev       # Development (http://localhost:3000)
npm run build     # Production build
npm start         # Serve local build
npm run lint      # Linting
```

### Security Headers

Configured in `next.config.ts` via `async headers()`: CSP, HSTS (2 years), X-Frame-Options, X-Content-Type-Options, Referrer-Policy, Permissions-Policy.

### PDF Headers

Files at `/certs/*.pdf` receive `Content-Disposition: inline` and `Content-Type: application/pdf` to ensure browser-native rendering without forced download.

### Environment Variables

No environment variables required for basic operation. The project is fully static.
