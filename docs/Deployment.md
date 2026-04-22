# Despliegue / Deployment — v7.5.0

---

## Español (México)

### Requisitos
- Node.js >= 18.0
- npm >= 9.0
- Cuenta GitHub + Vercel

### Instalación Local
```bash
git clone https://github.com/danielcastillomera/danielcastillo-portfolio.git
cd danielcastillo-portfolio
npm install
npm run dev
```

### Build de Producción
```bash
npm run build && npm run start
```

### Despliegue en Vercel
```bash
git add . && git commit -m "v7.5.0" && git push origin main
```
Vercel detecta Next.js automáticamente. No se requieren variables de entorno.

### Scripts

| Script | Descripción |
|--------|-------------|
| `npm run dev` | Desarrollo con Turbopack |
| `npm run build` | Build de producción |
| `npm run lint` | ESLint |
| `npm run type-check` | TypeScript check |

---

## English (United States)

### Requirements
- Node.js >= 18.0, npm >= 9.0, GitHub + Vercel account

```bash
git clone https://github.com/danielcastillomera/danielcastillo-portfolio.git
cd danielcastillo-portfolio && npm install && npm run dev
```

Vercel auto-detects Next.js. No environment variables required.

**Daniel Fernando Castillo Mera** · All rights reserved.
