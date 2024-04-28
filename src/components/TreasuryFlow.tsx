import AnimatedBar from 'components/AnimatedBar'
import FlowComponent from 'components/FlowComponent'

export default function TreasuryFlow() {
  return (
    <div className='relative w-full pt-8 pb-10'>
      <div className='flex items-center gap-4 pb-8'>
        <FlowComponent
          title='Market'
          subtext='asteroidprotocol.io'
          imageUrl='/images/market.jpg'
          href='https://asteroidprotocol.io'
        />
        <div className='flex flex-wrap w-full gap-8'>
          <div className='flex flex-wrap w-full gap-2'>
            <p className='w-full text-center'>Inscriptions / CFT-20 Tokens</p>
            <AnimatedBar type='inflow' arrow='right' />
          </div>

          <div className='flex flex-wrap w-full gap-2'>
            <AnimatedBar type='outflow' arrow='left' />
            <p className='w-full text-center'>ATOM</p>
          </div>
        </div>
        <FlowComponent
          title='Hotwallet'
          subtext='gangsterloot.cosmos'
          imageUrl='/images/hotwallet.jpg'
          href='https://www.mintscan.io/cosmos/address/cosmos1l0xuwxlu8znranhqrtk8wmyazze4h4z236pa5k'
        />
      </div>
      <div className='flex justify-between w-full h-[300px] gap-4 items-start'>
        <div className='flex flex-wrap w-[300px] gap-8 origin-top-left rotate-90 items-start ml-[150px]'>
          <div className='flex flex-wrap w-full gap-2'>
            <p className='w-full text-center'>IBC Gangsters</p>
            <AnimatedBar type='outflow' arrow='left' />
          </div>
          <div className='flex flex-wrap w-full gap-2'>
            <AnimatedBar type='inflow' arrow='right' />
            <p className='w-full text-center'>
              ATOM
              <br />
              (Sales / Royalties)
            </p>
          </div>
        </div>
        <div className='flex flex-wrap w-[300px] gap-8 origin-top-left rotate-90 items-start -mr-[240px]'>
          <div className='flex flex-wrap w-full gap-2'>
            <p className='w-full text-center'>Inscriptions / CFT-20 Tokens</p>
            <AnimatedBar type='inflow' arrow='right' />
          </div>
          <div className='flex flex-wrap w-full gap-2'>
            <AnimatedBar type='outflow' arrow='left' />
            <p className='w-full text-center'>ATOM</p>
          </div>
        </div>
      </div>
      <div className='flex items-center pt-8'>
        <FlowComponent
          title='Treasury'
          subtext='IBC Multisig - cosmos16xvaqwcr8rhcwawwq40mj6ttqeeydvvv2fm7gp'
          imageUrl='/images/treasury.jpg'
          href='https://asteroidprotocol.io/app/wallet/cosmos16xvaqwcr8rhcwawwq40mj6ttqeeydvvv2fm7gp'
          fullWidth
        />
      </div>
    </div>
  )
}
