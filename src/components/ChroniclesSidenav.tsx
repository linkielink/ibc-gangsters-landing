'use client'

import { chronicles } from 'data/chronicles'
import { useParams } from 'next/navigation'
import SideNav from './SideNav'

export default function ChroniclesPagination() {
  const params = useParams()
  const chapter = Number(params.chapter)
  const isNumber = !isNaN(chapter)
  const stories =
    chapter && isNumber ? chronicles.filter((story) => story.chapter === chapter) : chronicles

  return (
    <SideNav
      elements={stories.map((story) => story.title)}
      header={chapter && isNumber ? `CHAPTER ${chapter}` : undefined}
    />
  )
}
