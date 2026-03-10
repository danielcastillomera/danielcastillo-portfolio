'use client';

import { useEffect, useRef } from 'react';
import { PERSONAL } from '@/lib/data';

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Ambient particle animation
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;
    if (prefersReducedMotion) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationId: number;
    const particles: { x: number; y: number; vx: number; vy: number; r: number; a: number }[] = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    // Create particles
    const count = Math.min(60, Math.floor(window.innerWidth / 25));
    for (let i = 0; i < count; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        r: Math.random() * 1.5 + 0.5,
        a: Math.random() * 0.3 + 0.1,
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(245, 158, 11, ${p.a})`;
        ctx.fill();
      });

      // Draw connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(74, 96, 144, ${0.15 * (1 - dist / 120)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      aria-label="Presentación principal"
    >
      {/* Particle canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 z-0"
        aria-hidden="true"
      />

      {/* Gradient orbs */}
      <div className="absolute inset-0 z-0 overflow-hidden" aria-hidden="true">
        <div className="absolute -top-1/4 -left-1/4 w-[800px] h-[800px] rounded-full bg-amber-500/5 blur-[160px] animate-pulse-glow" />
        <div className="absolute -bottom-1/4 -right-1/4 w-[600px] h-[600px] rounded-full bg-navy-500/10 blur-[120px] animate-pulse-glow" style={{ animationDelay: '1.5s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-amber-500/3 blur-[100px]" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-5xl px-6 pt-24 pb-12 text-center lg:px-8">
        {/* Status badge */}
        <div
          className="inline-flex items-center gap-2 rounded-full border border-amber-500/20 bg-amber-500/5 px-4 py-1.5 text-xs font-medium text-amber-400 mb-8 animate-fade-in"
        >
          <span className="relative flex h-2 w-2" aria-hidden="true">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-amber-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-amber-400" />
          </span>
          Disponible para proyectos
        </div>

        {/* Main heading */}
        <h1
          className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl animate-slide-up"
          style={{ fontFamily: 'var(--font-display)' }}
        >
          <span className="block">{PERSONAL.heroTagline.split(' ').slice(0, 2).join(' ')}</span>
          <span className="block text-gradient mt-2">
            {PERSONAL.heroTagline.split(' ').slice(2).join(' ')}
          </span>
        </h1>

        {/* Subtitle */}
        <p
          className="mx-auto mt-6 max-w-2xl text-lg text-navy-300 sm:text-xl leading-relaxed animate-slide-up"
          style={{ animationDelay: '0.15s' }}
        >
          {PERSONAL.heroSubtitle}
        </p>

        {/* Role & University */}
        <div
          className="mt-6 flex flex-wrap items-center justify-center gap-3 text-sm text-navy-400 animate-slide-up"
          style={{ animationDelay: '0.25s' }}
        >
          <span className="flex items-center gap-1.5">
            <svg className="w-4 h-4 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
            </svg>
            {PERSONAL.role}
          </span>
          <span className="text-navy-600" aria-hidden="true">•</span>
          <span className="flex items-center gap-1.5">
            <svg className="w-4 h-4 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
            </svg>
            {PERSONAL.university}
          </span>
          <span className="text-navy-600" aria-hidden="true">•</span>
          <span>{PERSONAL.semester}</span>
        </div>

        {/* CTA Buttons */}
        <div
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-up"
          style={{ animationDelay: '0.35s' }}
        >
          <a
            href="#proyectos"
            className="group inline-flex items-center gap-2 rounded-xl bg-amber-500 px-7 py-3.5 text-base font-bold text-navy-950 shadow-lg shadow-amber-500/20 transition-all hover:bg-amber-400 hover:shadow-xl hover:shadow-amber-500/30 hover:-translate-y-0.5 active:scale-95"
          >
            Ver mis proyectos
            <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
          <a
            href={PERSONAL.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl border border-navy-600 px-7 py-3.5 text-base font-medium text-navy-200 transition-all hover:border-navy-400 hover:text-white hover:bg-white/5 active:scale-95"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
            </svg>
            GitHub
          </a>
        </div>

        {/* Scroll indicator */}
        <div
          className="mt-16 flex flex-col items-center gap-2 animate-fade-in text-navy-500"
          style={{ animationDelay: '1s' }}
          aria-hidden="true"
        >
          <span className="text-xs font-medium uppercase tracking-widest">Scroll</span>
          <div className="w-5 h-8 rounded-full border-2 border-navy-600 flex items-start justify-center p-1">
            <div className="w-1 h-2 rounded-full bg-amber-400 animate-float" />
          </div>
        </div>
      </div>
    </section>
  );
}
