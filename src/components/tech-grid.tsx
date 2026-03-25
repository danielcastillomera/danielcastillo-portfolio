'use client';

import { useReveal } from '@/lib/use-reveal';

interface TechDisplay {
  name: string;
  version?: string;
  icon: string;
}

const CATEGORIES = [
  {
    key: 'language',
    label: 'Lenguajes',
    items: [
      { name: 'TypeScript', version: '5.9', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg' },
      { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg' },
      { name: 'HTML5', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg' },
      { name: 'CSS3', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg' },
      { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg' },
      { name: 'Java', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg' },
    ],
  },
  {
    key: 'frontend',
    label: 'Frontend',
    items: [
      { name: 'React', version: '19', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg' },
      { name: 'Next.js', version: '16', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg' },
      { name: 'Tailwind CSS', version: '4', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg' },
    ],
  },
  {
    key: 'backend',
    label: 'Backend',
    items: [
      { name: 'Node.js', version: '18+', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg' },
      { name: 'Prisma', version: '5', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/prisma/prisma-original.svg' },
      { name: 'Zod', version: '4', icon: 'https://zod.dev/logo.svg' },
    ],
  },
  {
    key: 'database',
    label: 'Base de Datos & Cloud',
    items: [
      { name: 'Supabase', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/supabase/supabase-original.svg' },
      { name: 'PostgreSQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg' },
      { name: 'Vercel', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vercel/vercel-original.svg' },
    ],
  },
  {
    key: 'tools',
    label: 'Herramientas',
    items: [
      { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg' },
      { name: 'GitHub', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg' },
      { name: 'VS Code', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg' },
      { name: 'npm', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/npm/npm-original-wordmark.svg' },
      { name: 'ESLint', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/eslint/eslint-original.svg' },
    ],
  },
];

export default function TechGrid() {
  const { ref, isVisible } = useReveal();

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

        {CATEGORIES.map((cat) => (
          <div key={cat.key} className="mb-8 last:mb-0">
            <h3 className="text-xs font-bold uppercase tracking-wider text-gray-600 dark:text-gray-300 mb-4">{cat.label}</h3>
            <div className="flex flex-wrap gap-3">
              {cat.items.map((tech, i) => (
                <div
                  key={tech.name}
                  className="glass rounded-lg px-3 py-2.5 flex items-center gap-2.5 card-glow"
                  style={{ opacity: isVisible ? 1 : 0, transform: isVisible ? 'translateY(0)' : 'translateY(12px)', transition: `opacity 0.4s ease ${i * 40}ms, transform 0.4s ease ${i * 40}ms` }}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={tech.icon}
                    alt={tech.name}
                    width={24}
                    height={24}
                    className="w-6 h-6 shrink-0"
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
        ))}
      </div>
    </section>
  );
}
