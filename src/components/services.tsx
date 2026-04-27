'use client';
import { SERVICE_CATEGORIES } from '@/lib/data';
import { useReveal } from '@/lib/use-reveal';
import { useT, useI18n } from '@/lib/i18n-provider';

export default function Services() {
  const { ref, isVisible } = useReveal();
  const t = useT();
  const { locale } = useI18n();
  return (
    <section id="servicios" className="relative py-16 sm:py-24" aria-labelledby="services-heading">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-50/60 dark:via-navy-900/20 to-transparent" aria-hidden="true" />
      <div ref={ref} className={`relative mx-auto max-w-7xl px-6 lg:px-8 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="mb-16">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-accent-500">{t.services.sectionLabel}</span>
          <h2 id="services-heading" className="mt-3 text-3xl font-bold tracking-tight section-title sm:text-4xl" style={{ fontFamily: 'var(--font-display)' }}>{t.services.title}</h2>
          <div className="mt-3 h-1 w-16 rounded-full bg-gradient-to-r from-accent-500 to-orange-500" aria-hidden="true" />
          <p className="mt-4 text-base text-gray-900 dark:text-gray-100 max-w-2xl">{t.services.subtitle}</p>
        </div>
        {SERVICE_CATEGORIES.map((cat, catIdx) => (
          <div key={cat.title} className="mb-12 last:mb-0">
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent-500/10 text-accent-500 text-sm" aria-hidden="true">{catIdx === 0 ? '💻' : '🔧'}</span>
              {locale === 'en' ? cat.titleEn : cat.title}
            </h3>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {cat.services.map((svc, i) => (
                <div key={svc.title} className="glass rounded-xl p-5 card-glow"
                  style={{ opacity: isVisible ? 1 : 0, transform: isVisible ? 'translateY(0)' : 'translateY(16px)', transition: `opacity 0.5s ease ${catIdx*200+i*60}ms, transform 0.5s ease ${catIdx*200+i*60}ms` }}>
                  <h4 className="text-sm font-bold text-gray-900 dark:text-white mb-2">{locale === 'en' ? svc.titleEn : svc.title}</h4>
                  <ul className="space-y-1" role="list">
                    {(locale === 'en' ? svc.itemsEn : svc.items).map(item => (
                      <li key={item} className="flex items-start gap-2 text-xs text-gray-800 dark:text-gray-200">
                        <svg className="w-3 h-3 mt-0.5 shrink-0 text-accent-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3} aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" /></svg>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
