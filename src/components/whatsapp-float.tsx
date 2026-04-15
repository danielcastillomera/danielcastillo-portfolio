'use client';

import { useState, useEffect } from 'react';
import { PERSONAL } from '@/lib/data';
import { WhatsAppIcon } from './icons';

export default function WhatsAppFloat() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <a href={PERSONAL.whatsapp} target="_blank" rel="noopener noreferrer"
      className={`fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-white shadow-2xl shadow-green-500/30 transition-all duration-500 hover:bg-green-400 hover:scale-110 hover:shadow-green-400/40 active:scale-95 ${visible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0 pointer-events-none'}`}
      aria-label="Contactar por WhatsApp"
      title="Escríbeme por WhatsApp"
    >
      <WhatsAppIcon className="w-7 h-7" />
      <span className="absolute inset-0 rounded-full bg-green-400 animate-ping opacity-20" aria-hidden="true" />
    </a>
  );
}
