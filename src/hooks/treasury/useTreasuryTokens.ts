import BigNumber from 'bignumber.js'
import useTokens from 'hooks/useTokens'
import { useMemo } from 'react'

export default function useTreasuryTokens() {
  const { data: tokenData } = useTokens()

  const tokens = useMemo(() => {
    if (!tokenData) return []
    const treasuryTokens: TreasuryItem[] = []
    tokenData.token_holder.forEach((holder) => {
      treasuryTokens.push({
        id: holder.token.id,
        type: 'token',
        title: `Token: ${holder.token.ticker}`,
        balance: new BigNumber(holder.amount).shiftedBy(-holder.token.decimals).toNumber(),
        hash: holder.token.transaction.hash,
        name: holder.token.ticker,
        content_path: holder.token.content_path,
        href: `https://asteroidprotocol.io/app/market/${holder.token.ticker}`,
      } as TreasuryItem)
    })
    return treasuryTokens
  }, [tokenData])

  return tokens
}
