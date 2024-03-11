'use client'

import BigNumber from 'bignumber.js'
import { addresses } from 'constants/contants'
import useInscriptions from 'hooks/useInscriptions'
import useTokens from 'hooks/useTokens'
import { useMemo } from 'react'
import ItemCard from './ItemCard'

export default function Treasury() {
  const tokenData = useTokens()
  const inscriptionData = useInscriptions()

  const filteredInscriptions = useMemo(() => {
    const returnData: Inscription[] = []
    inscriptionData.inscription.forEach((ins) => {
      if (ins.name.includes('IBC Gangsters')) {
        const gangsterID = ins.name.split('#')[1]
        if (gangsterID && Number(gangsterID) <= 500) return
      }

      returnData.push(ins)
    })

    return { inscription: returnData }
  }, [inscriptionData])

  return (
    <section className='w-full flex flex-col items-center justify-center py-20 px-4 max-w-[1024px] mx-auto relative'>
      <h1 className='w-full pb-8 text-4xl text-center' id='name'>
        IBC Gangsters Treasury
      </h1>
      <h2 className='w-full px-2 pb-8 text-xl text-center break-words'>
        Multisig Address:{' '}
        <a
          href='https://asteroidprotocol.io/app/wallet/cosmos16xvaqwcr8rhcwawwq40mj6ttqeeydvvv2fm7gp'
          target='blank'
          className='hover:underline'
        >
          {addresses.multisig}
        </a>
      </h2>
      <h3 className='w-full pb-4 text-lg'>The IBC Gangsters Stash</h3>
      <section className='min-h-screen'>
        <div className='grid w-full grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4'>
          <>
            {tokenData.token_holder.map((holder) => (
              <ItemCard
                key={holder.token.transaction.hash}
                itemName={`${holder.token.ticker} Tokens`}
                href={`https://asteroidprotocol.io/app/market/${holder.token.ticker}`}
                imageUrl={holder.token.content_path}
                title={`Token: ${holder.token.ticker}`}
                hash={holder.token.transaction.hash}
                balance={new BigNumber(holder.amount).shiftedBy(-holder.token.decimals).toNumber()}
              />
            ))}
            {filteredInscriptions.inscription.map((ins) => (
              <ItemCard
                key={ins.id}
                itemName={ins.name}
                id={Number(ins.id - 1).toString()}
                href={`https://asteroidprotocol.io/app/inscription/${ins.transaction.hash}`}
                imageUrl={ins.content_path}
                title={`Inscription ${ins.name}`}
                hash={ins.transaction.hash}
              />
            ))}
          </>
        </div>
      </section>
    </section>
  )
}
