'use client';

import { TECH_STACK } from '@/lib/data';
import { useReveal } from '@/lib/use-reveal';
import { useTheme } from '@/lib/theme-provider';

export default function TechGrid() {
  const { ref, isVisible } = useReveal();
  const { resolvedTheme } = useTheme();

  const categoryLabels: Record<string, string> = {
    language: 'Lenguajes',
    frontend: 'Frontend',
    backend: 'Backend',
    database: 'Base de Datos & Cloud',
    tools: 'Herramientas',
  };

  const categories = ['language', 'frontend', 'backend', 'database', 'tools'] as const;

  // Icons that are black/very dark and need white version in dark mode
  const darkLogos = new Set(['000000', '181717', '2D3748']);

  const getIconColor = (brandColor: string) => {
    if (resolvedTheme === 'dark' && darkLogos.has(brandColor)) return 'ffffff';
    return brandColor;
  };

  return (
    <section className="relative py-20 sm:py-28" aria-labelledby="tech-heading">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-50/40 dark:via-navy-900/30 to-transparent" aria-hidden="true" />
      <div ref={ref} className={`relative mx-auto max-w-7xl px-6 lg:px-8 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="mb-12 text-center">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-accent-500">Stack tecnológico</span>
          <h2 id="tech-heading" className="mt-3 text-2xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-3xl" style={{ fontFamily: 'var(--font-display)' }}>
            Tecnologías y herramientas
          </h2>
        </div>

        {categories.map((cat) => {
          const items = TECH_STACK.filter((t) => t.category === cat);
          if (items.length === 0) return null;
          return (
            <div key={cat} className="mb-8 last:mb-0">
              <h3 className="text-xs font-bold uppercase tracking-wider text-gray-600 dark:text-gray-300 mb-4">{categoryLabels[cat]}</h3>
              <div className="flex flex-wrap gap-3">
                {items.map((tech, i) => (
                  <div
                    key={tech.name}
                    className="glass rounded-lg px-3 py-2.5 flex items-center gap-2.5 card-glow"
                    style={{ opacity: isVisible ? 1 : 0, transform: isVisible ? 'translateY(0)' : 'translateY(12px)', transition: `opacity 0.4s ease ${i * 40}ms, transform 0.4s ease ${i * 40}ms` }}
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={`https://cdn.simpleicons.org/${tech.iconSlug}/${getIconColor(tech.brandColor)}`}
                      alt={tech.name}
                      width={20}
                      height={20}
                      className="w-5 h-5 shrink-0"
                      loading="lazy"
                    />
                    <span className="text-sm font-medium text-gray-900 dark:text-white">{tech.name}</span>
                    {tech.version && (
                      <span className="text-[10px] font-mono text-gray-600 dark:text-gray-400 bg-gray-100 dark:bg-navy-800 rounded px-1.5 py-0.5">
                        v{tech.version}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
