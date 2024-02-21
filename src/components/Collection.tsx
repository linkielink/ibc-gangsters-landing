'use client'
import { gangsters } from 'data/gangsters'
import Image from 'next/image'
import { ChangeEvent, useCallback, useEffect, useState } from 'react'

export default function Collection() {
  const [sortedGangsters, setSortedGangsters] = useState(gangsters)
  const [isVisible, setIsVisible] = useState(false)
  const sortGangsters = useCallback(
    (event: ChangeEvent<HTMLSelectElement>) => {
      const sorted = sortedGangsters.sort((a, b) => {
        if (event.target.value === 'name') {
          return a.name.localeCompare(b.name)
        } else {
          return a.id - b.id
        }
      })

      setSortedGangsters([...sorted])
    },
    [sortedGangsters],
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
      <div className='flex items-center justify-end w-full gap-2 mb-8'>
        <p className='text-black'>Sort by:</p>
        <div className='w-[250px]'>
          <select
            className='w-full p-2 text-black border border-black rounded-lg outline-none focus:outline-none'
            onChange={(event) => sortGangsters(event)}
          >
            <option value='name'>Gangster ID</option>
            <option value='id'>Inscription ID</option>
          </select>
        </div>
      </div>
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
              <div className='w-full text-white'>{gangster.name}</div>
              <div className='w-full text-sm font-thin text-white/50'>#{gangster.id - 1}</div>
            </a>
          )
        })}
      </div>
    </section>
  )
}
