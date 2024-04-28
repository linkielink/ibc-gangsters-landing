import getBalance from 'hooks/fetch/getBalance'
import useSWR from 'swr'

export default function useBalance(denom: string, address: string) {
  const url = `https://cosmos-rest.publicnode.com/cosmos/bank/v1beta1/balances/${address}`

  return useSWR(url && denom && `getBalance/${address}/${denom}`, () => getBalance(url, denom), {
    revalidateOnFocus: false,
    refreshInterval: 10000,
  })
}
