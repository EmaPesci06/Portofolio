import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload, faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../content";
import { AgentTrace } from "./AgentTrace";
import myself from "../assets/img/yoX2.webp";

export function Hero() {
  const { language } = useLanguage();
  const t = translations[language].hero;

  return (
    <section id='inicio' className='relative overflow-hidden'>
      <div aria-hidden='true' className='workbench-grid pointer-events-none absolute inset-0' />

      <div className='relative mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-12 px-5 pb-16 pt-14 sm:px-8 md:pt-20 lg:grid-cols-[1.15fr_1fr] lg:gap-16 lg:pb-24'>
        <div className='flex flex-col items-start gap-6'>
          <div className='flex items-center gap-3'>
            <img
              src={myself}
              alt='Emanuel Pesci'
              className='h-12 w-12 rounded-full border border-line object-cover'
            />
            <div className='flex flex-col'>
              <span className='text-sm font-semibold'>{t.role}</span>
              <span className='flex items-center gap-2 text-xs text-muted'>
                <span className='h-1.5 w-1.5 rounded-full bg-done' />
                {t.available}
              </span>
            </div>
          </div>

          <h1 className='font-display text-[2.6rem] font-extrabold leading-[0.98] tracking-[-0.03em] text-balance sm:text-6xl lg:text-[4.4rem]'>
            {t.title}
          </h1>

          <p className='max-w-xl text-lg leading-relaxed text-muted'>{t.description}</p>

          <div className='mt-2 flex flex-wrap gap-3'>
            <a
              href={t.cvLink}
              download='CV-Emanuel-Pesci.pdf'
              className='flex items-center gap-2 rounded-md bg-cobalt px-5 py-3 font-semibold text-white transition-colors hover:bg-ink'
            >
              <FontAwesomeIcon icon={faDownload} className='h-3.5 w-3.5' />
              {t.downloadCv}
            </a>
            <a
              href='#proyectos'
              className='flex items-center gap-2 rounded-md border border-ink/20 bg-card px-5 py-3 font-semibold transition-colors hover:border-ink'
            >
              {t.viewProjects}
              <FontAwesomeIcon icon={faArrowDown} className='h-3.5 w-3.5' />
            </a>
          </div>
        </div>

        <AgentTrace {...t.trace} />
      </div>

      <div className='relative border-y border-line bg-card'>
        <dl className='mx-auto grid max-w-6xl grid-cols-1 divide-y divide-line px-5 sm:grid-cols-3 sm:divide-x sm:divide-y-0 sm:px-8'>
          {t.facts.map((fact) => (
            <div key={fact.label} className='flex items-baseline gap-4 py-5 sm:px-6 sm:first:pl-0'>
              <dt className='font-display text-3xl font-bold tracking-tight text-cobalt'>{fact.value}</dt>
              <dd className='text-sm leading-snug text-muted'>{fact.label}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
