import { useLanguage } from "../context/LanguageContext";
import { translations, skillGroups } from "../content";
import { useSectionReveal } from "../hooks/useSectionReveal";
import { SectionHeading } from "./SectionHeading";

export function Skills() {
  const { language } = useLanguage();
  const t = translations[language].skills;
  const ref = useSectionReveal<HTMLElement>();

  return (
    <section
      ref={ref}
      id='skills'
      className='mx-auto max-w-5xl scroll-mt-20 px-4 py-14 sm:px-6'
    >
      <SectionHeading overline={t.overline} title={t.title} />

      <div className='mt-8 grid gap-6 sm:grid-cols-2'>
        {skillGroups.map((group) => (
          <div
            key={group.title.en}
            data-reveal
            className='rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition-colors duration-200 hover:border-indigo-300 dark:border-white/10 dark:bg-white/5 dark:hover:border-indigo-500/40'
          >
            <h3 className='text-sm font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400'>
              {group.title[language]}
            </h3>
            <div className='mt-3 flex flex-wrap gap-2'>
              {group.skills.map((skill) => (
                <span
                  key={skill}
                  className='rounded-md bg-slate-100 px-2.5 py-1 text-sm font-medium text-slate-700 dark:bg-white/10 dark:text-slate-200'
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
