import classNames from 'classnames'
import TextImage from './TextImage'

function ArrowDown({ done }: { done?: boolean }) {
  return (
    <p className={classNames('w-full text-[50px] text-center', done ? 'text-done' : 'text-ibc')}>
      ↓
    </p>
  )
}

export default function GamePlan() {
  return (
    <section className='flex flex-wrap w-full px-3 py-20 max-w-[1024px] mx-auto gap-8'>
      <h1 className='w-full text-4xl text-center'>The Road Ahead</h1>
      <TextImage
        imageUrl='/images/club.jpg'
        title='Asteroid Hustle: Launching the Gangster Odyseey'
        content={
          <>
            <p className='pb-4 text-sm'>
              Born in the gritty streets of Earth, a crew of hustlers and dreamers gather in a dimly
              lit hideout amidst the vastness of the ROIDS solar system. Hungry for more outta life,
              they start stirrin&apos; up trouble. From cookin&apos; up a token to launchin&apos;
              the IBC Gangsters Collection, they hustle day and night to leave their mark on the
              world. The ride&apos;s just beginning, and they&apos;re primed to make waves.
            </p>
            <ul className='flex flex-wrap gap-2 pl-4 text-sm list-disc'>
              <li className='text-done'>
                Start Printin&apos; Money &ndash; Cook Up the IBCG Token
              </li>
              <li className='text-done'>
                Bust Into the Art Scene &ndash; Craft the IBC Gangsters Collection
              </li>
              <li className='text-done'>Spread the Word &ndash; Hit Up Twitter and Telegram</li>
              <li className='text-done'>Set Up Headquarters &ndash; Launch the Website</li>
              <li className='text-done'>Map Out the Hustle &ndash; Create a Game Plan</li>
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
              As the squad gains steam, they&apos;re tightenin&apos; up operations, divvying tasks
              like pros, and working like a well-oiled machine. With a Treasury set up for future
              investments and new recruits comin&apos; in, they&apos;re hustlin&apos; hard and
              showin&apos; the world they mean business. It&apos;s all about progress and
              playin&apos; the long game to reach the top.
            </p>
            <ul className='flex flex-wrap gap-2 pl-4 text-sm list-disc'>
              <li className='text-done'>
                Secure the loot and Grow the Dough &ndash; Set Up the Treasury
              </li>
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
              With a firm grip on the streets, the gangsters aim to grow their empire, hustlin&apos;
              hard from shakin&apos; down blocks to traffickin&apos; art. They keep their pockets
              full, their crew happy, and their eyes on the prize. Cleanin&apos; their dirty money
              and stackin&apos; their liquidity pool, they&apos;re ready for whatever comes their
              way. Tough streets? They laugh in their face.
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
              from all sides &ndash; rival gangs, old allies turnin&apos; sour. But they ain&apos;t
              backin&apos; down. Setting up a digital mob, they&apos;re keepin&apos; operations
              smooth and enemies at bay. Launchin&apos; new NFTs, they&apos;re showin&apos;
              they&apos;re here to stay. It&apos;s risky, but they ain&apos;t flinchin&apos;. Never
              have, never will.
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
              are theirs for the takin&apos; and the future&apos;s lookin&apos; bright. Only time
              will tell what adventures lie ahead. But one thing&apos;s for sure &ndash; they
              ain&apos;t goin&apos; down without a fight.
            </p>
          </>
        }
        direction='ltr'
      />
    </section>
  )
}
