'use client';

import { useEffect, useRef, useState, useCallback } from 'react';
import { PERSONAL } from '@/lib/data';
import { useTheme } from '@/lib/theme-provider';
import { useT } from '@/lib/i18n-provider';
import { GitHubIcon } from './icons';
import ProtectedImage from './protected-image';

/* ── Typewriter hook ──────────────────────────────────────────────────── */
function useTypewriter(phrases: string[], typingSpeed = 55, deletingSpeed = 28, pauseDuration = 2400) {
  const [displayText, setDisplayText] = useState('');
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [phase, setPhase] = useState<'typing' | 'pausing' | 'deleting' | 'waiting'>('typing');
  const prefersReduced = useRef(false);

  useEffect(() => {
    prefersReduced.current = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  }, []);

  useEffect(() => {
    // If reduced motion, just show the first phrase statically
    if (prefersReduced.current) {
      setDisplayText(phrases[0]);
      return;
    }

    const currentPhrase = phrases[phraseIndex];

    if (phase === 'typing') {
      if (displayText.length < currentPhrase.length) {
        const timer = setTimeout(() => {
          setDisplayText(currentPhrase.slice(0, displayText.length + 1));
        }, typingSpeed + Math.random() * 30 - 15); // slight jitter for realism
        return () => clearTimeout(timer);
      } else {
        setPhase('pausing');
      }
    }

    if (phase === 'pausing') {
      const timer = setTimeout(() => setPhase('deleting'), pauseDuration);
      return () => clearTimeout(timer);
    }

    if (phase === 'deleting') {
      if (displayText.length > 0) {
        const timer = setTimeout(() => {
          setDisplayText(displayText.slice(0, -1));
        }, deletingSpeed);
        return () => clearTimeout(timer);
      } else {
        setPhase('waiting');
      }
    }

    if (phase === 'waiting') {
      const timer = setTimeout(() => {
        setPhraseIndex((prev) => (prev + 1) % phrases.length);
        setPhase('typing');
      }, 400);
      return () => clearTimeout(timer);
    }
  }, [displayText, phase, phraseIndex, phrases, typingSpeed, deletingSpeed, pauseDuration]);

  const isTyping = phase === 'typing' || phase === 'pausing';
  return { displayText, isTyping };
}

/* ── Component ────────────────────────────────────────────────────────── */
export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { resolvedTheme } = useTheme();
  const t = useT();

  const { displayText, isTyping } = useTypewriter(t.hero.taglines as unknown as string[]);

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
      particles.push({ x: Math.random() * canvas.width, y: Math.random() * canvas.height, vx: (Math.random() - 0.5) * 0.25, vy: (Math.random() - 0.5) * 0.25, r: Math.random() * 1.2 + 0.4, a: Math.random() * 0.2 + 0.05 });
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const isDark = document.documentElement.classList.contains('dark');
      const dotColor = isDark ? '245, 158, 11' : '0, 0, 0';
      const lineColor = isDark ? '74, 96, 144' : '180, 180, 180';

      particles.forEach((p) => {
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0) p.x = canvas.width; if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height; if (p.y > canvas.height) p.y = 0;
        ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${dotColor}, ${p.a})`; ctx.fill();
      });

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x; const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 110) {
            ctx.beginPath(); ctx.moveTo(particles[i].x, particles[i].y); ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(${lineColor}, ${0.1 * (1 - dist / 110)})`; ctx.lineWidth = 0.5; ctx.stroke();
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

      <div className="relative z-10 mx-auto max-w-5xl px-6 pt-28 pb-16 text-center lg:px-8">
        {/* Profile photo */}
        <div className="flex justify-center mb-4 animate-scale-in">
          <div className="relative">
            <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-accent-400 via-accent-500 to-orange-500 opacity-50 blur-md" aria-hidden="true" />
            <div className="relative h-32 w-32 sm:h-36 sm:w-36 rounded-full overflow-hidden ring-4 ring-white dark:ring-navy-900 shadow-2xl">
              <ProtectedImage src={PERSONAL.profileImage} alt={`Fotografía de ${PERSONAL.name}`} width={144} height={144} className="h-full w-full object-cover" priority />
            </div>
          </div>
        </div>

        {/* Availability badge */}
        <div className="inline-flex items-center gap-2.5 rounded-full border border-green-500/25 bg-green-500/[0.06] px-5 py-2 text-xs font-semibold text-green-700 dark:text-green-400 mb-8 animate-fade-in">
          <svg className="w-4 h-4 text-green-500 shrink-0" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
          {t.hero.badge}
        </div>

        {/* ── Typewriter heading ── */}
        <h1
          className="min-h-[4.5rem] sm:min-h-[5rem] md:min-h-[7rem] lg:min-h-[8rem] text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl md:text-5xl lg:text-6xl animate-slide-up"
          style={{ fontFamily: 'var(--font-display)' }}
          aria-live="polite"
          aria-atomic="true"
        >
          <span className="text-gradient">{displayText}</span>
          {/* Blinking cursor */}
          <span
            className="inline-block w-0.5 h-[0.85em] ml-1 align-middle bg-accent-500 rounded-sm"
            style={{ animation: isTyping ? 'none' : 'blink-cursor 1s step-end infinite' }}
            aria-hidden="true"
          />
        </h1>

        {/* Subtitle */}
        <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-800 dark:text-gray-100 sm:text-xl leading-relaxed animate-slide-up" style={{ animationDelay: '0.15s' }}>
          {t.hero.subtitle}
        </p>

        {/* Info pills */}
        <div className="mt-6 flex flex-wrap items-center justify-center gap-3 text-sm text-gray-600 dark:text-gray-300 animate-slide-up" style={{ animationDelay: '0.25s' }}>
          <span className="flex items-center gap-1.5">
            <svg className="w-4 h-4 text-accent-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>
            {PERSONAL.roleShort}
          </span>
          <span className="text-gray-300 dark:text-navy-600" aria-hidden="true">&bull;</span>
          <span className="flex items-center gap-1.5">
            <svg className="w-4 h-4 text-accent-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5z" /><path strokeLinecap="round" strokeLinejoin="round" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" /></svg>
            {PERSONAL.university}
          </span>
          <span className="text-gray-300 dark:text-navy-600" aria-hidden="true">&bull;</span>
          <span>{PERSONAL.semester}</span>
          <span className="text-gray-300 dark:text-navy-600" aria-hidden="true">&bull;</span>
          <span>{PERSONAL.age} años · {PERSONAL.location}</span>
        </div>

        {/* CTA Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-up" style={{ animationDelay: '0.35s' }}>
          <a href="#servicios" className="group inline-flex items-center gap-2 rounded-xl bg-accent-500 px-7 py-3.5 text-base font-bold text-black shadow-lg shadow-accent-500/20 transition-all hover:bg-accent-400 hover:shadow-xl hover:shadow-accent-500/30 hover:-translate-y-0.5 active:scale-95">
            {t.hero.ctaServices}
            <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
          </a>
          <a href={PERSONAL.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-xl border border-gray-200 dark:border-navy-600 px-7 py-3.5 text-base font-medium text-gray-700 dark:text-navy-200 transition-all hover:border-gray-400 dark:hover:border-navy-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-white/5 active:scale-95">
            <GitHubIcon className="w-5 h-5" />
            {t.hero.ctaGitHub}
          </a>
        </div>

        {/* Scroll indicator — at BOTTOM of hero content (not fixed float) */}
        <div className="mt-16 flex flex-col items-center gap-2 animate-fade-in text-gray-600 dark:text-gray-300" style={{ animationDelay: '1s' }} aria-hidden="true">
          <span className="text-xs font-medium uppercase tracking-widest">{t.hero.scroll}</span>
          <div className="hidden sm:flex w-5 h-8 rounded-full border-2 border-gray-300 dark:border-navy-600 items-start justify-center p-1">
            <div className="w-1 h-2 rounded-full bg-accent-500 animate-float" />
          </div>
          <div className="flex sm:hidden flex-col items-center gap-1">
            <svg className="w-7 h-10" viewBox="0 0 28 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="4" y="4" width="20" height="32" rx="4" stroke="currentColor" strokeWidth="1.5" fill="none" />
              <rect x="6" y="8" width="16" height="22" rx="1" fill="currentColor" opacity="0.08" />
              <rect x="10" y="33" width="8" height="1.5" rx="0.75" fill="currentColor" opacity="0.3" />
              <path d="M14 25 L14 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" className="animate-float" />
              <path d="M10 19 L14 15 L18 19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="animate-float" />
              <circle cx="14" cy="26" r="2.5" fill="currentColor" opacity="0.2" className="animate-float" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
