'use client';

import { PERSONAL } from '@/lib/data';
import { useReveal } from '@/lib/use-reveal';

export default function Contact() {
  const { ref: sectionRef, isVisible } = useReveal();

  return (
    <section
      id="contacto"
      className="relative py-24 sm:py-32 overflow-hidden"
      aria-labelledby="contact-heading"
    >
      {/* Background */}
      <div className="absolute inset-0" aria-hidden="true">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-amber-500/3 to-transparent" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full bg-amber-500/5 blur-[150px]" />
      </div>

      <div
        ref={sectionRef}
        className={`relative mx-auto max-w-4xl px-6 lg:px-8 text-center transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        {/* Section header */}
        <span className="text-xs font-bold uppercase tracking-[0.2em] text-amber-500">
          Hablemos
        </span>
        <h2
          id="contact-heading"
          className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl"
          style={{ fontFamily: 'var(--font-display)' }}
        >
          ¿Tienes un proyecto en mente?
        </h2>
        <p className="mt-4 text-lg text-navy-300 max-w-2xl mx-auto">
          Estoy disponible para colaboraciones, proyectos freelance, y oportunidades profesionales.
          Escríbeme directamente por WhatsApp o encuéntrame en GitHub.
        </p>

        {/* Contact cards */}
        <div className="mt-12 grid gap-4 sm:grid-cols-3">
          {/* WhatsApp — Primary CTA */}
          <a
            href={PERSONAL.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="group glass rounded-xl p-6 card-glow flex flex-col items-center gap-3 transition-all hover:border-green-500/30 hover:bg-green-500/5 sm:col-span-1"
            aria-label="Enviar mensaje por WhatsApp"
          >
            {/* WhatsApp Logo SVG — 2024/2025/2026 brand mark */}
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-green-500/10 text-green-400 transition-all group-hover:bg-green-500/20 group-hover:scale-110">
              <svg
                className="w-7 h-7"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
            </div>
            <div>
              <h3 className="text-base font-bold text-white">WhatsApp</h3>
              <p className="text-xs text-navy-400 mt-0.5">Mensaje directo</p>
            </div>
          </a>

          {/* GitHub */}
          <a
            href={PERSONAL.github}
            target="_blank"
            rel="noopener noreferrer"
            className="group glass rounded-xl p-6 card-glow flex flex-col items-center gap-3 transition-all hover:border-navy-400/30 sm:col-span-1"
            aria-label="Visitar perfil de GitHub"
          >
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white/5 text-white transition-all group-hover:bg-white/10 group-hover:scale-110">
              <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
              </svg>
            </div>
            <div>
              <h3 className="text-base font-bold text-white">GitHub</h3>
              <p className="text-xs text-navy-400 mt-0.5">@danielcastillomera</p>
            </div>
          </a>

          {/* Email */}
          <a
            href={`mailto:${PERSONAL.email}`}
            className="group glass rounded-xl p-6 card-glow flex flex-col items-center gap-3 transition-all hover:border-amber-500/30 hover:bg-amber-500/5 sm:col-span-1"
            aria-label="Enviar email"
          >
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-amber-500/10 text-amber-400 transition-all group-hover:bg-amber-500/20 group-hover:scale-110">
              <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
              </svg>
            </div>
            <div>
              <h3 className="text-base font-bold text-white">Email</h3>
              <p className="text-xs text-navy-400 mt-0.5">{PERSONAL.email}</p>
            </div>
          </a>
        </div>

        {/* Big WhatsApp CTA button */}
        <div className="mt-10">
          <a
            href={PERSONAL.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 rounded-2xl bg-green-600 px-8 py-4 text-lg font-bold text-white shadow-2xl shadow-green-600/20 transition-all hover:bg-green-500 hover:shadow-green-500/30 hover:-translate-y-1 active:scale-95"
            aria-label="Escríbeme por WhatsApp"
          >
            {/* WhatsApp icon */}
            <svg
              className="w-6 h-6 transition-transform group-hover:scale-110"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Escríbeme por WhatsApp
            <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
