'use client';

import { PROJECTS } from '@/lib/data';
import { useReveal } from '@/lib/use-reveal';

function GithubIcon() {
  return (
    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
    </svg>
  );
}

function ExternalIcon() {
  return (
    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
    </svg>
  );
}

export default function Projects() {
  const { ref: sectionRef, isVisible } = useReveal();

  const featured = PROJECTS.find((p) => p.highlight);
  const others = PROJECTS.filter((p) => !p.highlight);

  return (
    <section
      id="proyectos"
      className="relative py-24 sm:py-32"
      aria-labelledby="projects-heading"
    >
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-navy-900/30 via-transparent to-navy-900/30" aria-hidden="true" />

      <div
        ref={sectionRef}
        className={`relative mx-auto max-w-7xl px-6 lg:px-8 transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        {/* Section header */}
        <div className="mb-16">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-amber-500">
            Mi trabajo
          </span>
          <h2
            id="projects-heading"
            className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Proyectos destacados
          </h2>
          <div className="mt-3 h-1 w-16 rounded-full bg-gradient-to-r from-amber-500 to-amber-600" aria-hidden="true" />
        </div>

        {/* Featured Project — Dashboard Enterprise */}
        {featured && (
          <article className="glass rounded-2xl overflow-hidden card-glow mb-12" aria-label={`Proyecto destacado: ${featured.title}`}>
            {/* Header bar */}
            <div className="flex items-center justify-between border-b border-navy-700/50 px-6 py-4 sm:px-8">
              <div className="flex items-center gap-3">
                <div className="flex gap-1.5" aria-hidden="true">
                  <span className="w-3 h-3 rounded-full bg-red-500/80" />
                  <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <span className="w-3 h-3 rounded-full bg-green-500/80" />
                </div>
                <span className="text-xs font-mono text-navy-400">
                  {featured.title.toLowerCase().replace(/\s+/g, '-')}/
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-amber-500/30 bg-amber-500/10 px-3 py-1 text-xs font-semibold text-amber-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" aria-hidden="true" />
                  {featured.status}
                </span>
                <span className="rounded-md bg-navy-700/60 px-2.5 py-1 text-xs font-mono text-navy-300">
                  {featured.version}
                </span>
              </div>
            </div>

            {/* Content */}
            <div className="p-6 sm:p-8 lg:p-10">
              <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
                {/* Left — Info */}
                <div className="space-y-5">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="inline-flex items-center rounded-md bg-amber-500/10 px-2 py-0.5 text-xs font-bold text-amber-400 uppercase tracking-wider">
                        Proyecto Individual
                      </span>
                    </div>
                    <h3
                      className="text-2xl font-bold text-white sm:text-3xl"
                      style={{ fontFamily: 'var(--font-display)' }}
                    >
                      {featured.title}
                    </h3>
                  </div>

                  <p className="text-base text-navy-300 leading-relaxed">
                    {featured.longDescription}
                  </p>

                  {/* Tech stack */}
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-navy-400 mb-3">Stack tecnológico</h4>
                    <div className="flex flex-wrap gap-2" role="list" aria-label="Tecnologías utilizadas">
                      {featured.techStack.map((tech) => (
                        <span
                          key={tech}
                          role="listitem"
                          className="rounded-md border border-navy-700/60 bg-navy-800/40 px-2.5 py-1 text-xs font-medium text-navy-200"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Links */}
                  <div className="flex flex-wrap gap-3 pt-2">
                    {featured.links.map((link) => (
                      <a
                        key={link.url}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`inline-flex items-center gap-2 rounded-lg px-5 py-2.5 text-sm font-semibold transition-all active:scale-95 ${
                          link.icon === 'demo'
                            ? 'bg-amber-500 text-navy-950 hover:bg-amber-400 shadow-lg shadow-amber-500/20'
                            : 'border border-navy-600 text-navy-200 hover:border-navy-400 hover:text-white hover:bg-white/5'
                        }`}
                      >
                        {link.icon === 'github' && <GithubIcon />}
                        {(link.icon === 'demo' || link.icon === 'external') && <ExternalIcon />}
                        {link.label}
                      </a>
                    ))}
                  </div>
                </div>

                {/* Right — Features list */}
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-navy-400 mb-4">
                    Características principales
                  </h4>
                  <div className="space-y-3" role="list" aria-label="Características del proyecto">
                    {featured.features.map((feature, i) => (
                      <div
                        key={i}
                        role="listitem"
                        className="flex items-start gap-3 rounded-lg border border-navy-800/40 bg-navy-900/30 px-4 py-3"
                      >
                        <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-amber-500/10 text-amber-400 mt-0.5" aria-hidden="true">
                          <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                          </svg>
                        </span>
                        <span className="text-sm text-navy-200 leading-snug">{feature}</span>
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
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
            {others.map((project) => (
              <article
                key={project.id}
                className="glass rounded-xl p-6 card-glow"
                aria-label={`Proyecto: ${project.title}`}
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="inline-flex items-center rounded-md bg-navy-700/60 px-2 py-0.5 text-xs font-bold text-navy-300 uppercase tracking-wider">
                    Proyecto Grupal
                  </span>
                  <div className="flex items-center gap-2">
                    <span className="inline-flex items-center gap-1 rounded-full border border-amber-500/20 bg-amber-500/5 px-2.5 py-0.5 text-xs font-medium text-amber-400">
                      {project.status}
                    </span>
                    <span className="rounded bg-navy-800 px-2 py-0.5 text-xs font-mono text-navy-400">
                      {project.version}
                    </span>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-white mb-2" style={{ fontFamily: 'var(--font-display)' }}>
                  {project.title}
                </h3>
                <p className="text-sm text-navy-300 leading-relaxed mb-5">
                  {project.description}
                </p>

                {/* Tech badges */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded border border-navy-700/40 bg-navy-800/30 px-2 py-0.5 text-xs text-navy-400"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-3">
                  {project.links.map((link) => (
                    <a
                      key={link.url}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-lg border border-navy-600 px-4 py-2 text-sm font-medium text-navy-200 transition-all hover:border-navy-400 hover:text-white hover:bg-white/5 active:scale-95"
                    >
                      {link.icon === 'github' && <GithubIcon />}
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
