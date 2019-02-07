import { NormalizedCacheObject } from 'apollo-cache-inmemory';
import ApolloClient from 'apollo-client';
import { NextContext } from 'next';

export interface INextContextWithApollo extends NextContext {
  apolloClient: ApolloClient<NormalizedCacheObject>;
}
