'use client'
import classNames from 'classnames'
import { useEffect, useState } from 'react'

interface Props {
  articles: string[]
}

interface ChapterLink {
  article: string
  articleID: string
  isActive: boolean
  element: HTMLElement | null
  onClick?: (e: any) => void
}

function ChapterLink(props: ChapterLink) {
  const { article, articleID, element, isActive, onClick } = props
  return (
    <li key={articleID}>
      <a
        className={classNames(
          'block py-1 pl-2 text-white/60 hover:text-white text-sm',
          isActive && 'text-underline pointer-events-none !text-white',
        )}
        title={`Scroll to: ${article}`}
        href={`#${articleID}`}
        onClick={onClick}
      >
        {article}
      </a>
    </li>
  )
}

export default function SideNav(props: Props) {
  const { articles } = props
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
      articles.forEach((article, index) => {
        const articleID = article.toLowerCase().replaceAll(' ', '-')
        const element = document.getElementById(articleID)
        if (!element) return
        const rect = element.getBoundingClientRect()
        if (rect.top <= 80) {
          setActiveId(articleID)
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
  }, [articles])

  useEffect(() => {
    if (typeof document === 'undefined' || typeof location === 'undefined') return
    const hash = location.hash
    if (hash) {
      const element = document.getElementById(hash.replace('#', ''))
      if (element) element.scrollIntoView({ behavior: 'smooth' })
    }
  }, [])

  return (
    <div className='relative hidden w-full h-0 lg:block' id='index-wrapper'>
      <nav className='absolute z-30 left-2 top-2 pt-30' id='index'>
        <div className='flex flex-wrap p-4 bg-black border border-white/50'>
          <p className='w-full pb-2 text-lg'>Index:</p>
          <p className='w-full'>CHAPTER I</p>
          <ul>
            {articles.map((article) => {
              const articleID = article.toLowerCase().replaceAll(' ', '-')

              if (typeof document === 'undefined')
                return (
                  <ChapterLink
                    key={articleID}
                    article={article}
                    articleID={articleID}
                    isActive={activeId === articleID}
                    element={null}
                  />
                )

              const element = document.getElementById(articleID)
              return (
                <ChapterLink
                  key={articleID}
                  article={article}
                  articleID={articleID}
                  isActive={activeId === articleID}
                  element={element}
                  onClick={(e) => {
                    e.preventDefault()
                    if (history.pushState) {
                      history.pushState(null, '', `#${articleID}`)
                    } else {
                      location.hash = `#${articleID}`
                    }
                    if (element) element.scrollIntoView({ behavior: 'smooth' })
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
