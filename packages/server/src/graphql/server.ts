import { ApolloServer } from 'apollo-server-express';
import * as TypeGraphQL from 'type-graphql';
import { Container } from 'typedi';
import * as TypeORM from 'typeorm';

// Enteties
import User from '../entity/User';

// Resolvers
import UserResolver from '../resolvers/userResolver';

export interface IContext {
  user: User;
}

// register 3rd party IOC container
TypeGraphQL.useContainer(Container);
TypeORM.useContainer(Container);

export default async () => {
  // build TypeGraphQL executable schema
  const schema = await TypeGraphQL.buildSchema({
    resolvers: [UserResolver],
  });

  const server = new ApolloServer({ schema });

  return server;
};
