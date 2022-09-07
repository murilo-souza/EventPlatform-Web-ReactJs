import {ApolloClient, InMemoryCache} from '@apollo/client'

export const client = new ApolloClient({
    uri: 'https://api-sa-east-1.hygraph.com/v2/cl7rvcy0z6mqz01uh13h5glcw/master',
    cache: new InMemoryCache()
});