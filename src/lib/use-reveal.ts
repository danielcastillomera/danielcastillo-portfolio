'use client';

import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
  ScrollTrigger.config({ ignoreMobileResize: true });
}

/**
 * useReveal — motor de entrada/salida "fade-in-up" bidireccional sobre
 * GSAP ScrollTrigger.
 *
 * El nodo referenciado arranca oculto (opacity: 0, y: 50) y solo se revela
 * cuando el usuario baja el scroll hasta él. Al subir el scroll y salir del
 * viewport, la animación se revierte automáticamente. El propio
 * ScrollTrigger calcula el estado correcto al montar el componente, así que
 * una sección que ya está dentro del viewport en la carga inicial se
 * muestra de inmediato sin depender de temporizadores externos.
 *
 * `isVisible` se expone como bandera de un solo disparo para los
 * componentes que escalonan la aparición de elementos internos; la
 * opacidad/posición real del contenedor la controla GSAP directamente.
 */
export function useReveal() {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setIsVisible(true);
      gsap.set(el, { opacity: 1, y: 0 });
      return;
    }

    const tween = gsap.fromTo(
      el,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.75,
        ease: 'power2.out',
        onStart: () => setIsVisible(true),
        scrollTrigger: {
          trigger: el,
          start: 'top 85%',
          end: 'bottom 15%',
          toggleActions: 'play reverse play reverse',
        },
      },
    );

    return () => {
      tween.scrollTrigger?.kill();
      tween.kill();
    };
  }, []);

  return { ref, isVisible };
}
