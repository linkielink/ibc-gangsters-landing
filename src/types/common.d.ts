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
