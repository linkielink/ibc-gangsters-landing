'use client'
import classNames from 'classnames'
import { useEffect, useState } from 'react'

interface Props {
  elements: string[]
  header?: string
}

interface ChapterLink {
  element: string
  elementID: string
  isActive: boolean
  onClick?: (e: any) => void
}

function ChapterLink(props: ChapterLink) {
  const { element, elementID, isActive, onClick } = props
  return (
    <li key={elementID}>
      <a
        className={classNames(
          'block py-1 pl-2 text-white/60 hover:text-white text-sm',
          isActive && 'text-underline pointer-events-none !text-white',
        )}
        title={`Scroll to: ${element}`}
        href={`#${elementID}`}
        onClick={onClick}
      >
        {element}
      </a>
    </li>
  )
}

export default function SideNav(props: Props) {
  const { elements, header } = props
  const [activeId, setActiveId] = useState<string | null>(null)

  useEffect(() => {
    if (typeof document === 'undefined') return
    const navElement = document.getElementById('index') ?? null
    if (navElement === null) return

    const onScroll = (e: any) => {
      const navWrapper = document.getElementById('index-wrapper') ?? null
      if (navWrapper === null) return
      const navWrapperRect = navWrapper.getBoundingClientRect()
      if (e.target === null) return
      let foundElement = false
      elements.forEach((element, _) => {
        const elementID = element.toLowerCase().replaceAll(' ', '-')
        const domElement = document.getElementById(elementID)
        if (!domElement) return
        const rect = domElement.getBoundingClientRect()
        if (rect.top <= 80) {
          setActiveId(elementID)
          foundElement = true
        }
      })

      if (navWrapperRect.top <= 0 && !navElement.classList.contains('fixed')) {
        navElement.classList.add('fixed')
        navElement.classList.remove('absolute')
      }

      if (navWrapperRect.top > 0 && !navElement.classList.contains('absolute')) {
        navElement.classList.add('absolute')
        navElement.classList.remove('fixed')
        setActiveId(null)
      }
    }
    window.addEventListener('scroll', onScroll)

    return () => window.removeEventListener('scroll', onScroll)
  }, [elements])

  useEffect(() => {
    if (typeof document === 'undefined' || typeof location === 'undefined') return
    const hash = location.hash
    if (hash) {
      const domElement = document.getElementById(hash.replace('#', ''))
      if (domElement) domElement.scrollIntoView({ behavior: 'smooth' })
    }
  }, [])

  return (
    <div className='relative hidden w-full h-0 lg:block' id='index-wrapper'>
      <nav className='absolute z-30 left-2 top-2 pt-30 w-[270px]' id='index'>
        <div className='flex flex-wrap p-4 bg-black border border-white/50'>
          <p className='w-full'>{header ? header : 'Index'}</p>
          <ul>
            {elements.map((element) => {
              const elementID = element.toLowerCase().replaceAll(' ', '-')

              if (typeof document === 'undefined')
                return (
                  <ChapterLink
                    key={elementID}
                    element={element}
                    elementID={elementID}
                    isActive={activeId === elementID}
                  />
                )

              const domElement = document.getElementById(elementID)
              return (
                <ChapterLink
                  key={elementID}
                  element={element}
                  elementID={elementID}
                  isActive={activeId === elementID}
                  onClick={(e) => {
                    e.preventDefault()
                    if (history.pushState) {
                      history.pushState(null, '', `#${elementID}`)
                    } else {
                      location.hash = `#${elementID}`
                    }
                    if (domElement) domElement.scrollIntoView({ behavior: 'smooth' })
                  }}
                />
              )
            })}
          </ul>
        </div>
      </nav>
    </div>
  )
}
