'use client';

import { useState, useEffect } from 'react';
import { PROJECTS } from '@/lib/data';
import { useReveal } from '@/lib/use-reveal';
import { useT, useI18n } from '@/lib/i18n-provider';

export default function Projects() {
  const { ref: sectionRef, isVisible } = useReveal();
  const [versions, setVersions] = useState<Record<string, string>>({});
  const t = useT();
  const { locale } = useI18n();

  useEffect(() => {
    PROJECTS.forEach(p => {
      if (p.githubApiUrl) {
        fetch(p.githubApiUrl)
          .then(r => r.json())
          .then(pkg => { if (pkg?.version) setVersions(prev => ({ ...prev, [p.id]: `v${pkg.version}` })); })
          .catch(() => {});
      }
    });
  }, []);

  const featured = PROJECTS.find(p => p.highlight);
  const others   = PROJECTS.filter(p => !p.highlight);

  return (
    <section id="proyectos" className="relative py-24 sm:py-32" aria-labelledby="projects-heading">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50/50 dark:from-navy-900/30 via-transparent to-gray-50/50 dark:to-navy-900/30" aria-hidden="true" />
      <div ref={sectionRef} className={`relative mx-auto max-w-7xl px-6 lg:px-8 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>

        {/* Encabezado */}
        <div className="mb-16">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-accent-500">{t.projects.sectionLabel}</span>
          <h2 id="projects-heading" className="mt-3 text-3xl font-bold tracking-tight section-title sm:text-4xl" style={{ fontFamily: 'var(--font-display)' }}>
            {t.projects.title}
          </h2>
          <div className="mt-3 h-1 w-16 rounded-full bg-gradient-to-r from-accent-500 to-accent-600" aria-hidden="true" />
        </div>

        {/* Proyecto destacado */}
        {featured && (
          <article className="glass rounded-2xl overflow-hidden card-glow mb-12" aria-label={featured.title}>
            {/* Barra superior — solo texto, sin iconos de ventana */}
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-gray-100 dark:border-navy-700/50 px-5 py-3 sm:px-8">
              <div className="flex items-center gap-2 min-w-0">
                <span className="text-xs font-mono text-gray-500 dark:text-navy-400 break-all sm:truncate">
                  {featured.title.toLowerCase().replace(/\s+/g, '-')}/
                </span>
              </div>
              <div className="flex items-center gap-2 flex-wrap">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-accent-500/30 bg-accent-500/10 px-2.5 py-1 text-xs font-semibold text-accent-600 dark:text-accent-400 whitespace-nowrap">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent-500 animate-pulse" aria-hidden="true" />
                  {locale === 'en' ? featured.statusEn : featured.status}
                </span>
                <span className="rounded-md bg-gray-100 dark:bg-navy-700/60 px-2.5 py-1 text-xs font-mono text-gray-800 dark:text-gray-100 whitespace-nowrap font-semibold">
                  {versions[featured.id] || featured.version}
                </span>
              </div>
            </div>

            <div className="p-5 sm:p-8 lg:p-10">
              <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
                {/* Columna izquierda */}
                <div className="space-y-5">
                  <div>
                    <span className="inline-flex items-center rounded-md bg-accent-500/10 px-2 py-0.5 text-xs font-bold text-accent-600 dark:text-accent-400 uppercase tracking-wider">
                      {t.projects.individual}
                    </span>
                    <h3 className="mt-2 text-xl font-bold text-gray-900 dark:text-white sm:text-2xl lg:text-3xl break-words" style={{ fontFamily: 'var(--font-display)' }}>
                      {featured.title}
                    </h3>
                  </div>
                  <p className="text-base text-gray-900 dark:text-gray-100 leading-relaxed">
                    {locale === 'en' ? featured.longDescriptionEn : featured.longDescription}
                  </p>

                  {/* Tech stack — solo texto */}
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-navy-400 mb-3">{t.projects.techStack}</h4>
                    <div className="flex flex-wrap gap-2">
                      {featured.techStack.map(tech => (
                        <span key={tech} className="rounded-md border border-gray-200 dark:border-navy-700/60 bg-gray-50 dark:bg-navy-800/40 px-2.5 py-1 text-xs font-medium text-gray-900 dark:text-gray-100">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Links — solo texto */}
                  <div className="flex flex-wrap gap-3 pt-2">
                    {featured.links.map(link => (
                      <a key={link.url} href={link.url} target="_blank" rel="noopener noreferrer"
                        className={`inline-flex items-center gap-2 rounded-lg px-5 py-2.5 text-sm font-semibold transition-all active:scale-95 ${
                          link.icon === 'demo'
                            ? 'bg-accent-500 text-black hover:bg-accent-400'
                            : 'border border-gray-200 dark:border-navy-600 text-gray-900 dark:text-gray-100 hover:border-gray-400 dark:hover:border-navy-400 hover:bg-gray-50 dark:hover:bg-white/5'
                        }`}>
                        {locale === 'en' ? link.labelEn : link.label}
                      </a>
                    ))}
                  </div>
                </div>

                {/* Columna derecha — características, solo texto */}
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-navy-400 mb-4">{t.projects.features}</h4>
                  <div className="space-y-2.5">
                    {(locale === 'en' ? featured.featuresEn : featured.features).map((f, fi) => (
                      <div key={fi} className="flex items-start gap-3 rounded-lg border border-gray-100 dark:border-navy-800/40 bg-gray-50/50 dark:bg-navy-900/30 px-3 py-2.5">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent-500 shrink-0" aria-hidden="true" />
                        <span className="text-sm text-gray-900 dark:text-gray-100 leading-snug">{f}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </article>
        )}

        {/* Otros proyectos */}
        {others.length > 0 && (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {others.map((project, i) => (
              <article key={project.id} className="glass rounded-xl p-5 card-glow flex flex-col"
                style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                  transition: `opacity 0.5s ease ${i * 80}ms, transform 0.5s ease ${i * 80}ms`,
                }}>
                {/* Tipo + estado + versión — solo texto */}
                <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                  <span className="inline-flex items-center rounded-md bg-gray-100 dark:bg-navy-700/60 px-2 py-0.5 text-xs font-bold text-gray-800 dark:text-gray-100 uppercase tracking-wider">
                    {project.type === 'grupal' ? t.projects.group : t.projects.individual}
                  </span>
                  <div className="flex items-center gap-2">
                    <span className="inline-flex items-center gap-1 rounded-full border border-accent-500/20 bg-accent-500/5 px-2 py-0.5 text-xs font-medium text-accent-600 dark:text-accent-400 whitespace-nowrap">
                      {locale === 'en' ? project.statusEn : project.status}
                    </span>
                    <span className="rounded bg-gray-100 dark:bg-navy-800 px-2 py-0.5 text-xs font-mono text-gray-600 dark:text-gray-300 whitespace-nowrap">
                      {versions[project.id] || project.version}
                    </span>
                  </div>
                </div>

                <h3 className="text-base font-bold text-gray-900 dark:text-white mb-2 break-words">{project.title}</h3>
                <p className="text-sm text-gray-800 dark:text-gray-200 leading-relaxed mb-4 flex-1">
                  {locale === 'en' ? project.descriptionEn : project.description}
                </p>

                {/* Tech stack — solo texto */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.techStack.map(tech => (
                    <span key={tech} className="rounded border border-gray-200 dark:border-navy-700/40 bg-gray-50 dark:bg-navy-800/30 px-2 py-0.5 text-xs text-gray-700 dark:text-gray-300">
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links — solo texto */}
                <div className="flex flex-wrap gap-2">
                  {project.links.map(link => (
                    <a key={link.url} href={link.url} target="_blank" rel="noopener noreferrer"
                      className="inline-flex items-center rounded-lg border border-gray-200 dark:border-navy-600 px-3 py-2 text-sm font-medium text-gray-900 dark:text-gray-100 transition-all hover:border-gray-400 dark:hover:border-navy-400 hover:bg-gray-50 dark:hover:bg-white/5 active:scale-95">
                      {locale === 'en' ? link.labelEn : link.label}
                    </a>
                  ))}
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
