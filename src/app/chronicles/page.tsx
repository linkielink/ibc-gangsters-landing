import ChroniclesContent from 'components/ChroniclesContent'
import ChroniclesHead from 'components/ChroniclesHead'
import ChroniclesPagination from 'components/ChroniclesPagination'
import ChroniclesSidenav from 'components/ChroniclesSidenav'
import Hero from 'components/Hero'
import { metaData } from 'constants/pageMetadata'

export const metadata = metaData.chronicles

export default function ChroniclesPage() {
  return (
    <>
      <Hero backgroundClass='bg-lore' />
      <ChroniclesSidenav />
      <section className='w-full flex flex-col items-center justify-center py-20 px-4 max-w-[1024px] mx-auto relative'>
        <ChroniclesHead />
        <ChroniclesContent />
        <ChroniclesPagination />
      </section>
    </>
  )
}
