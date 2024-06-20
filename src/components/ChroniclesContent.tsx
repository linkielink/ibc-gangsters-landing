'use client'

import classNames from 'classnames'
import Story from 'components/Story'
import { chronicles } from 'data/chronicles'
import Image from 'next/image'
import { useParams } from 'next/navigation'

export default function ChroniclesHead() {
  const params = useParams()
  const chapter = Number(params.chapter)
  const isNumber = !isNaN(chapter)
  const stories =
    chapter && isNumber ? chronicles.filter((story) => story.chapter === chapter) : chronicles

  return stories.map((story) => (
    <Story storyName={story.title} named={story.named} misc={story.misc} key={story.title}>
      {story.content.map((content, index) => {
        let firstText = false
        if (content.type === 'image')
          return (
            <Image
              key={index}
              src={`/images/lore/${content.src}`}
              width={content.width}
              height={content.height}
              className={classNames(
                'border-white border-[5px] w-full mb-4 mt-2',
                content.widths,
                content.position === 'left' ? 'float-left md:mr-8' : 'float-right md:ml-8',
              )}
              alt={content.alt}
            />
          )

        if (content.type === 'text') {
          const className = firstText ? 'my-8' : 'mb-8'
          firstText = true
          return (
            <p className={classNames(className, 'text-justify')} key={index}>
              {content.text}
            </p>
          )
        }
      })}
    </Story>
  ))
}
