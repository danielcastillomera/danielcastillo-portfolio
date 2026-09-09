'use client';

import Image from 'next/image';
import { PERSONAL, EDUCATION } from '@/lib/data';
import { useReveal } from '@/lib/use-reveal';
import { LinkedInIcon, InstagramIcon, FacebookIcon, GitHubIcon, WhatsAppIcon } from './icons';
import ProtectedImage from './protected-image';
import { useT, useI18n } from '@/lib/i18n-provider';

export default function AboutMe() {
  const { ref: sectionRef, isVisible } = useReveal();
  const t = useT();
  const { locale } = useI18n();

  const socialLinks = [
    { icon: <LinkedInIcon className="w-4 h-4" />, url: PERSONAL.linkedin, label: 'LinkedIn', color: 'hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-500/10' },
    { icon: <InstagramIcon className="w-4 h-4" />, url: PERSONAL.instagram, label: 'Instagram', color: 'hover:text-pink-500 hover:bg-pink-50 dark:hover:bg-pink-500/10' },
    { icon: <FacebookIcon className="w-4 h-4" />, url: PERSONAL.facebook, label: 'Facebook', color: 'hover:text-blue-700 dark:hover:text-blue-500 hover:bg-blue-50 dark:hover:bg-blue-500/10' },
    { icon: <GitHubIcon className="w-4 h-4" />, url: PERSONAL.github, label: 'GitHub', color: 'hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-white/10' },
    { icon: <WhatsAppIcon className="w-4 h-4" />, url: PERSONAL.whatsapp, label: 'WhatsApp', color: 'hover:text-green-600 dark:hover:text-green-400 hover:bg-green-50 dark:hover:bg-green-500/10' },
  ];

  const edu = EDUCATION[1]; // Universidad de Guayaquil

  const bioES = (
    <>
      Soy un <strong className="font-bold text-accent-600 dark:text-accent-400">Ingeniero de Software en formación</strong>{' '}
      (cursando <strong className="font-bold text-accent-600 dark:text-accent-400">7mo semestre</strong>) apasionado por construir{' '}
      productos digitales que combinan <strong className="font-bold text-accent-600 dark:text-accent-400">arquitecturas robustas</strong>{' '}
      con <strong className="font-bold text-accent-600 dark:text-accent-400">experiencias de usuario excepcionales</strong>.{' '}
      Como <strong className="font-bold text-accent-600 dark:text-accent-400">Full Stack Developer</strong>, mi enfoque técnico se centra en el{' '}
      ecosistema Enterprise (<strong className="font-bold text-accent-600 dark:text-accent-400">.NET, C#, SQL</strong>) y herramientas modernas{' '}
      (<strong className="font-bold text-accent-600 dark:text-accent-400">TypeScript, Angular, NestJS</strong>).{' '}
      Me diferencio por integrar activamente herramientas de{' '}
      <strong className="font-bold text-accent-600 dark:text-accent-400">Inteligencia Artificial</strong>{' '}
      en mi flujo de desarrollo para maximizar la calidad del código y aplicar sólidos principios de{' '}
      <strong className="font-bold text-accent-600 dark:text-accent-400">UI/UX</strong>{' '}
      en cada interfaz que construyo.
    </>
  );
  const bioEN = (
    <>
      I am a <strong className="font-bold text-accent-600 dark:text-accent-400">Software Engineering student</strong>{' '}
      (currently in my <strong className="font-bold text-accent-600 dark:text-accent-400">7th semester</strong>) passionate about building{' '}
      digital products that combine <strong className="font-bold text-accent-600 dark:text-accent-400">robust architectures</strong>{' '}
      with <strong className="font-bold text-accent-600 dark:text-accent-400">exceptional user experiences</strong>.{' '}
      As a <strong className="font-bold text-accent-600 dark:text-accent-400">Full Stack Developer</strong>, my technical focus is centered on the{' '}
      Enterprise ecosystem (<strong className="font-bold text-accent-600 dark:text-accent-400">.NET, C#, SQL</strong>) and modern tools{' '}
      (<strong className="font-bold text-accent-600 dark:text-accent-400">TypeScript, Angular, NestJS</strong>).{' '}
      I stand out by actively integrating{' '}
      <strong className="font-bold text-accent-600 dark:text-accent-400">Artificial Intelligence</strong>{' '}
      tools into my development workflow to maximize code quality and apply solid{' '}
      <strong className="font-bold text-accent-600 dark:text-accent-400">UI/UX</strong>{' '}
      principles in every interface I build.
    </>
  );

  const paraES = (
    <>
      Diseñé, construí y desplegué en producción{' '}
      <strong className="font-bold text-accent-600 dark:text-accent-400">Dashboard Enterprise</strong>, sistema de gestión empresarial{' '}
      multi-módulo orientado al comercio y retail ecuatoriano, con{' '}
      <strong className="font-bold text-accent-600 dark:text-accent-400">motor de facturación electrónica SRI Ecuador</strong>.{' '}
      Aplico principios de <strong className="font-bold text-accent-600 dark:text-accent-400">Clean Code, SOLID, DRY y KISS</strong>;{' '}
      trabajo con <strong className="font-bold text-accent-600 dark:text-accent-400">Agile y Scrum</strong>,{' '}
      control de versiones con <strong className="font-bold text-accent-600 dark:text-accent-400">Git</strong>{' '}
      y flujos de desarrollo asistido por IA (GitHub Copilot, Claude Code, Cursor).
    </>
  );
  const paraEN = (
    <>
      I designed, built and deployed to production{' '}
      <strong className="font-bold text-accent-600 dark:text-accent-400">Dashboard Enterprise</strong>, a multi-module enterprise management system for Ecuadorian commerce and retail, with an{' '}
      <strong className="font-bold text-accent-600 dark:text-accent-400">SRI Ecuador electronic invoicing engine</strong>.{' '}
      I apply <strong className="font-bold text-accent-600 dark:text-accent-400">Clean Code, SOLID, DRY and KISS</strong> principles;{' '}
      I work with <strong className="font-bold text-accent-600 dark:text-accent-400">Agile and Scrum</strong>,{' '}
      version control with <strong className="font-bold text-accent-600 dark:text-accent-400">Git</strong>{' '}
      and AI-assisted development flows (GitHub Copilot, Claude Code, Cursor).
    </>
  );

  const finalSentenceES = (
    <>
      Para mí, el código no es solo una carrera:{' '}
      <strong className="font-bold text-accent-600 dark:text-accent-400">es la herramienta con la que construyo soluciones digitales reales, documentadas y escalables</strong>.
    </>
  );
  const finalSentenceEN = (
    <>
      For me, code is not just a career:{' '}
      <strong className="font-bold text-accent-600 dark:text-accent-400">it is the tool with which I build real, documented and scalable digital solutions</strong>.
    </>
  );

  return (
    <section id="sobre-mi" className="relative py-16 sm:py-24 scroll-mt-20" aria-labelledby="about-heading">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-50/50 dark:via-navy-900/20 to-transparent" aria-hidden="true" />
      <div ref={sectionRef} className={`relative mx-auto max-w-5xl px-6 lg:px-8 flex flex-col items-center text-center transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>

        <div className="mb-16">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-accent-500">{t.about.sectionLabel}</span>
          <h2 id="about-heading" className="mt-3 text-3xl font-bold tracking-tight section-title sm:text-4xl" style={{ fontFamily: 'var(--font-display)' }}>
            {t.about.title}
          </h2>
          <div className="mx-auto mt-3 h-1 w-16 rounded-full bg-gradient-to-r from-accent-500 to-accent-600" aria-hidden="true" />
        </div>

        {/* Profile card */}
        <div className="glass rounded-xl p-6 flex flex-col items-center gap-5 w-full max-w-xl">
          <div className="shrink-0">
            <div className="relative overflow-hidden ring-2 ring-accent-500/20 shadow-lg rounded-lg" style={{ width: '84px', height: '130px' }}>
              <ProtectedImage
                src={PERSONAL.profileImage}
                alt={`Foto de perfil de ${PERSONAL.name}`}
                width={84}
                height={130}
                className="h-full w-full object-cover object-top"
              />
            </div>
          </div>
          <div className="text-center min-w-0">
            <h3 className="text-lg font-bold text-gray-900 dark:text-white">{PERSONAL.name}</h3>
            <p className="text-sm text-accent-600 dark:text-accent-400 font-medium leading-snug">{PERSONAL.role}</p>
            <div className="mt-2 flex flex-wrap items-center justify-center gap-2 text-xs text-gray-700 dark:text-gray-300">
              <span className="inline-flex items-center gap-1">
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" /></svg>
                {PERSONAL.location}
              </span>
              <span aria-hidden="true">&bull;</span>
              <span>{PERSONAL.age} {locale === 'en' ? 'years old' : 'años'}</span>
              <span aria-hidden="true">&bull;</span>
              <span>{locale === 'en' ? 'Ecuadorian nationality' : 'Nacionalidad Ecuatoriana'}</span>
            </div>
            <div className="mt-3 flex gap-1.5 justify-center">
              {socialLinks.map((s) => (
                <a key={s.label} href={s.url} target="_blank" rel="noopener noreferrer"
                  className={`flex h-8 w-8 items-center justify-center rounded-lg text-gray-500 dark:text-navy-400 transition-all ${s.color}`}
                  aria-label={s.label}>
                  {s.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bio */}
        <div className="mt-8 max-w-2xl space-y-5 text-left sm:text-center">
          <p className="text-base leading-relaxed text-gray-900 dark:text-gray-100">{locale === 'en' ? bioEN : bioES}</p>
          <p className="text-base leading-relaxed text-gray-900 dark:text-gray-100">{locale === 'en' ? paraEN : paraES}</p>
          <p className="text-base leading-relaxed text-gray-900 dark:text-gray-100 italic">{locale === 'en' ? finalSentenceEN : finalSentenceES}</p>
        </div>

        {/* Capabilities */}
        <div id="about-capacidades" className="glass rounded-xl p-5 mt-10 w-full max-w-2xl scroll-mt-24">
          <h3 className="text-xs font-bold uppercase tracking-wider text-accent-600 dark:text-accent-400 mb-3">{t.about.capabilities}</h3>
          <div className="space-y-2 text-left">
            {t.about.items.map((item: string) => (
              <div key={item} className="flex items-start gap-2.5 text-sm text-gray-900 dark:text-gray-100">
                <svg className="w-4 h-4 mt-0.5 shrink-0 text-accent-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                </svg>
                {item}
              </div>
            ))}
          </div>
        </div>

        {/* Educación + Idiomas */}
        <div className="mt-6 grid gap-4 sm:grid-cols-2 w-full max-w-2xl">
          <div id="about-educacion" className="glass rounded-xl p-6 flex items-start gap-4 text-left scroll-mt-24">
            {edu.logo ? (
              <div
                className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-white p-1.5 ring-1 ring-gray-200 shadow-sm select-none"
                onContextMenu={e => e.preventDefault()}
              >
                <Image
                  src={edu.logo}
                  alt={locale === 'en' ? edu.institutionEn : edu.institution}
                  width={40}
                  height={31}
                  draggable={false}
                  className="h-auto w-full object-contain pointer-events-none"
                  onContextMenu={e => e.preventDefault()}
                />
              </div>
            ) : (
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-accent-500/10" aria-hidden="true">
                <svg className="w-6 h-6 text-accent-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" /></svg>
              </div>
            )}
            <div className="min-w-0">
              <h3 className="text-sm font-bold text-gray-900 dark:text-white leading-snug">{locale === 'en' ? edu.institutionEn : edu.institution}</h3>
              <p className="text-xs text-gray-800 dark:text-gray-200 mt-0.5">{locale === 'en' ? edu.degreeEn : edu.degree}</p>
              <p className="text-[11px] text-gray-600 dark:text-gray-400 mt-0.5">{locale === 'en' ? edu.facultyEn : edu.faculty}</p>
              <p className="mt-1 text-[11px] text-gray-500 dark:text-gray-400">{locale === 'en' ? edu.periodEn : edu.period} · {locale === 'en' ? edu.progressEn : edu.progress}</p>
            </div>
          </div>

          <div id="about-idiomas" className="glass rounded-xl p-6 flex items-center gap-4 text-left scroll-mt-24">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-accent-500/10" aria-hidden="true">
              <svg className="w-6 h-6 text-accent-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 21l5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 016-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m6.334-12.138a48.19 48.19 0 016.333 0M9 5.25a48.19 48.19 0 016.333 0m0 0c1.11.055 2.219.13 3.323.226" />
              </svg>
            </div>
            <div>
              <h3 className="text-sm font-bold text-gray-900 dark:text-white">{locale === 'en' ? 'English B1' : 'Inglés B1'}</h3>
              <p className="text-xs text-gray-700 dark:text-gray-300 mt-0.5">{locale === 'en' ? 'Written, listening and spoken' : 'Escrito, escucha y hablado'}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
