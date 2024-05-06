interface Gangster {
  id: number
  hash: string
  imageUrl: string
  name: string
  traits: Traits
}

interface Traits {
  sex: string
  outfit: string
  headwear: string
  shades: string
  bling: string
  syndicate: string
  nickname?: string
}

interface Coin {
  denom: string
  amount: string
}

interface GamePlanItem {
  imageUrl: string
  title: string
  intro: string
  steps?: GamePlanStep[]
  direction: 'ltr' | 'rtl'
}

interface GamePlanStep {
  description: string
  done: boolean
}

interface Chronicle {
  title: string
  named?: string[]
  misc?: string[]
  content: Content[]
}

type Content = TextContent | ImageContent

interface TextContent {
  type: 'text'
  text: string
}

interface ImageContent {
  type: 'image'
  src: string
  width: number
  height: number
  widths: string
  position: 'left' | 'right'
  alt: string
}
