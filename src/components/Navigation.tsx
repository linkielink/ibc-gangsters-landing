'use client'
import classNames from 'classnames'
import { useEffect, useState } from 'react'

interface Props {
  items: { name: string; link: string }[]
  onClick: () => void
  className: string
}

const NavigationBody = (props: Props) => {
  const [path, setPath] = useState('')

  useEffect(() => {
    if (!window) return
    setPath(window.location.pathname)
  }, [])

  return (
    <div className={classNames('w-full md:justify-center', props.className)}>
      <ul className='flex flex-wrap w-full px-4 pb-5 list-none md:gap-10 md:flex-nowrap md:justify-center md:text-center md:w-auto md:pb-0'>
        {props.items.map((item, index) => {
          const isActive = item.link === path
          return (
            <li key={index} className='w-full py-3 md:py-0 md:auto md:whitespace-nowrap'>
              <a
                href={item.link}
                className={classNames(
                  !isActive && 'opacity-70 hover:opacity-100',
                  'transition-opacity hover:underline',
                )}
                onClick={props.onClick}
              >
                {item.name}
              </a>
            </li>
          )
        })}
        <li className='flex items-center pt-4 pr-8 md:p-0'>
          <a
            href='https://twitter.com/IBC_Gangsters'
            title='IBC Gangsters on X'
            target='blank'
            className='flex items-center w-6 h-6 text-white transition-opacity opacity-70 hover:opacity-100'
          >
            <svg
              width='100%'
              className='icon'
              version='1.1'
              xmlns='http://www.w3.org/2000/svg'
              x='0px'
              y='0px'
              viewBox='0 0 120 120'
            >
              <path
                fill='currentColor'
                d='M0.3,3.8l46.3,61.9L0,116.2h10.5l40.8-44.1l33,44.1H120L71.1,50.7l43.4-46.9H104L66.4,44.5L36,3.8
	H0.3z M15.7,11.6h16.4l72.4,96.9H88.2L15.7,11.6z'
              />
            </svg>
          </a>
        </li>
        <li className='flex items-center pt-4 md:p-0'>
          <a
            href='https://t.me/IBCGangsters'
            title='IBC Gangsters on Telegram'
            target='blank'
            className='flex items-center w-6 h-6 text-white transition-opacity opacity-70 hover:opacity-100'
          >
            <svg viewBox='0 0 28 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
              <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M21.448 23.735C21.8236 24.0086 22.3078 24.077 22.7394 23.909C23.1711 23.7398 23.4884 23.3606 23.5841 22.901C24.5979 18.0002 27.0572 5.59578 27.98 1.13778C28.05 0.801779 27.9333 0.452578 27.6767 0.228178C27.42 0.00377795 27.0642 -0.0610223 26.7469 0.0601779C21.8551 1.92258 6.79031 7.73659 0.632783 10.0802C0.241959 10.229 -0.0123689 10.6154 0.000464152 11.039C0.0144638 11.4638 0.292124 11.8322 0.692282 11.9558C3.45372 12.8054 7.07847 13.9874 7.07847 13.9874C7.07847 13.9874 8.77243 19.2494 9.65558 21.9254C9.76641 22.2614 10.0219 22.5254 10.3591 22.6166C10.6951 22.7066 11.0544 22.6118 11.3052 22.3682C12.7238 20.9906 14.9171 18.8606 14.9171 18.8606C14.9171 18.8606 19.0844 22.0034 21.448 23.735ZM8.60327 13.3226L10.5621 19.9682L10.9972 15.7598C10.9972 15.7598 18.5652 8.73859 22.8794 4.73658C23.0054 4.61898 23.0229 4.42218 22.9179 4.28418C22.8141 4.14618 22.6228 4.11378 22.4793 4.20738C17.4791 7.49179 8.60327 13.3226 8.60327 13.3226Z'
                fill='currentColor'
              />
            </svg>
          </a>
        </li>
      </ul>
    </div>
  )
}

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { name: 'Collection', link: '/' },
    { name: 'Manifesto', link: '/manifesto' },
    { name: 'Game Plan', link: '/game-plan' },
    { name: 'Members', link: '/members' },
    { name: 'Treasury', link: '/treasury' },
  ]
  const barClasses = 'w-5 h-0.5 bg-white my-1 transition-all duration-500'

  return (
    <nav className='fixed top-0 left-0 z-10 flex items-center w-full text-xl text-white bg-black md:h-25 md:flex'>
      <NavigationBody
        items={navItems}
        className='hidden md:flex'
        onClick={() => setIsOpen(false)}
      />
      <div className='relative w-full pt-12 md:hidden'>
        <div
          className='absolute w-10 left-4 top-3'
          role='button'
          onClick={() => setIsOpen(!isOpen)}
        >
          <div
            className={classNames(
              barClasses,
              isOpen
                ? '-rotate-45 -translate-x-1 translate-y-1'
                : 'rotate-0 translate-x-0 translate-y-0',
            )}
          />
          <div className={classNames(barClasses, isOpen ? 'opacity-0' : 'opacity-100')} />
          <div
            className={classNames(
              barClasses,
              isOpen
                ? 'rotate-45 -translate-x-1 -translate-y-2'
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
