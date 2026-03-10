'use client';

import { PERSONAL, EDUCATION } from '@/lib/data';
import { useReveal } from '@/lib/use-reveal';
import { LinkedInIcon, InstagramIcon, FacebookIcon, GitHubIcon, WhatsAppIcon } from './icons';
import ProtectedImage from './protected-image';

export default function AboutMe() {
  const { ref: sectionRef, isVisible } = useReveal();

  const stats = [
    { value: '10+', label: 'Módulos desarrollados' },
    { value: '2', label: 'Proyectos activos' },
    { value: '2.5.0', label: 'Versión Dashboard' },
    { value: '6/10', label: 'Semestre actual' },
  ];

  const socialLinks = [
    { icon: <LinkedInIcon className="w-4 h-4" />, url: PERSONAL.linkedin, label: 'LinkedIn', color: 'hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-500/10' },
    { icon: <InstagramIcon className="w-4 h-4" />, url: PERSONAL.instagram, label: 'Instagram', color: 'hover:text-pink-500 hover:bg-pink-50 dark:hover:bg-pink-500/10' },
    { icon: <FacebookIcon className="w-4 h-4" />, url: PERSONAL.facebook, label: 'Facebook', color: 'hover:text-blue-700 dark:hover:text-blue-500 hover:bg-blue-50 dark:hover:bg-blue-500/10' },
    { icon: <GitHubIcon className="w-4 h-4" />, url: PERSONAL.github, label: 'GitHub', color: 'hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-white/10' },
    { icon: <WhatsAppIcon className="w-4 h-4" />, url: PERSONAL.whatsapp, label: 'WhatsApp', color: 'hover:text-green-600 dark:hover:text-green-400 hover:bg-green-50 dark:hover:bg-green-500/10' },
  ];

  return (
    <section id="sobre-mi" className="relative py-24 sm:py-32" aria-labelledby="about-heading">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-50/50 dark:via-navy-900/20 to-transparent" aria-hidden="true" />

      <div
        ref={sectionRef}
        className={`relative mx-auto max-w-7xl px-6 lg:px-8 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
      >
        {/* Section header */}
        <div className="mb-16">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-accent-500">Conóceme</span>
          <h2 id="about-heading" className="mt-3 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl" style={{ fontFamily: 'var(--font-display)' }}>
            Sobre mí
          </h2>
          <div className="mt-3 h-1 w-16 rounded-full bg-gradient-to-r from-accent-500 to-accent-600" aria-hidden="true" />
        </div>

        <div className="grid gap-12 lg:grid-cols-5 lg:gap-16">
          {/* Left content — 3 cols */}
          <div className="lg:col-span-3 space-y-6">
            {/* Profile card with photo */}
            <div className="glass rounded-xl p-6 flex flex-col sm:flex-row items-center sm:items-start gap-5">
              <div className="shrink-0">
                <div className="relative h-24 w-24 rounded-xl overflow-hidden ring-2 ring-accent-500/20 shadow-lg">
                  <ProtectedImage
                    src={PERSONAL.profileImage}
                    alt={`Fotografía de ${PERSONAL.name}`}
                    width={96}
                    height={96}
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
              <div className="text-center sm:text-left">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white">{PERSONAL.name}</h3>
                <p className="text-sm text-accent-600 dark:text-accent-400 font-medium">{PERSONAL.role}</p>
                <div className="mt-2 flex flex-wrap gap-2 justify-center sm:justify-start text-xs text-gray-500 dark:text-navy-400">
                  <span className="inline-flex items-center gap-1">
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" /></svg>
                    {PERSONAL.location}
                  </span>
                  <span>&bull;</span>
                  <span>{PERSONAL.age} años</span>
                  <span>&bull;</span>
                  <span>Nacionalidad {PERSONAL.nationality}</span>
                </div>
                {/* Social icons */}
                <div className="mt-3 flex gap-1.5 justify-center sm:justify-start">
                  {socialLinks.map((s) => (
                    <a
                      key={s.label}
                      href={s.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex h-8 w-8 items-center justify-center rounded-lg text-gray-400 dark:text-navy-400 transition-all ${s.color}`}
                      aria-label={s.label}
                    >
                      {s.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <p className="text-lg leading-relaxed text-gray-700 dark:text-navy-200">{PERSONAL.bio}</p>

            <p className="text-base leading-relaxed text-gray-600 dark:text-navy-300">
              Actualmente curso el <strong className="text-gray-900 dark:text-white font-semibold">{EDUCATION.progress}</strong> de{' '}
              <strong className="text-gray-900 dark:text-white font-semibold">{EDUCATION.degree}</strong> en la{' '}
              <strong className="text-gray-900 dark:text-white font-semibold">{EDUCATION.institution}</strong>.
              Mi proyecto principal, <em className="text-accent-600 dark:text-accent-400">Dashboard Enterprise</em>, es un sistema
              de gestión empresarial multi-tenant con facturación electrónica cumpliendo la normativa del SRI Ecuador.
            </p>

            <p className="text-base leading-relaxed text-gray-600 dark:text-navy-300">
              Me enfoco en escribir código limpio, seguro y mantenible. Cada módulo que desarrollo
              sigue estándares profesionales: validación robusta, seguridad a nivel de base de datos (RLS),
              headers HTTP de seguridad, diseño responsive mobile-first, y accesibilidad web (WCAG).
            </p>

            {/* Education */}
            <div className="mt-4 glass rounded-xl p-6">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-accent-500/10" aria-hidden="true">
                  <svg className="w-6 h-6 text-accent-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-base font-bold text-gray-900 dark:text-white">{EDUCATION.institution}</h3>
                  <p className="text-sm text-gray-600 dark:text-navy-300">{EDUCATION.degree}</p>
                  <p className="mt-1 text-xs text-gray-400 dark:text-navy-400">{EDUCATION.period} · {EDUCATION.progress}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right — Stats + capabilities */}
          <div className="lg:col-span-2">
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, i) => (
                <div
                  key={stat.label}
                  className="glass rounded-xl p-5 text-center card-glow"
                  style={{ opacity: isVisible ? 1 : 0, transform: isVisible ? 'translateY(0)' : 'translateY(20px)', transition: `opacity 0.6s ease ${i * 100}ms, transform 0.6s ease ${i * 100}ms` }}
                >
                  <div className="text-2xl font-bold text-gradient sm:text-3xl" style={{ fontFamily: 'var(--font-display)' }}>{stat.value}</div>
                  <div className="mt-1 text-xs font-medium text-gray-500 dark:text-navy-400 leading-tight">{stat.label}</div>
                </div>
              ))}
            </div>

            <div className="mt-6 glass rounded-xl p-6 space-y-3">
              <h3 className="text-sm font-bold uppercase tracking-wider text-accent-600 dark:text-accent-400">Lo que hago</h3>
              {[
                'Sistemas empresariales multi-tenant',
                'Facturación electrónica SRI Ecuador',
                'APIs REST con validación robusta',
                'Interfaces responsive y accesibles',
                'Seguridad: RLS, CSP, HSTS',
              ].map((item) => (
                <div key={item} className="flex items-start gap-2.5 text-sm text-gray-600 dark:text-navy-300">
                  <svg className="w-4 h-4 mt-0.5 shrink-0 text-accent-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                  </svg>
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
