'use client'
import ItemCard from 'components/ItemCard'
import { gangsters } from 'data/gangsters'
import React, { ChangeEvent, useCallback, useEffect, useMemo, useState } from 'react'

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
        gangster.id.toString().includes(query) ||
        gangster.hash.toLowerCase().includes(query) ||
        gangster.name.toLowerCase().includes(query),
    )
    setSortedGangsters([...filtered])
  }

  const getHighlightedText = useCallback((text: string, highlight: string) => {
    const parts = text.split(new RegExp(`(${highlight})`, 'gi'))
    if (highlight.trim() === '') return <React.Fragment>{text}</React.Fragment>
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
    if (sortedGangsters.length === 500) return '500 IBC Gangsters (Total)'
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
          className='fixed flex items-center justify-center w-10 h-10 pb-2 text-3xl text-white transition-all duration-500 bg-white/50 hover:bg-white right-3 bottom-14'
        >
          &uarr;
        </a>
      )}
      <h1 className='w-full pb-8 text-4xl text-center' id='name'>
        IBC Gangsters
      </h1>
      <h2 className='w-full pb-8 text-xl text-center'>Inscription Range: #1868 - #3467</h2>
      <div className='flex flex-col justify-between w-full gap-4 mb-4 md:gap-10 md:flex-row'>
        <div className='relative flex items-center flex-grow gap-2'>
          <p className='absolute px-2 text-black left'>Search:</p>
          <input
            type='text'
            className='w-full p-2 border border-white rounded-lg outline-none text-black/60 pl-22 focus:outline-none'
            placeholder='...by Gangster ID, Inscription ID, Hash or Name'
            maxLength={64}
            onChange={(event) => {
              setSearchString(event.target.value.toLowerCase())
            }}
          />
        </div>
        <div className='flex items-center justify-end flex-shrink gap-2'>
          <p className='text-white'>Sort by:</p>
          <div className='w-[200px]'>
            <select
              className='w-full p-2 text-black border border-white rounded-lg outline-none focus:outline-none'
              onChange={(event) => sortGangsters(event)}
            >
              <option value='name'>Gangster ID</option>
              <option value='id'>Inscription ID</option>
            </select>
          </div>
        </div>
      </div>

      <h3 className='w-full pb-4 text-lg'>{collectionHead}</h3>
      <section className='w-full min-h-screen'>
        <div className='grid w-full grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4'>
          {sortedGangsters.map((gangster) => (
            <ItemCard
              key={gangster.id}
              title={`${gangster.name} - Inscription #${gangster.id}`}
              href={`https://asteroidprotocol.io/app/inscription/${gangster.hash}`}
              id={gangster.id.toString()}
              itemName={gangster.name}
              imageUrl={gangster.imageUrl}
              traits={gangster.traits}
              hash={gangster.hash}
              searchString={searchString}
              getHighlightedText={getHighlightedText}
            />
          ))}
        </div>
      </section>
    </section>
  )
}
