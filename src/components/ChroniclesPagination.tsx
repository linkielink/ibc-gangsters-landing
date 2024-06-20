'use client'

import { chronicles } from 'data/chronicles'
import { useParams } from 'next/navigation'

export default function ChroniclesPagination() {
  const params = useParams()
  const chapter = Number(params.chapter)
  const isNumber = !isNaN(chapter)
  const nextChapter = chapter && isNumber ? chapter + 1 : null
  const stories =
    chapter && isNumber ? chronicles.filter((story) => story.chapter === chapter) : chronicles
  const nextStories = nextChapter ? chronicles.filter((story) => story.chapter === nextChapter) : []

  if (stories.length === 0) return <p className='w-full py-20 text-4xl text-center'>Stay tuned!</p>

  if (!nextChapter || !nextStories.length)
    return <p className='w-full py-20 text-4xl text-center'>To be continued...</p>

  if (nextStories.length >= 1)
    return (
      <div className='flex w-full py-20 justfy-between'>
        <div className='w-1/2 text-left'>
          {chapter > 1 && (
            <a href={`/chronicles/${nextChapter}`} className='text-4xl hover:underline'>
              &larr; Previous
            </a>
          )}
        </div>
        <div className='w-1/2 text-right'>
          <a href={`/chronicles/${chapter + 1}`} className='text-4xl hover:underline'>
            Next &rarr;
          </a>
        </div>
      </div>
    )
}
