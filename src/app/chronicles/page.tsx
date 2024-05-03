import Chapter from 'components/Chapter'
import Hero from 'components/Hero'
import SideNav from 'components/SideNav'
import { metaData } from 'constants/pageMetadata'
import Image from 'next/image'

export const metadata = metaData.chronicles

const chapters = ['The Big Hub', 'Godfather', 'A New Era']

export default function ChroniclesPage() {
  return (
    <>
      <Hero backgroundClass='bg-lore' />
      <SideNav articles={chapters} />
      <section className='w-full flex flex-col items-center justify-center py-20 px-4 max-w-[1024px] mx-auto relative'>
        <div className='flex flex-wrap gap-2 -mb-12'>
          <h1 className='w-full text-4xl text-center'>The IBC Chronicles</h1>
          <h2 className='w-full text-xl text-center text-white/60'>
            Welcome to the Inter Blockchain County
          </h2>
        </div>

        <Chapter chapterName={chapters[0]}>
          <Image
            src='/images/lore/cft-20.jpg'
            width={820}
            height={820}
            className='border-white border-[5px] float-right w-full md:w-[400px] lg:w-[520px] md:ml-8 mb-4 mt-2'
            alt='CFT-20 an earthlike dwarf planet'
          />
          <p className='mb-8 text-justify'>
            As you are approaching CFT-20, an earthlike dwarf planet nestled within the asteroid
            belt of the ROIDS solar system in the expansive Cosmoverse, you're greeted by its rugged
            beauty. As you get closer to this celestial oasis, the swirling mass of colossal
            asteroids encircling it creates an awe-inspiring backdrop, but also poses a formidable
            challenge to any traveler attempting to navigate through the dense asteroid belt to
            reach the planet.
          </p>
          <p className='my-8 text-justify'> You have clearly come a long way!</p>
          <p className='my-8 text-justify'>
            Looking down from above, you grasp the true expanse of the populated region on this
            planet, known as the Inter Blockchain County (IBC). Even amidst the colossal asteroids
            encircling CFT-20, the radiant lights of The Big Hub - the bustling capital city of the
            IBC - gleam like a beacon of hope.
          </p>
          <p className='my-8 text-justify'>
            Towering skyscrapers pierce the sky of the Big Hub, their luminous windows cutting
            through the surrounding darkness. From space, the shimmering glow of this huge city is
            unmistakable, a testament to the boldness and ambition of those who have staked their
            claim in this untamed frontier.
          </p>
          <p className='my-8 text-justify'>
            But don't be fooled by the dazzling skyline. The Big Hub is a city of stark contrasts, a
            place where people from all corners of the galaxy converge to make their mark. It's a
            melting pot of cultures and species each bringing their unique flair to the bustling
            streets.
          </p>
          <Image
            src='/images/lore/the-big-hub.jpg'
            width={820}
            height={600}
            className='border-white border-[5px] float-left w-full md:w-[450px] lg:w-[563px] md:mr-8 mb-4 mt-2'
            alt='The Big Hub - Capital of the IBC'
          />
          <p className='my-8 text-justify'>
            By day, The Big Hub buzzes with the sounds of business and chatter, a thriving
            metropolis where fortunes are made with a single deal. Yet beneath this veneer of
            progress lies a darker side. As night descends, the neon glow illuminates a different
            world - one where syndicates battle for control and vice and corruption are the currency
            of choice. In the labyrinth of shadowy alleys and hidden corners justice is fleeting,
            and alliances can shift in the blink of an eye. Here, the city never truly sleeps,
            survival depends on wits, cunning, and a generous dose of luck. Danger lurks in every
            shadow, but for those willing to take risks, the rewards can be immense.
          </p>
          <p className='my-8 text-justify'>
            Despite the chaos and turmoil, there's an undeniable sense of opportunity in the air.
            The IBC is a place where you can reinvent yourself, where the bold and daring can rise
            to the top, and where your fate is only limited by your imagination.
          </p>
          <p className='my-8 text-justify'>
            If you want to thrive here, you'll need to be sharp, resourceful, and ready to embrace
            the unexpected. Welcome to the Inter Blockchain County - where fortunes are made,
            alliances are broken, and legends are born.
          </p>
        </Chapter>
        <Chapter
          chapterName={chapters[1]}
          named={['2CC3C9DCE60B212E83E7F8E096034443BBB9588F30431079D5E828F2A78F04BE']}
        >
          <Image
            src='/images/lore/godfather.jpg'
            width={440}
            height={440}
            className='border-white border-[5px] float-right w-full md:w-[230px] lg:w-[320px] md:ml-8 mb-4 mt-2'
            alt='Nate "Godfather" Brooks - Father of the IBC Cronicles'
          />
          <p className='mb-8 text-justify'>
            The name's Nate Brooks, but folks 'round here know me as "Godfather", a title I earned
            through years of navigating the treacherous streets with cunning and charisma. I used to
            run these streets during the infancy of the IBC, when The Big Hub was still finding its
            footing and the notorious IBC Intruders were the only gang around. I was just a kid
            then, learning the ropes, figuring out how to survive in a city where if you weren't the
            hunter, you were the hunted.
          </p>
          <p className='my-8 text-justify'>
            I had a solid crew back then. Tight-knit and down for whatever. The kind of folks you
            knew had your back when things got hot. We moved as one, no hesitation, no
            second-guessing. That's how we rolled.
          </p>
          <p className='my-8 text-justify'>
            Nowadays, I'm a bit older and a lot wiser, watching the city from the sidelines. You
            don't grow old in the IBC, so I decided to preserve these stories and put them to paper
            for the generations to come. So consider me your guide through this neon jungle, where
            the streets are as dangerous as they are vibrant.
          </p>
          <p className='my-8 text-justify'>
            The IBC, the Inter Blockchain County that is, ain't like any place you've been before.
            It's a sprawling mess of syndicates, each claiming their piece of turf and fighting
            tooth and nail to keep it.
          </p>
          <p className='my-8 text-justify'>
            Everything goes down in The Big Hub, the capital city of the IBC. It's a place of bright
            lights and even darker corners, where the night never really ends, and everybody's
            working some kind of hustle. The syndicates are like a deck of cards, each with its own
            suit, but they're all playing the same game: power, respect, and cold hard cash. Step
            out of line, and you'll find yourself in a world of trouble.
          </p>
          <p className='my-8 text-justify'>
            So listen up, and I'll tell you what's what. I'll be your eyes and ears on the street,
            but you gotta keep your wits about you. The IBC's a cutthroat zone where power, loyalty,
            and betrayal are the real currency. If you're aiming to make it out in one piece, you
            better know who you can trust and who you need to dodge. Let's just say I've been around
            long enough to know the difference.
          </p>
        </Chapter>
        <Chapter
          chapterName={chapters[2]}
          named={[
            'DEA33D3691F15BBD4E3E1DE83847878DE33D1772F5313BE3372CE45FE1D5F591',
            'A8E95007C9DE7EB6DDE61A4EFAD48E0255FD1EF2EDF441B4BAFD8D0B729268E1',
            'D475F682BCFA4A1E998E9515F8157A628F57CB00DD9D61921B8C59DF18788F44',
            '68F60D217F9EF24997544B539D6E94EF2E54E1C49ED8863E7C234730C0CEC8F7',
            'CEC7B20BD51782296A2C0F18A98D8D91FA20A7FE4FC3B8BA0D9C424D7B4F0BBB',
            '9547E415D6BFCBC1E961DC787CBC5386CEE332E3B092BCF748610C2D912E88E8',
            '88F5E88B1D7CA69A6B8FEF7645584A5FF01A473C83EB71D44FA2E45513EF4B8A',
            '561C4DEBBD66B128AA4E105E4E4EBCC231729C5CAF2EE5AB4ECA9E9C2CBED682',
          ]}
          misc={[
            '4ED5549DF2BA182477A3347DD38DE868F7CEBB55AFF3D555D05E3FB2F0EE5396',
            '4257AD2EFF6E368785F828E2C4F73DBFC02B85A1BFDC108EF691986733EF5FD4',
            '8B1D4F228424A2FA5754282EE0AE28DBAABDBB42C28E0B05E515C17B4A08FCB5',
            '79333F8FE8F40CC80810448B884429D8C8789520CE36D884C4B1E60F16DA1B8E',
            'F43C41DE883CA75F5D4C09D8D7B8B55060EB780B56E2E8FC8A47678949A3B718',
            'FEBD9B9505F6E18A5FDE8EFE99805A477026388497F5349AC4D308BDBD8AB51E',
            'B26D183416822C8CB67C211969ED7E0DB2407E4B49F4EC94977F19AF250E7B6A',
            '87CED22C4409D9E5B698025646F1EB1830FF4CDF7862BC34954AEB7369A9185D',
            '06F67201FBAACED44CF23B90D8514A49C3BE997AA0D7950185A2C2B9691F2C74',
            '2CBD89D9A3E1B68EE4CFDB764275907A99FA344D7C604C65F1945C8D9CF5315B',
            '4F9CBD5C34D739CCB6FC0EEDAAE5EE428AE124EED0A658276C81B594E6731A24',
            'CA4999C81C1EC479845C4764F6EC6642900F6AB695E1663B75BFF5592C32B228',
            'B7EFD865012EF08517244251883D1E5F440A9E58DBCFAEEC3BF695453BBF822E',
            'BE3D3565D47A76D3B4606B3999CBD8E9098B5F2D6276E3ED13F6E5F262158247',
            'A3CEBBC4837743CEA176049971D91E3381EC8F8790378CED816E157FA4FED8FC',
            '2C837168326BBAF777DC6147C6A6E26182DB846F78DBA9C7E3F4C5E28FAD88B6',
            'F084F26F1F09FE714D60BBE90092C63880920409CF29219EA01BC8D646DA824E',
            '29180B84945501D9AD129DB79C540B48D92355CEA9632F7D870EC9ABDC81AF1F',
            '727DAE164EBF1C9885E253AA74FC22C341EE6A2A3C992930EB3D13D89505F660',
            '40F4307169A5FC89DC9A3DAAD01030BA96061868F4D2EFFB72AAE3F72BD228BC',
            'EFC46CD080126F38BEAE4AF812D06CE7BEE98E362832CC07604E75B4620108F6',
            '28FB08F65D0F52DF6BD29D7D9826E0B1087D394AC5487D487CDDDF6E1A172AFF',
            '04AA9EA568F7ECF0CA3AA6DFCA1686720AEC2415B3B2A934310047DE5C7573E9',
            '663D699E907F33BB5D39F995CC58B2310741C88FC99166671A9D971F123CACB1',
            '30EE9FE9D08AFCFAED5D49DD631FFEEEAA45B9F3FC0377DA175F18A421B3B5D3',
            '79DD2995E87971DAAA19516968B8E03C3629674BDD9C204EDEC30A5ADABC9ADF',
            'F87317271157AE83D6E73F939D7121C415EDAE43D200A6F7F8DAEBE9330AA875',
            'E2C0A89C3EDAD457CFA9D5E1ED71F254FE290FEFA80D10E3A9081213666E1E31',
            '9AC59F113DC0B7D351E89F2B640111083B1306366E4D82A9D4337D6672AFF0B9',
            '764AD0AEB64A371343B4DD16852B0667005B9605F2D23E853F7D6E7B6BD78D30',
            '2D00985944493A649BAD56D89C08A2F983B93A9C3FC87BC68E4079A794DE4E6F',
            'BD986EE1879CD45BAF739812953EB4CFEDAD3011D72E6861074FF2678876AE38',
            '2FBDCD983CDEC68C41D4AE22AE7EE7BBE8871C1735BAF5E1805BB61CFC2EF106',
            '56E3362141D39596D0AB0C188353E022D6D1BAC7691126525347F587753B6C04',
            '18428C0C1A855F182A99FA94EBB20CBCC163FB93EC2B4050F836B3E67B06147D',
            '5D053C808C3C0D38A9F780071711B78D94586461DF6115A02C13DF8052047394',
            '5565DCB9C1D5D16FB90D5FCA3723DAB8A1C729226E6F31951F9D06D6684F7635',
            'C52F77126D251D67E42D893E7A248C7275B6DA2E3DB326D447C369CB216EEEAC',
            'F90A670EE80F20BA58A14A37D65B707D39577C12C7FBDC8FFE2B90F629781417',
            'C8105D671A449F6AA20CBBD19EA66BAF4DBC1E7E03D68DC015D59AB15C9EB4B6',
            '504BB32BED1F4855DE18DE841B95533EB42FDFE89FC46D92E5188871A4EE53CD',
            '53BC83014B9D8F05919E2E722E9E2948DFB05757024D6155A9E5508DA4CE5750',
          ]}
        >
          <p className='mb-8 text-justify'>
            Back in the old days, the IBC Intruders was a tight-knit crew. We were the OGs - the
            “Original Gangsters” - running the streets, keeping order in our own rough way. But
            things change, don't they? We were young and hungry, always looking for the next big
            score. Some of us made it out, some didn't. And the rest? Well, they went their separate
            ways.
          </p>
          <Image
            src='/images/lore/a-new-era.jpg'
            width={820}
            height={420}
            className='border-white border-[5px] float-left w-full md:w-[500px] lg:w-[595px] md:mr-8 mb-4 mt-2'
            alt='A new chapter in the IBC has just begun.'
          />
          <p className='my-8 text-justify'>
            Some of the OGs figured they could hit the jackpot by linking up with other syndicates.
            The streets got wilder, the lights got flashier, and everyone was out there hustling for
            that paper. These folks scattered across the IBC, most heading to The Big Hub, chasing
            their come-up, trying to get a taste of the high life. A few of them still keep in
            touch. You know, old friends like "Scotty B.", "Bones", and "Iron Mike". They're solid
            folks.
          </p>
          <p className='my-8 text-justify'>
            But it ain't all sunshine and rainbows. When you've got that many old-school toughs
            looking for a new gig, it shakes things up. Every syndicate wants a piece of the action,
            and these OGs bring skills that can't be taught in any classroom. It's like throwing a
            lit match into a barrel of gasoline. The IBC is humming with energy, and you can feel
            the tension rising.
          </p>
          <p className='my-8 text-justify'>
            Me? I'm just sitting back, watching it all unfold. I know this city, and I know that
            when you have this many players with this much ambition, something's gonna give. These
            OGs are like sparks in the wind, and it's only a matter of time before they find
            something to ignite. So keep your eyes open and your ear to the ground. If you think the
            IBC is wild now, just wait — things are about to get interesting.
          </p>
        </Chapter>
        <p className='w-full py-20 text-4xl text-center'>To be continued...</p>
      </section>
    </>
  )
}
