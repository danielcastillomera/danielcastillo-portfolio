/**
 * i18n — Internationalization System
 * Supports: Spanish (es) | English (en)
 * Auto-detects browser/device language on first load
 */

export type Locale = 'es' | 'en';

export const translations = {
  es: {
    // ── Navbar ──────────────────────────────────────────────
    nav: {
      inicio: 'Inicio',
      sobreMi: 'Sobre mí',
      servicios: 'Servicios',
      proyectos: 'Proyectos',
      habilidades: 'Habilidades',
      certificaciones: 'Certificaciones',
      contacto: 'Contacto',
      contactame: 'Contáctame',
      language: 'EN',
      languageLabel: 'Switch to English',
    },

    // ── Hero ─────────────────────────────────────────────────
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
      ctaServices: 'Ver mis servicios',
      ctaGitHub: 'GitHub',
      scroll: 'Scroll',
      irAlFinal: 'Ir al final',
      irAlInicio: 'Ir al inicio',
    },

    // ── About Me ─────────────────────────────────────────────
    about: {
      sectionLabel: 'Conóceme',
      title: 'Sobre mí',
      bio: 'Junior Full Stack Engineer/Developer con proyectos reales en producción y experiencia laboral activa en marketing digital. Disponible para contratación inmediata. Cursa Ingeniería en Software en la Universidad de Guayaquil, combinando formación académica con desarrollo profesional continuo y autodirigido. Aplica principios de Clean Code, SOLID, DRY y KISS.',
      university: 'Universidad de Guayaquil',
      degree: 'Ingeniería en Software',
      progress: '6to semestre de 10',
      period: '2023 — Presente',
      location: 'Ecuador',
      nationality: 'Ecuatoriana',
      statsModules: 'Módulos desarrollados',
      statsProjects: 'Proyectos activos',
      statsVersion: 'Versión Dashboard',
      statsSemester: 'Semestre actual',
      capabilities: 'Lo que hago',
      items: [
        'Sistemas empresariales multi-tenant (Dashboard Enterprise v3.4.0)',
        'Facturación electrónica SRI Ecuador (XML v2.1.0)',
        'APIs REST con validación robusta (Zod, Prisma, RLS)',
        'Interfaces responsive y accesibles (WCAG 2.2)',
        'Community Manager: Meta Ads, TikTok Ads, Instagram Ads',
        'Diseño UI/UX: Figma, Nielsen, Material Design',
        'Clean Code, SOLID, DRY, KISS, YAGNI',
        'Inglés B1 — Escrito, lectura y hablado',
      ],
      dashboard: 'Dashboard Enterprise v3.4.0',
      dashboardDesc: 'sistema de gestión empresarial multi-tenant con facturación electrónica cumpliendo la normativa del SRI Ecuador.',
      codeStandards: 'Me enfoco en escribir código limpio, seguro y mantenible. Cada módulo que desarrollo sigue estándares profesionales: validación robusta, seguridad a nivel de base de datos (RLS), headers HTTP de seguridad, diseño responsive mobile-first, y accesibilidad web (WCAG).',
      currentlyStudying: 'Actualmente curso el',
      of: 'de',
      in: 'en la',
      mainProject: 'Mi proyecto principal,',
      is: ', es un',
    },

    // ── Services ──────────────────────────────────────────────
    services: {
      sectionLabel: '¿Qué ofrezco?',
      title: 'Servicios profesionales',
      subtitle: 'Ofrezco soluciones digitales y técnicas adaptadas a las necesidades del mercado ecuatoriano e internacional.',
      digital: 'Soluciones Digitales (Software y Aplicaciones)',
      technical: 'Soluciones Técnicas (Infraestructura y TI)',
    },

    // ── Projects ─────────────────────────────────────────────
    projects: {
      sectionLabel: 'Mi trabajo',
      title: 'Proyectos destacados',
      individual: 'Proyecto Individual',
      group: 'Proyecto Grupal',
      inDevelopment: 'En desarrollo',
      complete: 'Completado',
      mvp: 'MVP',
      techStack: 'Stack tecnológico',
      features: 'Características principales',
      repository: 'Repositorio',
    },

    // ── Skills ───────────────────────────────────────────────
    skills: {
      sectionLabel: 'Mis capacidades',
      title: 'Habilidades técnicas',
      categories: {
        frontend: 'Frontend',
        backend: 'Backend',
        database: 'Base de Datos & Cloud',
        tools: 'Herramientas & Metodologías',
        marketing: 'Community Manager & Marketing Digital',
        uiux: 'Diseño UI/UX',
      },
    },

    // ── Certifications ──────────────────────────────────────
    certifications: {
      sectionLabel: 'Formación continua',
      title: 'Talleres y Certificados',
      subtitle: 'Aprendizaje continuo más allá del aula, con certificaciones de organizaciones nacionales e internacionales.',
      status: {
        active: 'Activo',
        inProgress: 'En curso',
        completed: 'Completado',
      },
      hours: 'horas',
      issuer: 'Emisor',
      date: 'Fecha',
      duration: 'Duración',
    },

    // ── Contact ──────────────────────────────────────────────
    contact: {
      sectionLabel: 'Hablemos',
      title: '¿Tienes un proyecto en mente?',
      subtitle: 'Estoy disponible para colaboraciones, proyectos freelance, y oportunidades profesionales. Encuéntrame en mis redes sociales o escríbeme directamente.',
      whatsapp: 'WhatsApp',
      whatsappSub: 'Mensaje directo',
      linkedin: 'LinkedIn',
      linkedinSub: 'Perfil profesional',
      github: 'GitHub',
      githubSub: '@danielcastillomera',
      instagram: 'Instagram',
      instagramSub: '@danielcastillomera',
      facebook: 'Facebook',
      facebookSub: 'Daniel Castillo',
      email: 'Email',
      cta: 'Escríbeme por WhatsApp',
      ctaLabel: 'Contactar por WhatsApp',
    },

    // ── Cookie Consent ───────────────────────────────────────
    cookies: {
      title: 'Usamos cookies',
      message: 'Este sitio utiliza cookies técnicas esenciales para su funcionamiento. No recopilamos datos personales ni usamos cookies de seguimiento sin tu consentimiento.',
      accept: 'Aceptar todo',
      reject: 'Rechazar todo',
      customize: 'Personalizar',
      essential: 'Cookies esenciales',
      essentialDesc: 'Necesarias para el funcionamiento básico del sitio (tema, idioma, accesibilidad). No pueden desactivarse.',
      analytics: 'Cookies de análisis',
      analyticsDesc: 'Nos ayudan a entender cómo se usa el sitio. Información anónima.',
      marketing: 'Cookies de marketing',
      marketingDesc: 'Usadas para mostrar contenido relevante. Actualmente no utilizadas.',
      save: 'Guardar preferencias',
      learnMore: 'Más información',
    },

    // ── Footer ───────────────────────────────────────────────
    footer: {
      role: 'Junior Full Stack Engineer / Developer · Community Manager',
      rights: 'Todos los derechos reservados.',
      license: 'Queda estrictamente prohibida la clonación, copia o distribución de este proyecto sin previo permiso escrito del titular.',
      years: '2024–',
    },

    // ── Tech Grid ────────────────────────────────────────────
    techGrid: {
      sectionLabel: 'Stack tecnológico',
      title: 'Tecnologías y herramientas',
      categories: {
        language: 'Lenguajes',
        frontend: 'Frontend',
        backend: 'Backend',
        database: 'Base de Datos & Cloud',
        tools: 'Herramientas',
        design: 'Diseño & Marketing',
      },
    },

    // ── Accessibility ────────────────────────────────────────
    a11y: {
      label: 'Opciones de accesibilidad',
      title: 'Accesibilidad',
      restore: 'Restaurar',
      fontSize: 'Tamaño de texto',
      fontNormal: 'Normal',
      fontLarge: 'Grande',
      fontXLarge: 'Extra grande',
      highContrast: 'Alto contraste',
      highContrastDesc: 'Aumenta el contraste visual',
      reducedMotion: 'Reducir animaciones',
      reducedMotionDesc: 'Desactiva animaciones',
      highlightLinks: 'Resaltar enlaces',
      highlightLinksDesc: 'Subraya y resalta todos los enlaces',
      largeCursor: 'Cursor grande',
      largeCursorDesc: 'Aumenta el tamaño del cursor',
      wcag: 'WCAG 2.2 · Nivel A–AAA',
    },

    // ── Misc ─────────────────────────────────────────────────
    misc: {
      skipContent: 'Saltar al contenido principal',
      notFound: 'La página que buscas no existe.',
      backHome: 'Volver al inicio',
      loading: 'Cargando...',
    },
  },

  en: {
    nav: {
      inicio: 'Home',
      sobreMi: 'About me',
      servicios: 'Services',
      proyectos: 'Projects',
      habilidades: 'Skills',
      certificaciones: 'Certifications',
      contacto: 'Contact',
      contactame: 'Contact me',
      language: 'ES',
      languageLabel: 'Cambiar a Español',
    },

    hero: {
      badge: 'Available for immediate hire and projects',
      taglines: [
        'I design and develop digital solutions that drive your business.',
        'Junior Full Stack Engineer available for immediate hire.',
        'I build robust and scalable enterprise systems from Ecuador.',
        'Community Manager specialized in Meta Ads, TikTok & Instagram.',
        'SRI electronic invoicing, dashboards and custom software.',
        'Clean, secure and maintainable code with industry standards.',
        'Your next full stack developer with real production projects.',
      ],
      subtitle: 'From multi-tenant dashboards to SRI electronic invoicing — I develop software with industry standards, ready for immediate hire.',
      ctaServices: 'View my services',
      ctaGitHub: 'GitHub',
      scroll: 'Scroll',
      irAlFinal: 'Go to bottom',
      irAlInicio: 'Go to top',
    },

    about: {
      sectionLabel: 'Get to know me',
      title: 'About me',
      bio: 'Junior Full Stack Engineer/Developer with real production projects and active experience in digital marketing. Available for immediate hire. Studying Software Engineering at the University of Guayaquil, combining academic training with continuous self-directed professional development. Applies Clean Code, SOLID, DRY, and KISS principles.',
      university: 'University of Guayaquil',
      degree: 'Software Engineering',
      progress: '6th semester of 10',
      period: '2023 — Present',
      location: 'Ecuador',
      nationality: 'Ecuadorian',
      statsModules: 'Modules developed',
      statsProjects: 'Active projects',
      statsVersion: 'Dashboard version',
      statsSemester: 'Current semester',
      capabilities: 'What I do',
      items: [
        'Multi-tenant enterprise systems (Dashboard Enterprise v3.4.0)',
        'SRI Ecuador electronic invoicing (XML v2.1.0)',
        'REST APIs with robust validation (Zod, Prisma, RLS)',
        'Responsive & accessible interfaces (WCAG 2.2)',
        'Community Manager: Meta Ads, TikTok Ads, Instagram Ads',
        'UI/UX Design: Figma, Nielsen Heuristics, Material Design',
        'Clean Code, SOLID, DRY, KISS, YAGNI',
        'English B1 — Written, reading and spoken',
      ],
      dashboard: 'Dashboard Enterprise v3.4.0',
      dashboardDesc: 'multi-tenant enterprise management system with electronic invoicing complying with SRI Ecuador regulations.',
      codeStandards: 'I focus on writing clean, secure and maintainable code. Each module I develop follows professional standards: robust validation, database-level security (RLS), HTTP security headers, mobile-first responsive design, and web accessibility (WCAG).',
      currentlyStudying: "I'm currently in my",
      of: 'of',
      in: 'at',
      mainProject: 'My main project,',
      is: ', is a',
    },

    services: {
      sectionLabel: 'What do I offer?',
      title: 'Professional services',
      subtitle: 'I offer digital and technical solutions tailored to the needs of the Ecuadorian and international market.',
      digital: 'Digital Solutions (Software & Applications)',
      technical: 'Technical Solutions (Infrastructure & IT)',
    },

    projects: {
      sectionLabel: 'My work',
      title: 'Featured projects',
      individual: 'Individual Project',
      group: 'Group Project',
      inDevelopment: 'In development',
      complete: 'Completed',
      mvp: 'MVP',
      techStack: 'Tech stack',
      features: 'Key features',
      repository: 'Repository',
    },

    skills: {
      sectionLabel: 'My capabilities',
      title: 'Technical skills',
      categories: {
        frontend: 'Frontend',
        backend: 'Backend',
        database: 'Database & Cloud',
        tools: 'Tools & Methodologies',
        marketing: 'Community Manager & Digital Marketing',
        uiux: 'UI/UX Design',
      },
    },

    certifications: {
      sectionLabel: 'Continuous training',
      title: 'Workshops & Certificates',
      subtitle: 'Continuous learning beyond the classroom, with certifications from national and international organizations.',
      status: {
        active: 'Active',
        inProgress: 'In progress',
        completed: 'Completed',
      },
      hours: 'hours',
      issuer: 'Issuer',
      date: 'Date',
      duration: 'Duration',
    },

    contact: {
      sectionLabel: "Let's talk",
      title: 'Do you have a project in mind?',
      subtitle: "I'm available for collaborations, freelance projects, and professional opportunities. Find me on my social networks or write to me directly.",
      whatsapp: 'WhatsApp',
      whatsappSub: 'Direct message',
      linkedin: 'LinkedIn',
      linkedinSub: 'Professional profile',
      github: 'GitHub',
      githubSub: '@danielcastillomera',
      instagram: 'Instagram',
      instagramSub: '@danielcastillomera',
      facebook: 'Facebook',
      facebookSub: 'Daniel Castillo',
      email: 'Email',
      cta: 'Message me on WhatsApp',
      ctaLabel: 'Contact via WhatsApp',
    },

    cookies: {
      title: 'We use cookies',
      message: 'This site uses essential technical cookies for its operation. We do not collect personal data or use tracking cookies without your consent.',
      accept: 'Accept all',
      reject: 'Reject all',
      customize: 'Customize',
      essential: 'Essential cookies',
      essentialDesc: 'Necessary for basic site functionality (theme, language, accessibility). Cannot be disabled.',
      analytics: 'Analytics cookies',
      analyticsDesc: 'Help us understand how the site is used. Anonymous information.',
      marketing: 'Marketing cookies',
      marketingDesc: 'Used to show relevant content. Currently not in use.',
      save: 'Save preferences',
      learnMore: 'Learn more',
    },

    footer: {
      role: 'Junior Full Stack Engineer / Developer · Community Manager',
      rights: 'All rights reserved.',
      license: 'Cloning, copying, or distributing this project without prior written permission from the owner is strictly prohibited.',
      years: '2024–',
    },

    techGrid: {
      sectionLabel: 'Tech stack',
      title: 'Technologies & tools',
      categories: {
        language: 'Languages',
        frontend: 'Frontend',
        backend: 'Backend',
        database: 'Database & Cloud',
        tools: 'Tools',
        design: 'Design & Marketing',
      },
    },

    a11y: {
      label: 'Accessibility options',
      title: 'Accessibility',
      restore: 'Reset',
      fontSize: 'Font size',
      fontNormal: 'Normal',
      fontLarge: 'Large',
      fontXLarge: 'Extra large',
      highContrast: 'High contrast',
      highContrastDesc: 'Increases visual contrast',
      reducedMotion: 'Reduce animations',
      reducedMotionDesc: 'Disables animations',
      highlightLinks: 'Highlight links',
      highlightLinksDesc: 'Underlines and highlights all links',
      largeCursor: 'Large cursor',
      largeCursorDesc: 'Increases cursor size',
      wcag: 'WCAG 2.2 · Level A–AAA',
    },

    misc: {
      skipContent: 'Skip to main content',
      notFound: "The page you're looking for doesn't exist.",
      backHome: 'Back to home',
      loading: 'Loading...',
    },
  },
} as const;

// Use a generic shape so both 'es' and 'en' are assignable
export type TranslationsType = typeof translations.es | typeof translations.en;

/** Detect preferred locale from browser/device, fallback to 'es' */
export function detectLocale(): Locale {
  if (typeof window === 'undefined') return 'es';

  // 1. Check localStorage for saved preference
  try {
    const saved = localStorage.getItem('portfolio-locale') as Locale | null;
    if (saved && (saved === 'es' || saved === 'en')) return saved;
  } catch {}

  // 2. Check navigator.language (browser UI language)
  const navLang = navigator.language?.toLowerCase() ?? '';

  // If browser is in English → show English
  if (navLang.startsWith('en')) return 'en';

  // Spanish variants: es-419, es-EC, es-MX, es-ES, etc.
  if (navLang.startsWith('es')) return 'es';

  // 3. Check navigator.languages array
  const langs = navigator.languages ?? [];
  for (const lang of langs) {
    const l = lang.toLowerCase();
    if (l.startsWith('en')) return 'en';
    if (l.startsWith('es')) return 'es';
  }

  // 4. Default to Spanish (target audience is primarily Latin America)
  return 'es';
}
