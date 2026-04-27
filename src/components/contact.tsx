'use client';
import { PERSONAL } from '@/lib/data';
import { useReveal } from '@/lib/use-reveal';
import { WhatsAppIcon, GitHubIcon, LinkedInIcon, InstagramIcon, FacebookIcon, EmailIcon } from './icons';
import { useT } from '@/lib/i18n-provider';

export default function Contact() {
  const { ref: sectionRef, isVisible } = useReveal();
  const t = useT();
  const cards = [
    { icon: <WhatsAppIcon className="w-7 h-7" />, url: PERSONAL.whatsapp, title: t.contact.whatsapp, sub: t.contact.whatsappSub, hB: 'hover:border-green-500/30', hBg: 'hover:bg-green-50 dark:hover:bg-green-500/5', iB: 'bg-green-500/10', iC: 'text-green-500' },
    { icon: <LinkedInIcon className="w-7 h-7" />, url: PERSONAL.linkedin, title: t.contact.linkedin, sub: t.contact.linkedinSub, hB: 'hover:border-blue-500/30', hBg: 'hover:bg-blue-50 dark:hover:bg-blue-500/5', iB: 'bg-blue-500/10', iC: 'text-blue-600 dark:text-blue-400' },
    { icon: <GitHubIcon className="w-7 h-7" />, url: PERSONAL.github, title: t.contact.github, sub: t.contact.githubSub, hB: 'hover:border-gray-400/30', hBg: 'hover:bg-gray-50 dark:hover:bg-white/5', iB: 'bg-gray-500/10 dark:bg-white/5', iC: 'text-gray-700 dark:text-white' },
    { icon: <InstagramIcon className="w-7 h-7" />, url: PERSONAL.instagram, title: t.contact.instagram, sub: t.contact.instagramSub, hB: 'hover:border-pink-500/30', hBg: 'hover:bg-pink-50 dark:hover:bg-pink-500/5', iB: 'bg-pink-500/10', iC: 'text-pink-500' },
    { icon: <FacebookIcon className="w-7 h-7" />, url: PERSONAL.facebook, title: t.contact.facebook, sub: t.contact.facebookSub, hB: 'hover:border-blue-600/30', hBg: 'hover:bg-blue-50 dark:hover:bg-blue-500/5', iB: 'bg-blue-600/10', iC: 'text-blue-700 dark:text-blue-500' },
    { icon: <EmailIcon className="w-7 h-7" />, url: `mailto:${PERSONAL.email}`, title: t.contact.email, sub: PERSONAL.email, hB: 'hover:border-accent-500/30', hBg: 'hover:bg-amber-50 dark:hover:bg-accent-500/5', iB: 'bg-accent-500/10', iC: 'text-accent-500' },
  ];
  return (
    <section id="contacto" className="relative py-16 sm:py-24 overflow-hidden" aria-labelledby="contact-heading">
      <div className="absolute inset-0" aria-hidden="true">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent-500/3 to-transparent" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full bg-accent-500/5 blur-[150px]" />
      </div>
      <div ref={sectionRef} className={`relative mx-auto max-w-5xl px-6 lg:px-8 text-center transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <span className="text-xs font-bold uppercase tracking-[0.2em] text-accent-500">{t.contact.sectionLabel}</span>
        <h2 id="contact-heading" className="mt-3 text-3xl font-bold tracking-tight section-title sm:text-4xl lg:text-5xl" style={{ fontFamily: 'var(--font-display)' }}>{t.contact.title}</h2>
        <p className="mt-4 text-lg text-gray-900 dark:text-gray-100 max-w-2xl mx-auto">{t.contact.subtitle}</p>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map(c => (
            <a key={c.title} href={c.url} target="_blank" rel="noopener noreferrer"
              className={`group glass rounded-xl p-5 card-glow flex flex-col items-center gap-3 transition-all ${c.hB} ${c.hBg}`}
              aria-label={`${t.contact.ctaLabel} ${c.title}`}>
              <div className={`flex h-14 w-14 items-center justify-center rounded-full ${c.iB} ${c.iC} transition-all group-hover:scale-110`}>{c.icon}</div>
              <div><h3 className="text-base font-bold text-gray-900 dark:text-white">{c.title}</h3><p className="text-xs text-gray-600 dark:text-gray-300 mt-0.5">{c.sub}</p></div>
            </a>
          ))}
        </div>
        <div className="mt-10">
          <a href={PERSONAL.whatsapp} target="_blank" rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 rounded-2xl bg-green-600 px-8 py-4 text-lg font-bold text-white shadow-2xl shadow-green-600/20 transition-all hover:bg-green-500 hover:-translate-y-1 active:scale-95"
            aria-label={t.contact.ctaLabel}>
            <WhatsAppIcon className="w-6 h-6 transition-transform group-hover:scale-110" />
            {t.contact.cta}
            <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
          </a>
        </div>
      </div>
    </section>
  );
}
