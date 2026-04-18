'use client';

import { useState, useEffect } from 'react';
import { useT } from '@/lib/i18n-provider';

export default function ScrollButtons() {
  const t = useT();
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [atTop, setAtTop] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;
      setShowBackToTop(y > 600);
      setAtTop(y < 80);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });
  const scrollToBottom = () => window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });

  return (
    <>
      {/* "Ir al final" — bottom-center when at top, icon only + tooltip */}
      <button
        type="button"
        onClick={scrollToBottom}
        title={t.hero.irAlFinal}
        aria-label={t.hero.irAlFinal}
        className={`group fixed bottom-6 z-30 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 dark:bg-navy-800/90 backdrop-blur-sm shadow-xl ring-1 ring-gray-200/80 dark:ring-navy-600/80 transition-all duration-500 hover:bg-accent-500 hover:ring-accent-500 hover:shadow-accent-500/30 active:scale-95 ${
          atTop ? 'opacity-100 pointer-events-auto translate-y-0' : 'opacity-0 pointer-events-none translate-y-2'
        }`}
        style={{ left: '50%', transform: atTop ? 'translateX(-50%)' : 'translateX(-50%) translateY(8px)' }}
      >
        {/* Tooltip */}
        <span className="pointer-events-none absolute bottom-12 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-lg bg-gray-900 dark:bg-navy-700 px-2.5 py-1 text-[10px] font-medium text-white opacity-0 group-hover:opacity-100 transition-opacity duration-200 select-none" aria-hidden="true">
          {t.hero.irAlFinal}
        </span>
        <svg className="w-5 h-5 text-gray-600 dark:text-gray-300 group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
        </svg>
      </button>

      {/* "Ir al inicio" — bottom-center when scrolled, icon only + tooltip */}
      <button
        type="button"
        onClick={scrollToTop}
        title={t.hero.irAlInicio}
        aria-label={t.hero.irAlInicio}
        className={`group fixed bottom-6 z-30 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 dark:bg-navy-800/90 backdrop-blur-sm shadow-xl ring-1 ring-gray-200/80 dark:ring-navy-600/80 transition-all duration-500 hover:bg-accent-500 hover:ring-accent-500 hover:shadow-accent-500/30 active:scale-95 ${
          showBackToTop ? 'opacity-100 pointer-events-auto translate-y-0' : 'opacity-0 pointer-events-none translate-y-2'
        }`}
        style={{ left: '50%', transform: showBackToTop ? 'translateX(-50%)' : 'translateX(-50%) translateY(8px)' }}
      >
        {/* Tooltip */}
        <span className="pointer-events-none absolute bottom-12 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-lg bg-gray-900 dark:bg-navy-700 px-2.5 py-1 text-[10px] font-medium text-white opacity-0 group-hover:opacity-100 transition-opacity duration-200 select-none" aria-hidden="true">
          {t.hero.irAlInicio}
        </span>
        <svg className="w-5 h-5 text-gray-600 dark:text-gray-300 group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
        </svg>
      </button>
    </>
  );
}
