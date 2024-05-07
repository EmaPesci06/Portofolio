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
import Marquee from 'react-fast-marquee'

export default function IconsLight ({ theme }: { theme: string }) {
  const iconsDark = [
    { icon: amazon, alt: 'Amazon Web Services' },
    { icon: angular, alt: 'Angular' },
    { icon: bootstrap, alt: 'Bootstrap' },
    { icon: django, alt: 'Django' },
    { icon: git, alt: 'Git' },
    { icon: javascript, alt: 'Javascript' },
    { icon: nest, alt: 'Nestjs' },
    { icon: next, alt: 'Nextjs' },
    { icon: node, alt: 'Nodejs' },
    { icon: python, alt: 'Python' },
    { icon: react, alt: 'React' },
    { icon: tailwind, alt: 'Tailwindcss' },
    { icon: typescript, alt: 'Typescript' }
  ]

  const iconsLight = [
    { icon: amazonW, alt: 'Amazon Web Services' },
    { icon: angular, alt: 'Angular' },
    { icon: bootstrap, alt: 'Bootstrap' },
    { icon: djangoW, alt: 'Django' },
    { icon: gitW, alt: 'Git' },
    { icon: javascript, alt: 'Javascript' },
    { icon: nest, alt: 'Nestjs' },
    { icon: nextL, alt: 'Nextjs' },
    { icon: node, alt: 'Nodejs' },
    { icon: python, alt: 'Python' },
    { icon: react, alt: 'React' },
    { icon: tailwind, alt: 'Tailwindcss' },
    { icon: typescript, alt: 'Typescript' }
  ]

  const icons = theme === 'dark' ? iconsLight : iconsDark

  return (
    <Marquee>
      {icons.map(({ icon, alt }) => (
        <img
          key={alt}
          src={icon}
          alt={alt}
          className='w-24 h-24 mx-6 mt-8'
        />
      ))}
    </Marquee>

  )
}
