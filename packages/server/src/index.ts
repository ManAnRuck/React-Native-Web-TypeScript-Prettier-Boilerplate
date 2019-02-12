import { add } from '@myproject/common';
import * as express from 'express';
import 'reflect-metadata';

import apolloServer from './graphql/server';
import authMiddleware from './middlewares/auth';
import corsMiddleware from './middlewares/cors';
import redisMiddleware from './middlewares/redis';

import { createConnection } from 'typeorm';

const bootstrap = async () => {
  const app = express();

  // for cors
  app.set('trust proxy', 1);

  app.use(corsMiddleware);
  app.use(redisMiddleware);
  app.use(authMiddleware);

  const server = await apolloServer();

  server.applyMiddleware({ app, path: '/', cors: false });

  const port = 4000;
  createConnection()
    .then(() => {
      app.listen({ port }, async () => {
        process.stdout.write(
          `🚀 Server ready at http://localhost:${port}${server.graphqlPath} \n`,
        );
      });
    })
    .catch(error => console.error(error));

  add(2, 3);
};

bootstrap();
