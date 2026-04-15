'use client';

import { useI18n } from '@/lib/i18n-provider';

export default function LanguageToggle() {
  const { locale, toggleLocale, t } = useI18n();

  return (
    <button
      type="button"
      onClick={toggleLocale}
      className="flex items-center gap-1 rounded-lg border border-gray-200 dark:border-navy-600 px-2.5 py-1.5 text-xs font-bold text-gray-700 dark:text-navy-200 transition-all hover:border-accent-500/50 hover:text-accent-500 hover:bg-amber-50 dark:hover:bg-accent-500/10 active:scale-95 select-none"
      aria-label={t.nav.languageLabel}
      title={t.nav.languageLabel}
    >
      <span className="text-sm" aria-hidden="true">
        {locale === 'es' ? '🇪🇨' : '🇺🇸'}
      </span>
      <span className="font-mono">{t.nav.language}</span>
    </button>
  );
}
