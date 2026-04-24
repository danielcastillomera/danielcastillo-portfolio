'use client';

import { useState, useEffect, useCallback } from 'react';
import { CERTIFICATIONS } from '@/lib/data';
import { useReveal } from '@/lib/use-reveal';
import { useT, useI18n } from '@/lib/i18n-provider';

/**
 * PdfViewer v7.5.5
 * 
 * Estrategia de visualización por dispositivo/browser:
 * 1. Desktop Chrome/Edge/Firefox → <object data="..."> con <embed> fallback interno
 * 2. iOS Safari / móviles sin plugin PDF → iframe con Google Docs viewer como proxy
 * 3. Botón "Abrir" siempre visible → fallback absoluto garantizado
 *
 * El CSP en next.config.ts tiene `object-src 'self'` y `frame-src 'self'` 
 * más `https://docs.google.com` para el proxy de Google Docs en móvil.
 */
function PdfViewer({ file, title, onClose }: { file: string; title: string; onClose: () => void }) {
  const [zoom, setZoom]           = useState(100);
  const [useGoogleProxy, setUseGoogleProxy] = useState(false);

  // Bloquear scroll body
  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = prev; };
  }, []);

  // Cerrar con Escape
  useEffect(() => {
    const h = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', h);
    return () => document.removeEventListener('keydown', h);
  }, [onClose]);

  // Detectar iOS → usar Google Docs viewer (único proxy que funciona en Safari iOS)
  useEffect(() => {
    const ua = navigator.userAgent;
    const isIOS     = /iPad|iPhone|iPod/.test(ua) && !(window as unknown as Record<string, unknown>).MSStream;
    const isMobileSafari = isIOS && /Safari/.test(ua);
    // Android Chrome generalmente sí soporta object/embed
    setUseGoogleProxy(isMobileSafari);
  }, []);

  const absoluteUrl = typeof window !== 'undefined'
    ? `${window.location.origin}${file}`
    : file;

  const googleProxyUrl = `https://docs.google.com/viewer?url=${encodeURIComponent(absoluteUrl)}&embedded=true`;
  const nativePdfUrl   = `${file}#toolbar=0&navpanes=0&scrollbar=1&view=FitH&zoom=page-fit`;

  const viewerHeight = `calc(${zoom / 100} * 80vh)`;

  const handleBackdropClick = useCallback((e: React.MouseEvent) => {
    if (e.target === e.currentTarget) onClose();
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-[200] flex flex-col bg-black/90 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-label={`Visor: ${title}`}
      onClick={handleBackdropClick}
    >
      {/* ── Toolbar ── */}
      <div className="flex items-center justify-between px-4 py-2.5 bg-navy-950 border-b border-navy-700 shrink-0 gap-2 flex-wrap">
        <h2 className="text-sm font-semibold text-white truncate max-w-[50%] min-w-0" title={title}>
          {title}
        </h2>

        <div className="flex items-center gap-2 shrink-0 flex-wrap">
          {/* Controles de zoom solo en desktop (mobile usa scroll nativo) */}
          <div className="hidden sm:flex items-center gap-2">
            <button
              type="button"
              onClick={() => setZoom(z => Math.max(z - 25, 50))}
              disabled={zoom <= 50}
              className="h-8 px-3 rounded-lg bg-navy-800 text-xs font-semibold text-white hover:bg-navy-700 disabled:opacity-40 transition-colors"
              aria-label="Reducir zoom"
            >
              − Zoom
            </button>
            <span className="text-xs font-mono text-gray-300 w-10 text-center">{zoom}%</span>
            <button
              type="button"
              onClick={() => setZoom(z => Math.min(z + 25, 200))}
              disabled={zoom >= 200}
              className="h-8 px-3 rounded-lg bg-navy-800 text-xs font-semibold text-white hover:bg-navy-700 disabled:opacity-40 transition-colors"
              aria-label="Aumentar zoom"
            >
              + Zoom
            </button>
            <button
              type="button"
              onClick={() => setZoom(100)}
              className="h-8 px-3 rounded-lg bg-navy-800 text-xs text-gray-300 hover:bg-navy-700 transition-colors"
            >
              Reset
            </button>
          </div>

          <a
            href={file}
            target="_blank"
            rel="noopener noreferrer"
            className="h-8 px-3 rounded-lg bg-navy-800 text-xs font-semibold text-accent-400 hover:bg-accent-500 hover:text-black transition-colors inline-flex items-center whitespace-nowrap"
          >
            Abrir ↗
          </a>
          <a
            href={file}
            download
            className="h-8 px-3 rounded-lg bg-navy-800 text-xs font-semibold text-gray-300 hover:bg-navy-700 transition-colors inline-flex items-center"
          >
            Descargar
          </a>
          <button
            type="button"
            onClick={onClose}
            className="h-8 px-3 rounded-lg bg-navy-800 text-xs font-semibold text-white hover:bg-red-700 transition-colors"
            aria-label="Cerrar visor"
          >
            Cerrar ✕
          </button>
        </div>
      </div>

      {/* ── Área de visualización ── */}
      <div className="flex-1 overflow-auto bg-gray-900 p-2 sm:p-4 flex items-start justify-center">
        <div
          style={{
            width: `${Math.min(zoom, 100)}%`,
            minWidth: '280px',
            maxWidth: '960px',
            transition: 'width 0.2s ease',
          }}
        >
          {useGoogleProxy ? (
            /* ── iOS Safari: Google Docs viewer ── */
            <iframe
              src={googleProxyUrl}
              className="w-full rounded-lg shadow-2xl bg-white border-0"
              style={{ height: '80vh', minHeight: '420px' }}
              title={title}
              loading="lazy"
              sandbox="allow-scripts allow-same-origin allow-popups"
            />
          ) : (
            /* ── Desktop / Android Chrome: object nativo + embed fallback ── */
            <object
              data={nativePdfUrl}
              type="application/pdf"
              className="w-full rounded-lg shadow-2xl bg-white"
              style={{ height: viewerHeight, minHeight: '420px', display: 'block' }}
              aria-label={title}
            >
              {/* Fallback embed para Firefox/Edge */}
              <embed
                src={nativePdfUrl}
                type="application/pdf"
                className="w-full rounded-lg"
                style={{ height: viewerHeight, minHeight: '420px', display: 'block' }}
              />
              {/* Fallback texto — si el browser no soporta ninguno */}
              <div className="flex flex-col items-center justify-center py-16 gap-4 text-center px-6 bg-white rounded-lg min-h-[420px]">
                <p className="text-gray-700 font-semibold text-base">
                  Tu navegador no puede mostrar este PDF directamente.
                </p>
                <p className="text-gray-500 text-sm">Usa los botones del panel para abrirlo o descargarlo.</p>
                <a
                  href={file}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-flex items-center rounded-lg bg-accent-500 px-6 py-3 text-sm font-bold text-black hover:bg-accent-400 transition-colors"
                >
                  Abrir en nueva pestaña ↗
                </a>
              </div>
            </object>
          )}
        </div>
      </div>

      <div className="px-4 py-1.5 bg-navy-950 border-t border-navy-700 text-center shrink-0">
        <p className="text-[10px] text-gray-500">
          Documento de solo lectura · Read-only document · {title}
        </p>
      </div>
    </div>
  );
}

/* ══════════════════════════════════════════════════════════ */

export default function Certifications() {
  const { ref, isVisible } = useReveal();
  const t = useT();
  const { locale } = useI18n();
  const [openPdf, setOpenPdf] = useState<{ file: string; title: string } | null>(null);

  const statusCfg = {
    'in-progress': {
      label: t.certifications.status.inProgress,
      dot:   'bg-blue-500 animate-pulse',
      badge: 'border-blue-500/30 bg-blue-500/10 text-blue-600 dark:text-blue-400',
    },
    active: {
      label: t.certifications.status.active,
      dot:   'bg-green-500',
      badge: 'border-green-500/30 bg-green-500/10 text-green-600 dark:text-green-400',
    },
    completed: {
      label: t.certifications.status.completed,
      dot:   'bg-gray-400',
      badge: 'border-gray-400/30 bg-gray-100 dark:bg-navy-800 text-gray-600 dark:text-gray-300',
    },
  };

  return (
    <>
      <section id="certificaciones" className="relative py-24 sm:py-32" aria-labelledby="certs-heading">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-50/40 dark:via-navy-900/30 to-transparent" aria-hidden="true" />
        <div
          ref={ref}
          className={`relative mx-auto max-w-7xl px-6 lg:px-8 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <div className="mb-16">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-accent-500">
              {t.certifications.sectionLabel}
            </span>
            <h2
              id="certs-heading"
              className="mt-3 text-3xl font-bold tracking-tight section-title sm:text-4xl"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              {t.certifications.title}
            </h2>
            <div className="mt-3 h-1 w-16 rounded-full bg-gradient-to-r from-accent-500 to-accent-600" aria-hidden="true" />
            <p className="mt-4 text-base text-gray-900 dark:text-gray-100 max-w-2xl">
              {t.certifications.subtitle}
            </p>
          </div>

          {/* Grid — sin imágenes ni vectores, solo texto */}
          <div className="grid gap-5 sm:grid-cols-2">
            {CERTIFICATIONS.map((cert, i) => {
              const s      = statusCfg[cert.status];
              const title  = locale === 'en' ? cert.titleEn    : cert.title;
              const issuer = locale === 'en' ? cert.issuerEn   : cert.issuer;
              const loc    = locale === 'en' ? cert.locationEn : cert.location;

              return (
                <article
                  key={cert.id}
                  className="glass rounded-xl p-5 card-glow flex flex-col"
                  style={{
                    opacity:   isVisible ? 1 : 0,
                    transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                    transition: `opacity 0.5s ease ${i * 100}ms, transform 0.5s ease ${i * 100}ms`,
                  }}
                  aria-label={title}
                >
                  <h3 className="text-sm font-bold text-gray-900 dark:text-white leading-snug mb-4">
                    {title}
                  </h3>

                  <dl className="space-y-1.5 text-xs flex-1">
                    <div className="flex gap-1.5 flex-wrap">
                      <dt className="font-semibold text-gray-600 dark:text-gray-400 shrink-0 whitespace-nowrap">
                        {t.certifications.issuer}:
                      </dt>
                      <dd className="text-gray-800 dark:text-gray-200">{issuer}</dd>
                    </div>
                    <div className="flex gap-1.5 flex-wrap">
                      <dt className="font-semibold text-gray-600 dark:text-gray-400 shrink-0 whitespace-nowrap">
                        {t.certifications.location}:
                      </dt>
                      <dd className="text-gray-800 dark:text-gray-200">{loc}</dd>
                    </div>
                    <div className="flex gap-1.5 flex-wrap">
                      <dt className="font-semibold text-gray-600 dark:text-gray-400 shrink-0 whitespace-nowrap">
                        {t.certifications.date}:
                      </dt>
                      <dd className="text-gray-800 dark:text-gray-200">{cert.date}</dd>
                    </div>
                    <div className="flex gap-1.5 flex-wrap">
                      <dt className="font-semibold text-gray-600 dark:text-gray-400 shrink-0 whitespace-nowrap">
                        {t.certifications.duration}:
                      </dt>
                      <dd className="text-gray-800 dark:text-gray-200">{cert.duration}</dd>
                    </div>
                    <div className="flex gap-1.5 items-center flex-wrap pt-0.5">
                      <dt className="font-semibold text-gray-600 dark:text-gray-400 shrink-0 whitespace-nowrap">
                        {t.certifications.statusLabel}:
                      </dt>
                      <dd>
                        <span className={`inline-flex items-center gap-1 rounded-full border px-2 py-0.5 font-semibold ${s.badge}`}>
                          <span className={`w-1.5 h-1.5 rounded-full ${s.dot}`} aria-hidden="true" />
                          {s.label}
                        </span>
                      </dd>
                    </div>
                  </dl>

                  {cert.pdfFile && (
                    <button
                      type="button"
                      onClick={() => setOpenPdf({ file: cert.pdfFile!, title })}
                      className="mt-4 self-start rounded-lg border border-accent-500/40 bg-accent-500/10 px-3 py-1.5 text-xs font-semibold text-accent-600 dark:text-accent-400 hover:bg-accent-500/20 transition-all active:scale-95 touch-manipulation"
                    >
                      {t.certifications.viewPdf}
                    </button>
                  )}
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {openPdf && (
        <PdfViewer
          file={openPdf.file}
          title={openPdf.title}
          onClose={() => setOpenPdf(null)}
        />
      )}
    </>
  );
}
