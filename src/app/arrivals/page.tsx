import Batches from 'components/Batches'
import Hero from 'components/Hero'
import { metaData } from 'constants/pageMetadata'

export const metadata = metaData.arrivals

export default function ArrivalsPage() {
  return (
    <>
      <Hero backgroundClass='bg-arrivals' />
      <Batches />
    </>
  )
}
