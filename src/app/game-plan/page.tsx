import Hero from 'components/Hero'
import Roadmap from 'components/GamePlan'
import { metaData } from 'constants/pageMetadata'

export const metadata = metaData.gamePlan

export default function GamePlanPage() {
  return (
    <>
      <Hero backgroundClass='bg-roadmap' />
      <Roadmap />
    </>
  )
}
