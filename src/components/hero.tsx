'use client';

import { useEffect, useRef, useState, useCallback } from 'react';
import { PERSONAL } from '@/lib/data';
import { useTheme } from '@/lib/theme-provider';
import { useT } from '@/lib/i18n-provider';
import { GitHubIcon } from './icons';
import ProtectedImage from './protected-image';

function useTypewriter(phrases: string[], typingSpeed = 55, deletingSpeed = 28, pauseDuration = 2400) {
  const [displayText, setDisplayText] = useState('');
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [phase, setPhase] = useState<'typing' | 'pausing' | 'deleting' | 'waiting'>('typing');
  const prefersReduced = useRef(false);
  useEffect(() => { prefersReduced.current = window.matchMedia('(prefers-reduced-motion: reduce)').matches; }, []);
  useEffect(() => {
    if (prefersReduced.current) { setDisplayText(phrases[0]); return; }
    const cur = phrases[phraseIndex];
    if (phase === 'typing') {
      if (displayText.length < cur.length) { const t = setTimeout(() => setDisplayText(cur.slice(0, displayText.length + 1)), typingSpeed + Math.random() * 30 - 15); return () => clearTimeout(t); }
      else setPhase('pausing');
    }
    if (phase === 'pausing') { const t = setTimeout(() => setPhase('deleting'), pauseDuration); return () => clearTimeout(t); }
    if (phase === 'deleting') {
      if (displayText.length > 0) { const t = setTimeout(() => setDisplayText(displayText.slice(0, -1)), deletingSpeed); return () => clearTimeout(t); }
      else setPhase('waiting');
    }
    if (phase === 'waiting') { const t = setTimeout(() => { setPhraseIndex(p => (p + 1) % phrases.length); setPhase('typing'); }, 400); return () => clearTimeout(t); }
  }, [displayText, phase, phraseIndex, phrases, typingSpeed, deletingSpeed, pauseDuration]);
  return { displayText, isTyping: phase === 'typing' || phase === 'pausing' };
}

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { resolvedTheme } = useTheme();
  const t = useT();
  const { displayText, isTyping } = useTypewriter(t.hero.taglines as unknown as string[]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    let animId: number;
    const particles: { x: number; y: number; vx: number; vy: number; r: number; a: number }[] = [];
    const resize = () => { canvas.width = window.innerWidth; canvas.height = window.innerHeight; };
    resize();
    window.addEventListener('resize', resize);
    const count = Math.min(50, Math.floor(window.innerWidth / 30));
    for (let i = 0; i < count; i++) particles.push({ x: Math.random() * canvas.width, y: Math.random() * canvas.height, vx: (Math.random() - 0.5) * 0.25, vy: (Math.random() - 0.5) * 0.25, r: Math.random() * 1.2 + 0.4, a: Math.random() * 0.2 + 0.05 });
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const isDark = document.documentElement.classList.contains('dark');
      const dot = isDark ? '245,158,11' : '0,0,0';
      const line = isDark ? '74,96,144' : '180,180,180';
      particles.forEach(p => {
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0) p.x = canvas.width; if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height; if (p.y > canvas.height) p.y = 0;
        ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${dot},${p.a})`; ctx.fill();
      });
      for (let i = 0; i < particles.length; i++) for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x, dy = particles[i].y - particles[j].y;
        const d = Math.sqrt(dx * dx + dy * dy);
        if (d < 110) { ctx.beginPath(); ctx.moveTo(particles[i].x, particles[i].y); ctx.lineTo(particles[j].x, particles[j].y); ctx.strokeStyle = `rgba(${line},${0.1 * (1 - d / 110)})`; ctx.lineWidth = 0.5; ctx.stroke(); }
      }
      animId = requestAnimationFrame(animate);
    };
    animate();
    return () => { cancelAnimationFrame(animId); window.removeEventListener('resize', resize); };
  }, [resolvedTheme]);

  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden" aria-label="Presentación principal">
      <canvas ref={canvasRef} className="absolute inset-0 z-0" aria-hidden="true" />
      <div className="absolute inset-0 z-0 overflow-hidden" aria-hidden="true">
        <div className="absolute -top-1/4 -left-1/4 w-[700px] h-[700px] rounded-full bg-accent-500/5 blur-[150px] animate-pulse-glow" />
        <div className="absolute -bottom-1/4 -right-1/4 w-[500px] h-[500px] rounded-full bg-gray-300/20 dark:bg-navy-500/10 blur-[120px] animate-pulse-glow" style={{ animationDelay: '1.5s' }} />
      </div>
      <div className="relative z-10 mx-auto max-w-5xl px-6 pt-28 pb-16 text-center lg:px-8">

        {/* Foto de perfil — mantiene ratio 799:1238, mostrada en círculo en el hero */}
        <div className="flex justify-center mb-4 animate-scale-in">
          <div className="relative">
            <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-accent-400 via-accent-500 to-orange-500 opacity-50 blur-md" aria-hidden="true" />
            {/*
              La imagen original es 799×1238px (ratio ~0.645).
              En el héroe la mostramos como círculo — la foto se centra en object-top
              para mostrar el rostro correctamente.
            */}
            <div className="relative h-32 w-32 sm:h-36 sm:w-36 rounded-full overflow-hidden ring-4 ring-white dark:ring-navy-900 shadow-2xl">
              <ProtectedImage
                src={PERSONAL.profileImage}
                alt={`Foto de perfil de ${PERSONAL.name}`}
                width={144}
                height={223}
                className="h-full w-full object-cover object-top"
                priority
              />
            </div>
          </div>
        </div>

        <div className="inline-flex items-center gap-2.5 rounded-full border border-green-500/25 bg-green-500/[0.06] px-5 py-2 text-xs font-semibold text-green-700 dark:text-green-400 mb-8 animate-fade-in">
          <svg className="w-4 h-4 text-green-500 shrink-0" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
          {t.hero.badge}
        </div>

        <h1 className="min-h-[4.5rem] sm:min-h-[5rem] md:min-h-[7rem] text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl md:text-5xl lg:text-6xl animate-slide-up" style={{ fontFamily: 'var(--font-display)' }} aria-live="polite" aria-atomic="true">
          <span className="text-gradient">{displayText}</span>
          <span className="inline-block w-0.5 h-[0.85em] ml-1 align-middle bg-accent-500 rounded-sm" style={{ animation: isTyping ? 'none' : 'blink-cursor 1s step-end infinite' }} aria-hidden="true" />
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-900 dark:text-gray-100 sm:text-xl leading-relaxed animate-slide-up" style={{ animationDelay: '0.15s' }}>
          {t.hero.subtitle}
        </p>

        <div className="mt-6 flex flex-wrap items-center justify-center gap-3 text-sm text-gray-700 dark:text-gray-300 animate-slide-up" style={{ animationDelay: '0.25s' }}>
          <span className="flex items-center gap-1.5"><svg className="w-4 h-4 text-accent-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>{PERSONAL.roleShort}</span>
          <span className="text-gray-300 dark:text-navy-600" aria-hidden="true">&bull;</span>
          <span className="flex items-center gap-1.5"><svg className="w-4 h-4 text-accent-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5z" /><path strokeLinecap="round" strokeLinejoin="round" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" /></svg>{PERSONAL.university}</span>
          <span className="text-gray-300 dark:text-navy-600" aria-hidden="true">&bull;</span>
          <span>{PERSONAL.semester}</span>
          <span className="text-gray-300 dark:text-navy-600" aria-hidden="true">&bull;</span>
          <span>{PERSONAL.age} años · {PERSONAL.location}</span>
        </div>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-up" style={{ animationDelay: '0.35s' }}>
          <a href="#servicios" className="group inline-flex items-center gap-2 rounded-xl bg-accent-500 px-7 py-3.5 text-base font-bold text-black shadow-lg shadow-accent-500/20 transition-all hover:bg-accent-400 hover:-translate-y-0.5 active:scale-95">
            {t.hero.ctaServices}
            <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
          </a>
          <a href={PERSONAL.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-xl border border-gray-200 dark:border-navy-600 px-7 py-3.5 text-base font-medium text-gray-900 dark:text-navy-100 transition-all hover:border-gray-400 dark:hover:border-navy-400 hover:bg-gray-50 dark:hover:bg-white/5 active:scale-95">
            <GitHubIcon className="w-5 h-5" />{t.hero.ctaGitHub}
          </a>
        </div>

        {/* Scroll indicator — adaptativo por dispositivo (fix 4) */}
        <div className="mt-16 flex flex-col items-center gap-2 animate-fade-in text-gray-600 dark:text-gray-400" style={{ animationDelay: '1s' }} aria-hidden="true">
          <span className="text-xs font-medium uppercase tracking-widest">{t.hero.scroll}</span>
          {/* Desktop/laptop: animación clásica de scroll en ventana */}
          <div className="hidden lg:flex w-5 h-8 rounded-full border-2 border-gray-300 dark:border-navy-600 items-start justify-center p-1">
            <div className="w-1 h-2 rounded-full bg-accent-500 animate-float" />
          </div>
          {/* Tablet (md): dedo deslizando hacia arriba sobre pantalla — sugerencia táctil */}
          <div className="hidden md:flex lg:hidden flex-col items-center gap-1">
            <svg viewBox="0 0 40 52" className="w-8 h-10 text-gray-400 dark:text-navy-500" fill="none" stroke="currentColor" strokeWidth="1.5">
              {/* Tablet/pantalla */}
              <rect x="4" y="2" width="32" height="44" rx="4" strokeLinecap="round"/>
              <circle cx="20" cy="42" r="2" fill="currentColor" stroke="none"/>
              {/* Flecha scroll up */}
              <path d="M20 30 L20 18 M16 22 L20 18 L24 22" strokeLinecap="round" strokeLinejoin="round" className="text-accent-500" stroke="#F59E0B"/>
            </svg>
          </div>
          {/* Móvil (sm y menores): dedo deslizando hacia arriba en teléfono */}
          <div className="flex md:hidden flex-col items-center gap-1">
            <svg viewBox="0 0 36 58" className="w-7 h-12" fill="none">
              {/* Teléfono */}
              <rect x="3" y="1" width="30" height="52" rx="5" stroke="currentColor" strokeWidth="1.5" className="text-gray-400 dark:text-navy-500"/>
              <rect x="12" y="4" width="12" height="2" rx="1" fill="currentColor" className="text-gray-400 dark:text-navy-500"/>
              <circle cx="18" cy="49" r="2" fill="currentColor" className="text-gray-400 dark:text-navy-500"/>
              {/* Dedo deslizando hacia arriba */}
              <ellipse cx="18" cy="36" rx="4" ry="5" fill="#F59E0B" opacity="0.85"/>
              <path d="M18 31 L18 22 M14 26 L18 22 L22 26" stroke="#F59E0B" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <animateTransform attributeName="transform" type="translate" values="0,0;0,-4;0,0" dur="1.4s" repeatCount="indefinite"/>
              </path>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
