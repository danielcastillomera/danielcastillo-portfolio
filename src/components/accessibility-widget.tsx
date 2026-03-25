'use client';

import { useState, useEffect, useCallback } from 'react';

interface A11ySettings {
  fontSize: number; // 0=normal, 1=large, 2=xlarge
  highContrast: boolean;
  reducedMotion: boolean;
  highlightLinks: boolean;
  largeCursor: boolean;
}

const DEFAULT: A11ySettings = {
  fontSize: 0,
  highContrast: false,
  reducedMotion: false,
  highlightLinks: false,
  largeCursor: false,
};

export default function AccessibilityWidget() {
  const [open, setOpen] = useState(false);
  const [settings, setSettings] = useState<A11ySettings>(DEFAULT);
  const [mounted, setMounted] = useState(false);

  // Load saved settings
  useEffect(() => {
    try {
      const saved = localStorage.getItem('a11y-settings');
      if (saved) setSettings(JSON.parse(saved));
    } catch {}
    setMounted(true);
  }, []);

  // Apply settings to DOM
  useEffect(() => {
    if (!mounted) return;
    const root = document.documentElement;

    // Font size
    const sizes = ['100%', '112.5%', '125%'];
    root.style.fontSize = sizes[settings.fontSize];

    // High contrast
    root.classList.toggle('a11y-high-contrast', settings.highContrast);

    // Reduced motion
    root.classList.toggle('a11y-reduced-motion', settings.reducedMotion);

    // Highlight links
    root.classList.toggle('a11y-highlight-links', settings.highlightLinks);

    // Large cursor
    root.classList.toggle('a11y-large-cursor', settings.largeCursor);

    localStorage.setItem('a11y-settings', JSON.stringify(settings));
  }, [settings, mounted]);

  // Close on Escape
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && open) setOpen(false);
    };
    document.addEventListener('keydown', handler);
    return () => document.removeEventListener('keydown', handler);
  }, [open]);

  const update = useCallback((key: keyof A11ySettings, value: boolean | number) => {
    setSettings((prev) => ({ ...prev, [key]: value }));
  }, []);

  const reset = useCallback(() => {
    setSettings(DEFAULT);
  }, []);

  const fontLabel = ['Normal', 'Grande', 'Extra grande'][settings.fontSize];

  if (!mounted) return null;

  return (
    <>
      {/* Global a11y styles (injected via class toggles) */}
      <style jsx global>{`
        .a11y-high-contrast body {
          filter: contrast(1.3);
        }
        .a11y-reduced-motion *, .a11y-reduced-motion *::before, .a11y-reduced-motion *::after {
          animation-duration: 0.01ms !important;
          animation-iteration-count: 1 !important;
          transition-duration: 0.01ms !important;
          scroll-behavior: auto !important;
        }
        .a11y-highlight-links a {
          outline: 2px solid #f59e0b !important;
          outline-offset: 2px !important;
          text-decoration: underline !important;
        }
        .a11y-large-cursor, .a11y-large-cursor * {
          cursor: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32'%3E%3Cpath d='M5 2l20 14-10 2-4 10z' fill='%23000' stroke='%23fff' stroke-width='1.5'/%3E%3C/svg%3E") 5 2, auto !important;
        }
      `}</style>

      {/* Trigger button — positioned bottom-left */}
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className={`fixed bottom-6 left-6 z-50 flex h-12 w-12 items-center justify-center rounded-full shadow-lg transition-all duration-300 ${
          open
            ? 'bg-accent-500 text-black scale-90'
            : 'bg-white dark:bg-navy-800 text-blue-600 dark:text-blue-400 hover:bg-gray-50 dark:hover:bg-navy-700 hover:scale-105'
        } ring-1 ring-gray-200 dark:ring-navy-600`}
        aria-expanded={open}
        aria-controls="a11y-panel"
        aria-label="Opciones de accesibilidad"
        title="Accesibilidad"
      >
        {/* Universal accessibility icon — person with arms open inside circle */}
        <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 2.5a1.75 1.75 0 110 3.5 1.75 1.75 0 010-3.5zm5 5.5l-3.5.7v2.8l2.1 4.2c.2.4 0 .8-.4 1h-.2c-.3 0-.5-.2-.6-.4L12 13.5l-2.4 4.8c-.1.2-.4.4-.6.4h-.2c-.4-.2-.6-.6-.4-1l2.1-4.2V10.7L7 10c-.4-.1-.6-.5-.5-.9.1-.3.5-.6.9-.5l4.1.8h1l4.1-.8c.4-.1.8.2.9.5.1.5-.1.8-.5.9z"/>
        </svg>
      </button>

      {/* Panel */}
      <div
        id="a11y-panel"
        role="dialog"
        aria-label="Panel de accesibilidad"
        aria-modal="false"
        className={`fixed bottom-20 left-6 z-50 w-72 rounded-xl shadow-2xl transition-all duration-300 ${
          open
            ? 'translate-y-0 opacity-100 pointer-events-auto'
            : 'translate-y-4 opacity-0 pointer-events-none'
        } bg-white dark:bg-navy-900 ring-1 ring-gray-200 dark:ring-navy-700`}
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-gray-100 dark:border-navy-700 px-4 py-3">
          <h3 className="text-sm font-bold text-gray-900 dark:text-white flex items-center gap-2">
            <svg className="w-4 h-4 text-accent-500" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 2.5a1.75 1.75 0 110 3.5 1.75 1.75 0 010-3.5zm5 5.5l-3.5.7v2.8l2.1 4.2c.2.4 0 .8-.4 1h-.2c-.3 0-.5-.2-.6-.4L12 13.5l-2.4 4.8c-.1.2-.4.4-.6.4h-.2c-.4-.2-.6-.6-.4-1l2.1-4.2V10.7L7 10c-.4-.1-.6-.5-.5-.9.1-.3.5-.6.9-.5l4.1.8h1l4.1-.8c.4-.1.8.2.9.5.1.5-.1.8-.5.9z"/>
            </svg>
            Accesibilidad
          </h3>
          <button
            type="button"
            onClick={reset}
            className="text-xs font-medium text-accent-500 hover:text-accent-600 transition-colors"
            aria-label="Restaurar opciones de accesibilidad"
          >
            Restaurar
          </button>
        </div>

        <div className="p-4 space-y-4">
          {/* Font size */}
          <div>
            <label className="text-xs font-medium text-gray-600 dark:text-navy-300 mb-2 block">
              Tamaño de texto: <span className="text-accent-500 font-bold">{fontLabel}</span>
            </label>
            <div className="flex gap-2">
              {[0, 1, 2].map((level) => (
                <button
                  key={level}
                  type="button"
                  onClick={() => update('fontSize', level)}
                  className={`flex-1 rounded-lg py-2 text-center text-xs font-semibold transition-all ${
                    settings.fontSize === level
                      ? 'bg-accent-500 text-black'
                      : 'bg-gray-100 dark:bg-navy-800 text-gray-600 dark:text-navy-300 hover:bg-gray-200 dark:hover:bg-navy-700'
                  }`}
                  aria-pressed={settings.fontSize === level}
                >
                  {['A', 'A+', 'A++'][level]}
                </button>
              ))}
            </div>
          </div>

          {/* Toggle options */}
          {[
            { key: 'highContrast' as const, label: 'Alto contraste', desc: 'Aumenta el contraste visual' },
            { key: 'reducedMotion' as const, label: 'Reducir animaciones', desc: 'Desactiva animaciones' },
            { key: 'highlightLinks' as const, label: 'Resaltar enlaces', desc: 'Subraya y resalta todos los enlaces' },
            { key: 'largeCursor' as const, label: 'Cursor grande', desc: 'Aumenta el tamaño del cursor' },
          ].map(({ key, label, desc }) => (
            <div key={key} className="flex items-center justify-between">
              <div>
                <span className="text-sm font-medium text-gray-800 dark:text-navy-200">{label}</span>
                <p className="text-xs text-gray-400 dark:text-navy-500">{desc}</p>
              </div>
              <button
                type="button"
                role="switch"
                aria-checked={settings[key] as boolean}
                aria-label={label}
                onClick={() => update(key, !(settings[key] as boolean))}
                className={`relative h-6 w-11 shrink-0 rounded-full transition-colors duration-200 ${
                  settings[key] ? 'bg-accent-500' : 'bg-gray-200 dark:bg-navy-700'
                }`}
              >
                <span
                  className={`absolute top-0.5 left-0.5 h-5 w-5 rounded-full bg-white shadow transition-transform duration-200 ${
                    settings[key] ? 'translate-x-5' : 'translate-x-0'
                  }`}
                />
              </button>
            </div>
          ))}
        </div>

        {/* Footer info */}
        <div className="border-t border-gray-100 dark:border-navy-700 px-4 py-2.5">
          <p className="text-[10px] text-gray-400 dark:text-navy-500 text-center">
            WCAG 2.1 / 2.2 · Nivel A–AAA
          </p>
        </div>
      </div>
    </>
  );
}
