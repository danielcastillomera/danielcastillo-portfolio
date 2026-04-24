'use client';
import { SKILL_CATEGORIES, EXPLORATORY_SKILLS } from '@/lib/data';
import { useReveal } from '@/lib/use-reveal';
import { useT } from '@/lib/i18n-provider';

const ICONS = [
  <svg key="0" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z" /></svg>,
  <svg key="1" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75a4.5 4.5 0 01-4.884 4.484c-1.076-.091-2.264.071-2.95.904l-7.152 8.684a2.548 2.548 0 11-3.586-3.586l8.684-7.152c.833-.686.995-1.874.904-2.95a4.5 4.5 0 016.336-4.486l-3.276 3.276a3.004 3.004 0 002.25 2.25l3.276-3.276c.256.565.398 1.192.398 1.852z" /></svg>,
  <svg key="2" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375" /></svg>,
  <svg key="3" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" /></svg>,
  <svg key="4" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z" /></svg>,
  <svg key="5" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" /></svg>,
];

export default function Skills() {
  const { ref: sectionRef, isVisible } = useReveal();
  const t = useT();
  const catNames = [t.skills.categories.frontend, t.skills.categories.backend, t.skills.categories.database, t.skills.categories.tools, t.skills.categories.marketing, t.skills.categories.uiux];

  return (
    <section id="habilidades" className="relative py-24 sm:py-32 overflow-hidden" aria-labelledby="skills-heading">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-50/50 dark:via-navy-900/40 to-transparent" aria-hidden="true" />
      <div ref={sectionRef} className={`relative mx-auto max-w-7xl px-6 lg:px-8 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="mb-16">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-accent-500">{t.skills.sectionLabel}</span>
          <h2 id="skills-heading" className="mt-3 text-3xl font-bold tracking-tight section-title sm:text-4xl" style={{ fontFamily: 'var(--font-display)' }}>{t.skills.title}</h2>
          <div className="mt-3 h-1 w-16 rounded-full bg-gradient-to-r from-accent-500 to-accent-600" aria-hidden="true" />
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SKILL_CATEGORIES.map((cat, catIdx) => (
            <div key={cat.name} className="glass rounded-xl p-6 card-glow"
              style={{ opacity: isVisible ? 1 : 0, transform: isVisible ? 'translateY(0)' : 'translateY(20px)', transition: `opacity 0.6s ease ${catIdx*100}ms, transform 0.6s ease ${catIdx*100}ms` }}>
              <div className="flex items-center gap-3 mb-5">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent-500/10 text-accent-500 shrink-0" aria-hidden="true">{ICONS[catIdx]}</div>
                <h3 className="text-sm font-bold text-gray-900 dark:text-white leading-tight">{catNames[catIdx]}</h3>
              </div>
              <div className="space-y-4" role="list">
                {cat.skills.map((skill, si) => (
                  <div key={skill.name} role="listitem">
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-sm font-medium text-gray-900 dark:text-gray-100">{skill.name}</span>
                      <span className="text-xs font-mono text-gray-600 dark:text-gray-400">{skill.level}%</span>
                    </div>
                    <div className="h-2 w-full rounded-full bg-gray-100 dark:bg-navy-800/60 overflow-hidden" role="progressbar" aria-valuenow={skill.level} aria-valuemin={0} aria-valuemax={100}>
                      <div className="h-full rounded-full bg-gradient-to-r from-accent-500 to-accent-400 transition-all duration-1000 ease-out"
                        style={{ width: isVisible ? `${skill.level}%` : '0%', transitionDelay: `${catIdx*100+si*80}ms` }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        {/* Exploratory */}
        <div className="mt-10 glass rounded-xl p-6">
          <h3 className="text-sm font-bold text-accent-500 uppercase tracking-wider mb-5">📚 {t.skills.exploratory}</h3>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {EXPLORATORY_SKILLS.map(item => (
              <div key={item.name} className="flex items-start gap-2.5 rounded-lg border border-gray-100 dark:border-navy-700/50 bg-gray-50/60 dark:bg-navy-900/40 px-3 py-2.5">
                <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-accent-500/10">
                  {item.icon ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img src={item.icon} alt="" width={18} height={18} draggable={false} className="w-4 h-4 object-contain pointer-events-none select-none" loading="lazy" aria-hidden="true" onError={e => { (e.currentTarget as HTMLImageElement).style.display='none'; }} />
                  ) : (
                    <svg className="w-3.5 h-3.5 text-accent-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" /></svg>
                  )}
                </div>
                <div className="min-w-0">
                  <p className="text-xs font-semibold text-gray-900 dark:text-gray-100 leading-snug">{item.name}</p>
                  <p className="text-[10px] text-gray-600 dark:text-gray-400 mt-0.5 leading-snug">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
