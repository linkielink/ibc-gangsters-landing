interface TokenData {
  token_holder: TokenHolder[]
}

interface TokenHolder {
  token: {
    ticker: string
    content_path: string
    max_supply: number
    circulating_supply: number
    decimals: number
    last_price_base: number
    transaction: {
      hash: string
    }
  }
  amount: number
  date_updated: string
}

interface InscriptionData {
  inscription: Inscription[]
}

interface Inscription {
  id: number
  transaction: {
    hash: string
  }
  current_owner: string
  content_path: string
  content_size_bytes: number
  date_created: string
  name: string
  description: string
  mime: string
}
