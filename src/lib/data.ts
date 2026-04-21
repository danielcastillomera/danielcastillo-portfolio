/**
 * Portfolio Data — Single Source of Truth v6.0.0
 * Daniel Fernando Castillo Mera
 */

export const PERSONAL = {
  name: 'Daniel Fernando Castillo Mera',
  role: 'Junior Full Stack Engineer / Developer | Community Manager',
  roleShort: 'Junior Full Stack Engineer / Developer',
  university: 'Universidad de Guayaquil',
  career: 'Ingeniería en Software',
  semester: '6to de 10 semestres',
  location: 'Ecuador',
  nationality: 'Ecuatoriana',
  age: 21,
  whatsapp: 'https://api.whatsapp.com/send?phone=593981076185&text=Hola%20Daniel%20%F0%9F%91%8B',
  github: 'https://github.com/danielcastillomera',
  linkedin: 'https://www.linkedin.com/in/daniel-fernando-castillo-mera-461b8420a',
  instagram: 'https://www.instagram.com/danielcastillomera',
  facebook: 'https://www.facebook.com/Daniel288215',
  email: 'danielfcastillom@gmail.com',
  profileImage: '/profile.png',
  bio: 'Junior Full Stack Engineer/Developer con proyectos reales en producción, experiencia laboral activa en marketing digital y disponibilidad inmediata para contratación. Cursa Ingeniería en Software en la Universidad de Guayaquil, combinando formación académica con desarrollo profesional continuo. Aplica principios de Clean Code, SOLID, DRY y KISS, con experiencia en UI/UX y Community Manager activo.',
  heroSubtitle: 'Desde dashboards multi-tenant hasta facturación electrónica SRI — desarrollo software con estándares de industria, listo para contratación inmediata.',
} as const;

export const NAV_LINKS = [
  { href: '#inicio', labelKey: 'inicio' },
  { href: '#sobre-mi', labelKey: 'sobreMi' },
  { href: '#servicios', labelKey: 'servicios' },
  { href: '#proyectos', labelKey: 'proyectos' },
  { href: '#habilidades', labelKey: 'habilidades' },
  { href: '#certificaciones', labelKey: 'certificaciones' },
  { href: '#contacto', labelKey: 'contacto' },
] as const;

export interface ServiceItem { title: string; items: string[]; titleEn: string; itemsEn: string[]; }
export interface ServiceCategory { title: string; titleEn: string; services: ServiceItem[]; }

export const SERVICE_CATEGORIES: ServiceCategory[] = [
  {
    title: 'Soluciones Digitales (Software y Aplicaciones)',
    titleEn: 'Digital Solutions (Software & Applications)',
    services: [
      { title: 'Sistematización y Automatización de Procesos', titleEn: 'Process Systematization & Automation', items: ['Flujos de trabajo automatizados', 'Integración de sistemas', 'Reducción de tareas manuales'], itemsEn: ['Automated workflows', 'System integration', 'Manual task reduction'] },
      { title: 'Dashboards y Paneles de Control', titleEn: 'Dashboards & Control Panels', items: ['KPIs en tiempo real', 'Reportes y analíticas', 'Visualización de datos'], itemsEn: ['Real-time KPIs', 'Reports and analytics', 'Data visualization'] },
      { title: 'Sistemas de Facturación', titleEn: 'Billing Systems', items: ['Facturación electrónica SRI Ecuador', 'Generación de PDF/XML', 'Cumplimiento normativo'], itemsEn: ['SRI Ecuador electronic invoicing', 'PDF/XML generation', 'Regulatory compliance'] },
      { title: 'Páginas Web Profesionales', titleEn: 'Professional Websites', items: ['Landing pages', 'Portafolios', 'Sitios corporativos', 'SEO optimizado'], itemsEn: ['Landing pages', 'Portfolios', 'Corporate sites', 'SEO optimized'] },
      { title: 'E-Commerce', titleEn: 'E-Commerce', items: ['Tiendas online', 'Catálogos de productos', 'Pasarelas de pago', 'Gestión de pedidos'], itemsEn: ['Online stores', 'Product catalogs', 'Payment gateways', 'Order management'] },
      { title: 'SaaS (Software como Servicio)', titleEn: 'SaaS (Software as a Service)', items: ['Aplicaciones multi-tenant', 'Suscripciones', 'Escalabilidad cloud'], itemsEn: ['Multi-tenant applications', 'Subscriptions', 'Cloud scalability'] },
      { title: 'Software a la Medida', titleEn: 'Custom Software', items: ['Análisis de requerimientos', 'Desarrollo personalizado', 'Soluciones específicas para tu negocio'], itemsEn: ['Requirements analysis', 'Custom development', 'Business-specific solutions'] },
      { title: 'Aplicaciones Web Progresivas (PWA)', titleEn: 'Progressive Web Apps (PWA)', items: ['Funcionamiento offline', 'Instalable en dispositivos', 'Experiencia nativa'], itemsEn: ['Offline functionality', 'Device installable', 'Native experience'] },
      { title: 'APIs y Microservicios', titleEn: 'APIs & Microservices', items: ['REST APIs', 'Integración con terceros', 'Arquitectura escalable'], itemsEn: ['REST APIs', 'Third-party integration', 'Scalable architecture'] },
      { title: 'Sistemas de Gestión (ERP/CRM)', titleEn: 'Management Systems (ERP/CRM)', items: ['Gestión de inventario', 'Gestión de clientes', 'Flujos de ventas y compras'], itemsEn: ['Inventory management', 'Customer management', 'Sales and purchase flows'] },
    ],
  },
  {
    title: 'Soluciones Técnicas (Infraestructura y TI)',
    titleEn: 'Technical Solutions (Infrastructure & IT)',
    services: [
      { title: 'Reparación y Mantenimiento de PC y Laptops', titleEn: 'PC & Laptop Repair and Maintenance', items: ['Diagnóstico de hardware', 'Limpieza y optimización', 'Instalación de software'], itemsEn: ['Hardware diagnostics', 'Cleaning and optimization', 'Software installation'] },
      { title: 'Soporte Técnico', titleEn: 'Technical Support', items: ['Resolución de problemas', 'Configuración de equipos', 'Asistencia remota'], itemsEn: ['Problem resolution', 'Equipment configuration', 'Remote assistance'] },
      { title: 'Redes y Conectividad', titleEn: 'Networks & Connectivity', items: ['Configuración de redes LAN/WiFi', 'Seguridad de red', 'Cableado estructurado'], itemsEn: ['LAN/WiFi network configuration', 'Network security', 'Structured cabling'] },
      { title: 'Respaldo y Recuperación de Datos', titleEn: 'Data Backup & Recovery', items: ['Copias de seguridad', 'Recuperación de archivos', 'Migración de datos'], itemsEn: ['Backup copies', 'File recovery', 'Data migration'] },
      { title: 'Consultoría TI', titleEn: 'IT Consulting', items: ['Evaluación de infraestructura', 'Recomendaciones tecnológicas', 'Optimización de costos'], itemsEn: ['Infrastructure assessment', 'Technology recommendations', 'Cost optimization'] },
    ],
  },
];

// Tech grid — official brand logos via Devicon CDN + local assets for custom ones
export const TECH_GRID_CATEGORIES = [
  {
    key: 'language',
    items: [
      { name: 'TypeScript', version: '5.9', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg' },
      { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg' },
      { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg' },
      { name: 'C#', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg' },
      { name: 'HTML5', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg' },
      { name: 'CSS3', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg' },
      { name: 'SQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azuresqldatabase/azuresqldatabase-original.svg' },
    ],
  },
  {
    key: 'frontend',
    items: [
      { name: 'Next.js', version: '16', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg' },
      { name: 'React', version: '19', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg' },
      { name: 'Tailwind CSS', version: '4', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg' },
    ],
  },
  {
    key: 'backend',
    items: [
      { name: 'Node.js', version: '18+', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg' },
      { name: 'Prisma', version: '5', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/prisma/prisma-original.svg' },
      { name: 'Zod', version: '4', icon: '/icons/zod.png' },  // Official Zod logo (uploaded by user)
      { name: 'Express.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg' },
    ],
  },
  {
    key: 'database',
    items: [
      { name: 'Supabase', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/supabase/supabase-original.svg' },
      { name: 'PostgreSQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg' },
      { name: 'SQL Server', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/microsoftsqlserver/microsoftsqlserver-original.svg' },
      { name: 'Oracle', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/oracle/oracle-original.svg' },
      { name: 'Vercel', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vercel/vercel-original.svg' },
    ],
  },
  {
    key: 'tools',
    items: [
      { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg' },
      { name: 'GitHub', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg' },
      { name: 'VS Code', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg' },
      { name: 'Overleaf', icon: '/icons/overleaf.svg' },  // Official Overleaf logo (uploaded by user)
      { name: 'npm', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/npm/npm-original-wordmark.svg' },
    ],
  },
  {
    key: 'design',
    items: [
      { name: 'Figma', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg' },
      { name: 'Meta Ads', icon: '/icons/meta.svg' },    // Official Meta logo (uploaded by user)
      { name: 'TikTok Ads', icon: '/icons/tiktok.png' }, // Official TikTok logo (uploaded by user)
      // Power BI removed from this category (not design/marketing)
    ],
  },
] as const;

export const TECH_MARQUEE = [
  'Next.js 16', 'TypeScript 5.9', 'React 19', 'Tailwind CSS 4', 'Supabase',
  'PostgreSQL', 'Prisma 5', 'Vercel', 'Node.js', 'Git',
  'Resend', 'Zod 4', 'REST API', 'HTML5', 'CSS3', 'JavaScript',
  'Figma', 'Meta Ads', 'C#', 'Python',
];

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
    longDescription: 'Dashboard empresarial completo diseñado para empresas ecuatorianas. Incluye gestión de clientes con validación de cédula/RUC, compras e inventario, ventas con selector inteligente, pedidos online, facturación electrónica SRI (XML v2.1.0, clave de acceso 49 dígitos, Módulo 11), PDF RIDE profesional, email transaccional, reportes CSV/PDF/XLSX y KPIs en tiempo real.',
    longDescriptionEn: 'Complete enterprise dashboard for Ecuadorian businesses. Includes customer management with ID/RUC validation, purchases and inventory, smart product selector, online orders, SRI electronic invoicing (XML v2.1.0, 49-digit access key, Module 11), professional RIDE PDF, transactional email, CSV/PDF/XLSX reports and real-time KPIs.',
    techStack: ['Next.js 16', 'TypeScript 5.9', 'Tailwind CSS 4', 'Supabase', 'Prisma ORM 5', 'PostgreSQL', 'Vercel', 'Resend', 'React PDF', 'Zod 4', 'Recharts 3'],
    features: ['Arquitectura multi-tenant con aislamiento por tenant', 'Facturación electrónica SRI Ecuador (XML v2.1.0)', 'Generación de PDF RIDE profesional', 'Validación de cédula/RUC/pasaporte Ecuador', 'Row Level Security (RLS) en toda la base de datos', 'Email transaccional automático vía Resend', 'Panel de control con KPIs y gráficos en tiempo real', 'Gestión completa: Clientes, Compras, Ventas, Pedidos, Inventario', 'Headers de seguridad HTTP (HSTS, CSP, X-Frame-Options)', 'Responsive mobile-first + Cross-browser compatible'],
    featuresEn: ['Multi-tenant architecture with tenant isolation', 'SRI Ecuador electronic invoicing (XML v2.1.0)', 'Professional RIDE PDF generation', 'Ecuador ID/RUC/passport validation', 'Row Level Security (RLS) across entire database', 'Automatic transactional email via Resend', 'Control panel with real-time KPIs and charts', 'Complete management: Customers, Purchases, Sales, Orders, Inventory', 'HTTP security headers (HSTS, CSP, X-Frame-Options)', 'Responsive mobile-first + Cross-browser compatible'],
    links: [{ label: 'Repositorio', labelEn: 'Repository', url: 'https://github.com/danielcastillomera/dashboard-enterprise', icon: 'github' }],
    highlight: true, type: 'individual',
    githubApiUrl: 'https://raw.githubusercontent.com/danielcastillomera/dashboard-enterprise/main/package.json',
  },
  {
    id: 'proyecto-unificado', title: 'Proyecto Unificado POE', version: 'v1.0',
    status: 'En desarrollo', statusEn: 'In development',
    description: 'Proyecto final grupal para la materia de POE. Aplicación de escritorio en C# con patrón MVC.',
    descriptionEn: 'Final group project for the POE (Event-Driven Programming) course. Desktop application in C# with MVC pattern.',
    longDescription: 'Proyecto académico grupal — materia POE, Universidad de Guayaquil. Aplicación C# con patrón MVC.',
    longDescriptionEn: 'Academic group project — POE course, University of Guayaquil. C# application with MVC pattern.',
    techStack: ['C#', 'MVC', 'POE', 'Git', 'GitHub'],
    features: ['Proyecto grupal colaborativo', 'Patrón MVC en C#', 'Programación Orientada a Eventos', 'Control de versiones Git'],
    featuresEn: ['Collaborative group project', 'MVC pattern in C#', 'Event-Driven Programming', 'Git version control'],
    links: [{ label: 'Repositorio', labelEn: 'Repository', url: 'https://github.com/WallUG/PROYECTO-UNIFICADO-AVANCE', icon: 'github' }],
    highlight: false, type: 'grupal',
  },
  {
    id: 'cne-redesign', title: 'Rediseño CNE — Figma', version: 'v1.0',
    status: 'Completado', statusEn: 'Completed',
    description: 'Análisis heurístico y rediseño del sitio web del Consejo Nacional Electoral (CNE) en Figma. Evaluación Nielsen + Material Design.',
    descriptionEn: 'Heuristic analysis and redesign of the National Electoral Council (CNE) website in Figma. Nielsen evaluation + Material Design.',
    longDescription: 'Proyecto grupal: evaluación heurística (Nielsen) y rediseño completo del CNE con estándares Material Design. Incluye Home y 2 flujos verticales internos transaccionales.',
    longDescriptionEn: 'Group project: Nielsen heuristic evaluation and full CNE redesign with Material Design standards. Includes Home and 2 internal transactional vertical flows.',
    techStack: ['Figma', 'Material Design', 'Nielsen Heuristics', 'UI/UX', 'Prototipado'],
    features: ['Evaluación heurística Nielsen', 'Rediseño completo en Figma', 'Material Design', 'Prototipo interactivo', 'Análisis de usabilidad'],
    featuresEn: ['Nielsen heuristic evaluation', 'Full redesign in Figma', 'Material Design standards', 'Interactive prototype', 'Usability analysis'],
    links: [
      { label: 'Prototipo Figma', labelEn: 'Figma Prototype', url: 'https://www.figma.com/proto/UX4YVzRkEWYoCSrJlGaafX/REDISE%C3%91O-DECNE?node-id=166-3&p=f&t=WYsPYS04mFjGnkLX-1&scaling=min-zoom&contentscaling=fixed&page-id=166%3A2', icon: 'external' },
      { label: 'Documento', labelEn: 'Document', url: 'https://drive.google.com/file/d/1_lMmzLw91AdGLA38i8p7oZqaWBjE3lBj/view?usp=sharing', icon: 'external' },
    ],
    highlight: false, type: 'grupal',
  },
  {
    id: 'invoice-manager', title: 'Invoice Manager System', version: 'v1.0',
    status: 'Completado', statusEn: 'Completed',
    description: 'Aplicación web para gestión profesional de facturas con interfaz intuitiva.',
    descriptionEn: 'Web application for professional invoice management with intuitive interface.',
    longDescription: 'Sistema de gestión de facturas web con tecnologías modernas para administrar clientes, productos y facturas.',
    longDescriptionEn: 'Web invoice management system with modern technologies to manage customers, products and invoices.',
    techStack: ['TypeScript', 'JavaScript', 'React', 'Node.js', 'CSS3'],
    features: ['Gestión de clientes', 'Gestión de productos/servicios', 'Generación de facturas', 'Interfaz moderna y responsive'],
    featuresEn: ['Customer management', 'Product/service management', 'Invoice generation', 'Modern and responsive interface'],
    links: [{ label: 'Repositorio', labelEn: 'Repository', url: 'https://github.com/danielcastillomera/invoice-manager-system', icon: 'github' }],
    highlight: false, type: 'individual',
  },
];

export interface SkillCategory {
  name: string; nameEn: string; iconSrc: string; iconAlt: string;
  skills: { name: string; nameEn?: string; level: number }[];
}

export const SKILL_CATEGORIES: SkillCategory[] = [
  { name: 'Frontend', nameEn: 'Frontend', iconSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg', iconAlt: 'React logo',
    skills: [{ name: 'React / Next.js', level: 80 }, { name: 'TypeScript', level: 75 }, { name: 'Tailwind CSS', level: 85 }, { name: 'HTML5 / CSS3', level: 90 }, { name: 'Responsive Design', level: 85 }] },
  { name: 'Backend', nameEn: 'Backend', iconSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg', iconAlt: 'Node.js logo',
    skills: [{ name: 'Next.js API Routes', level: 75 }, { name: 'Node.js', level: 70 }, { name: 'Prisma ORM', level: 75 }, { name: 'REST APIs', level: 80 }, { name: 'Zod Validation', level: 70 }] },
  { name: 'Base de Datos & Cloud', nameEn: 'Database & Cloud', iconSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg', iconAlt: 'PostgreSQL logo',
    skills: [{ name: 'Supabase / PostgreSQL', level: 80 }, { name: 'Supabase Auth & RLS', level: 75 }, { name: 'SQL Server (SSMS)', level: 65 }, { name: 'Oracle SQL Developer', level: 60 }, { name: 'Vercel Deployment', level: 80 }] },
  { name: 'Herramientas & Metodologías', nameEn: 'Tools & Methodologies', iconSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg', iconAlt: 'Git logo',
    skills: [{ name: 'Git / GitHub', level: 85 }, { name: 'VS Code', level: 90 }, { name: 'Agile / Scrum', level: 75 }, { name: 'Clean Code / SOLID', level: 75 }, { name: 'Seguridad Web (OWASP)', level: 70 }, { name: 'WCAG Accesibilidad', level: 65 }] },
  { name: 'Community Manager & Marketing Digital', nameEn: 'Community Manager & Digital Marketing', iconSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/facebook/facebook-original.svg', iconAlt: 'Facebook logo',
    skills: [{ name: 'Meta Business Suite', level: 80 }, { name: 'Facebook Ads', level: 75 }, { name: 'Instagram Ads', level: 75 }, { name: 'TikTok Ads', level: 70 }, { name: 'Gestión de Redes Sociales', level: 85 }, { name: 'Creación de Contenido', level: 80 }, { name: 'Atención al Cliente', level: 80 }, { name: 'Ventas y Servicio al Cliente', level: 75 }] },
  { name: 'Diseño UI/UX', nameEn: 'UI/UX Design', iconSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg', iconAlt: 'Figma logo',
    skills: [{ name: 'Figma', level: 75 }, { name: 'Prototipado', level: 70 }, { name: 'Evaluación Heurística (Nielsen)', level: 70 }, { name: 'Material Design', level: 70 }, { name: 'Diseño Responsive', level: 85 }] },
];

export interface Certification {
  id: string; title: string; titleEn: string; issuer: string; date: string;
  hours: number | string; status: 'completed' | 'in-progress' | 'active';
  category: 'tech' | 'soft' | 'marketing' | 'design'; color: string; icon: string;
}

export const CERTIFICATIONS: Certification[] = [
  { id: 'cs50x', title: "CS50x: CS50's Introduction to Computer Science", titleEn: "CS50x: CS50's Introduction to Computer Science", issuer: 'HarvardX — Harvard University', date: '18/01/2026 — Presente', hours: '5+', status: 'in-progress', category: 'tech', color: '#A51C30', icon: '🎓' },
  { id: 'uees-ia', title: 'UEES "Talks": Estrategias y mejores prácticas con IA', titleEn: 'UEES "Talks": AI Strategies & Best Practices', issuer: 'Universidad Espíritu Santo (UEES Online)', date: '11/12/2025', hours: 1, status: 'active', category: 'tech', color: '#1E40AF', icon: '🤖' },
  { id: 'epico-pc', title: 'Taller "Salvando la vida de mi PC"', titleEn: 'Workshop: "Saving my PC\'s Life"', issuer: 'Épico — Empresa Pública Municipal de Guayaquil', date: '24/02/2025 – 13/03/2025', hours: 15, status: 'active', category: 'tech', color: '#0E7490', icon: '💻' },
  { id: 'biorobotics', title: 'Webinar: Fundamentals of Biorobotics', titleEn: 'Webinar: Fundamentals of Biorobotics', issuer: 'P4H Bionic Online Academy', date: '02/03/2024', hours: 2, status: 'active', category: 'tech', color: '#7C3AED', icon: '🤖' },
];

export const EDUCATION = {
  institution: 'Universidad de Guayaquil', institutionEn: 'University of Guayaquil',
  degree: 'Ingeniería en Software', degreeEn: 'Software Engineering',
  progress: '6to semestre de 10', progressEn: '6th semester of 10',
  period: '2023 — Presente', periodEn: '2023 — Present',
} as const;

export const EXPERIENCE = [
  {
    title: 'Community Manager', titleEn: 'Community Manager',
    company: 'Soluciones Técnicas Industriales D.C.',
    period: 'Febrero 2025 — Presente', periodEn: 'February 2025 — Present',
    type: 'active' as const,
    tasks: ['Gestión de redes sociales (Facebook, TikTok, Instagram, YouTube)', 'Campañas de publicidad pagada (Facebook Ads, Instagram Ads, TikTok Ads)', 'Uso de Meta Business Suite', 'Creación de flyers, videos y contenido publicitario', 'Creación del logo/logotipo de la empresa'],
    tasksEn: ['Social media management (Facebook, TikTok, Instagram, YouTube)', 'Paid advertising campaigns (Facebook Ads, Instagram Ads, TikTok Ads)', 'Meta Business Suite usage', 'Creation of flyers, videos, and advertising content', 'Company logo creation'],
  },
  {
    title: 'Pasante — Área de Sistemas & Tesorería', titleEn: 'Intern — Systems & Treasury',
    company: 'Soprisa S.A.', period: 'Abril – Junio 2023', periodEn: 'April – June 2023',
    type: 'completed' as const,
    tasks: ['Supervisión de servidores', 'Operador de Base de Datos (Data Entry Operator)', 'Soporte técnico interno', 'Asistente contable en el área de Tesorería', 'Manejo de paquetería Microsoft 365 y sistema contable de la empresa'],
    tasksEn: ['Server supervision', 'Database Operator (Data Entry Operator)', 'Internal technical support', 'Accounting assistant in the Treasury area', 'Microsoft 365 package and company accounting system'],
  },
];

/* ═══ ADDITIONAL SKILLS ═══ */
// Updated from CV v2026
export const EXPLORATORY_SKILLS = [
  { name: 'Node.js v20 LTS', desc: 'Backend runtime, base de Next.js API Routes', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg' },
  { name: 'React 19 Standalone', desc: 'Standalone React sin Next.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg' },
  { name: 'REST API Design', desc: 'Diseño y consumo de APIs RESTful', icon: null },
  { name: 'Express.js v4/v5', desc: 'Framework backend Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg' },
  { name: 'Python (básico)', desc: 'Scripting y automatización', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg' },
  { name: 'Docker (básico)', desc: 'Containerización, estándar DevOps moderno', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg' },
  { name: 'Redis (básico)', desc: 'Caché y performance', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redis/redis-original.svg' },
  { name: 'Jest / Vitest', desc: 'Pruebas unitarias JavaScript/TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jest/jest-plain.svg' },
  { name: 'Microservicios', desc: 'Arquitectura de microservicios (conceptual)', icon: null },
  { name: 'GitHub Actions', desc: 'CI/CD básico, automatización de pipelines', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/githubactions/githubactions-original.svg' },
  { name: 'Overleaf / LaTeX', desc: 'Documentación técnica profesional', icon: '/icons/overleaf.svg' },
  { name: 'Prompt Engineering', desc: 'AI-assisted development, Vibe Coding, GitHub Copilot, Claude Code, Cursor', icon: null },
  { name: 'Infra. Enterprise', desc: 'Administración Infraestructura nivel Enterprise', icon: null },
];

export const ADDITIONAL_SKILLS = {
  ventas: {
    title: 'Ventas, Servicio y Atención al Cliente',
    titleEn: 'Sales, Service & Customer Support',
    items: [
      'Experiencia en áreas de ventas, servicio y atención al cliente',
      'Gestión de relaciones con clientes (CRM)',
      'Comunicación efectiva y resolución de problemas',
      'Trabajo bajo presión y cumplimiento de objetivos',
    ],
    itemsEn: [
      'Experience in sales, service and customer support areas',
      'Customer relationship management (CRM)',
      'Effective communication and problem resolution',
      'Work under pressure and goal achievement',
    ],
  },
} as const;
