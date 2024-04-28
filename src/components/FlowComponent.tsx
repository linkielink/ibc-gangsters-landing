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
    <a
      href={href}
      title={title}
      target='_blank'
      className={classNames(
        'flex flex-wrap h-full gap-2 p-2 transition-colors duration-500 rounded bg-white/10 hover:bg-white/20 glow-flow-item',
        fullWidth ? 'w-full' : 'w-[340px]',
      )}
    >
      <p className='w-full text-center'>{title}</p>
      <Image
        src={imageUrl}
        alt={title}
        width={fullWidth ? 1024 : 340}
        height={fullWidth ? 500 : 340}
        loading='lazy'
      />
      <p className='w-full text-xs text-center'>{subtext}</p>
    </a>
  )
}
