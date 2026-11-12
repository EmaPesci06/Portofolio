import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";
import { useLanguage } from "../context/LanguageContext";
import { translations, aiProjects, certifications } from "../content";
import { SectionHeading } from "./SectionHeading";

export function AiAgents() {
  const { language } = useLanguage();
  const t = translations[language].agents;

  return (
    <section id='agentes' className='scroll-mt-16 px-5 py-20 sm:px-8 md:py-28'>
      <div className='mx-auto max-w-6xl'>
        <SectionHeading eyebrow={t.eyebrow} title={t.title} subtitle={t.subtitle} />

        <div className='mt-12 grid grid-cols-1 gap-6 lg:grid-cols-2'>
          {aiProjects.map((project) => (
            <article
              key={project.title.en}
              className='flex flex-col gap-5 rounded-xl border border-line bg-card p-6 sm:p-8'
            >
              <div className='flex items-start justify-between gap-4'>
                <h3 className='font-display text-2xl font-bold tracking-tight'>
                  {project.title[language]}
                </h3>
                <span className='font-mono text-xs text-muted'>{project.year}</span>
              </div>
              <p className='text-muted'>{project.description[language]}</p>

              <div>
                <span className='font-mono text-[11px] uppercase tracking-[0.16em] text-muted'>
                  {t.howItWorks}
                </span>
                <ol className='mt-3 flex flex-col border-l-2 border-cobalt-soft'>
                  {project.steps[language].map((step, i) => (
                    <li key={step} className='relative py-1.5 pl-5 text-[15px]'>
                      <span className='absolute -left-[5px] top-[14px] h-2 w-2 rounded-full bg-cobalt' />
                      <span className='mr-2 font-mono text-xs text-cobalt'>{i + 1}</span>
                      {step}
                    </li>
                  ))}
                </ol>
              </div>

              <div className='mt-auto flex flex-wrap gap-2 pt-2'>
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className='rounded bg-cobalt-soft px-2 py-1 font-mono text-[11px] text-cobalt'
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>

        <div className='mt-6 flex flex-col gap-4 rounded-xl border border-line bg-paper p-6 sm:flex-row sm:items-start sm:gap-8 sm:p-8'>
          <div className='flex shrink-0 items-center gap-3 sm:w-56'>
            <FontAwesomeIcon icon={faGraduationCap} className='h-5 w-5 text-cobalt' />
            <div className='flex flex-col'>
              <span className='font-semibold'>{t.certsTitle}</span>
              <span className='text-xs text-muted'>{certifications.issuer}</span>
            </div>
          </div>
          <ul className='flex flex-wrap gap-2'>
            {certifications.courses.map((course) => (
              <li
                key={course}
                className='rounded-full border border-line bg-card px-3 py-1.5 text-sm'
              >
                {course}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
