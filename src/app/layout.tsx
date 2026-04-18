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

const BASE_URL = 'https://danielcastillo-portfolio.vercel.app';

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: 'Daniel Fernando Castillo Mera — Junior Full Stack Engineer / Developer | Community Manager',
  description: 'Portafolio profesional. Junior Full Stack Engineer / Developer y Community Manager especializado en Next.js, TypeScript, Supabase, Meta Ads, TikTok Ads. Disponible para contratación inmediata. Ecuador.',
  keywords: ['Daniel Fernando Castillo Mera','Full Stack Developer','Community Manager','Next.js','TypeScript','Supabase','Ecuador','Guayaquil','Dashboard Enterprise','Meta Ads','TikTok Ads','Figma','UI/UX'],
  authors: [{ name: 'Daniel Fernando Castillo Mera', url: BASE_URL }],
  creator: 'Daniel Fernando Castillo Mera',
  publisher: 'Daniel Fernando Castillo Mera',
  robots: { index: true, follow: true },
  icons: {
    icon: [
      { url: '/favicon-16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon.ico', sizes: 'any' },
    ],
    apple: [{ url: '/favicon-180.png', sizes: '180x180', type: 'image/png' }],
    shortcut: '/favicon-32.png',
  },
  openGraph: {
    type: 'website',
    locale: 'es_EC',
    alternateLocale: 'en_US',
    title: 'Daniel Fernando Castillo Mera — Junior Full Stack Engineer | Community Manager',
    description: 'Junior Full Stack Engineer / Developer y Community Manager desde Guayaquil, Ecuador. Next.js, TypeScript, Supabase, Meta Ads, TikTok Ads. Disponible para contratación inmediata.',
    siteName: 'Daniel Castillo — Portfolio',
    url: BASE_URL,
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Daniel Fernando Castillo Mera — Junior Full Stack Engineer / Developer | Community Manager', type: 'image/png' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Daniel Fernando Castillo Mera — Junior Full Stack Engineer',
    description: 'Junior Full Stack Engineer / Developer y Community Manager. Next.js, TypeScript, Supabase. Disponible para contratación inmediata.',
    images: ['/og-image.png'],
  },
  other: { 'X-UA-Compatible': 'IE=edge', copyright: '© 2024-2026 Daniel Fernando Castillo Mera.' },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" dir="ltr" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: `(function(){try{var t=localStorage.getItem('portfolio-theme');var d=document.documentElement;if(t==='dark'||(t!=='light'&&window.matchMedia('(prefers-color-scheme:dark)').matches)){d.classList.add('dark');d.style.colorScheme='dark'}else{d.classList.remove('dark');d.style.colorScheme='light'}}catch(e){}})()` }} />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&family=JetBrains+Mono:wght@400;500;600&display=swap" rel="stylesheet" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context':'https://schema.org','@type':'Person',name:'Daniel Fernando Castillo Mera',jobTitle:'Junior Full Stack Engineer / Developer | Community Manager',description:'Estudiante de Ingeniería en Software en la Universidad de Guayaquil.',url:BASE_URL,image:`${BASE_URL}/profile.png`,email:'danielfcastillom@gmail.com',birthDate:'2005-02-23',nationality:{'@type':'Country',name:'Ecuador'},address:{'@type':'PostalAddress',addressLocality:'Guayaquil',addressCountry:'EC'},sameAs:['https://github.com/danielcastillomera','https://www.linkedin.com/in/daniel-fernando-castillo-mera-461b8420a','https://www.instagram.com/danielcastillomera','https://www.facebook.com/Daniel288215','https://wa.me/593981076185'],alumniOf:{'@type':'CollegeOrUniversity',name:'Universidad de Guayaquil',sameAs:'https://www.ug.edu.ec'},knowsAbout:['Next.js','TypeScript','React','Supabase','Tailwind CSS','Prisma ORM','Node.js','PostgreSQL','Community Management','Meta Ads','TikTok Ads','UI/UX Design','Figma','Facturación electrónica SRI Ecuador'] }) }} />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className="min-h-screen antialiased">
        <a href="#main-content" className="skip-link">Saltar al contenido principal</a>
        <I18nProvider>
          <ThemeProvider>{children}</ThemeProvider>
        </I18nProvider>
        <script dangerouslySetInnerHTML={{ __html: `document.addEventListener('contextmenu',function(e){if(e.target.closest('.protected-image-wrapper')||e.target.tagName==='IMG'){e.preventDefault()}});document.addEventListener('dragstart',function(e){if(e.target.tagName==='IMG'||e.target.closest('.protected-image-wrapper')){e.preventDefault()}});` }} />
      </body>
    </html>
  );
}
