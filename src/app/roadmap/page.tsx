import Hero from 'components/Hero'
import Roadmap from 'components/Roadmap'
import { metaData } from 'constants/pageMetadata'

export const metadata = metaData.roadmap

export default function RoadmapPage() {
  return (
    <>
      <Hero backgroundClass='bg-roadmap' />
      <Roadmap />
    </>
  )
}
