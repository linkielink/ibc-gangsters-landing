import classNames from 'classnames'
import TextImage from 'components/TextImage'
import React from 'react'

const gamePlan: GamePlanItem[] = [
  {
    imageUrl: '/images/club.jpg',
    title: 'Asteroid Hustle: Launching the Gangster Odyseey',
    intro:
      "Born in the gritty streets of Earth, a crew of hustlers and dreamers gather in a dimly lit hideout amidst the vastness of the ROIDS solar system. Hungry for more outta life, they start stirrin' up trouble. From cookin' up a token to launchin' the IBC Gangsters Collection, they hustle day and night to leave their mark on the world. The ride's just beginning, and they're primed to make waves.",
    steps: [
      { description: "Start Printin' Money – Cook Up the IBCG Token", done: true },
      {
        description: 'Bust Into the Art Scene – Craft the IBC Gangsters Collection',
        done: true,
      },
      { description: 'Spread the Word – Hit Up Twitter and Telegram', done: true },
      { description: 'Set Up Headquarters – Launch the Website', done: true },
      { description: 'Map Out the Hustle – Create a Game Plan', done: true },
    ],
    direction: 'ltr',
  },
  {
    imageUrl: '/images/bouncer.jpg',
    title: 'Calling All Mavericks : Exploring the Cosmos Awaits',
    intro:
      "As the squad gains steam, they're tightenin' up operations, divvying tasks like pros, and working like a well-oiled machine. With a Treasury set up for future investments and new recruits comin' in, they're hustlin' hard and showin' the world they mean business. It's all about progress and playin' the long game to reach the top.",
    steps: [
      { description: 'Secure the loot and Grow the Dough – Set Up the Treasury', done: true },
      {
        description: 'Bring in the New Blood – Push Out the First Batch of NFTs',
        done: false,
      },
    ],
    direction: 'rtl',
  },
  {
    imageUrl: '/images/the-well.jpg',
    title: "From Street Thugs to Cosmic Kings: The Gangsters' Rise to Interstellar Fame",
    intro:
      "With a firm grip on the streets, the gangsters aim to grow their empire, hustlin' hard from shakin' down blocks to traffickin' art. They keep their pockets full, their crew happy, and their eyes on the prize. Cleanin' their dirty money and stackin' their liquidity pool, they're ready for whatever comes their way. Tough streets? They laugh in their face.",
    steps: [
      { description: 'Art Trafficking – Fill the Vault with Valuable Art', done: true },
      {
        description:
          'Clean up the dirty money and create a pool of liquidity – Laundered Liquidity Pool',
        done: false,
      },
      {
        description: 'Demand your cut and collect the royalties – Royalty Roundup',
        done: false,
      },
      {
        description: 'Scout out fresh streams of cash flow within the game – Hustle for Expansion',
        done: false,
      },
      {
        description: 'Greet fresh blood to the gang – Launch the next wave of Inscriptions',
        done: false,
      },
    ],
    direction: 'ltr',
  },
  {
    imageUrl: '/images/gangsters.jpg',
    title: 'The Double Cross: Navigating Betrayal in the Cosmos',
    intro:
      "With power in their grasp and streets under their thumb, the gangsters face threats from all sides – rival gangs, old allies turnin' sour. But they ain't backin' down. Setting up a digital mob, they're keepin' operations smooth and enemies at bay. Launchin' new NFTs, they're showin' they're here to stay. It's risky, but they ain't flinchin'. Never have, never will.",
    steps: [
      {
        description: 'Round up the digital crew and spark change – Hustle Hierarchy Shake-Up',
        done: false,
      },
      {
        description: 'Unveil the Next Level – Collection Clash in the IBCG Cosmos',
        done: false,
      },
    ],
    direction: 'rtl',
  },
  {
    imageUrl: '/images/future.jpg',
    title: 'Beyond the Stars: Our Journey Unfolds',
    intro:
      "With their enemies vanquished, the crew stands at the dawn of a new era. The streets are theirs for the takin' and the future's lookin' bright. Only time will tell what adventures lie ahead. But one thing's for sure – they ain't goin' down without a fight.",
    direction: 'ltr',
  },
]

function GamePlanContent({ item }: { item: GamePlanItem }) {
  return (
    <>
      <p className='pb-4 text-sm text-white/60'>{item.intro}</p>
      {item.steps && (
        <ul className='flex flex-wrap gap-2 pl-4 text-sm list-disc'>
          {item.steps.map((step, index) => (
            <li key={index} className={classNames(step.done && 'text-done')}>
              {step.description}
            </li>
          ))}
        </ul>
      )}
    </>
  )
}

function ArrowDown({ done }: { done?: boolean }) {
  return (
    <p
      className={classNames('w-full text-[50px] text-center', done ? 'text-done' : 'text-white/40')}
    >
      ↓
    </p>
  )
}

export default function GamePlan() {
  return (
    <section className='flex flex-wrap w-full px-3 py-20 max-w-[1024px] mx-auto gap-8'>
      <h1 className='w-full text-4xl text-center'>The Road Ahead</h1>
      {gamePlan.map((item, index) => (
        <React.Fragment key={index}>
          <TextImage
            imageUrl={item.imageUrl}
            title={item.title}
            content={<GamePlanContent item={item} />}
            direction={item.direction}
            done={item.steps?.every((step) => step.done)}
          />
          {index !== gamePlan.length - 1 && (
            <ArrowDown done={item.steps?.every((step) => step.done)} />
          )}
        </React.Fragment>
      ))}
    </section>
  )
}
