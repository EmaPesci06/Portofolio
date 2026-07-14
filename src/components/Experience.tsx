import { useLanguage } from "../context/LanguageContext";
import { translations, experience } from "../content";
import { useSectionReveal } from "../hooks/useSectionReveal";
import { SectionHeading } from "./SectionHeading";

export function Experience() {
  const { language } = useLanguage();
  const t = translations[language].experience;
  const ref = useSectionReveal<HTMLElement>();

  return (
    <section
      ref={ref}
      id='experiencia'
      className='mx-auto max-w-5xl scroll-mt-20 px-4 py-14 sm:px-6'
    >
      <SectionHeading overline={t.overline} title={t.title} />

      <ol className='mt-8 space-y-8 border-l border-slate-200 pl-6 dark:border-white/10'>
        {experience.map((item) => (
          <li key={`${item.company}-${item.period.en}`} data-reveal className='relative'>
            <span className='absolute -left-[31px] top-1.5 h-2.5 w-2.5 rounded-full bg-gradient-to-r from-sky-500 to-violet-500 ring-4 ring-white dark:ring-slate-950' />
            <div className='flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between'>
              <h3 className='font-semibold'>
                {item.role[language]}
                <span className='text-slate-500 dark:text-slate-400'> · {item.company}</span>
              </h3>
              <span className='text-sm text-slate-500 dark:text-slate-400'>
                {item.period[language]}
              </span>
            </div>
            <p className='mt-1.5 text-sm text-slate-600 dark:text-slate-300'>
              {item.summary[language]}
            </p>
          </li>
        ))}
      </ol>
    </section>
  );
}
