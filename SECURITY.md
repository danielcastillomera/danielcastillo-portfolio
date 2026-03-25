# Security Policy

## Reporting a Vulnerability

If you discover a security vulnerability in this project, please report it responsibly.

**Contact:** Daniel Fernando Castillo Mera  
**Email:** danielfcastillom@gmail.com  
**Response Time:** Within 48 hours

## Security Measures

This project implements the following security measures:

### HTTP Security Headers
- `Strict-Transport-Security` (HSTS) with 2-year max-age and preload
- `Content-Security-Policy` (CSP) restricting script, style, font, and image sources
- `X-Frame-Options: SAMEORIGIN` preventing clickjacking
- `X-Content-Type-Options: nosniff` preventing MIME sniffing
- `X-XSS-Protection: 1; mode=block`
- `Referrer-Policy: strict-origin-when-cross-origin`
- `Permissions-Policy` disabling camera, microphone, and geolocation

### Application Security
- Server-side rendering with Next.js (no exposed API keys)
- Image protection against unauthorized copying
- No user input processing (static portfolio site)
- `poweredByHeader: false` to prevent technology fingerprinting

### Deployment
- Deployed on Vercel with automatic HTTPS
- GitHub repository with branch protection

## Supported Versions

| Version | Supported |
|---------|-----------|
| 4.5.x   | Yes       |
| 1.0.x   | No        |

## Disclaimer

This is a static portfolio website. It does not process sensitive data, authenticate users, or handle payments. The security measures above are implemented as best practices.

---

**Daniel Fernando Castillo Mera**  
All rights reserved.
