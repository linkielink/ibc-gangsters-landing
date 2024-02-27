import { endpoints } from 'constants/contants'
import { GraphQLClient } from 'graphql-request'

export const graphqlClient = new GraphQLClient(endpoints.gql)
