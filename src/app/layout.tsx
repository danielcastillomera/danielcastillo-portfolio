import type { Metadata, Viewport } from 'next';
import './globals.css';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#0a0e1a',
  colorScheme: 'dark',
};

export const metadata: Metadata = {
  title: 'Daniel Castillo — Desarrollador Full-Stack | Portfolio',
  description:
    'Portafolio profesional de Daniel Fernando Castillo Mera. Desarrollador Full-Stack Junior especializado en Next.js, TypeScript, Supabase y sistemas empresariales. Universidad de Guayaquil — Ingeniería en Software.',
  keywords: [
    'Daniel Castillo',
    'Desarrollador Full-Stack',
    'Next.js',
    'TypeScript',
    'Supabase',
    'Ecuador',
    'Portafolio',
    'Ingeniería en Software',
    'Universidad de Guayaquil',
    'Dashboard Enterprise',
  ],
  authors: [{ name: 'Daniel Fernando Castillo Mera' }],
  creator: 'Daniel Fernando Castillo Mera',
  publisher: 'Daniel Fernando Castillo Mera',
  robots: { index: true, follow: true },
  openGraph: {
    type: 'website',
    locale: 'es_EC',
    title: 'Daniel Castillo — Desarrollador Full-Stack',
    description:
      'Portafolio profesional. Desarrollo de sistemas empresariales con Next.js, TypeScript, Supabase y Tailwind CSS.',
    siteName: 'Daniel Castillo Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Daniel Castillo — Desarrollador Full-Stack',
    description:
      'Portafolio profesional. Desarrollo de sistemas empresariales con Next.js, TypeScript, Supabase y Tailwind CSS.',
  },
  other: {
    'X-UA-Compatible': 'IE=edge',
    copyright: '© 2024-2026 Daniel Fernando Castillo Mera. Todos los derechos reservados.',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" dir="ltr">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&family=JetBrains+Mono:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
        {/* Structured Data — JSON-LD for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',
              name: 'Daniel Fernando Castillo Mera',
              jobTitle: 'Desarrollador Full-Stack Junior',
              description:
                'Estudiante de Ingeniería en Software en la Universidad de Guayaquil. Desarrollador Full-Stack especializado en Next.js, TypeScript, Supabase y sistemas empresariales.',
              url: 'https://danielcastillo.dev',
              sameAs: [
                'https://github.com/danielcastillomera',
                'https://wa.me/593981076185',
              ],
              alumniOf: {
                '@type': 'CollegeOrUniversity',
                name: 'Universidad de Guayaquil',
              },
              knowsAbout: [
                'Next.js',
                'TypeScript',
                'React',
                'Supabase',
                'Tailwind CSS',
                'Prisma ORM',
                'Node.js',
                'PostgreSQL',
              ],
            }),
          }}
        />
      </head>
      <body className="min-h-screen antialiased">
        {/* Skip to main content — WCAG 2.1 Level A requirement */}
        <a
          href="#main-content"
          className="skip-link"
        >
          Saltar al contenido principal
        </a>
        {children}
      </body>
    </html>
  );
}
