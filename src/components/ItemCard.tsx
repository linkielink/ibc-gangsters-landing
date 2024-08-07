import classNames from 'classnames'
import Image from 'next/image'

interface Props {
  id?: string
  itemName: string
  title?: string
  href: string
  imageUrl: string
  hash?: string
  searchString?: string
  getHighlightedText?: (text: string, highlight: string) => JSX.Element
  balance?: number
  traits?: Traits
  className?: string
  disableFlip?: boolean
}

function KeyValue({
  keyName,
  value,
  containerClassName,
  className,
}: {
  keyName: string
  value: string
  containerClassName?: string
  className?: string
}) {
  return (
    <div className={classNames('w-full', containerClassName)}>
      <p className={classNames('w-full text-xs text-white/40', className)}>{keyName}</p>
      <p className={classNames('w-full text-sm', className)}>{value}</p>
    </div>
  )
}

export default function ItemCard(props: Props) {
  const {
    id,
    itemName,
    title,
    href,
    imageUrl,
    searchString,
    hash,
    getHighlightedText,
    balance,
    traits,
    className,
    disableFlip,
  } = props

  const formattedBalance = balance
    ? balance.toLocaleString(undefined, {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      })
    : undefined

  const syndicate = traits ? traits.syndicate.split(' ')[0].toLowerCase() : ''
  return (
    <a title={title} href={href} className={classNames('w-full', className)} target='_blank'>
      <div
        className={classNames(
          'w-full flex h-full items-center',
          traits && !disableFlip && 'group [perspective:1000px]',
        )}
      >
        <div
          className={classNames(
            'relative flex w-full h-full overflow-hidden rounded-lg md:transition-all md:duration-500',
            traits && `glow-${syndicate}`,
            traits &&
              !disableFlip &&
              '[transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]',
            disableFlip && `hover:bg-${syndicate}/20`,
          )}
        >
          {traits && !disableFlip && (
            <div
              className={classNames(
                'absolute flex flex-col gap-3 p-2 py-4 opacity-0 inset-0 w-full h-full',
                '[transform:rotateY(180deg)] group-hover:opacity-100 md:delay-200 md:duration-75 md:transition-[opacity]',
                `gradient-${syndicate}`,
              )}
            >
              <KeyValue
                keyName={traits.nickname ? 'Nickname' : 'Name'}
                value={traits.nickname ? traits.nickname : itemName}
                className='text-center'
                containerClassName='pb-2'
              />
              <KeyValue keyName='Sex' value={traits.sex} />
              <KeyValue keyName='Outfit' value={traits.outfit} />
              <KeyValue keyName='Headwear' value={traits.headwear} />
              <KeyValue keyName='Shades' value={traits.shades} />
              <KeyValue keyName='Bling' value={traits.bling} />
              <KeyValue keyName='Syndicate' value={traits.syndicate} />
            </div>
          )}
          <div
            className={classNames(
              'flex relative flex-col bg-white/10 w-full gap-2 p-2',
              '[transform:rotateY(0deg)] [backface-visibility:hidden] group-hover:opacity-0 md:delay-200 md:duration-75 transform-[opacity]',
            )}
          >
            <div className='w-full'>
              <Image
                src={imageUrl}
                alt={itemName}
                width={444}
                height={578}
                className='w-full'
                loading='lazy'
              />
            </div>
            {title && (
              <p className='w-full text-white'>
                {getHighlightedText ? getHighlightedText(itemName, searchString ?? '') : itemName}
              </p>
            )}
            {formattedBalance && (
              <p className='w-full text-sm font-thin text-white/50'>Balance: {formattedBalance}</p>
            )}
            {id && (
              <p className='w-full text-sm font-thin text-white/50'>
                Inscription #{getHighlightedText ? getHighlightedText(id, searchString ?? '') : id}
              </p>
            )}
            {hash && (
              <p className='w-full text-xs font-thin break-words text-white/30'>
                {getHighlightedText ? getHighlightedText(hash, searchString ?? '') : hash}
              </p>
            )}
          </div>
        </div>
      </div>
    </a>
  )
}
