import type { Metadata, Viewport } from 'next';
import { ThemeProvider } from '@/lib/theme-provider';
import './globals.css';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#0a0e1a' },
  ],
};

export const metadata: Metadata = {
  title: 'Daniel Fernando Castillo Mera — Desarrollador Full-Stack | Portfolio',
  description:
    'Portafolio profesional de Daniel Fernando Castillo Mera. Desarrollador Full-Stack Junior especializado en Next.js, TypeScript, Supabase y sistemas empresariales. Universidad de Guayaquil — Ingeniería en Software.',
  keywords: [
    'Daniel Fernando Castillo Mera', 'Desarrollador Full-Stack', 'Next.js', 'TypeScript',
    'Supabase', 'Ecuador', 'Portafolio', 'Ingeniería en Software', 'Universidad de Guayaquil',
    'Dashboard Enterprise',
  ],
  authors: [{ name: 'Daniel Fernando Castillo Mera' }],
  creator: 'Daniel Fernando Castillo Mera',
  publisher: 'Daniel Fernando Castillo Mera',
  robots: { index: true, follow: true },
  openGraph: {
    type: 'website',
    locale: 'es_EC',
    title: 'Daniel Fernando Castillo Mera — Desarrollador Full-Stack',
    description: 'Portafolio profesional. Desarrollo de sistemas empresariales con Next.js, TypeScript, Supabase y Tailwind CSS.',
    siteName: 'Daniel Fernando Castillo Mera — Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Daniel Fernando Castillo Mera — Desarrollador Full-Stack',
    description: 'Portafolio profesional. Desarrollo de sistemas empresariales con Next.js, TypeScript, Supabase y Tailwind CSS.',
  },
  other: {
    'X-UA-Compatible': 'IE=edge',
    copyright: '© 2024-2026 Daniel Fernando Castillo Mera. Todos los derechos reservados.',
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" dir="ltr" suppressHydrationWarning>
      <head>
        {/* Prevent FOUC: apply saved theme before paint */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('portfolio-theme');var d=document.documentElement;if(t==='dark'||(t!=='light'&&window.matchMedia('(prefers-color-scheme:dark)').matches)){d.classList.add('dark');d.style.colorScheme='dark'}else{d.classList.remove('dark');d.style.colorScheme='light'}}catch(e){}})()`,
          }}
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&family=JetBrains+Mono:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',
              name: 'Daniel Fernando Castillo Mera',
              jobTitle: 'Desarrollador Full-Stack Junior',
              description: 'Estudiante de Ingeniería en Software en la Universidad de Guayaquil.',
              url: 'https://danielcastillo.dev',
              nationality: { '@type': 'Country', name: 'Ecuador' },
              sameAs: [
                'https://github.com/danielcastillomera',
                'https://www.linkedin.com/in/daniel-fernando-castillo-mera-461b8420a',
                'https://www.instagram.com/danielcastillomera',
                'https://www.facebook.com/Daniel288215',
                'https://wa.me/593981076185',
              ],
              alumniOf: { '@type': 'CollegeOrUniversity', name: 'Universidad de Guayaquil' },
              knowsAbout: ['Next.js', 'TypeScript', 'React', 'Supabase', 'Tailwind CSS', 'Prisma ORM', 'Node.js', 'PostgreSQL'],
            }),
          }}
        />
      </head>
      <body className="min-h-screen antialiased">
        <a href="#main-content" className="skip-link">
          Saltar al contenido principal
        </a>
        <ThemeProvider>{children}</ThemeProvider>
        {/* Image protection: prevent right-click, drag, and context menu on protected images */}
        <script
          dangerouslySetInnerHTML={{
            __html: `document.addEventListener('contextmenu',function(e){if(e.target.closest('.protected-image-wrapper')){e.preventDefault()}});document.addEventListener('dragstart',function(e){if(e.target.closest('.protected-image-wrapper')||e.target.classList.contains('protected-image')){e.preventDefault()}});`,
          }}
        />
      </body>
    </html>
  );
}
