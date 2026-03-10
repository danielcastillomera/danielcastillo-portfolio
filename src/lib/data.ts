/* ═══════════════════════════════════════════════════════════════
   PORTFOLIO DATA — Single source of truth
   ═══════════════════════════════════════════════════════════════ */

export const PERSONAL = {
  name: 'Daniel Fernando Castillo Mera',
  shortName: 'Daniel Castillo',
  role: 'Desarrollador Full-Stack Junior',
  university: 'Universidad de Guayaquil',
  career: 'Ingeniería en Software',
  semester: '6to de 10 semestres',
  location: 'Ecuador',
  whatsapp: 'https://wa.me/593981076185',
  github: 'https://github.com/danielcastillomera',
  email: 'danielfcastillom@gmail.com',
  bio: 'Estudiante de Ingeniería en Software con enfoque en el desarrollo de sistemas empresariales robustos. Apasionado por construir soluciones que resuelvan problemas reales con tecnologías modernas, código limpio y estándares profesionales.',
  heroTagline: 'Construyo sistemas empresariales que funcionan.',
  heroSubtitle:
    'Desde dashboards multi-tenant hasta facturación electrónica SRI — desarrollo software con estándares de industria.',
} as const;

export const NAV_LINKS = [
  { href: '#inicio', label: 'Inicio' },
  { href: '#sobre-mi', label: 'Sobre mí' },
  { href: '#proyectos', label: 'Proyectos' },
  { href: '#habilidades', label: 'Habilidades' },
  { href: '#contacto', label: 'Contacto' },
] as const;

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
}

export const PROJECTS: Project[] = [
  {
    id: 'dashboard-enterprise',
    title: 'Dashboard Enterprise',
    version: 'v2.5.0',
    status: 'En desarrollo',
    description:
      'Sistema de gestión empresarial multi-tenant con facturación electrónica SRI Ecuador. 10+ módulos interconectados, arquitectura profesional con seguridad RLS.',
    longDescription:
      'Dashboard empresarial completo diseñado para empresas ecuatorianas. Incluye gestión de clientes con validación de cédula/RUC, compras e inventario, ventas con selector inteligente de productos, pedidos online con estados, facturación electrónica cumpliendo normativa SRI (XML v2.1.0, clave de acceso de 49 dígitos, Módulo 11), generación de PDF RIDE profesional, email transaccional automático, reportes con exportación CSV/PDF, y panel de control con KPIs en tiempo real.',
    techStack: [
      'Next.js 16',
      'TypeScript',
      'Tailwind CSS 4',
      'Supabase',
      'Prisma ORM',
      'PostgreSQL',
      'Vercel',
      'Resend',
      'React PDF',
      'Zod',
    ],
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
      {
        label: 'Repositorio',
        url: 'https://github.com/danielcastillomera/dashboard-enterprise',
        icon: 'github',
      },
      {
        label: 'Demo en vivo',
        url: 'https://dashboard-enterprise-kappa.vercel.app',
        icon: 'demo',
      },
    ],
    highlight: true,
    type: 'individual',
  },
  {
    id: 'proyecto-unificado',
    title: 'Proyecto Unificado POE',
    version: 'v1.0',
    status: 'En desarrollo',
    description:
      'Proyecto final grupal para la materia de POE (Programación Orientada a Eventos). Desarrollo colaborativo aplicando metodologías de trabajo en equipo y buenas prácticas de ingeniería de software.',
    longDescription:
      'Proyecto académico desarrollado en equipo como trabajo final de la materia de Programación Orientada a Eventos. Aplicación de principios de ingeniería de software, trabajo colaborativo con control de versiones, y diseño orientado a eventos para la construcción de una solución funcional.',
    techStack: ['Desarrollo en equipo', 'Control de versiones', 'Programación Orientada a Eventos'],
    features: [
      'Proyecto grupal colaborativo',
      'Aplicación de POE (Programación Orientada a Eventos)',
      'Trabajo final de materia universitaria',
      'Control de versiones con Git/GitHub',
    ],
    links: [
      {
        label: 'Repositorio',
        url: 'https://github.com/danielcastillomera/PROYECTO-UNIFICADO-AVANCE',
        icon: 'github',
      },
    ],
    highlight: false,
    type: 'grupal',
  },
];

export interface SkillCategory {
  name: string;
  skills: { name: string; level: number }[];
}

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    name: 'Frontend',
    skills: [
      { name: 'React / Next.js', level: 80 },
      { name: 'TypeScript', level: 75 },
      { name: 'Tailwind CSS', level: 85 },
      { name: 'HTML5 / CSS3', level: 90 },
      { name: 'Responsive Design', level: 85 },
    ],
  },
  {
    name: 'Backend',
    skills: [
      { name: 'Next.js API Routes', level: 75 },
      { name: 'Node.js', level: 70 },
      { name: 'Prisma ORM', level: 75 },
      { name: 'REST APIs', level: 80 },
      { name: 'Zod Validation', level: 70 },
    ],
  },
  {
    name: 'Base de Datos & Cloud',
    skills: [
      { name: 'Supabase / PostgreSQL', level: 80 },
      { name: 'Supabase Auth & RLS', level: 75 },
      { name: 'Vercel Deployment', level: 80 },
      { name: 'Git / GitHub', level: 85 },
    ],
  },
  {
    name: 'Herramientas & Metodologías',
    skills: [
      { name: 'VS Code', level: 90 },
      { name: 'Estándares de código', level: 80 },
      { name: 'Seguridad web (headers, CSP)', level: 70 },
      { name: 'WCAG Accesibilidad', level: 65 },
    ],
  },
];

export const TECH_MARQUEE = [
  'Next.js',
  'TypeScript',
  'React',
  'Tailwind CSS',
  'Supabase',
  'PostgreSQL',
  'Prisma',
  'Vercel',
  'Node.js',
  'Git',
  'Resend',
  'Zod',
  'REST API',
  'HTML5',
  'CSS3',
  'JavaScript',
];

export const EDUCATION = {
  institution: 'Universidad de Guayaquil',
  degree: 'Ingeniería en Software',
  progress: '6to semestre de 10',
  period: '2023 — Presente',
} as const;
