import { add } from '@myproject/common';
import { ApolloServer } from 'apollo-server';

import resolvers from './graphql/resolvers';
import typeDefs from './graphql/typeDefs';

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  process.stdout.write(`🚀  Server ready at ${url}\n`);
});

add(4, 5);
