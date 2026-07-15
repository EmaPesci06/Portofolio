import { useLanguage } from "../context/LanguageContext";
import { translations, skillGroups } from "../content";
import { useSectionReveal } from "../hooks/useSectionReveal";
import { SectionHeading } from "./SectionHeading";

const accentText = {
  primary: "text-primary",
  secondary: "text-secondary",
  tertiary: "text-tertiary",
};

export function Skills() {
  const { language } = useLanguage();
  const t = translations[language].skills;
  const ref = useSectionReveal<HTMLElement>();

  return (
    <section ref={ref} id='skills' className='scroll-mt-20 bg-surface-lowest px-6 py-16 md:py-28'>
      <div className='mx-auto max-w-7xl'>
        <SectionHeading title={t.title} />

        <div className='mt-16 grid grid-cols-1 gap-6 md:grid-cols-3 lg:grid-cols-5'>
          {skillGroups.map((group) => (
            <div key={group.title.en} data-reveal className='glass-surface flex flex-col gap-4 rounded-2xl p-6'>
              <h3 className={`font-mono text-sm uppercase tracking-wider ${accentText[group.accent]}`}>
                {group.title[language]}
              </h3>
              <div className='flex flex-wrap gap-2'>
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className='rounded-full border border-outline-variant/50 bg-surface-high px-3 py-1 text-sm font-medium'
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
