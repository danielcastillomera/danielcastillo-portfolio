'use client';

import { createContext, useCallback, useContext, useEffect, useState } from 'react';
import { type Locale, detectLocale, translations } from './i18n';

// Use the 'es' shape as the canonical interface — both locales share the same keys
type T = typeof translations.es;

interface I18nContextType {
  locale: Locale;
  t: T;
  setLocale: (locale: Locale) => void;
  toggleLocale: () => void;
}

const I18nContext = createContext<I18nContextType>({
  locale: 'es',
  t: translations.es,
  setLocale: () => {},
  toggleLocale: () => {},
});

export function useI18n() {
  return useContext(I18nContext);
}

/** Shorthand hook — returns the translation dict directly */
export function useT(): T {
  return useContext(I18nContext).t;
}

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>('es');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const detected = detectLocale();
    setLocaleState(detected);
    setMounted(true);
  }, []);

  const setLocale = useCallback((newLocale: Locale) => {
    setLocaleState(newLocale);
    try {
      localStorage.setItem('portfolio-locale', newLocale);
    } catch {}
    document.documentElement.lang = newLocale === 'en' ? 'en' : 'es';
  }, []);

  const toggleLocale = useCallback(() => {
    setLocale(locale === 'es' ? 'en' : 'es');
  }, [locale, setLocale]);

  useEffect(() => {
    if (mounted) {
      document.documentElement.lang = locale === 'en' ? 'en' : 'es';
    }
  }, [locale, mounted]);

  // Cast is safe: both locales share identical key structure
  const t = translations[locale] as T;

  return (
    <I18nContext.Provider value={{ locale, t, setLocale, toggleLocale }}>
      {children}
    </I18nContext.Provider>
  );
}
