'use client';

import { useState, useRef, useEffect } from 'react';
import { useI18n } from '@/lib/i18n-provider';

const LANGS = [
  { code: 'es' as const, label: 'Español', flag: '🇪🇨' },
  { code: 'en' as const, label: 'English', flag: '🇺🇸' },
];

export default function LanguageToggle() {
  const { locale, setLocale } = useI18n();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const cur = LANGS.find(l => l.code === locale) ?? LANGS[0];

  useEffect(() => {
    const h = (e: MouseEvent) => { if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false); };
    document.addEventListener('mousedown', h);
    return () => document.removeEventListener('mousedown', h);
  }, []);

  useEffect(() => {
    const h = (e: KeyboardEvent) => { if (e.key === 'Escape') setOpen(false); };
    document.addEventListener('keydown', h);
    return () => document.removeEventListener('keydown', h);
  }, []);

  return (
    <div ref={ref} className="relative" onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="flex items-center gap-1.5 rounded-lg border border-gray-200 dark:border-navy-600 px-2.5 py-1.5 text-xs font-semibold text-gray-700 dark:text-navy-200 transition-all hover:border-accent-500/50 hover:text-accent-500 hover:bg-amber-50 dark:hover:bg-accent-500/10 active:scale-95 select-none"
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label="Cambiar idioma / Change language"
      >
        {/* Bandera visible en PC y móvil (fix 3) */}
        <span className="text-base leading-none" aria-hidden="true">{cur.flag}</span>
        <span className="hidden sm:inline">{cur.label}</span>
        <svg
          className={`w-3 h-3 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
          fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden="true"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
        </svg>
      </button>

      {/* Dropdown */}
      <div
        role="listbox"
        aria-label="Seleccionar idioma"
        className={`absolute top-full right-0 mt-1 w-36 rounded-xl bg-white dark:bg-navy-900 shadow-xl ring-1 ring-gray-200 dark:ring-navy-700 overflow-hidden z-50 transition-all duration-200 origin-top-right ${open ? 'opacity-100 scale-100 pointer-events-auto' : 'opacity-0 scale-95 pointer-events-none'}`}
      >
        {LANGS.map(lang => (
          <button
            key={lang.code}
            type="button"
            role="option"
            aria-selected={locale === lang.code}
            onClick={() => { setLocale(lang.code); setOpen(false); }}
            className={`w-full flex items-center gap-2.5 px-3 py-2.5 text-sm transition-colors text-left ${
              locale === lang.code
                ? 'bg-accent-500/10 text-accent-600 dark:text-accent-400 font-semibold'
                : 'text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-navy-800'
            }`}
          >
            {/* Bandera en el dropdown */}
            <span className="text-base" aria-hidden="true">{lang.flag}</span>
            <span>{lang.label}</span>
            {locale === lang.code && (
              <svg className="w-3.5 h-3.5 ml-auto text-accent-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3} aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
              </svg>
            )}
          </button>
        ))}
      </div>
    </div>
  );
}
