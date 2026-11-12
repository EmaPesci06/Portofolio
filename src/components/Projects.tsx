import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare, faLock } from "@fortawesome/free-solid-svg-icons";
import { useLanguage } from "../context/LanguageContext";
import { translations, projects } from "../content";
import type { Project } from "../content";
import { SectionHeading } from "./SectionHeading";

function ProjectCard({ project }: { project: Project }) {
  const { language } = useLanguage();
  const t = translations[language].projects;

  return (
    <article className='group flex flex-col overflow-hidden rounded-xl border border-line bg-card transition-colors hover:border-muted'>
      <div className='relative aspect-[16/9] overflow-hidden border-b border-line bg-paper'>
        {project.image ? (
          <img
            src={project.image}
            alt={project.title}
            loading='lazy'
            className='h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]'
          />
        ) : (
          <div className='workbench-grid flex h-full w-full items-center justify-center px-4 text-center'>
            <span className='font-display text-3xl font-extrabold tracking-tight'>{project.title}</span>
          </div>
        )}
      </div>

      <div className='flex flex-grow flex-col gap-3 p-5'>
        <div className='flex items-baseline justify-between gap-3'>
          <h3 className='font-display text-xl font-bold tracking-tight'>{project.title}</h3>
          <span className='shrink-0 font-mono text-[11px] text-muted'>{project.category[language]}</span>
        </div>
        <p className='w-fit rounded bg-done-soft px-2 py-1 text-sm font-semibold text-done'>{project.highlight[language]}</p>
        <p className='text-sm leading-relaxed text-muted'>{project.description[language]}</p>

        <div className='mt-auto flex flex-wrap items-center justify-between gap-3 pt-2'>
          <div className='flex flex-wrap gap-1.5'>
            {project.tags.map((tag) => (
              <span key={tag} className='rounded border border-line px-1.5 py-0.5 font-mono text-[10px] text-muted'>
                {tag}
              </span>
            ))}
          </div>
          {project.url ? (
            <a
              href={project.url}
              target='_blank'
              rel='noreferrer'
              className='flex items-center gap-1.5 text-sm font-semibold text-cobalt hover:underline'
            >
              {t.visit}
              <FontAwesomeIcon icon={faArrowUpRightFromSquare} className='h-3 w-3' />
            </a>
          ) : (
            <span className='flex items-center gap-1.5 text-sm text-muted'>
              <FontAwesomeIcon icon={faLock} className='h-3 w-3' />
              {t.privateProject}
            </span>
          )}
        </div>
      </div>
    </article>
  );
}

export function Projects() {
  const { language } = useLanguage();
  const t = translations[language].projects;

  return (
    <section id='proyectos' className='scroll-mt-16 border-t border-line px-4 py-16 sm:px-6 md:py-24'>
      <div className='mx-auto flex max-w-6xl flex-col gap-8'>
        <SectionHeading eyebrow={t.eyebrow} title={t.title} />
        <div className='grid grid-cols-1 gap-6 md:grid-cols-2'>
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
