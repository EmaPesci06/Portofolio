import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare, faLock } from "@fortawesome/free-solid-svg-icons";
import { useLanguage } from "../context/LanguageContext";
import { translations, projects } from "../content";
import type { Project } from "../content";
import { useSectionReveal } from "../hooks/useSectionReveal";
import { SectionHeading } from "./SectionHeading";

function ProjectCard({ project }: { project: Project }) {
  const { language } = useLanguage();
  const t = translations[language].projects;

  return (
    <article
      data-reveal
      className='group flex flex-col overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-indigo-300 hover:shadow-xl hover:shadow-indigo-500/10 dark:border-white/10 dark:bg-white/5 dark:hover:border-indigo-500/40 dark:hover:shadow-indigo-500/20'
    >
      <div className='aspect-video overflow-hidden bg-slate-100 dark:bg-slate-800'>
        {project.image ? (
          <img
            src={project.image}
            alt={project.title}
            loading='lazy'
            className='h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105'
          />
        ) : (
          <div className='flex h-full w-full items-center justify-center bg-gradient-to-br from-sky-600 via-indigo-600 to-violet-700'>
            <span className='text-5xl font-extrabold text-white/90'>
              {project.title.charAt(0)}
            </span>
          </div>
        )}
      </div>

      <div className='flex flex-1 flex-col p-5'>
        <div className='flex items-start justify-between gap-2'>
          <h3 className='text-lg font-bold'>{project.title}</h3>
          {project.url ? (
            <a
              href={project.url}
              target='_blank'
              rel='noreferrer'
              className='inline-flex cursor-pointer items-center gap-1.5 whitespace-nowrap text-sm font-medium text-indigo-600 hover:underline dark:text-indigo-400'
            >
              {t.visit}
              <FontAwesomeIcon icon={faArrowUpRightFromSquare} className='h-3 w-3' />
            </a>
          ) : (
            <span className='inline-flex items-center gap-1.5 whitespace-nowrap text-sm text-slate-400 dark:text-slate-500'>
              <FontAwesomeIcon icon={faLock} className='h-3 w-3' />
              {t.privateProject}
            </span>
          )}
        </div>

        <p className='mt-2 flex-1 text-sm text-slate-600 dark:text-slate-300'>
          {project.description[language]}
        </p>

        <div className='mt-4 flex flex-wrap gap-2'>
          {project.tags.map((tag) => (
            <span
              key={tag}
              className='rounded-full border border-indigo-200 bg-indigo-50 px-2.5 py-0.5 text-xs font-medium text-indigo-700 dark:border-indigo-500/30 dark:bg-indigo-500/10 dark:text-indigo-300'
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}

export function Projects() {
  const { language } = useLanguage();
  const t = translations[language].projects;
  const ref = useSectionReveal<HTMLElement>();

  return (
    <section
      ref={ref}
      id='proyectos'
      className='mx-auto max-w-5xl scroll-mt-20 px-4 py-14 sm:px-6'
    >
      <SectionHeading overline={t.overline} title={t.title} subtitle={t.subtitle} />

      <div className='mt-8 grid gap-6 sm:grid-cols-2'>
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  );
}
