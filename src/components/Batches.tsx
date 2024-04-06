import Batch from 'components/Batch'

export default function Batches() {
  return (
    <div className='w-full max-w-[1024px] mx-auto py-20 '>
      <h1 className='w-full pb-8 text-4xl text-center'>All IBC Gangsters Release Batches</h1>
      <Batch batchId='1' />
      <Batch batchId='2' />
      <Batch batchId='3' />
      <Batch batchId='4' />
      <Batch batchId='5' />
      <Batch batchId='6' />
      <Batch batchId='7' />
      <Batch batchId='8' />
      <Batch batchId='9' />
    </div>
  )
}
