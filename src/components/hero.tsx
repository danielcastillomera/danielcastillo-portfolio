'use client';

import { useEffect, useRef } from 'react';
import { PERSONAL } from '@/lib/data';
import { useTheme } from '@/lib/theme-provider';
import { GitHubIcon } from './icons';
import ProtectedImage from './protected-image';

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationId: number;
    const particles: { x: number; y: number; vx: number; vy: number; r: number; a: number }[] = [];

    const resize = () => { canvas.width = window.innerWidth; canvas.height = window.innerHeight; };
    resize();
    window.addEventListener('resize', resize);

    const count = Math.min(50, Math.floor(window.innerWidth / 30));
    for (let i = 0; i < count; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.25,
        vy: (Math.random() - 0.5) * 0.25,
        r: Math.random() * 1.2 + 0.4,
        a: Math.random() * 0.2 + 0.05,
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const isDark = document.documentElement.classList.contains('dark');
      const dotColor = isDark ? '245, 158, 11' : '0, 0, 0';
      const lineColor = isDark ? '74, 96, 144' : '180, 180, 180';

      particles.forEach((p) => {
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${dotColor}, ${p.a})`;
        ctx.fill();
      });

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 110) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(${lineColor}, ${0.1 * (1 - dist / 110)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }
      animationId = requestAnimationFrame(animate);
    };

    animate();
    return () => { cancelAnimationFrame(animationId); window.removeEventListener('resize', resize); };
  }, [resolvedTheme]);

  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden" aria-label="Presentación principal">
      <canvas ref={canvasRef} className="absolute inset-0 z-0" aria-hidden="true" />

      {/* Background orbs */}
      <div className="absolute inset-0 z-0 overflow-hidden" aria-hidden="true">
        <div className="absolute -top-1/4 -left-1/4 w-[700px] h-[700px] rounded-full bg-accent-500/5 dark:bg-accent-500/5 blur-[150px] animate-pulse-glow" />
        <div className="absolute -bottom-1/4 -right-1/4 w-[500px] h-[500px] rounded-full bg-gray-300/20 dark:bg-navy-500/10 blur-[120px] animate-pulse-glow" style={{ animationDelay: '1.5s' }} />
      </div>

      <div className="relative z-10 mx-auto max-w-5xl px-6 pt-24 pb-12 text-center lg:px-8">
        {/* Profile photo — centered with glow ring */}
        <div className="flex justify-center mb-4 animate-scale-in">
          <div className="relative">
            {/* Glow ring behind photo */}
            <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-accent-400 via-accent-500 to-orange-500 opacity-50 blur-md" aria-hidden="true" />
            <div className="relative h-32 w-32 sm:h-36 sm:w-36 rounded-full overflow-hidden ring-4 ring-white dark:ring-navy-900 shadow-2xl">
              <ProtectedImage
                src={PERSONAL.profileImage}
                alt={`Fotografía de ${PERSONAL.name}`}
                width={144}
                height={144}
                className="h-full w-full object-cover"
                priority
              />
            </div>
          </div>
        </div>

        {/* Availability badge — below photo, green checkmark */}
        <div className="inline-flex items-center gap-2.5 rounded-full border border-green-500/25 bg-green-500/[0.06] px-5 py-2 text-xs font-semibold text-green-700 dark:text-green-400 mb-8 animate-fade-in">
          <svg className="w-4 h-4 text-green-500 shrink-0" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
          Disponible para contratación inmediata y para realizar proyectos
        </div>

        {/* Main heading */}
        <h1
          className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl md:text-6xl lg:text-7xl animate-slide-up"
          style={{ fontFamily: 'var(--font-display)' }}
        >
          <span className="block">{PERSONAL.heroTagline.split(' ').slice(0, 2).join(' ')}</span>
          <span className="block text-gradient mt-2">{PERSONAL.heroTagline.split(' ').slice(2).join(' ')}</span>
        </h1>

        {/* Subtitle */}
        <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600 dark:text-navy-300 sm:text-xl leading-relaxed animate-slide-up" style={{ animationDelay: '0.15s' }}>
          {PERSONAL.heroSubtitle}
        </p>

        {/* Info pills */}
        <div className="mt-6 flex flex-wrap items-center justify-center gap-3 text-sm text-gray-500 dark:text-navy-400 animate-slide-up" style={{ animationDelay: '0.25s' }}>
          <span className="flex items-center gap-1.5">
            <svg className="w-4 h-4 text-accent-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
            </svg>
            {PERSONAL.role}
          </span>
          <span className="text-gray-300 dark:text-navy-600" aria-hidden="true">&bull;</span>
          <span className="flex items-center gap-1.5">
            <svg className="w-4 h-4 text-accent-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
            </svg>
            {PERSONAL.university}
          </span>
          <span className="text-gray-300 dark:text-navy-600" aria-hidden="true">&bull;</span>
          <span>{PERSONAL.semester}</span>
          <span className="text-gray-300 dark:text-navy-600" aria-hidden="true">&bull;</span>
          <span>{PERSONAL.age} años · {PERSONAL.location}</span>
        </div>

        {/* CTA Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-up" style={{ animationDelay: '0.35s' }}>
          <a
            href="#servicios"
            className="group inline-flex items-center gap-2 rounded-xl bg-accent-500 px-7 py-3.5 text-base font-bold text-black shadow-lg shadow-accent-500/20 transition-all hover:bg-accent-400 hover:shadow-xl hover:shadow-accent-500/30 hover:-translate-y-0.5 active:scale-95"
          >
            Ver mis servicios
            <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
          <a
            href={PERSONAL.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl border border-gray-200 dark:border-navy-600 px-7 py-3.5 text-base font-medium text-gray-700 dark:text-navy-200 transition-all hover:border-gray-400 dark:hover:border-navy-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-white/5 active:scale-95"
          >
            <GitHubIcon className="w-5 h-5" />
            GitHub
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="mt-16 flex flex-col items-center gap-2 animate-fade-in text-gray-400 dark:text-navy-500" style={{ animationDelay: '1s' }} aria-hidden="true">
          <span className="text-xs font-medium uppercase tracking-widest">Scroll</span>
          <div className="w-5 h-8 rounded-full border-2 border-gray-300 dark:border-navy-600 flex items-start justify-center p-1">
            <div className="w-1 h-2 rounded-full bg-accent-500 animate-float" />
          </div>
        </div>
      </div>
    </section>
  );
}
