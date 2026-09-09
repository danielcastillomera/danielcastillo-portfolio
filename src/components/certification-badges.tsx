'use client';

import { CERTIFICATIONS } from '@/lib/data';
import { useI18n } from '@/lib/i18n-provider';

const FEATURED_IDS = ['claude-api', 'scrum-fundamentals', 'cloud-azure-vmware'];

const MEDAL_ICON = (
  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6} aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
  </svg>
);

export default function CertificationBadges() {
  const { locale } = useI18n();
  const featured = FEATURED_IDS
    .map(id => CERTIFICATIONS.find(c => c.id === id))
    .filter((c): c is NonNullable<typeof c> => Boolean(c));

  if (featured.length === 0) return null;

  return (
    <div className="mt-10 flex flex-col items-center gap-3">
      <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400 dark:text-navy-500">
        {locale === 'en' ? 'Featured certifications' : 'Certificaciones destacadas'}
      </span>
      <div className="flex flex-wrap items-center justify-center gap-3">
        {featured.map(cert => (
          <a
            key={cert.id}
            href="#certificaciones"
            className="group flex items-center gap-2 rounded-full border border-gray-200 dark:border-navy-700 bg-white/70 dark:bg-navy-900/60 px-3.5 py-2 shadow-sm backdrop-blur-sm transition-all hover:-translate-y-0.5 hover:border-accent-500/50 hover:shadow-md"
          >
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-accent-500/15 text-accent-500 group-hover:bg-accent-500/25 transition-colors">
              {MEDAL_ICON}
            </span>
            <span className="text-[11px] font-semibold text-gray-700 dark:text-gray-200 whitespace-nowrap">
              {locale === 'en' ? cert.titleEn : cert.title}
            </span>
          </a>
        ))}
      </div>
    </div>
  );
}
