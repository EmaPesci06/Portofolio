import { useLanguage } from "../context/LanguageContext";
import { translations, stackGroups } from "../content";

export function Stack() {
  const { language } = useLanguage();
  const t = translations[language].stack;

  return (
    <section id='stack' className='px-4 pb-16 sm:px-6 md:pb-24'>
      <div className='mx-auto flex max-w-6xl flex-col gap-5 rounded-xl border border-line bg-card p-6 sm:p-8'>
        <h2 className='font-display text-2xl font-extrabold tracking-tight sm:text-3xl'>{t.title}</h2>
        <dl className='flex flex-col gap-4'>
          {stackGroups.map((group) => (
            <div key={group.title.en} className='grid grid-cols-1 gap-2 sm:grid-cols-[10rem_1fr] sm:items-baseline sm:gap-4'>
              <dt className='font-mono text-[11px] uppercase tracking-[0.14em] text-muted'>{group.title[language]}</dt>
              <dd className='flex flex-wrap gap-1.5'>
                {group.skills.map((skill) => (
                  <span key={skill} className='rounded border border-line px-2.5 py-1 text-sm'>
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
