'use client';

import { useEffect, useState, useRef } from 'react';
import { NAV_LINKS } from '@/lib/data';
import { useT } from '@/lib/i18n-provider';
import ThemeToggle from './theme-toggle';
import LanguageToggle from './language-toggle';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDesktop, setOpenDesktop] = useState<string | null>(null);
  const [openMobile, setOpenMobile] = useState<string | null>(null);
  const closeTimer = useRef<number | null>(null);
  const t = useT();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const label = (key: string): string => (t.nav as unknown as Record<string, string>)[key] ?? key;

  const openDesktopMenu = (href: string) => {
    if (closeTimer.current) window.clearTimeout(closeTimer.current);
    setOpenDesktop(href);
  };
  const scheduleClose = () => {
    closeTimer.current = window.setTimeout(() => setOpenDesktop(null), 150);
  };

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-[100] transition-all duration-300 ${
          scrolled ? 'bg-white/90 dark:bg-navy-950/90 backdrop-blur-lg shadow-sm' : 'bg-transparent'
        }`}
      >
        <nav className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8" aria-label="Navegación principal">
          <a
            href="#inicio"
            className="shrink-0 text-sm font-extrabold leading-tight tracking-tight text-gray-900 dark:text-white"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            <span className="block">Daniel Fernando</span>
            <span className="block">Castillo Mera</span>
          </a>

          {/* Desktop nav */}
          <ul className="hidden lg:flex items-center gap-1" role="menubar">
            {NAV_LINKS.map(link => {
              const isCta = link.labelKey === 'contactame';
              return (
                <li
                  key={link.href}
                  className="relative"
                  role="none"
                  onMouseEnter={() => link.subs && openDesktopMenu(link.href)}
                  onMouseLeave={scheduleClose}
                >
                  <a
                    href={link.href}
                    role="menuitem"
                    aria-haspopup={link.subs ? 'true' : undefined}
                    aria-expanded={link.subs ? openDesktop === link.href : undefined}
                    className={
                      isCta
                        ? 'inline-flex items-center gap-1 rounded-full bg-accent-500 px-4 py-2 text-xs font-bold text-black transition-colors hover:bg-accent-400'
                        : 'inline-flex items-center gap-1 rounded-lg px-3 py-2 text-xs font-semibold text-gray-700 dark:text-navy-200 transition-colors hover:text-amber-500 dark:hover:text-amber-400'
                    }
                  >
                    {label(link.labelKey)}
                    {link.subs && (
                      <svg className={`w-3 h-3 transition-transform duration-200 ${openDesktop === link.href ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                      </svg>
                    )}
                  </a>

                  {link.subs && (
                    <div
                      className={`absolute left-1/2 top-full -translate-x-1/2 mt-1 w-64 rounded-xl bg-white dark:bg-navy-900 shadow-xl ring-1 ring-gray-200 dark:ring-navy-700 overflow-hidden transition-all duration-200 origin-top ${
                        openDesktop === link.href ? 'opacity-100 scale-100 pointer-events-auto' : 'opacity-0 scale-95 pointer-events-none'
                      }`}
                      role="menu"
                    >
                      <div className="py-1.5">
                        {link.subs.map(sub => (
                          <a
                            key={sub.href}
                            href={sub.href}
                            role="menuitem"
                            className="block px-4 py-2 text-xs font-medium text-gray-600 dark:text-gray-300 hover:bg-amber-50 dark:hover:bg-accent-500/10 hover:text-amber-600 dark:hover:text-amber-400 transition-colors"
                            onClick={() => setOpenDesktop(null)}
                          >
                            {label(sub.labelKey)}
                          </a>
                        ))}
                      </div>
                    </div>
                  )}
                </li>
              );
            })}
          </ul>

          <div className="flex items-center gap-1.5">
            <LanguageToggle />
            <ThemeToggle />
            <button
              type="button"
              onClick={() => setMobileOpen(true)}
              className="flex h-9 w-9 items-center justify-center rounded-lg text-gray-700 dark:text-navy-200 hover:bg-gray-100 dark:hover:bg-white/5 lg:hidden"
              aria-label="Abrir menú"
              aria-expanded={mobileOpen}
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile accordion menu */}
      <div
        className={`fixed inset-0 z-[110] lg:hidden transition-opacity duration-300 ${
          mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        role="dialog"
        aria-modal="true"
        aria-label="Menú de navegación"
      >
        <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setMobileOpen(false)} aria-hidden="true" />
        <div
          className={`absolute right-0 top-0 h-full w-full max-w-sm bg-white dark:bg-navy-950 shadow-2xl transition-transform duration-300 overflow-y-auto ${
            mobileOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100 dark:border-navy-800">
            <span className="text-sm font-bold text-gray-900 dark:text-white">Menú</span>
            <button
              type="button"
              onClick={() => setMobileOpen(false)}
              className="flex h-9 w-9 items-center justify-center rounded-lg text-gray-500 hover:bg-gray-100 dark:hover:bg-white/5"
              aria-label="Cerrar menú"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <nav className="px-3 py-3" aria-label="Menú móvil">
            {NAV_LINKS.map(link => {
              const isCta = link.labelKey === 'contactame';
              const isOpen = openMobile === link.href;
              return (
                <div key={link.href} className="border-b border-gray-100 dark:border-navy-800 last:border-0">
                  <div className="flex items-center">
                    <a
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      className={
                        isCta
                          ? 'flex-1 my-2 rounded-full bg-accent-500 px-4 py-2.5 text-center text-sm font-bold text-black'
                          : 'flex-1 py-3.5 text-sm font-semibold text-gray-800 dark:text-gray-100'
                      }
                    >
                      {label(link.labelKey)}
                    </a>
                    {link.subs && !isCta && (
                      <button
                        type="button"
                        onClick={() => setOpenMobile(isOpen ? null : link.href)}
                        className="flex h-11 w-11 items-center justify-center text-gray-400"
                        aria-label={isOpen ? 'Contraer' : 'Expandir'}
                        aria-expanded={isOpen}
                      >
                        <svg className={`w-4 h-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                        </svg>
                      </button>
                    )}
                  </div>
                  {link.subs && (
                    <div className={`grid transition-all duration-300 ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
                      <div className="overflow-hidden">
                        <div className="flex flex-col gap-0.5 pb-3 pl-4">
                          {link.subs.map(sub => (
                            <a
                              key={sub.href}
                              href={sub.href}
                              onClick={() => setMobileOpen(false)}
                              className="rounded-lg px-3 py-2 text-xs font-medium text-gray-600 dark:text-gray-400 hover:bg-amber-50 dark:hover:bg-accent-500/10 hover:text-amber-600 dark:hover:text-amber-400"
                            >
                              {label(sub.labelKey)}
                            </a>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </nav>
        </div>
      </div>
    </>
  );
}
