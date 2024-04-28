import getTokens from 'hooks/fetch/getTokens'
import useSWR from 'swr'

export default function useInscriptions() {
  return useSWR(`getTokens`, () => getTokens(), {
    revalidateOnFocus: false,
    refreshInterval: 30000,
  })
}
