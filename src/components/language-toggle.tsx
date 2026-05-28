'use client';

import { useState, useRef, useEffect } from 'react';
import { useI18n } from '@/lib/i18n-provider';

/* ─────────────────────────────────────────────────────────────────────────────
 * LanguageToggle v7.6.8-r2
 *
 * Botón: solo "Español EC" o "English US" — sin bandera emoji (no renderizan
 * en Android con fuente emoji faltante). Usa SVG inline como banderas.
 * Panel: "CAMBIAR IDIOMA" + opciones ES/EN + "Cambiar país/región".
 * ───────────────────────────────────────────────────────────────────────── */

/* Banderas SVG inline — compatibles con todos los dispositivos */
const FlagEC = () => (
  <svg viewBox="0 0 20 14" width="20" height="14" aria-hidden="true" className="rounded-[2px] shrink-0">
    <rect width="20" height="14" fill="#FFD100"/>
    <rect width="20" height="4.67" y="4.67" fill="#003893"/>
    <rect width="20" height="4.67" y="9.33" fill="#D40000"/>
  </svg>
);

const FlagUS = () => (
  <svg viewBox="0 0 20 14" width="20" height="14" aria-hidden="true" className="rounded-[2px] shrink-0">
    <rect width="20" height="14" fill="#B22234"/>
    {[0,2,4,6,8,10,12].map(y => (
      <rect key={y} width="20" height="1.08" y={y} fill={y % 2 === 0 ? '#B22234' : '#fff'}/>
    ))}
    <rect width="8" height="7.5" fill="#3C3B6E"/>
  </svg>
);

const FlagMX = () => (
  <svg viewBox="0 0 20 14" width="20" height="14" aria-hidden="true" className="rounded-[2px] shrink-0">
    <rect width="20" height="14" fill="#CE1126"/>
    <rect width="6.67" height="14" fill="#006847"/>
    <rect width="6.67" height="14" x="6.67" fill="#fff"/>
  </svg>
);

const FlagCO = () => (
  <svg viewBox="0 0 20 14" width="20" height="14" aria-hidden="true" className="rounded-[2px] shrink-0">
    <rect width="20" height="14" fill="#FCD116"/>
    <rect width="20" height="4.67" y="4.67" fill="#003893"/>
    <rect width="20" height="4.67" y="9.33" fill="#CE1126"/>
  </svg>
);

const FlagGeneric = ({ color }: { color: string }) => (
  <svg viewBox="0 0 20 14" width="20" height="14" aria-hidden="true" className="rounded-[2px] shrink-0">
    <rect width="20" height="7" fill={color}/>
    <rect width="20" height="7" y="7" fill="#fff"/>
  </svg>
);

const FLAG_COMPONENTS: Record<string, React.ReactNode> = {
  EC: <FlagEC />, US: <FlagUS />, MX: <FlagMX />, CO: <FlagCO />,
  AR: <FlagGeneric color="#74ACDF" />, PE: <FlagGeneric color="#D91023" />,
  CL: <FlagGeneric color="#D52B1E" />, ES: <FlagGeneric color="#C60B1E" />,
  GB: <FlagGeneric color="#012169" />, CA: <FlagGeneric color="#FF0000" />,
};

const LANGS = [
  { code: 'es' as const, label: 'Español', country: 'EC' },
  { code: 'en' as const, label: 'English', country: 'US' },
];

const REGIONS = [
  { code: 'EC', name: 'Ecuador',        lang: 'Español', langCode: 'es' as const },
  { code: 'US', name: 'United States',  lang: 'English', langCode: 'en' as const },
  { code: 'MX', name: 'México',         lang: 'Español', langCode: 'es' as const },
  { code: 'CO', name: 'Colombia',       lang: 'Español', langCode: 'es' as const },
  { code: 'AR', name: 'Argentina',      lang: 'Español', langCode: 'es' as const },
  { code: 'PE', name: 'Perú',           lang: 'Español', langCode: 'es' as const },
  { code: 'CL', name: 'Chile',          lang: 'Español', langCode: 'es' as const },
  { code: 'ES', name: 'España',         lang: 'Español', langCode: 'es' as const },
  { code: 'GB', name: 'United Kingdom', lang: 'English', langCode: 'en' as const },
  { code: 'CA', name: 'Canada',         lang: 'English', langCode: 'en' as const },
];

export default function LanguageToggle() {
  const { locale, setLocale } = useI18n();
  const [open,        setOpen]        = useState(false);
  const [regionModal, setRegionModal] = useState(false);
  const [selected,    setSelected]    = useState('EC');
  const ref      = useRef<HTMLDivElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);
  const cur      = LANGS.find(l => l.code === locale) ?? LANGS[0];

  useEffect(() => {
    const h = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
      if (regionModal && modalRef.current && !modalRef.current.contains(e.target as Node)) setRegionModal(false);
    };
    document.addEventListener('mousedown', h);
    return () => document.removeEventListener('mousedown', h);
  }, [regionModal]);

  useEffect(() => {
    const h = (e: KeyboardEvent) => {
      if (e.key === 'Escape') { setOpen(false); setRegionModal(false); }
    };
    document.addEventListener('keydown', h);
    return () => document.removeEventListener('keydown', h);
  }, []);

  useEffect(() => {
    document.body.style.overflow = regionModal ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [regionModal]);

  return (
    <>
      <div
        ref={ref}
        className="relative"
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
      >
        {/* ── Botón principal: "Español EC" ── */}
        <button
          type="button"
          onClick={() => setOpen(!open)}
          className="flex items-center gap-1.5 rounded-lg border border-gray-200 dark:border-navy-600 px-2.5 py-1.5 text-xs font-semibold text-gray-700 dark:text-navy-200 transition-all hover:border-accent-500/50 hover:text-accent-500 hover:bg-amber-50 dark:hover:bg-accent-500/10 active:scale-95 select-none"
          aria-haspopup="listbox"
          aria-expanded={open}
          aria-label="Cambiar idioma"
        >
          {FLAG_COMPONENTS[cur.country]}
          <span>{cur.label}&nbsp;{cur.country}</span>
          <svg
            className={`w-3 h-3 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
            fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}
            aria-hidden="true"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
          </svg>
        </button>

        {/* ── Panel dropdown ── */}
        <div
          role="dialog"
          aria-label="Cambiar idioma"
          className={`absolute top-full right-0 mt-1 w-52 rounded-xl bg-white dark:bg-navy-900 shadow-xl ring-1 ring-gray-200 dark:ring-navy-700 overflow-hidden z-50 transition-all duration-200 origin-top-right ${
            open ? 'opacity-100 scale-100 pointer-events-auto' : 'opacity-0 scale-95 pointer-events-none'
          }`}
        >
          <div className="px-3 pt-3 pb-2 border-b border-gray-100 dark:border-navy-700">
            <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 dark:text-gray-500">
              Cambiar idioma
            </p>
          </div>

          <div role="listbox" aria-label="Opciones de idioma" className="py-1">
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
                {FLAG_COMPONENTS[lang.country]}
                <span>{lang.label}</span>
                <span className="text-xs text-gray-400 dark:text-navy-500">{lang.country}</span>
                {locale === lang.code && (
                  <svg className="w-3.5 h-3.5 ml-auto text-accent-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3} aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                  </svg>
                )}
              </button>
            ))}
          </div>

          <div className="border-t border-gray-100 dark:border-navy-700 px-3 py-2.5">
            <button
              type="button"
              onClick={() => { setOpen(false); setRegionModal(true); }}
              className="w-full flex items-center gap-2 text-xs text-[#1F79C8] hover:underline hover:decoration-[#C7511F] hover:text-[#C7511F] transition-colors text-left"
            >
              <svg className="w-3.5 h-3.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253" />
              </svg>
              Cambiar país/región
            </button>
          </div>
        </div>
      </div>

      {/* ── Modal país/región ── */}
      {regionModal && (
        <div
          className="fixed inset-0 z-[200] flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          aria-label="Seleccionar país/región"
        >
          <div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setRegionModal(false)}
            aria-hidden="true"
          />
          <div
            ref={modalRef}
            className="relative z-10 w-full max-w-md rounded-2xl bg-white dark:bg-navy-900 shadow-2xl ring-1 ring-gray-200 dark:ring-navy-700 overflow-hidden"
          >
            <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100 dark:border-navy-700">
              <div>
                <h2 className="text-base font-bold text-gray-900 dark:text-white">Página web (país/región)</h2>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">Selecciona tu sitio web de país/región preferido:</p>
              </div>
              <button
                type="button"
                onClick={() => setRegionModal(false)}
                className="flex items-center justify-center w-8 h-8 rounded-lg text-gray-400 hover:text-gray-700 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-navy-800 transition-colors"
                aria-label="Cerrar"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="px-4 py-3 max-h-80 overflow-y-auto">
              <div className="space-y-1">
                {REGIONS.map(region => (
                  <button
                    key={region.code}
                    type="button"
                    onClick={() => { setSelected(region.code); setLocale(region.langCode); setRegionModal(false); }}
                    className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-colors text-left ${
                      selected === region.code
                        ? 'bg-accent-500/10 text-accent-600 dark:text-accent-400 font-semibold'
                        : 'text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-navy-800'
                    }`}
                  >
                    {FLAG_COMPONENTS[region.code]}
                    <div className="flex-1 min-w-0">
                      <span className="font-medium">{region.name}</span>
                      <span className="ml-2 text-xs text-gray-400 dark:text-navy-400">{region.lang}</span>
                    </div>
                    {selected === region.code && (
                      <svg className="w-4 h-4 shrink-0 text-accent-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                      </svg>
                    )}
                  </button>
                ))}
              </div>
            </div>

            <div className="px-6 py-4 border-t border-gray-100 dark:border-navy-700 flex justify-end gap-3">
              <button
                type="button"
                onClick={() => setRegionModal(false)}
                className="px-4 py-2 rounded-lg text-sm font-medium text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-navy-800 transition-colors"
              >
                Cancelar
              </button>
              <button
                type="button"
                onClick={() => setRegionModal(false)}
                className="px-4 py-2 rounded-lg text-sm font-bold bg-accent-500 text-black hover:bg-accent-400 transition-colors"
              >
                Aplicar
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
