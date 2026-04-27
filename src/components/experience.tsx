'use client';

import { WORK_EXPERIENCE } from '@/lib/data';
import { useReveal } from '@/lib/use-reveal';
import { useT, useI18n } from '@/lib/i18n-provider';

export default function Experience() {
  const { ref, isVisible } = useReveal();
  const t = useT();
  const { locale } = useI18n();

  return (
    <section id="experiencia" className="relative py-16 sm:py-24" aria-labelledby="exp-heading">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-50/40 dark:via-navy-900/20 to-transparent" aria-hidden="true" />
      <div ref={ref} className={`relative mx-auto max-w-7xl px-6 lg:px-8 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>

        {/* Encabezado */}
        <div className="mb-16">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-accent-500">
            {t.experience.sectionLabel}
          </span>
          <h2 id="exp-heading" className="mt-3 text-3xl font-bold tracking-tight section-title sm:text-4xl" style={{ fontFamily: 'var(--font-display)' }}>
            {t.experience.title}
          </h2>
          <div className="mt-3 h-1 w-16 rounded-full bg-gradient-to-r from-accent-500 to-accent-600" aria-hidden="true" />
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Línea vertical — decorativa, sin imagen */}
          <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent-500/60 via-accent-500/20 to-transparent hidden sm:block" aria-hidden="true" />

          <div className="space-y-10">
            {WORK_EXPERIENCE.map((exp, i) => (
              <article
                key={exp.id}
                className="relative sm:pl-10"
                style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                  transition: `opacity 0.6s ease ${i * 120}ms, transform 0.6s ease ${i * 120}ms`,
                }}
                aria-label={`${locale === 'en' ? exp.titleEn : exp.title} — ${exp.company}`}
              >
                {/* Dot timeline — solo forma geométrica, sin iconos */}
                <div className="absolute left-0 top-6 hidden sm:flex items-center justify-center -translate-x-[calc(50%-0.5px)]">
                  <div className={`w-3 h-3 rounded-full border-2 border-white dark:border-navy-950 z-10 ${exp.type === 'active' ? 'bg-accent-500' : 'bg-gray-400 dark:bg-navy-500'}`} aria-hidden="true" />
                  {exp.type === 'active' && (
                    <div className="absolute w-3 h-3 rounded-full bg-accent-500 animate-ping opacity-25" aria-hidden="true" />
                  )}
                </div>

                <div className="glass rounded-xl p-5 sm:p-6 card-glow">
                  {/* Cabecera */}
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                    <div className="min-w-0">
                      <h3 className="text-base font-bold text-gray-900 dark:text-white leading-snug">
                        {locale === 'en' ? exp.titleEn : exp.title}
                      </h3>
                      <p className="text-sm font-semibold text-accent-600 dark:text-accent-400 mt-0.5">
                        {exp.company}
                      </p>
                    </div>
                    <span className={`shrink-0 inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 text-xs font-semibold ${exp.type === 'active' ? 'border-accent-500/30 bg-accent-500/10 text-accent-600 dark:text-accent-400' : 'border-gray-400/30 bg-gray-100 dark:bg-navy-800 text-gray-600 dark:text-gray-300'}`}>
                      <span className={`w-1.5 h-1.5 rounded-full ${exp.type === 'active' ? 'bg-accent-500 animate-pulse' : 'bg-gray-400'}`} aria-hidden="true" />
                      {exp.type === 'active' ? t.experience.active : t.experience.completed}
                    </span>
                  </div>

                  {/* Fecha y ubicación — solo texto, sin iconos ni imágenes */}
                  <div className="flex flex-wrap gap-x-3 gap-y-0.5 mb-4 text-xs text-gray-600 dark:text-gray-400">
                    <span>{locale === 'en' ? exp.periodEn : exp.period}</span>
                    <span aria-hidden="true">·</span>
                    <span>{exp.location}</span>
                  </div>

                  {/* Tareas — solo texto con bullet decorativo mínimo */}
                  <ul className="space-y-2" role="list">
                    {(locale === 'en' ? exp.tasksEn : exp.tasks).map((task, ti) => (
                      <li key={ti} className="flex items-start gap-2 text-sm text-gray-800 dark:text-gray-200">
                        <span className="mt-[7px] w-1.5 h-1.5 rounded-full bg-accent-500/70 shrink-0" aria-hidden="true" />
                        {task}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
