import Image from 'next/image'

interface Props {
  id?: string
  itemName: string
  title: string
  href: string
  imageUrl: string
  hash: string
  searchString?: string
  getHighlightedText?: (text: string, highlight: string) => JSX.Element
  balance?: number
}

export default function ItemCard(props: Props) {
  const { id, itemName, title, href, imageUrl, searchString, hash, getHighlightedText, balance } =
    props

  const formattedBalance = balance
    ? balance.toLocaleString(undefined, {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      })
    : undefined

  return (
    <a
      title={title}
      href={href}
      className='flex flex-col w-full gap-2 p-2 overflow-hidden bg-black rounded-lg md:transition-all md:duration-500 md:bg-black/80 md:hover:bg-black'
      target='_blank'
    >
      <div className='w-full'>
        <Image src={imageUrl} alt={itemName} width={444} height={578} loading='lazy' />
      </div>
      <p className='w-full text-white'>
        {getHighlightedText ? getHighlightedText(itemName, searchString ?? '') : itemName}
      </p>
      {formattedBalance && (
        <p className='w-full text-sm font-thin text-white/50'>Balance: {formattedBalance}</p>
      )}
      {id && (
        <p className='w-full text-sm font-thin text-white/50'>
          Inscription #{getHighlightedText ? getHighlightedText(id, searchString ?? '') : id}
        </p>
      )}
      <p className='w-full text-xs font-thin break-words text-white/30'>
        {getHighlightedText ? getHighlightedText(hash, searchString ?? '') : hash}
      </p>
    </a>
  )
}
