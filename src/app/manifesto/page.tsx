import Hero from 'components/Hero'
import Manifesto from 'components/Manifesto'
import { metaData } from 'constants/pageMetadata'

export const metadata = metaData.manifesto

export default function ManifestoPage() {
  return (
    <>
      <Hero />
      <Manifesto />
    </>
  )
}
