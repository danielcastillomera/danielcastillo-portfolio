'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { useT } from '@/lib/i18n-provider';

interface A11ySettings { fontSize: number; highContrast: boolean; reducedMotion: boolean; highlightLinks: boolean; largeCursor: boolean; }
const DEFAULT: A11ySettings = { fontSize: 0, highContrast: false, reducedMotion: false, highlightLinks: false, largeCursor: false };

export default function AccessibilityWidget() {
  const [open, setOpen] = useState(false);
  const [settings, setSettings] = useState<A11ySettings>(DEFAULT);
  const [mounted, setMounted] = useState(false);
  const t = useT();

  useEffect(() => {
    try { const s = localStorage.getItem('a11y-settings'); if (s) setSettings(JSON.parse(s)); } catch {}
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    const root = document.documentElement;
    const sizes = ['100%', '112.5%', '125%'];
    root.style.fontSize = sizes[settings.fontSize];
    root.classList.toggle('a11y-reduced-motion', settings.reducedMotion);
    root.classList.toggle('a11y-highlight-links', settings.highlightLinks);
    root.classList.toggle('a11y-large-cursor', settings.largeCursor);
    if (settings.highContrast) root.setAttribute('data-high-contrast', 'true');
    else root.removeAttribute('data-high-contrast');
    try { localStorage.setItem('a11y-settings', JSON.stringify(settings)); } catch {}
  }, [settings, mounted]);

  useEffect(() => {
    const h = (e: KeyboardEvent) => { if (e.key === 'Escape' && open) setOpen(false); };
    document.addEventListener('keydown', h); return () => document.removeEventListener('keydown', h);
  }, [open]);

  const update = useCallback((key: keyof A11ySettings, value: boolean | number) => setSettings(prev => ({ ...prev, [key]: value })), []);
  const reset  = useCallback(() => setSettings(DEFAULT), []);
  const fontLabel = [t.a11y.fontNormal, t.a11y.fontLarge, t.a11y.fontXLarge][settings.fontSize];

  if (!mounted) return null;

  return (
    <>
      {/* Botón trigger — usa el SVG adjunto sin deformar, solo cambia tamaño */}
      <button type="button" onClick={() => setOpen(!open)}
        className={`fixed bottom-6 left-6 z-50 flex h-12 w-12 items-center justify-center rounded-full shadow-xl transition-all duration-300 hover:bg-accent-400 ${open ? 'scale-90 ring-2 ring-accent-300' : 'hover:scale-105'}`}
        aria-expanded={open} aria-controls="a11y-panel" aria-label={t.a11y.label} title={t.a11y.title}>
        {/* SVG del archivo adjunto: solo se ajusta el tamaño, sin deformar */}
        <Image
          src="/icons/accessibility.svg"
          alt={t.a11y.label}
          width={48}
          height={48}
          className="h-12 w-12 object-contain"
          style={{ display: 'block' }}
          priority
        />
      </button>

      {/* Panel */}
      <div id="a11y-panel" role="dialog" aria-label={t.a11y.title} aria-modal="false"
        className={`fixed bottom-20 left-6 z-50 w-72 rounded-xl shadow-2xl transition-all duration-300 ${open ? 'translate-y-0 opacity-100 pointer-events-auto' : 'translate-y-4 opacity-0 pointer-events-none'} bg-white dark:bg-navy-900 ring-1 ring-gray-200 dark:ring-navy-700`}>

        <div className="flex items-center justify-between border-b border-gray-100 dark:border-navy-700 px-4 py-3">
          <h3 className="text-sm font-bold text-gray-900 dark:text-white flex items-center gap-2">
            {/* Mismo SVG en el título del panel, tamaño reducido */}
            <Image
              src="/icons/accessibility.svg"
              alt=""
              width={16}
              height={16}
              className="h-4 w-4 object-contain"
              aria-hidden="true"
            />
            {t.a11y.title}
          </h3>
          <button type="button" onClick={reset} className="text-xs font-medium text-accent-500 hover:text-accent-600 transition-colors">{t.a11y.restore}</button>
        </div>

        <div className="p-4 space-y-4">
          <div>
            <label className="text-xs font-medium text-gray-900 dark:text-gray-100 mb-2 block">
              {t.a11y.fontSize}: <span className="text-accent-500 font-bold">{fontLabel}</span>
            </label>
            <div className="flex gap-2">
              {[0, 1, 2].map(level => (
                <button key={level} type="button" onClick={() => update('fontSize', level)}
                  className={`flex-1 rounded-lg py-2 text-center text-xs font-semibold transition-all ${settings.fontSize === level ? 'bg-accent-500 text-black' : 'bg-gray-100 dark:bg-navy-800 text-gray-900 dark:text-gray-100 hover:bg-gray-200 dark:hover:bg-navy-700'}`}
                  aria-pressed={settings.fontSize === level}>
                  {['A', 'A+', 'A++'][level]}
                </button>
              ))}
            </div>
          </div>

          {([
            { key: 'highContrast',   label: t.a11y.highContrast,   desc: t.a11y.highContrastDesc },
            { key: 'reducedMotion',  label: t.a11y.reducedMotion,  desc: t.a11y.reducedMotionDesc },
            { key: 'highlightLinks', label: t.a11y.highlightLinks, desc: t.a11y.highlightLinksDesc },
            { key: 'largeCursor',    label: t.a11y.largeCursor,    desc: t.a11y.largeCursorDesc },
          ] as const).map(({ key, label, desc }) => (
            <div key={key} className="flex items-center justify-between gap-3">
              <div className="min-w-0">
                <span className="text-sm font-medium text-gray-900 dark:text-gray-100 block">{label}</span>
                <p className="text-[11px] text-gray-600 dark:text-gray-400">{desc}</p>
              </div>
              <button type="button" role="switch" aria-checked={settings[key] as boolean} aria-label={label}
                onClick={() => update(key, !(settings[key] as boolean))}
                className={`relative h-6 w-11 shrink-0 rounded-full transition-colors duration-200 ${settings[key] ? 'bg-accent-500' : 'bg-gray-200 dark:bg-navy-700'}`}>
                <span className={`absolute top-0.5 left-0.5 h-5 w-5 rounded-full bg-white shadow transition-transform duration-200 ${settings[key] ? 'translate-x-5' : 'translate-x-0'}`} />
              </button>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-100 dark:border-navy-700 px-4 py-2.5">
          <p className="text-[10px] text-gray-600 dark:text-gray-400 text-center">{t.a11y.wcag}</p>
        </div>
      </div>
    </>
  );
}
