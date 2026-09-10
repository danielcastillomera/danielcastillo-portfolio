'use client';
import { PERSONAL } from '@/lib/data';
import { WhatsAppIcon, GitHubIcon, LinkedInIcon, InstagramIcon, FacebookIcon, EmailIcon } from './icons';
import ProtectedImage from './protected-image';
import { useT } from '@/lib/i18n-provider';

const BADGE_ICON = {
  a11y: (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2a2 2 0 110 4 2 2 0 010-4zm9 7.5-6-1.4V6.6l5-1.4-.5-1.9-5.5 1.5-5.5-1.5-.5 1.9 5 1.4v1.5l-6 1.4.4 2 5.6-1.3V13l-2 7 1.9.6 2.1-6h.9l2.1 6 1.9-.6-2-7v-2.8l5.6 1.3z" />
    </svg>
  ),
  pwa: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden="true">
      <rect x="5" y="2" width="14" height="20" rx="2" />
      <path strokeLinecap="round" d="M11 18h2" />
    </svg>
  ),
  seo: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden="true">
      <circle cx="10.5" cy="10.5" r="6.5" />
      <path strokeLinecap="round" d="M20 20l-4.5-4.5" />
    </svg>
  ),
  gdpr: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden="true">
      <rect x="5" y="11" width="14" height="9" rx="1.5" />
      <path strokeLinecap="round" d="M8 11V8a4 4 0 018 0v3" />
    </svg>
  ),
  shield: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 3l7 3v6c0 4.5-3 8-7 9-4-1-7-4.5-7-9V6l7-3z" />
    </svg>
  ),
  globe: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden="true">
      <circle cx="12" cy="12" r="9" />
      <path strokeLinecap="round" d="M3 12h18M12 3a14 14 0 010 18 14 14 0 010-18z" />
    </svg>
  ),
};

export default function Footer() {
  const year = new Date().getFullYear();
  const t = useT();
  const socials = [
    { icon: <WhatsAppIcon className="w-4 h-4" />, url: PERSONAL.whatsapp, label: 'WhatsApp', color: 'hover:text-green-500 hover:bg-green-50 dark:hover:bg-green-500/10' },
    { icon: <GitHubIcon className="w-4 h-4" />, url: PERSONAL.github, label: 'GitHub', color: 'hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-white/5' },
    { icon: <LinkedInIcon className="w-4 h-4" />, url: PERSONAL.linkedin, label: 'LinkedIn', color: 'hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-500/10' },
    { icon: <InstagramIcon className="w-4 h-4" />, url: PERSONAL.instagram, label: 'Instagram', color: 'hover:text-pink-500 hover:bg-pink-50 dark:hover:bg-pink-500/10' },
    { icon: <FacebookIcon className="w-4 h-4" />, url: PERSONAL.facebook, label: 'Facebook', color: 'hover:text-blue-700 dark:hover:text-blue-500 hover:bg-blue-50 dark:hover:bg-blue-500/10' },
    { icon: <EmailIcon className="w-4 h-4" />, url: `mailto:${PERSONAL.email}`, label: 'Email', color: 'hover:text-accent-500 hover:bg-amber-50 dark:hover:bg-accent-500/10' },
  ];
  const badges = [
    { label: 'WCAG 2.2', icon: BADGE_ICON.a11y },
    { label: 'PWA Ready', icon: BADGE_ICON.pwa },
    { label: 'SEO', icon: BADGE_ICON.seo },
    { label: 'GDPR', icon: BADGE_ICON.gdpr },
    { label: 'CSP/HSTS', icon: BADGE_ICON.shield },
    { label: 'i18n ES/EN', icon: BADGE_ICON.globe },
  ];
  return (
    <footer className="relative border-t border-gray-200 dark:border-navy-800/50 bg-gray-50 dark:bg-navy-950" role="contentinfo" aria-label="Pie de página">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="flex flex-col items-center gap-6 sm:flex-row sm:justify-between">
          <div className="flex flex-col items-center sm:items-start gap-2">
            <a href="#inicio" className="flex items-center gap-2.5 text-base font-bold text-gray-900 dark:text-white hover:opacity-80 transition-opacity" aria-label="Ir al inicio">
              <div className="h-8 w-8 rounded-full overflow-hidden ring-1 ring-accent-500/20 shrink-0">
                <ProtectedImage src={PERSONAL.profileImage} alt={PERSONAL.name} width={32} height={32} className="h-full w-full object-cover object-top" />
              </div>
              {PERSONAL.name}
            </a>
            <p className="text-xs text-gray-700 dark:text-gray-300 text-center sm:text-left">{t.footer.role}</p>
          </div>
          <div className="flex items-center gap-2 flex-wrap justify-center">
            {socials.map(s => (
              <a key={s.label} href={s.url} target="_blank" rel="noopener noreferrer" className={`relative z-10 flex h-9 w-9 items-center justify-center rounded-lg text-gray-500 dark:text-navy-400 transition-all ${s.color}`} aria-label={s.label}>{s.icon}</a>
            ))}
          </div>
        </div>
        <div className="my-8 h-px bg-gray-200 dark:bg-navy-800/50" aria-hidden="true" />
        <div className="flex flex-wrap gap-2 justify-center mb-6">
          {badges.map(b => (
            <span key={b.label} className="inline-flex items-center gap-1.5 rounded-full bg-gray-100 dark:bg-navy-800 border border-gray-200 dark:border-navy-700 px-2.5 py-1 text-[10px] font-medium text-gray-700 dark:text-gray-400">
              <span className="w-3 h-3 shrink-0 flex items-center justify-center" aria-hidden="true">{b.icon}</span>
              {b.label}
            </span>
          ))}
        </div>
        <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-between">
          <p className="text-xs text-gray-700 dark:text-gray-300 text-center sm:text-left">&copy; {year} {PERSONAL.name}. {t.footer.rights}</p>
          <p className="text-xs text-gray-600 dark:text-gray-400 text-center sm:text-right max-w-sm">{t.footer.license}</p>
        </div>
      </div>
    </footer>
  );
}
