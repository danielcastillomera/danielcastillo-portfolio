'use client';

import { useState, useEffect } from 'react';

export default function ScrollButtons() {
  const [showTop, setShowTop] = useState(false);
  const [atTop, setAtTop] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;
      setShowTop(y > 500);
      setAtTop(y < 100);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToBottom = () => {
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Go to bottom — shown at top center of page */}
      <button
        type="button"
        onClick={scrollToBottom}
        className={`fixed top-20 left-1/2 -translate-x-1/2 z-40 flex items-center gap-2 rounded-full bg-white dark:bg-navy-800 px-4 py-2 text-xs font-medium text-gray-700 dark:text-gray-200 shadow-lg ring-1 ring-gray-200 dark:ring-navy-600 transition-all duration-500 hover:bg-gray-50 dark:hover:bg-navy-700 hover:shadow-xl active:scale-95 ${
          atTop ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0 pointer-events-none'
        }`}
        aria-label="Ir al final de la página"
      >
        Ir al final
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </button>

      {/* Go to top — shown when scrolled down */}
      <button
        type="button"
        onClick={scrollToTop}
        className={`fixed bottom-24 right-6 z-40 flex h-11 w-11 items-center justify-center rounded-full bg-white dark:bg-navy-800 text-gray-700 dark:text-gray-200 shadow-lg ring-1 ring-gray-200 dark:ring-navy-600 transition-all duration-500 hover:bg-gray-50 dark:hover:bg-navy-700 hover:scale-110 active:scale-95 ${
          showTop ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0 pointer-events-none'
        }`}
        aria-label="Volver al inicio"
        title="Ir al inicio"
      >
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </button>
    </>
  );
}
