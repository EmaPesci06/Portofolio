import { useLanguage } from "../context/LanguageContext";
import { translations, skillGroups } from "../content";

export function Skills() {
  const { language } = useLanguage();
  const t = translations[language].skills;

  return (
    <section className='mx-auto max-w-5xl px-4 py-12 sm:px-6'>
      <h2 className='text-2xl font-bold tracking-tight sm:text-3xl'>{t.title}</h2>

      <div className='mt-8 grid gap-6 sm:grid-cols-2'>
        {skillGroups.map((group) => (
          <div
            key={group.title.en}
            className='rounded-xl border border-zinc-200 bg-white p-5 dark:border-zinc-800 dark:bg-zinc-900'
          >
            <h3 className='text-sm font-semibold uppercase tracking-wide text-zinc-500 dark:text-zinc-400'>
              {group.title[language]}
            </h3>
            <div className='mt-3 flex flex-wrap gap-2'>
              {group.skills.map((skill) => (
                <span
                  key={skill}
                  className='rounded-md bg-zinc-100 px-2.5 py-1 text-sm font-medium text-zinc-700 dark:bg-zinc-800 dark:text-zinc-200'
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
