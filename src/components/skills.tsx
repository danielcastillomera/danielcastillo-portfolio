'use client';

import { SKILL_CATEGORIES } from '@/lib/data';
import { useReveal } from '@/lib/use-reveal';
import { useT } from '@/lib/i18n-provider';

export default function Skills() {
  const { ref: sectionRef, isVisible } = useReveal();
  const t = useT();

  return (
    <section id="habilidades" className="relative py-24 sm:py-32 overflow-hidden" aria-labelledby="skills-heading">
      <div className="absolute inset-0" aria-hidden="true">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-50/50 dark:via-navy-900/40 to-transparent" />
        <div className="absolute top-1/3 right-0 w-[500px] h-[500px] rounded-full bg-accent-500/3 blur-[150px]" />
      </div>

      <div
        ref={sectionRef}
        className={`relative mx-auto max-w-7xl px-6 lg:px-8 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
      >
        <div className="mb-16">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-accent-500">
            {t.skills.sectionLabel}
          </span>
          <h2
            id="skills-heading"
            className="mt-3 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            {t.skills.title}
          </h2>
          <div className="mt-3 h-1 w-16 rounded-full bg-gradient-to-r from-accent-500 to-accent-600" aria-hidden="true" />
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SKILL_CATEGORIES.map((category, catIdx) => {
            const categoryName = catIdx === 0 ? t.skills.categories.frontend
              : catIdx === 1 ? t.skills.categories.backend
              : catIdx === 2 ? t.skills.categories.database
              : catIdx === 3 ? t.skills.categories.tools
              : catIdx === 4 ? t.skills.categories.marketing
              : t.skills.categories.uiux;

            return (
              <div
                key={category.name}
                className="glass rounded-xl p-6 card-glow"
                style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                  transition: `opacity 0.6s ease ${catIdx * 100}ms, transform 0.6s ease ${catIdx * 100}ms`,
                }}
              >
                {/* Category header with official devicon logo */}
                <div className="flex items-center gap-3 mb-5">
                  <div
                    className="flex h-10 w-10 items-center justify-center rounded-lg bg-white dark:bg-navy-800 shadow-sm border border-gray-100 dark:border-navy-700"
                    aria-hidden="true"
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={category.iconSrc}
                      alt={category.iconAlt}
                      width={28}
                      height={28}
                      className={`w-7 h-7 object-contain ${
                        // GitHub icon is dark — invert in dark mode
                        category.iconAlt?.includes('GitHub') ? 'dark:invert' : ''
                      }`}
                      loading="lazy"
                    />
                  </div>
                  <h3 className="text-sm font-bold text-gray-900 dark:text-white leading-tight">
                    {categoryName}
                  </h3>
                </div>

                {/* Skills bars */}
                <div className="space-y-4" role="list" aria-label={`Habilidades de ${categoryName}`}>
                  {category.skills.map((skill, skillIdx) => (
                    <div key={skill.name} role="listitem">
                      <div className="flex items-center justify-between mb-1.5">
                        <span className="text-sm font-medium text-gray-900 dark:text-gray-100">
                          {skill.name}
                        </span>
                        <span
                          className="text-xs font-mono text-gray-500 dark:text-gray-400"
                          aria-label={`${skill.level} por ciento`}
                        >
                          {skill.level}%
                        </span>
                      </div>
                      <div
                        className="h-2 w-full rounded-full bg-gray-100 dark:bg-navy-800/60 overflow-hidden"
                        role="progressbar"
                        aria-valuenow={skill.level}
                        aria-valuemin={0}
                        aria-valuemax={100}
                        aria-label={`${skill.name}: ${skill.level}%`}
                      >
                        <div
                          className="h-full rounded-full bg-gradient-to-r from-accent-500 to-accent-400 transition-all duration-1000 ease-out"
                          style={{
                            width: isVisible ? `${skill.level}%` : '0%',
                            transitionDelay: `${catIdx * 100 + skillIdx * 80}ms`,
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Learning / Exploratory section */}
        <div className="mt-10 glass rounded-xl p-6">
          <h3 className="text-sm font-bold text-accent-500 uppercase tracking-wider mb-4">
            {t.skills.sectionLabel === 'Mis capacidades' ? 'En Aprendizaje / Exploratorio' : 'Learning / Exploratory'}
          </h3>
          <div className="flex flex-wrap gap-2">
            {[
              'Docker', 'Redis', 'Jest / Vitest', 'GitHub Actions (CI/CD)',
              'Microservicios', 'Express.js', 'REST API Design',
              'Prompt Engineering', 'AI-assisted Development',
              'Python (básico)', 'Administración Enterprise',
            ].map((item) => (
              <span
                key={item}
                className="inline-flex items-center gap-1.5 rounded-md border border-dashed border-accent-500/30 bg-accent-500/5 px-2.5 py-1 text-xs font-medium text-accent-600 dark:text-accent-400"
              >
                <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                </svg>
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
