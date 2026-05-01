'use client';

import { useEffect, useRef, useState, useCallback } from 'react';
import { CERTIFICATIONS } from '@/lib/data';
import { useReveal } from '@/lib/use-reveal';
import { useT, useI18n } from '@/lib/i18n-provider';

/* ─────────────────────────────────────────────────────────────────────────────
 * PdfCanvasViewer v7.6.6
 *
 * Renderiza el PDF usando PDF.js sobre un <canvas>.
 * NO usa <iframe> ni <embed> — evita por completo los bloqueos de
 * X-Frame-Options / CSP en Android Chrome, iOS Safari y cualquier navegador.
 *
 * Flujo:
 * 1. Carga pdf.js desde CDN (unpkg) de forma dinámica (compatible SSR).
 * 2. Fetch del PDF mediante la API route interna /api/pdf?file=<name>.
 * 3. Renderiza la página 1 en un <canvas> con DPR correcto.
 * 4. Muestra un botón "Abrir ↗" para ver el documento completo.
 *
 * Compatible: Android Chrome/Firefox/Samsung Internet, iOS Safari 16+,
 *             Desktop Chrome/Edge/Firefox/Safari, tablets.
 * ───────────────────────────────────────────────────────────────────────── */

const PDFJS_VERSION = '3.11.174';
const PDFJS_CDN     = `https://unpkg.com/pdfjs-dist@${PDFJS_VERSION}/build/pdf.min.js`;
const WORKER_CDN    = `https://unpkg.com/pdfjs-dist@${PDFJS_VERSION}/build/pdf.worker.min.js`;

type PdfStatus = 'idle' | 'loading' | 'rendered' | 'error';

/* Tipo mínimo de la API de PDF.js que usamos */
interface PdfjsLib {
  GlobalWorkerOptions: { workerSrc: string };
  getDocument(params: { data: ArrayBuffer }): { promise: Promise<PdfjsDoc> };
}
interface PdfjsDoc  { getPage(n: number): Promise<PdfjsPage> }
interface PdfjsPage {
  getViewport(params: { scale: number }): { width: number; height: number };
  render(params: { canvasContext: CanvasRenderingContext2D; viewport: { width: number; height: number } }): { promise: Promise<void> };
}

function PdfCanvasViewer({ file, title }: { file: string; title: string }) {
  const canvasRef               = useRef<HTMLCanvasElement>(null);
  const [status, setStatus]     = useState<PdfStatus>('idle');
  const [isMounted, setMounted] = useState(false);
  const renderRef               = useRef(false); // evita doble render en StrictMode

  const filename = file.split('/').pop() ?? '';
  const apiUrl   = `/api/pdf?file=${encodeURIComponent(filename)}`;

  /* Carga PDF.js dinámicamente (sin import estático para no romper SSR) */
  const loadPdfJs = useCallback((): Promise<PdfjsLib> => {
    return new Promise((resolve, reject) => {
      if (typeof window === 'undefined') { reject(new Error('SSR')); return; }

      const w = window as typeof window & { pdfjsLib?: PdfjsLib };

      if (w.pdfjsLib) { resolve(w.pdfjsLib); return; }

      const script   = document.createElement('script');
      script.src     = PDFJS_CDN;
      script.async   = true;
      script.onload  = () => {
        const lib = (window as typeof window & { pdfjsLib?: PdfjsLib }).pdfjsLib;
        if (!lib) { reject(new Error('pdfjs-load')); return; }
        lib.GlobalWorkerOptions.workerSrc = WORKER_CDN;
        resolve(lib);
      };
      script.onerror = () => reject(new Error('pdfjs-script'));
      document.head.appendChild(script);
    });
  }, []);

  const renderPage = useCallback(async () => {
    if (renderRef.current) return;
    renderRef.current = true;
    setStatus('loading');

    try {
      const pdfjsLib = await loadPdfJs();

      const response = await fetch(apiUrl);
      if (!response.ok) throw new Error(`fetch-${response.status}`);
      const arrayBuffer = await response.arrayBuffer();

      const pdf  = await pdfjsLib.getDocument({ data: arrayBuffer }).promise;
      const page = await pdf.getPage(1);

      const canvas = canvasRef.current;
      if (!canvas) throw new Error('no-canvas');

      const dpr       = Math.min(window.devicePixelRatio || 1, 2); // limitar a 2x para performance
      const container = canvas.parentElement;
      const cssWidth  = container?.clientWidth ?? 320;

      const viewport   = page.getViewport({ scale: 1 });
      const scale      = cssWidth / viewport.width;
      const scaledView = page.getViewport({ scale: scale * dpr });

      canvas.width        = scaledView.width;
      canvas.height       = scaledView.height;
      canvas.style.width  = `${cssWidth}px`;
      canvas.style.height = `${Math.round(scaledView.height / dpr)}px`;

      const ctx = canvas.getContext('2d');
      if (!ctx) throw new Error('no-ctx');

      await page.render({ canvasContext: ctx, viewport: scaledView }).promise;
      setStatus('rendered');
    } catch {
      setStatus('error');
      renderRef.current = false; // permitir reintento
    }
  }, [apiUrl, loadPdfJs]);

  useEffect(() => { setMounted(true); }, []);

  /* Renderizar solo cuando el componente sea visible (IntersectionObserver) */
  useEffect(() => {
    if (!isMounted) return;
    const canvas = canvasRef.current;
    if (!canvas) return;

    const observer = new IntersectionObserver(
      entries => {
        if (entries[0]?.isIntersecting && status === 'idle') {
          void renderPage();
        }
      },
      { threshold: 0.1 },
    );
    observer.observe(canvas);
    return () => observer.disconnect();
  }, [isMounted, status, renderPage]);

  if (!isMounted) return null;

  return (
    <div className="mt-4 w-full flex flex-col gap-2">
      {/* Botón Abrir — siempre visible en todos los dispositivos */}
      <div className="flex justify-end">
        <a
          href={apiUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 rounded-lg border border-accent-500 px-3 py-1 text-xs font-semibold text-accent-600 dark:text-accent-400 hover:bg-accent-500 hover:text-black dark:hover:text-black transition-colors touch-manipulation select-none"
          aria-label={`Abrir ${title} en nueva pestaña`}
        >
          Abrir ↗
        </a>
      </div>

      {/* Contenedor del canvas PDF */}
      <div
        className="relative w-full rounded-lg overflow-hidden border border-gray-200 dark:border-navy-700 bg-gray-50 dark:bg-navy-800"
        style={{ minHeight: '200px' }}
        role="img"
        aria-label={`Vista previa: ${title}`}
      >
        {/* Spinner de carga */}
        {status === 'loading' && (
          <div className="absolute inset-0 flex items-center justify-center z-10 bg-gray-50/80 dark:bg-navy-800/80">
            <div className="flex flex-col items-center gap-2">
              <div className="w-8 h-8 rounded-full border-2 border-accent-500/30 border-t-accent-500 animate-spin" />
              <span className="text-[10px] text-gray-500 dark:text-gray-400">Cargando PDF…</span>
            </div>
          </div>
        )}

        {/* Estado de error */}
        {status === 'error' && (
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 p-4 z-10">
            <svg
              className="w-9 h-9 text-accent-500"
              fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
            </svg>
            <p className="text-xs text-center text-gray-600 dark:text-gray-400 max-w-xs leading-relaxed">
              Toca <strong className="text-accent-500">Abrir ↗</strong> para ver el documento.
            </p>
          </div>
        )}

        {/* Canvas — siempre en DOM para que IntersectionObserver lo detecte */}
        <canvas
          ref={canvasRef}
          className="block w-full"
          style={{ display: status === 'rendered' ? 'block' : 'none', userSelect: 'none' }}
          aria-hidden="true"
        />

        {/* Placeholder idle */}
        {status === 'idle' && (
          <div className="flex items-center justify-center" style={{ minHeight: '200px' }}>
            <div className="w-6 h-6 rounded-full border-2 border-accent-500/20 border-t-accent-500/60 animate-spin" />
          </div>
        )}
      </div>
    </div>
  );
}

/* ══════════════════════════════════════════════════════════ */

export default function Certifications() {
  const { ref, isVisible } = useReveal();
  const t                  = useT();
  const { locale }         = useI18n();

  const certs = CERTIFICATIONS.filter(c => c.id !== 'carta-recomendacion');
  const carta = CERTIFICATIONS.find(c => c.id === 'carta-recomendacion');

  const statusCfg = {
    'in-progress': {
      label: t.certifications.status.inProgress,
      dot:   'bg-blue-500 animate-pulse',
      badge: 'border-blue-500/30 bg-blue-500/10 text-blue-600 dark:text-blue-400',
    },
    active: {
      label: t.certifications.status.active,
      dot:   'bg-green-500',
      badge: 'border-green-500/30 bg-green-500/10 text-green-600 dark:text-green-400',
    },
    completed: {
      label: t.certifications.status.completed,
      dot:   'bg-gray-400',
      badge: 'border-gray-400/30 bg-gray-100 dark:bg-navy-800 text-gray-600 dark:text-gray-300',
    },
  };

  const CertCard = ({ cert, i }: { cert: typeof CERTIFICATIONS[0]; i: number }) => {
    const s      = statusCfg[cert.status];
    const title  = locale === 'en' ? cert.titleEn    : cert.title;
    const issuer = locale === 'en' ? cert.issuerEn   : cert.issuer;
    const loc    = locale === 'en' ? cert.locationEn : cert.location;

    return (
      <article
        className="glass rounded-xl p-5 card-glow flex flex-col"
        style={{
          opacity:    isVisible ? 1 : 0,
          transform:  isVisible ? 'translateY(0)' : 'translateY(20px)',
          transition: `opacity 0.5s ease ${i * 80}ms, transform 0.5s ease ${i * 80}ms`,
        }}
        aria-label={title}
      >
        <h3 className="text-sm font-bold text-gray-900 dark:text-white leading-snug mb-4">{title}</h3>

        <dl className="space-y-1.5 text-xs">
          <div className="flex gap-1.5 flex-wrap">
            <dt className="font-semibold text-gray-600 dark:text-gray-400 shrink-0 whitespace-nowrap">{t.certifications.issuer}:</dt>
            <dd className="text-gray-800 dark:text-gray-200">{issuer}</dd>
          </div>
          <div className="flex gap-1.5 flex-wrap">
            <dt className="font-semibold text-gray-600 dark:text-gray-400 shrink-0 whitespace-nowrap">{t.certifications.location}:</dt>
            <dd className="text-gray-800 dark:text-gray-200">{loc}</dd>
          </div>
          <div className="flex gap-1.5 flex-wrap">
            <dt className="font-semibold text-gray-600 dark:text-gray-400 shrink-0 whitespace-nowrap">{t.certifications.date}:</dt>
            <dd className="text-gray-800 dark:text-gray-200">{cert.date}</dd>
          </div>
          <div className="flex gap-1.5 flex-wrap">
            <dt className="font-semibold text-gray-600 dark:text-gray-400 shrink-0 whitespace-nowrap">{t.certifications.duration}:</dt>
            <dd className="text-gray-800 dark:text-gray-200">{cert.duration}</dd>
          </div>
          <div className="flex gap-1.5 items-center flex-wrap pt-0.5">
            <dt className="font-semibold text-gray-600 dark:text-gray-400 shrink-0 whitespace-nowrap">{t.certifications.statusLabel}:</dt>
            <dd>
              <span className={`inline-flex items-center gap-1 rounded-full border px-2 py-0.5 font-semibold ${s.badge}`}>
                <span className={`w-1.5 h-1.5 rounded-full ${s.dot}`} aria-hidden="true" />
                {s.label}
              </span>
            </dd>
          </div>
        </dl>

        {cert.pdfFile && <PdfCanvasViewer file={cert.pdfFile} title={title} />}
      </article>
    );
  };

  return (
    <section id="certificaciones" className="relative py-16 sm:py-24" aria-labelledby="certs-heading">
      <div
        className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-50/40 dark:via-navy-900/30 to-transparent"
        aria-hidden="true"
      />
      <div
        ref={ref}
        className={`relative mx-auto max-w-7xl px-6 lg:px-8 transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        {/* Encabezado */}
        <div className="mb-12">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-accent-500">
            {t.certifications.sectionLabel}
          </span>
          <h2
            id="certs-heading"
            className="mt-3 text-3xl font-bold tracking-tight section-title sm:text-4xl"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            {t.certifications.title}
          </h2>
          <div className="mt-3 h-1 w-16 rounded-full bg-gradient-to-r from-accent-500 to-accent-600" aria-hidden="true" />
          <p className="mt-4 text-base text-gray-900 dark:text-gray-100 max-w-2xl">
            {t.certifications.subtitle}
          </p>
        </div>

        {/* Grid de certificados */}
        <div className="grid gap-6 sm:grid-cols-2">
          {certs.map((cert, i) => (
            <CertCard key={cert.id} cert={cert} i={i} />
          ))}
        </div>

        {/* Carta de Recomendación */}
        {carta && (
          <div className="mt-16">
            <div className="mb-8">
              <h3
                className="text-xl font-bold section-title sm:text-2xl"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                {locale === 'en' ? 'Letter of Recommendation' : 'Carta de Recomendación'}
              </h3>
              <div className="mt-2 h-0.5 w-12 rounded-full bg-accent-500" aria-hidden="true" />
            </div>
            <article className="glass rounded-xl p-5 sm:p-6 card-glow max-w-2xl">
              <h4 className="text-sm font-bold text-gray-900 dark:text-white leading-snug mb-4">
                {locale === 'en'
                  ? 'Letter of Recommendation — Agro Industrias Warsa C.A.'
                  : 'Carta de Recomendación — Agro Industrias Warsa C.A.'}
              </h4>
              <dl className="space-y-1.5 text-xs">
                <div className="flex gap-1.5 flex-wrap">
                  <dt className="font-semibold text-gray-600 dark:text-gray-400 shrink-0 whitespace-nowrap">
                    {t.certifications.issuer}:
                  </dt>
                  <dd className="text-gray-800 dark:text-gray-200">
                    Agro Industrias Warsa C.A. (Ing. Elías Ward Adum, Gerente General).
                  </dd>
                </div>
                <div className="flex gap-1.5 flex-wrap">
                  <dt className="font-semibold text-gray-600 dark:text-gray-400 shrink-0 whitespace-nowrap">
                    {t.certifications.location}:
                  </dt>
                  <dd className="text-gray-800 dark:text-gray-200">Guayaquil, Ecuador.</dd>
                </div>
                <div className="flex gap-1.5 flex-wrap">
                  <dt className="font-semibold text-gray-600 dark:text-gray-400 shrink-0 whitespace-nowrap">
                    {t.certifications.date}:
                  </dt>
                  <dd className="text-gray-800 dark:text-gray-200">20-04-2026.</dd>
                </div>
              </dl>
              {carta.pdfFile && (
                <PdfCanvasViewer
                  file={carta.pdfFile}
                  title={locale === 'en' ? carta.titleEn : carta.title}
                />
              )}
            </article>
          </div>
        )}
      </div>
    </section>
  );
}
