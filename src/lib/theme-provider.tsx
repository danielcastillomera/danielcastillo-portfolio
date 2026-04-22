'use client';

import { createContext, useCallback, useContext, useEffect, useState } from 'react';

type Theme = 'light' | 'dark' | 'system';
type ResolvedTheme = 'light' | 'dark';

interface ThemeContextType { theme: Theme; resolvedTheme: ResolvedTheme; setTheme: (t: Theme) => void; }

const ThemeContext = createContext<ThemeContextType>({ theme: 'system', resolvedTheme: 'dark', setTheme: () => {} });

export function useTheme() { return useContext(ThemeContext); }

function getSystemTheme(): ResolvedTheme {
  if (typeof window === 'undefined') return 'dark';
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}
function resolveTheme(t: Theme): ResolvedTheme { return t === 'system' ? getSystemTheme() : t; }

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState<Theme>('system');
  const [resolvedTheme, setResolvedTheme] = useState<ResolvedTheme>('dark');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem('portfolio-theme') as Theme | null;
    const init = stored && ['light','dark','system'].includes(stored) ? stored : 'system';
    setThemeState(init); setResolvedTheme(resolveTheme(init)); setMounted(true);
  }, []);

  useEffect(() => {
    const mq = window.matchMedia('(prefers-color-scheme: dark)');
    const h = () => { if (theme === 'system') setResolvedTheme(getSystemTheme()); };
    mq.addEventListener('change', h); return () => mq.removeEventListener('change', h);
  }, [theme]);

  useEffect(() => {
    if (!mounted) return;
    const root = document.documentElement;
    if (resolvedTheme === 'dark') root.classList.add('dark'); else root.classList.remove('dark');
    root.style.colorScheme = resolvedTheme;
  }, [resolvedTheme, mounted]);

  const setTheme = useCallback((newTheme: Theme) => {
    const noMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const apply = () => { setThemeState(newTheme); setResolvedTheme(resolveTheme(newTheme)); localStorage.setItem('portfolio-theme', newTheme); };
    if (noMotion || !document.startViewTransition) { apply(); return; }
    document.startViewTransition(() => { apply(); });
  }, []);

  if (!mounted) return <div style={{ visibility: 'hidden' }}>{children}</div>;
  return <ThemeContext.Provider value={{ theme, resolvedTheme, setTheme }}>{children}</ThemeContext.Provider>;
}
