import { useLanguage } from "../context/LanguageContext";
import { translations, experience } from "../content";
import { SectionHeading } from "./SectionHeading";

export function Experience() {
  const { language } = useLanguage();
  const t = translations[language].experience;

  return (
    <section id='experiencia' className='scroll-mt-16 border-t border-line px-5 py-20 sm:px-8 md:py-28'>
      <div className='mx-auto max-w-6xl'>
        <SectionHeading eyebrow={t.eyebrow} title={t.title} />

        <ol className='mt-12 border-t border-line'>
          {experience.map((item) => (
            <li
              key={`${item.company}-${item.period.en}`}
              className='grid grid-cols-1 gap-2 border-b border-line py-6 md:grid-cols-[11rem_1fr_1.4fr] md:gap-8'
            >
              <span className='font-mono text-xs text-muted md:pt-1.5'>{item.period[language]}</span>
              <div>
                <h3 className='font-display text-xl font-bold tracking-tight'>{item.company}</h3>
                <span className='text-sm text-muted'>{item.role[language]}</span>
              </div>
              <p className='leading-relaxed text-ink/80'>{item.summary[language]}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
