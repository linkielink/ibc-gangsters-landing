import classNames from 'classnames'
import { useEffect, useState } from 'react'

interface Props {
  filter: string[]
  isLoaded: boolean
  updateItems: (filter: string[], sort: SortDirection) => void
}

const availableFilter = [
  { name: 'assets', label: 'Assets' },
  { name: 'tokens', label: 'Tokens' },
  { name: 'purchases', label: 'Purchases' },
  { name: 'miscellaneous', label: 'Collabs & Gifts' },
  { name: 'gangsters', label: 'IBC Gangsters' },
]

export default function TreasuryFilter(props: Props) {
  const { filter, updateItems, isLoaded } = props
  const [sort, setSort] = useState<SortDirection>('id asc')

  useEffect(() => {
    if (!isLoaded) return
    updateItems(['assets', 'tokens', 'purchases'], 'id asc')
  }, [isLoaded, updateItems])

  return (
    <div className='w-full flex flex-wrap gap-4 pb-8 items-center max-w-[1024px] mx-auto'>
      <>
        <p className='text-sm'>Filter:</p>
        {availableFilter.map((filterItem) => (
          <div
            key={filterItem.name}
            role='button'
            className={classNames(
              'rounded px-4 py-2 text-sm transition-colors duration-500 hover:cursor-pointer',
              filter.includes(filterItem.name)
                ? 'bg-white text-black'
                : 'bg-ibc text-white/80 hover:bg-white/60 hover:text-black',
            )}
            onClick={() => {
              if (filter.includes(filterItem.name))
                updateItems(
                  filter.filter((item) => item !== filterItem.name),
                  sort,
                )
              if (!filter.includes(filterItem.name)) updateItems([...filter, filterItem.name], sort)
            }}
          >
            {filterItem.label}
          </div>
        ))}
        <div className='flex items-center gap-4'>
          <p className='text-sm'>Sort:</p>
          <div className='w-[280px]'>
            <select
              className='w-full p-2 text-sm text-black border border-white rounded-lg outline-none focus:outline-none'
              onChange={(event) => {
                setSort(event.target.value as SortDirection)
                updateItems(filter, event.target.value as SortDirection)
              }}
            >
              <option value='id asc'>Inscription ID ascending</option>
              <option value='id desc'>Inscription ID descending</option>
              <option value='name asc'>Name ascending</option>
              <option value='name desc'>Name descending</option>
            </select>
          </div>
        </div>
      </>
    </div>
  )
}
