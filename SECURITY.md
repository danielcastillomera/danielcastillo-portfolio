# Security Policy

## Reporting a Vulnerability

If you discover a security vulnerability in this project, please report it responsibly.

**Contact:** Daniel Fernando Castillo Mera  
**Email:** danielfcastillom@gmail.com  
**Response Time:** Within 48 hours

---

## Security Measures

### HTTP Security Headers (via next.config.ts)
| Header | Value |
|--------|-------|
| `Strict-Transport-Security` | `max-age=63072000; includeSubDomains; preload` |
| `Content-Security-Policy` | Restricts scripts, styles, fonts, images to trusted sources |
| `X-Frame-Options` | `SAMEORIGIN` — prevents clickjacking |
| `X-Content-Type-Options` | `nosniff` — prevents MIME sniffing |
| `X-XSS-Protection` | `1; mode=block` |
| `Referrer-Policy` | `strict-origin-when-cross-origin` |
| `Permissions-Policy` | Disables camera, microphone, geolocation |

### Application Security
- Server-side rendering with Next.js (no exposed API keys or secrets)
- Image protection against unauthorized copying (right-click, drag, context menu)
- No user input forms — static portfolio site
- `poweredByHeader: false` to prevent technology fingerprinting
- All external image sources allowlisted via `img-src` CSP directive
- Cookie consent follows GDPR — no third-party tracking without explicit consent

### Privacy
- No analytics or tracking cookies by default
- Cookie consent stored in `localStorage` only
- Language and theme preferences stored locally, never transmitted
- No personal data collection, no server-side logging of user behavior

### Deployment
- Deployed on Vercel with automatic HTTPS (TLS 1.3)
- GitHub repository with automated deployments on push to `main`
- No environment variables required — fully static configuration

---

## Supported Versions

| Version | Supported |
|---------|-----------|
| 5.0.x   | ✅ Yes    |
| 4.5.x   | ❌ No     |
| < 4.5   | ❌ No     |

---

## Disclaimer

This is a static portfolio website. It does not process sensitive data, authenticate users, or handle payments. The security measures above are implemented as industry best practices to demonstrate professional standards in web development.

---

**Daniel Fernando Castillo Mera** · danielfcastillom@gmail.com  
All rights reserved.
