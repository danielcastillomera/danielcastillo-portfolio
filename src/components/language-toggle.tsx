'use client';

import { useI18n } from '@/lib/i18n-provider';

/**
 * LanguageToggle v9.1.1
 *
 * Selector de idioma simplificado: un interruptor de dos estados (ES/EN)
 * sin banderas ni imágenes de países, evitando representaciones nacionales
 * incorrectas o innecesarias para una decisión puramente lingüística.
 */
export default function LanguageToggle() {
  const { locale, setLocale } = useI18n();

  return (
    <div
      role="group"
      aria-label="Seleccionar idioma"
      className="flex items-center rounded-lg border border-gray-200 dark:border-navy-600 p-0.5 text-xs font-bold"
    >
      <button
        type="button"
        onClick={() => setLocale('es')}
        aria-pressed={locale === 'es'}
        className={`rounded-md px-2.5 py-1 transition-colors ${
          locale === 'es'
            ? 'bg-accent-500 text-black'
            : 'text-gray-500 dark:text-navy-300 hover:text-amber-500 hover:underline hover:decoration-amber-500 underline-offset-2'
        }`}
      >
        ES
      </button>
      <button
        type="button"
        onClick={() => setLocale('en')}
        aria-pressed={locale === 'en'}
        className={`rounded-md px-2.5 py-1 transition-colors ${
          locale === 'en'
            ? 'bg-accent-500 text-black'
            : 'text-gray-500 dark:text-navy-300 hover:text-amber-500 hover:underline hover:decoration-amber-500 underline-offset-2'
        }`}
      >
        EN
      </button>
    </div>
  );
}
