import Batches from 'components/Batches'
import Hero from 'components/Hero'
import { metaData } from 'constants/pageMetadata'

export const metadata = metaData.members

export default function MembersPage() {
  return (
    <>
      <Hero backgroundClass='bg-members' />
      <Batches />
    </>
  )
}
