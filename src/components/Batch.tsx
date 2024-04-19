'use client'
import ItemCard from 'components/ItemCard'
import { gangsters } from 'data/gangsters'
import { useMemo } from 'react'

interface Props {
  batchId: string
}

const dates: Record<string, string | undefined> = {
  '1': '4/24/24',
}

const inAndExcludes: Record<string, { gone: string[]; replacement: string[] }> = {
  '1': {
    gone: ['001', '111', '151', '301'],
    replacement: ['020', '030', '040', '050'],
  },
}

export default function Batch(props: Props) {
  // console.log(`### BATCH ${props.batchId} ###`)

  const { batchId } = props

  const filtered = useMemo(() => {
    const sorted = gangsters.sort((a, b) => {
      return a.name.localeCompare(b.name)
    })

    return sorted.reduce((filteredGangsters, g) => {
      const gangsterID = g.name.replace('IBC Gangsters #', '')
      if (
        (gangsterID.slice(-1) === batchId && !inAndExcludes[batchId].gone.includes(gangsterID)) ||
        inAndExcludes[batchId].replacement.includes(gangsterID)
      ) {
        filteredGangsters.push(g)
        return filteredGangsters
      }
      return filteredGangsters
    }, [] as Gangster[])
  }, [batchId])
  const date = dates[batchId]
  const title = date ? `${date}` : `Batch #${batchId}`

  return (
    <div className='w-full'>
      <section className='w-full flex flex-col items-center justify-center py-20 px-4 max-w-[1024px] mx-auto relative'>
        <h1 className='w-full pb-8 text-4xl text-center'>{title}</h1>
        <section className='min-h-screen'>
          <div className='grid w-full grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-5'>
            {filtered.map((gangster) => {
              // console.log(
              //  `${gangster.name} Memo:`,
              //  `urn:marketplace:cosmoshub-4@v1;list.inscription$h=${gangster.hash},amt=4.24,mindep=0.0001,to=100`,
              //)
              return (
                <ItemCard
                  key={gangster.id}
                  href={`https://asteroidprotocol.io/app/inscription/${gangster.hash}`}
                  itemName={gangster.name}
                  imageUrl={gangster.imageUrl}
                />
              )
            })}
          </div>
        </section>
      </section>
    </div>
  )
}
