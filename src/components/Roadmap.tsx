import classNames from 'classnames'
import TextImage from './TextImage'

function ArrowDown({ done }: { done?: boolean }) {
  return (
    <p className={classNames('w-full text-[50px] text-center', done ? 'text-migaloo' : 'text-ibc')}>
      ↓
    </p>
  )
}

export default function Roadmap() {
  return (
    <section className='flex flex-wrap w-full px-3 py-20 max-w-[1024px] mx-auto gap-8'>
      <h1 className='w-full text-4xl text-center'>The Road Ahead</h1>
      <TextImage
        imageUrl='/images/club.jpg'
        title='Asteroid Hustle: Launching the Gangster Odyseey'
        content={
          <>
            <p className='pb-4 text-sm'>
              Born tn the gritty streets of Earth, a crew of hustlers and dreamers gather in a dimly
              lit hideout amidst the vastness of the ROIDS solar system. Hungry for more outta life,
              they start stirrin' up trouble. From cookin' up a token to launchin' the IBC Gangster
              Collection, they hustle day and night to leave their mark on the world. The ride's
              just beginning, and they're primed to make waves.
            </p>
            <ul className='flex flex-wrap gap-2 pl-4 text-sm list-disc'>
              <li>Start Printin' Money &ndash; Cook Up the IBCG Token</li>
              <li>Bust Into the Art Scene &ndash; Craft the IBC Gangster Collection</li>
              <li>Spread the Word &ndash; Hit Up Twitter and Telegram</li>
              <li>Set Up Headquarters &ndash; Launch the Website</li>
              <li>Map Out the Hustle &ndash; Create a Game Plan</li>
            </ul>
          </>
        }
        direction='ltr'
        done
      />
      <ArrowDown done />
      <TextImage
        imageUrl='/images/bouncer.jpg'
        title='Calling All Mavericks : Exploring the Cosmos Awaits'
        content={
          <>
            <p className='pb-4 text-sm'>
              As the squad gains steam, they're tightenin' up operations, divvying tasks like pros,
              and working like a well-oiled machine. With a Treasury set up for future investments
              and new recruits comin' in, they're hustlin' hard and showin' the world they mean
              business. It's all about progress and playin' the long game to reach the top.
            </p>
            <ul className='flex flex-wrap gap-2 pl-4 text-sm list-disc'>
              <li>Secure the loot and Grow the Dough &ndash; Set Up the Treasury</li>
              <li>Bring in the New Blood &ndash; Push Out the First Batch of NFTs</li>
            </ul>
          </>
        }
        direction='rtl'
      />
      <ArrowDown />
      <TextImage
        imageUrl='/images/the-well.jpg'
        title="From Street Thugs to Cosmic Kings: The Gangsters' Rise to Interstellar Fame"
        content={
          <>
            <p className='pb-4 text-sm'>
              With a firm grip on the streets, the gangsters aim to grow their empire, hustlin' hard
              from shakin' down blocks to traffickin' art. They keep their pockets full, their crew
              happy, and their eyes on the prize. Cleanin' their dirty money and stackin' their
              liquidity pool, they're ready for whatever comes their way. Tough streets? They laugh
              in their face.
            </p>
            <ul className='flex flex-wrap gap-2 pl-4 text-sm list-disc'>
              <li>Art Trafficking &ndash; Fill the Vault with Valuable Art</li>
              <li>
                Clean up the dirty money and create a pool of liquidity &ndash; Laundered Liquidity
                Pool
              </li>
              <li>Demand your cut and collect the royalties &ndash; Royalty Roundup</li>
              <li>
                Scout out fresh streams of cash flow within the game &ndash; Hustle for Expansion
              </li>
              <li>Greet fresh blood to the gang &ndash; Launch the next wave of Inscriptions</li>
            </ul>
          </>
        }
        direction='ltr'
      />
      <ArrowDown />
      <TextImage
        imageUrl='/images/gangsters.jpg'
        title='The Double Cross: Navigating Betrayal in the Cosmos'
        content={
          <>
            <p className='pb-4 text-sm'>
              With power in their grasp and streets under their thumb, the gangsters face threats
              from all sides – rival gangs, old allies turnin' sour. But they ain't backin' down.
              Setting up a digital mob, they're keepin' operations smooth and enemies at bay.
              Launchin' new NFTs, they're showin' they're here to stay. It's risky, but they ain't
              flinchin'. Never have, never will.
            </p>
            <ul className='flex flex-wrap gap-2 pl-4 text-sm list-disc'>
              <li>Round up the digital crew and spark change &ndash; Hustle Hierarchy Shake-Up</li>
              <li>Unveil the Next Level &ndash; Collection Clash in the IBCG Cosmos</li>
            </ul>
          </>
        }
        direction='rtl'
      />
      <ArrowDown />
      <TextImage
        imageUrl='/images/future.jpg'
        title='Beyond the Stars: Our Journey Unfolds'
        content={
          <>
            <p className='pb-4 text-sm'>
              With their enemies vanquished, the crew stands at the dawn of a new era. The streets
              are theirs for the takin' and the future's lookin' bright. Only time will tell what
              adventures lie ahead. But one thing's for sure – they ain't goin' down without a
              fight.
            </p>
          </>
        }
        direction='ltr'
      />
    </section>
  )
}
