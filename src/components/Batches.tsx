import Batch from 'components/Batch'

export default function Batches() {
  return (
    <div className='w-full max-w-[1024px] mx-auto py-20'>
      <h1 className='text-4xl text-center'>Members</h1>
      <Batch
        batchId='1'
        intro="As the first 50 prospects to venture into the realm of the IBC Gangsters, these intrepid souls stand as the vanguard of our cosmic crew. Their courage knows no bounds as they step into the unknown, laying the foundation for our gang's legacy. With each step, they carve their mark on the digital landscape, shaping the future of our cosmic enterprise."
      />
    </div>
  )
}
