'use client';

import { useEffect, useState } from 'react';
import { CERTIFICATIONS } from '@/lib/data';
import { useReveal } from '@/lib/use-reveal';
import { useT, useI18n } from '@/lib/i18n-provider';

/**
 * InlinePdfPreview v7.6.3
 *
 * Usa <iframe> directo con URL del mismo origen para máxima compatibilidad en móvil.
 * - Android Chrome / Firefox: renderizado nativo inmediato (mismo origen, sin diálogo).
 * - iOS Safari: Google Docs proxy (único método funcional en Safari iOS).
 * - Desktop: renderizado nativo en iframe.
 * Sin opción de descarga.
 */
function InlinePdfPreview({ file, title }: { file: string; title: string }) {
  const [src, setSrc] = useState<string | null>(null);

  useEffect(() => {
    const ua = navigator.userAgent;
    const isIOS = /iPad|iPhone|iPod/.test(ua);
    const isSafariOnly = isIOS && /Safari/.test(ua) && !/CriOS|FxiOS|EdgiOS/.test(ua);

    if (isSafariOnly) {
      const abs = `${window.location.origin}${file}`;
      setSrc(`https://docs.google.com/viewer?url=${encodeURIComponent(abs)}&embedded=true`);
    } else {
      // Mismo origen — sin diálogo de confirmación en Android/Desktop
      setSrc(`${file}#toolbar=0&navpanes=0&scrollbar=1&view=FitH`);
    }
  }, [file]);

  return (
    <div className="mt-4 w-full flex flex-col gap-2">
      {/* Botón Abrir con marco/borde */}
      <div className="flex justify-end">
        <a
          href={file}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 rounded-lg border border-accent-500 px-3 py-1 text-xs font-semibold text-accent-600 dark:text-accent-400 hover:bg-accent-500 hover:text-black transition-colors"
          aria-label={`Abrir ${title} en nueva pestaña`}
        >
          Abrir ↗
        </a>
      </div>

      {/* Contenedor iframe responsive */}
      <div
        className="w-full rounded-lg overflow-hidden border border-gray-200 dark:border-navy-700 bg-gray-50 dark:bg-navy-800"
        style={{ height: 'clamp(260px, 48vw, 440px)' }}
      >
        {src ? (
          <iframe
            src={src}
            title={title}
            loading="lazy"
            className="w-full h-full border-0"
            sandbox="allow-scripts allow-same-origin allow-popups allow-forms"
            style={{ display: 'block' }}
          />
        ) : (
          <div className="flex items-center justify-center h-full">
            <div className="w-6 h-6 rounded-full border-2 border-accent-500/30 border-t-accent-500 animate-spin" />
          </div>
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

  // Separar carta de recomendación del resto
  const certs  = CERTIFICATIONS.filter(c => c.id !== 'carta-recomendacion');
  const carta  = CERTIFICATIONS.find(c => c.id === 'carta-recomendacion');

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

  const CertCard = ({ cert, i }: { cert: typeof CERTIFICATIONS[0]; i: number }) => {
    const s      = statusCfg[cert.status];
    const title  = locale === 'en' ? cert.titleEn    : cert.title;
    const issuer = locale === 'en' ? cert.issuerEn   : cert.issuer;
    const loc    = locale === 'en' ? cert.locationEn : cert.location;
    return (
      <article
        className="glass rounded-xl p-5 card-glow flex flex-col"
        style={{
          opacity:    isVisible ? 1 : 0,
          transform:  isVisible ? 'translateY(0)' : 'translateY(20px)',
          transition: `opacity 0.5s ease ${i * 80}ms, transform 0.5s ease ${i * 80}ms`,
        }}
        aria-label={title}
      >
        <h3 className="text-sm font-bold text-gray-900 dark:text-white leading-snug mb-4">{title}</h3>
        <dl className="space-y-1.5 text-xs">
          <div className="flex gap-1.5 flex-wrap">
            <dt className="font-semibold text-gray-600 dark:text-gray-400 shrink-0 whitespace-nowrap">{t.certifications.issuer}:</dt>
            <dd className="text-gray-800 dark:text-gray-200">{issuer}</dd>
          </div>
          <div className="flex gap-1.5 flex-wrap">
            <dt className="font-semibold text-gray-600 dark:text-gray-400 shrink-0 whitespace-nowrap">{t.certifications.location}:</dt>
            <dd className="text-gray-800 dark:text-gray-200">{loc}</dd>
          </div>
          <div className="flex gap-1.5 flex-wrap">
            <dt className="font-semibold text-gray-600 dark:text-gray-400 shrink-0 whitespace-nowrap">{t.certifications.date}:</dt>
            <dd className="text-gray-800 dark:text-gray-200">{cert.date}</dd>
          </div>
          <div className="flex gap-1.5 flex-wrap">
            <dt className="font-semibold text-gray-600 dark:text-gray-400 shrink-0 whitespace-nowrap">{t.certifications.duration}:</dt>
            <dd className="text-gray-800 dark:text-gray-200">{cert.duration}</dd>
          </div>
          <div className="flex gap-1.5 items-center flex-wrap pt-0.5">
            <dt className="font-semibold text-gray-600 dark:text-gray-400 shrink-0 whitespace-nowrap">{t.certifications.statusLabel}:</dt>
            <dd>
              <span className={`inline-flex items-center gap-1 rounded-full border px-2 py-0.5 font-semibold ${s.badge}`}>
                <span className={`w-1.5 h-1.5 rounded-full ${s.dot}`} aria-hidden="true" />
                {s.label}
              </span>
            </dd>
          </div>
        </dl>
        {cert.pdfFile && <InlinePdfPreview file={cert.pdfFile} title={title} />}
      </article>
    );
  };

  return (
    <section id="certificaciones" className="relative py-16 sm:py-24" aria-labelledby="certs-heading">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-50/40 dark:via-navy-900/30 to-transparent" aria-hidden="true" />
      <div ref={ref} className={`relative mx-auto max-w-7xl px-6 lg:px-8 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>

        {/* ── Encabezado principal ── */}
        <div className="mb-12">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-accent-500">
            {t.certifications.sectionLabel}
          </span>
          <h2 id="certs-heading" className="mt-3 text-3xl font-bold tracking-tight section-title sm:text-4xl"
            style={{ fontFamily: 'var(--font-display)' }}>
            {t.certifications.title}
          </h2>
          <div className="mt-3 h-1 w-16 rounded-full bg-gradient-to-r from-accent-500 to-accent-600" aria-hidden="true" />
          <p className="mt-4 text-base text-gray-900 dark:text-gray-100 max-w-2xl">
            {t.certifications.subtitle}
          </p>
        </div>

        {/* ── Grid de certificados y talleres ── */}
        <div className="grid gap-6 sm:grid-cols-2">
          {certs.map((cert, i) => <CertCard key={cert.id} cert={cert} i={i} />)}
        </div>

        {/* ── Sub-sección: Carta de Recomendación ── */}
        {carta && (
          <div className="mt-16">
            <div className="mb-8">
              <h3 className="text-xl font-bold section-title sm:text-2xl" style={{ fontFamily: 'var(--font-display)' }}>
                {locale === 'en' ? 'Letter of Recommendation' : 'Carta de Recomendación'}
              </h3>
              <div className="mt-2 h-0.5 w-12 rounded-full bg-accent-500" aria-hidden="true" />
            </div>

            <article className="glass rounded-xl p-5 sm:p-6 card-glow max-w-2xl" aria-label={locale === 'en' ? carta.titleEn : carta.title}>
              <h4 className="text-sm font-bold text-gray-900 dark:text-white leading-snug mb-4">
                {locale === 'en'
                  ? 'Letter of Recommendation — Agro Industrias Warsa C.A.'
                  : 'Carta de Recomendación — Agro Industrias Warsa C.A.'}
              </h4>
              <dl className="space-y-1.5 text-xs mb-0">
                <div className="flex gap-1.5 flex-wrap">
                  <dt className="font-semibold text-gray-600 dark:text-gray-400 shrink-0 whitespace-nowrap">{t.certifications.issuer}:</dt>
                  <dd className="text-gray-800 dark:text-gray-200">
                    Agro Industrias Warsa C.A. (Ing. Elías Ward Adum, Gerente General).
                  </dd>
                </div>
                <div className="flex gap-1.5 flex-wrap">
                  <dt className="font-semibold text-gray-600 dark:text-gray-400 shrink-0 whitespace-nowrap">{t.certifications.location}:</dt>
                  <dd className="text-gray-800 dark:text-gray-200">Guayaquil, Ecuador.</dd>
                </div>
                <div className="flex gap-1.5 flex-wrap">
                  <dt className="font-semibold text-gray-600 dark:text-gray-400 shrink-0 whitespace-nowrap">{t.certifications.date}:</dt>
                  <dd className="text-gray-800 dark:text-gray-200">20-04-2026.</dd>
                </div>
              </dl>
              {carta.pdfFile && <InlinePdfPreview file={carta.pdfFile} title={locale === 'en' ? carta.titleEn : carta.title} />}
            </article>
          </div>
        )}
      </div>
    </section>
  );
}
