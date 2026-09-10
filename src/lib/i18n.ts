/**
 * i18n — Sistema de Internacionalización v9.1.0
 * Soporta: Español (es) | English (en)
 * Redacción en primera persona — estándar portafolios 2024-2026
 */

export type Locale = 'es' | 'en';

export const translations = {
  es: {
    nav: {
      inicio: 'Inicio', sobreMi: 'Sobre mí', experiencia: 'Experiencia laboral',
      servicios: 'Servicios profesionales', proyectos: 'Proyectos destacados', stack: 'Stack tecnológico',
      certificaciones: 'Certificaciones', contactame: 'Contáctame',
      language: 'EN', languageLabel: 'Switch to English',
      subLoQueHago: 'Lo que hago', subEducacion: 'Educación', subIdiomas: 'Idiomas', subLogros: 'Logros y resultados destacados',
      subLenguajes: 'Lenguajes', subFrontend: 'Frontend', subBackend: 'Backend', subDatabase: 'Base de Datos & Cloud',
      subTools: 'Herramientas', subDesign: 'Diseño & Marketing',
      subSolucionesDigitales: 'Soluciones Digitales', subSolucionesTecnicas: 'Soluciones Técnicas',
      subProyDashboard: 'Dashboard Enterprise', subProyPosts: 'POSTS-COMMENTS-MANAGER',
      subProyPortfolio: 'Portafolio Personal Profesional', subProyCne: 'Análisis Heurístico y Rediseño UI/UX — CNE',
      subCarta: 'Carta de Recomendación',
    },
    hero: {
      badge: 'Disponible para contratación inmediata y para realizar proyectos',
      taglines: [
        'Diseño y construyo soluciones digitales que impulsan tu negocio.',
        'Full Stack Software Engineer disponible para contratación inmediata.',
        'Construyo sistemas empresariales robustos y escalables desde Ecuador.',
        'Community Manager especializado en Meta Ads, TikTok e Instagram Ads.',
        'Facturación electrónica SRI, dashboards y software a la medida.',
        'Clean Code · modular · mantenible · escalable — estándares de la industria.',
        'Tu próximo desarrollador Full Stack con proyectos reales en producción.',
        'Agile · Scrum · Git: metodologías que garantizan entrega real.',
        'Clean Code aplicado: código legible, predecible y listo para escalar.',
        'Soluciones digitales reales — documentadas, seguras y desplegadas.',
      ],
      subtitle: 'Desde dashboards multi-tenant hasta facturación electrónica SRI — desarrollo software con estándares de la industria, disponible para contratación inmediata.',
      ctaServices: 'Ver mis servicios', ctaGitHub: 'GitHub',
      scroll: 'Desplazar', irAlFinal: 'Ir al final', irAlInicio: 'Ir al inicio',
    },
    about: {
      sectionLabel: 'Conóceme', title: 'Sobre mí',
      statsModules: 'Módulos desarrollados', statsProjects: 'Proyectos activos',
      statsVersion: 'Versión del portafolio', statsSemester: 'Semestre actual',
      capabilities: 'Lo que hago',
      items: [
        'Full-stack con Angular 18+ + NestJS 10 + MongoDB Atlas + Docker',
        'Sistemas empresariales multi-tenant (Dashboard Enterprise v3.4.0)',
        'Facturación electrónica SRI Ecuador (XML v2.1.0)',
        'REST APIs con validación robusta (Zod, class-validator, Prisma, RLS)',
        'Clean Code, SOLID, DRY, KISS, Agile/Scrum',
        'Interfaces responsivas y accesibles (WCAG 2.2)',
        'JWT, interceptores, pipes y directivas reutilizables',
        'UI/UX: evaluación Heurística de Nielsen, principios de Material Design, psicología visual, Figma y prototipado',
        'Servicio de reparación y mantenimiento de: PC, laptop e impresoras',
        'Community Manager: Meta Ads, TikTok Ads, Instagram Ads',
      ],
    },
    experience: {
      sectionLabel: 'Trayectoria profesional', title: 'Experiencia laboral',
      active: 'Activo', completed: 'Completado',
    },
    services: {
      sectionLabel: '¿Qué ofrezco?', title: 'Servicios profesionales',
      subtitle: 'Ofrezco soluciones digitales y técnicas adaptadas a las necesidades del mercado ecuatoriano e internacional.',
    },
    projects: {
      sectionLabel: 'Mi trabajo', title: 'Proyectos destacados',
      individual: 'Proyecto Individual', group: 'Proyecto Grupal',
      techStack: 'Conjunto de tecnologías', features: 'Características clave',
    },
    certifications: {
      sectionLabel: 'Formación continua y credibilidad', title: 'Certificaciones',
      subtitle: 'Certificaciones y cursos en curso de organizaciones nacionales e internacionales.',
      status: { active: 'Activo', inProgress: 'En curso', completed: 'Completado' },
      issuer: 'Empresa emisora', issued: 'Expedición', expires: 'Caducidad',
      credentialId: 'ID de la credencial', viewCredential: 'Ver credencial',
      inProgressBadge: 'En curso', recommendationTitle: 'Carta de Recomendación',
      viewDocument: 'Ver documento',
    },
    contact: {
      sectionLabel: 'Hablemos', title: '¿Tienes un proyecto en mente?',
      subtitle: 'Estoy disponible para colaboraciones, proyectos freelance y oportunidades profesionales. Encuéntrame en mis redes sociales o escríbeme directamente.',
      whatsapp: 'WhatsApp', whatsappSub: 'Mensaje directo',
      linkedin: 'LinkedIn', linkedinSub: 'Perfil profesional',
      github: 'GitHub', githubSub: '@danielcastillomera',
      instagram: 'Instagram', instagramSub: '@danielcastillomera',
      facebook: 'Facebook', facebookSub: 'Daniel Castillo',
      email: 'Correo electrónico', cta: 'Escríbeme por WhatsApp', ctaLabel: 'Contactar por WhatsApp',
    },
    cookies: {
      title: 'Usamos cookies', message: 'Este sitio usa cookies técnicas esenciales para su funcionamiento. No recopilamos datos personales ni usamos cookies de rastreo sin tu consentimiento.',
      accept: 'Aceptar todo', reject: 'Rechazar todo', customize: 'Personalizar',
      essential: 'Cookies esenciales', essentialDesc: 'Necesarias para el funcionamiento básico del sitio (tema, idioma, accesibilidad). No se pueden deshabilitar.',
      analytics: 'Cookies de analítica', analyticsDesc: 'Nos ayudan a entender cómo se usa el sitio. Información anónima.',
      marketing: 'Cookies de marketing', marketingDesc: 'Usadas para mostrar contenido relevante. Actualmente no están en uso.',
      save: 'Guardar preferencias',
    },
    footer: {
      role: 'Full Stack Software Engineer | .NET · TypeScript · Angular | UI/UX Design | AI-Assisted Development',
      rights: 'Todos los derechos reservados.',
      license: 'Queda estrictamente prohibida la clonación, copia o distribución de este proyecto sin permiso previo y por escrito del propietario.',
      years: '2023–',
    },
    techGrid: {
      sectionLabel: 'Conjunto de tecnologías', title: 'Tecnologías y herramientas',
      categories: {
        language: 'Lenguajes', frontend: 'Frontend', backend: 'Backend',
        database: 'Base de Datos & Cloud', tools: 'Herramientas', design: 'Diseño & Marketing',
      },
    },
    a11y: {
      label: 'Opciones de accesibilidad', title: 'Accesibilidad', restore: 'Restaurar',
      fontSize: 'Tamaño de fuente', fontNormal: 'Normal', fontLarge: 'Grande', fontXLarge: 'Extra grande',
      highContrast: 'Alto contraste', highContrastDesc: 'Aumenta el contraste visual',
      reducedMotion: 'Reducir animaciones', reducedMotionDesc: 'Desactiva las animaciones',
      highlightLinks: 'Resaltar enlaces', highlightLinksDesc: 'Subraya y resalta todos los enlaces',
      largeCursor: 'Cursor grande', largeCursorDesc: 'Aumenta el tamaño del cursor',
      wcag: 'WCAG 2.2 · Nivel A–AAA',
    },
    misc: { skipContent: 'Saltar al contenido principal', notFound: 'La página que buscas no existe.', backHome: 'Volver al inicio', loading: 'Cargando...' },
  },
  en: {
    nav: {
      inicio: 'Home', sobreMi: 'About me', experiencia: 'Work experience',
      servicios: 'Professional services', proyectos: 'Featured projects', stack: 'Tech stack',
      certificaciones: 'Certifications', contactame: 'Contact me',
      language: 'ES', languageLabel: 'Cambiar a Español',
      subLoQueHago: 'What I do', subEducacion: 'Education', subIdiomas: 'Languages', subLogros: 'Achievements & key results',
      subLenguajes: 'Languages', subFrontend: 'Frontend', subBackend: 'Backend', subDatabase: 'Database & Cloud',
      subTools: 'Tools', subDesign: 'Design & Marketing',
      subSolucionesDigitales: 'Digital Solutions', subSolucionesTecnicas: 'Technical Solutions',
      subProyDashboard: 'Dashboard Enterprise', subProyPosts: 'POSTS-COMMENTS-MANAGER',
      subProyPortfolio: 'Personal Professional Portfolio', subProyCne: 'Heuristic Analysis & UI/UX Redesign — CNE',
      subCarta: 'Letter of Recommendation',
    },
    hero: {
      badge: 'Available for immediate hire and projects',
      taglines: [
        'I design and build digital solutions that power your business.',
        'Full Stack Software Engineer available for immediate hire.',
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
        'Full-stack with Angular 18+ + NestJS 10 + MongoDB Atlas + Docker',
        'Multi-tenant enterprise systems (Dashboard Enterprise v3.4.0)',
        'SRI Ecuador electronic invoicing (XML v2.1.0)',
        'REST APIs with robust validation (Zod, class-validator, Prisma, RLS)',
        'Clean Code, SOLID, DRY, KISS, Agile/Scrum',
        'Responsive & accessible interfaces (WCAG 2.2)',
        'JWT, interceptors, custom pipes and reusable directives',
        'UI/UX: Nielsen heuristic evaluation, Material Design principles, visual psychology, Figma and prototyping',
        'Repair and maintenance service for PCs, laptops and printers',
        'Community Manager: Meta Ads, TikTok Ads, Instagram Ads',
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
    certifications: {
      sectionLabel: 'Continuous training & credibility', title: 'Certifications',
      subtitle: 'Certifications and ongoing courses from national and international organizations.',
      status: { active: 'Active', inProgress: 'In progress', completed: 'Completed' },
      issuer: 'Issuing organization', issued: 'Issued', expires: 'Expires',
      credentialId: 'Credential ID', viewCredential: 'View credential',
      inProgressBadge: 'In progress', recommendationTitle: 'Letter of Recommendation',
      viewDocument: 'View document',
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
      role: 'Full Stack Software Engineer | .NET · TypeScript · Angular | UI/UX Design | AI-Assisted Development',
      rights: 'All rights reserved.',
      license: 'Cloning, copying or distributing this project without prior written permission from the owner is strictly prohibited.',
      years: '2023–',
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
