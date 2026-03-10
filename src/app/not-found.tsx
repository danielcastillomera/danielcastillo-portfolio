import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
      <h1 className="text-8xl font-bold text-gradient" style={{ fontFamily: 'var(--font-display)' }}>404</h1>
      <p className="mt-4 text-lg text-gray-600 dark:text-navy-300">La página que buscas no existe.</p>
      <Link href="/" className="mt-8 inline-flex items-center gap-2 rounded-xl bg-accent-500 px-6 py-3 text-base font-bold text-black transition-all hover:bg-accent-400 active:scale-95">
        Volver al inicio
      </Link>
    </main>
  );
}
