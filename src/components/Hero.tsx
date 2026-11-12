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
      <div aria-hidden='true' className='workbench-grid workbench-grid-fade pointer-events-none absolute inset-0' />

      <div className='relative mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-10 px-4 pb-14 pt-10 sm:px-6 md:pt-16 lg:grid-cols-[1.15fr_1fr] lg:gap-14 lg:pb-20'>
        <div className='flex min-w-0 flex-col items-start gap-6'>
          <div className='flex items-center gap-3'>
            <img src={myself} alt='Emanuel Pesci' className='h-12 w-12 shrink-0 rounded-full border border-line object-cover' />
            <div className='flex min-w-0 flex-col'>
              <span className='text-sm font-semibold'>{t.role}</span>
              <span className='flex items-center gap-2 text-xs text-muted'>
                <span className='h-1.5 w-1.5 shrink-0 rounded-full bg-done' />
                {t.available}
              </span>
            </div>
          </div>

          <h1 className='font-display text-[2.5rem] font-extrabold leading-[0.98] tracking-[-0.03em] text-balance sm:text-6xl lg:text-[4.1rem]'>
            {t.title}
          </h1>

          <p className='max-w-xl text-base leading-relaxed text-muted sm:text-lg'>{t.description}</p>

          <div className='mt-1 flex w-full flex-col gap-3 sm:w-auto sm:flex-row'>
            <a
              href={t.cvLink}
              download='CV-Emanuel-Pesci.pdf'
              className='flex items-center justify-center gap-2 rounded-md bg-cobalt px-5 py-3 font-semibold text-on-cobalt transition-opacity hover:opacity-90'
            >
              <FontAwesomeIcon icon={faDownload} className='h-3.5 w-3.5' />
              {t.downloadCv}
            </a>
            <a
              href='#ia'
              className='flex items-center justify-center gap-2 rounded-md border border-ink/20 bg-card px-5 py-3 font-semibold transition-colors hover:border-ink'
            >
              {t.viewProjects}
              <FontAwesomeIcon icon={faArrowDown} className='h-3.5 w-3.5' />
            </a>
          </div>
        </div>

        <AgentTrace {...t.trace} />
      </div>

      <div className='relative border-y border-line bg-card'>
        <dl className='mx-auto grid max-w-6xl grid-cols-1 divide-y divide-line px-4 sm:grid-cols-3 sm:divide-x sm:divide-y-0 sm:px-6'>
          {t.facts.map((fact) => (
            <div key={fact.label} className='flex items-baseline gap-4 py-4 sm:px-5 sm:py-5 sm:first:pl-0'>
              <dt className='shrink-0 font-display text-2xl font-extrabold tracking-tight text-cobalt sm:text-3xl'>
                {fact.value}
              </dt>
              <dd className='text-sm leading-snug text-muted'>{fact.label}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
