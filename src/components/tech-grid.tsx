'use client';
import { TECH_GRID_CATEGORIES } from '@/lib/data';
import { useReveal } from '@/lib/use-reveal';
import { useT } from '@/lib/i18n-provider';

export default function TechGrid() {
  const { ref, isVisible } = useReveal();
  const t = useT();
  const categoryLabels: Record<string, string> = {
    language: t.techGrid.categories.language, frontend: t.techGrid.categories.frontend,
    backend: t.techGrid.categories.backend, database: t.techGrid.categories.database,
    tools: t.techGrid.categories.tools, design: t.techGrid.categories.design,
  };
  return (
    <section className="relative py-20 sm:py-28" aria-labelledby="tech-heading">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-50/40 dark:via-navy-900/30 to-transparent" aria-hidden="true" />
      <div ref={ref} className={`relative mx-auto max-w-7xl px-6 lg:px-8 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="mb-12 text-center">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-accent-500">{t.techGrid.sectionLabel}</span>
          <h2 id="tech-heading" className="mt-3 text-2xl font-bold tracking-tight section-title sm:text-3xl" style={{ fontFamily: 'var(--font-display)' }}>{t.techGrid.title}</h2>
        </div>
        {TECH_GRID_CATEGORIES.map(cat => (
          <div key={cat.key} className="mb-8 last:mb-0">
            <h3 className="text-xs font-bold uppercase tracking-wider text-gray-700 dark:text-gray-300 mb-4">{categoryLabels[cat.key] ?? cat.key}</h3>
            <div className="flex flex-wrap gap-3">
              {cat.items.map((tech, i) => (
                <div key={tech.name} className="glass rounded-lg px-3 py-2.5 flex items-center gap-2.5 card-glow"
                  style={{ opacity: isVisible ? 1 : 0, transform: isVisible ? 'translateY(0)' : 'translateY(12px)', transition: `opacity 0.4s ease ${i*40}ms, transform 0.4s ease ${i*40}ms` }}>
                  <div className="w-6 h-6 shrink-0 flex items-center justify-center">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={tech.icon} alt={`${tech.name} logo`} width={24} height={24} draggable={false}
                      className={`w-6 h-6 object-contain select-none pointer-events-none ${['Next.js','Vercel','Prisma','GitHub','Express.js'].includes(tech.name) ? 'dark:invert dark:brightness-90' : ''}`}
                      loading="lazy" onError={e => { (e.currentTarget as HTMLImageElement).style.display='none'; }} />
                  </div>
                  <span className="text-sm font-medium text-gray-900 dark:text-white whitespace-nowrap">{tech.name}</span>
                  {'version' in tech && (tech as {version?:string}).version && (
                    <span className="text-[10px] font-mono text-gray-600 dark:text-gray-400 bg-gray-100 dark:bg-navy-800 rounded px-1.5 py-0.5">v{(tech as {version?:string}).version}</span>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
