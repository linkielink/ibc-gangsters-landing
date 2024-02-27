import Collection from 'components/Collection'
import Hero from 'components/Hero'
import { metaData } from 'constants/pageMetadata'

export const metadata = metaData.collection

export default function Home() {
  return (
    <>
      <Hero />
      <Collection />
    </>
  )
}
