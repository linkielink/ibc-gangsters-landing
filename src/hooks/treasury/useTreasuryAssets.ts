import BigNumber from 'bignumber.js'
import { addresses } from 'constants/contants'
import useBalance from 'hooks/useBalance'

export default function useTreasuryAssets() {
  const { data: atomBalance } = useBalance('uatom', addresses.multisig)

  return [
    {
      id: 1,
      type: 'asset',
      name: 'ATOM',
      title: 'ATOM',
      balance: new BigNumber(atomBalance?.amount ?? 0).shiftedBy(-6).toNumber(),
      content_path: '/images/atom.jpg',
      href: `https://www.mintscan.io/cosmos/address/${addresses.multisig}`,
      hash: 'Cosmos Staking Coin',
    },
  ] as TreasuryItem[]
}
