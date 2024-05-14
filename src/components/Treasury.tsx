'use client'

import ItemCard from 'components/ItemCard'
import TreasuryFilter from 'components/TreasuryFilter'
import TreasuryFlow from 'components/TreasuryFlow'
import useTreasuryAssets from 'hooks/treasury/useTreasuryAssets'
import useTreasuryInscriptions from 'hooks/treasury/useTreasuryInscriptions'
import useTreasuryTokens from 'hooks/treasury/useTreasuryTokens'
import { useCallback, useMemo, useState } from 'react'

export default function Treasury() {
  const { purchases, gangsters, miscellaneous } = useTreasuryInscriptions()
  const tokens = useTreasuryTokens()
  const assets = useTreasuryAssets()
  const [treasuryFlow, setTreasuryFlow] = useState<boolean>(false)
  const [filter, setFilter] = useState<string[]>([])
  const [items, setItems] = useState<TreasuryItem[]>([])

  const updateItems = useCallback(
    (filter: string[], sort: SortDirection) => {
      setFilter(filter)
      const newItems = [] as TreasuryItem[]
      if (filter.includes('assets')) newItems.push(...assets)
      if (filter.includes('tokens')) newItems.push(...tokens)
      if (filter.includes('purchases')) newItems.push(...purchases)
      if (filter.includes('miscellaneous')) newItems.push(...miscellaneous)
      if (filter.includes('gangsters')) newItems.push(...gangsters)

      const sortedItems = newItems.sort((a, b) => {
        if (sort === 'id desc') return b.id - a.id
        if (sort === 'id asc') return a.id - b.id
        if (sort === 'name desc') return b.name.localeCompare(a.name)
        if (sort === 'name asc') return a.name.localeCompare(b.name)
        return 0
      })
      setItems(sortedItems)
    },
    [assets, tokens, purchases, gangsters, miscellaneous],
  )

  const isLoaded = useMemo(() => {
    return assets.length > 0 && tokens.length > 0 && purchases.length > 0
  }, [assets, tokens, purchases])

  return (
    <section className='w-full flex flex-col items-center justify-center py-20 px-4 max-w-[1024px] mx-auto relative'>
      <h1 className='w-full pb-8 text-4xl text-center' id='name'>
        IBC Gangsters Treasury
      </h1>
      <div className='flex flex-wrap justify-center w-full'>
        <button
          className='px-4 py-2 mb-4 text-sm text-black transition-colors duration-500 bg-white rounded hover:bg-white/60'
          onClick={() => setTreasuryFlow(!treasuryFlow)}
        >
          {treasuryFlow ? 'Hide Treasury Flow' : 'Show Treasury Flow'}
        </button>
        {treasuryFlow && <TreasuryFlow />}
      </div>
      <h3 className='w-full pb-4 text-lg'>The IBC Gangsters Stash</h3>
      <TreasuryFilter isLoaded={isLoaded} filter={filter} updateItems={updateItems} />
      <h3 className='w-full pb-4 text-lg'>
        {items.length} {items.length === 1 ? 'Item' : 'Items'}
      </h3>
      <section className='w-full min-h-screen'>
        <div className='grid w-full grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4'>
          <>
            {items.length > 0 &&
              items.map((item, index) => (
                <ItemCard
                  key={index}
                  itemName={item.name}
                  href={item.href}
                  imageUrl={item.content_path}
                  title={item.title}
                  hash={item.hash}
                  balance={item.balance}
                  className='h-full'
                />
              ))}
            <div className='flex w-full' />
            <div className='flex w-full' />
            <div className='flex w-full' />
          </>
        </div>
      </section>
    </section>
  )
}
