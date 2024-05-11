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

interface TreasuryItem {
  id: number
  name: string
  type: 'asset' | 'token' | 'inscription'
  href: string
  title: string
  hash: string
  description?: string
  balance?: number
  current_owner?: string
  content_path: string
  content_size_bytes?: number
  date_created?: string
  mime?: string
}

type SortDirection = 'id desc' | 'id asc' | 'name desc' | 'name asc'
