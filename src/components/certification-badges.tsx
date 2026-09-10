'use client';

import { CERTIFICATIONS } from '@/lib/data';
import { useI18n } from '@/lib/i18n-provider';

const FEATURED_IDS = ['claude-api', 'scrum-fundamentals', 'cloud-azure-vmware'];

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
            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white ring-1 ring-gray-200 overflow-hidden p-1">
              {cert.logo ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={cert.logo}
                  alt={cert.issuer}
                  width={16}
                  height={16}
                  draggable={false}
                  className="h-full w-full object-contain pointer-events-none select-none"
                  onContextMenu={e => e.preventDefault()}
                />
              ) : null}
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
