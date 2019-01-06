import { add } from '@myproject/common';
import { ApolloServer } from 'apollo-server-express';
import * as express from 'express';

import authMiddleware from './middlewares/auth';

import resolvers from './graphql/resolvers';
import typeDefs from './graphql/typeDefs';

const server = new ApolloServer({ typeDefs, resolvers });

const app = express();

app.use(authMiddleware);

server.applyMiddleware({ app });

const port = 4000;

app.listen({ port }, async () => {
  process.stdout.write(
    `🚀 Server ready at http://localhost:${port}${server.graphqlPath} \n`,
  );
});

add(4, 5);
