import Hero from 'components/Hero'
import Roadmap from 'components/Roadmap'
import { metaData } from 'constants/pageMetadata'

export const metadata = metaData.treasury

export default function RoadmapPage() {
  return (
    <>
      <Hero />
      <Roadmap />
    </>
  )
}
