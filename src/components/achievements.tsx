'use client';

import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useReveal } from '@/lib/use-reveal';
import { useI18n } from '@/lib/i18n-provider';
import { ACHIEVEMENT_STATS } from '@/lib/data';

if (typeof window !== 'undefined') gsap.registerPlugin(ScrollTrigger);

const ACHIEVEMENTS_ES = [
  {
    id: 'dashboard',
    icon: '🏗️',
    highlight: 'Dashboard Enterprise v3.4.0',
    text: 'Desarrollé y desplegué en producción Dashboard Enterprise v3.4.0, sistema de gestión empresarial con módulo de facturación electrónica certificado bajo normativa SRI Ecuador, operativo para negocios de comercio y retail — actualmente en desarrollo activo.',
  },
  {
    id: 'xml',
    icon: '⚙️',
    highlight: 'Motor XML de comprobantes electrónicos',
    text: 'Implementé de forma autónoma el motor de generación de comprobantes electrónicos en formato XML con cumplimiento regulatorio completo — habilidad técnica avanzada para un perfil junior.',
  },
  {
    id: 'docs',
    icon: '📄',
    highlight: 'Documentación técnica profesional completa',
    text: 'Creé y entregué documentación técnica profesional completa (manual de usuario, manual técnico y contrato SaaS) en Overleaf/LaTeX — estándar propio de perfiles senior.',
  },
  {
    id: 'cne',
    icon: '🎨',
    highlight: 'Rediseño completo del sitio web del CNE',
    text: 'Diseñé y ejecuté el rediseño completo del sitio web del CNE en Figma con evaluación heurística de Nielsen y principios de Material Design en equipo multidisciplinario.',
  },
  {
    id: 'brand',
    icon: '📣',
    highlight: 'Identidad digital de Soluciones Técnicas Industriales D.C.',
    text: 'Construí desde cero la identidad digital y presencia en redes sociales de Soluciones Técnicas Industriales D.C., incluyendo diseño de logotipo, gestión de contenido y campañas de publicidad pagada activas en Facebook, Instagram y TikTok.',
  },
  {
    id: 'crm',
    icon: '🤝',
    highlight: 'Gestión de relaciones con clientes (CRM)',
    text: 'Gestioné relaciones con clientes (CRM) y ejecuté actividades de ventas y atención al cliente en entornos de trabajo bajo presión con cumplimiento de objetivos comerciales.',
  },
  {
    id: 'soprisa',
    icon: '🏢',
    highlight: 'Pasantías simultáneas en dos áreas de Soprisa S.A.',
    text: 'Realicé pasantías simultáneas en dos áreas de Soprisa S.A. (Tesorería y Sistemas), demostrando capacidad de gestión multitarea en entorno corporativo real.',
  },
  {
    id: 'posts-comments',
    icon: '💼',
    highlight: 'POSTS-COMMENTS-MANAGER — prueba técnica superada',
    text: 'Superé una prueba técnica de laboratorio de 4 días para Consultor Fullstack en Albatros (Honduras), entregando una aplicación Angular 18+ / NestJS 10 con autenticación JWT, paginación real y tests unitarios.',
  },
  {
    id: 'tiktok-warsa',
    icon: '📱',
    highlight: 'Presencia en TikTok de Agro Industrias Warsa C.A.',
    text: 'Construí la presencia en la red social TikTok de Agro Industrias Warsa C.A., incluyendo la gestión de contenido y campañas de publicidad pagada activas en TikTok.',
  },
  {
    id: 'mvc',
    icon: '🎓',
    highlight: 'PROYECTO-UNIFICADO-AVANCE en C# con patrón MVC',
    text: 'Desarrollé PROYECTO-UNIFICADO-AVANCE en C# aplicando patrón de diseño MVC en proyecto colaborativo universitario — actualmente en desarrollo activo.',
  },
];

const ACHIEVEMENTS_EN = [
  {
    id: 'dashboard',
    icon: '🏗️',
    highlight: 'Dashboard Enterprise v3.4.0',
    text: 'I developed and deployed to production Dashboard Enterprise v3.4.0, a business management system with an electronic invoicing module certified under SRI Ecuador regulations, operational for commerce and retail businesses — currently in active development.',
  },
  {
    id: 'xml',
    icon: '⚙️',
    highlight: 'XML electronic voucher generation engine',
    text: 'I independently implemented the electronic voucher generation engine in XML format with full regulatory compliance — an advanced technical skill for a junior profile.',
  },
  {
    id: 'docs',
    icon: '📄',
    highlight: 'Complete professional technical documentation',
    text: 'I created and delivered complete professional technical documentation (user manual, technical manual and SaaS contract) in Overleaf/LaTeX — a standard typical of senior profiles.',
  },
  {
    id: 'cne',
    icon: '🎨',
    highlight: 'Full CNE website redesign',
    text: 'I designed and executed the full CNE website redesign in Figma with Nielsen heuristic evaluation and Material Design principles in a multidisciplinary team.',
  },
  {
    id: 'brand',
    icon: '📣',
    highlight: 'Digital identity of Soluciones Técnicas Industriales D.C.',
    text: 'I built from scratch the digital identity and social media presence of Soluciones Técnicas Industriales D.C., including logo design, content management and active paid advertising campaigns on Facebook, Instagram and TikTok.',
  },
  {
    id: 'crm',
    icon: '🤝',
    highlight: 'Customer relationship management (CRM)',
    text: 'I managed customer relationships (CRM) and executed sales and customer service activities in high-pressure work environments with commercial goal achievement.',
  },
  {
    id: 'soprisa',
    icon: '🏢',
    highlight: 'Simultaneous internships in two Soprisa S.A. areas',
    text: 'I completed simultaneous internships in two Soprisa S.A. areas (Treasury and Systems), demonstrating multitasking management in a real corporate environment.',
  },
  {
    id: 'posts-comments',
    icon: '💼',
    highlight: 'POSTS-COMMENTS-MANAGER — technical test passed',
    text: 'I passed a 4-day technical lab test for a Fullstack Consultant role at Albatros (Honduras), delivering an Angular 18+ / NestJS 10 application with JWT authentication, real pagination and unit tests.',
  },
  {
    id: 'tiktok-warsa',
    icon: '📱',
    highlight: 'TikTok presence for Agro Industrias Warsa C.A.',
    text: 'I built the TikTok social media presence for Agro Industrias Warsa C.A., including content management and active paid advertising campaigns on TikTok.',
  },
  {
    id: 'mvc',
    icon: '🎓',
    highlight: 'PROYECTO-UNIFICADO-AVANCE in C# with MVC pattern',
    text: 'I developed PROYECTO-UNIFICADO-AVANCE in C# applying the MVC design pattern in a collaborative university project — currently in active development.',
  },
];

function StatCounter({ value, suffix, label }: { value: number; suffix: string; label: string }) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      el.textContent = `${value}${suffix}`;
      return;
    }
    const counter = { n: 0 };
    const tween = gsap.to(counter, {
      n: value,
      duration: 1.6,
      ease: 'power2.out',
      scrollTrigger: { trigger: el, start: 'top 92%', once: true },
      onUpdate: () => { el.textContent = `${Math.round(counter.n)}${suffix}`; },
    });
    return () => { tween.scrollTrigger?.kill(); tween.kill(); };
  }, [value, suffix]);

  return (
    <div className="flex flex-col items-center text-center">
      <span ref={ref} className="text-3xl sm:text-4xl font-extrabold text-accent-500 tabular-nums" style={{ fontFamily: 'var(--font-display)' }}>
        0{suffix}
      </span>
      <span className="mt-1 text-xs font-medium text-gray-600 dark:text-gray-400 max-w-[9rem]">{label}</span>
    </div>
  );
}

export default function Achievements() {
  const { ref, isVisible } = useReveal();
  const { locale } = useI18n();

  const items = locale === 'en' ? ACHIEVEMENTS_EN : ACHIEVEMENTS_ES;
  const sectionLabel = locale === 'en' ? 'Results & Impact' : 'Logros e impacto';
  const title = locale === 'en' ? 'Achievements & Notable Results' : 'Logros y resultados destacados';

  return (
    <section id="logros" className="relative py-16 sm:py-24 scroll-mt-20" aria-labelledby="achievements-heading">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-50/50 dark:via-navy-900/20 to-transparent" aria-hidden="true" />
      <div ref={ref} className={`relative mx-auto max-w-7xl px-6 lg:px-8 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>

        <div className="mb-16">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-accent-500">{sectionLabel}</span>
          <h2 id="achievements-heading" className="mt-3 text-3xl font-bold tracking-tight section-title sm:text-4xl" style={{ fontFamily: 'var(--font-display)' }}>
            {title}
          </h2>
          <div className="mt-3 h-1 w-16 rounded-full bg-gradient-to-r from-accent-500 to-accent-600" aria-hidden="true" />
        </div>

        <div className="mb-14 flex flex-wrap items-start justify-center gap-8 sm:gap-14">
          {ACHIEVEMENT_STATS.map(stat => (
            <StatCounter
              key={stat.label}
              value={stat.value}
              suffix={stat.suffix}
              label={locale === 'en' ? stat.labelEn : stat.label}
            />
          ))}
        </div>

        <ul className="space-y-4" role="list">
          {items.map((item, i) => (
            <li
              key={item.id}
              className="glass rounded-xl p-5 sm:p-6 card-glow flex items-start gap-4"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                transition: `opacity 0.5s ease ${i * 60}ms, transform 0.5s ease ${i * 60}ms`,
              }}>
              {/* Icon */}
              <div
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent-500/10 text-xl"
                aria-hidden="true">
                {item.icon}
              </div>
              {/* Text */}
              <p className="text-sm leading-relaxed text-gray-800 dark:text-gray-200">
                <strong className="font-bold text-accent-600 dark:text-accent-400">{item.highlight}</strong>
                {': '}
                {item.text.replace(item.highlight + ': ', '').replace(item.highlight + ' — ', '').replace(item.highlight, '')}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
