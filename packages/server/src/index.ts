import { add } from '@myproject/common';
import * as express from 'express';
import 'reflect-metadata';

import apolloServer from './graphql/server';
import authMiddleware from './middlewares/auth';

import { createConnection } from 'typeorm';

const bootstrap = async () => {
  const app = express();

  app.use(authMiddleware);

  const server = await apolloServer();

  server.applyMiddleware({ app });

  const port = 4000;
  createConnection().then(() => {
    app.listen({ port }, async () => {
      process.stdout.write(
        `🚀 Server ready at http://localhost:${port}${server.graphqlPath} \n`,
      );
    });
  });

  add(2, 3);
};

bootstrap();
