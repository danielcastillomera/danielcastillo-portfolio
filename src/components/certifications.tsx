'use client';

import { useEffect, useState } from 'react';
import { CERTIFICATIONS } from '@/lib/data';
import { useReveal } from '@/lib/use-reveal';
import { useT, useI18n } from '@/lib/i18n-provider';

/**
 * InlinePdfPreview v7.6.2
 *
 * Vista previa del PDF directamente dentro de la tarjeta, sin botón adicional.
 * Estrategia por dispositivo/browser:
 * - iOS Safari            → Google Docs viewer (proxy iframe)
 * - Android Chrome / FF  → <object> mismo origen (sin diálogo de confirmación)
 * - Desktop              → <object> nativo
 * Sin opción de descarga. Botón "Abrir ↗" solo abre en nueva pestaña.
 */
function InlinePdfPreview({ file, title }: { file: string; title: string }) {
  const [strategy, setStrategy] = useState<'object' | 'google-docs' | 'pending'>('pending');

  useEffect(() => {
    const ua = navigator.userAgent;
    const isIOS = /iPad|iPhone|iPod/.test(ua);
    const isSafariOnly = isIOS && /Safari/.test(ua) && !/CriOS|FxiOS|EdgiOS/.test(ua);
    setStrategy(isSafariOnly ? 'google-docs' : 'object');
  }, []);

  const absoluteUrl = typeof window !== 'undefined'
    ? `${window.location.origin}${file}`
    : file;

  const googleDocsUrl = `https://docs.google.com/viewer?url=${encodeURIComponent(absoluteUrl)}&embedded=true`;
  // #toolbar=0 oculta barra del visor + deshabilita descarga nativa
  const nativePdfUrl  = `${file}#toolbar=0&navpanes=0&scrollbar=1&view=FitH&download=0`;

  if (strategy === 'pending') {
    return (
      <div className="mt-4 w-full rounded-lg bg-gray-100 dark:bg-navy-800 flex items-center justify-center"
        style={{ height: '280px' }}>
        <div className="w-6 h-6 rounded-full border-2 border-accent-500/30 border-t-accent-500 animate-spin" />
      </div>
    );
  }

  return (
    <div className="mt-4 w-full flex flex-col gap-2">
      {/* Botón solo abrir — sin descarga */}
      <div className="flex justify-end">
        <a href={file} target="_blank" rel="noopener noreferrer"
          className="text-xs font-semibold text-accent-600 dark:text-accent-400 hover:underline transition-colors"
          aria-label={`Abrir ${title} en nueva pestaña`}>
          Abrir ↗
        </a>
      </div>

      {/* Vista previa embebida — 100% del ancho de la tarjeta */}
      <div className="w-full rounded-lg overflow-hidden border border-gray-200 dark:border-navy-700 bg-white"
        style={{ height: 'clamp(280px, 45vw, 420px)' }}>

        {strategy === 'google-docs' ? (
          <iframe
            src={googleDocsUrl}
            className="w-full h-full border-0"
            title={title}
            loading="lazy"
            sandbox="allow-scripts allow-same-origin allow-popups allow-forms"
            style={{ display: 'block' }}
          />
        ) : (
          <object
            data={nativePdfUrl}
            type="application/pdf"
            className="w-full h-full"
            aria-label={title}
            style={{ display: 'block' }}
          >
            <embed
              src={nativePdfUrl}
              type="application/pdf"
              style={{ width: '100%', height: '100%', display: 'block' }}
            />
            {/* Fallback si el browser no soporta PDF inline */}
            <div className="flex flex-col items-center justify-center h-full gap-3 p-4 text-center">
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Vista previa no disponible en este navegador.
              </p>
              <a href={file} target="_blank" rel="noopener noreferrer"
                className="rounded-lg bg-accent-500 px-4 py-2 text-xs font-bold text-black hover:bg-accent-400 transition-colors">
                Abrir documento ↗
              </a>
            </div>
          </object>
        )}
      </div>
    </div>
  );
}

/* ══════════════════════════════════════════════════════════ */

export default function Certifications() {
  const { ref, isVisible } = useReveal();
  const t = useT();
  const { locale } = useI18n();

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
    <section id="certificaciones" className="relative py-24 sm:py-32" aria-labelledby="certs-heading">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-50/40 dark:via-navy-900/30 to-transparent" aria-hidden="true" />
      <div ref={ref} className={`relative mx-auto max-w-7xl px-6 lg:px-8 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>

        <div className="mb-16">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-accent-500">
            {t.certifications.sectionLabel}
          </span>
          <h2 id="certs-heading"
            className="mt-3 text-3xl font-bold tracking-tight section-title sm:text-4xl"
            style={{ fontFamily: 'var(--font-display)' }}>
            {t.certifications.title}
          </h2>
          <div className="mt-3 h-1 w-16 rounded-full bg-gradient-to-r from-accent-500 to-accent-600" aria-hidden="true" />
          <p className="mt-4 text-base text-gray-900 dark:text-gray-100 max-w-2xl">
            {t.certifications.subtitle}
          </p>
        </div>

        {/* Grid de certificaciones */}
        <div className="grid gap-6 sm:grid-cols-2">
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
                  opacity:    isVisible ? 1 : 0,
                  transform:  isVisible ? 'translateY(0)' : 'translateY(20px)',
                  transition: `opacity 0.5s ease ${i * 80}ms, transform 0.5s ease ${i * 80}ms`,
                }}
                aria-label={title}
              >
                {/* Texto de la certificación */}
                <h3 className="text-sm font-bold text-gray-900 dark:text-white leading-snug mb-4">
                  {title}
                </h3>

                <dl className="space-y-1.5 text-xs">
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

                {/* Vista previa PDF inline — abajo del estado, sin botón "Ver documento" */}
                {cert.pdfFile && (
                  <InlinePdfPreview file={cert.pdfFile} title={title} />
                )}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
