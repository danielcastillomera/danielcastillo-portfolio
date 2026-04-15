'use client';

import { useState, useEffect } from 'react';
import { useT } from '@/lib/i18n-provider';

export default function ScrollButtons() {
  const t = useT();
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 600);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/*
        "Ir al inicio" button:
        - Positioned at BOTTOM-CENTER of viewport (not near WhatsApp button on right)
        - Appears floating OVER content when user scrolls down
        - Disappears when at top
        - z-index below floating WhatsApp so they don't compete visually
      */}
      <button
        type="button"
        onClick={scrollToTop}
        className={`fixed bottom-6 left-1/2 -translate-x-1/2 z-30 flex items-center gap-2 rounded-full bg-white/90 dark:bg-navy-800/90 backdrop-blur-sm px-5 py-2.5 text-xs font-semibold text-gray-700 dark:text-gray-200 shadow-xl shadow-black/10 dark:shadow-black/30 ring-1 ring-gray-200/80 dark:ring-navy-600/80 transition-all duration-500 hover:bg-white dark:hover:bg-navy-800 hover:shadow-2xl hover:-translate-x-1/2 hover:-translate-y-1 active:scale-95 ${
          showBackToTop
            ? 'opacity-100 translate-y-0 pointer-events-auto'
            : 'opacity-0 translate-y-4 pointer-events-none'
        }`}
        style={{ transform: `translateX(-50%) ${showBackToTop ? 'translateY(0)' : 'translateY(16px)'}` }}
        aria-label={t.hero.irAlInicio}
        title={t.hero.irAlInicio}
      >
        <svg
          className="w-4 h-4 text-accent-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2.5}
          aria-hidden="true"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
        </svg>
        <span>{t.hero.irAlInicio}</span>
      </button>
    </>
  );
}
