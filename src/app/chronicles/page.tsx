import classNames from 'classnames'
import Chapter from 'components/Chapter'
import Hero from 'components/Hero'
import SideNav from 'components/SideNav'
import { metaData } from 'constants/pageMetadata'
import { chronicles } from 'data/chronicles'
import Image from 'next/image'

export const metadata = metaData.chronicles

export default function ChroniclesPage() {
  return (
    <>
      <Hero backgroundClass='bg-lore' />
      <SideNav articles={chronicles.map((chapter) => chapter.title)} />
      <section className='w-full flex flex-col items-center justify-center py-20 px-4 max-w-[1024px] mx-auto relative'>
        <div className='flex flex-wrap gap-2 -mb-12'>
          <h1 className='w-full text-4xl text-center'>The IBC Chronicles</h1>
          <h2 className='w-full text-xl text-center text-white/60'>
            Welcome to the Inter Blockchain County
          </h2>
        </div>
        {chronicles.map((chapter) => (
          <Chapter
            chapterName={chapter.title}
            named={chapter.named}
            misc={chapter.misc}
            key={chapter.title}
          >
            {chapter.content.map((content, index) => {
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
          </Chapter>
        ))}
        <p className='w-full py-20 text-4xl text-center'>To be continued...</p>
      </section>
    </>
  )
}
