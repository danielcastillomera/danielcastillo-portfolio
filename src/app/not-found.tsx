'use client';
import Link from 'next/link';
import { useT } from '@/lib/i18n-provider';

export default function NotFound() {
  const t = useT();
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
      <h1 className="text-8xl font-bold text-gradient" style={{ fontFamily: 'var(--font-display)' }}>404</h1>
      <p className="mt-4 text-lg" style={{ color: 'var(--color-text-muted)' }}>{t.misc.notFound}</p>
      <Link href="/" className="mt-8 inline-flex items-center gap-2 rounded-xl bg-accent-500 px-6 py-3 text-base font-bold text-black transition-all hover:bg-accent-400 active:scale-95">
        {t.misc.backHome}
      </Link>
    </main>
  );
}
