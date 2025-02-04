import { useEffect, useState } from 'react';
import next from '../assets/svg/next-js.svg';
import nextL from '../assets/svg/nextjs-light.svg';
import node from '../assets/svg/nodejs.svg';
import python from '../assets/svg/python-5.svg';
import react from '../assets/svg/react.svg';
import tailwind from '../assets/svg/tailwindcss.svg';
import typescript from '../assets/svg/typescript.svg';
import Marquee from 'react-fast-marquee';

export default function IconsLight() {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const userPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (userPrefersDark) {
      setTheme('dark');
    }
  }, []);

  const iconsDark = [
    { icon: next, alt: 'Nextjs' },
    { icon: node, alt: 'Nodejs' },
    { icon: python, alt: 'Python' },
    { icon: react, alt: 'React' },
    { icon: tailwind, alt: 'Tailwindcss' },
    { icon: typescript, alt: 'Typescript' }
  ];

  const iconsLight = [
    { icon: nextL, alt: 'Nextjs Light' },
    { icon: node, alt: 'Nodejs' },
    { icon: python, alt: 'Python' },
    { icon: react, alt: 'React' },
    { icon: tailwind, alt: 'Tailwindcss' },
    { icon: typescript, alt: 'Typescript' }
  ];

  const icons = theme === 'dark' ? iconsDark : iconsLight;

  return (
    <Marquee speed={50} gradient={false}>
      {icons.map((icon, index) => (
        <img
          key={index}
          src={icon.icon}
          alt={icon.alt}
          title={icon.alt}
          className='w-20 h-20 mx-20 mt-8'
        />
      ))}
    </Marquee>
  );
}