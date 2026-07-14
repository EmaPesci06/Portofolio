import { useLanguage } from "../context/LanguageContext";
import { translations, experience } from "../content";

export function Experience() {
  const { language } = useLanguage();
  const t = translations[language].experience;

  return (
    <section id='experiencia' className='mx-auto max-w-5xl scroll-mt-20 px-4 py-12 sm:px-6'>
      <h2 className='text-2xl font-bold tracking-tight sm:text-3xl'>{t.title}</h2>

      <ol className='mt-8 space-y-8 border-l border-zinc-200 pl-6 dark:border-zinc-800'>
        {experience.map((item) => (
          <li key={`${item.company}-${item.period.en}`} className='relative'>
            <span className='absolute -left-[31px] top-1.5 h-2.5 w-2.5 rounded-full bg-blue-600 ring-4 ring-white dark:ring-zinc-950' />
            <div className='flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between'>
              <h3 className='font-semibold'>
                {item.role[language]}
                <span className='text-zinc-500 dark:text-zinc-400'> · {item.company}</span>
              </h3>
              <span className='text-sm text-zinc-500 dark:text-zinc-400'>
                {item.period[language]}
              </span>
            </div>
            <p className='mt-1.5 text-sm text-zinc-600 dark:text-zinc-300'>
              {item.summary[language]}
            </p>
          </li>
        ))}
      </ol>
    </section>
  );
}
