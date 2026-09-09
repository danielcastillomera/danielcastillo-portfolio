'use client';

import { usePreload } from '@/lib/preload-context';

export default function Preloader() {
  const { isReady } = usePreload();

  return (
    <div
      className={`fixed inset-0 z-[999] flex items-center justify-center bg-white dark:bg-navy-950 transition-opacity duration-500 ${
        isReady ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
      aria-hidden={isReady}
      role="status"
      aria-label="Cargando"
    >
      <div className="flex flex-col items-center gap-4">
        <div className="relative h-12 w-12">
          <div className="absolute inset-0 rounded-full border-2 border-accent-500/20" />
          <div className="absolute inset-0 rounded-full border-2 border-transparent border-t-accent-500 animate-spin" />
        </div>
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-400 dark:text-navy-500">
          DFCM
        </span>
      </div>
    </div>
  );
}
