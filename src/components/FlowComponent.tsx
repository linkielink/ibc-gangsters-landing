import classNames from 'classnames'
import Image from 'next/image'

interface Props {
  title: string
  subtext: string
  imageUrl: string
  href: string
  fullWidth?: boolean
}

export default function FlowComponent(props: Props) {
  const { subtext, imageUrl, href, title, fullWidth } = props

  return (
    <div
      className={classNames(
        'flex flex-grow-0 flex-shrink-0 flex-wrap h-full transition-colors duration-500 rounded bg-white/10 hover:bg-white/20 glow-flow-item',
        fullWidth ? 'w-full' : 'w-[90px] md:w-[340px]',
      )}
    >
      <a
        href={href}
        title={title}
        target='_blank'
        className='block w-full max-w-full p-2 text-center'
      >
        <p className='w-full py-2 text-xs text-center break-words md:text-base'>{title}</p>
        <Image
          className='w-full max-w-full'
          src={imageUrl}
          alt={title}
          width={fullWidth ? 1024 : 400}
          height={fullWidth ? 500 : 400}
          loading='lazy'
        />
        <p className='block w-full py-2 text-xs text-center break-words'>{subtext}</p>
      </a>
    </div>
  )
}
