'use client';

import { CERTIFICATIONS, RECOMMENDATION_LETTER, type Certification } from '@/lib/data';
import { useReveal } from '@/lib/use-reveal';
import { useT, useI18n } from '@/lib/i18n-provider';
import { handleSecureRedirect } from '@/lib/security';

/**
 * Tarjeta de certificación estilo LinkedIn:
 * Nombre, Empresa emisora, Expedición, Caducidad, ID de credencial, botón
 * de verificación. Las credenciales "en curso" no muestran ID ni botón.
 */
function CertificationCard({ cert, index, isVisible }: { cert: Certification; index: number; isVisible: boolean }) {
  const t = useT();
  const { locale } = useI18n();

  const title    = locale === 'en' ? cert.titleEn    : cert.title;
  const issuer   = locale === 'en' ? cert.issuerEn   : cert.issuer;
  const issued   = locale === 'en' ? cert.issueDateEn : cert.issueDate;
  const expires  = cert.expirationDate ? (locale === 'en' ? cert.expirationDateEn : cert.expirationDate) : null;

  return (
    <article
      className="glass rounded-xl p-5 card-glow flex flex-col text-left"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
        transition: `opacity 0.5s ease ${index * 70}ms, transform 0.5s ease ${index * 70}ms`,
      }}
    >
      <div className="flex items-start gap-3">
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-accent-500/10 text-accent-500" aria-hidden="true">
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
          </svg>
        </div>
        <div className="min-w-0 flex-1">
          <h3 className="text-sm font-bold text-gray-900 dark:text-white leading-snug">{title}</h3>
          <p className="text-xs text-gray-600 dark:text-gray-400 mt-0.5">{issuer}</p>
        </div>
        {cert.inProgress && (
          <span className="shrink-0 inline-flex items-center gap-1 rounded-full border border-blue-500/30 bg-blue-500/10 px-2 py-0.5 text-[10px] font-bold text-blue-600 dark:text-blue-400 whitespace-nowrap">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" aria-hidden="true" />
            {t.certifications.inProgressBadge}
          </span>
        )}
      </div>

      <dl className="mt-4 space-y-1.5 text-xs">
        <div className="flex gap-1.5">
          <dt className="font-semibold text-gray-500 dark:text-gray-400 shrink-0">{t.certifications.issued}:</dt>
          <dd className="text-gray-800 dark:text-gray-200">{issued}</dd>
        </div>
        {expires && (
          <div className="flex gap-1.5">
            <dt className="font-semibold text-gray-500 dark:text-gray-400 shrink-0">{t.certifications.expires}:</dt>
            <dd className="text-gray-800 dark:text-gray-200">{expires}</dd>
          </div>
        )}
        {cert.credentialId && (
          <div className="flex gap-1.5">
            <dt className="font-semibold text-gray-500 dark:text-gray-400 shrink-0">{t.certifications.credentialId}:</dt>
            <dd className="text-gray-800 dark:text-gray-200 font-mono">{cert.credentialId}</dd>
          </div>
        )}
      </dl>

      {cert.credentialUrlB64 && !cert.inProgress && (
        <button
          type="button"
          onClick={() => handleSecureRedirect(cert.credentialUrlB64!, 'blank')}
          className="mt-4 inline-flex items-center justify-center gap-1.5 self-start rounded-lg border border-accent-500 px-3 py-1.5 text-xs font-semibold text-accent-600 dark:text-accent-400 hover:bg-accent-500 hover:text-black transition-colors touch-manipulation"
        >
          {t.certifications.viewCredential}
          <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
          </svg>
        </button>
      )}
    </article>
  );
}

export default function Certifications() {
  const { ref, isVisible } = useReveal();
  const t = useT();
  const { locale } = useI18n();

  const letterTitle  = locale === 'en' ? RECOMMENDATION_LETTER.titleEn  : RECOMMENDATION_LETTER.title;
  const letterIssuer = locale === 'en' ? RECOMMENDATION_LETTER.issuerEn : RECOMMENDATION_LETTER.issuer;
  const letterIssued = locale === 'en' ? RECOMMENDATION_LETTER.issueDateEn : RECOMMENDATION_LETTER.issueDate;

  return (
    <section id="certificaciones" className="relative py-16 sm:py-24 scroll-mt-20" aria-labelledby="certs-heading">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-50/40 dark:via-navy-900/30 to-transparent" aria-hidden="true" />
      <div
        ref={ref}
        className={`relative mx-auto max-w-6xl px-6 lg:px-8 flex flex-col items-center transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <div className="mb-12 text-center">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-accent-500">{t.certifications.sectionLabel}</span>
          <h2 id="certs-heading" className="mt-3 text-3xl font-bold tracking-tight section-title sm:text-4xl" style={{ fontFamily: 'var(--font-display)' }}>
            {t.certifications.title}
          </h2>
          <div className="mx-auto mt-3 h-1 w-16 rounded-full bg-gradient-to-r from-accent-500 to-accent-600" aria-hidden="true" />
          <p className="mt-4 text-base text-gray-900 dark:text-gray-100 max-w-2xl mx-auto">{t.certifications.subtitle}</p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 w-full">
          {CERTIFICATIONS.map((cert, i) => (
            <CertificationCard key={cert.id} cert={cert} index={i} isVisible={isVisible} />
          ))}
        </div>

        {/* Carta de Recomendación — mismo diseño, enlace ofuscado */}
        <div id="carta-recomendacion" className="mt-14 w-full max-w-md scroll-mt-24">
          <h3 className="text-lg font-bold section-title text-center mb-5" style={{ fontFamily: 'var(--font-display)' }}>
            {t.certifications.recommendationTitle}
          </h3>
          <article className="glass rounded-xl p-5 card-glow flex flex-col text-left">
            <div className="flex items-start gap-3">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-accent-500/10 text-accent-500" aria-hidden="true">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                </svg>
              </div>
              <div className="min-w-0 flex-1">
                <h4 className="text-sm font-bold text-gray-900 dark:text-white leading-snug">{letterTitle}</h4>
                <p className="text-xs text-gray-600 dark:text-gray-400 mt-0.5">{letterIssuer}</p>
              </div>
            </div>
            <dl className="mt-4 space-y-1.5 text-xs">
              <div className="flex gap-1.5">
                <dt className="font-semibold text-gray-500 dark:text-gray-400 shrink-0">{t.certifications.issued}:</dt>
                <dd className="text-gray-800 dark:text-gray-200">{letterIssued}</dd>
              </div>
            </dl>
            {RECOMMENDATION_LETTER.credentialUrlB64 && (
              <button
                type="button"
                onClick={() => handleSecureRedirect(RECOMMENDATION_LETTER.credentialUrlB64!, 'blank')}
                className="mt-4 inline-flex items-center justify-center gap-1.5 self-start rounded-lg border border-accent-500 px-3 py-1.5 text-xs font-semibold text-accent-600 dark:text-accent-400 hover:bg-accent-500 hover:text-black transition-colors touch-manipulation"
              >
                {t.certifications.viewDocument}
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                </svg>
              </button>
            )}
          </article>
        </div>
      </div>
    </section>
  );
}
