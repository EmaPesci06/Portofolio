import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useTheme } from '../hooks/useTheme'
import { faMoon } from '@fortawesome/free-solid-svg-icons'
import IconsLight from './IconsLigth'

export function Header () {
  const { handleChangeTheme, theme } = useTheme()

  return (
    <header className='bg-slate-100 py-3 dark:bg-slate-900 dark:text-white h-lvh  overflow-x-hidden'>
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

      <section className='flex mx-5 justify-center gap-20'>
        <img
          src='../src/assets/img/yoX2.webp'
          alt='Emanuel Pesci'
          className='rounded-full h-96 w-90 mt-4'
        />

        <article className='flex flex-col justify-center mx-4'>
          <h1 className='text-8xl font-bangers'>Emanuel Pesci</h1>
          <h2 className='text-4xl mt-1'>Fullstack Developer</h2>
          <p className='w-96 mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat dolorem dolor fugit eligendi dolore quidem sit natus ratione! Possimus nisi qui, tempora laboriosam cumque velit dignissimos accusamus consequatur maxime! Eveniet.</p>
          <a className='block py-2 px-4 mx-auto mt-8 bg-sky-900 text-white rounded-xl w-56 text-center ' href='../assets/Cv-EmanuelPesci-es.pdf' download='Cv-EmanuelPesci-es.pdf'>Descargar Cv</a>
        </article>
      </section>

      <IconsLight />
    </header>
  )
}
