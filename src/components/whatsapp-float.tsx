'use client';
import { PERSONAL } from '@/lib/data';
import { WhatsAppIcon } from './icons';

/* WhatsAppFloat v8.0.0 — siempre visible en todos los dispositivos */
export default function WhatsAppFloat() {
  return (
    <a
      href={PERSONAL.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-white shadow-2xl shadow-green-500/30 transition-all duration-300 hover:bg-green-400 hover:scale-110 active:scale-95"
      aria-label="Contactar por WhatsApp"
      title="Escríbeme por WhatsApp"
    >
      <WhatsAppIcon className="w-7 h-7" />
      <span className="absolute inset-0 rounded-full bg-green-400 animate-ping opacity-20" aria-hidden="true" />
    </a>
  );
}
