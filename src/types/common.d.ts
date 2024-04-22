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
