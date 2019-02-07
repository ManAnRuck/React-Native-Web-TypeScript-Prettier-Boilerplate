import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloClient } from 'apollo-client';
import { createHttpLink } from 'apollo-link-http';

export const client = new ApolloClient({
  link: createHttpLink({ uri: 'http://localhost:4000/' }),
  cache: new InMemoryCache(),
  connectToDevTools: true,
});
