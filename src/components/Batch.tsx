'use client'
import ItemCard from 'components/ItemCard'
import { gangsters } from 'data/gangsters'
import { useMemo } from 'react'

interface Props {
  batchId: string
}

export default function Batch(props: Props) {
  const dates: Record<string, string | undefined> = {
    '1': '4/24/24',
    '2': undefined,
    '3': undefined,
    '4': undefined,
    '5': undefined,
    '6': undefined,
    '7': undefined,
    '8': undefined,
    '9': undefined,
  }
  const { batchId } = props

  const filtered = useMemo(() => {
    const sorted = gangsters.sort((a, b) => {
      return a.name.localeCompare(b.name)
    })

    return sorted.reduce((filteredGangsters, g) => {
      const gangsterID = g.name.replace('IBC Gangsters #', '')
      if (gangsterID.slice(-1) === batchId) {
        filteredGangsters.push(g)
        return filteredGangsters
      }
      return filteredGangsters
    }, [] as Gangster[])
  }, [gangsters])
  const date = dates[batchId]
  const title = date ? `Batch #${batchId} - ${date}` : `Batch #${batchId}`
  return (
    <div className='w-full'>
      <section className='w-full flex flex-col items-center justify-center py-20 px-4 max-w-[1024px] mx-auto relative'>
        <h2 className='w-full pb-4 text-lg'>{title}</h2>
        <section className='min-h-screen'>
          <div className='grid w-full grid-cols-3 gap-4 md:grid-cols-5 lg:grid-cols-6'>
            {filtered.map((gangster) => (
              <ItemCard
                key={gangster.id}
                href={`https://asteroidprotocol.io/app/inscription/${gangster.hash}`}
                itemName={gangster.name}
                imageUrl={gangster.image}
              />
            ))}
          </div>
        </section>
      </section>
    </div>
  )
}
