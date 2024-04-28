'use client'

import BigNumber from 'bignumber.js'
import ItemCard from 'components/ItemCard'
import { addresses } from 'constants/contants'
import useBalance from 'hooks/useBalance'
import useInscriptions from 'hooks/useInscriptions'
import useTokens from 'hooks/useTokens'
import { useMemo, useState } from 'react'
import TreasuryFlow from './TreasuryFlow'

export default function Treasury() {
  const { data: tokenData } = useTokens()
  const { data: inscriptionData } = useInscriptions()
  const { data: treasuryAtomBalance } = useBalance('uatom', addresses.multisig)
  const [treasuryFlow, setTreasuryFlow] = useState<boolean>(false)
  const filteredInscriptions = useMemo(() => {
    if (!inscriptionData) return { inscription: [] }
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
      <div className='flex flex-wrap justify-center w-full'>
        <button
          className='px-4 py-2 mb-4 transition-colors duration-500 rounded text-baserrr text-white/80 hover:text-white bg-white/10 hover:bg-white/20'
          onClick={() => setTreasuryFlow(!treasuryFlow)}
        >
          {treasuryFlow ? 'Hide Treasury Flow' : 'Show Treasury Flow'}
        </button>
        {treasuryFlow && <TreasuryFlow />}
      </div>
      <h3 className='w-full pb-4 text-lg'>The IBC Gangsters Stash</h3>
      <section className='min-h-screen'>
        <div className='grid w-full grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4'>
          {treasuryAtomBalance && (
            <ItemCard
              itemName='ATOM'
              href={`https://www.mintscan.io/cosmos/address/${addresses.multisig}`}
              imageUrl='/images/atom.jpg'
              title='ATOM'
              hash='Cosmos Staking Coin'
              balance={new BigNumber(treasuryAtomBalance.amount).shiftedBy(-6).toNumber()}
            />
          )}
          <>
            {tokenData &&
              tokenData.token_holder.map((holder) => (
                <ItemCard
                  key={holder.token.transaction.hash}
                  itemName={`${holder.token.ticker}`}
                  href={`https://asteroidprotocol.io/app/market/${holder.token.ticker}`}
                  imageUrl={holder.token.content_path}
                  title={`Token: ${holder.token.ticker}`}
                  hash={holder.token.transaction.hash}
                  balance={new BigNumber(holder.amount)
                    .shiftedBy(-holder.token.decimals)
                    .toNumber()}
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
