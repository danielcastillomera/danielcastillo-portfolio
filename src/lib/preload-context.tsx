'use client';

import { createContext, useContext, useEffect, useState, useRef, type ReactNode } from 'react';

/**
 * PreloadProvider
 *
 * Mantiene la página oculta (pero ya montada y renderizada en el DOM) hasta
 * que las fuentes web y las imágenes marcadas como críticas terminan de
 * cargar. Esto evita el "flash" de contenido sin estilo y los saltos de
 * layout que ocurren cuando GSAP/ScrollTrigger calcula posiciones antes de
 * que el documento tenga su altura final.
 *
 * Estrategia:
 * 1. Espera a `document.fonts.ready`.
 * 2. Espera a que las imágenes con `data-preload="true"` disparen `load`.
 * 3. Aplica un mínimo de tiempo de exhibición del preloader (evita parpadeos
 *    en conexiones muy rápidas) y un máximo de espera (evita bloqueos
 *    indefinidos si un recurso falla).
 */

interface PreloadContextValue {
  isReady: boolean;
}

const PreloadContext = createContext<PreloadContextValue>({ isReady: false });

export function usePreload() {
  return useContext(PreloadContext);
}

const MIN_DISPLAY_MS = 500;
const MAX_WAIT_MS = 3500;

export function PreloadProvider({ children }: { children: ReactNode }) {
  const [isReady, setIsReady] = useState(false);
  const startTime = useRef(Date.now());

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setIsReady(true);
      return;
    }

    let cancelled = false;

    const finish = () => {
      if (cancelled) return;
      const elapsed = Date.now() - startTime.current;
      const remaining = Math.max(0, MIN_DISPLAY_MS - elapsed);
      window.setTimeout(() => { if (!cancelled) setIsReady(true); }, remaining);
    };

    const fontsReady = document.fonts?.ready ?? Promise.resolve();

    const criticalImages = Array.from(document.querySelectorAll<HTMLImageElement>('img[data-preload="true"]'));
    const imagePromises = criticalImages.map(img => {
      if (img.complete) return Promise.resolve();
      return new Promise<void>(resolve => {
        img.addEventListener('load', () => resolve(), { once: true });
        img.addEventListener('error', () => resolve(), { once: true });
      });
    });

    const safetyTimeout = new Promise<void>(resolve => {
      window.setTimeout(resolve, MAX_WAIT_MS);
    });

    Promise.race([Promise.all([fontsReady, ...imagePromises]), safetyTimeout]).then(finish);

    return () => { cancelled = true; };
  }, []);

  return (
    <PreloadContext.Provider value={{ isReady }}>
      {children}
    </PreloadContext.Provider>
  );
}
