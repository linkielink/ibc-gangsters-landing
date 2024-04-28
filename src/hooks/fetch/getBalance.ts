export default async function getBalance(url: string, denom: string): Promise<Coin | undefined> {
  try {
    const response = await fetch(url)
    const data = await response.json()
    return data.balances.find((balance: Coin) => balance.denom === denom)
  } catch (e) {
    console.error(e)
    return
  }
}
