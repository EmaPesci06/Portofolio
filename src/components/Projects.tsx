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
    <article className='group flex flex-col overflow-hidden rounded-xl border border-line bg-card transition-colors hover:border-ink/40'>
      <div className='relative aspect-[16/9] overflow-hidden border-b border-line bg-paper'>
        {project.image ? (
          <img
            src={project.image}
            alt={`${project.title}: ${project.category}`}
            loading='lazy'
            className='h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]'
          />
        ) : (
          <div className='workbench-grid flex h-full w-full items-center justify-center'>
            <span className='font-display text-4xl font-extrabold tracking-tight text-ink/80'>
              {project.title}
            </span>
          </div>
        )}
        <span className='absolute left-3 top-3 rounded bg-card/90 px-2 py-1 font-mono text-[11px] text-muted'>
          {project.category}
        </span>
      </div>

      <div className='flex flex-grow flex-col gap-3 p-6'>
        <h3 className='font-display text-2xl font-bold tracking-tight'>{project.title}</h3>
        <p className='inline-flex w-fit rounded bg-done-soft px-2 py-1 text-sm font-semibold text-done'>
          {project.highlight[language]}
        </p>
        <p className='text-[15px] leading-relaxed text-muted'>{project.description[language]}</p>

        <div className='mt-auto flex flex-wrap items-center justify-between gap-3 pt-3'>
          <div className='flex flex-wrap gap-1.5'>
            {project.tags.map((tag) => (
              <span key={tag} className='rounded border border-line px-2 py-0.5 font-mono text-[11px] text-muted'>
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
    <section id='proyectos' className='scroll-mt-16 border-t border-line bg-card/40 px-5 py-20 sm:px-8 md:py-28'>
      <div className='mx-auto max-w-6xl'>
        <SectionHeading eyebrow={t.eyebrow} title={t.title} subtitle={t.subtitle} />
        <div className='mt-12 grid grid-cols-1 gap-6 md:grid-cols-2'>
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
