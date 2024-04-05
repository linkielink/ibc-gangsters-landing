import { addresses } from 'constants/contants'
import { useEffect, useState } from 'react'

export default function useBalance(denom: string) {
  const [data, setData] = useState<Coin>()
  const address = addresses.multisig
  const url = `https://cosmos-rest.publicnode.com/cosmos/bank/v1beta1/balances/${address}`
  useEffect(() => {
    const getData = async () => {
      const response = await fetch(url)

      if (response.ok) {
        const data = await response.json()
        data.balances.forEach((balance: Coin) => {
          if (balance.denom === denom) setData(balance)
        })
      }
    }
    getData()
  }, [])

  return data
}
