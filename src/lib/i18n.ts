/**
 * i18n — Sistema de Internacionalización v7.5.0
 * Soporta: Español (es) | English (en)
 * Redacción en primera persona — estándar portafolios 2024-2026
 */

export type Locale = 'es' | 'en';

export const translations = {
  es: {
    nav: {
      inicio: 'Inicio', sobreMi: 'Sobre mí', experiencia: 'Experiencia',
      servicios: 'Servicios', proyectos: 'Proyectos', habilidades: 'Habilidades',
      certificaciones: 'Certificaciones', contacto: 'Contacto', contactame: 'Contáctame',
      language: 'EN', languageLabel: 'Switch to English',
    },
    hero: {
      badge: 'Disponible para contratación inmediata y para realizar proyectos',
      taglines: [
        'I design and build digital solutions that power your business.',
        'Junior Full Stack Engineer available for immediate hire.',
        'Building robust, scalable enterprise systems from Ecuador.',
        'Community Manager specialized in Meta Ads, TikTok & Instagram Ads.',
        'SRI electronic invoicing, dashboards and custom software.',
        'Clean Code · modular · maintainable · scalable — industry standards.',
        'Your next full stack developer with real production projects.',
        'Agile · Scrum · Git: methodologies that guarantee real delivery.',
        'Applied Clean Code: readable, predictable and ready to scale.',
        'Real digital solutions — documented, secure and deployed.',
      ],
      subtitle: 'From multi-tenant dashboards to SRI electronic invoicing — I develop software with industry standards, ready for immediate hire.',
      ctaServices: 'View my services', ctaGitHub: 'GitHub',
      scroll: 'Scroll', irAlFinal: 'Go to bottom', irAlInicio: 'Go to top',
    },
    about: {
      sectionLabel: 'Get to know me', title: 'About me',
      statsModules: 'Modules developed', statsProjects: 'Active projects',
      statsVersion: 'Portfolio version', statsSemester: 'Current semester',
      capabilities: 'What I do',
      items: [
        'Multi-tenant enterprise systems (Dashboard Enterprise v3.4.0)',
        'SRI Ecuador electronic invoicing (XML v2.1.0)',
        'REST APIs with robust validation (Zod, Prisma, RLS)',
        'Responsive & accessible interfaces (WCAG 2.2)',
        'Community Manager: Meta Ads, TikTok Ads, Instagram Ads',
        'UI/UX Design: Figma, Nielsen Heuristics, Material Design',
        'Clean Code, SOLID, DRY, KISS, Agile/Scrum',
        'English B1 — Written, listening and spoken',
      ],
    },
    experience: {
      sectionLabel: 'Professional journey', title: 'Work Experience',
      active: 'Active', completed: 'Completed',
    },
    services: {
      sectionLabel: 'What do I offer?', title: 'Professional services',
      subtitle: "I offer digital and technical solutions tailored to the needs of the Ecuadorian and international market.",
    },
    projects: {
      sectionLabel: 'My work', title: 'Featured projects',
      individual: 'Individual Project', group: 'Group Project',
      techStack: 'Tech stack', features: 'Key features',
    },
    skills: {
      sectionLabel: 'My capabilities', title: 'Technical skills',
      exploratory: 'Learning / Exploratory',
      categories: {
        frontend: 'Frontend', backend: 'Backend', database: 'Database & Cloud',
        tools: 'Tools & Methodologies', marketing: 'Community Manager & Digital Marketing', uiux: 'UI/UX Design',
      },
    },
    certifications: {
      sectionLabel: 'Continuous training & credibility', title: 'Certificates & Workshops',
      subtitle: 'Continuous learning beyond the classroom, with certifications from national and international organizations.',
      status: { active: 'Active', inProgress: 'In progress', completed: 'Completed' },
      issuer: 'Issuer', date: 'Date', duration: 'Duration',
      location: 'Location', statusLabel: 'Status', viewPdf: 'View document',
    },
    contact: {
      sectionLabel: "Let's talk", title: 'Do you have a project in mind?',
      subtitle: "I'm available for collaborations, freelance projects and professional opportunities. Find me on my social networks or write to me directly.",
      whatsapp: 'WhatsApp', whatsappSub: 'Direct message',
      linkedin: 'LinkedIn', linkedinSub: 'Professional profile',
      github: 'GitHub', githubSub: '@danielcastillomera',
      instagram: 'Instagram', instagramSub: '@danielcastillomera',
      facebook: 'Facebook', facebookSub: 'Daniel Castillo',
      email: 'Email', cta: 'Message me on WhatsApp', ctaLabel: 'Contact via WhatsApp',
    },
    cookies: {
      title: 'We use cookies', message: 'This site uses essential technical cookies for its operation. We do not collect personal data or use tracking cookies without your consent.',
      accept: 'Accept all', reject: 'Reject all', customize: 'Customize',
      essential: 'Essential cookies', essentialDesc: 'Necessary for basic site functionality (theme, language, accessibility). Cannot be disabled.',
      analytics: 'Analytics cookies', analyticsDesc: 'Help us understand how the site is used. Anonymous information.',
      marketing: 'Marketing cookies', marketingDesc: 'Used to show relevant content. Currently not in use.',
      save: 'Save preferences',
    },
    footer: {
      role: 'Junior Full Stack Engineer / Developer · Community Manager',
      rights: 'All rights reserved.',
      license: 'Cloning, copying or distributing this project without prior written permission from the owner is strictly prohibited.',
      years: '2024–',
    },
    techGrid: {
      sectionLabel: 'Tech stack', title: 'Technologies & tools',
      categories: {
        language: 'Languages', frontend: 'Frontend', backend: 'Backend',
        database: 'Database & Cloud', tools: 'Tools', design: 'Design & Marketing',
      },
    },
    a11y: {
      label: 'Accessibility options', title: 'Accessibility', restore: 'Reset',
      fontSize: 'Font size', fontNormal: 'Normal', fontLarge: 'Large', fontXLarge: 'Extra large',
      highContrast: 'High contrast', highContrastDesc: 'Increases visual contrast',
      reducedMotion: 'Reduce animations', reducedMotionDesc: 'Disables animations',
      highlightLinks: 'Highlight links', highlightLinksDesc: 'Underlines and highlights all links',
      largeCursor: 'Large cursor', largeCursorDesc: 'Increases cursor size',
      wcag: 'WCAG 2.2 · Level A–AAA',
    },
    misc: { skipContent: 'Skip to main content', notFound: "The page you're looking for doesn't exist.", backHome: 'Back to home', loading: 'Loading...' },
  },
  en: {
    nav: {
      inicio: 'Home', sobreMi: 'About me', experiencia: 'Experience',
      servicios: 'Services', proyectos: 'Projects', habilidades: 'Skills',
      certificaciones: 'Certifications', contacto: 'Contact', contactame: 'Contact me',
      language: 'ES', languageLabel: 'Cambiar a Español',
    },
    hero: {
      badge: 'Available for immediate hire and projects',
      taglines: [
        'I design and build digital solutions that power your business.',
        'Junior Full Stack Engineer available for immediate hire.',
        'I build robust, scalable enterprise systems from Ecuador.',
        'Community Manager specialized in Meta Ads, TikTok & Instagram Ads.',
        'SRI electronic invoicing, dashboards and custom software.',
        'Clean Code · modular · maintainable · scalable — industry standards.',
        'Your next full stack developer with real production projects.',
        'Agile · Scrum · Git: methodologies that guarantee real delivery.',
        'Applied Clean Code: readable, predictable and ready to scale.',
        'Real digital solutions — documented, secure and deployed.',
      ],
      subtitle: 'From multi-tenant dashboards to SRI electronic invoicing — I develop software with industry standards, ready for immediate hire.',
      ctaServices: 'View my services', ctaGitHub: 'GitHub',
      scroll: 'Scroll', irAlFinal: 'Go to bottom', irAlInicio: 'Go to top',
    },
    about: {
      sectionLabel: 'Get to know me', title: 'About me',
      statsModules: 'Modules developed', statsProjects: 'Active projects',
      statsVersion: 'Portfolio version', statsSemester: 'Current semester',
      capabilities: 'What I do',
      items: [
        'Multi-tenant enterprise systems (Dashboard Enterprise v3.4.0)',
        'SRI Ecuador electronic invoicing (XML v2.1.0)',
        'REST APIs with robust validation (Zod, Prisma, RLS)',
        'Responsive & accessible interfaces (WCAG 2.2)',
        'Community Manager: Meta Ads, TikTok Ads, Instagram Ads',
        'UI/UX Design: Figma, Nielsen Heuristics, Material Design',
        'Clean Code, SOLID, DRY, KISS, Agile/Scrum',
        'English B1 — Written, listening and spoken',
      ],
    },
    experience: {
      sectionLabel: 'Professional journey', title: 'Work Experience',
      active: 'Active', completed: 'Completed',
    },
    services: {
      sectionLabel: 'What do I offer?', title: 'Professional services',
      subtitle: "I offer digital and technical solutions tailored to the needs of the Ecuadorian and international market.",
    },
    projects: {
      sectionLabel: 'My work', title: 'Featured projects',
      individual: 'Individual Project', group: 'Group Project',
      techStack: 'Tech stack', features: 'Key features',
    },
    skills: {
      sectionLabel: 'My capabilities', title: 'Technical skills',
      exploratory: 'Learning / Exploratory',
      categories: {
        frontend: 'Frontend', backend: 'Backend', database: 'Database & Cloud',
        tools: 'Tools & Methodologies', marketing: 'Community Manager & Digital Marketing', uiux: 'UI/UX Design',
      },
    },
    certifications: {
      sectionLabel: 'Continuous training & credibility', title: 'Certificates & Workshops',
      subtitle: 'Continuous learning beyond the classroom, with certifications from national and international organizations.',
      status: { active: 'Active', inProgress: 'In progress', completed: 'Completed' },
      issuer: 'Issuer', date: 'Date', duration: 'Duration',
      location: 'Location', statusLabel: 'Status', viewPdf: 'View document',
    },
    contact: {
      sectionLabel: "Let's talk", title: 'Do you have a project in mind?',
      subtitle: "I'm available for collaborations, freelance projects and professional opportunities. Find me on my social networks or write to me directly.",
      whatsapp: 'WhatsApp', whatsappSub: 'Direct message',
      linkedin: 'LinkedIn', linkedinSub: 'Professional profile',
      github: 'GitHub', githubSub: '@danielcastillomera',
      instagram: 'Instagram', instagramSub: '@danielcastillomera',
      facebook: 'Facebook', facebookSub: 'Daniel Castillo',
      email: 'Email', cta: 'Message me on WhatsApp', ctaLabel: 'Contact via WhatsApp',
    },
    cookies: {
      title: 'We use cookies', message: 'This site uses essential technical cookies for its operation. We do not collect personal data or use tracking cookies without your consent.',
      accept: 'Accept all', reject: 'Reject all', customize: 'Customize',
      essential: 'Essential cookies', essentialDesc: 'Necessary for basic site functionality (theme, language, accessibility). Cannot be disabled.',
      analytics: 'Analytics cookies', analyticsDesc: 'Help us understand how the site is used. Anonymous information.',
      marketing: 'Marketing cookies', marketingDesc: 'Used to show relevant content. Currently not in use.',
      save: 'Save preferences',
    },
    footer: {
      role: 'Junior Full Stack Engineer / Developer · Community Manager',
      rights: 'All rights reserved.',
      license: 'Cloning, copying or distributing this project without prior written permission from the owner is strictly prohibited.',
      years: '2024–',
    },
    techGrid: {
      sectionLabel: 'Tech stack', title: 'Technologies & tools',
      categories: {
        language: 'Languages', frontend: 'Frontend', backend: 'Backend',
        database: 'Database & Cloud', tools: 'Tools', design: 'Design & Marketing',
      },
    },
    a11y: {
      label: 'Accessibility options', title: 'Accessibility', restore: 'Reset',
      fontSize: 'Font size', fontNormal: 'Normal', fontLarge: 'Large', fontXLarge: 'Extra large',
      highContrast: 'High contrast', highContrastDesc: 'Increases visual contrast',
      reducedMotion: 'Reduce animations', reducedMotionDesc: 'Disables animations',
      highlightLinks: 'Highlight links', highlightLinksDesc: 'Underlines and highlights all links',
      largeCursor: 'Large cursor', largeCursorDesc: 'Increases cursor size',
      wcag: 'WCAG 2.2 · Level A–AAA',
    },
    misc: { skipContent: 'Skip to main content', notFound: "The page you're looking for doesn't exist.", backHome: 'Back to home', loading: 'Loading...' },
  },
} ;

export type TranslationsType = typeof translations.es;

export function detectLocale(): Locale {
  if (typeof window === 'undefined') return 'es';
  try { const s = localStorage.getItem('portfolio-locale') as Locale | null; if (s && (s === 'es' || s === 'en')) return s; } catch {}
  const nav = navigator.language?.toLowerCase() ?? '';
  if (nav.startsWith('en')) return 'en';
  if (nav.startsWith('es')) return 'es';
  for (const l of navigator.languages ?? []) {
    const lc = l.toLowerCase();
    if (lc.startsWith('en')) return 'en';
    if (lc.startsWith('es')) return 'es';
  }
  return 'es';
}
