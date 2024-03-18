import { useTheme } from './hooks/useTheme'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon } from '@fortawesome/free-solid-svg-icons'
import amazon from './assets/svg/amazon-web-services-4.svg'
import angular from './assets/svg/angular-icon-1.svg'
import bootstrap from './assets/svg/bootstrap-5-1.svg'
import django from './assets/svg/django-community.svg'
import git from './assets/svg/git.svg'
import github from './assets/svg/github-icon-1.svg'
import javascript from './assets/svg/logo-javascript.svg'
import nest from './assets/svg/nestjs.svg'
import next from './assets/svg/next-js.svg'
import node from './assets/svg/nodejs.svg'
import python from './assets/svg/python-5.svg'
import react from './assets/svg/react.svg'
import typescript from './assets/svg/typescript.svg'

function App () {
  const { handleChangeTheme } = useTheme()

  return (
    <>
      <header className='bg-slate-100 py-3 dark:bg-slate-900 dark:text-white h-lvh'>
        <nav>
          <ul className='flex justify-end'>
            <li className='mr-10'>
              <button
                onClick={handleChangeTheme}
                className='px-2 py-1 border-2 border-black dark:border-white rounded-full focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white'
              >
                <FontAwesomeIcon icon={faMoon} />
              </button>
            </li>
          </ul>
        </nav>

        <section className='flex mx-5 justify-center'>
          <img
            src='../src/assets/img/yoX2.webp'
            alt='Emanuel Pesci'
            className='rounded-full h-96 w-90 mt-4'
          />

          <div className='flex flex-col justify-center mx-4'>
            <h1 className='text-8xl font-bangers'>Emanuel Pesci</h1>
            <h2 className='text-4xl mt-1'>Fullstack Developer</h2>
            <p className='w-96 mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat dolorem dolor fugit eligendi dolore quidem sit natus ratione! Possimus nisi qui, tempora laboriosam cumque velit dignissimos accusamus consequatur maxime! Eveniet.</p>
          </div>
        </section>

        <div className='flex mt-5 gap-3 justify-center'>
          <img className='w-24 h-24' src={amazon} alt='React' title='React' />
          <img className='w-24 h-24' src={angular} alt='React' title='React' />
          <img className='w-24 h-24' src={bootstrap} alt='React' title='React' />
          <img className='w-24 h-24' src={django} alt='React' title='React' />
          <img className='w-24 h-24' src={git} alt='React' title='React' />
          <img className='w-24 h-24' src={github} alt='React' title='React' />
          <img className='w-24 h-24' src={javascript} alt='React' title='React' />
          <img className='w-24 h-24' src={nest} alt='React' title='React' />
          <img className='w-24 h-24' src={next} alt='React' title='React' />
          <img className='w-24 h-24' src={node} alt='React' title='React' />
          <img className='w-24 h-24' src={python} alt='React' title='React' />
          <img className='w-24 h-24' src={react} alt='React' title='React' />
          <img className='w-24 h-24' src={typescript} alt='React' title='React' />
        </div>
      </header>

    </>
  )
}

export default App
