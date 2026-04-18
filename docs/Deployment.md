# Despliegue / Deployment — v6.0.0

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
npm run build
npm run start
```

### Despliegue en Vercel
```bash
git add .
git commit -m "v6.0.0"
git push origin main
```
Vercel detecta automáticamente Next.js. No se requieren variables de entorno.

### Scripts disponibles
| Script | Descripción |
|--------|-------------|
| `npm run dev` | Desarrollo con Turbopack |
| `npm run build` | Build de producción |
| `npm run start` | Servidor de producción |
| `npm run lint` | ESLint |
| `npm run type-check` | TypeScript sin emitir |

---

## English (United States)

### Requirements
- Node.js >= 18.0
- npm >= 9.0
- GitHub + Vercel account

### Local Installation
```bash
git clone https://github.com/danielcastillomera/danielcastillo-portfolio.git
cd danielcastillo-portfolio
npm install
npm run dev
```

### Vercel Deployment
```bash
git add .
git commit -m "v6.0.0"
git push origin main
```
Vercel auto-detects Next.js. No environment variables required.

**Daniel Fernando Castillo Mera** · All rights reserved.
