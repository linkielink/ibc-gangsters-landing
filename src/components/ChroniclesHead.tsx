'use client'

import { useParams } from 'next/navigation'

export default function ChroniclesHead() {
  const params = useParams()
  const chapter = Number(params.chapter)
  const isNumber = !isNaN(chapter)
  return (
    <div className='flex flex-wrap gap-2 -mb-12'>
      <h1 className='w-full text-4xl text-center'>The IBC Chronicles</h1>
      <h2 className='w-full text-xl text-center text-white/60'>
        {chapter && isNumber ? `Chapter ${chapter}` : 'Welcome to the Inter Blockchain County'}
      </h2>
    </div>
  )
}
