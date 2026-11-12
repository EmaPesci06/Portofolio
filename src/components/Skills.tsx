import { useLanguage } from "../context/LanguageContext";
import { translations, skillGroups } from "../content";

export function Skills() {
  const { language } = useLanguage();
  const t = translations[language].skills;

  return (
    <section id='stack' className='border-t border-line bg-card/40 px-5 py-16 sm:px-8 md:py-20'>
      <div className='mx-auto grid max-w-6xl grid-cols-1 gap-8 md:grid-cols-[11rem_1fr]'>
        <h2 className='font-display text-3xl font-bold tracking-tight'>{t.title}</h2>
        <dl className='flex flex-col gap-5'>
          {skillGroups.map((group) => (
            <div key={group.title.en} className='grid grid-cols-1 gap-2 sm:grid-cols-[13rem_1fr] sm:gap-6'>
              <dt className='font-mono text-xs uppercase tracking-[0.14em] text-muted sm:pt-1.5'>
                {group.title[language]}
              </dt>
              <dd className='flex flex-wrap gap-1.5'>
                {group.skills.map((skill) => (
                  <span key={skill} className='rounded border border-line bg-card px-2.5 py-1 text-sm'>
                    {skill}
                  </span>
                ))}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
