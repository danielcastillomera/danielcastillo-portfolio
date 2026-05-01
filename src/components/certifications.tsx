'use client';

import Image from 'next/image';
import { CERTIFICATIONS } from '@/lib/data';
import { useReveal } from '@/lib/use-reveal';
import { useT, useI18n } from '@/lib/i18n-provider';

/* ─────────────────────────────────────────────────────────────────────────────
 * PdfStaticPreview v7.6.7
 *
 * Estrategia: las imágenes PNG de cada PDF (página 1) son pre-generadas
 * en build-time con Ghostscript y guardadas en /public/certs-preview/.
 * Se sirven como imágenes estáticas con next/image — optimizadas
 * automáticamente (WebP/AVIF) por Next.js según el dispositivo.
 *
 * Ventajas:
 * - Cero dependencias en runtime (sin PDF.js, sin iframe, sin fetch).
 * - Funciona en todos los dispositivos: Android, iOS, desktop, tablets.
 * - Sin bloqueos de X-Frame-Options, CSP ni diálogos de confirmación.
 * - Carga instantánea — la imagen ya está en el bundle de estáticos.
 * - SEO-friendly: Next.js sirve WebP/AVIF con lazy load nativo.
 *
 * Compatible: Android Chrome/Firefox/Samsung Internet, iOS Safari 16+,
 *             Desktop Chrome/Edge/Firefox/Safari, tablets, smartwatches.
 * ───────────────────────────────────────────────────────────────────────── */

/** Mapa de nombre de PDF → imagen de preview estática */
const PREVIEW_MAP: Record<string, { src: string; width: number; height: number }> = {
  'cs50x.pdf':               { src: '/certs-preview/cs50x.png',               width: 900, height: 624  },
  'uees-talks.pdf':          { src: '/certs-preview/uees-talks.png',           width: 900, height: 636  },
  'taller-pc.pdf':           { src: '/certs-preview/taller-pc.png',            width: 900, height: 636  },
  'biorobotics.pdf':         { src: '/certs-preview/biorobotics.png',          width: 900, height: 699  },
  'carta-recomendacion.pdf': { src: '/certs-preview/carta-recomendacion.png',  width: 900, height: 1272 },
};

function PdfStaticPreview({ file, title }: { file: string; title: string }) {
  const filename = file.split('/').pop() ?? '';
  const preview  = PREVIEW_MAP[filename];
  const apiUrl   = `/api/pdf?file=${encodeURIComponent(filename)}`;

  return (
    <div className="mt-4 w-full flex flex-col gap-2">
      {/* Botón Abrir — siempre visible, abre el PDF completo */}
      <div className="flex justify-end">
        <a
          href={apiUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 rounded-lg border border-accent-500 px-3 py-1 text-xs font-semibold text-accent-600 dark:text-accent-400 hover:bg-accent-500 hover:text-black dark:hover:text-black transition-colors touch-manipulation select-none"
          aria-label={`Abrir ${title} en nueva pestaña`}
        >
          Abrir ↗
        </a>
      </div>

      {/* Vista previa estática — imagen PNG optimizada por Next.js */}
      {preview ? (
        <a
          href={apiUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full rounded-lg overflow-hidden border border-gray-200 dark:border-navy-700 hover:border-accent-500/60 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent-500"
          aria-label={`Ver ${title} completo`}
          tabIndex={0}
        >
          <Image
            src={preview.src}
            alt={`Vista previa de ${title}`}
            width={preview.width}
            height={preview.height}
            className="w-full h-auto block"
            loading="lazy"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 600px"
            quality={85}
          />
        </a>
      ) : (
        /* Fallback: si no hay preview generada, mostrar placeholder con enlace */
        <a
          href={apiUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center gap-3 w-full rounded-lg border border-gray-200 dark:border-navy-700 bg-gray-50 dark:bg-navy-800 p-8 hover:border-accent-500/60 transition-colors"
          aria-label={`Abrir ${title}`}
        >
          <svg
            className="w-10 h-10 text-accent-500"
            fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}
            aria-hidden="true"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
          </svg>
          <span className="text-xs font-semibold text-gray-600 dark:text-gray-400">
            Toca para abrir el documento
          </span>
        </a>
      )}
    </div>
  );
}

/* ══════════════════════════════════════════════════════════════════════════ */

export default function Certifications() {
  const { ref, isVisible } = useReveal();
  const t                  = useT();
  const { locale }         = useI18n();

  const certs = CERTIFICATIONS.filter(c => c.id !== 'carta-recomendacion');
  const carta = CERTIFICATIONS.find(c => c.id === 'carta-recomendacion');

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

  const CertCard = ({
    cert,
    i,
  }: {
    cert: typeof CERTIFICATIONS[0];
    i: number;
  }) => {
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

        {cert.pdfFile && (
          <PdfStaticPreview file={cert.pdfFile} title={title} />
        )}
      </article>
    );
  };

  return (
    <section
      id="certificaciones"
      className="relative py-16 sm:py-24"
      aria-labelledby="certs-heading"
    >
      <div
        className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-50/40 dark:via-navy-900/30 to-transparent"
        aria-hidden="true"
      />

      <div
        ref={ref}
        className={`relative mx-auto max-w-7xl px-6 lg:px-8 transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        {/* Encabezado */}
        <div className="mb-12">
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
          <div
            className="mt-3 h-1 w-16 rounded-full bg-gradient-to-r from-accent-500 to-accent-600"
            aria-hidden="true"
          />
          <p className="mt-4 text-base text-gray-900 dark:text-gray-100 max-w-2xl">
            {t.certifications.subtitle}
          </p>
        </div>

        {/* Grid de certificados */}
        <div className="grid gap-6 sm:grid-cols-2">
          {certs.map((cert, i) => (
            <CertCard key={cert.id} cert={cert} i={i} />
          ))}
        </div>

        {/* Carta de Recomendación */}
        {carta && (
          <div className="mt-16">
            <div className="mb-8">
              <h3
                className="text-xl font-bold section-title sm:text-2xl"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                {locale === 'en' ? 'Letter of Recommendation' : 'Carta de Recomendación'}
              </h3>
              <div className="mt-2 h-0.5 w-12 rounded-full bg-accent-500" aria-hidden="true" />
            </div>
            <article className="glass rounded-xl p-5 sm:p-6 card-glow max-w-2xl">
              <h4 className="text-sm font-bold text-gray-900 dark:text-white leading-snug mb-4">
                {locale === 'en'
                  ? 'Letter of Recommendation — Agro Industrias Warsa C.A.'
                  : 'Carta de Recomendación — Agro Industrias Warsa C.A.'}
              </h4>
              <dl className="space-y-1.5 text-xs">
                <div className="flex gap-1.5 flex-wrap">
                  <dt className="font-semibold text-gray-600 dark:text-gray-400 shrink-0 whitespace-nowrap">
                    {t.certifications.issuer}:
                  </dt>
                  <dd className="text-gray-800 dark:text-gray-200">
                    Agro Industrias Warsa C.A. (Ing. Elías Ward Adum, Gerente General).
                  </dd>
                </div>
                <div className="flex gap-1.5 flex-wrap">
                  <dt className="font-semibold text-gray-600 dark:text-gray-400 shrink-0 whitespace-nowrap">
                    {t.certifications.location}:
                  </dt>
                  <dd className="text-gray-800 dark:text-gray-200">Guayaquil, Ecuador.</dd>
                </div>
                <div className="flex gap-1.5 flex-wrap">
                  <dt className="font-semibold text-gray-600 dark:text-gray-400 shrink-0 whitespace-nowrap">
                    {t.certifications.date}:
                  </dt>
                  <dd className="text-gray-800 dark:text-gray-200">20-04-2026.</dd>
                </div>
              </dl>
              {carta.pdfFile && (
                <PdfStaticPreview
                  file={carta.pdfFile}
                  title={locale === 'en' ? carta.titleEn : carta.title}
                />
              )}
            </article>
          </div>
        )}
      </div>
    </section>
  );
}
