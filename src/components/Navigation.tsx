'use client'
import classNames from 'classnames'
import { useState } from 'react'

interface Props {
  items: { name: string; link: string }[]
  onClick: () => void
  className: string
}

const NavigationBody = (props: Props) => {
  return (
    <div className={classNames('w-full md:justify-center', props.className)}>
      <ul className='flex flex-wrap w-full px-4 pb-5 list-none md:gap-10 md:flex-nowrap md:justify-center md:text-center md:w-auto md:pb-0'>
        {props.items.map((item, index) => {
          if (item.link.includes('http')) {
            return (
              <li key={index} className='w-full py-3 md:py-0 md:auto md:whitespace-nowrap'>
                <a
                  href={item.link}
                  target='_blank'
                  rel='noreferrer'
                  className='hover:underline'
                  onClick={props.onClick}
                >
                  {item.name}
                </a>
              </li>
            )
          }
          return (
            <li key={index} className='w-full py-3 md:py-0 md:auto md:whitespace-nowrap'>
              <a href={item.link} className='hover:underline' onClick={props.onClick}>
                {item.name}
              </a>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { name: 'Collection', link: '/' },
    { name: 'Manifesto', link: '/manifesto' },
    { name: 'Treasury', link: '/treasury' },
    { name: 'IBC Gangsters on X', link: 'https://twitter.com/IBC_Gangsters' },
  ]
  const barClasses = 'w-10 h-0.5 bg-white my-3 transition-all duration-500'

  return (
    <nav className='fixed top-0 left-0 z-10 flex items-center w-full text-xl text-white bg-black md:h-25 md:flex'>
      <NavigationBody
        items={navItems}
        className='hidden md:flex'
        onClick={() => setIsOpen(false)}
      />
      <div className='relative w-full pt-20 md:hidden'>
        <div
          className='absolute w-10 left-4 top-3'
          role='button'
          onClick={() => setIsOpen(!isOpen)}
        >
          <div
            className={classNames(
              barClasses,
              isOpen
                ? '-rotate-45 -translate-x-1 translate-y-2'
                : 'rotate-0 translate-x-0 translate-y-0',
            )}
          />
          <div className={classNames(barClasses, isOpen ? 'opacity-0' : 'opacity-100')} />
          <div
            className={classNames(
              barClasses,
              isOpen
                ? 'rotate-45 -translate-x-1 -translate-y-5'
                : 'rotate-0 translate-x-0 translate-y-0',
            )}
          />
        </div>
        <div
          className={classNames(
            'grid transition-[grid-template-rows] w-full',
            isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]',
          )}
        >
          <div className='w-full overflow-hidden'>
            <NavigationBody
              items={navItems}
              className='flex md:hidden'
              onClick={() => setIsOpen(false)}
            />
          </div>
        </div>
      </div>
    </nav>
  )
}
