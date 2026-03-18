# Despliegue

## Requisitos

- Node.js >= 18.0
- npm >= 9.0
- Cuenta de GitHub
- Cuenta de Vercel

## Instalación Local

```bash
git clone https://github.com/danielcastillomera/danielcastillo-portfolio.git
cd danielcastillo-portfolio
npm install
npm run dev
```

El servidor de desarrollo se inicia en `http://localhost:3000`.

## Build de Producción

```bash
npm run build
npm run start
```

## Despliegue en Vercel

1. Conectar el repositorio de GitHub en [vercel.com](https://vercel.com)
2. Vercel detecta automáticamente Next.js
3. No se requieren variables de entorno
4. Cada push a `main` despliega automáticamente

## Variables de Entorno

Este proyecto no requiere variables de entorno. Es un sitio estático.

## Dominio Personalizado

Para configurar un dominio personalizado:
1. En Vercel Dashboard > Settings > Domains
2. Agregar dominio y configurar DNS (A record o CNAME)
3. Vercel genera certificado SSL automáticamente

---

Daniel Fernando Castillo Mera
