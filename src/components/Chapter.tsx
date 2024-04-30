import ItemCard from 'components/ItemCard'
import { gangsters } from 'data/gangsters'

interface Props {
  chapterName: string
  anchor: string
  named?: string[]
  misc?: string[]
  children: React.ReactNode | React.ReactNode[]
}

export default function Chapter(props: Props) {
  const { chapterName, anchor, named, misc, children } = props
  return (
    <article className='pb-12'>
      <h2 className='w-full pb-4 text-3xl' id={anchor}>
        {chapterName}
      </h2>
      {children}
      {(named || misc) && (
        <div className='py-8'>
          <h3 className='w-full py-4 text-lg text-white/60'>{`Gangsters featured in "${chapterName}"`}</h3>
          <div className='grid grid-cols-6 gap-4'>
            {named &&
              named.map((namedGangsterHash) => {
                const gangster = gangsters.find((g) => g.hash === namedGangsterHash)
                return gangster ? (
                  <div className='col-span-2 row-span-2'>
                    <ItemCard
                      key={gangster.id}
                      href={`https://asteroidprotocol.io/app/inscription/${gangster.hash}`}
                      itemName={gangster.name}
                      imageUrl={gangster.imageUrl}
                      traits={gangster.traits}
                    />
                  </div>
                ) : null
              })}
            {misc &&
              misc.map((miscGangsterHash) => {
                const gangster = gangsters.find((g) => g.hash === miscGangsterHash)
                return gangster ? (
                  <div>
                    <ItemCard
                      key={gangster.id}
                      href={`https://asteroidprotocol.io/app/inscription/${gangster.hash}`}
                      itemName={gangster.name}
                      imageUrl={gangster.imageUrl}
                    />
                  </div>
                ) : null
              })}
          </div>
        </div>
      )}
    </article>
  )
}
