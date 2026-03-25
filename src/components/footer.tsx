'use client';

import { PERSONAL } from '@/lib/data';
import { WhatsAppIcon, GitHubIcon, LinkedInIcon, InstagramIcon, FacebookIcon, EmailIcon } from './icons';
import ProtectedImage from './protected-image';

export default function Footer() {
  const year = new Date().getFullYear();

  const socials = [
    { icon: <WhatsAppIcon className="w-4 h-4" />, url: PERSONAL.whatsapp, label: 'WhatsApp', color: 'hover:text-green-500 hover:bg-green-50 dark:hover:bg-green-500/10' },
    { icon: <GitHubIcon className="w-4 h-4" />, url: PERSONAL.github, label: 'GitHub', color: 'hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-white/5' },
    { icon: <LinkedInIcon className="w-4 h-4" />, url: PERSONAL.linkedin, label: 'LinkedIn', color: 'hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-500/10' },
    { icon: <InstagramIcon className="w-4 h-4" />, url: PERSONAL.instagram, label: 'Instagram', color: 'hover:text-pink-500 hover:bg-pink-50 dark:hover:bg-pink-500/10' },
    { icon: <FacebookIcon className="w-4 h-4" />, url: PERSONAL.facebook, label: 'Facebook', color: 'hover:text-blue-700 dark:hover:text-blue-500 hover:bg-blue-50 dark:hover:bg-blue-500/10' },
    { icon: <EmailIcon className="w-4 h-4" />, url: `mailto:${PERSONAL.email}`, label: 'Email', color: 'hover:text-accent-500 hover:bg-amber-50 dark:hover:bg-accent-500/10' },
  ];

  return (
    <footer className="relative border-t border-gray-200 dark:border-navy-800/50 bg-gray-50 dark:bg-navy-950" role="contentinfo" aria-label="Pie de página">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="flex flex-col items-center gap-6 sm:flex-row sm:justify-between">
          <div className="flex flex-col items-center sm:items-start gap-2">
            <a href="#inicio" className="flex items-center gap-2.5 text-base font-bold text-gray-900 dark:text-white hover:opacity-80 transition-opacity" aria-label="Ir al inicio">
              <div className="h-8 w-8 rounded-full overflow-hidden ring-1 ring-accent-500/20 shrink-0">
                <ProtectedImage src={PERSONAL.profileImage} alt={PERSONAL.name} width={32} height={32} className="h-full w-full object-cover" />
              </div>
              {PERSONAL.name}
            </a>
            <p className="text-xs text-gray-700 dark:text-white text-center sm:text-left">{PERSONAL.role} · {PERSONAL.university}</p>
          </div>

          <div className="flex items-center gap-2">
            {socials.map((s) => (
              <a key={s.label} href={s.url} target="_blank" rel="noopener noreferrer" className={`flex h-9 w-9 items-center justify-center rounded-lg text-gray-500 dark:text-navy-400 transition-all ${s.color}`} aria-label={s.label}>
                {s.icon}
              </a>
            ))}
          </div>
        </div>

        <div className="my-8 h-px bg-gray-200 dark:bg-navy-800/50" aria-hidden="true" />

        <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-between">
          <p className="text-xs text-gray-800 dark:text-white text-center sm:text-left">
            &copy; 2024–{year} {PERSONAL.name}. Todos los derechos reservados.
          </p>
          <p className="text-xs text-gray-700 dark:text-gray-300 text-center sm:text-right max-w-sm">
            Queda estrictamente prohibida la clonación, copia o distribución de este proyecto sin previo permiso escrito del titular.
          </p>
        </div>
      </div>
    </footer>
  );
}
