import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare, faLock } from "@fortawesome/free-solid-svg-icons";
import { useLanguage } from "../context/LanguageContext";
import { translations, projects } from "../content";
import type { Project } from "../content";
import { useSectionReveal } from "../hooks/useSectionReveal";

const FILTERS = ["Bubble", "Softr"] as const;

function ProjectCard({ project }: { project: Project }) {
  const { language } = useLanguage();
  const t = translations[language].projects;

  return (
    <article
      data-reveal
      className='glass-surface group flex flex-col overflow-hidden rounded-2xl transition-all duration-300 ease-in-out hover:-translate-y-1 hover:border-primary hover:shadow-2xl hover:shadow-primary/20'
    >
      <div className='relative h-56 overflow-hidden bg-surface-high'>
        {project.image ? (
          <img
            src={project.image}
            alt={project.title}
            loading='lazy'
            className='h-full w-full object-cover object-top transition-transform duration-300 ease-in-out group-hover:scale-110'
          />
        ) : (
          <div className='flex h-full w-full items-center justify-center bg-gradient-to-br from-primary-container via-[#1e3a8a] to-secondary-container'>
            <span className='font-display text-6xl font-extrabold text-white/90'>
              {project.title.charAt(0)}
            </span>
          </div>
        )}
        <div className='pointer-events-none absolute inset-0 bg-primary/0 transition-colors duration-300 group-hover:bg-primary/5' />
        <span className='absolute left-4 top-4 rounded-full border border-primary/20 bg-background/60 px-3 py-1 font-mono text-xs text-primary backdrop-blur-md'>
          {project.category}
        </span>
      </div>

      <div className='flex flex-grow flex-col gap-4 p-8'>
        <h3 className='font-display text-2xl font-semibold'>{project.title}</h3>
        <p className='text-sm text-on-surface-variant'>{project.description[language]}</p>

        <div className='mt-auto flex flex-wrap gap-2'>
          {project.tags.map((tag) => (
            <span key={tag} className='rounded bg-surface-high px-2 py-1 font-mono text-[10px]'>
              {tag}
            </span>
          ))}
        </div>

        {project.url ? (
          <a
            href={project.url}
            target='_blank'
            rel='noreferrer'
            className='mt-2 flex cursor-pointer items-center gap-2 text-sm font-bold text-primary transition-transform hover:translate-x-2'
          >
            {t.visit}
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} className='h-3 w-3' />
          </a>
        ) : (
          <span className='mt-2 flex items-center gap-2 text-sm font-bold text-on-surface-variant'>
            <FontAwesomeIcon icon={faLock} className='h-3 w-3' />
            {t.privateProject}
          </span>
        )}
      </div>
    </article>
  );
}

export function Projects() {
  const { language } = useLanguage();
  const t = translations[language].projects;
  const ref = useSectionReveal<HTMLElement>();
  const [filter, setFilter] = useState<string>("all");

  const visible =
    filter === "all" ? projects : projects.filter((p) => p.tags.includes(filter));

  return (
    <section ref={ref} id='proyectos' className='scroll-mt-20 px-6 py-16 md:py-28'>
      <div className='mx-auto max-w-7xl'>
        <div className='mb-16 flex flex-col justify-between gap-6 md:flex-row md:items-end'>
          <div data-reveal className='flex flex-col gap-4'>
            <h2 className='font-display text-3xl font-bold tracking-tight sm:text-5xl'>
              {t.title}
            </h2>
            <div className='h-1 w-24 rounded-full bg-primary' />
            <p className='max-w-xl text-on-surface-variant'>{t.subtitle}</p>
          </div>

          <div data-reveal className='flex items-baseline gap-4'>
            <span className='font-mono text-sm text-on-surface-variant'>{t.filterLabel}</span>
            <button
              onClick={() => setFilter("all")}
              className={`cursor-pointer pb-1 transition-colors ${
                filter === "all"
                  ? "border-b-2 border-primary font-bold text-primary"
                  : "text-on-surface-variant hover:text-primary"
              }`}
            >
              {t.filterAll}
            </button>
            {FILTERS.map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`cursor-pointer pb-1 transition-colors ${
                  filter === f
                    ? "border-b-2 border-primary font-bold text-primary"
                    : "text-on-surface-variant hover:text-primary"
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        <div className='grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3'>
          {visible.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
