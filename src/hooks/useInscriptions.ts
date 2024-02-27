import { endpoints } from 'constants/contants'
import { GraphQLClient, gql } from 'graphql-request'
import { useEffect, useState } from 'react'

const graphQLClient = new GraphQLClient(endpoints.gql)

export default function useInscriptions() {
  const [data, setData] = useState<InscriptionData>({ inscription: [] })

  useEffect(() => {
    const getData = async () => {
      let data = { inscription: [] }
      try {
        data = await graphQLClient.request(
          gql`
            query {
              inscription(
                offset: 0
                limit: 500
                order_by: [{ date_created: desc }]
                where: { current_owner: { _eq: "cosmos16xvaqwcr8rhcwawwq40mj6ttqeeydvvv2fm7gp" } }
              ) {
                id
                transaction {
                  hash
                }
                current_owner
                content_path
                content_size_bytes
                date_created
                name: metadata(path: "$.metadata.name")
                description: metadata(path: "$.metadata.description")
                mime: metadata(path: "$.metadata.mime")
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
