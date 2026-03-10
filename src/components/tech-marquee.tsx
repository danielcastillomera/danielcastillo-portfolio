'use client';

import { TECH_MARQUEE } from '@/lib/data';

export default function TechMarquee() {
  const items = [...TECH_MARQUEE, ...TECH_MARQUEE];

  return (
    <section
      className="relative overflow-hidden border-y border-navy-800/50 bg-navy-900/30 py-5"
      aria-label="Tecnologías utilizadas"
    >
      {/* Fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-r from-navy-950 to-transparent" aria-hidden="true" />
      <div className="absolute right-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-l from-navy-950 to-transparent" aria-hidden="true" />

      <div className="marquee-track" role="marquee" aria-label="Lista de tecnologías: Next.js, TypeScript, React, Tailwind CSS, Supabase, PostgreSQL, Prisma, Vercel, Node.js, Git, Resend, Zod, REST API, HTML5, CSS3, JavaScript">
        {items.map((tech, i) => (
          <span
            key={`${tech}-${i}`}
            className="mx-6 text-sm font-semibold tracking-wide text-navy-400 whitespace-nowrap uppercase select-none flex items-center gap-2"
            aria-hidden={i >= TECH_MARQUEE.length}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-amber-500/50" aria-hidden="true" />
            {tech}
          </span>
        ))}
      </div>
    </section>
  );
}
