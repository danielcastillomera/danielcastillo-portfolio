'use client';

import { SKILL_CATEGORIES } from '@/lib/data';
import { useReveal } from '@/lib/use-reveal';

export default function Skills() {
  const { ref: sectionRef, isVisible } = useReveal();

  const categoryIcons: Record<string, React.ReactNode> = {
    Frontend: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z" />
      </svg>
    ),
    Backend: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 14.25h13.5m-13.5 0a3 3 0 01-3-3m3 3a3 3 0 100 6h13.5a3 3 0 100-6m-16.5-3a3 3 0 013-3h13.5a3 3 0 013 3m-19.5 0a4.5 4.5 0 01.9-2.7L5.737 5.1a3.375 3.375 0 012.7-1.35h7.126c1.062 0 2.062.5 2.7 1.35l2.587 3.45a4.5 4.5 0 01.9 2.7m0 0a3 3 0 01-3 3m0 3h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008zm-3 6h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008z" />
      </svg>
    ),
    'Base de Datos & Cloud': (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.502 4.502 0 002.25 15z" />
      </svg>
    ),
    'Herramientas & Metodologías': (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17l-5.385-5.385a2.025 2.025 0 010-2.865l5.385-5.385a2.025 2.025 0 012.865 0l5.385 5.385a2.025 2.025 0 010 2.865l-5.385 5.385a2.025 2.025 0 01-2.865 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7" />
      </svg>
    ),
  };

  return (
    <section
      id="habilidades"
      className="relative py-24 sm:py-32 overflow-hidden"
      aria-labelledby="skills-heading"
    >
      {/* Background pattern */}
      <div className="absolute inset-0" aria-hidden="true">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-navy-900/40 to-transparent" />
        <div className="absolute top-1/3 right-0 w-[500px] h-[500px] rounded-full bg-amber-500/3 blur-[150px]" />
      </div>

      <div
        ref={sectionRef}
        className={`relative mx-auto max-w-7xl px-6 lg:px-8 transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        {/* Section header */}
        <div className="mb-16">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-amber-500">
            Mis capacidades
          </span>
          <h2
            id="skills-heading"
            className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Habilidades técnicas
          </h2>
          <div className="mt-3 h-1 w-16 rounded-full bg-gradient-to-r from-amber-500 to-amber-600" aria-hidden="true" />
        </div>

        {/* Skills grid */}
        <div className="grid gap-6 sm:grid-cols-2">
          {SKILL_CATEGORIES.map((category, catIdx) => (
            <div
              key={category.name}
              className="glass rounded-xl p-6 card-glow"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                transition: `opacity 0.6s ease ${catIdx * 150}ms, transform 0.6s ease ${catIdx * 150}ms`,
              }}
            >
              {/* Category header */}
              <div className="flex items-center gap-3 mb-5">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-amber-500/10 text-amber-400" aria-hidden="true">
                  {categoryIcons[category.name] || (
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
                    </svg>
                  )}
                </div>
                <h3 className="text-base font-bold text-white">{category.name}</h3>
              </div>

              {/* Skills list */}
              <div className="space-y-4" role="list" aria-label={`Habilidades de ${category.name}`}>
                {category.skills.map((skill, skillIdx) => (
                  <div key={skill.name} role="listitem">
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-sm font-medium text-navy-200">{skill.name}</span>
                      <span className="text-xs font-mono text-navy-400" aria-label={`${skill.level} por ciento`}>
                        {skill.level}%
                      </span>
                    </div>
                    <div
                      className="h-2 w-full rounded-full bg-navy-800/60 overflow-hidden"
                      role="progressbar"
                      aria-valuenow={skill.level}
                      aria-valuemin={0}
                      aria-valuemax={100}
                      aria-label={`${skill.name}: ${skill.level}%`}
                    >
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-amber-500 to-amber-400 transition-all duration-1000 ease-out"
                        style={{
                          width: isVisible ? `${skill.level}%` : '0%',
                          transitionDelay: `${catIdx * 150 + skillIdx * 80}ms`,
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
