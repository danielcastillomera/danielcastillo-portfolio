/**
 * Portfolio Data — Single Source of Truth
 * Daniel Fernando Castillo Mera
 */

export const PERSONAL = {
  name: 'Daniel Fernando Castillo Mera',
  role: 'Junior Full Stack Engineer / Developer',
  university: 'Universidad de Guayaquil',
  career: 'Ingeniería en Software',
  semester: '6to de 10 semestres',
  location: 'Ecuador',
  nationality: 'Ecuatoriana',
  age: 21,
  whatsapp: 'https://wa.me/593981076185',
  github: 'https://github.com/danielcastillomera',
  linkedin: 'https://www.linkedin.com/in/daniel-fernando-castillo-mera-461b8420a',
  instagram: 'https://www.instagram.com/danielcastillomera',
  facebook: 'https://www.facebook.com/Daniel288215',
  email: 'danielfcastillom@gmail.com',
  profileImage: '/profile.png',
  bio: 'Ingeniero de Software en formación con enfoque en el desarrollo de sistemas empresariales robustos. Apasionado por construir soluciones digitales que resuelvan problemas reales con tecnologías modernas, código limpio y estándares profesionales de la industria.',
  heroTagline: 'Diseño y desarrollo soluciones digitales que impulsan tu negocio.',
  heroSubtitle: 'Desde dashboards multi-tenant hasta facturación electrónica SRI — desarrollo software con estándares de industria, listo para contratación inmediata.',
} as const;

export const NAV_LINKS = [
  { href: '#inicio', label: 'Inicio' },
  { href: '#sobre-mi', label: 'Sobre mí' },
  { href: '#servicios', label: 'Servicios' },
  { href: '#proyectos', label: 'Proyectos' },
  { href: '#habilidades', label: 'Habilidades' },
  { href: '#contacto', label: 'Contacto' },
] as const;

/* ═══ SERVICES ═══ */
export interface Service { title: string; items: string[]; }
export const SERVICE_CATEGORIES: { title: string; services: Service[] }[] = [
  {
    title: 'Soluciones Digitales (Software y Aplicaciones)',
    services: [
      { title: 'Sistematización y Automatización de Procesos', items: ['Flujos de trabajo automatizados', 'Integración de sistemas', 'Reducción de tareas manuales'] },
      { title: 'Dashboards y Paneles de Control', items: ['KPIs en tiempo real', 'Reportes y analíticas', 'Visualización de datos'] },
      { title: 'Sistemas de Facturación', items: ['Facturación electrónica SRI Ecuador', 'Generación de PDF/XML', 'Cumplimiento normativo'] },
      { title: 'Páginas Web Profesionales', items: ['Landing pages', 'Portafolios', 'Sitios corporativos', 'SEO optimizado'] },
      { title: 'E-Commerce', items: ['Tiendas online', 'Catálogos de productos', 'Pasarelas de pago', 'Gestión de pedidos'] },
      { title: 'SaaS (Software como Servicio)', items: ['Aplicaciones multi-tenant', 'Suscripciones', 'Escalabilidad cloud'] },
      { title: 'Software a la Medida', items: ['Análisis de requerimientos', 'Desarrollo personalizado', 'Soluciones específicas para tu negocio'] },
      { title: 'Aplicaciones Web Progresivas (PWA)', items: ['Funcionamiento offline', 'Instalable en dispositivos', 'Experiencia nativa'] },
      { title: 'APIs y Microservicios', items: ['REST APIs', 'Integración con terceros', 'Arquitectura escalable'] },
      { title: 'Sistemas de Gestión (ERP/CRM)', items: ['Gestión de inventario', 'Gestión de clientes', 'Flujos de ventas y compras'] },
    ],
  },
  {
    title: 'Soluciones Técnicas (Infraestructura y TI)',
    services: [
      { title: 'Reparación y Mantenimiento de PC y Laptops', items: ['Diagnóstico de hardware', 'Limpieza y optimización', 'Instalación de software'] },
      { title: 'Soporte Técnico', items: ['Resolución de problemas', 'Configuración de equipos', 'Asistencia remota'] },
      { title: 'Redes y Conectividad', items: ['Configuración de redes LAN/WiFi', 'Seguridad de red', 'Cableado estructurado'] },
      { title: 'Respaldo y Recuperación de Datos', items: ['Copias de seguridad', 'Recuperación de archivos', 'Migración de datos'] },
      { title: 'Consultoría TI', items: ['Evaluación de infraestructura', 'Recomendaciones tecnológicas', 'Optimización de costos'] },
    ],
  },
];

/* ═══ TECH STACK — CDN icon slugs from cdn.simpleicons.org ═══ */
export interface TechItem {
  name: string;
  version?: string;
  iconSlug: string;
  category: 'frontend' | 'backend' | 'database' | 'tools' | 'language';
}

export const TECH_STACK: TechItem[] = [
  { name: 'TypeScript', version: '5.9', iconSlug: 'typescript', category: 'language' },
  { name: 'JavaScript', iconSlug: 'javascript', category: 'language' },
  { name: 'HTML5', iconSlug: 'html5', category: 'language' },
  { name: 'CSS3', iconSlug: 'css3', category: 'language' },
  { name: 'Python', iconSlug: 'python', category: 'language' },
  { name: 'Java', iconSlug: 'java', category: 'language' },
  { name: 'React', version: '19', iconSlug: 'react', category: 'frontend' },
  { name: 'Next.js', version: '16', iconSlug: 'nextdotjs', category: 'frontend' },
  { name: 'Tailwind CSS', version: '4', iconSlug: 'tailwindcss', category: 'frontend' },
  { name: 'Recharts', version: '3', iconSlug: 'chartdotjs', category: 'frontend' },
  { name: 'Node.js', version: '18+', iconSlug: 'nodedotjs', category: 'backend' },
  { name: 'Prisma', version: '5', iconSlug: 'prisma', category: 'backend' },
  { name: 'Zod', version: '4', iconSlug: 'zod', category: 'backend' },
  { name: 'Supabase', iconSlug: 'supabase', category: 'database' },
  { name: 'PostgreSQL', iconSlug: 'postgresql', category: 'database' },
  { name: 'Vercel', iconSlug: 'vercel', category: 'database' },
  { name: 'Git', iconSlug: 'git', category: 'tools' },
  { name: 'GitHub', iconSlug: 'github', category: 'tools' },
  { name: 'Visual Studio Code', iconSlug: 'visualstudiocode', category: 'tools' },
  { name: 'npm', iconSlug: 'npm', category: 'tools' },
  { name: 'ESLint', iconSlug: 'eslint', category: 'tools' },
];

export const TECH_MARQUEE = [
  'Next.js 16', 'TypeScript 5.9', 'React 19', 'Tailwind CSS 4', 'Supabase',
  'PostgreSQL', 'Prisma 5', 'Vercel', 'Node.js', 'Git',
  'Resend', 'Zod 4', 'REST API', 'HTML5', 'CSS3', 'JavaScript',
];

/* ═══ PROJECTS ═══ */
export interface Project {
  id: string;
  title: string;
  version: string;
  status: 'En desarrollo' | 'Completado' | 'MVP';
  description: string;
  longDescription: string;
  techStack: string[];
  features: string[];
  links: { label: string; url: string; icon: 'github' | 'external' | 'demo' }[];
  highlight: boolean;
  type: 'individual' | 'grupal';
  githubApiUrl?: string;
}

export const PROJECTS: Project[] = [
  {
    id: 'dashboard-enterprise',
    title: 'Dashboard Enterprise',
    version: 'v3.1.0',
    status: 'En desarrollo',
    description: 'Sistema de gestión empresarial multi-tenant con facturación electrónica SRI Ecuador. 10+ módulos interconectados, arquitectura profesional con seguridad RLS.',
    longDescription: 'Dashboard empresarial completo diseñado para empresas ecuatorianas. Incluye gestión de clientes con validación de cédula/RUC, compras e inventario, ventas con selector inteligente de productos, pedidos online con estados, facturación electrónica cumpliendo normativa SRI (XML v2.1.0, clave de acceso de 49 dígitos, Módulo 11), generación de PDF RIDE profesional, email transaccional automático, reportes con exportación CSV/PDF/XLSX, y panel de control con KPIs en tiempo real.',
    techStack: ['Next.js 16', 'TypeScript 5.9', 'Tailwind CSS 4', 'Supabase', 'Prisma ORM 5', 'PostgreSQL', 'Vercel', 'Resend', 'React PDF', 'Zod 4', 'Recharts 3'],
    features: [
      'Arquitectura multi-tenant con aislamiento por tenant',
      'Facturación electrónica SRI Ecuador (XML v2.1.0)',
      'Generación de PDF RIDE profesional',
      'Validación de cédula/RUC/pasaporte Ecuador',
      'Row Level Security (RLS) en toda la base de datos',
      'Email transaccional automático vía Resend',
      'Panel de control con KPIs y gráficos en tiempo real',
      'Gestión completa: Clientes, Compras, Ventas, Pedidos, Inventario',
      'Headers de seguridad HTTP (HSTS, CSP, X-Frame-Options)',
      'Responsive mobile-first + Cross-browser compatible',
    ],
    links: [
      { label: 'Repositorio', url: 'https://github.com/danielcastillomera/dashboard-enterprise', icon: 'github' },
    ],
    highlight: true,
    type: 'individual',
    githubApiUrl: 'https://raw.githubusercontent.com/danielcastillomera/dashboard-enterprise/main/package.json',
  },
  {
    id: 'proyecto-unificado',
    title: 'Proyecto Unificado POE',
    version: 'v1.0',
    status: 'En desarrollo',
    description: 'Proyecto final grupal para la materia de POE (Programación Orientada a Eventos). Desarrollo colaborativo aplicando metodologías de trabajo en equipo.',
    longDescription: 'Proyecto académico desarrollado en equipo como trabajo final de la materia de Programación Orientada a Eventos en la Universidad de Guayaquil.',
    techStack: ['Desarrollo en equipo', 'Control de versiones', 'Programación Orientada a Eventos'],
    features: ['Proyecto grupal colaborativo', 'Aplicación de POE', 'Trabajo final de materia universitaria', 'Control de versiones con Git/GitHub'],
    links: [{ label: 'Repositorio', url: 'https://github.com/danielcastillomera/PROYECTO-UNIFICADO-AVANCE', icon: 'github' }],
    highlight: false,
    type: 'grupal',
  },
];

export interface SkillCategory { name: string; skills: { name: string; level: number }[]; }

export const SKILL_CATEGORIES: SkillCategory[] = [
  { name: 'Frontend', skills: [{ name: 'React / Next.js', level: 80 }, { name: 'TypeScript', level: 75 }, { name: 'Tailwind CSS', level: 85 }, { name: 'HTML5 / CSS3', level: 90 }, { name: 'Responsive Design', level: 85 }] },
  { name: 'Backend', skills: [{ name: 'Next.js API Routes', level: 75 }, { name: 'Node.js', level: 70 }, { name: 'Prisma ORM', level: 75 }, { name: 'REST APIs', level: 80 }, { name: 'Zod Validation', level: 70 }] },
  { name: 'Base de Datos & Cloud', skills: [{ name: 'Supabase / PostgreSQL', level: 80 }, { name: 'Supabase Auth & RLS', level: 75 }, { name: 'Vercel Deployment', level: 80 }, { name: 'Git / GitHub', level: 85 }] },
  { name: 'Herramientas & Metodologías', skills: [{ name: 'VS Code', level: 90 }, { name: 'Estándares de código', level: 80 }, { name: 'Seguridad web (OWASP)', level: 70 }, { name: 'WCAG Accesibilidad', level: 65 }] },
];

export const EDUCATION = {
  institution: 'Universidad de Guayaquil',
  degree: 'Ingeniería en Software',
  progress: '6to semestre de 10',
  period: '2023 — Presente',
} as const;
