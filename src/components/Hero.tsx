import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faDownload } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { useLanguage } from "../context/LanguageContext";
import { translations, LINKS } from "../content";
import myself from "../assets/img/yoX2.webp";

export function Hero() {
  const { language } = useLanguage();
  const t = translations[language].hero;

  return (
    <header className='mx-auto max-w-5xl px-4 py-16 sm:px-6 sm:py-24'>
      <div className='flex flex-col items-center gap-10 sm:flex-row sm:items-start sm:gap-14'>
        <img
          src={myself}
          alt='Emanuel Pesci'
          className='h-40 w-40 rounded-full object-cover ring-4 ring-zinc-200 dark:ring-zinc-800 sm:h-48 sm:w-48'
        />

        <div className='text-center sm:text-left'>
          <span className='inline-flex items-center gap-2 rounded-full border border-emerald-300 bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-700 dark:border-emerald-800 dark:bg-emerald-950 dark:text-emerald-300'>
            <span className='h-2 w-2 rounded-full bg-emerald-500' />
            {t.available}
          </span>

          <h1 className='mt-4 text-4xl font-extrabold tracking-tight sm:text-5xl'>
            Emanuel Pesci
          </h1>
          <h2 className='mt-2 text-xl font-semibold text-blue-600 dark:text-blue-400 sm:text-2xl'>
            {t.title}
          </h2>
          <p className='mt-4 max-w-2xl text-zinc-600 dark:text-zinc-300'>
            {t.description}
          </p>

          <div className='mt-6 flex flex-wrap items-center justify-center gap-3 sm:justify-start'>
            <a
              href={t.cvLink}
              download='CV-Emanuel-Pesci.pdf'
              className='inline-flex items-center gap-2 rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-blue-700'
            >
              <FontAwesomeIcon icon={faDownload} />
              {t.downloadCv}
            </a>
            <a
              href='#proyectos'
              className='inline-flex items-center gap-2 rounded-lg border border-zinc-300 px-5 py-2.5 text-sm font-semibold text-zinc-700 hover:bg-zinc-100 dark:border-zinc-700 dark:text-zinc-200 dark:hover:bg-zinc-800'
            >
              {t.viewProjects}
            </a>

            <div className='flex items-center gap-4 sm:ml-2'>
              <a
                href={LINKS.linkedin}
                target='_blank'
                rel='noreferrer'
                aria-label='LinkedIn'
                className='text-zinc-500 transition-colors hover:text-blue-600 dark:text-zinc-400 dark:hover:text-blue-400'
              >
                <FontAwesomeIcon icon={faLinkedin} className='h-6 w-6' />
              </a>
              <a
                href={LINKS.github}
                target='_blank'
                rel='noreferrer'
                aria-label='GitHub'
                className='text-zinc-500 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white'
              >
                <FontAwesomeIcon icon={faGithub} className='h-6 w-6' />
              </a>
              <a
                href={LINKS.email}
                aria-label='Email'
                className='text-zinc-500 transition-colors hover:text-red-500 dark:text-zinc-400 dark:hover:text-red-400'
              >
                <FontAwesomeIcon icon={faEnvelope} className='h-6 w-6' />
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
