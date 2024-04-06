import Batches from 'components/Batches'
import Hero from 'components/Hero'
import { metaData } from 'constants/pageMetadata'

export const metadata = metaData.collection

export default function BatchesPage() {
  return (
    <>
      <Hero />
      <Batches />
    </>
  )
}
