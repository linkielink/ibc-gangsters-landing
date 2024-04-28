import { endpoints } from 'constants/contants'
import { GraphQLClient, gql } from 'graphql-request'

export default async function getInscriptions(): Promise<InscriptionData | undefined> {
  const graphQLClient = new GraphQLClient(endpoints.gql)
  try {
    return await graphQLClient.request(
      gql`
        query {
          inscription(
            offset: 0
            limit: 1000
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
  } catch (e) {
    console.error(e)
    return
  }
}
