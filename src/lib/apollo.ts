import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
    uri: 'https://api-sa-east-1.graphcms.com/v2/cl4nymf4x03dv01z81vz455v2/master',
    cache: new InMemoryCache()
})