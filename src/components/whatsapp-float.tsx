'use client';
import { PERSONAL } from '@/lib/data';
import { handleSecureRedirect } from '@/lib/security';
import { WhatsAppIcon } from './icons';

export default function WhatsAppFloat() {
  return (
    <button
      type="button"
      onClick={() => handleSecureRedirect(PERSONAL.whatsappB64, 'blank')}
      className="fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-white shadow-2xl shadow-green-500/30 transition-all duration-300 hover:bg-green-400 hover:scale-110 active:scale-95"
      aria-label="Contactar por WhatsApp"
      title="Escríbeme por WhatsApp"
    >
      <WhatsAppIcon className="w-7 h-7" />
      <span className="absolute inset-0 rounded-full bg-green-400 animate-ping opacity-20" aria-hidden="true" />
    </button>
  );
}
