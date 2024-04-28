import classNames from 'classnames'

interface Props {
  title: string
  copy: string
  subtext: string
  imageUrl: string
  href: string
  fullWidth?: boolean
}

export default function FlowComponent(props: Props) {
  const { subtext, copy, href, title, fullWidth } = props

  return (
    <div
      className={classNames(
        'flex flex-grow-0 flex-shrink-0 flex-wrap h-full transition-colors duration-500 rounded bg-white/10 hover:bg-white/20 min-h-[92px]',
        fullWidth ? 'w-full' : 'w-1/3',
      )}
    >
      <a
        href={href}
        title={title}
        target='_blank'
        className='flex flex-wrap w-full max-w-full p-2 text-center'
      >
        <p className='w-full text-xs text-center break-words md:text-lg'>{title}</p>
        <p className='w-full text-xs text-center break-words md:text-base'>{copy}</p>
        <p className='block w-full text-xs text-center break-words'>{subtext}</p>
      </a>
    </div>
  )
}
