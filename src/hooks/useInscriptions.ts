import getInscriptions from 'hooks/fetch/getInscriptions'
import useSWR from 'swr'

export default function useInscriptions() {
  return useSWR(`getInscriptions`, () => getInscriptions(), {
    revalidateOnFocus: false,
    refreshInterval: 30000,
  })
}
