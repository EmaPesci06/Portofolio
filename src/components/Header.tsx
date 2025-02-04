import { useLanguage } from "../context/LanguageContext"; // Importa el contexto de idioma
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTheme } from "../hooks/useTheme";
import { faMoon, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import IconsLight from "./IconsLigth";
import myself from "../assets/img/yoX2.webp";
import cvEs from "../assets/Bubble Developer-Es-Emanuel-Pesci.pdf";
import cvEn from "../assets/Bubble Developer-En-Emanuel-Pesci.pdf"; // Asegúrate de tener un CV en inglés

export function Header() {
  const { handleChangeTheme, theme } = useTheme();
  const { language } = useLanguage(); // Obtiene el idioma del contexto

  // Traducciones
  const translations: any = {
    es: {
      title: "Fullstack Developer y No-code Developer",
      description:
        "Soy Full Stack Developer con conocimientos en desarrollo con código y No Code. Manejo tecnologías como React, Next.js, Node.js, Python y Django, junto con bases de datos SQL y NoSQL. En No Code, domino herramientas como Bubble.io, Softr y SmartSuite, integrando APIs y automatizaciones con Zapier y Integrately. Me especializo en crear soluciones eficientes, escalables y optimizadas.",
      downloadCv: "Descargar CV",
      techTitle: "Conocimientos en las siguientes tecnologías",
      cvLink: cvEs,
    },
    en: {
      title: "Fullstack Developer & No-code Developer",
      description:
        "I am a Full Stack Developer with expertise in both code and No Code development. I work with technologies like React, Next.js, Node.js, Python, and Django, along with SQL and NoSQL databases. In No Code, I specialize in Bubble.io, Softr, and SmartSuite, integrating APIs and automation tools like Zapier and Integrately. I focus on building efficient, scalable, and optimized solutions.",
      downloadCv: "Download CV",
      techTitle: "Knowledge in the following technologies",
      cvLink: cvEn,
    },
  };

  const t = translations[language] || translations.en; // Usa inglés si el idioma no es "es"

  return (
    <header className='bg-slate-100 pt-6 dark:bg-slate-900 dark:text-white md:h-lvh overflow-x-hidden overflow-y-hidden'>
      <nav>
        <ul className='flex relative'>
          <button
            onClick={handleChangeTheme}
            className='px-2 py-1 border-2 border-black dark:border-white rounded-full focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white absolute top-0 right-0 mr-6'
          >
            <FontAwesomeIcon icon={faMoon} />
          </button>
        </ul>
      </nav>

      <section className='flex flex-col sm:flex-row mx-5 justify-center gap-20'>
        <img
          src={myself}
          alt='Emanuel Pesci'
          className='rounded-full h-1/2 sm:h-96 mt-4'
        />

        <article className='flex flex-col justify-center sm:mx-4'>
          <h1 className='text-8xl font-bangers'>Emanuel Pesci</h1>
          <h2 className='text-4xl mt-1'>{t.title}</h2>
          <p className='w-[700px] mt-2'>{t.description}</p>
          <a
            className='block py-2 px-4 mx-auto mt-8 bg-sky-900 text-white rounded-xl w-[300px] text-center'
            href={t.cvLink}
            download='Cv-EmanuelPesci.pdf'
          >
            {t.downloadCv}
          </a>
          <div className='flex justify-evenly mt-4'>
            <a
              className='block'
              href='https://www.linkedin.com/in/emanuel-pesci'
              target='_blank'
              rel='noreferrer'
            >
              <FontAwesomeIcon
                icon={faLinkedin}
                className='w-10 h-10 mx-auto mt-5 hover:scale-125 transition-transform duration-300 ease-in-out cursor-pointer'
              />
            </a>
            <a
              className='block'
              href='https://www.github.com/emapesci06'
              target='_blank'
              rel='noreferrer'
            >
              <FontAwesomeIcon
                icon={faGithub}
                className='w-10 h-10 mx-auto mt-5 hover:scale-125 transition-transform duration-300 ease-in-out cursor-pointer'
              />
            </a>
            <a
              className='block'
              href='mailto:emanuelpesci@gmail.com'
              target='_blank'
              rel='noreferrer'
            >
              <FontAwesomeIcon
                icon={faEnvelope}
                className='w-10 h-10 mx-auto mt-5 hover:scale-125 transition-transform duration-300 ease-in-out cursor-pointer'
              />
            </a>
          </div>
        </article>
      </section>

      <section>
        <h2 className='text-3xl mt-12 ml-9 font-bold'>{t.techTitle}</h2>
        <IconsLight />
      </section>
    </header>
  );
}
