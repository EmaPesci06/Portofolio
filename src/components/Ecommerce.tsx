import { useLanguage } from "../context/LanguageContext";
import { translations, livia } from "../content";

export function Ecommerce() {
  const { language } = useLanguage();
  const t = translations[language].ecommerce;

  return (
    <section id='ecommerce' className='scroll-mt-16 px-4 pb-16 sm:px-6 md:pb-24'>
      <div className='mx-auto flex max-w-6xl flex-col gap-6 rounded-xl border border-line bg-card p-6 sm:p-8 lg:flex-row lg:items-center lg:justify-between'>
        <div className='flex min-w-0 flex-col gap-3 lg:max-w-2xl'>
          <span className='font-mono text-xs uppercase tracking-[0.18em] text-cobalt'>{t.eyebrow}</span>
          <h2 className='font-display text-3xl font-extrabold tracking-tight'>{livia.title}</h2>
          <span className='font-mono text-xs text-muted'>{livia.kicker[language]}</span>
          <p className='leading-relaxed text-muted'>{livia.description[language]}</p>
        </div>
        <div className='flex flex-wrap gap-2 lg:max-w-xs lg:justify-end'>
          {livia.tags[language].map((tag) => (
            <span key={tag} className='rounded bg-cobalt-soft px-2 py-1 font-mono text-[11px] text-cobalt'>
              {tag}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
