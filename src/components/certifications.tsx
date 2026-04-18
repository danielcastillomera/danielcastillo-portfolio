'use client';

import { CERTIFICATIONS } from '@/lib/data';
import { useReveal } from '@/lib/use-reveal';
import { useT } from '@/lib/i18n-provider';

export default function Certifications() {
  const { ref, isVisible } = useReveal();
  const t = useT();

  const statusConfig = {
    'in-progress': { label: t.certifications.status.inProgress, dot: 'bg-blue-500 animate-pulse', badge: 'border-blue-500/30 bg-blue-500/10 text-blue-600 dark:text-blue-400' },
    active: { label: t.certifications.status.active, dot: 'bg-green-500', badge: 'border-green-500/30 bg-green-500/10 text-green-600 dark:text-green-400' },
    completed: { label: t.certifications.status.completed, dot: 'bg-gray-400', badge: 'border-gray-400/30 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300' },
  };

  // Filter out duplicate CS50x (only show the non-'in-progress' one if duplicated, here we just deduplicate by id)
  const unique = CERTIFICATIONS.filter((c, i, arr) => arr.findIndex(x => x.id === c.id) === i);

  return (
    <section id="certificaciones" className="relative py-24 sm:py-32" aria-labelledby="certs-heading">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-50/40 dark:via-navy-900/30 to-transparent" aria-hidden="true" />
      <div ref={ref} className={`relative mx-auto max-w-7xl px-6 lg:px-8 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="mb-16">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-accent-500">{t.certifications.sectionLabel}</span>
          <h2 id="certs-heading" className="mt-3 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl" style={{ fontFamily: 'var(--font-display)' }}>{t.certifications.title}</h2>
          <div className="mt-3 h-1 w-16 rounded-full bg-gradient-to-r from-accent-500 to-accent-600" aria-hidden="true" />
          <p className="mt-4 text-base text-gray-800 dark:text-gray-100 max-w-2xl">{t.certifications.subtitle}</p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-2">
          {unique.map((cert, i) => {
            const status = statusConfig[cert.status];
            return (
              <article key={cert.id} className="glass rounded-xl p-5 card-glow"
                style={{ opacity: isVisible ? 1 : 0, transform: isVisible ? 'translateY(0)' : 'translateY(20px)', transition: `opacity 0.5s ease ${i * 100}ms, transform 0.5s ease ${i * 100}ms` }}
                aria-label={cert.title}>
                <div className="flex items-start justify-between gap-3 mb-3">
                  <div className="flex items-center gap-2.5">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-xl shadow-sm" style={{ backgroundColor: `${cert.color}18`, border: `1px solid ${cert.color}30` }} aria-hidden="true">{cert.icon}</div>
                    <span className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 text-xs font-semibold ${status.badge}`}>
                      <span className={`w-1.5 h-1.5 rounded-full ${status.dot}`} aria-hidden="true" />
                      {status.label}
                    </span>
                  </div>
                  <span className="rounded-md bg-gray-100 dark:bg-navy-800 px-2 py-0.5 text-xs font-mono text-gray-600 dark:text-gray-300 shrink-0">{cert.hours}h</span>
                </div>
                <h3 className="text-sm font-bold text-gray-900 dark:text-white leading-snug mb-2">{cert.title}</h3>
                <div className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400">
                  <svg className="w-3.5 h-3.5 shrink-0 text-accent-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" /></svg>
                  <span className="truncate">{cert.issuer}</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400 mt-1.5">
                  <svg className="w-3.5 h-3.5 shrink-0 text-accent-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" /></svg>
                  <span>{cert.date}</span>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
