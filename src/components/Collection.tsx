'use client'
import { gangsters } from 'data/gangsters'
import Image from 'next/image'
import { ChangeEvent, useCallback, useEffect, useMemo, useState } from 'react'

export default function Collection() {
  const [sortedGangsters, setSortedGangsters] = useState(gangsters)
  const [isVisible, setIsVisible] = useState(false)
  const [searchString, setSearchString] = useState('')
  const sortGangsters = useCallback(
    (event: ChangeEvent<HTMLSelectElement>) => {
      const sorted = sortedGangsters.sort((a, b) => {
        if (event.target.value === 'name') {
          return a.name.localeCompare(b.name)
        } else {
          return a.id - b.id
        }
      })

      filterGangsters(searchString)
      setSortedGangsters([...sorted])
    },
    [sortedGangsters, searchString],
  )

  const scrollToTop = () => {
    window.scrollTo({
      top: 640,
      behavior: 'smooth',
    })
  }

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 500) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', toggleVisibility)

    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  useEffect(() => {
    filterGangsters(searchString)
  }, [searchString])

  const filterGangsters = (query: string) => {
    const filtered = gangsters.filter(
      (gangster) =>
        Number(gangster.id - 1)
          .toString()
          .includes(query) ||
        gangster.hash.toLowerCase().includes(query) ||
        gangster.name.toLowerCase().includes(query),
    )

    setSortedGangsters([...filtered])
  }

  const getHighlightedText = useCallback((text: string, highlight: string) => {
    const parts = text.split(new RegExp(`(${highlight})`, 'gi'))
    return (
      <span>
        {parts.map((part, i) => (
          <span
            key={i}
            className={part.toLowerCase() === highlight.toLowerCase() ? 'bg-white text-black' : ''}
          >
            {part}
          </span>
        ))}
      </span>
    )
  }, [])

  const collectionHead = useMemo(() => {
    if (sortedGangsters.length === 501) return '501 IBC Gangsters (Total)'
    if (sortedGangsters.length === 0) return 'No IBC Gangster Found'
    if (sortedGangsters.length === 1) return '1 IBC Gangster (Filtered)'
    return `${sortedGangsters.length} IBC Gangsters (Filtered)`
  }, [sortedGangsters.length])

  return (
    <section className='w-full flex flex-col items-center justify-center py-20 px-4 max-w-[1024px] mx-auto relative'>
      {isVisible && (
        <a
          href='/'
          onClick={(e) => {
            e.preventDefault()
            scrollToTop()
          }}
          className='fixed flex items-center justify-center w-10 h-10 pb-2 text-3xl text-white transition-all duration-500 bg-black/50 hover:bg-black right-3 bottom-14'
        >
          &uarr;
        </a>
      )}
      <h1 className='w-full pb-8 text-4xl text-center' id='name'>
        IBC Gangsters
      </h1>
      <h2 className='w-full pb-8 text-xl text-center'>Inscription Range: #2032 - #3680</h2>
      <div className='flex flex-col justify-between w-full gap-4 mb-4 md:gap-10 md:flex-row'>
        <div className='relative flex items-center flex-grow gap-2'>
          <p className='absolute px-2 text-black left'>Search:</p>
          <input
            type='text'
            className='w-full p-2 border border-black rounded-lg outline-none text-black/60 pl-22 focus:outline-none'
            placeholder='...by Gangster ID, Inscription ID, Hash or Name'
            maxLength={64}
            onChange={(event) => {
              setSearchString(event.target.value.toLowerCase())
            }}
          />
        </div>
        <div className='flex items-center justify-end flex-shrink gap-2'>
          <p className='text-black'>Sort by:</p>
          <div className='w-[200px]'>
            <select
              className='w-full p-2 text-black border border-black rounded-lg outline-none focus:outline-none'
              onChange={(event) => sortGangsters(event)}
            >
              <option value='name'>Gangster ID</option>
              <option value='id'>Inscription ID</option>
            </select>
          </div>
        </div>
      </div>

      <h3 className='w-full pb-4 text-lg'>{collectionHead}</h3>
      <section className='min-h-screen'>
        <div className='grid w-full grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4'>
          {sortedGangsters.map((gangster) => {
            return (
              <a
                key={gangster.id}
                title={`Buy ${gangster.name} - Inscription #${gangster.id - 1}`}
                href={`https://asteroidprotocol.io/app/inscription/${gangster.hash}`}
                className='flex flex-col w-full gap-2 p-2 overflow-hidden bg-black rounded-lg md:transition-all md:duration-500 md:bg-black/80 md:hover:bg-black'
                target='_blank'
              >
                <div className='w-full'>
                  <Image
                    src={gangster.image}
                    alt={gangster.name}
                    width={444}
                    height={578}
                    loading='lazy'
                  />
                </div>
                <p className='w-full text-white'>
                  {getHighlightedText(gangster.name, searchString)}
                </p>
                <p className='w-full text-sm font-thin text-white/50'>
                  Inscription #
                  {getHighlightedText(Number(gangster.id - 1).toString(), searchString)}
                </p>
                <p className='w-full text-xs font-thin break-words text-white/30'>
                  {getHighlightedText(gangster.hash, searchString)}
                </p>
              </a>
            )
          })}
        </div>
      </section>
    </section>
  )
}
