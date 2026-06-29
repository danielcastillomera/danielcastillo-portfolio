'use client';

import { useEffect, useRef, useState } from 'react';

interface UseRevealOptions { threshold?: number; rootMargin?: string; once?: boolean; }

/**
 * useReveal v7.6.9 — FIX CRÍTICO DEFINITIVO
 *
 * CAUSA RAÍZ (presente desde versiones anteriores):
 * La visibilidad del contenido dependía al 100% de que un
 * IntersectionObserver disparara correctamente. En ciertos
 * dispositivos móviles esto fallaba de forma permanente debido a:
 *   1. Viewport dinámico de Safari/Chrome iOS/Android (la barra de
 *      direcciones se oculta/muestra al hacer scroll, cambiando la
 *      altura real del viewport en cada frame).
 *   2. rootMargin negativo ('-60px' inferior) que reducía la zona de
 *      disparo, combinado con threshold alto (0.15) — en secciones
 *      más altas que el viewport ajustado, o al final del documento
 *      (Certificaciones, Carta de Recomendación), el umbral de
 *      intersección nunca se alcanzaba.
 *   3. Layout shifts por carga progresiva de imágenes que desplazaban
 *      la posición real del elemento antes de que el observer
 *      pudiera evaluarlo de nuevo.
 *
 * Esto dejaba secciones completas en opacity:0 PERMANENTEMENTE —
 * percibido como "scroll infinito" (cuadros vacíos) y contenido que
 * nunca aparece en ciertos dispositivos.
 *
 * SOLUCIÓN: el IntersectionObserver se mantiene únicamente como
 * mejora visual progresiva (reveal-on-scroll). Un temporizador de
 * seguridad garantiza que TODO el contenido se vuelva visible sin
 * importar el comportamiento del observer, el dispositivo, el
 * navegador o el tamaño de pantalla. Esto es el patrón estándar de
 * "progressive enhancement con fallback garantizado" usado en
 * ingeniería de software profesional: la animación es un extra, la
 * visibilidad del contenido NUNCA depende de ella.
 */
export function useReveal(options: UseRevealOptions = {}) {
  const { threshold = 0.05, rootMargin = '0px 0px 120px 0px', once = true } = options;
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;

    // Accesibilidad: con "reduce motion" activado, mostrar de inmediato.
    if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setIsVisible(true);
      return;
    }

    // ── Red de seguridad ──
    // Garantiza visibilidad sin importar si el IntersectionObserver
    // dispara o no. 600 ms es imperceptible en la carga inicial pero
    // evita por completo el bug de contenido invisible permanente.
    const fallback = setTimeout(() => setIsVisible(true), 600);

    if (!el || typeof IntersectionObserver === 'undefined') {
      setIsVisible(true);
      return () => clearTimeout(fallback);
    }

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          clearTimeout(fallback);
          if (once) obs.unobserve(el);
        } else if (!once) {
          setIsVisible(false);
        }
      },
      { threshold, rootMargin },
    );
    obs.observe(el);

    return () => { obs.disconnect(); clearTimeout(fallback); };
  }, [threshold, rootMargin, once]);

  return { ref, isVisible };
}
