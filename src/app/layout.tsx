import type { Metadata, Viewport } from 'next';
import { ThemeProvider } from '@/lib/theme-provider';
import { I18nProvider } from '@/lib/i18n-provider';
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
  title: 'Daniel Fernando Castillo Mera — Junior Full Stack Engineer / Developer | Community Manager',
  description:
    'Portafolio profesional de Daniel Fernando Castillo Mera. Junior Full Stack Engineer / Developer y Community Manager especializado en Next.js, TypeScript, Supabase, Meta Ads, TikTok Ads y sistemas empresariales. Universidad de Guayaquil — Ingeniería en Software.',
  keywords: [
    'Daniel Fernando Castillo Mera', 'Full Stack Developer', 'Full Stack Engineer', 'Community Manager',
    'Next.js', 'TypeScript', 'Supabase', 'Ecuador', 'Guayaquil', 'Portafolio',
    'Ingeniería en Software', 'Universidad de Guayaquil', 'Dashboard Enterprise',
    'Meta Ads', 'Facebook Ads', 'Instagram Ads', 'TikTok Ads',
    'Facturación electrónica SRI', 'Figma', 'UI/UX',
  ],
  authors: [{ name: 'Daniel Fernando Castillo Mera' }],
  creator: 'Daniel Fernando Castillo Mera',
  publisher: 'Daniel Fernando Castillo Mera',
  robots: { index: true, follow: true },
  openGraph: {
    type: 'website',
    locale: 'es_EC',
    alternateLocale: 'en_US',
    title: 'Daniel Fernando Castillo Mera — Junior Full Stack Engineer | Community Manager',
    description: 'Portafolio profesional. Soluciones digitales con Next.js, TypeScript, Supabase, Meta Ads y Tailwind CSS.',
    siteName: 'Daniel Fernando Castillo Mera — Portfolio',
    url: 'https://danielcastillo-portfolio.vercel.app',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Daniel Fernando Castillo Mera — Junior Full Stack Engineer',
    description: 'Portafolio profesional. Soluciones digitales con Next.js, TypeScript, Supabase y Tailwind CSS.',
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
        {/* Prevent FOUC */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('portfolio-theme');var d=document.documentElement;if(t==='dark'||(t!=='light'&&window.matchMedia('(prefers-color-scheme:dark)').matches)){d.classList.add('dark');d.style.colorScheme='dark'}else{d.classList.remove('dark');d.style.colorScheme='light'}}catch(e){}})()`,
          }}
        />
        {/* Preload fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&family=JetBrains+Mono:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
        {/* JSON-LD Structured Data — Person schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',
              name: 'Daniel Fernando Castillo Mera',
              jobTitle: 'Junior Full Stack Engineer / Developer | Community Manager',
              description: 'Estudiante de Ingeniería en Software en la Universidad de Guayaquil. Especialista en Next.js, TypeScript, Supabase y Community Manager con Meta Ads, TikTok Ads.',
              url: 'https://danielcastillo-portfolio.vercel.app',
              email: 'danielfcastillom@gmail.com',
              birthDate: '2005-02-23',
              nationality: { '@type': 'Country', name: 'Ecuador' },
              address: { '@type': 'PostalAddress', addressLocality: 'Guayaquil', addressCountry: 'EC' },
              sameAs: [
                'https://github.com/danielcastillomera',
                'https://www.linkedin.com/in/daniel-fernando-castillo-mera-461b8420a',
                'https://www.instagram.com/danielcastillomera',
                'https://www.facebook.com/Daniel288215',
                'https://wa.me/593981076185',
              ],
              alumniOf: {
                '@type': 'CollegeOrUniversity',
                name: 'Universidad de Guayaquil',
                sameAs: 'https://www.ug.edu.ec',
              },
              knowsAbout: [
                'Next.js', 'TypeScript', 'React', 'Supabase', 'Tailwind CSS',
                'Prisma ORM', 'Node.js', 'PostgreSQL', 'Community Management',
                'Meta Ads', 'Facebook Ads', 'Instagram Ads', 'TikTok Ads',
                'UI/UX Design', 'Figma', 'Facturación electrónica SRI Ecuador',
              ],
            }),
          }}
        />
        {/* Web App Manifest for PWA */}
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className="min-h-screen antialiased">
        <a href="#main-content" className="skip-link">
          Saltar al contenido principal
        </a>
        <I18nProvider>
          <ThemeProvider>
            {children}
          </ThemeProvider>
        </I18nProvider>
        {/* Image protection */}
        <script
          dangerouslySetInnerHTML={{
            __html: `document.addEventListener('contextmenu',function(e){if(e.target.closest('.protected-image-wrapper')){e.preventDefault()}});document.addEventListener('dragstart',function(e){if(e.target.closest('.protected-image-wrapper')||e.target.classList.contains('protected-image')){e.preventDefault()}});`,
          }}
        />
      </body>
    </html>
  );
}
