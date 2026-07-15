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
      className='scroll-mt-20 bg-surface-low px-6 py-16 md:py-28'
    >
      <div className='mx-auto max-w-7xl'>
        <SectionHeading title={t.title} accent='secondary' />

        <div className='relative mt-16 space-y-12 before:absolute before:left-[11px] before:top-0 before:h-full before:w-[2px] before:bg-outline-variant/30'>
          {experience.map((item, index) => (
            <div key={`${item.company}-${item.period.en}`} data-reveal className='relative pl-12'>
              <span
                className={`absolute left-0 top-1 z-10 h-6 w-6 rounded-full border-4 bg-background ${
                  index === 0 ? "border-primary" : "border-outline-variant"
                }`}
              />
              <div className='flex flex-col justify-between gap-4 md:flex-row md:items-start'>
                <div>
                  <h3 className='font-display text-2xl font-semibold text-on-surface'>
                    {item.role[language]}
                  </h3>
                  <span className='font-mono text-sm tracking-wider text-primary'>
                    {item.company} • {item.period[language]}
                  </span>
                </div>
                <p className='leading-relaxed text-on-surface-variant md:max-w-md'>
                  {item.summary[language]}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
