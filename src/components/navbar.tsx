'use client';

import { useState, useEffect } from 'react';
import { NAV_LINKS, PERSONAL } from '@/lib/data';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      // Determine active section
      const sections = NAV_LINKS.map((l) => l.href.replace('#', ''));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.getBoundingClientRect().top <= 120) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu on escape key — WCAG 2.1
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) setIsOpen(false);
    };
    document.addEventListener('keydown', handleEsc);
    return () => document.removeEventListener('keydown', handleEsc);
  }, [isOpen]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  return (
    <header
      role="banner"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'glass shadow-lg shadow-navy-950/50'
          : 'bg-transparent'
      }`}
    >
      <nav
        role="navigation"
        aria-label="Navegación principal"
        className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8"
      >
        {/* Logo / Name */}
        <a
          href="#inicio"
          className="group flex items-center gap-2 text-lg font-bold tracking-tight text-white transition-colors hover:text-amber-400"
          aria-label="Ir al inicio"
        >
          <span
            className="flex h-9 w-9 items-center justify-center rounded-lg bg-amber-500/10 text-amber-400 font-mono text-sm font-bold transition-all group-hover:bg-amber-500/20 group-hover:scale-105"
            aria-hidden="true"
          >
            DC
          </span>
          <span className="hidden sm:inline">{PERSONAL.shortName}</span>
        </a>

        {/* Desktop nav links */}
        <ul className="hidden md:flex items-center gap-1" role="list">
          {NAV_LINKS.map((link) => {
            const sectionId = link.href.replace('#', '');
            const isActive = activeSection === sectionId;
            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 ${
                    isActive
                      ? 'text-amber-400'
                      : 'text-navy-200 hover:text-white hover:bg-white/5'
                  }`}
                  aria-current={isActive ? 'true' : undefined}
                >
                  {link.label}
                  {isActive && (
                    <span
                      className="absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 w-5 bg-amber-400 rounded-full"
                      aria-hidden="true"
                    />
                  )}
                </a>
              </li>
            );
          })}
        </ul>

        {/* CTA Button — Desktop */}
        <a
          href="#contacto"
          className="hidden md:inline-flex items-center gap-2 rounded-lg bg-amber-500 px-5 py-2.5 text-sm font-semibold text-navy-950 transition-all hover:bg-amber-400 hover:shadow-lg hover:shadow-amber-500/20 active:scale-95"
        >
          Contáctame
        </a>

        {/* Mobile hamburger button */}
        <button
          type="button"
          className="relative z-50 flex md:hidden h-10 w-10 items-center justify-center rounded-lg text-white hover:bg-white/10 transition-colors"
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          aria-label={isOpen ? 'Cerrar menú' : 'Abrir menú'}
        >
          <div className="flex flex-col items-center justify-center gap-1.5 w-5">
            <span
              className={`block h-0.5 w-full bg-current rounded-full transition-all duration-300 origin-center ${
                isOpen ? 'rotate-45 translate-y-[4px]' : ''
              }`}
            />
            <span
              className={`block h-0.5 w-full bg-current rounded-full transition-all duration-300 ${
                isOpen ? 'opacity-0 scale-0' : ''
              }`}
            />
            <span
              className={`block h-0.5 w-full bg-current rounded-full transition-all duration-300 origin-center ${
                isOpen ? '-rotate-45 -translate-y-[4px]' : ''
              }`}
            />
          </div>
        </button>
      </nav>

      {/* Mobile menu overlay */}
      <div
        id="mobile-menu"
        className={`fixed inset-0 z-40 md:hidden transition-all duration-500 ${
          isOpen ? 'visible opacity-100' : 'invisible opacity-0'
        }`}
        aria-hidden={!isOpen}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-navy-950/90 backdrop-blur-xl"
          onClick={() => setIsOpen(false)}
          aria-hidden="true"
        />

        {/* Menu content */}
        <nav
          className="relative flex h-full flex-col items-center justify-center gap-2"
          aria-label="Menú móvil"
        >
          {NAV_LINKS.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-2xl font-medium text-navy-100 transition-all duration-500 hover:text-amber-400 ${
                isOpen
                  ? 'translate-y-0 opacity-100'
                  : 'translate-y-4 opacity-0'
              }`}
              style={{ transitionDelay: isOpen ? `${i * 80}ms` : '0ms' }}
              onClick={() => setIsOpen(false)}
              tabIndex={isOpen ? 0 : -1}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contacto"
            className={`mt-6 inline-flex items-center gap-2 rounded-xl bg-amber-500 px-8 py-3 text-base font-bold text-navy-950 transition-all duration-500 hover:bg-amber-400 ${
              isOpen
                ? 'translate-y-0 opacity-100'
                : 'translate-y-4 opacity-0'
            }`}
            style={{ transitionDelay: isOpen ? `${NAV_LINKS.length * 80}ms` : '0ms' }}
            onClick={() => setIsOpen(false)}
            tabIndex={isOpen ? 0 : -1}
          >
            Contáctame
          </a>
        </nav>
      </div>
    </header>
  );
}
