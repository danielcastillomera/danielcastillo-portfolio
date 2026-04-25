/**
 * Portfolio Data — Single Source of Truth v7.6.0
 * Daniel Fernando Castillo Mera
 * Primera persona · achievement-oriented (estándar portafolios 2024-2026)
 */

export const PERSONAL = {
  name: 'Daniel Fernando Castillo Mera',
  role: 'Junior Full Stack Engineer / Developer | Community Manager',
  roleShort: 'Junior Full Stack Engineer / Developer',
  university: 'Universidad de Guayaquil',
  career: 'Ingeniería en Software',
  semester: '6to de 10 semestres',
  location: 'Guayaquil, Ecuador',
  nationality: 'Ecuatoriana',
  age: 21,
  birthDate: '23 de febrero de 2005',
  whatsapp: 'https://api.whatsapp.com/send?phone=593981076185&text=Hola%20Daniel%20%F0%9F%91%8B',
  github: 'https://github.com/danielcastillomera',
  linkedin: 'https://www.linkedin.com/in/daniel-fernando-castillo-mera-461b8420a',
  instagram: 'https://www.instagram.com/danielcastillomera',
  facebook: 'https://www.facebook.com/Daniel288215',
  email: 'danielfcastillom@gmail.com',
  profileImage: '/profile.png',
} as const;

export const NAV_LINKS = [
  { href: '#inicio',         labelKey: 'inicio' },
  { href: '#sobre-mi',       labelKey: 'sobreMi' },
  { href: '#experiencia',    labelKey: 'experiencia' },
  { href: '#servicios',      labelKey: 'servicios' },
  { href: '#proyectos',      labelKey: 'proyectos' },
  { href: '#habilidades',    labelKey: 'habilidades' },
  { href: '#certificaciones',labelKey: 'certificaciones' },
  { href: '#contacto',       labelKey: 'contacto' },
] as const;

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
    id: 'cm-soluciones',
    title: 'Community Manager',
    titleEn: 'Community Manager',
    company: 'Soluciones Técnicas Industriales D.C.',
    period: '03-02-2025 — Presente',
    periodEn: '03-02-2025 — Present',
    location: 'Guayaquil, Ecuador',
    type: 'active',
    tasks: [
      'Creé y gestioné desde cero los perfiles oficiales de la empresa en Facebook, TikTok, Instagram y YouTube.',
      'Diseñé el logotipo e identidad visual corporativa de la empresa.',
      'Planifiqué, ejecuté y supervisé campañas de publicidad pagada activas: Facebook Ads, Instagram Ads y TikTok Ads orientadas a captación de clientes potenciales B2B.',
      'Administré el portafolio comercial digital mediante Meta Business Suite.',
      'Grabé, edité y publiqué contenido multimedia (videos, flyers, anuncios) con identidad de marca coherente en todas las plataformas.',
      'Utilicé AnyDesk, Zoom Workplace y OBS Studio para coordinación remota y producción de contenido en vivo.',
      'Gestioné relaciones con clientes y atención postventa en redes sociales con comunicación efectiva y resolución de problemas.',
    ],
    tasksEn: [
      'Created and managed from scratch the company\'s official profiles on Facebook, TikTok, Instagram and YouTube.',
      'Designed the company\'s logo and corporate visual identity.',
      'Planned, executed and supervised active paid advertising campaigns: Facebook Ads, Instagram Ads and TikTok Ads targeting B2B potential clients.',
      'Managed the digital commercial portfolio through Meta Business Suite.',
      'Recorded, edited and published multimedia content (videos, flyers, ads) with consistent brand identity across all platforms.',
      'Used AnyDesk, Zoom Workplace and OBS Studio for remote coordination and live content production.',
      'Managed customer relationships and after-sales support on social media with effective communication and problem resolution.',
    ],
  },
  {
    id: 'pasante-tesoreria',
    title: 'Pasante / Auxiliar de Tesorería',
    titleEn: 'Intern / Treasury Assistant',
    company: 'Soprisa S.A.',
    period: '01-04-2023 — 29-09-2023',
    periodEn: '01-04-2023 — 29-09-2023',
    location: 'Samborondón, Ecuador',
    type: 'completed',
    tasks: [
      'Asistí en el área de Tesorería con manejo de Microsoft 365 y el sistema contable interno.',
      'Procesé y gestioné documentos contables y financieros con atención al detalle y cumplimiento de procedimientos internos.',
      'Apoyé actividades de atención al cliente interno y coordinación con proveedores.',
    ],
    tasksEn: [
      'Assisted in the Treasury area with Microsoft 365 and the internal accounting system.',
      'Processed and managed accounting and financial documents with attention to detail and compliance with internal procedures.',
      'Supported internal customer service activities and vendor coordination.',
    ],
  },
  {
    id: 'pasante-sistemas',
    title: 'Pasante / Auxiliar del Área de Sistemas',
    titleEn: 'Intern / Systems Area Assistant',
    company: 'Soprisa S.A.',
    period: '01-04-2023 — 29-09-2023',
    periodEn: '01-04-2023 — 29-09-2023',
    location: 'Samborondón, Ecuador',
    type: 'completed',
    tasks: [
      'Supervisé el funcionamiento de servidores corporativos y realicé tareas de operador de base de datos (Data Entry Operator).',
      'Colaboré con el equipo de sistemas en el monitoreo de infraestructura tecnológica.',
      'Brindé soporte técnico básico a usuarios internos, desarrollando habilidades de servicio y atención al cliente en entorno corporativo.',
    ],
    tasksEn: [
      'Supervised corporate server operations and performed database operator tasks (Data Entry Operator).',
      'Collaborated with the systems team in monitoring technological infrastructure.',
      'Provided basic technical support to internal users, developing customer service skills in a corporate environment.',
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
    { name: 'Tailwind CSS', version: '4', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg' },
  ]},
  { key: 'backend', items: [
    { name: 'Node.js', version: '20 LTS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg' },
    { name: 'Prisma ORM', version: '5', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/prisma/prisma-original.svg' },
    { name: 'Zod', version: '4', icon: '/icons/zod.png' },
    { name: 'Express.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg' },
  ]},
  { key: 'database', items: [
    { name: 'Supabase', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/supabase/supabase-original.svg' },
    { name: 'PostgreSQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg' },
    { name: 'SQL Server', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/microsoftsqlserver/microsoftsqlserver-original.svg' },
    { name: 'Oracle SQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/oracle/oracle-original.svg' },
  ]},
  { key: 'tools', items: [
    { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg' },
    { name: 'GitHub', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg' },
    { name: 'VS Code', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg' },
    { name: 'Vercel', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vercel/vercel-original.svg' },
    { name: 'Overleaf / LaTeX', icon: '/icons/overleaf.svg' },
  ]},
  { key: 'design', items: [
    { name: 'Figma', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg' },
    { name: 'Meta Ads', icon: '/icons/meta.svg' },
    { name: 'TikTok Ads', icon: '/icons/tiktok-ads.svg' },
  ]},
] as const;

export const TECH_MARQUEE = [
  'Next.js 16', 'TypeScript 5.9', 'React 19', 'Tailwind CSS 4', 'Supabase',
  'PostgreSQL', 'Prisma ORM 5', 'Vercel', 'Node.js 20 LTS', 'Git',
  'Resend', 'Zod 4', 'REST API', 'HTML5', 'CSS3', 'JavaScript ES6+',
  'Figma', 'Meta Ads', 'C#', 'Python', 'OBS Studio', 'AnyDesk',
];

/* ═══ PROJECTS ═══ */
export interface Project {
  id: string; title: string; version: string;
  status: 'En desarrollo' | 'Completado' | 'MVP';
  statusEn: 'In development' | 'Completed' | 'MVP';
  description: string; descriptionEn: string;
  longDescription: string; longDescriptionEn: string;
  techStack: string[]; features: string[]; featuresEn: string[];
  links: { label: string; labelEn: string; url: string; icon: 'github' | 'external' | 'demo' }[];
  highlight: boolean; type: 'individual' | 'grupal'; githubApiUrl?: string;
}

export const PROJECTS: Project[] = [
  {
    id: 'dashboard-enterprise', title: 'Dashboard Enterprise', version: 'v3.4.0',
    status: 'En desarrollo', statusEn: 'In development',
    description: 'Sistema de gestión empresarial multi-tenant con facturación electrónica SRI Ecuador. 10+ módulos interconectados, arquitectura profesional con seguridad RLS.',
    descriptionEn: 'Multi-tenant enterprise management system with SRI Ecuador electronic invoicing. 10+ interconnected modules, professional architecture with RLS security.',
    longDescription: 'Diseñé, construí y desplegué en producción Dashboard Enterprise, sistema de gestión empresarial multi-módulo para comercio y retail ecuatoriano. Incluye motor de facturación electrónica certificado bajo normativa SRI Ecuador: generación de comprobantes XML v2.1.0, manejo de secuencias de autorización y cumplimiento regulatorio completo. El sistema centraliza ventas, compras, inventario, clientes y pedidos. Documentación técnica completa elaborada en Overleaf/LaTeX.',
    longDescriptionEn: 'Designed, built and deployed to production Dashboard Enterprise, a multi-module enterprise management system for Ecuadorian commerce and retail. Includes an electronic invoicing engine certified under SRI Ecuador regulations: XML v2.1.0 voucher generation, authorization sequence management and full regulatory compliance. The system centralizes sales, purchases, inventory, customers and orders. Complete technical documentation developed in Overleaf/LaTeX.',
    techStack: ['Next.js 16', 'TypeScript 5.9', 'Tailwind CSS 4', 'Supabase', 'Prisma ORM 5', 'PostgreSQL', 'Vercel', 'Resend', 'React PDF', 'Zod 4', 'Recharts 3'],
    features: [
      'Arquitectura multi-tenant con aislamiento RLS por tenant',
      'Facturación electrónica SRI Ecuador (XML v2.1.0, clave 49 dígitos)',
      'Generación de PDF RIDE profesional y comprobantes XML',
      'Validación de cédula/RUC/pasaporte Ecuador',
      'Row Level Security (RLS) en toda la base de datos',
      'Email transaccional automático vía Resend',
      'Panel de control con KPIs y gráficos en tiempo real',
      'Gestión completa: Clientes, Compras, Ventas, Pedidos, Inventario',
      'Documentación técnica en Overleaf/LaTeX (manual usuario, técnico, contrato SaaS)',
      'Headers de seguridad HTTP (HSTS, CSP, X-Frame-Options)',
    ],
    featuresEn: [
      'Multi-tenant architecture with RLS isolation per tenant',
      'SRI Ecuador electronic invoicing (XML v2.1.0, 49-digit key)',
      'Professional RIDE PDF and XML voucher generation',
      'Ecuador ID/RUC/passport validation',
      'Row Level Security (RLS) across entire database',
      'Automatic transactional email via Resend',
      'Control panel with real-time KPIs and charts',
      'Complete management: Customers, Purchases, Sales, Orders, Inventory',
      'Technical documentation in Overleaf/LaTeX (user manual, technical manual, SaaS contract)',
      'HTTP security headers (HSTS, CSP, X-Frame-Options)',
    ],
    links: [{ label: 'Repositorio', labelEn: 'Repository', url: 'https://github.com/danielcastillomera/dashboard-enterprise', icon: 'github' }],
    highlight: true, type: 'individual',
    githubApiUrl: 'https://raw.githubusercontent.com/danielcastillomera/dashboard-enterprise/main/package.json',
  },
  {
    id: 'portfolio-web', title: 'Portafolio Web Personal', version: 'v7.6.0',
    status: 'En desarrollo', statusEn: 'In development',
    description: 'Página web portafolio personal y de servicios con i18n ES/EN, WCAG 2.2, PWA, SEO y diseño responsive mobile-first.',
    descriptionEn: 'Personal portfolio and services website with ES/EN i18n, WCAG 2.2, PWA, SEO and responsive mobile-first design.',
    longDescription: 'Portafolio profesional construido con Next.js 15, React 19, TypeScript 5.9 y Tailwind CSS 4. Incluye internacionalización ES/EN, accesibilidad WCAG 2.2, SEO optimizado, Open Graph, visor de certificados PDF, sección de experiencia laboral y responsive mobile-first.',
    longDescriptionEn: 'Professional portfolio built with Next.js 15, React 19, TypeScript 5.9 and Tailwind CSS 4. Includes ES/EN internationalization, WCAG 2.2 accessibility, optimized SEO, Open Graph, PDF certificate viewer, work experience section and responsive mobile-first design.',
    techStack: ['Next.js 15', 'TypeScript 5.9', 'React 19', 'Tailwind CSS 4', 'Vercel'],
    features: ['i18n ES/EN con auto-detección', 'WCAG 2.2 Nivel A–AAA', 'SEO / Open Graph / JSON-LD', 'Visor PDF de certificados', 'Sección de experiencia laboral', 'Responsive mobile-first'],
    featuresEn: ['ES/EN i18n with auto-detection', 'WCAG 2.2 Level A–AAA', 'SEO / Open Graph / JSON-LD', 'PDF certificate viewer', 'Work experience section', 'Responsive mobile-first'],
    links: [{ label: 'Repositorio', labelEn: 'Repository', url: 'https://github.com/danielcastillomera/danielcastillo-portfolio', icon: 'github' },
            { label: 'Ver sitio', labelEn: 'View site', url: 'https://danielcastillo-portfolio.vercel.app', icon: 'demo' }],
    highlight: false, type: 'individual',
  },
  {
    id: 'cne-redesign', title: 'Rediseño CNE — Figma', version: 'v1.0',
    status: 'Completado', statusEn: 'Completed',
    description: 'Análisis heurístico (Nielsen) y rediseño completo del sitio web del CNE en Figma con Material Design. Trabajo colaborativo.',
    descriptionEn: 'Heuristic analysis (Nielsen) and full CNE website redesign in Figma with Material Design. Collaborative work.',
    longDescription: 'Rediseño completo de la página de inicio y dos flujos verticales internos del CNE aplicando evaluación heurística de Nielsen, principios de Material Design y psicología visual. Trabajo colaborativo universitario.',
    longDescriptionEn: 'Full redesign of the CNE homepage and two internal vertical flows applying Nielsen heuristic evaluation, Material Design principles and visual psychology. University collaborative work.',
    techStack: ['Figma', 'Material Design', 'Nielsen Heuristics', 'UI/UX', 'Prototipado'],
    features: ['Evaluación heurística Nielsen', 'Rediseño completo en Figma', 'Material Design', 'Prototipo interactivo', 'Dos flujos verticales transaccionales'],
    featuresEn: ['Nielsen heuristic evaluation', 'Full redesign in Figma', 'Material Design', 'Interactive prototype', 'Two transactional vertical flows'],
    links: [
      { label: 'Prototipo Figma', labelEn: 'Figma Prototype', url: 'https://www.figma.com/proto/UX4YVzRkEWYoCSrJlGaafX/REDISE%C3%91O-DECNE?node-id=166-3&p=f&t=WYsPYS04mFjGnkLX-1&scaling=min-zoom&contentscaling=fixed&page-id=166%3A2', icon: 'external' },
      { label: 'Documento', labelEn: 'Document', url: 'https://drive.google.com/file/d/1_lMmzLw91AdGLA38i8p7oZqaWBjE3lBj/view?usp=sharing', icon: 'external' },
    ],
    highlight: false, type: 'grupal',
  },
  {
    id: 'proyecto-unificado', title: 'Proyecto Unificado POE', version: 'v1.0',
    status: 'En desarrollo', statusEn: 'In development',
    description: 'Aplicación de escritorio colaborativa en C# con patrón MVC (Modelo-Vista-Controlador) para la materia de POO.',
    descriptionEn: 'Collaborative desktop application in C# with MVC pattern (Model-View-Controller) for the OOP course.',
    longDescription: 'Proyecto académico grupal de la materia de Programación Orientada a Eventos (POE), Universidad de Guayaquil. Aplicación de escritorio colaborativa desarrollada en C# aplicando patrón de diseño MVC.',
    longDescriptionEn: 'Academic group project for the Event-Driven Programming (POE) course, University of Guayaquil. Collaborative desktop application developed in C# applying MVC design pattern.',
    techStack: ['C#', 'MVC', 'Git', 'GitHub'],
    features: ['Patrón MVC en C#', 'Programación Orientada a Eventos', 'Control de versiones Git', 'Proyecto grupal colaborativo'],
    featuresEn: ['MVC pattern in C#', 'Event-Driven Programming', 'Git version control', 'Collaborative group project'],
    links: [{ label: 'Repositorio', labelEn: 'Repository', url: 'https://github.com/WallUG/PROYECTO-UNIFICADO-AVANCE', icon: 'github' }],
    highlight: false, type: 'grupal',
  },
  {
    id: 'invoice-manager', title: 'Invoice Manager System', version: 'v1.0',
    status: 'En desarrollo', statusEn: 'In development',
    description: 'Aplicación web para gestión profesional de facturas con administración de clientes, productos, servicios y generación de facturas.',
    descriptionEn: 'Web application for professional invoice management with customer, product and service administration and invoice generation.',
    longDescription: 'Aplicación web completa para gestión profesional de facturas con stack moderno: Next.js, TypeScript y Supabase — actualmente en desarrollo activo.',
    longDescriptionEn: 'Complete web application for professional invoice management with modern stack: Next.js, TypeScript and Supabase — currently in active development.',
    techStack: ['Next.js', 'TypeScript', 'Supabase', 'React', 'CSS3'],
    features: ['Gestión de clientes', 'Gestión de productos/servicios', 'Generación de facturas', 'Interfaz moderna y responsive'],
    featuresEn: ['Customer management', 'Product/service management', 'Invoice generation', 'Modern and responsive interface'],
    links: [{ label: 'Repositorio', labelEn: 'Repository', url: 'https://github.com/danielcastillomera/invoice-manager-system', icon: 'github' }],
    highlight: false, type: 'individual',
  },
];

/* ═══ SKILLS ═══ */
export interface SkillCategory {
  name: string; nameEn: string; iconSrc: string; iconAlt: string;
  skills: { name: string; level: number }[];
}

export const SKILL_CATEGORIES: SkillCategory[] = [
  { name: 'Frontend', nameEn: 'Frontend', iconSrc: '', iconAlt: 'Frontend',
    skills: [{ name: 'React / Next.js', level: 80 }, { name: 'TypeScript', level: 75 }, { name: 'Tailwind CSS', level: 85 }, { name: 'HTML5 / CSS3', level: 90 }, { name: 'Responsive Design', level: 85 }] },
  { name: 'Backend', nameEn: 'Backend', iconSrc: '', iconAlt: 'Backend',
    skills: [{ name: 'Next.js API Routes / Server Actions', level: 75 }, { name: 'Node.js + Express.js', level: 70 }, { name: 'Prisma ORM', level: 75 }, { name: 'REST APIs', level: 80 }, { name: 'Zod Validation', level: 70 }] },
  { name: 'Base de Datos & Cloud', nameEn: 'Database & Cloud', iconSrc: '', iconAlt: 'DB',
    skills: [{ name: 'Supabase + PostgreSQL', level: 80 }, { name: 'Supabase Auth + RLS', level: 75 }, { name: 'SQL Server (SSMS)', level: 65 }, { name: 'Oracle SQL Developer', level: 60 }, { name: 'Vercel Deployment', level: 82 }] },
  { name: 'Herramientas & Metodologías', nameEn: 'Tools & Methodologies', iconSrc: '', iconAlt: 'Tools',
    skills: [{ name: 'Git / GitHub', level: 85 }, { name: 'Agile / Scrum', level: 75 }, { name: 'Clean Code / SOLID', level: 75 }, { name: 'Microsoft 365', level: 80 }, { name: 'WCAG 2.2 Accesibilidad', level: 70 }] },
  { name: 'Community Manager & Marketing Digital', nameEn: 'Community Manager & Digital Marketing', iconSrc: '', iconAlt: 'Marketing',
    skills: [{ name: 'Meta Business Suite', level: 80 }, { name: 'Facebook & Instagram Ads', level: 75 }, { name: 'TikTok Ads', level: 70 }, { name: 'Gestión de Redes Sociales', level: 85 }, { name: 'Creación de Contenido', level: 80 }, { name: 'OBS Studio', level: 72 }] },
  { name: 'Diseño UI/UX', nameEn: 'UI/UX Design', iconSrc: '', iconAlt: 'UI/UX',
    skills: [{ name: 'Figma', level: 75 }, { name: 'Prototipado', level: 70 }, { name: 'Evaluación Heurística (Nielsen)', level: 72 }, { name: 'Material Design', level: 70 }, { name: 'Diseño Responsive', level: 85 }] },
];

/* ═══ CERTIFICATIONS ═══ */
export interface Certification {
  id: string; title: string; titleEn: string;
  issuer: string; issuerEn: string;
  date: string;
  duration: string;
  location: string; locationEn: string;
  status: 'completed' | 'in-progress' | 'active';
  pdfFile?: string;
}

export const CERTIFICATIONS: Certification[] = [
  {
    id: 'cs50x',
    title: "CS50x: CS50's Introduction to Computer Science",
    titleEn: "CS50x: CS50's Introduction to Computer Science",
    issuer: 'HarvardX — Harvard University',
    issuerEn: 'HarvardX — Harvard University',
    date: '18-01-2026 — Actualidad',
    duration: '5+ horas (en curso)',
    location: 'Estados Unidos (en línea)',
    locationEn: 'United States (online)',
    status: 'in-progress',
    pdfFile: '/certs/cs50x.pdf',
  },
  {
    id: 'uees-ia',
    title: 'UEES Talks: "Estrategias y mejores prácticas con IA: Descubre la magia de un buen prompt"',
    titleEn: 'UEES Talks: "AI Strategies & Best Practices: Discover the magic of a good prompt"',
    issuer: 'Universidad Espíritu Santo (UEES Online)',
    issuerEn: 'Universidad Espíritu Santo (UEES Online)',
    date: '11-12-2025',
    duration: '1 hora',
    location: 'Samborondón, Ecuador',
    locationEn: 'Samborondón, Ecuador',
    status: 'completed',
    pdfFile: '/certs/uees-talks.pdf',
  },
  {
    id: 'epico-pc',
    title: 'Taller "Salvando la vida de mi PC"',
    titleEn: 'Workshop: "Saving my PC\'s Life"',
    issuer: 'Épico EP — Empresa Pública Municipal para la Gestión y Competitividad',
    issuerEn: 'Épico EP — Municipal Public Company for Management and Competitiveness',
    date: '24-02-2025 — 13-03-2025',
    duration: '15 horas',
    location: 'Guayaquil, Ecuador',
    locationEn: 'Guayaquil, Ecuador',
    status: 'completed',
    pdfFile: '/certs/taller-pc.pdf',
  },
  {
    id: 'biorobotics',
    title: 'Webinar: Fundamentals of Biorobotics',
    titleEn: 'Webinar: Fundamentals of Biorobotics',
    issuer: 'P4H Bionic Online Academy',
    issuerEn: 'P4H Bionic Online Academy',
    date: '02-03-2024',
    duration: '120 minutos (2 horas)',
    location: 'México (en línea)',
    locationEn: 'Mexico (online)',
    status: 'completed',
    pdfFile: '/certs/biorobotics.pdf',
  },
  {
    id: 'carta-recomendacion',
    title: 'Carta de Recomendación — Agro Industrias Warsa C.A.',
    titleEn: 'Letter of Recommendation — Agro Industrias Warsa C.A.',
    issuer: 'Agro Industrias Warsa C.A. (Ing. Elías Ward Adum, Gerente General)',
    issuerEn: 'Agro Industrias Warsa C.A. (Eng. Elías Ward Adum, General Manager)',
    date: '2025',
    duration: 'Documento oficial',
    location: 'Guayaquil, Ecuador',
    locationEn: 'Guayaquil, Ecuador',
    status: 'completed',
    pdfFile: '/certs/carta-recomendacion.pdf',
  },
];

/* ═══ EDUCATION ═══ */
export const EDUCATION = [
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
    progress: 'Sexto semestre (en curso)',
    progressEn: 'Sixth semester (in progress)',
    location: 'Guayaquil, Ecuador',
    period: '02-10-2023 — Actualidad',
    periodEn: '02-10-2023 — Present',
    status: 'active' as const,
  },
];

/* ═══ EXPLORATORY SKILLS ═══ */
export const EXPLORATORY_SKILLS = [
  { name: 'AWS (Cloud Computing)', desc: 'Amazon Web Services, computación en la nube', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg' },
  { name: 'Docker', desc: 'Empaquetado y containerización de aplicaciones', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg' },
  { name: 'GitHub Actions', desc: 'CI/CD, automatización de pipelines', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/githubactions/githubactions-original.svg' },
  { name: 'Node.js + Express.js', desc: 'Backend runtime y framework server-side', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg' },
  { name: 'JWT (JSON Web Tokens)', desc: 'Autenticación y transmisión segura entre servicios', icon: null },
  { name: 'Redis', desc: 'Caché y optimización de rendimiento', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redis/redis-original.svg' },
  { name: 'Jest / Vitest', desc: 'Pruebas unitarias JavaScript/TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jest/jest-plain.svg' },
  { name: 'Flutter / Dart', desc: 'Interfaces de usuario multiplataforma', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flutter/flutter-original.svg' },
  { name: 'GraphQL', desc: 'Alternativa moderna a REST para diseño de APIs', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/graphql/graphql-plain.svg' },
  { name: 'Render / Hostinger', desc: 'Plataformas de despliegue en la nube', icon: null },
  { name: 'Prompt Engineering', desc: 'AI-assisted development, Vibe Coding, GitHub Copilot, Claude Code, Cursor', icon: null },
  { name: 'WebSockets / Socket.io', desc: 'Comunicación en tiempo real', icon: null },
  { name: 'Microservicios', desc: 'Arquitectura de microservicios y sistemas distribuidos', icon: null },
  { name: 'ABAP / SAP · COBOL', desc: 'Lenguajes y plataformas legacy/enterprise', icon: null },
];

export const ADDITIONAL_SKILLS = {
  ventas: {
    title: 'Ventas, Servicio y Atención al Cliente',
    titleEn: 'Sales, Service & Customer Support',
    items: [
      'Gestión de relaciones con clientes (CRM) en entornos corporativos reales',
      'Comunicación efectiva, resolución de problemas y trabajo bajo presión',
      'Cumplimiento de objetivos comerciales y gestión del tiempo multitarea',
      'Atención postventa y coordinación con proveedores',
    ],
    itemsEn: [
      'Customer relationship management (CRM) in real corporate environments',
      'Effective communication, problem resolution and work under pressure',
      'Commercial goal achievement and multitask time management',
      'After-sales support and vendor coordination',
    ],
  },
} as const;
