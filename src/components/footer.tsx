'use client';
import { PERSONAL } from '@/lib/data';
import { WhatsAppIcon, GitHubIcon, LinkedInIcon, InstagramIcon, FacebookIcon, EmailIcon } from './icons';
import ProtectedImage from './protected-image';
import { useT } from '@/lib/i18n-provider';

const BADGE_ICON = {
  a11y: (
    <svg width="12" height="12" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className="text-black dark:text-white">
      <path fill="currentColor" fillRule="evenodd" d="M13.4338078,4.18678 C13.5358078,4.65874 13.2359078,5.12406 12.7640078,5.22611 L10.0455078,5.81388 C9.58532779,5.91339 9.25686779,6.32045 9.25686779,6.7913 L9.25686779,7.67098 C9.25686779,8.62688 9.42818779,9.57506 9.76270779,10.4705 L11.3873078,14.8195 C11.5563078,15.2718 11.3266078,15.7755 10.8742078,15.9445 C10.4219078,16.1135 9.91820779,15.8837 9.74930779,15.4314 L8.19520779,11.2713 C8.03331779,10.8379 7.42032779,10.8379 7.25843779,11.2713 L5.70436779,15.4314 C5.53538779,15.8837 5.03171779,16.1135 4.57938779,15.9445 C4.12705779,15.7755 3.89734779,15.2718 4.06632779,14.8195 L5.69097779,10.4704 C6.02549779,9.57496 6.19681779,8.62678 6.19681779,7.67088 L6.19681779,6.79129 C6.19681779,6.32044 5.86835779,5.91338 5.40814779,5.81388 L2.68971779,5.22611 C2.21775779,5.12406 1.91788779,4.65874 2.01992779,4.18678 C2.12197779,3.71483 2.58729779,3.41495 3.05925779,3.517 L6.88151779,4.34344 C7.43863779,4.46389 8.01506779,4.46389 8.57218779,4.34344 L12.3944078,3.517 C12.8664078,3.41495 13.3317078,3.71483 13.4338078,4.18678 Z M7.68341779,0 C8.6491429,0 9.43201779,0.782874886 9.43201779,1.7486 C9.43201779,2.71432511 8.6491429,3.4972 7.68341779,3.4972 C6.71769267,3.4972 5.93481779,2.71432511 5.93481779,1.7486 C5.93481779,0.782874886 6.71769267,0 7.68341779,0 Z" />
    </svg>
  ),
  pwa: (
    // eslint-disable-next-line @next/next/no-img-element
    <img width="12" height="12" src="https://img.icons8.com/sf-ultralight/100/iphone14-pro.png" alt="" className="dark:invert" draggable={false} />
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
