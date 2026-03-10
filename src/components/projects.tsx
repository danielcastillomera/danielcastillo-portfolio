'use client';

import { PROJECTS } from '@/lib/data';
import { useReveal } from '@/lib/use-reveal';
import { GitHubIcon, ExternalLinkIcon } from './icons';

export default function Projects() {
  const { ref: sectionRef, isVisible } = useReveal();
  const featured = PROJECTS.find((p) => p.highlight);
  const others = PROJECTS.filter((p) => !p.highlight);

  return (
    <section id="proyectos" className="relative py-24 sm:py-32" aria-labelledby="projects-heading">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50/50 dark:from-navy-900/30 via-transparent to-gray-50/50 dark:to-navy-900/30" aria-hidden="true" />

      <div ref={sectionRef} className={`relative mx-auto max-w-7xl px-6 lg:px-8 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="mb-16">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-accent-500">Mi trabajo</span>
          <h2 id="projects-heading" className="mt-3 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl" style={{ fontFamily: 'var(--font-display)' }}>
            Proyectos destacados
          </h2>
          <div className="mt-3 h-1 w-16 rounded-full bg-gradient-to-r from-accent-500 to-accent-600" aria-hidden="true" />
        </div>

        {/* Featured Project */}
        {featured && (
          <article className="glass rounded-2xl overflow-hidden card-glow mb-12" aria-label={`Proyecto destacado: ${featured.title}`}>
            <div className="flex items-center justify-between border-b border-gray-100 dark:border-navy-700/50 px-6 py-4 sm:px-8">
              <div className="flex items-center gap-3">
                <div className="flex gap-1.5" aria-hidden="true">
                  <span className="w-3 h-3 rounded-full bg-red-400" />
                  <span className="w-3 h-3 rounded-full bg-yellow-400" />
                  <span className="w-3 h-3 rounded-full bg-green-400" />
                </div>
                <span className="text-xs font-mono text-gray-400 dark:text-navy-400">{featured.title.toLowerCase().replace(/\s+/g, '-')}/</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-accent-500/30 bg-accent-500/10 px-3 py-1 text-xs font-semibold text-accent-600 dark:text-accent-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent-500 animate-pulse" aria-hidden="true" />
                  {featured.status}
                </span>
                <span className="rounded-md bg-gray-100 dark:bg-navy-700/60 px-2.5 py-1 text-xs font-mono text-gray-600 dark:text-navy-300">{featured.version}</span>
              </div>
            </div>

            <div className="p-6 sm:p-8 lg:p-10">
              <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
                <div className="space-y-5">
                  <div>
                    <span className="inline-flex items-center rounded-md bg-accent-500/10 px-2 py-0.5 text-xs font-bold text-accent-600 dark:text-accent-400 uppercase tracking-wider">
                      Proyecto Individual
                    </span>
                    <h3 className="mt-2 text-2xl font-bold text-gray-900 dark:text-white sm:text-3xl" style={{ fontFamily: 'var(--font-display)' }}>{featured.title}</h3>
                  </div>

                  <p className="text-base text-gray-600 dark:text-navy-300 leading-relaxed">{featured.longDescription}</p>

                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400 dark:text-navy-400 mb-3">Stack tecnológico</h4>
                    <div className="flex flex-wrap gap-2" role="list" aria-label="Tecnologías">
                      {featured.techStack.map((tech) => (
                        <span key={tech} role="listitem" className="rounded-md border border-gray-200 dark:border-navy-700/60 bg-gray-50 dark:bg-navy-800/40 px-2.5 py-1 text-xs font-medium text-gray-700 dark:text-navy-200">{tech}</span>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-3 pt-2">
                    {featured.links.map((link) => (
                      <a key={link.url} href={link.url} target="_blank" rel="noopener noreferrer"
                        className={`inline-flex items-center gap-2 rounded-lg px-5 py-2.5 text-sm font-semibold transition-all active:scale-95 ${
                          link.icon === 'demo'
                            ? 'bg-accent-500 text-black hover:bg-accent-400 shadow-lg shadow-accent-500/20'
                            : 'border border-gray-200 dark:border-navy-600 text-gray-700 dark:text-navy-200 hover:border-gray-400 dark:hover:border-navy-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-white/5'
                        }`}
                      >
                        {link.icon === 'github' && <GitHubIcon className="w-4 h-4" />}
                        {(link.icon === 'demo' || link.icon === 'external') && <ExternalLinkIcon />}
                        {link.label}
                      </a>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400 dark:text-navy-400 mb-4">Características principales</h4>
                  <div className="space-y-3" role="list">
                    {featured.features.map((feature, i) => (
                      <div key={i} role="listitem" className="flex items-start gap-3 rounded-lg border border-gray-100 dark:border-navy-800/40 bg-gray-50/50 dark:bg-navy-900/30 px-4 py-3">
                        <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent-500/10 text-accent-500 mt-0.5" aria-hidden="true">
                          <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" /></svg>
                        </span>
                        <span className="text-sm text-gray-700 dark:text-navy-200 leading-snug">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </article>
        )}

        {/* Other projects */}
        {others.length > 0 && (
          <div className="grid gap-6 sm:grid-cols-2">
            {others.map((project) => (
              <article key={project.id} className="glass rounded-xl p-6 card-glow" aria-label={`Proyecto: ${project.title}`}>
                <div className="flex items-center justify-between mb-4">
                  <span className="inline-flex items-center rounded-md bg-gray-100 dark:bg-navy-700/60 px-2 py-0.5 text-xs font-bold text-gray-600 dark:text-navy-300 uppercase tracking-wider">Proyecto Grupal</span>
                  <div className="flex items-center gap-2">
                    <span className="inline-flex items-center gap-1 rounded-full border border-accent-500/20 bg-accent-500/5 px-2.5 py-0.5 text-xs font-medium text-accent-600 dark:text-accent-400">{project.status}</span>
                    <span className="rounded bg-gray-100 dark:bg-navy-800 px-2 py-0.5 text-xs font-mono text-gray-500 dark:text-navy-400">{project.version}</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2" style={{ fontFamily: 'var(--font-display)' }}>{project.title}</h3>
                <p className="text-sm text-gray-600 dark:text-navy-300 leading-relaxed mb-5">{project.description}</p>
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {project.techStack.map((tech) => (
                    <span key={tech} className="rounded border border-gray-200 dark:border-navy-700/40 bg-gray-50 dark:bg-navy-800/30 px-2 py-0.5 text-xs text-gray-500 dark:text-navy-400">{tech}</span>
                  ))}
                </div>
                <div className="flex gap-3">
                  {project.links.map((link) => (
                    <a key={link.url} href={link.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-lg border border-gray-200 dark:border-navy-600 px-4 py-2 text-sm font-medium text-gray-700 dark:text-navy-200 transition-all hover:border-gray-400 dark:hover:border-navy-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-white/5 active:scale-95">
                      {link.icon === 'github' && <GitHubIcon className="w-4 h-4" />}
                      {link.label}
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
