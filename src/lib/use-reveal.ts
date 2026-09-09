'use client';

import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
  ScrollTrigger.config({ ignoreMobileResize: true });
}

interface UseRevealOptions { threshold?: number; rootMargin?: string; once?: boolean; }

/**
 * useReveal — motor de entrada "fade-in-up" basado en GSAP ScrollTrigger.
 *
 * Expone la misma API pública ({ ref, isVisible }) que consumen todos los
 * componentes de sección, de modo que la migración a GSAP no requiere tocar
 * la lógica interna de cada uno.
 *
 * Incluye una red de seguridad heredada del fix de contenido invisible en
 * móvil: si ScrollTrigger no llega a disparar por cualquier motivo (cálculo
 * de altura de viewport dinámico, layout shift por imágenes, etc.), un
 * temporizador fuerza `isVisible = true` a los 650ms. La visibilidad del
 * contenido nunca depende exclusivamente de la animación.
 */
export function useReveal(options: UseRevealOptions = {}) {
  const { once = true } = options;
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;

    if (typeof window === 'undefined') return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setIsVisible(true);
      return;
    }

    const fallback = window.setTimeout(() => setIsVisible(true), 650);

    if (!el) return () => window.clearTimeout(fallback);

    const trigger = ScrollTrigger.create({
      trigger: el,
      start: 'top 90%',
      once,
      onEnter: () => { setIsVisible(true); window.clearTimeout(fallback); },
    });

    return () => { trigger.kill(); window.clearTimeout(fallback); };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { ref, isVisible };
}
