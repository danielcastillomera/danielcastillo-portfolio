import type { Metadata, Viewport } from 'next';
import { ThemeProvider } from '@/lib/theme-provider';
import { I18nProvider } from '@/lib/i18n-provider';
import { PreloadProvider } from '@/lib/preload-context';
import { SmoothScrollProvider } from '@/lib/smooth-scroll';
import Preloader from '@/components/preloader';
import './globals.css';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)',  color: '#0a0e1a' },
  ],
};

const BASE_URL = 'https://danielcastillo-portfolio.vercel.app';
const TITLE = 'Daniel Fernando Castillo Mera | Full Stack Software Engineer | AI-Assisted Developer';
const DESCRIPTION = 'Full Stack Software Engineer | AI-Assisted Developer. Portafolio profesional de Daniel Fernando Castillo Mera — .NET, TypeScript, Angular, Node.js, UI/UX Design. Guayaquil, Ecuador. Disponible para contratación inmediata.';

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: TITLE,
  description: DESCRIPTION,
  keywords: ['Daniel Fernando Castillo Mera', 'Full Stack Software Engineer', 'AI-Assisted Developer', '.NET', 'C#', 'TypeScript', 'Angular', 'NestJS', 'Next.js', 'UI/UX Design', 'Ecuador', 'Guayaquil', 'Dashboard Enterprise'],
  authors: [{ name: 'Daniel Fernando Castillo Mera', url: BASE_URL }],
  creator: 'Daniel Fernando Castillo Mera',
  publisher: 'Daniel Fernando Castillo Mera',
  robots: { index: true, follow: true },
  icons: {
    icon: [
      { url: '/favicon-16.png',  sizes: '16x16',  type: 'image/png' },
      { url: '/favicon-32.png',  sizes: '32x32',  type: 'image/png' },
      { url: '/favicon-48.png',  sizes: '48x48',  type: 'image/png' },
      { url: '/favicon.ico',     sizes: 'any' },
    ],
    apple:   [{ url: '/favicon-180.png', sizes: '180x180', type: 'image/png' }],
    other:   [
      { url: '/favicon-192.png', sizes: '192x192', type: 'image/png', rel: 'icon' },
      { url: '/favicon-512.png', sizes: '512x512', type: 'image/png', rel: 'icon' },
    ],
    shortcut: '/favicon-32.png',
  },
  openGraph: {
    type: 'website',
    locale: 'es_EC',
    alternateLocale: 'en_US',
    title: TITLE,
    description: DESCRIPTION,
    siteName: 'Daniel Castillo — Portfolio',
    url: BASE_URL,
    images: [{
      url: '/og-image.png',
      width: 1200,
      height: 630,
      alt: TITLE,
      type: 'image/png',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: TITLE,
    description: DESCRIPTION,
    images: ['/og-image.png'],
  },
  other: {
    'X-UA-Compatible': 'IE=edge',
    copyright: '© 2023-2026 Daniel Fernando Castillo Mera.',
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" dir="ltr" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: `(function(){try{var t=localStorage.getItem('portfolio-theme');var d=document.documentElement;if(t==='dark'||(t!=='light'&&window.matchMedia('(prefers-color-scheme:dark)').matches)){d.classList.add('dark');d.style.colorScheme='dark'}else{d.classList.remove('dark');d.style.colorScheme='light'}}catch(e){}})()` }} />

        <meta property="og:image" content={`${BASE_URL}/og-image.png`} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:alt" content={TITLE} />
        <meta name="twitter:image" content={`${BASE_URL}/og-image.png`} />
        <meta name="twitter:image:width" content="1200" />
        <meta name="twitter:image:height" content="630" />
        <link rel="preload" as="image" href="/og-image.png" />
        <meta property="fb:app_id" content="your_fb_app_id" />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&family=JetBrains+Mono:wght@400;500;600&display=swap" rel="stylesheet" />

        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Person',
          name: 'Daniel Fernando Castillo Mera',
          jobTitle: 'Full Stack Software Engineer | AI-Assisted Developer',
          description: 'Estudiante de Ingeniería en Software (7mo semestre) en la Universidad de Guayaquil. Full Stack Software Engineer especializado en .NET, TypeScript, Angular y desarrollo asistido por IA.',
          url: BASE_URL,
          image: `${BASE_URL}/og-image.png`,
          email: 'danielfcastillom@gmail.com',
          birthDate: '2005-02-23',
          nationality: { '@type': 'Country', name: 'Ecuador' },
          address: { '@type': 'PostalAddress', addressLocality: 'Guayaquil', addressCountry: 'EC' },
          sameAs: [
            'https://github.com/danielcastillomera',
            'https://www.linkedin.com/in/daniel-fernando-castillo-mera',
            'https://www.instagram.com/danielcastillomera',
            'https://www.facebook.com/Daniel288215',
          ],
          alumniOf: { '@type': 'CollegeOrUniversity', name: 'Universidad de Guayaquil', sameAs: 'https://www.ug.edu.ec' },
          knowsAbout: ['.NET', 'C#', 'TypeScript', 'Angular', 'NestJS', 'Next.js', 'React', 'Node.js', 'SQL Server', 'PostgreSQL', 'MongoDB', 'UI/UX Design', 'Figma', 'AI-Assisted Development'],
        }) }} />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className="min-h-screen antialiased">
        <a href="#main-content" className="skip-link">Saltar al contenido principal</a>
        <I18nProvider>
          <ThemeProvider>
            <PreloadProvider>
              <Preloader />
              <SmoothScrollProvider>{children}</SmoothScrollProvider>
            </PreloadProvider>
          </ThemeProvider>
        </I18nProvider>
        <script dangerouslySetInnerHTML={{ __html: `document.addEventListener('contextmenu',function(e){if(e.target.closest('.protected-image-wrapper')||e.target.tagName==='IMG'){e.preventDefault()}});document.addEventListener('dragstart',function(e){if(e.target.tagName==='IMG'||e.target.closest('.protected-image-wrapper')){e.preventDefault()}});window.addEventListener('beforeinstallprompt',function(e){e.preventDefault();return false});window.addEventListener('appinstalled',function(e){e.preventDefault()});` }} />
      </body>
    </html>
  );
}
