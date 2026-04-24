'use client';

import { useReveal } from '@/lib/use-reveal';
import { useI18n } from '@/lib/i18n-provider';

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
    highlight: 'motor XML de comprobantes electrónicos',
    text: 'Implementé de forma autónoma el motor de generación de comprobantes electrónicos en formato XML con cumplimiento regulatorio completo — habilidad técnica avanzada para un perfil junior.',
  },
  {
    id: 'docs',
    icon: '📄',
    highlight: 'documentación técnica profesional completa',
    text: 'Creé y entregué documentación técnica profesional completa (manual de usuario, manual técnico y contrato SaaS) en Overleaf/LaTeX — estándar propio de perfiles senior.',
  },
  {
    id: 'cne',
    icon: '🎨',
    highlight: 'rediseño completo del sitio web del CNE',
    text: 'Diseñé y ejecuté el rediseño completo del sitio web del CNE en Figma con evaluación heurística de Nielsen y principios de Material Design en equipo multidisciplinario.',
  },
  {
    id: 'brand',
    icon: '📣',
    highlight: 'identidad digital de Soluciones Técnicas Industriales D.C.',
    text: 'Construí desde cero la identidad digital y presencia en redes sociales de Soluciones Técnicas Industriales D.C., incluyendo diseño de logotipo, gestión de contenido y campañas de publicidad pagada activas en Facebook, Instagram y TikTok.',
  },
  {
    id: 'crm',
    icon: '🤝',
    highlight: 'gestión de relaciones con clientes (CRM)',
    text: 'Gestioné relaciones con clientes (CRM) y ejecuté actividades de ventas y atención al cliente en entornos de trabajo bajo presión con cumplimiento de objetivos comerciales.',
  },
  {
    id: 'soprisa',
    icon: '🏢',
    highlight: 'pasantías simultáneas en dos áreas de Soprisa S.A.',
    text: 'Realicé pasantías simultáneas en dos áreas de Soprisa S.A. (Tesorería y Sistemas), demostrando capacidad de gestión multitarea en entorno corporativo real.',
  },
  {
    id: 'invoice',
    icon: '💼',
    highlight: 'Invoice Manager System',
    text: 'Desarrollé Invoice Manager System, aplicación web para gestión profesional de facturas con stack moderno (Next.js, TypeScript, Supabase) — actualmente en desarrollo activo.',
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
    highlight: 'complete professional technical documentation',
    text: 'I created and delivered complete professional technical documentation (user manual, technical manual and SaaS contract) in Overleaf/LaTeX — a standard typical of senior profiles.',
  },
  {
    id: 'cne',
    icon: '🎨',
    highlight: 'full CNE website redesign',
    text: 'I designed and executed the full CNE website redesign in Figma with Nielsen heuristic evaluation and Material Design principles in a multidisciplinary team.',
  },
  {
    id: 'brand',
    icon: '📣',
    highlight: 'digital identity of Soluciones Técnicas Industriales D.C.',
    text: 'I built from scratch the digital identity and social media presence of Soluciones Técnicas Industriales D.C., including logo design, content management and active paid advertising campaigns on Facebook, Instagram and TikTok.',
  },
  {
    id: 'crm',
    icon: '🤝',
    highlight: 'customer relationship management (CRM)',
    text: 'I managed customer relationships (CRM) and executed sales and customer service activities in high-pressure work environments with commercial goal achievement.',
  },
  {
    id: 'soprisa',
    icon: '🏢',
    highlight: 'simultaneous internships in two Soprisa S.A. areas',
    text: 'I completed simultaneous internships in two Soprisa S.A. areas (Treasury and Systems), demonstrating multitasking management in a real corporate environment.',
  },
  {
    id: 'invoice',
    icon: '💼',
    highlight: 'Invoice Manager System',
    text: 'I developed Invoice Manager System, a web application for professional invoice management with a modern stack (Next.js, TypeScript, Supabase) — currently in active development.',
  },
  {
    id: 'mvc',
    icon: '🎓',
    highlight: 'PROYECTO-UNIFICADO-AVANCE in C# with MVC pattern',
    text: 'I developed PROYECTO-UNIFICADO-AVANCE in C# applying the MVC design pattern in a collaborative university project — currently in active development.',
  },
];

export default function Achievements() {
  const { ref, isVisible } = useReveal();
  const { locale } = useI18n();

  const items = locale === 'en' ? ACHIEVEMENTS_EN : ACHIEVEMENTS_ES;
  const sectionLabel = locale === 'en' ? 'Results & Impact' : 'Logros e impacto';
  const title = locale === 'en' ? 'Achievements & Notable Results' : 'Logros y resultados destacados';

  return (
    <section id="logros" className="relative py-24 sm:py-32" aria-labelledby="achievements-heading">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-50/50 dark:via-navy-900/20 to-transparent" aria-hidden="true" />
      <div ref={ref} className={`relative mx-auto max-w-7xl px-6 lg:px-8 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>

        <div className="mb-16">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-accent-500">{sectionLabel}</span>
          <h2 id="achievements-heading" className="mt-3 text-3xl font-bold tracking-tight section-title sm:text-4xl" style={{ fontFamily: 'var(--font-display)' }}>
            {title}
          </h2>
          <div className="mt-3 h-1 w-16 rounded-full bg-gradient-to-r from-accent-500 to-accent-600" aria-hidden="true" />
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
                {' — '}
                {item.text.replace(item.highlight + ' — ', '').replace(item.highlight, '')}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
