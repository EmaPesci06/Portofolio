import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { useLanguage } from "../context/LanguageContext";
import { translations, labia, agentProjects } from "../content";
import { SectionHeading } from "./SectionHeading";

const chip = "rounded bg-cobalt-soft px-2 py-1 font-mono text-[11px] text-cobalt";

export function AiProducts() {
  const { language } = useLanguage();
  const t = translations[language].ai;

  return (
    <section id='ia' className='scroll-mt-16 px-4 py-16 sm:px-6 md:py-24'>
      <div className='mx-auto flex max-w-6xl flex-col gap-8'>
        <SectionHeading eyebrow={t.eyebrow} title={t.title} />

        {/* LabÍA: el producto principal, en el mismo lenguaje que la consola del hero */}
        <article className='grid grid-cols-1 gap-8 rounded-2xl border border-console-line bg-console p-6 text-console-text sm:p-10 lg:grid-cols-[1.15fr_1fr] lg:gap-10'>
          <div className='flex min-w-0 flex-col gap-4'>
            <span className='font-mono text-xs text-[#8fa3ff]'>{labia.kicker[language]}</span>
            <h3 className='font-display text-4xl font-extrabold text-white sm:text-5xl'>{labia.title}</h3>
            <p className='leading-relaxed'>{labia.description[language]}</p>
            <div className='flex flex-wrap gap-2'>
              {labia.tags.map((tag) => (
                <span key={tag} className='rounded border border-console-line px-2 py-1 font-mono text-[11px]'>
                  {tag}
                </span>
              ))}
            </div>
            <a
              href={labia.url}
              target='_blank'
              rel='noreferrer'
              className='mt-1 flex w-fit items-center gap-2 text-sm font-semibold text-[#8fa3ff] hover:underline'
            >
              <FontAwesomeIcon icon={faGithub} className='h-4 w-4' />
              {t.viewRepo}
            </a>
          </div>
          <ul className='self-start overflow-hidden rounded-xl border border-console-line text-sm leading-relaxed'>
            {labia.points[language].map((point) => (
              <li key={point} className='border-b border-console-line px-4 py-3 last:border-b-0'>
                {point}
              </li>
            ))}
          </ul>
        </article>

        <div className='grid grid-cols-1 gap-6 lg:grid-cols-2'>
          {agentProjects.map((project) => (
            <article key={project.title.en} className='flex flex-col gap-5 rounded-xl border border-line bg-card p-6 sm:p-8'>
              <h3 className='font-display text-2xl font-bold tracking-tight'>{project.title[language]}</h3>
              <p className='leading-relaxed text-muted'>{project.description[language]}</p>
              <ol className='flex flex-col gap-2 border-l-2 border-cobalt-soft pl-4 text-[15px]'>
                {project.steps[language].map((step, i) => (
                  <li key={step}>
                    <span className='mr-2 font-mono text-xs text-cobalt'>{i + 1}</span>
                    {step}
                  </li>
                ))}
              </ol>
              <div className='mt-auto flex flex-wrap gap-2'>
                {project.tags.map((tag) => (
                  <span key={tag} className={chip}>
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
