import Batch from 'components/Batch'
import Hero from 'components/Hero'
import { metaData } from 'constants/pageMetadata'

export const metadata = metaData.collection
export default function BatchPage({ params }: { params: { batch: string } }) {
  return (
    <>
      <Hero />
      <Batch batchId={params.batch ?? '1'} />
    </>
  )
}
