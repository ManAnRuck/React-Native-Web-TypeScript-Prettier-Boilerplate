import { ApolloClient, NormalizedCacheObject } from 'apollo-boost';
import { NextContext } from 'next';

export interface INextContextWithApollo extends NextContext {
  apolloClient: ApolloClient<NormalizedCacheObject>;
}
