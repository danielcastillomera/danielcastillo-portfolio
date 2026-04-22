'use client';
import { useEffect, useState } from 'react';
import { useT } from '@/lib/i18n-provider';

interface CookiePrefs { essential: true; analytics: boolean; marketing: boolean; }
type State = 'pending'|'accepted'|'rejected'|'customized';
const KEY = 'portfolio-cookie-consent';

export default function CookieConsent() {
  const t = useT();
  const [state, setState] = useState<State|null>(null);
  const [custom, setCustom] = useState(false);
  const [prefs, setPrefs] = useState<CookiePrefs>({ essential: true, analytics: false, marketing: false });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    try { const s = localStorage.getItem(KEY); if (s) { setState(JSON.parse(s).state); } else { const t2 = setTimeout(() => setState('pending'), 1500); return () => clearTimeout(t2); } } catch { setState('pending'); }
    setMounted(true);
  }, []);
  useEffect(() => { setMounted(true); }, []);

  const save = (ns: State, np?: CookiePrefs) => { try { localStorage.setItem(KEY, JSON.stringify({ state: ns, prefs: np ?? prefs, savedAt: Date.now() })); } catch {} setState(ns); setCustom(false); };
  const acceptAll = () => save('accepted', { essential: true, analytics: true, marketing: true });
  const rejectAll  = () => save('rejected',  { essential: true, analytics: false, marketing: false });

  if (!mounted || !state || state === 'accepted' || state === 'rejected' || state === 'customized') return null;

  return (
    <div role="dialog" aria-modal="true" aria-label={t.cookies.title}
      className={`fixed inset-x-0 bottom-0 z-50 flex justify-center px-4 pb-4 transition-all duration-500 ${state === 'pending' ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0 pointer-events-none'}`}>
      <div className="w-full max-w-xl rounded-2xl bg-white dark:bg-navy-900 shadow-2xl ring-1 ring-gray-200 dark:ring-navy-700 overflow-hidden">
        {!custom ? (
          <div className="p-4 sm:p-5">
            <div className="flex items-start gap-3 mb-3">
              <span className="text-xl mt-0.5 shrink-0" aria-hidden="true">🍪</span>
              <div className="flex-1 min-w-0">
                <h2 className="text-sm font-bold text-gray-900 dark:text-white">{t.cookies.title}</h2>
                <p className="mt-0.5 text-xs text-gray-700 dark:text-gray-300 leading-relaxed">{t.cookies.message}</p>
              </div>
              <button type="button" onClick={rejectAll} className="shrink-0 flex h-7 w-7 items-center justify-center rounded-lg text-gray-500 hover:text-gray-700 dark:hover:text-gray-200 hover:bg-gray-100 dark:hover:bg-navy-800 transition-colors" aria-label="Cerrar">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
              </button>
            </div>
            <div className="flex flex-col sm:flex-row gap-2 sm:justify-end">
              <button type="button" onClick={() => setCustom(true)} className="w-full sm:w-auto px-3 py-2 rounded-lg text-xs font-medium text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-navy-600 hover:bg-gray-50 dark:hover:bg-white/5 transition-all active:scale-95">{t.cookies.customize}</button>
              <button type="button" onClick={rejectAll} className="w-full sm:w-auto px-3 py-2 rounded-lg text-xs font-medium text-gray-800 dark:text-gray-200 border border-gray-300 dark:border-navy-500 hover:bg-gray-100 dark:hover:bg-navy-800 transition-all active:scale-95">{t.cookies.reject}</button>
              <button type="button" onClick={acceptAll} className="w-full sm:w-auto px-4 py-2 rounded-lg text-xs font-bold bg-accent-500 text-black hover:bg-accent-400 transition-all active:scale-95">{t.cookies.accept}</button>
            </div>
          </div>
        ) : (
          <div className="p-4 sm:p-5">
            <div className="flex items-center justify-between mb-3">
              <h2 className="text-sm font-bold text-gray-900 dark:text-white">{t.cookies.customize}</h2>
              <button type="button" onClick={() => setCustom(false)} className="flex h-7 w-7 items-center justify-center rounded-lg text-gray-500 hover:text-gray-700 dark:hover:text-gray-200 hover:bg-gray-100 dark:hover:bg-navy-800 transition-colors" aria-label="Cerrar"><svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg></button>
            </div>
            <div className="space-y-2">
              {[
                { key: 'essential' as const, label: t.cookies.essential, desc: t.cookies.essentialDesc, fixed: true },
                { key: 'analytics' as const, label: t.cookies.analytics, desc: t.cookies.analyticsDesc, fixed: false },
                { key: 'marketing' as const, label: t.cookies.marketing, desc: t.cookies.marketingDesc, fixed: false },
              ].map(({key, label, desc, fixed}) => (
                <div key={key} className="flex items-center justify-between gap-3 rounded-lg bg-gray-50 dark:bg-navy-800/60 p-3">
                  <div><p className="text-xs font-semibold text-gray-900 dark:text-gray-100">{label}</p><p className="text-[10px] text-gray-600 dark:text-gray-400 mt-0.5">{desc}</p></div>
                  <div className={`relative h-5 w-9 shrink-0 rounded-full ${fixed ? 'bg-accent-500 opacity-60 cursor-not-allowed' : prefs[key] ? 'bg-accent-500' : 'bg-gray-200 dark:bg-navy-600'} ${!fixed ? 'cursor-pointer' : ''}`}
                    onClick={!fixed ? () => setPrefs(p => ({...p, [key]: !p[key]})) : undefined}
                    role={!fixed ? 'switch' : undefined} aria-checked={!fixed ? prefs[key] as boolean : undefined}>
                    <span className={`absolute top-0.5 h-4 w-4 rounded-full bg-white shadow transition-transform duration-200 ${(fixed || prefs[key as keyof CookiePrefs]) ? 'left-4' : 'left-0.5'}`} />
                  </div>
                </div>
              ))}
            </div>
            <div className="flex flex-col sm:flex-row gap-2 sm:justify-end mt-3">
              <button type="button" onClick={rejectAll} className="w-full sm:w-auto px-3 py-2 rounded-lg text-xs font-medium text-gray-800 dark:text-gray-200 border border-gray-300 dark:border-navy-500 hover:bg-gray-100 dark:hover:bg-navy-800 transition-all active:scale-95">{t.cookies.reject}</button>
              <button type="button" onClick={() => save('customized', prefs)} className="w-full sm:w-auto px-4 py-2 rounded-lg text-xs font-bold bg-accent-500 text-black hover:bg-accent-400 transition-all active:scale-95">{t.cookies.save}</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
