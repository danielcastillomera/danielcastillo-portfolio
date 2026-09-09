'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { PROJECTS } from '@/lib/data';
import { useReveal } from '@/lib/use-reveal';
import { useT, useI18n } from '@/lib/i18n-provider';
import { GitHubIcon } from './icons';

const FigmaIcon = () => (
  <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M8 24c2.208 0 4-1.792 4-4v-4H8c-2.208 0-4 1.792-4 4s1.792 4 4 4z" fill="#0ACF83"/>
    <path d="M4 12c0-2.208 1.792-4 4-4h4v8H8c-2.208 0-4-1.792-4-4z" fill="#A259FF"/>
    <path d="M4 4c0-2.208 1.792-4 4-4h4v8H8C5.792 8 4 6.208 4 4z" fill="#F24E1E"/>
    <path d="M12 0h4c2.208 0 4 1.792 4 4s-1.792 4-4 4h-4V0z" fill="#FF7262"/>
    <path d="M20 12c0 2.208-1.792 4-4 4s-4-1.792-4-4 1.792-4 4-4 4 1.792 4 4z" fill="#1ABCFE"/>
  </svg>
);

const DocumentIcon = () => (
  <svg className="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
  </svg>
);

const ExternalIcon = () => (
  <svg className="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
  </svg>
);

function LinkButton({ link, locale }: { link: { label: string; labelEn: string; url: string; icon: string }; locale: string }) {
  const label = locale === 'en' ? link.labelEn : link.label;

  const iconMap: Record<string, React.ReactNode> = {
    github:   <GitHubIcon className="w-4 h-4 shrink-0" />,
    figma:    <FigmaIcon />,
    document: <DocumentIcon />,
    demo:     <ExternalIcon />,
    external: <ExternalIcon />,
  };
  const icon = iconMap[link.icon] ?? <ExternalIcon />;

  const colorMap: Record<string, string> = {
    github:   'border-gray-300 dark:border-navy-600 text-gray-700 dark:text-gray-200 hover:border-gray-800 dark:hover:border-white hover:bg-gray-100 dark:hover:bg-white/10',
    figma:    'border-purple-300 dark:border-purple-700 text-purple-700 dark:text-purple-300 hover:bg-purple-50 dark:hover:bg-purple-500/10',
    document: 'border-blue-300 dark:border-blue-700 text-blue-700 dark:text-blue-300 hover:bg-blue-50 dark:hover:bg-blue-500/10',
    demo:     'border-accent-500/50 text-accent-600 dark:text-accent-400 hover:bg-accent-500/10',
    external: 'border-accent-500/50 text-accent-600 dark:text-accent-400 hover:bg-accent-500/10',
  };
  const cls = colorMap[link.icon] ?? colorMap.external;

  return (
    <a
      href={link.url}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center gap-2 rounded-lg border px-3 py-2 text-xs font-semibold transition-all hover:scale-[1.02] active:scale-95 touch-manipulation ${cls}`}
      aria-label={label}
    >
      {icon}
      <span>{label}</span>
    </a>
  );
}

const fadeUp = { hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0 } };

const PROJECT_ANCHOR: Record<string, string> = {
  'dashboard-enterprise': 'proyecto-dashboard-enterprise',
  'posts-comments-manager': 'proyecto-posts-comments-manager',
  'portfolio-web': 'proyecto-portfolio-personal',
  'cne-redesign': 'proyecto-cne',
};

export default function Projects() {
  const { ref: sectionRef, isVisible } = useReveal();
  const [versions, setVersions] = useState<Record<string, string>>({});
  const t   = useT();
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

  const StatusBadge = ({ project }: { project: typeof PROJECTS[0] }) => {
    const st = locale === 'en' ? project.statusEn : project.status;
    const isDev = st === 'En desarrollo' || st === 'In development';
    return isDev ? (
      <span className="inline-flex items-center gap-1.5 rounded-full border border-accent-500/30 bg-accent-500/10 px-2.5 py-1 text-xs font-semibold text-accent-600 dark:text-accent-400 whitespace-nowrap">
        <span className="w-1.5 h-1.5 rounded-full bg-accent-500 animate-pulse" aria-hidden="true" />
        {st}
      </span>
    ) : (
      <span className="inline-flex items-center gap-1 rounded-full border border-green-500/30 bg-green-500/10 px-2 py-0.5 text-xs font-medium text-green-600 dark:text-green-400 whitespace-nowrap">
        <span className="w-1.5 h-1.5 rounded-full bg-green-500" aria-hidden="true" />
        {st}
      </span>
    );
  };

  return (
    <section id="proyectos" className="relative py-16 sm:py-24 scroll-mt-20" aria-labelledby="projects-heading">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50/50 dark:from-navy-900/30 via-transparent to-gray-50/50 dark:to-navy-900/30" aria-hidden="true" />
      <div ref={sectionRef} className="relative mx-auto max-w-7xl px-6 lg:px-8 flex flex-col items-center">

        {/* Encabezado */}
        <motion.div
          className="mb-16 text-center"
          initial="hidden" animate={isVisible ? 'show' : 'hidden'}
          variants={fadeUp} transition={{ duration: 0.5 }}
        >
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-accent-500">{t.projects.sectionLabel}</span>
          <h2 id="projects-heading" className="mt-3 text-3xl font-bold tracking-tight section-title sm:text-4xl" style={{ fontFamily: 'var(--font-display)' }}>
            {t.projects.title}
          </h2>
          <div className="mx-auto mt-3 h-1 w-16 rounded-full bg-gradient-to-r from-accent-500 to-accent-600" aria-hidden="true" />
        </motion.div>

        {/* Proyecto destacado */}
        {featured && (
          <motion.article
            id={PROJECT_ANCHOR[featured.id]}
            className="glass rounded-2xl overflow-hidden card-glow mb-12 scroll-mt-24 w-full"
            aria-label={featured.title}
            initial="hidden" animate={isVisible ? 'show' : 'hidden'}
            variants={fadeUp} transition={{ duration: 0.5, delay: 0.1 }}
            whileHover={{ y: -4 }}
          >
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-gray-100 dark:border-navy-700/50 px-5 py-3 sm:px-8">
              <div className="flex items-center gap-2 min-w-0">
                <span className="text-xs font-mono text-gray-500 dark:text-navy-400 break-all sm:truncate">
                  {featured.title.toLowerCase().replace(/\s+/g, '-')}/
                </span>
              </div>
              <div className="flex items-center gap-2 flex-wrap">
                <StatusBadge project={featured} />
                <span className="rounded-md bg-gray-100 dark:bg-navy-700/60 px-2.5 py-1 text-xs font-mono text-gray-800 dark:text-gray-100 whitespace-nowrap font-semibold">
                  {versions[featured.id] || featured.version}
                </span>
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-0">
              <div className="p-5 sm:p-8 flex flex-col gap-5">
                <div>
                  <div className="flex items-center gap-2 mb-2 flex-wrap">
                    <span className="rounded-full border border-gray-200 dark:border-navy-600 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400">
                      {featured.type === 'grupal' ? t.projects.group : t.projects.individual}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white sm:text-3xl">{featured.title}</h3>
                  <p className="mt-2 text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                    {locale === 'en' ? featured.longDescriptionEn : featured.longDescription}
                  </p>
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-3">{t.projects.features}</h4>
                  <ul className="space-y-2">
                    {(locale === 'en' ? featured.featuresEn : featured.features).map((f, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-gray-700 dark:text-gray-300">
                        <svg className="w-4 h-4 shrink-0 mt-0.5 text-accent-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden="true">
                          <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                        </svg>
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex gap-2 flex-wrap mt-auto pt-2">
                  {featured.links.map(l => <LinkButton key={l.url} link={l} locale={locale} />)}
                </div>
              </div>

              <div className="border-t lg:border-t-0 lg:border-l border-gray-100 dark:border-navy-700/50 p-5 sm:p-8">
                <h4 className="text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-4">{t.projects.techStack}</h4>
                <div className="flex flex-wrap gap-2">
                  {featured.techStack.map(tech => (
                    <span key={tech} className="rounded-full bg-gray-100 dark:bg-navy-800 px-2.5 py-1 text-[11px] font-semibold text-gray-700 dark:text-gray-200 border border-gray-200 dark:border-navy-700">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.article>
        )}

        {/* Otros proyectos */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 w-full">
          {others.map((project, i) => (
            <motion.article
              key={project.id}
              id={PROJECT_ANCHOR[project.id]}
              className="glass rounded-xl p-5 card-glow flex flex-col scroll-mt-24"
              aria-label={project.title}
              initial="hidden" animate={isVisible ? 'show' : 'hidden'}
              variants={fadeUp} transition={{ duration: 0.45, delay: 0.15 + i * 0.1 }}
              whileHover={{ y: -4, boxShadow: '0 12px 32px rgba(245,158,11,0.12)' }}
            >
              <div className="flex items-start justify-between gap-2 mb-3 flex-wrap">
                <div className="flex items-center gap-2 flex-wrap min-w-0">
                  <span className="rounded-full border border-gray-200 dark:border-navy-600 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400 whitespace-nowrap">
                    {project.type === 'grupal' ? t.projects.group : t.projects.individual}
                  </span>
                </div>
                <div className="flex items-center gap-2 flex-wrap">
                  <StatusBadge project={project} />
                  <span className="rounded bg-gray-100 dark:bg-navy-800 px-2 py-0.5 text-xs font-mono text-gray-600 dark:text-gray-300 whitespace-nowrap">
                    {versions[project.id] || project.version}
                  </span>
                </div>
              </div>
              <h3 className="text-base font-bold text-gray-900 dark:text-white mb-2 leading-snug">{project.title}</h3>
              <p className="text-xs text-gray-600 dark:text-gray-300 mb-4 leading-relaxed flex-1">
                {locale === 'en' ? project.descriptionEn : project.description}
              </p>
              <div className="flex flex-wrap gap-1.5 mb-4">
                {project.techStack.slice(0, 5).map(tech => (
                  <span key={tech} className="rounded-full bg-gray-100 dark:bg-navy-800 px-2 py-0.5 text-[10px] font-medium text-gray-600 dark:text-gray-300 border border-gray-200 dark:border-navy-700">
                    {tech}
                  </span>
                ))}
                {project.techStack.length > 5 && (
                  <span className="rounded-full bg-accent-500/10 px-2 py-0.5 text-[10px] font-bold text-accent-500 border border-accent-500/20">
                    +{project.techStack.length - 5}
                  </span>
                )}
              </div>
              <div className="flex gap-2 flex-wrap mt-auto">
                {project.links.map(l => <LinkButton key={l.url} link={l} locale={locale} />)}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
