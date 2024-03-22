import amazonW from '../assets/svg/aws-white.svg'
import amazon from '../assets/svg/amazon-web-services-4.svg'
import angular from '../assets/svg/angular-icon-1.svg'
import bootstrap from '../assets/svg/bootstrap-5-1.svg'
import django from '../assets/svg/django-community.svg'
import djangoW from '../assets/svg/django-light.svg'
import git from '../assets/svg/git.svg'
import gitW from '../assets/svg/git-light.svg'
import javascript from '../assets/svg/logo-javascript.svg'
import nest from '../assets/svg/nestjs.svg'
import next from '../assets/svg/next-js.svg'
import nextL from '../assets/svg/nextjs-light.svg'
import node from '../assets/svg/nodejs.svg'
import python from '../assets/svg/python-5.svg'
import react from '../assets/svg/react.svg'
import tailwind from '../assets/svg/tailwindcss.svg'
import typescript from '../assets/svg/typescript.svg'

export default function IconsLight ({ theme }: { theme: string }) {
  return (
    <div className='flex mt-14 justify-center py-5 w-max'>
      <div className='flex animate-horizontalScroll gap-12 mr-12'>

        {
          theme === 'dark'
            ? <img className='w-16 h-16' src={amazonW} alt='React' title='Amazon Light' />
            : <img className='w-16 h-16' src={amazon} alt='React' title='AWS' />
        }

        <img className='w-16 h-16' src={angular} alt='React' title='React' />
        <img className='w-16 h-16' src={bootstrap} alt='React' title='React' />

        {
          theme === 'dark'
            ? <img className='w-16 h-16' src={djangoW} alt='Django' title='Django' />
            : <img className='w-16 h-16' src={django} alt='Django' title='Django' />
        }

        {
          theme === 'dark'
            ? <img className='w-16 h-16' src={gitW} alt='Git' title='Git' />
            : <img className='w-16 h-16' src={git} alt='Git' title='Git' />
        }

        <img className='w-16 h-16' src={javascript} alt='React' title='React' />
        <img className='w-16 h-16' src={nest} alt='React' title='React' />

        {
          theme === 'dark'
            ? <img className='w-16 h-16' src={nextL} alt='React' title='React' />
            : <img className='w-16 h-16' src={next} alt='React' title='React' />
        }

        <img className='w-16 h-16' src={node} alt='React' title='React' />
        <img className='w-16 h-16' src={python} alt='React' title='React' />
        <img className='w-16 h-16' src={react} alt='React' title='React' />
        <img className='w-16 h-16' src={tailwind} alt='React' title='React' />
        <img className='w-16 h-16' src={typescript} alt='React' title='React' />
      </div>

      <div className='flex animate-horizontalScroll2 gap-12'>

        {
          theme === 'dark'
            ? <img className='w-16 h-16' src={amazonW} alt='React' title='Amazon Light' />
            : <img className='w-16 h-16' src={amazon} alt='React' title='AWS' />
        }

        <img className='w-16 h-16' src={angular} alt='React' title='React' />
        <img className='w-16 h-16' src={bootstrap} alt='React' title='React' />

        {
          theme === 'dark'
            ? <img className='w-16 h-16 fill-white' src={djangoW} alt='Django' title='Django' />
            : <img className='w-16 h-16' src={django} alt='Django' title='Django' />
        }

        {
          theme === 'dark'
            ? <img className='w-16 h-16' src={gitW} alt='Git' title='Git' />
            : <img className='w-16 h-16' src={git} alt='Git' title='Git' />
        }

        <img className='w-16 h-16' src={javascript} alt='React' title='React' />
        <img className='w-16 h-16' src={nest} alt='React' title='React' />
        {
          theme === 'dark'
            ? <img className='w-16 h-16' src={nextL} alt='React' title='React' />
            : <img className='w-16 h-16' src={next} alt='React' title='React' />
        }
        <img className='w-16 h-16' src={node} alt='React' title='React' />
        <img className='w-16 h-16' src={python} alt='React' title='React' />
        <img className='w-16 h-16' src={react} alt='React' title='React' />
        <img className='w-16 h-16' src={tailwind} alt='React' title='React' />
        <img className='w-16 h-16' src={typescript} alt='React' title='React' />
      </div>
    </div>
  )
}
