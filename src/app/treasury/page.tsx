import Hero from 'components/Hero'
import Treasury from 'components/Treasury'
import { metaData } from 'constants/pageMetadata'

export const metadata = metaData.treasury

export default function TreasuryPage() {
  return (
    <>
      <Hero />
      <Treasury />
    </>
  )
}
