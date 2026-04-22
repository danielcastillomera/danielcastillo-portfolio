'use client';
import { useState, useEffect } from 'react';
import { useT } from '@/lib/i18n-provider';
export default function ScrollButtons() {
  const t = useT();
  const [showTop, setShowTop] = useState(false);
  const [atTop, setAtTop]     = useState(true);
  useEffect(() => {
    const h = () => { const y = window.scrollY; setShowTop(y > 600); setAtTop(y < 80); };
    window.addEventListener('scroll', h, { passive: true }); h();
    return () => window.removeEventListener('scroll', h);
  }, []);
  const btnBase = 'group fixed bottom-6 z-30 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 dark:bg-navy-800/90 backdrop-blur-sm shadow-xl ring-1 ring-gray-200/80 dark:ring-navy-600/80 transition-all duration-500 hover:bg-accent-500 hover:ring-accent-500 hover:shadow-accent-500/30 active:scale-95';
  const tip     = 'pointer-events-none absolute bottom-12 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-lg bg-gray-900 dark:bg-navy-700 px-2.5 py-1 text-[10px] font-medium text-white opacity-0 group-hover:opacity-100 transition-opacity duration-200 select-none';
  const ico     = 'w-5 h-5 text-gray-600 dark:text-gray-300 group-hover:text-white transition-colors';
  return (
    <>
      <button type="button" onClick={() => window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })} title={t.hero.irAlFinal} aria-label={t.hero.irAlFinal}
        className={`${btnBase} ${atTop ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none translate-y-2'}`}
        style={{ left: '50%', transform: atTop ? 'translateX(-50%)' : 'translateX(-50%) translateY(8px)' }}>
        <span className={tip}>{t.hero.irAlFinal}</span>
        <svg className={ico} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" /></svg>
      </button>
      <button type="button" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} title={t.hero.irAlInicio} aria-label={t.hero.irAlInicio}
        className={`${btnBase} ${showTop ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none translate-y-2'}`}
        style={{ left: '50%', transform: showTop ? 'translateX(-50%)' : 'translateX(-50%) translateY(8px)' }}>
        <span className={tip}>{t.hero.irAlInicio}</span>
        <svg className={ico} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" /></svg>
      </button>
    </>
  );
}
