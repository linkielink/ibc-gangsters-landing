import { addresses, endpoints } from 'constants/contants'
import { GraphQLClient, gql } from 'graphql-request'
import { useEffect, useState } from 'react'

const graphQLClient = new GraphQLClient(endpoints.gql)

export default function useTokens() {
  const [data, setData] = useState<TokenData>({ token_holder: [] })

  useEffect(() => {
    const getData = async () => {
      let data = { token_holder: [] }
      try {
        data = await graphQLClient.request(
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
      } finally {
        setData(data)
      }
    }
    getData()
  }, [])

  return data
}
