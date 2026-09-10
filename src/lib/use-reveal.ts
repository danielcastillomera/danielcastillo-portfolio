'use client';

import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
  ScrollTrigger.config({ ignoreMobileResize: true });
}

interface UseRevealOptions { once?: boolean; }

/**
 * useReveal — motor de entrada/salida "fade-in-up" bidireccional, impulsado
 * por GSAP ScrollTrigger. La sección se desliza hacia arriba al entrar en
 * viewport bajando el scroll, y se desliza de vuelta al salir subiendo el
 * scroll, repitiéndose en cada paso por el umbral.
 *
 * `isVisible` se mantiene como bandera de un solo disparo (con red de
 * seguridad por temporizador) para uso exclusivo de componentes que
 * escalonan la aparición de elementos internos; la opacidad/posición real
 * del contenedor la controla GSAP directamente sobre el nodo referenciado.
 */
export function useReveal(options: UseRevealOptions = {}) {
  const { once = false } = options;
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;

    if (typeof window === 'undefined') return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setIsVisible(true);
      if (el) gsap.set(el, { opacity: 1, y: 0 });
      return;
    }

    const fallback = window.setTimeout(() => {
      setIsVisible(true);
      if (el) gsap.set(el, { opacity: 1, y: 0 });
    }, 650);

    if (!el) return () => window.clearTimeout(fallback);

    const revealFlag = ScrollTrigger.create({
      trigger: el,
      start: 'top 90%',
      once: true,
      onEnter: () => { setIsVisible(true); window.clearTimeout(fallback); },
    });

    gsap.set(el, { opacity: 0, y: 44 });
    const tween = gsap.to(el, {
      opacity: 1,
      y: 0,
      duration: 0.75,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: el,
        start: 'top 85%',
        end: 'bottom 12%',
        toggleActions: once ? 'play none none none' : 'play reverse play reverse',
      },
    });

    return () => {
      revealFlag.kill();
      tween.scrollTrigger?.kill();
      tween.kill();
      window.clearTimeout(fallback);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [once]);

  return { ref, isVisible };
}
