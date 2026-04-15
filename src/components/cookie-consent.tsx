'use client';

import { useEffect, useState } from 'react';
import { useT } from '@/lib/i18n-provider';

interface CookiePreferences {
  essential: true;  // Always true — cannot be disabled
  analytics: boolean;
  marketing: boolean;
}

type ConsentState = 'pending' | 'accepted' | 'rejected' | 'customized';

const STORAGE_KEY = 'portfolio-cookie-consent';

export default function CookieConsent() {
  const t = useT();
  const [state, setState] = useState<ConsentState | null>(null);
  const [showCustomize, setShowCustomize] = useState(false);
  const [prefs, setPrefs] = useState<CookiePreferences>({ essential: true, analytics: false, marketing: false });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved) as { state: ConsentState };
        setState(parsed.state);
      } else {
        // Show after 1.5s delay — not immediately intrusive
        const timer = setTimeout(() => setState('pending'), 1500);
        return () => clearTimeout(timer);
      }
    } catch {
      setState('pending');
    }
    setMounted(true);
  }, []);

  useEffect(() => { setMounted(true); }, []);

  const save = (newState: ConsentState, newPrefs?: CookiePreferences) => {
    const data = { state: newState, prefs: newPrefs ?? prefs, savedAt: Date.now() };
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(data)); } catch {}
    setState(newState);
    setShowCustomize(false);
  };

  const acceptAll = () => save('accepted', { essential: true, analytics: true, marketing: true });
  const rejectAll = () => save('rejected', { essential: true, analytics: false, marketing: false });
  const savePrefs = () => save('customized', prefs);

  if (!mounted || state === null || state === 'accepted' || state === 'rejected' || state === 'customized') return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={t.cookies.title}
      className={`fixed inset-x-0 bottom-0 z-50 flex justify-center px-4 pb-4 transition-all duration-500 ${state === 'pending' ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0 pointer-events-none'}`}
    >
      <div className="w-full max-w-2xl rounded-2xl bg-white dark:bg-navy-900 shadow-2xl shadow-black/20 dark:shadow-black/50 ring-1 ring-gray-200 dark:ring-navy-700 overflow-hidden">
        
        {/* Main banner */}
        {!showCustomize && (
          <div className="p-5 sm:p-6">
            <div className="flex items-start gap-3 mb-4">
              <span className="text-2xl mt-0.5" aria-hidden="true">🍪</span>
              <div className="flex-1 min-w-0">
                <h2 className="text-base font-bold text-gray-900 dark:text-white">{t.cookies.title}</h2>
                <p className="mt-1 text-sm text-gray-600 dark:text-gray-300 leading-relaxed">{t.cookies.message}</p>
              </div>
            </div>
            <div className="flex flex-wrap gap-2 justify-end">
              <button
                type="button"
                onClick={() => setShowCustomize(true)}
                className="px-4 py-2 rounded-lg text-sm font-medium text-gray-600 dark:text-gray-300 border border-gray-200 dark:border-navy-600 hover:border-gray-400 dark:hover:border-navy-400 hover:bg-gray-50 dark:hover:bg-white/5 transition-all active:scale-95"
              >
                {t.cookies.customize}
              </button>
              <button
                type="button"
                onClick={rejectAll}
                className="px-4 py-2 rounded-lg text-sm font-medium text-gray-700 dark:text-gray-200 border border-gray-300 dark:border-navy-500 hover:bg-gray-100 dark:hover:bg-navy-800 transition-all active:scale-95"
              >
                {t.cookies.reject}
              </button>
              <button
                type="button"
                onClick={acceptAll}
                className="px-4 py-2 rounded-lg text-sm font-bold bg-accent-500 text-black hover:bg-accent-400 shadow-lg shadow-accent-500/20 transition-all active:scale-95"
              >
                {t.cookies.accept}
              </button>
            </div>
          </div>
        )}

        {/* Customize panel */}
        {showCustomize && (
          <div className="p-5 sm:p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-base font-bold text-gray-900 dark:text-white">{t.cookies.customize}</h2>
              <button
                type="button"
                onClick={() => setShowCustomize(false)}
                className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 transition-colors"
                aria-label="Cerrar"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
              </button>
            </div>

            <div className="space-y-3">
              {/* Essential — always on */}
              <div className="flex items-start justify-between gap-3 rounded-lg bg-gray-50 dark:bg-navy-800/60 p-3">
                <div className="flex-1">
                  <p className="text-sm font-semibold text-gray-800 dark:text-gray-200">{t.cookies.essential}</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">{t.cookies.essentialDesc}</p>
                </div>
                <div className="h-5 w-10 rounded-full bg-accent-500 flex items-center justify-end pr-0.5 shrink-0 mt-0.5 opacity-60 cursor-not-allowed" aria-label="Siempre activo">
                  <span className="h-4 w-4 rounded-full bg-white shadow" />
                </div>
              </div>

              {/* Analytics */}
              <div className="flex items-start justify-between gap-3 rounded-lg bg-gray-50 dark:bg-navy-800/60 p-3">
                <div className="flex-1">
                  <p className="text-sm font-semibold text-gray-800 dark:text-gray-200">{t.cookies.analytics}</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">{t.cookies.analyticsDesc}</p>
                </div>
                <button
                  type="button"
                  role="switch"
                  aria-checked={prefs.analytics}
                  onClick={() => setPrefs(p => ({ ...p, analytics: !p.analytics }))}
                  className={`relative h-5 w-10 shrink-0 rounded-full transition-colors duration-200 mt-0.5 ${prefs.analytics ? 'bg-accent-500' : 'bg-gray-200 dark:bg-navy-600'}`}
                >
                  <span className={`absolute top-0.5 h-4 w-4 rounded-full bg-white shadow transition-transform duration-200 ${prefs.analytics ? 'left-5' : 'left-0.5'}`} />
                </button>
              </div>

              {/* Marketing */}
              <div className="flex items-start justify-between gap-3 rounded-lg bg-gray-50 dark:bg-navy-800/60 p-3">
                <div className="flex-1">
                  <p className="text-sm font-semibold text-gray-800 dark:text-gray-200">{t.cookies.marketing}</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">{t.cookies.marketingDesc}</p>
                </div>
                <button
                  type="button"
                  role="switch"
                  aria-checked={prefs.marketing}
                  onClick={() => setPrefs(p => ({ ...p, marketing: !p.marketing }))}
                  className={`relative h-5 w-10 shrink-0 rounded-full transition-colors duration-200 mt-0.5 ${prefs.marketing ? 'bg-accent-500' : 'bg-gray-200 dark:bg-navy-600'}`}
                >
                  <span className={`absolute top-0.5 h-4 w-4 rounded-full bg-white shadow transition-transform duration-200 ${prefs.marketing ? 'left-5' : 'left-0.5'}`} />
                </button>
              </div>
            </div>

            <div className="flex justify-end gap-2 mt-4">
              <button type="button" onClick={rejectAll} className="px-4 py-2 rounded-lg text-sm font-medium text-gray-700 dark:text-gray-200 border border-gray-300 dark:border-navy-500 hover:bg-gray-100 dark:hover:bg-navy-800 transition-all active:scale-95">
                {t.cookies.reject}
              </button>
              <button type="button" onClick={savePrefs} className="px-4 py-2 rounded-lg text-sm font-bold bg-accent-500 text-black hover:bg-accent-400 transition-all active:scale-95">
                {t.cookies.save}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
