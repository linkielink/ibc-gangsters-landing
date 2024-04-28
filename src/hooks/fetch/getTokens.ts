import { addresses, endpoints } from 'constants/contants'
import { GraphQLClient, gql } from 'graphql-request'

export default async function getTokens(): Promise<TokenData | undefined> {
  const graphQLClient = new GraphQLClient(endpoints.gql)
  try {
    return await graphQLClient.request(
      gql`
        query {
          token_holder(
            offset: 0
            limit: 500
            where: { address: { _eq: ${addresses.multisig} } }
          ) {
            token {
              ticker
              content_path
              max_supply
              circulating_supply
              decimals
              last_price_base
              transaction {
                hash
              }
            }
            amount
            date_updated
          }
        }
      `,
    )
  } catch (e) {
    console.error(e)
    return
  }
}
