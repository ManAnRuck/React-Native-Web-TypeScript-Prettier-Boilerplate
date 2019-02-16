import { ApolloError } from 'apollo-server';
import CustomErrors from './errors';

export default (error: Error) => {
  if (error instanceof ApolloError) {
    return error;
  }
  console.log('logError', error);
  return CustomErrors[error.message];
};
