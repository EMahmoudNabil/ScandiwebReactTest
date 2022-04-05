import {
    ApolloClient,
    InMemoryCache
  } from "@apollo/client";



  // read from graphql
export const client = new ApolloClient({
    uri: "http://localhost:4000/",
    cache: new InMemoryCache()
  }); 
