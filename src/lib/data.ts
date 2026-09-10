/**
 * Portfolio Data — Single Source of Truth v9.1.1
 * Daniel Fernando Castillo Mera
 * Primera persona · achievement-oriented (estándar portafolios 2023-2026)
 */

export const PERSONAL = {
  name: 'Daniel Fernando Castillo Mera',
  role: 'Full Stack Software Engineer | .NET · TypeScript · Angular | UI/UX Design | AI-Assisted Developer',
  roleShort: 'Full Stack Software Engineer | UI/UX & AI',
  university: 'Universidad de Guayaquil',
  career: 'Ingeniería en Software',
  semester: '7mo de 10 semestres',
  location: 'Guayaquil, Ecuador',
  nationality: 'Ecuatoriana',
  age: 21,
  birthDate: '23 de febrero de 2005',
  whatsapp: 'https://api.whatsapp.com/send?phone=593981076185&text=Hola%20Daniel%20%F0%9F%91%8B',
  github: 'https://github.com/danielcastillomera',
  linkedin: 'https://www.linkedin.com/in/daniel-fernando-castillo-mera',
  instagram: 'https://www.instagram.com/danielcastillomera',
  facebook: 'https://www.facebook.com/Daniel288215',
  email: 'danielfcastillom@gmail.com',
  profileImage: '/profile.png',
} as const;

export interface NavSubLink { href: string; labelKey: string; }
export interface NavLink { href: string; labelKey: string; subs?: NavSubLink[]; }

export const NAV_LINKS: NavLink[] = [
  { href: '#inicio', labelKey: 'inicio' },
  {
    href: '#sobre-mi', labelKey: 'sobreMi',
    subs: [
      { href: '#about-capacidades', labelKey: 'subLoQueHago' },
      { href: '#about-educacion',   labelKey: 'subEducacion' },
      { href: '#about-idiomas',     labelKey: 'subIdiomas' },
      { href: '#logros',            labelKey: 'subLogros' },
    ],
  },
  {
    href: '#stack-tecnologico', labelKey: 'stack',
    subs: [
      { href: '#lenguajes',      labelKey: 'subLenguajes' },
      { href: '#stack-frontend', labelKey: 'subFrontend' },
      { href: '#stack-backend',  labelKey: 'subBackend' },
      { href: '#stack-database', labelKey: 'subDatabase' },
      { href: '#stack-tools',    labelKey: 'subTools' },
      { href: '#stack-design',   labelKey: 'subDesign' },
    ],
  },
  {
    href: '#servicios', labelKey: 'servicios',
    subs: [
      { href: '#soluciones-digitales', labelKey: 'subSolucionesDigitales' },
      { href: '#soluciones-tecnicas',  labelKey: 'subSolucionesTecnicas' },
    ],
  },
  {
    href: '#proyectos', labelKey: 'proyectos',
    subs: [
      { href: '#proyecto-dashboard-enterprise',      labelKey: 'subProyDashboard' },
      { href: '#proyecto-posts-comments-manager',    labelKey: 'subProyPosts' },
      { href: '#proyecto-portfolio-personal',        labelKey: 'subProyPortfolio' },
      { href: '#proyecto-cne',                       labelKey: 'subProyCne' },
    ],
  },
  { href: '#experiencia', labelKey: 'experiencia' },
  {
    href: '#certificaciones', labelKey: 'certificaciones',
    subs: [
      { href: '#carta-recomendacion', labelKey: 'subCarta' },
    ],
  },
  { href: '#contacto', labelKey: 'contactame' },
];

/* ═══ EXPERIENCE ═══ */
export interface WorkExperience {
  id: string;
  title: string; titleEn: string;
  company: string;
  period: string; periodEn: string;
  location: string;
  type: 'active' | 'completed';
  tasks: string[]; tasksEn: string[];
}

export const WORK_EXPERIENCE: WorkExperience[] = [
  {
    id: 'cm-warsa',
    title: 'Community Manager',
    titleEn: 'Community Manager',
    company: 'Agro Industrias Warsa C.A.',
    period: '24-04-2026 — Presente',
    periodEn: '24-04-2026 — Present',
    location: 'Guayaquil, Ecuador',
    type: 'active',
    tasks: [
      'Creé y gestioné desde cero el perfil oficial de la empresa en TikTok.',
      'Grabé, edité y publiqué contenido multimedia (videos, flyers, anuncios) con identidad de marca coherente en la plataforma.',
      'Planifiqué, ejecuté y supervisé campañas de publicidad pagada activas: TikTok Ads orientadas a captación de clientes potenciales B2B.',
    ],
    tasksEn: [
      'Created and managed from scratch the company\'s official TikTok profile.',
      'Recorded, edited and published multimedia content (videos, flyers, ads) with consistent brand identity on the platform.',
      'Planned, executed and supervised active paid advertising campaigns: TikTok Ads targeting B2B potential clients.',
    ],
  },
  {
    id: 'cm-soluciones',
    title: 'Community Manager',
    titleEn: 'Community Manager',
    company: 'Soluciones Técnicas Industriales D.C.',
    period: '03-02-2025 — Presente',
    periodEn: '03-02-2025 — Present',
    location: 'Guayaquil, Ecuador',
    type: 'active',
    tasks: [
      'Automatizó el flujo de respuestas y atención al cliente mediante Meta Business Suite, incrementando en un 20% la efectividad en la contratación de servicios.',
      'Creé y gestioné desde cero los perfiles oficiales de la empresa en Facebook, TikTok, Instagram y YouTube',
      'Diseñé el logotipo e identidad visual corporativa de la empresa',
      'Planifiqué, ejecuté y supervisé campañas de publicidad pagada activas: Facebook Ads, Instagram Ads y TikTok Ads orientadas a captación de clientes potenciales B2B',
      'Administré el portafolio comercial digital mediante Meta Business Suite',
      'Grabé, edité y publiqué contenido multimedia (videos, flyers, anuncios) con identidad de marca coherente en todas las plataformas',
      'Utilicé AnyDesk, Zoom Workplace y OBS Studio para coordinación remota y producción de contenido en vivo',
      'Gestioné relaciones con clientes y atención postventa en redes sociales con comunicación efectiva y resolución de problemas',
    ],
    tasksEn: [
      'Automated the customer response and service flow through Meta Business Suite, increasing service contracting effectiveness by 20%.',
      'Created and managed from scratch the company\'s official profiles on Facebook, TikTok, Instagram and YouTube',
      'Designed the company\'s logo and corporate visual identity',
      'Planned, executed and supervised active paid advertising campaigns: Facebook Ads, Instagram Ads and TikTok Ads targeting B2B potential clients',
      'Managed the digital commercial portfolio through Meta Business Suite',
      'Recorded, edited and published multimedia content (videos, flyers, ads) with consistent brand identity across all platforms',
      'Used AnyDesk, Zoom Workplace and OBS Studio for remote coordination and live content production',
      'Managed customer relationships and after-sales support on social media with effective communication and problem resolution',
    ],
  },
  {
    id: 'pasante-tesoreria',
    title: 'Pasante / Auxiliar de Tesorería',
    titleEn: 'Intern / Treasury Assistant',
    company: 'Soprisa S.A',
    period: '03-04-2023 — 29-09-2023',
    periodEn: '04-03-2023 — 09-29-2023',
    location: 'Samborondón, Ecuador',
    type: 'completed',
    tasks: [
      'Asistí en el área de Tesorería con manejo de Microsoft 365 y el sistema contable interno',
      'Procesé y gestioné documentos contables y financieros con atención al detalle y cumplimiento de procedimientos internos',
      'Apoyé actividades de atención al cliente interno y coordinación con proveedores',
    ],
    tasksEn: [
      'Assisted in the Treasury area with Microsoft 365 and the internal accounting system',
      'Processed and managed accounting and financial documents with attention to detail and compliance with internal procedures',
      'Supported internal customer service activities and vendor coordination',
    ],
  },
  {
    id: 'pasante-sistemas',
    title: 'Pasante / Auxiliar del Área de Sistemas',
    titleEn: 'Intern / Systems Area Assistant',
    company: 'Soprisa S.A',
    period: '03-04-2023 — 29-09-2023',
    periodEn: '04-03-2023 — 09-29-2023',
    location: 'Samborondón, Ecuador',
    type: 'completed',
    tasks: [
      'Supervisé el funcionamiento de servidores corporativos y realicé tareas de operador de base de datos (Data Entry Operator)',
      'Colaboré con el equipo de sistemas en el monitoreo de infraestructura tecnológica',
      'Brindé soporte técnico básico a usuarios internos, desarrollando habilidades de servicio y atención al cliente en entorno corporativo',
    ],
    tasksEn: [
      'Supervised corporate server operations and performed database operator tasks (Data Entry Operator)',
      'Collaborated with the systems team in monitoring technological infrastructure',
      'Provided basic technical support to internal users, developing customer service skills in a corporate environment',
    ],
  },
];

/* ═══ SERVICES ═══ */
export interface ServiceItem { title: string; items: string[]; titleEn: string; itemsEn: string[]; }
export interface ServiceCategory { title: string; titleEn: string; services: ServiceItem[]; }

export const SERVICE_CATEGORIES: ServiceCategory[] = [
  {
    title: 'Soluciones Digitales (Software y Aplicaciones)',
    titleEn: 'Digital Solutions (Software & Applications)',
    services: [
      { title: 'Sistematización y Automatización de Procesos', titleEn: 'Process Systematization & Automation', items: ['Flujos de trabajo automatizados', 'Integración de sistemas', 'Reducción de tareas manuales'], itemsEn: ['Automated workflows', 'System integration', 'Manual task reduction'] },
      { title: 'Dashboards y Paneles de Control', titleEn: 'Dashboards & Control Panels', items: ['KPIs en tiempo real', 'Reportes y analíticas', 'Visualización de datos'], itemsEn: ['Real-time KPIs', 'Reports and analytics', 'Data visualization'] },
      { title: 'Sistemas de Facturación Electrónica SRI', titleEn: 'SRI Electronic Billing Systems', items: ['Facturación electrónica SRI Ecuador', 'Generación de PDF/XML', 'Cumplimiento normativo'], itemsEn: ['SRI Ecuador electronic invoicing', 'PDF/XML generation', 'Regulatory compliance'] },
      { title: 'Páginas Web Profesionales', titleEn: 'Professional Websites', items: ['Landing pages', 'Portafolios', 'Sitios corporativos', 'SEO optimizado'], itemsEn: ['Landing pages', 'Portfolios', 'Corporate sites', 'SEO optimized'] },
      { title: 'E-Commerce', titleEn: 'E-Commerce', items: ['Tiendas online', 'Catálogos de productos', 'Pasarelas de pago', 'Gestión de pedidos'], itemsEn: ['Online stores', 'Product catalogs', 'Payment gateways', 'Order management'] },
      { title: 'SaaS (Software como Servicio)', titleEn: 'SaaS (Software as a Service)', items: ['Aplicaciones multi-tenant', 'Suscripciones', 'Escalabilidad cloud'], itemsEn: ['Multi-tenant applications', 'Subscriptions', 'Cloud scalability'] },
      { title: 'Software a la Medida', titleEn: 'Custom Software', items: ['Análisis de requerimientos', 'Desarrollo personalizado', 'Soluciones específicas para tu negocio'], itemsEn: ['Requirements analysis', 'Custom development', 'Business-specific solutions'] },
      { title: 'APIs y Microservicios', titleEn: 'APIs & Microservices', items: ['REST APIs', 'Integración con terceros', 'Arquitectura escalable'], itemsEn: ['REST APIs', 'Third-party integration', 'Scalable architecture'] },
    ],
  },
  {
    title: 'Soluciones Técnicas (Infraestructura y TI)',
    titleEn: 'Technical Solutions (Infrastructure & IT)',
    services: [
      { title: 'Reparación y Mantenimiento de PC y Laptops', titleEn: 'PC & Laptop Repair and Maintenance', items: ['Diagnóstico de hardware', 'Limpieza y optimización', 'Instalación de software'], itemsEn: ['Hardware diagnostics', 'Cleaning and optimization', 'Software installation'] },
      { title: 'Soporte Técnico', titleEn: 'Technical Support', items: ['Resolución de problemas', 'Configuración de equipos', 'Asistencia remota (AnyDesk, Zoom)'], itemsEn: ['Problem resolution', 'Equipment configuration', 'Remote assistance (AnyDesk, Zoom)'] },
      { title: 'Consultoría TI', titleEn: 'IT Consulting', items: ['Evaluación de infraestructura', 'Recomendaciones tecnológicas', 'Optimización de costos'], itemsEn: ['Infrastructure assessment', 'Technology recommendations', 'Cost optimization'] },
    ],
  },
];

/* ═══ TECH GRID ═══ */
export const TECH_GRID_CATEGORIES = [
  { key: 'language', items: [
    { name: 'TypeScript', version: '5.9', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg' },
    { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg' },
    { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg' },
    { name: 'C#', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg' },
    { name: 'SQL / PLpgSQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azuresqldatabase/azuresqldatabase-original.svg' },
    { name: 'HTML5', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg' },
    { name: 'CSS3', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg' },
  ]},
  { key: 'frontend', items: [
    { name: 'Next.js', version: '16', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg' },
    { name: 'React', version: '19', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg' },
    { name: 'Angular', version: '18+', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/angular/angular-original.svg' },
    { name: 'Tailwind CSS', version: '4', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg' },
    { name: 'RxJS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/rxjs/rxjs-original.svg' },
  ]},
  { key: 'backend', items: [
    { name: 'NestJS', version: '10', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nestjs/nestjs-original.svg' },
    { name: 'Node.js', version: '20 LTS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg' },
    { name: 'Prisma ORM', version: '5', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/prisma/prisma-original.svg' },
    { name: 'Zod', version: '4', icon: '/icons/zod.png' },
    { name: 'Express.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg' },
    { name: 'JWT', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/json/json-original.svg' },
  ]},
  { key: 'database', items: [
    { name: 'Supabase', version: '2', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/supabase/supabase-original.svg' },
    { name: 'PostgreSQL', version: '16', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg' },
    { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg' },
    { name: 'SQL Server', version: '2022', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/microsoftsqlserver/microsoftsqlserver-original.svg' },
    { name: 'Oracle SQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/oracle/oracle-original.svg' },
  ]},
  { key: 'tools', items: [
    { name: 'Docker', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg' },
    { name: 'Git', version: '2.49', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg' },
    { name: 'GitHub', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg' },
    { name: 'VS Code', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg' },
    { name: 'Vercel', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vercel/vercel-original.svg' },
    { name: 'Overleaf / LaTeX', icon: '/icons/overleaf.svg' },
  ]},
  { key: 'design', items: [
    { name: 'Figma', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg' },
    { name: 'Meta Ads', icon: '/icons/meta.svg' },
    { name: 'TikTok Ads', icon: '/icons/tiktok-ads.png' },
  ]},
] as const;

export const TECH_MARQUEE = [
  'Next.js 16', 'Angular 18+', 'NestJS 10', 'TypeScript 5.9', 'React 19',
  'Tailwind CSS 4', 'Supabase', 'MongoDB Atlas', 'PostgreSQL', 'Prisma ORM 5',
  'Mongoose', 'Docker', 'Docker Compose', 'JWT', 'RxJS', 'Angular Signals',
  'Vercel', 'Node.js 20 LTS', 'Git', 'Zod 4', 'REST API', 'HTML5', 'CSS3',
  'JavaScript ES6+', 'Figma', 'Meta Ads', 'C#', 'Python', 'OBS Studio',
];

/* ═══ PROJECTS ═══ */
export interface Project {
  id: string; title: string; version: string;
  status: 'En desarrollo' | 'Terminado' | 'MVP';
  statusEn: 'In development' | 'Completed' | 'MVP';
  description: string; descriptionEn: string;
  longDescription: string; longDescriptionEn: string;
  techStack: string[]; features: string[]; featuresEn: string[];
  links: { label: string; labelEn: string; url: string; icon: 'github' | 'external' | 'demo' | 'figma' | 'document' | 'view' }[];
  highlight: boolean; type: 'individual' | 'grupal'; githubApiUrl?: string;
}

export const PROJECTS: Project[] = [
  /* ── 1. Dashboard Enterprise (Sistema SaaS Multimódulo) ── */
  {
    id: 'dashboard-enterprise', title: 'Dashboard Enterprise', version: 'v3.4.0',
    status: 'En desarrollo', statusEn: 'In development',
    description: 'Sistema SaaS multi-módulo empresarial con facturación electrónica SRI Ecuador, arquitectura multi-tenant con RLS y 10+ módulos interconectados.',
    descriptionEn: 'Multi-module enterprise SaaS system with SRI Ecuador electronic invoicing, multi-tenant architecture with RLS and 10+ interconnected modules.',
    longDescription: 'Diseñé, construí y desplegué en producción Dashboard Enterprise, sistema de gestión empresarial multi-módulo para comercio y retail ecuatoriano. Motor de facturación electrónica SRI Ecuador: XML v2.1.0, aislamiento multi-tenant con Row Level Security (RLS), panel KPIs en tiempo real y documentación técnica en Overleaf/LaTeX.',
    longDescriptionEn: 'Designed, built and deployed Dashboard Enterprise to production — multi-module enterprise SaaS for Ecuadorian commerce. SRI Ecuador electronic invoicing engine: XML v2.1.0, multi-tenant isolation with RLS, real-time KPI dashboard and technical documentation in Overleaf/LaTeX.',
    techStack: ['Next.js 16', 'TypeScript 5.9', 'Tailwind CSS 4', 'Supabase', 'Prisma ORM 5', 'PostgreSQL', 'Vercel', 'Resend', 'React PDF', 'Zod 4', 'Recharts 3'],
    features: [
      'Arquitectura multi-tenant con aislamiento RLS por tenant',
      'Facturación electrónica SRI Ecuador (XML v2.1.0, clave 49 dígitos)',
      'Generación de PDF RIDE profesional y comprobantes XML',
      'Row Level Security (RLS) en toda la base de datos',
      'Email transaccional automático vía Resend',
      'Panel de control con KPIs y gráficos en tiempo real',
      'Gestión completa: Clientes, Compras, Ventas, Pedidos, Inventario',
      'Documentación técnica en Overleaf/LaTeX',
    ],
    featuresEn: [
      'Multi-tenant architecture with RLS isolation per tenant',
      'SRI Ecuador electronic invoicing (XML v2.1.0, 49-digit key)',
      'Professional RIDE PDF and XML voucher generation',
      'Row Level Security (RLS) across entire database',
      'Automatic transactional email via Resend',
      'Control panel with real-time KPIs and charts',
      'Complete management: Customers, Purchases, Sales, Orders, Inventory',
      'Technical documentation in Overleaf/LaTeX',
    ],
    links: [
      { label: 'Ir a repositorio', labelEn: 'Repository', url: 'https://github.com/danielcastillomera/dashboard-enterprise', icon: 'github' },
      { label: 'Ver', labelEn: 'View', url: 'https://dashboard-enterprise-kappa.vercel.app', icon: 'view' },
    ],
    highlight: true, type: 'individual',
    githubApiUrl: 'https://raw.githubusercontent.com/danielcastillomera/dashboard-enterprise/main/package.json',
  },
  /* ── 2. POSTS-COMMENTS-MANAGER (Prueba Técnica Fullstack Superada) ── */
  {
    id: 'posts-comments-manager', title: 'POSTS-COMMENTS-MANAGER', version: 'v1.0.6',
    status: 'En desarrollo', statusEn: 'In development',
    description: 'Prueba Técnica Fullstack Superada. Angular 18+ + NestJS 10 + MongoDB Atlas + Docker. JWT, Signals, RxJS, paginación real, tests unitarios.',
    descriptionEn: 'Fullstack Technical Test Passed. Angular 18+ + NestJS 10 + MongoDB Atlas + Docker. JWT, Signals, RxJS, real pagination, unit tests.',
    longDescription: 'Prueba técnica de 4 días para Consultor Fullstack Perfil 1 en Albatros (Tegucigalda, Honduras). Arquitectura Angular + NestJS desacoplada con JWT, interceptores HTTP, pipes/directivas reutilizables, paginación real y tests con Jest + Jasmine.',
    longDescriptionEn: '4-day technical test for Fullstack Consultant Profile 1 at Albatros (Tegucigalpa, Honduras). Decoupled Angular + NestJS architecture with JWT, HTTP interceptors, reusable pipes/directives, real pagination and tests with Jest + Jasmine.',
    techStack: ['Angular 18+', 'TypeScript', 'Tailwind CSS', 'Angular Signals', 'RxJS', 'NestJS 10', 'Mongoose', 'class-validator', 'MongoDB Atlas', 'Docker', 'Docker Compose', 'JWT', 'Jest', 'Jasmine'],
    features: [
      'Prueba técnica superada — 4 días (Albatros Honduras)',
      'Autenticación JWT con Guards en NestJS',
      'Angular Signals + Forms reactivos + RxJS',
      'Paginación real en backend y frontend',
      'Tests unitarios: Jest (NestJS) + Jasmine (Angular)',
      'Docker + Docker Compose para containerización',
    ],
    featuresEn: [
      'Technical test passed — 4 days (Albatros Honduras)',
      'JWT authentication with NestJS Guards',
      'Angular Signals + Reactive Forms + RxJS',
      'Real pagination in backend and frontend',
      'Unit tests: Jest (NestJS) + Jasmine (Angular)',
      'Docker + Docker Compose containerization',
    ],
    links: [
      { label: 'Ir a repositorio', labelEn: 'Repository', url: 'https://github.com/danielcastillomera/POSTS-COMMENTS-MANAGER', icon: 'github' },
      { label: 'Ver', labelEn: 'View', url: 'https://posts-comments-manager.vercel.app', icon: 'view' },
    ],
    highlight: false, type: 'individual',
  },
  /* ── 3. Portafolio Personal Profesional ── */
  {
    id: 'portfolio-web', title: 'Portafolio Personal Profesional', version: 'v9.1.1',
    status: 'En desarrollo', statusEn: 'In development',
    description: 'Portafolio profesional con animaciones GSAP + Lenis, i18n ES/EN completo, WCAG 2.2, navegación por acordeón y diseño responsive mobile-first.',
    descriptionEn: 'Professional portfolio with GSAP + Lenis animations, full ES/EN i18n, WCAG 2.2, accordion navigation and responsive mobile-first design.',
    longDescription: 'Portafolio profesional v9.1.1 construido con Next.js 15, React 19, TypeScript 5.9 y Tailwind CSS 4. Incluye smooth scroll con Lenis, animaciones GSAP + ScrollTrigger, i18n ES/EN, accesibilidad WCAG 2.2, SEO, Open Graph y navegación jerárquica por acordeón.',
    longDescriptionEn: 'Professional portfolio v9.1.1 built with Next.js 15, React 19, TypeScript 5.9 and Tailwind CSS 4. Includes Lenis smooth scroll, GSAP + ScrollTrigger animations, ES/EN i18n, WCAG 2.2 accessibility, SEO, Open Graph and hierarchical accordion navigation.',
    techStack: ['Next.js 15', 'TypeScript 5.9', 'React 19', 'Tailwind CSS 4', 'GSAP', 'Lenis', 'Vercel'],
    features: ['Smooth scroll con Lenis + GSAP ScrollTrigger', 'i18n ES/EN con Context provider', 'WCAG 2.2 Nivel A–AAA', 'Navegación por acordeón jerárquico', 'Responsive mobile-first'],
    featuresEn: ['Lenis smooth scroll + GSAP ScrollTrigger', 'ES/EN i18n with Context provider', 'WCAG 2.2 Level A–AAA', 'Hierarchical accordion navigation', 'Responsive mobile-first'],
    links: [
      { label: 'Ir a repositorio', labelEn: 'Repository', url: 'https://github.com/danielcastillomera/danielcastillo-portfolio', icon: 'github' },
      { label: 'Ver', labelEn: 'View', url: 'https://danielcastillo-portfolio.vercel.app', icon: 'view' },
    ],
    highlight: false, type: 'individual',
  },
  /* ── 4. Análisis Heurístico y Rediseño UI/UX — CNE ── */
  {
    id: 'cne-redesign', title: 'Análisis Heurístico y Rediseño UI/UX — CNE', version: 'v1.0',
    status: 'Terminado', statusEn: 'Completed',
    description: 'Análisis heurístico (Nielsen) y rediseño completo del sitio web del CNE en Figma con Material Design. Proyecto académico.',
    descriptionEn: 'Heuristic analysis (Nielsen) and full CNE website redesign in Figma with Material Design. Academic project.',
    longDescription: 'Rediseño completo del CNE aplicando evaluación heurística de Nielsen, principios de Material Design y psicología visual. Proyecto académico colaborativo con prototipo interactivo y documento de análisis.',
    longDescriptionEn: 'Full CNE redesign applying Nielsen heuristic evaluation, Material Design principles and visual psychology. Collaborative academic project with interactive prototype and analysis document.',
    techStack: ['Figma', 'Material Design', 'Nielsen Heuristics', 'UI/UX Design', 'Prototipado'],
    features: ['Evaluación heurística Nielsen (10 principios)', 'Rediseño completo en Figma', 'Prototipo interactivo navegable', 'Documento de análisis completo'],
    featuresEn: ['Nielsen heuristic evaluation (10 principles)', 'Full redesign in Figma', 'Navigable interactive prototype', 'Complete analysis document'],
    links: [
      { label: 'Prototipo', labelEn: 'Prototype', url: 'https://www.figma.com/proto/UX4YVzRkEWYoCSrJlGaafX/REDISE%C3%91O-DECNE?node-id=166-3&p=f&t=WYsPYS04mFjGnkLX-1&scaling=min-zoom&contentscaling=fixed&page-id=166%3A2', icon: 'figma' },
      { label: 'Documento', labelEn: 'Document', url: 'https://drive.google.com/file/d/1_lMmzLw91AdGLA38i8p7oZqaWBjE3lBj/view?usp=sharing', icon: 'document' },
    ],
    highlight: false, type: 'grupal',
  },
];

/* ═══ CERTIFICATIONS — diseño estilo LinkedIn ═══ */
export interface Certification {
  id: string;
  title: string; titleEn: string;
  issuer: string; issuerEn: string;
  issueDate: string; issueDateEn: string;
  expirationDate?: string; expirationDateEn?: string;
  credentialId?: string;
  credentialUrl?: string;
  logo?: string;
  inProgress: boolean;
  pdfFile?: string;
}

export const CERTIFICATIONS: Certification[] = [
  {
    id: 'claude-api',
    title: 'Building with the Claude API',
    titleEn: 'Building with the Claude API',
    issuer: 'Anthropic Education',
    issuerEn: 'Anthropic Education',
    issueDate: 'Agosto 2026',
    issueDateEn: 'August 2026',
    credentialId: 'irkq6k39bkwt',
    credentialUrl: 'https://verify.skilljar.com/c/irkq6k39bkwt',
    logo: '/certs-logos/anthropicresearch_logo.jpg',
    inProgress: false,
  },
  {
    id: 'scrum-fundamentals',
    title: 'Scrum Fundamentals Certified (SFC)',
    titleEn: 'Scrum Fundamentals Certified (SFC)',
    issuer: 'SCRUMstudy',
    issuerEn: 'SCRUMstudy',
    issueDate: 'Agosto 2026',
    issueDateEn: 'August 2026',
    credentialId: '1181435',
    credentialUrl: 'https://www.scrumstudy.com/certification/verify?type=SFC&number=1181435',
    logo: '/certs-logos/vabro_vmedu_logo.jpg',
    inProgress: false,
  },
  {
    id: 'cloud-azure-vmware',
    title: 'Cloud Computing & Azure VMware Solution',
    titleEn: 'Cloud Computing & Azure VMware Solution',
    issuer: 'Microsoft Learn',
    issuerEn: 'Microsoft Learn',
    issueDate: 'Agosto 2026',
    issueDateEn: 'August 2026',
    credentialId: 'B9E430E7B75342CF',
    credentialUrl: 'https://learn.microsoft.com/api/achievements/share/en-us/DanielFernandoCastilloMera-5826/Y45WJC7R?sharingId=B9E430E7B75342CF',
    logo: '/certs-logos/microsoft_logo.jpg',
    inProgress: false,
  },
  {
    id: 'aws-cloud-practitioner',
    title: 'AWS Certified Cloud Practitioner',
    titleEn: 'AWS Certified Cloud Practitioner',
    issuer: 'Amazon Web Services',
    issuerEn: 'Amazon Web Services',
    issueDate: 'Agosto 2026',
    issueDateEn: 'August 2026',
    logo: '/certs-logos/amazon_web_services_logo.jpg',
    inProgress: true,
  },
  {
    id: 'azure-fundamentals',
    title: 'Microsoft Certified: Azure Fundamentals',
    titleEn: 'Microsoft Certified: Azure Fundamentals',
    issuer: 'Microsoft',
    issuerEn: 'Microsoft',
    issueDate: 'Agosto 2026',
    issueDateEn: 'August 2026',
    logo: '/certs-logos/microsoft_logo.jpg',
    inProgress: true,
  },
  {
    id: 'cs50x',
    title: "CS50's Introduction to Computer Science",
    titleEn: "CS50's Introduction to Computer Science",
    issuer: 'HarvardX',
    issuerEn: 'HarvardX',
    issueDate: 'Enero 2026',
    issueDateEn: 'January 2026',
    logo: '/certs-logos/harvard_x_logo.jpg',
    inProgress: true,
  },
];

/** Carta de recomendación — mismo diseño tipo LinkedIn, tratada aparte */
export const RECOMMENDATION_LETTER: Certification = {
  id: 'carta-recomendacion',
  title: 'Carta de Recomendación',
  titleEn: 'Letter of Recommendation',
  issuer: 'Agro Industrias Warsa C.A. — Ing. Elías Ward Adum, Gerente General',
  issuerEn: 'Agro Industrias Warsa C.A. — Eng. Elías Ward Adum, General Manager',
  issueDate: '20 abril 2026',
  issueDateEn: 'April 20, 2026',
  credentialUrl: '/api/pdf?file=carta-recomendacion.pdf',
  inProgress: false,
  pdfFile: '/certs/carta-recomendacion.pdf',
};

/* ═══ EDUCATION ═══ */
export interface EducationEntry {
  id: string;
  institution: string; institutionEn: string;
  degree?: string; degreeEn?: string;
  faculty?: string; facultyEn?: string;
  progress?: string; progressEn?: string;
  location: string;
  period: string; periodEn: string;
  status: 'completed' | 'active';
  logo?: string;
}

export const EDUCATION: EducationEntry[] = [
  {
    id: 'bachiller',
    institution: 'Bachiller Técnico — Área TICS, Especialidad Informática',
    institutionEn: 'Technical High School — TICS Area, Computer Science Specialty',
    location: 'Guayaquil, Ecuador',
    period: '02-01-2017 — 20-01-2023',
    periodEn: '02-01-2017 — 20-01-2023',
    status: 'completed' as const,
  },
  {
    id: 'ug',
    institution: 'Universidad de Guayaquil',
    institutionEn: 'University of Guayaquil',
    degree: 'Ingeniería en Software',
    degreeEn: 'Software Engineering',
    faculty: 'Facultad de Ciencias Matemáticas y Físicas',
    facultyEn: 'Faculty of Mathematical and Physical Sciences',
    progress: 'Séptimo semestre (en curso)',
    progressEn: 'Seventh semester (in progress)',
    location: 'Guayaquil, Ecuador',
    period: '02-10-2023 — Actualidad',
    periodEn: '02-10-2023 — Present',
    status: 'active' as const,
    logo: '/logo-ug.svg',
  },
];

/* ═══ ACHIEVEMENT STATS (contadores numéricos) ═══ */
export const ACHIEVEMENT_STATS = [
  { value: 10, suffix: '+', label: 'Módulos desarrollados', labelEn: 'Modules developed' },
  { value: 4,  suffix: '',  label: 'Proyectos destacados',  labelEn: 'Featured projects' },
  { value: 6,  suffix: '',  label: 'Certificaciones y cursos', labelEn: 'Certifications & courses' },
  { value: 4,  suffix: '',  label: 'Experiencias laborales', labelEn: 'Work experiences' },
];

