'use client';

import { PERSONAL, EDUCATION } from '@/lib/data';
import { useReveal } from '@/lib/use-reveal';

export default function AboutMe() {
  const { ref: sectionRef, isVisible } = useReveal();

  const stats = [
    { value: '10+', label: 'Módulos desarrollados' },
    { value: '2', label: 'Proyectos activos' },
    { value: '2.5.0', label: 'Versión Dashboard' },
    { value: '6/10', label: 'Semestre actual' },
  ];

  return (
    <section
      id="sobre-mi"
      className="relative py-24 sm:py-32"
      aria-labelledby="about-heading"
    >
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-navy-900/20 to-transparent" aria-hidden="true" />

      <div
        ref={sectionRef}
        className={`relative mx-auto max-w-7xl px-6 lg:px-8 transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        {/* Section header */}
        <div className="mb-16">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-amber-500">
            Conóceme
          </span>
          <h2
            id="about-heading"
            className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Sobre mí
          </h2>
          <div className="mt-3 h-1 w-16 rounded-full bg-gradient-to-r from-amber-500 to-amber-600" aria-hidden="true" />
        </div>

        <div className="grid gap-12 lg:grid-cols-5 lg:gap-16">
          {/* Text content — 3 cols */}
          <div className="lg:col-span-3 space-y-6">
            <p className="text-lg leading-relaxed text-navy-200">
              {PERSONAL.bio}
            </p>
            <p className="text-base leading-relaxed text-navy-300">
              Actualmente curso el <strong className="text-white font-semibold">{EDUCATION.progress}</strong> de{' '}
              <strong className="text-white font-semibold">{EDUCATION.degree}</strong> en la{' '}
              <strong className="text-white font-semibold">{EDUCATION.institution}</strong>.
              Mi proyecto principal, <em className="text-amber-400">Dashboard Enterprise</em>, es un sistema
              de gestión empresarial multi-tenant con facturación electrónica cumpliendo la normativa del
              SRI Ecuador — construido desde cero con las mejores prácticas de la industria.
            </p>
            <p className="text-base leading-relaxed text-navy-300">
              Me enfoco en escribir código limpio, seguro y mantenible. Cada módulo que desarrollo
              sigue estándares profesionales: validación robusta, seguridad a nivel de base de datos (RLS),
              headers HTTP de seguridad, diseño responsive mobile-first, y accesibilidad web (WCAG).
            </p>

            {/* Education card */}
            <div className="mt-8 glass rounded-xl p-6">
              <div className="flex items-start gap-4">
                <div
                  className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-amber-500/10"
                  aria-hidden="true"
                >
                  <svg className="w-6 h-6 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-base font-bold text-white">{EDUCATION.institution}</h3>
                  <p className="text-sm text-navy-300">{EDUCATION.degree}</p>
                  <p className="mt-1 text-xs text-navy-400">{EDUCATION.period} · {EDUCATION.progress}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Stats grid — 2 cols */}
          <div className="lg:col-span-2">
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, i) => (
                <div
                  key={stat.label}
                  className="glass rounded-xl p-5 text-center card-glow"
                  style={{
                    transitionDelay: `${i * 100}ms`,
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                    transition: 'opacity 0.6s ease, transform 0.6s ease',
                  }}
                >
                  <div className="text-2xl font-bold text-gradient sm:text-3xl" style={{ fontFamily: 'var(--font-display)' }}>
                    {stat.value}
                  </div>
                  <div className="mt-1 text-xs font-medium text-navy-400 leading-tight">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            {/* What I do bullets */}
            <div className="mt-6 glass rounded-xl p-6 space-y-3">
              <h3 className="text-sm font-bold uppercase tracking-wider text-amber-400">Lo que hago</h3>
              {[
                'Sistemas empresariales multi-tenant',
                'Facturación electrónica SRI Ecuador',
                'APIs REST con validación robusta',
                'Interfaces responsive y accesibles',
                'Seguridad: RLS, CSP, HSTS',
              ].map((item) => (
                <div key={item} className="flex items-start gap-2.5 text-sm text-navy-300">
                  <svg className="w-4 h-4 mt-0.5 shrink-0 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden="true">
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
