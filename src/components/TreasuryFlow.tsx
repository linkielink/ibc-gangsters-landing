import BigNumber from 'bignumber.js'
import AnimatedBar from 'components/AnimatedBar'
import FlowComponent from 'components/FlowComponent'
import { addresses } from 'constants/contants'
import useBalance from 'hooks/useBalance'

export default function TreasuryFlow() {
  const { data: hotwalletAtomBalance } = useBalance('uatom', addresses.hotwallet)

  return (
    <div className='relative w-full pt-8 pb-10'>
      <div className='flex items-center max-w-full gap-2 pb-6 md:gap-6'>
        <FlowComponent
          title='Market'
          copy='Asteroid Protocol'
          subtext=' '
          imageUrl='/images/market.jpg'
          href='https://asteroidprotocol.io/app/collection/GANGSTERS'
        />
        <div className='flex flex-wrap w-1/3 gap-6'>
          <div className='flex flex-wrap w-full gap-2'>
            <p className='w-full text-xs text-center break-words md:text-sm'>Art / CFT-20</p>
            <AnimatedBar type='inflow' arrow='right' />
          </div>

          <div className='flex flex-wrap w-full gap-2'>
            <AnimatedBar type='outflow' arrow='left' />
            <p className='w-full text-xs text-center md:text-sm'>ATOM</p>
          </div>
        </div>
        <FlowComponent
          title='Hot Wallet'
          copy='gangstersloot.cosmos'
          subtext={`${
            hotwalletAtomBalance
              ? BigNumber(hotwalletAtomBalance.amount).shiftedBy(-6).toPrecision(6)
              : 0
          } ATOM`}
          imageUrl='/images/hotwallet.jpg'
          href='https://www.mintscan.io/cosmos/address/cosmos1l0xuwxlu8znranhqrtk8wmyazze4h4z236pa5k'
        />
      </div>
      <div className='flex justify-between w-full h-[180px] md:h-[300px] gap-4 items-start'>
        <div className='flex flex-wrap w-[180px] md:w-[300px] gap-6 origin-top-left rotate-90 items-start  ml-[100px] md:ml-[210px]'>
          <div className='flex flex-wrap w-full gap-2'>
            <p className='w-full text-xs text-center md:text-sm'>IBC Gangsters</p>
            <AnimatedBar type='outflow' arrow='left' />
          </div>
          <div className='flex flex-wrap w-full gap-2'>
            <AnimatedBar type='inflow' arrow='right' />
            <p className='w-full text-xs text-center md:text-sm'>
              ATOM
              <br />
              (Sales / Royalties)
            </p>
          </div>
        </div>
        <div className='flex flex-wrap w-[180px] md:w-[300px] gap-6 origin-top-left rotate-90 items-start -mr-[170px] md:-mr-[180px]'>
          <div className='flex flex-wrap w-full gap-2'>
            <p className='w-full text-xs text-center md:text-base'>Art / CFT-20</p>
            <AnimatedBar type='inflow' arrow='right' />
          </div>
          <div className='flex flex-wrap w-full gap-2'>
            <AnimatedBar type='outflow' arrow='left' />
            <p className='w-full text-xs text-center md:text-base'>ATOM</p>
          </div>
        </div>
      </div>
      <div className='flex items-center pt-8'>
        <FlowComponent
          title='Treasury'
          copy='IBC Multisig'
          subtext='cosmos16xvaqwcr8rhcwawwq40mj6ttqeeydvvv2fm7gp'
          imageUrl='/images/treasury.jpg'
          href='https://asteroidprotocol.io/app/wallet/cosmos16xvaqwcr8rhcwawwq40mj6ttqeeydvvv2fm7gp'
          fullWidth
        />
      </div>
    </div>
  )
}
