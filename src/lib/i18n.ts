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
        'Diseño y desarrollo soluciones digitales que impulsan tu negocio.',
        'Junior Full Stack Engineer listo para contratación inmediata.',
        'Construyo sistemas empresariales robustos y escalables desde Ecuador.',
        'Community Manager especializado en Meta Ads, TikTok e Instagram Ads.',
        'Facturación electrónica SRI, dashboards y software a la medida.',
        'Código limpio, seguro y mantenible con estándares de la industria.',
        'Tu próximo desarrollador full stack con proyectos reales en producción.',
      ],
      subtitle: 'Desde dashboards multi-tenant hasta facturación electrónica SRI — desarrollo software con estándares de industria, listo para contratación inmediata.',
      ctaServices: 'Ver mis servicios', ctaGitHub: 'GitHub',
      scroll: 'Scroll', irAlFinal: 'Ir al final', irAlInicio: 'Ir al inicio',
    },
    about: {
      sectionLabel: 'Conóceme', title: 'Sobre mí',
      statsModules: 'Módulos desarrollados', statsProjects: 'Proyectos activos',
      statsVersion: 'Versión portafolio', statsSemester: 'Semestre actual',
      capabilities: 'Lo que hago',
      items: [
        'Sistemas empresariales multi-tenant (Dashboard Enterprise v3.4.0)',
        'Facturación electrónica SRI Ecuador (XML v2.1.0)',
        'APIs REST con validación robusta (Zod, Prisma, RLS)',
        'Interfaces responsive y accesibles (WCAG 2.2)',
        'Community Manager: Meta Ads, TikTok Ads, Instagram Ads',
        'Diseño UI/UX: Figma, Nielsen, Material Design',
        'Clean Code, SOLID, DRY, KISS, Agile/Scrum',
        'Inglés B1 — Escrito, escucha y hablado',
      ],
    },
    experience: {
      sectionLabel: 'Trayectoria profesional', title: 'Experiencia Laboral',
      active: 'Activo', completed: 'Completado',
    },
    services: {
      sectionLabel: '¿Qué ofrezco?', title: 'Servicios profesionales',
      subtitle: 'Ofrezco soluciones digitales y técnicas adaptadas a las necesidades del mercado ecuatoriano e internacional.',
    },
    projects: {
      sectionLabel: 'Mi trabajo', title: 'Proyectos destacados',
      individual: 'Proyecto Individual', group: 'Proyecto Grupal',
      techStack: 'Stack tecnológico', features: 'Características principales',
    },
    skills: {
      sectionLabel: 'Mis capacidades', title: 'Habilidades técnicas',
      exploratory: 'En Aprendizaje / Exploratorio',
      categories: {
        frontend: 'Frontend', backend: 'Backend', database: 'Base de Datos & Cloud',
        tools: 'Herramientas & Metodologías', marketing: 'Community Manager & Marketing Digital', uiux: 'Diseño UI/UX',
      },
    },
    certifications: {
      sectionLabel: 'Formación continua y credibilidad', title: 'Certificados y talleres',
      subtitle: 'Aprendizaje continuo más allá del aula, con certificaciones de organizaciones nacionales e internacionales.',
      status: { active: 'Activo', inProgress: 'En curso', completed: 'Completado' },
      issuer: 'Emisor', date: 'Fecha', duration: 'Duración',
      location: 'Lugar', statusLabel: 'Estado', viewPdf: 'Ver documento',
    },
    contact: {
      sectionLabel: 'Hablemos', title: '¿Tienes un proyecto en mente?',
      subtitle: 'Estoy disponible para colaboraciones, proyectos freelance y oportunidades profesionales. Encuéntrame en mis redes o escríbeme directamente.',
      whatsapp: 'WhatsApp', whatsappSub: 'Mensaje directo',
      linkedin: 'LinkedIn', linkedinSub: 'Perfil profesional',
      github: 'GitHub', githubSub: '@danielcastillomera',
      instagram: 'Instagram', instagramSub: '@danielcastillomera',
      facebook: 'Facebook', facebookSub: 'Daniel Castillo',
      email: 'Email', cta: 'Escríbeme por WhatsApp', ctaLabel: 'Contactar por WhatsApp',
    },
    cookies: {
      title: 'Usamos cookies', message: 'Este sitio utiliza cookies técnicas esenciales para su funcionamiento. No recopilamos datos personales ni usamos cookies de seguimiento sin tu consentimiento.',
      accept: 'Aceptar todo', reject: 'Rechazar todo', customize: 'Personalizar',
      essential: 'Cookies esenciales', essentialDesc: 'Necesarias para el funcionamiento básico (tema, idioma, accesibilidad). No pueden desactivarse.',
      analytics: 'Cookies de análisis', analyticsDesc: 'Nos ayudan a entender cómo se usa el sitio. Información anónima.',
      marketing: 'Cookies de marketing', marketingDesc: 'Usadas para mostrar contenido relevante. Actualmente no utilizadas.',
      save: 'Guardar preferencias',
    },
    footer: {
      role: 'Junior Full Stack Engineer / Developer · Community Manager',
      rights: 'Todos los derechos reservados.',
      license: 'Queda estrictamente prohibida la clonación, copia o distribución de este proyecto sin previo permiso escrito del titular.',
      years: '2024–',
    },
    techGrid: {
      sectionLabel: 'Stack tecnológico', title: 'Tecnologías y herramientas',
      categories: {
        language: 'Lenguajes', frontend: 'Frontend', backend: 'Backend',
        database: 'Base de Datos & Cloud', tools: 'Herramientas', design: 'Diseño & Marketing',
      },
    },
    a11y: {
      label: 'Opciones de accesibilidad', title: 'Accesibilidad', restore: 'Restaurar',
      fontSize: 'Tamaño de texto', fontNormal: 'Normal', fontLarge: 'Grande', fontXLarge: 'Extra grande',
      highContrast: 'Alto contraste', highContrastDesc: 'Aumenta el contraste visual',
      reducedMotion: 'Reducir animaciones', reducedMotionDesc: 'Desactiva animaciones',
      highlightLinks: 'Resaltar enlaces', highlightLinksDesc: 'Subraya y resalta todos los enlaces',
      largeCursor: 'Cursor grande', largeCursorDesc: 'Aumenta el tamaño del cursor',
      wcag: 'WCAG 2.2 · Nivel A–AAA',
    },
    misc: { skipContent: 'Saltar al contenido principal', notFound: 'La página que buscas no existe.', backHome: 'Volver al inicio', loading: 'Cargando...' },
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
        'I design and develop digital solutions that drive your business.',
        'Junior Full Stack Engineer available for immediate hire.',
        'I build robust and scalable enterprise systems from Ecuador.',
        'Community Manager specialized in Meta Ads, TikTok & Instagram Ads.',
        'SRI electronic invoicing, dashboards and custom software.',
        'Clean, secure and maintainable code with industry standards.',
        'Your next full stack developer with real production projects.',
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
} as const;

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
