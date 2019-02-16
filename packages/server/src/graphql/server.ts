import { ApolloServer } from 'apollo-server-express';
import * as TypeGraphQL from 'type-graphql';
import { Container } from 'typedi';
import * as TypeORM from 'typeorm';
import formatError from './formatErrors';

// Enteties
import User from '../entity/User';

export interface IContext {
  user: User;
}

// register 3rd party IOC container
TypeGraphQL.useContainer(Container);
TypeORM.useContainer(Container);

export default async () => {
  // build TypeGraphQL executable schema
  const schema = await TypeGraphQL.buildSchema({
    resolvers: [`${__dirname}/../modules/**/!(*.test).?(ts|js)`],
  });

  const server = new ApolloServer({
    schema,
    context: ({ req, res }: any) => ({ req, res }),
    formatError,
  });

  return server;
};
