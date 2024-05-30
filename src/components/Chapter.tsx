import ItemCard from 'components/ItemCard'
import { gangsters } from 'data/gangsters'

interface Props {
  chapterName: string
  named?: string[]
  misc?: string[]
  children: React.ReactNode | React.ReactNode[]
}

export default function Chapter(props: Props) {
  const { chapterName, named, misc, children } = props
  return (
    <article>
      <h2
        className='w-full pt-20 pb-4 text-3xl md:pt-30'
        id={chapterName.toLocaleLowerCase().replaceAll(' ', '-')}
      >
        {chapterName}
      </h2>
      {children}
      {(named || misc) && (
        <div className='py-8'>
          <h3 className='w-full py-4 text-lg text-white/60'>{`Gangsters featured in "${chapterName}"`}</h3>
          <div className='grid gap-4 grid-cols:4 md:grid-cols-6'>
            {named &&
              named.map((namedGangsterHash) => {
                const gangster = gangsters.find((g) => g.hash === namedGangsterHash)
                return gangster ? (
                  <div className='col-span-2 row-span-2' key={namedGangsterHash}>
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
                  <div key={miscGangsterHash}>
                    <ItemCard
                      key={gangster.id}
                      href={`https://asteroidprotocol.io/app/inscription/${gangster.hash}`}
                      itemName={gangster.name}
                      imageUrl={gangster.imageUrl}
                      traits={gangster.traits}
                      disableFlip
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
