import { useLanguage } from "../context/LanguageContext";
import { translations, experience } from "../content";
import { SectionHeading } from "./SectionHeading";

export function Experience() {
  const { language } = useLanguage();
  const t = translations[language].experience;

  return (
    <section id='experiencia' className='scroll-mt-16 border-t border-line bg-card px-4 py-16 sm:px-6 md:py-24'>
      <div className='mx-auto flex max-w-6xl flex-col gap-8'>
        <SectionHeading title={t.title} />
        <ol className='border-t border-line'>
          {experience.map((job) => (
            <li
              key={`${job.company}-${job.period.en}`}
              className='grid grid-cols-1 gap-2 border-b border-line py-6 md:grid-cols-[10.5rem_15rem_1fr] md:gap-8'
            >
              <span className='font-mono text-xs text-muted md:pt-1'>{job.period[language]}</span>
              <div className='flex flex-col'>
                <h3 className='font-display text-lg font-bold tracking-tight'>{job.company}</h3>
                <span className='text-sm text-muted'>{job.role[language]}</span>
              </div>
              <div className='min-w-0'>
                {job.summary[language] && <p className='leading-relaxed'>{job.summary[language]}</p>}
                {job.bullets[language].length > 0 && (
                  <ul className='mt-2 flex list-disc flex-col gap-1.5 pl-5 text-sm leading-relaxed text-muted'>
                    {job.bullets[language].map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                )}
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
