/**
 * Utilidades de navegación segura.
 *
 * Los enlaces sensibles (WhatsApp, credenciales de certificación, carta de
 * recomendación) no se exponen como texto plano en atributos `href` del DOM.
 * Se almacenan codificados en Base64 y se decodifican únicamente en el
 * momento del clic, dentro del cliente.
 *
 * Esto no sustituye controles de seguridad de backend ni cifrado real:
 * su propósito es dificultar el scraping automatizado de URLs por bots
 * que inspeccionan el HTML estático sin ejecutar JavaScript.
 */

type RedirectMode = 'blank' | 'self';

function decode(encoded: string): string {
  if (typeof window === 'undefined') return '';
  try {
    return window.atob(encoded);
  } catch {
    return '';
  }
}

export function handleSecureRedirect(encoded: string, mode: RedirectMode = 'blank'): void {
  const url = decode(encoded);
  if (!url) return;
  if (mode === 'self') {
    window.location.href = url;
    return;
  }
  window.open(url, '_blank', 'noopener,noreferrer');
}

/** Codifica un texto a Base64 (uso en build-time / herramientas internas). */
export function encodeSecure(plain: string): string {
  if (typeof window === 'undefined') return Buffer.from(plain, 'utf-8').toString('base64');
  return window.btoa(plain);
}
