import classNames from 'classnames'
import Image from 'next/image'

interface Props {
  imageUrl: string
  content: React.ReactNode
  title: string
  direction: 'ltr' | 'rtl'
  done?: boolean
}

export default function TextImage(props: Props) {
  const { imageUrl, content, title, direction, done } = props
  return (
    <div
      className={classNames(
        'flex flex-col md:flex-row items-start justify-start gap-4 p-4 bg-white/5 rounded',
        direction === 'ltr' ? 'md:flex-row-reverse' : 'md:flex-row',
        done ? 'glow-migaloo' : 'glow-ibc',
      )}
    >
      <div className='w-full md:w-1/2'>
        <Image
          src={imageUrl}
          alt={title}
          width={800}
          height={800}
          loading='lazy'
          className='rounded'
        />
      </div>
      <div className={classNames('w-full md:w-1/2', direction === 'ltr' ? 'md:pr-4' : 'md:pl-4')}>
        <h2 className='pb-4 text-lg'>{title}</h2>
        {content}
      </div>
    </div>
  )
}
