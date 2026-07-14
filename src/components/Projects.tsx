import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare, faLock } from "@fortawesome/free-solid-svg-icons";
import { useLanguage } from "../context/LanguageContext";
import { translations, projects } from "../content";
import type { Project } from "../content";

function ProjectCard({ project }: { project: Project }) {
  const { language } = useLanguage();
  const t = translations[language].projects;

  return (
    <article className='flex flex-col overflow-hidden rounded-xl border border-zinc-200 bg-white transition-shadow hover:shadow-lg dark:border-zinc-800 dark:bg-zinc-900'>
      <div className='aspect-video overflow-hidden bg-zinc-100 dark:bg-zinc-800'>
        {project.image ? (
          <img
            src={project.image}
            alt={project.title}
            loading='lazy'
            className='h-full w-full object-cover object-top transition-transform duration-300 hover:scale-105'
          />
        ) : (
          <div className='flex h-full w-full items-center justify-center bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700'>
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
              className='inline-flex items-center gap-1.5 whitespace-nowrap text-sm font-medium text-blue-600 hover:underline dark:text-blue-400'
            >
              {t.visit}
              <FontAwesomeIcon icon={faArrowUpRightFromSquare} className='h-3 w-3' />
            </a>
          ) : (
            <span className='inline-flex items-center gap-1.5 whitespace-nowrap text-sm text-zinc-400 dark:text-zinc-500'>
              <FontAwesomeIcon icon={faLock} className='h-3 w-3' />
              {t.privateProject}
            </span>
          )}
        </div>

        <p className='mt-2 flex-1 text-sm text-zinc-600 dark:text-zinc-300'>
          {project.description[language]}
        </p>

        <div className='mt-4 flex flex-wrap gap-2'>
          {project.tags.map((tag) => (
            <span
              key={tag}
              className='rounded-full border border-blue-200 bg-blue-50 px-2.5 py-0.5 text-xs font-medium text-blue-700 dark:border-blue-900 dark:bg-blue-950 dark:text-blue-300'
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

  return (
    <section id='proyectos' className='mx-auto max-w-5xl scroll-mt-20 px-4 py-12 sm:px-6'>
      <h2 className='text-2xl font-bold tracking-tight sm:text-3xl'>{t.title}</h2>
      <p className='mt-2 text-zinc-600 dark:text-zinc-300'>{t.subtitle}</p>

      <div className='mt-8 grid gap-6 sm:grid-cols-2'>
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  );
}
