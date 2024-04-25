import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useTheme } from '../hooks/useTheme'
import { faMoon, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import IconsLight from './IconsLigth'

export function Header () {
  const { handleChangeTheme, theme } = useTheme()

  return (
    <header className='bg-slate-100 py-3 dark:bg-slate-900 dark:text-white md:h-lvh  overflow-x-hidden overflow-y-hidden sm'>
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

      <section className='flex flex-col sm:flex-row mx-5 justify-center gap-20 '>
        <img
          src='../src/assets/img/yoX2.webp'
          alt='Emanuel Pesci'
          className='rounded-full h-1/2 sm:h-96 mt-4'
        />

        <article className='flex flex-col justify-center sm:mx-4'>
          <h1 className='text-8xl font-bangers'>Emanuel Pesci</h1>
          <h2 className='text-4xl mt-1'>Fullstack Developer</h2>
          <p className='w-96 mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat dolorem dolor fugit eligendi dolore quidem sit natus ratione! Possimus nisi qui, tempora laboriosam cumque velit dignissimos accusamus consequatur maxime! Eveniet.</p>
          <a className='block py-2 px-4 mx-auto mt-8 bg-sky-900 text-white rounded-xl w-56 text-center ' href='../assets/Cv-EmanuelPesci-es.pdf' download='Cv-EmanuelPesci-es.pdf'>Descargar Cv</a>
          <div className='flex justify-evenly mt-4'>
            <a className='block' href='https://www.linkedin.com/in/emanuel-pesci' target='_blank' rel='noreferrer'>
              <FontAwesomeIcon
                icon={faLinkedin}
                className='w-10 h-10 mx-auto mt-5 hover:scale-125 transition-transform duration-300 ease-in-out cursor-pointer'
              />
            </a>
            <a className='block' href='https://www.github.com/emapesci06' target='_blank' rel='noreferrer'>
              <FontAwesomeIcon
                icon={faGithub}
                className='w-10 h-10 mx-auto mt-5 hover:scale-125 transition-transform duration-300 ease-in-out cursor-pointer'
              />
            </a>
            <a className='block' href='mailto:emanuelpesci@gmail.com' target='_blank' rel='noreferrer'>
              <FontAwesomeIcon
                icon={faEnvelope}
                className='w-10 h-10 mx-auto mt-5 hover:scale-125 transition-transform duration-300 ease-in-out cursor-pointer'
              />
            </a>
          </div>
        </article>
      </section>

      <section>
        <h2 className='text-3xl mt-12 ml-9 font-bold'>Conocimientos en las siguientes tecnologias</h2>
        <IconsLight theme={theme} />
      </section>

    </header>
  )
}
