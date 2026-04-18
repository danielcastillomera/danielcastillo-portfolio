'use client';

import { useState, useEffect } from 'react';
import { NAV_LINKS, PERSONAL } from '@/lib/data';
import ThemeToggle from './theme-toggle';
import ProtectedImage from './protected-image';
import LanguageToggle from './language-toggle';
import { useT } from '@/lib/i18n-provider';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const t = useT();

  const navLabels: Record<string, string> = {
    inicio: t.nav.inicio, sobreMi: t.nav.sobreMi, servicios: t.nav.servicios,
    proyectos: t.nav.proyectos, habilidades: t.nav.habilidades,
    certificaciones: t.nav.certificaciones, contacto: t.nav.contacto,
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
      const sections = NAV_LINKS.map(l => l.href.replace('#', ''));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.getBoundingClientRect().top <= 120) { setActiveSection(sections[i]); break; }
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const h = (e: KeyboardEvent) => { if (e.key === 'Escape' && isOpen) setIsOpen(false); };
    document.addEventListener('keydown', h); return () => document.removeEventListener('keydown', h);
  }, [isOpen]);

  useEffect(() => { document.body.style.overflow = isOpen ? 'hidden' : ''; return () => { document.body.style.overflow = ''; }; }, [isOpen]);

  return (
    <header role="banner" className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'glass shadow-lg shadow-black/5 dark:shadow-navy-950/50' : 'bg-transparent'}`}>
      <nav role="navigation" aria-label="Navegación principal" className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 lg:px-8">
        {/* Logo */}
        <a href="#inicio" className="group flex items-center gap-2.5 transition-opacity hover:opacity-80 shrink-0" aria-label="Ir al inicio">
          <div className="h-8 w-8 rounded-full overflow-hidden ring-2 ring-accent-500/30 shrink-0">
            <ProtectedImage src={PERSONAL.profileImage} alt={PERSONAL.name} width={32} height={32} className="h-full w-full object-cover" priority />
          </div>
          <span className="hidden lg:inline text-sm font-bold text-gray-900 dark:text-white truncate max-w-[200px]">{PERSONAL.name}</span>
        </a>

        {/* Desktop nav */}
        <ul className="hidden lg:flex items-center gap-0.5" role="list">
          {NAV_LINKS.map(link => {
            const sectionId = link.href.replace('#', '');
            const isActive = activeSection === sectionId;
            const label = navLabels[link.labelKey] ?? link.labelKey;
            return (
              <li key={link.href}>
                <a href={link.href} className={`relative px-3 py-2 text-sm font-medium rounded-lg transition-all duration-300 ${isActive ? 'text-accent-500' : 'text-gray-600 dark:text-navy-200 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-white/5'}`} aria-current={isActive ? 'true' : undefined}>
                  {label}
                  {isActive && <span className="absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 w-4 bg-accent-500 rounded-full" aria-hidden="true" />}
                </a>
              </li>
            );
          })}
        </ul>

        {/* Right: Language + Theme + CTA + Hamburger */}
        <div className="flex items-center gap-1.5">
          {/* Language toggle — visible on all screen sizes */}
          <LanguageToggle />
          <ThemeToggle />
          <a href="#contacto" className="hidden md:inline-flex items-center gap-2 rounded-lg bg-accent-500 px-4 py-2 text-sm font-semibold text-black transition-all hover:bg-accent-400 hover:shadow-lg hover:shadow-accent-500/20 active:scale-95">{t.nav.contactame}</a>
          {/* Hamburger */}
          <button type="button" className="relative z-50 flex lg:hidden h-10 w-10 items-center justify-center rounded-lg text-gray-700 dark:text-white hover:bg-gray-100 dark:hover:bg-white/10 transition-colors"
            onClick={() => setIsOpen(!isOpen)} aria-expanded={isOpen} aria-controls="mobile-menu" aria-label={isOpen ? 'Cerrar menú' : 'Abrir menú'}>
            <div className="flex flex-col items-center justify-center gap-[6px] w-5">
              <span className={`block h-0.5 w-full bg-current rounded-full transition-all duration-300 origin-center ${isOpen ? 'rotate-45 translate-y-[8px]' : ''}`} />
              <span className={`block h-0.5 w-full bg-current rounded-full transition-all duration-300 ${isOpen ? 'opacity-0 scale-0' : ''}`} />
              <span className={`block h-0.5 w-full bg-current rounded-full transition-all duration-300 origin-center ${isOpen ? '-rotate-45 -translate-y-[8px]' : ''}`} />
            </div>
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div id="mobile-menu" className={`fixed inset-0 z-40 lg:hidden transition-all duration-500 ${isOpen ? 'visible opacity-100' : 'invisible opacity-0'}`} aria-hidden={!isOpen}>
        <div className="absolute inset-0 bg-white/95 dark:bg-navy-950/95 backdrop-blur-xl" onClick={() => setIsOpen(false)} aria-hidden="true" />
        <nav className="relative flex h-full flex-col items-center justify-center gap-3" aria-label="Menú móvil">
          {NAV_LINKS.map((link, i) => {
            const label = navLabels[link.labelKey] ?? link.labelKey;
            return (
              <a key={link.href} href={link.href}
                className={`text-2xl font-medium text-gray-800 dark:text-navy-100 transition-all duration-500 hover:text-accent-500 ${isOpen ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}
                style={{ transitionDelay: isOpen ? `${i * 60}ms` : '0ms' }}
                onClick={() => setIsOpen(false)} tabIndex={isOpen ? 0 : -1}>{label}</a>
            );
          })}
          <a href="#contacto"
            className={`mt-4 inline-flex items-center gap-2 rounded-xl bg-accent-500 px-8 py-3 text-base font-bold text-black transition-all duration-500 hover:bg-accent-400 ${isOpen ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}
            style={{ transitionDelay: isOpen ? `${NAV_LINKS.length * 60}ms` : '0ms' }}
            onClick={() => setIsOpen(false)} tabIndex={isOpen ? 0 : -1}>{t.nav.contactame}</a>
        </nav>
      </div>
    </header>
  );
}
