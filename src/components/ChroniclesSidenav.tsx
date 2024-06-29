'use client'

import SideNav from 'components/SideNav'
import { chronicles } from 'data/chronicles'
import { useParams } from 'next/navigation'

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
